# ランキーのポートフォリオ

ゲームプログラマーとしての作品、経歴、得意なことを紹介するサイトです。トップページにポートフォリオ、`/military2d/` に自主制作ゲームの詳細を掲載しています。

公開先: https://the-fthe.github.io/porfolio-v1/

## 開発環境

Node.js 22.13.0以上を使用します。

```sh
npm ci
npm run dev
```

## ビルドと検証

```sh
npm run lint
npx tsc --noEmit
npm test
```

`npm test` はGitHub Pages用の静的サイトを `pages-dist/` に出力し、ページ構成、素材URL、共有用メタデータなどを検証します。通常のアプリケーションビルドは `npm run build` で実行できます。

## 公開

`main` への更新時にGitHub Actionsが検証とビルドを実行し、GitHub Pagesへ公開します。公開用設定は `.github/workflows/deploy-pages.yml` と `vite.pages.config.ts` にあります。

## 主なファイル

- `app/components/PortfolioShowcase.tsx`: ポートフォリオの表示
- `app/components/ScrollTank.tsx`: タンクのスクロール移動と砲塔の方向制御
- `app/data/projects.ts`: 作品紹介のデータ
- `app/showcase.css`: ポートフォリオのレイアウト
- `public/`: 画像、フォント、ライセンス情報
- `github-pages/`: 静的ビルド用の入口

素材と第三者ソフトウェアのライセンス情報は `public/legal/third-party/` に掲載しています。
