"use client"

import { useState } from "react"
import { projects } from "../data/projects"
import { ScrollTank } from "./ScrollTank"
import type { Project } from "../types/project"
import "../showcase.css"

const EMAIL = "the.fthe.job@gmail.com"
const BOOTDEV = "https://www.boot.dev/u/lam"

function ExternalIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5H5v14h14v-3M12 5h7v7M19 5l-9 9" /></svg>
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
}

function ProjectImage({ project, featured = false }: { project: Project; featured?: boolean }) {
  return <figure className={featured ? "a-feature-image" : undefined}>
    <img src={project.image} alt={`${project.displayTitle}の${project.caption}`} width={1280} height={720} loading={featured ? "eager" : "lazy"} />
    <figcaption>{project.caption}</figcaption>
  </figure>
}

function ProjectLinks({ project }: { project: Project }) {
  const external = project.link?.startsWith("https://")
  return <div className="project-links">
    <a className="button-link" href={project.link} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
      {project.linkLabel}{external ? <ExternalIcon /> : <ArrowIcon />}
    </a>
    {project.articleLink && <a className="text-link" href={project.articleLink} target="_blank" rel="noopener noreferrer">開発記録を読む<ExternalIcon /></a>}
  </div>
}

export function PortfolioShowcase() {
  const [copyStatus, setCopyStatus] = useState("")
  const featured = projects[0]

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopyStatus("コピーしました。メールソフトに貼り付けてお使いください。")
    } catch {
      setCopyStatus("コピーできませんでした。表示されているメールアドレスを選択してコピーしてください。")
    }
  }

  return <div className="showcase" id="top">
    <a className="skip" href="#main">本文へ移動</a>
    <header className="header">
      <a className="brand" href="#top"><img className="brand-logo" src={`${import.meta.env.BASE_URL}cheese-icon.png`} alt="ランキ" width={48} height={48} /><span>ラーム チーシン</span></a>
      <nav aria-label="サイト内"><a href="#works">作品</a><a href="#about">経歴・できること</a><a href="#contact">連絡先</a></nav>
    </header>
    <main id="main">
      <section className="a-opening" id="works">
        <div className="a-heading"><h1>ゲームと、その制作。</h1></div>
        <div className="a-feature">
          <ProjectImage project={featured} featured />
          <div className="a-feature-copy">
            <h2>{featured.displayTitle}<span>{featured.subtitle}</span></h2>
            <p className="project-kind">個人制作 / ゲームジャム</p>
            <p>{featured.description}</p>
            <p className="project-meta">Unity1週間ゲームジャム<br />お題「しろ」 · 約3分で遊べます</p>
            <ProjectLinks project={featured} />
          </div>
        </div>
      </section>
      <section className="a-other">
        <div className="section-heading"><h2>ほかの作品</h2></div>
        {projects.slice(1).map(project => <article className="a-work" key={project.id} data-project-id={project.id}>
          <ProjectImage project={project} />
          <div>
            <p className="project-kind">{project.category === "commercial" ? "業務作品 / Nintendo Switch" : "個人制作 / 2Dゲーム"}</p>
            <h3>{project.displayTitle}{project.subtitle && <span>{project.subtitle}</span>}</h3>
            <p>{project.description}</p>
            <dl className="role"><dt>{project.category === "commercial" ? "担当" : "制作形態"}</dt><dd>{project.highlights.length ? project.highlights.join("、") + "。" : project.role}</dd></dl>
            <ProjectLinks project={project} />
          </div>
        </article>)}
      </section>
      <section className="experience" id="about">
        <div className="experience-intro">
          <div><h2>経歴・できること</h2><p>ゲームを実装し、制作チームが自分で調整・確認できる環境まで整える。それが、私の得意な仕事です。</p><p>Unity/C#で約4年、教育・知育アプリやNintendo Switch向けゲームのクライアント実装・移植・保守運用を担当してきました。</p><p className="languages">日本語 / 英語 / 中国語 / 広東語</p></div>
          <picture className="profile-avatar"><source media="(prefers-reduced-motion: reduce)" srcSet={`${import.meta.env.BASE_URL}fthe.webp`} /><img src={`${import.meta.env.BASE_URL}fthe.gif`} alt="ランキのプロフィール画像。海と雲を描いたピクセルアート" width={432} height={432} loading="lazy" /></picture>
        </div>
        <ol className="career-timeline" aria-label="卒業から現在までの経歴">
          <li><p className="career-date"><time dateTime="2022-03">2022年3月</time></p><div><h3>デジタルハリウッド大学 卒業</h3><p>デジタルコミュニケーション学部 デジタルコンテンツ学科。</p></div></li>
          <li><p className="career-date"><time dateTime="2022-05">2022年5月</time> — <time dateTime="2026-07">2026年7月</time></p><div><h3>株式会社カエルエックス（Caerux）</h3><p>Unity/C#によるゲーム・教育アプリのクライアント開発を担当。実装・移植からテスト、保守、リリース対応まで携わりました。</p></div></li>
          <li><p className="career-date"><time dateTime="2026-08">2026年8月</time> — <time dateTime="2026-09">9月</time></p><div><h3>ディースタンダード株式会社で実習</h3><p>約1か月の実習に参加し、Linuxの基礎を学びました。</p></div></li>
          <li className="career-current"><p className="career-date">現在</p><div><h3>ゲームプログラマーとして求職中</h3><p>Unity/C#の実務経験を活かせる仕事を探しています。個人制作と継続的な学習にも取り組んでいます。</p><a className="text-link" href="#contact">連絡先を見る<ArrowIcon /></a></div></li>
        </ol>
        <dl className="experience-list">
          <div><dt>制作を支える</dt><dd>非エンジニアも素材や設定を調整・確認できる制作ツールを整備。</dd></div>
          <div><dt>テストの自動化</dt><dd>自動テストを導入し、手作業による検証の負担を軽減。</dd></div>
          <div><dt>仕組みの共通化</dt><dd>共通ライブラリで重複実装を減らし、機能追加・変更を進めやすく。</dd></div>
          <div><dt>学習の記録</dt><dd><a className="text-link" href={BOOTDEV} target="_blank" rel="noopener noreferrer">boot.devのプロフィールを見る<ExternalIcon /></a></dd></div>
        </dl>
      </section>
    </main>
    <ScrollTank />
    <footer id="contact">
      <div><h2>連絡先</h2><p>お仕事や制作についてのご相談はこちらへ。</p><div className="contact-email-row"><p className="email">{EMAIL}</p><button type="button" className="copy-email" onClick={copyEmail}>メールアドレスをコピー<ArrowIcon /></button></div><p className="copy-status" role="status" aria-live="polite">{copyStatus}</p></div>
      <div className="footer-links">{[
        ["GitHub", "https://github.com/The-fthe"],
        ["LinkedIn", "https://www.linkedin.com/in/chee-seng-lam-5515081a4/"],
        ["X", "https://x.com/fthe_cheese"],
      ].map(([label, url]) => <a className="text-link" key={label} href={url} target="_blank" rel="noopener noreferrer">{label}<ExternalIcon /></a>)}</div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} ランキ</span></div>
    </footer>
  </div>
}
