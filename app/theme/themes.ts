export const THEMES = [
  { id: "editorial", label: "エディトリアル" },
  { id: "terminal", label: "ターミナル" },
  { id: "brutalist", label: "ブルータリスト" },
  { id: "minimal", label: "ミニマル" },
  { id: "blueprint", label: "ブループリント" },
  { id: "arcade", label: "アーケード" },
] as const

export type ThemeId = (typeof THEMES)[number]["id"]

export const DEFAULT_THEME: ThemeId = "editorial"
