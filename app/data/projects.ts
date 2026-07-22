import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "壁ドン彼氏 〜真夏のチャラ男〜（Switch）",
    description:
      "自社開発のNintendo Switch向けビジュアルノベル。クライアント実装を担当。",
    highlights: [
      "ビジュアルノベルツール機能追加",
      "AssetBundle導入",
      "スクリーンショット機能追加",
    ],
    technologies: ["Unity", "C#", "AssetBundle"],
    image: `${import.meta.env.BASE_URL}works/kabedon.webp`,
    link: "https://store-jp.nintendo.com/item/software/D70010000062865",
    platform: "switch",
  },
  {
    title: "Military2D（自主制作）",
    description: "個人開発の2Dゲーム。itch.io で公開中。",
    highlights: [],
    technologies: ["Unity", "C#"],
    image: `${import.meta.env.BASE_URL}works/military2d.webp`,
    link: "https://fthe.itch.io/military2d",
    platform: "itch",
  },
]
