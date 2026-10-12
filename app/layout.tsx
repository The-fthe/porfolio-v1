import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

const title = "ランキー | ゲームプログラマー";
const description = "Unityを中心にゲーム開発を行うラーム チーシン（ランキ）のポートフォリオ。";
const canonical = "https://the-fthe.github.io/porfolio-v1/";
const socialImage = "https://the-fthe.github.io/porfolio-v1/og.png";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  icons: {
    icon: [{ url: "/cheese-icon.png", type: "image/png" }],
    shortcut: "/cheese-icon.png",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: canonical,
    images: [{ url: socialImage, width: 1731, height: 909 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
