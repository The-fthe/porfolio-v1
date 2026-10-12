---
name: Portfolio Selected A
description: 実際の作品画像を大きく見せる、日本語のゲーム制作ポートフォリオ
colors:
  primary: "#315745"
  primary-hover: "#223d30"
  ink: "#29322f"
  paper: "#f6f8f5"
  line: "#c9cdc6"
  muted: "#58635c"
  focus: "#a74622"
  selection: "#d9e5bf"
  selection-ink: "#202a24"
  featured-image-bg: "#f1eada"
  project-image-bg: "#edece7"
typography:
  display:
    fontFamily: "PortfolioSerif, serif"
    fontSize: "clamp(28px, 3.15vw, 46px)"
    fontWeight: 500
    lineHeight: 1.5
  featured-title:
    fontFamily: "PortfolioSerif, serif"
    fontSize: "clamp(34px, 4vw, 58px)"
    fontWeight: 500
    lineHeight: 1.3
  section-title:
    fontFamily: "PortfolioSerif, serif"
    fontSize: "28px"
    fontWeight: 500
    lineHeight: 1.5
  project-title:
    fontFamily: "PortfolioSans, 'Yu Gothic', sans-serif"
    fontSize: "27px"
    fontWeight: 500
    lineHeight: 1.5
  body:
    fontFamily: "PortfolioSans, 'Yu Gothic', sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.95
  label:
    fontFamily: "PortfolioSans, 'Yu Gothic', sans-serif"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: ".025em"
spacing:
  link-gap: "18px"
  mobile-gutter: "22px"
  compact-grid-gap: "28px"
  nav-gap: "30px"
  footer-gap: "40px"
  page-gutter: "clamp(24px, 5vw, 80px)"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.paper}"
    padding: "12px 18px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  text-link:
    textColor: "{colors.ink}"
    size: "13px"
  copy-email:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "10px 0"
    size: "14px"
  navigation:
    textColor: "{colors.ink}"
    size: "14px"
  disclosure:
    textColor: "{colors.ink}"
    size: "12px"
---

# Design System: Portfolio Selected A

## Overview

**Creative North Star: "作品展示"**

採用されたA案を、実装済みのルートページから記録した。冷たい緑を含む明るい地に、実際の作品画像と日本語の説明を置く。白路の大きな画像を入口にし、余白と細い区切り線で作品と担当内容を読み進められる構成にする。

対象は `app/components/PortfolioShowcase.tsx` と `app/showcase.css` の `.showcase` 内。Military2Dの作品紹介ページは独立した既存のスタイルを保つ。この文書の値をサイト全体へ適用しない。比較用のB/C案に残っているCSSは抽出対象から外した。

**Key Characteristics:**

- 実際のゲーム画像と短い説明を組み合わせる。
- 日本語のセリフ体見出しとサンセリフ体本文を使い分ける。
- 作品ごとの担当、業務経験、連絡先へ順に進める。

## Colors

### Primary

落ち着いた深緑の `primary` を、作品を遊ぶ・紹介を見るボタンに使う。ホバー時は `primary-hover` に変わる。

### Neutral

`paper` はページの地、`ink` は本文、`muted` は分類・補足・キャプション、`line` は区切り線に使う。作品画像の余白は、白路では `featured-image-bg`、ほかの作品では `project-image-bg` で受ける。

`focus` はキーボード操作時の輪郭、`selection` と `selection-ink` は文字選択に使う。

## Typography

PortfolioSerifはNoto Serif JPのローカル配信フォント（500）、PortfolioSansはNoto Sans JPのローカル配信フォント（400）。両方とも `font-display: swap` を使う。ファイルは `public/portfolio/` にあり、OFLのライセンスは `FONT-LICENSE.txt` に保持する。CSSが指定する500・700のうち、配信されるSansのフェイスは400のみである。

冒頭見出しと白路の作品名、セクション見出しはセリフ体。ほかの作品名、本文、ナビゲーションはサンセリフ体。本文サイズは主にbody、担当説明とリンクは13px、分類はlabel、キャプションと補足は11px。経歴見出しはsection-titleと同じサイズで、重みは継承された700になる。

見出しは `text-wrap: balance`、本文段落はbodyの行間を使う。白路の説明幅は30ch、経歴の導入は42chを上限とし、モバイルでは解除する。

## Layout

左右の余白はpage-gutter。1600px以上では本文・ヘッダー・フッターを最大1400pxで中央に置く。白路は画像と説明の2列（`minmax(0, 2.7fr) minmax(230px, 1fr)`）、間隔は4.6%。1100px以下では2:1の列比とcompact-grid-gapを使う。

ほかの作品は1.15:1の2列、間隔7%。2つ目の作品だけ画像と説明を左右反転する。画像は16:9の枠に `object-fit: contain` で収め、キャプションを添える。経歴は2列、間隔8%。

760px以下で作品・経歴・フッターを1列にし、左右をmobile-gutterに変える。反転した作品も画像、説明の順に戻す。冒頭見出しは30px、白路の作品名は36px、セクションとほかの作品名は24px。ナビゲーションは12px、間隔18pxとし、ブランド横の本名を非表示にする。フッターの外部リンクは横並びになる。

## Elevation & Depth

採用Aの表示要素に影はない。地の色、画像の余白、1pxの区切り線で領域を分ける。ホバーで浮かせるアニメーションやトランジションは定義されていない。ページ内移動の滑らかなスクロールは、動きを減らす設定で無効になる。

## Shapes

画像と主要ボタンは直角を保ち、丸いカードへまとめない。主要ボタンは1pxの深緑の枠、メールコピーは本文色の下線を使う。フォーカスは3pxの輪郭と5pxの外側余白で示す。

## Components

主要ボタンは最小44pxの高さで、右に矢印または外部リンクの線画アイコンを置く。開発記録とboot.devは小さなテキストリンク。外部リンクのアイコンは15px、主要ボタン内は17pxである。

白路には実際のステージ選択画像と作品紹介を添える。担当説明の独立欄とdetails/summaryは表示しない。ほかの作品は交互の画像行と担当欄で見せる。

経歴は卒業・勤務・実習・現在の求職状況を年表で示し、日本語・英語・中国語・広東語を添える。強みの説明は短い一文にまとめ、案件名は伏せる。boot.devは本人のプロフィールへのテキストリンクとして置く。

連絡先ではメールをコピーするボタン、表示アドレス、成功・失敗を伝えるライブ領域を使う。現在の連絡先は `the.fthe.job@gmail.com`。フッターの外部リンクはGitHub・LinkedIn・Xで、最下部には著作権表示を置く。

2026年10月12日の調整では、本文幅は最大1200px、経歴・連絡先は最大960px。白路は1.85:1、ほかの作品は1.4:1の段組みで、作品間の余白に強弱をつける。冒頭にクライアントプログラマーとして実務約4年と示す。ナビゲーションと補助リンクは高さ・幅とも44px以上の操作領域を確保し、キャプションは12px、年表の年月は13pxとする。

## Do's and Don'ts

### Do:

- 実際の作品画像と確認済みの担当内容を使う。
- 採用Aのスタイルを `.showcase` 内に閉じる。
- フォントのライセンスファイルを保持する。

### Don't:

- ポートフォリオのルートに比較ツールバーを表示しない。
- ルートのフッターに「第三者ライセンス」「プライバシー」リンクを戻さない。
- Military2Dの独立したスタイルをこの文書の値で上書きしない。
