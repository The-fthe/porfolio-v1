export type Project = {
  image?: string
  title: string
  description: string
  highlights: string[]
  technologies: string[]
  link?: string
  /** リンクボタンの種別。ロゴとラベルを切り替える */
  platform?: "switch" | "itch"
}

