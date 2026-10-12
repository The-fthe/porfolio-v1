import assert from "node:assert/strict"
import { readdir, readFile, stat } from "node:fs/promises"
import test from "node:test"

const distUrl = new URL("../pages-dist/", import.meta.url)

async function readDistFile(relativePath) {
  return readFile(new URL(relativePath, distUrl), "utf8")
}

test("プロフィールをルートに残し、Military2Dを独立ページとして出力する", async () => {
  const profileHtml = await readDistFile("index.html")
  const gameHtml = await readDistFile("military2d/index.html")

  assert.match(profileHtml, /<title>ランキー \| ゲームプログラマー<\/title>/)
  assert.match(profileHtml, /\/porfolio-v1\/assets\/[^"']+\.js/)
  assert.match(gameHtml, /<title>Military2D \| 2Dタンクアクション<\/title>/)
  assert.match(gameHtml, /\/porfolio-v1\/assets\/[^"']+\.js/)
})

test("ゲーム素材がPages成果物に含まれ、bundleがドメイン直下を参照しない", async () => {
  const expectedAssets = [
    "legacy/tank-hero.webp",
    "legacy/ai-path.webp",
    "legacy/multiplatform.webp",
    "legacy/gameplay.webm",
    "legacy/DelaGothicOne-subset.woff2",
  ]

  for (const asset of expectedAssets) {
    const info = await stat(new URL(asset, distUrl))
    assert.ok(info.isFile(), `${asset} is missing from pages-dist`)
  }

  const assetFiles = await readdir(new URL("assets/", distUrl))
  const bundles = await Promise.all(
    assetFiles
      .filter((name) => name.endsWith(".js") || name.endsWith(".css"))
      .map((name) => readDistFile(`assets/${name}`)),
  )
  const compiledAssets = bundles.join("\n")

  assert.doesNotMatch(compiledAssets, /["'`]\/legacy\//)
  assert.match(compiledAssets, /\/porfolio-v1\/military2d\//)
  assert.match(compiledAssets, /legacy\/tank-hero\.webp/)
  assert.match(compiledAssets, /legacy\/gameplay\.webm/)
})

test("boot.devのプロフィールへ直接リンクする", async () => {
  const assetFiles = await readdir(new URL("assets/", distUrl))
  const profileBundleName = assetFiles.find((name) => name.startsWith("profile-") && name.endsWith(".js"))

  assert.ok(profileBundleName, "profile bundle is missing")
  const profileBundle = await readDistFile(`assets/${profileBundleName}`)

  assert.match(profileBundle, /boot\.devのプロフィールを見る/)
  assert.match(profileBundle, /https:\/\/www\.boot\.dev\/u\/lam/)
  assert.doesNotMatch(profileBundle, /api\.boot\.dev\/v1\/users\/public\/.+\/thumbnail/)
})

test("第三者ライセンスと原文を配信し、ポートフォリオのフッターにはリンクを表示しない", async () => {
  const noticePage = await readDistFile("legal/third-party/index.html")
  const noticeText = await readDistFile("legal/third-party/THIRD_PARTY_NOTICES.txt")
  const assetFiles = await readdir(new URL("assets/", distUrl))
  const profileBundleName = assetFiles.find((name) => name.startsWith("profile-") && name.endsWith(".js"))

  assert.ok(profileBundleName, "profile bundle is missing")
  const profileBundle = await readDistFile(`assets/${profileBundleName}`)

  for (const product of ["React", "Vite", "Tailwind CSS", "vinext", "Rolldown", "Dela Gothic One", "Geist"]) {
    assert.match(noticePage, new RegExp(product))
  }
  assert.match(noticeText, /Permission is hereby granted, free of charge/)
  assert.match(noticeText, /SIL OPEN FONT LICENSE Version 1\.1/)
  assert.doesNotMatch(profileBundle, /第三者ライセンス/)
  assert.doesNotMatch(profileBundle, /legal\/third-party\//)
})

test("両公開ページに固定canonicalと共有用メタデータを出力する", async () => {
  const pages = [
    {
      html: await readDistFile("index.html"),
      canonical: "https://the-fthe.github.io/porfolio-v1/",
      image: "https://the-fthe.github.io/porfolio-v1/og.png",
      title: "ランキー | ゲームプログラマー",
    },
    {
      html: await readDistFile("military2d/index.html"),
      canonical: "https://the-fthe.github.io/porfolio-v1/military2d/",
      image: "https://the-fthe.github.io/porfolio-v1/og.jpg",
      title: "Military2D | 2Dタンクアクション",
    },
  ]

  for (const page of pages) {
    assert.match(page.html, new RegExp(`<link rel="canonical" href="${page.canonical}"`))
    assert.match(page.html, new RegExp(`<meta property="og:url" content="${page.canonical}"`))
    assert.match(page.html, new RegExp(`<meta property="og:title" content="${page.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`))
    assert.match(page.html, new RegExp(`<meta property="og:image" content="${page.image.replaceAll(".", "\\.")}"`))
    assert.match(page.html, /<meta name="twitter:card" content="summary_large_image"/)
    assert.match(page.html, /<meta name="twitter:title"/)
    assert.match(page.html, /<meta name="twitter:description"/)
    assert.match(page.html, new RegExp(`<meta name="twitter:image" content="${page.image.replaceAll(".", "\\.")}"`))
  }
})

test("データ取扱いの文書を配信し、作品の独立ページから案内する", async () => {
  const privacy = await readDistFile("legal/privacy/index.html")
  const assetFiles = await readdir(new URL("assets/", distUrl))
  const profileBundleName = assetFiles.find((name) => name.startsWith("profile-") && name.endsWith(".js"))
  const militaryBundleName = assetFiles.find((name) => name.startsWith("military2d-") && name.endsWith(".js"))

  assert.ok(profileBundleName, "profile bundle is missing")
  assert.ok(militaryBundleName, "military bundle is missing")

  for (const term of ["boot.dev", "i.ytimg.com", "メールソフト", "サーバーへ送信・保存", "ファイルアップロード", "アクセス解析", "広告", "localStorage"]) {
    assert.match(privacy, new RegExp(term))
  }

  const [profileBundle, militaryBundle] = await Promise.all([
    readDistFile(`assets/${profileBundleName}`),
    readDistFile(`assets/${militaryBundleName}`),
  ])
  assert.doesNotMatch(profileBundle, /legal\/privacy\//)
  assert.match(militaryBundle, /legal\/privacy\//)
})
