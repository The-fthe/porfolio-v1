export type Project = {
  id: string
  displayTitle: string
  subtitle?: string
  category: "commercial" | "personal"
  role: string
  caption: string
  linkLabel: string
  articleLink?: string
  aiDisclosure?: string
  image?: string
  title: string
  description: string
  highlights: string[]
  technologies: string[]
  link?: string
  /** リンクボタンの種別。ロゴとラベルを切り替える */
  platform?: "switch" | "itch"
}

