---
name: Portfolio prototype candidates A B C
description: Three unselected disposable systems; no production defaults
colors:
  a-ink: "#29322f"
  a-paper: "#f6f8f5"
  a-line: "#c9cdc6"
  a-muted: "#58635c"
  a-accent: "#315745"
  b-ink: "#263c39"
  b-paper: "#f5f6f3"
  b-line: "#c5d1ca"
  b-muted: "#4f6661"
  b-accent: "#235b4e"
  b-profile: "#e4ebe4"
  c-ink: "#42332a"
  c-paper: "#faf1e5"
  c-line: "#dbc9b6"
  c-muted: "#715d4d"
  c-accent: "#974428"
  c-tab-active: "#f2dfca"
  focus: "#a74622"
  button-text: "#f6f8f5"
  button-hover-ab: "#223d30"
  button-hover-c: "#78371f"
typography:
  body:
    fontFamily: "PortfolioSans, 'Yu Gothic', sans-serif"
    lineHeight: 1.95
  a-display:
    fontFamily: "PortfolioSerif, serif"
    fontSize: "clamp(28px,3.15vw,46px)"
    fontWeight: 500
    lineHeight: 1.5
  b-display:
    fontFamily: "PortfolioSans, 'Yu Gothic', sans-serif"
    fontSize: "clamp(23px,2.5vw,36px)"
    fontWeight: 500
    lineHeight: 1.5
  c-display:
    fontFamily: "PortfolioSerif, serif"
    fontSize: "clamp(31px,3.4vw,49px)"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  portrait: "50%"
  review-bar: "10px"
  review-button: "5px"
spacing:
  a-c-margin: "clamp(24px,5vw,80px)"
  b-content: "clamp(24px,5vw,75px)"
  mobile-margin: "22px"
  project-gap: "30px"
components:
  a-button:
    backgroundColor: "{colors.a-accent}"
    textColor: "{colors.button-text}"
    padding: "12px 18px"
  b-button:
    backgroundColor: "{colors.b-accent}"
    textColor: "{colors.button-text}"
    padding: "9px 12px"
  c-button:
    backgroundColor: "{colors.c-accent}"
    textColor: "{colors.button-text}"
    padding: "12px 18px"
---

# Design System: 比較中の3候補

## Overview

この文書はA・B・Cの現状を記録した候補資料です。採用されたシステムや本番の既定値を定義するものではありません。対象はこのディレクトリ内だけで、値の出典は `prototype.css`、挙動の出典は `prototype.js` と `index.html` です。

日本のゲーム会社の採用担当者に、実際の作品と担当内容を日本語で見せます。Aは作品展示、Bは採用向け、Cは制作ノート。同じ作品・経歴で構成を比較します。一般的なAI生成ページに見える画一的な構成を減らす方針は、プロジェクトの `PRODUCT.md` に基づきます。候補名は説明用で、ブランド名としての採用は未決定です。

## Colors

前付けの `a-*` / `b-*` / `c-*` は独立した候補の値です。Aは淡い背景と濃い緑、Bは緑のプロフィール面と青緑の本文、Cは暖色の紙面と茶色のアクセントを使います。CSSでは各候補内の `--paper`、`--ink`、`--muted`、`--line`、`--accent` に対応します。

フォーカス色は共通です。A/Bのリンクボタンは共通のホバー色、Cは専用のホバー色を使います。比較バーと比較欄の配色は確認用UIで、どの候補の本番システムにも属しません。

## Typography

本文は同梱のNoto Sans JP（`PortfolioSans`、400）、A/Cの見出しはNoto Serif JP（`PortfolioSerif`、500）。本文説明は通常13–14px、補足は11–12pxです。見出しの行高は1.5、段落は1.95。Bの冒頭見出しはサンセリフを使います。前付けの表示サイズはデスクトップの定義で、760px以下ではAが30px、Bが25px、Cが32pxです。

## Layout

| 候補 | デスクトップの構成 | 760px以下 |
| --- | --- | --- |
| A | 白路の実画面と説明を `2.7fr / 1fr` に配置。ほかの作品は `1.15fr / 1fr` の行で、次の作品は左右を入れ替える | 画像と説明を縦に置き、作品行の表示順を戻す |
| B | 幅270pxのプロフィール欄と本文。プロフィールは画面上部に固定し、業務作品を先に掲載 | プロフィールを上部に置き、作品行は縦並び |
| C | 幅220pxの作品索引と本文。選択した作品の画像・制作メモを表示 | 索引を横並びのタブにし、本文を縦に配置 |

1100px以下ではAの主画像を `2fr / 1fr` に、Bのプロフィールを215pxに、Cの索引を170pxに縮めます。Cの画像・説明はこの段階で組み替えます。1600px以上のA/Cは最大幅1400px。画像は16:9、`object-fit: contain` を使い、公開ゲーム画面の全体を見せます。

## Elevation & Depth

候補の本文は影を使わず、背景色と1pxの区切り線で整理しています。確認用の固定バーだけが `0 7px 22px #17251e26` の影を持ちます。

## Shapes

本文の画像、リンクボタン、フィルター、作品タブは角を丸めていません。Bのプロフィール画像のみ円形。確認用バーは10px、そのボタンは5pxの角丸です。

## Components

- A：白路の実画面を大きく掲載し、制作上の調整は `details` で開く。ほかの作品を同じカードへ揃えず、行の左右を入れ替えます。
- B：業務作品を先頭に置き、担当内容を表示。「すべて」「業務作品」「個人制作」で絞り込み、件数を通知します。選択状態は `aria-pressed` で示します。
- C：作品索引と一つの `tabpanel`。矢印・Home・Endでタブを選びます。白路には操作説明画像と制作メモを添え、Military2Dのメモ見出しは「公開について」です。
- 共通：外部リンクは別タブ。連絡先コピーは成否を表示。Military2Dは「制作形態：個人制作」とし、未確認の担当内容を補いません。
- 確認用UI：案の表示、比較欄、候補選択。案の矢印操作は確認用バーにフォーカスがある場合だけ有効です。選択はページ内の状態で、本番設定への保存はありません。

## Do's and Don'ts

- Do：候補の値を変更したら、この資料も対応する候補だけ更新する。実画面、個人制作と業務作品の区別、確認済みの担当内容を保つ。
- Do：フォーカスの3px輪郭と5pxの間隔を保つ。`prefers-reduced-motion: reduce` ではスクロールを即時にする。
- Don't：この3候補を本番の共通テーマとして扱わない。採用案の決定、既存ページへの反映、公開の判断は別に行う。
- Don't：スクリーンショットをゲーム全体の録画やスマートフォン実機での動作証拠として扱わない。
