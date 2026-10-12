import { useState } from "react"

const BOOTDEV_THUMBNAIL =
  "https://api.boot.dev/v1/users/public/aa4488a9-52cb-45f6-a1d9-296af2531fbf/thumbnail"

const WORKS = [
  "メイジャン子供向けのミニゲーム導入に協力",
  "小学生の学習用アプリの実装、運用改善",
  "ローカライズの実装、翻訳シート抽出と導入",
  "複数知育アプリの移植と保守運用",
]

export function Experience() {
  const [bootdevImageFailed, setBootdevImageFailed] = useState(false)

  return (
    <div>
      <h2 className="section-head">経験</h2>

      <div className="panel">
        <h3 className="subhead">業務経験</h3>
        <ul className="list">
          {WORKS.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
      </div>

      <div className="panel mt-6">
        <h3 className="subhead">自習の証明（boot.dev）</h3>
        {!bootdevImageFailed && (
          <img
            src={BOOTDEV_THUMBNAIL}
            alt="boot.dev 学習進捗"
            className="bootdev-img"
            onError={() => setBootdevImageFailed(true)}
          />
        )}
        {bootdevImageFailed && (
          <p className="bootdev-fallback">画像を読み込めませんでした。</p>
        )}
        <a
          className="bootdev-link"
          href={BOOTDEV_THUMBNAIL}
          target="_blank"
          rel="noopener noreferrer"
        >
          boot.devの学習実績を画像で見る
        </a>
      </div>
    </div>
  )
}
