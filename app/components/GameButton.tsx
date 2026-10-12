import type { ReactNode } from "react"

type GameButtonProps = {
  children: ReactNode
  href: string
  tone?: "mint" | "dark" | "white"
}

/**
 * PROTOTYPE — ゲーム本編のボタン表現をCSSで再構成するModule。
 * 呼び出し側はリンク先・ラベル・色だけを知ればよい。
 */
export function GameButton({ children, href, tone = "mint" }: GameButtonProps) {
  const external = href.startsWith("http")

  return (
    <a
      className={`game-button game-button--${tone}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span>{children}</span>
    </a>
  )
}
