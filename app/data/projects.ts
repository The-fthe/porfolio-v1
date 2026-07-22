import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "あそびタッチ - 子供ゲームで赤ちゃん～子供のお勉強 知育アプリ",
    description:
      "Unityを用いたiOS/Android向け知育アプリ。ミニゲーム管理システムや課金、広告、分析など幅広い機能を担当。",
    highlights: [
      "ミニゲーム管理システム実装",
      "SpriteAtlas実装",
      "Android/iOS課金実装",
      "Firebase/Analytic実装",
      "Admob Mediation実装",
      "レビューAPI実装",
      "Dotweenでアニメーション実装",
      "ビルド最適化",
      "コード標準化・共通ライブラリ導入で移植時間短縮",
      "イベント導入で依存関係軽減・拡張性向上"
    ],
    technologies: ["Unity", "C#", "Firebase", "Admob", "Dotween"],
  },
]

