import type { FormEvent } from "react"
import { SITE_PRIVACY_URL } from "../legal-links"

const EMAIL = "the.fthe.job@gmail.com"

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/The-fthe",
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chee-seng-lam-5515081a4/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  },
  {
    label: "X",
    href: "https://x.com/fthe_cheese",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
]

export function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()
    const subject = encodeURIComponent(`ポートフォリオ経由: ${name}`)
    const body = encodeURIComponent(`${message}\n\n-- \n${name}\n${email}`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <div className="contact-hero">
      <span className="status">
        <span className="status-dot" aria-hidden="true" />
        新しい機会に前向きです
      </span>

      <h2 className="section-head">お問い合わせ</h2>
      <p className="contact-lead">
        お仕事のご依頼、プロジェクトのご相談、その他ご質問など、
        お気軽にご連絡ください。
      </p>

      <div className="contact-body">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__row">
            <label>
              名前
              <input name="name" type="text" required autoComplete="name" />
            </label>
            <label>
              メール
              <input name="email" type="email" required autoComplete="email" />
            </label>
          </div>
          <label>
            本文
            <textarea name="message" rows={5} required />
          </label>

          <p className="contact-form__note">
            ボタンを押すとメールソフトが開きます。入力内容はこのサイトのサーバーには送信・保存されません。
            詳細は<a href={SITE_PRIVACY_URL}>サイトのプライバシー</a>をご確認ください。
          </p>

          <div className="contact-form__actions">
            <button type="submit" className="btn">
              メールを作成する
            </button>
          </div>
        </form>

        <aside className="contact-socials">
          <span className="contact-socials__label">SNS</span>
          <ul className="social-icons">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                  <span className="social-icons__label">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  )
}
