import type { Metadata } from "next"
import "./military2d.css"

const title = "Military2D | 2Dタンクアクション"
const description = "3つのステージを攻略する見下ろし型2Dタンクアクションゲーム、Military2Dの紹介ページ。"
const canonical = "https://the-fthe.github.io/porfolio-v1/military2d/"
const socialImage = "https://the-fthe.github.io/porfolio-v1/og.jpg"

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  icons: {
    icon: [{ url: "/fthe.webp", type: "image/webp" }],
    shortcut: "/fthe.webp",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: canonical,
    images: [{ url: socialImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
}

export default function Military2DLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
