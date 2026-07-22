"use client"

import { projects } from "./data/projects"
import { Contact } from "./components/Contact"
import { Profile } from "./components/Profile"
import { Experience } from "./components/Experience"
import { ProjectCard } from "./components/ProjectCard"

export default function Home() {
  return (
    <div className="app" id="top">
        {/* ヘッダー */}
        <header className="site-header">
          <div className="container site-header__inner">
            <a href="#top" className="brand">
              ランキ
            </a>
            <nav className="nav">
              <ul>
                <li>
                  <a href="#profile">プロフィール</a>
                </li>
                <li>
                  <a href="#works">作品</a>
                </li>
                <li>
                  <a href="#experience">経験</a>
                </li>
                <li>
                  <a href="#contact">お問い合わせ</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="container">
          <section id="profile" className="section">
            <Profile />
          </section>

          <section id="works" className="section">
            <h2 className="section-head">作品</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </section>

          <section id="experience" className="section">
            <Experience />
          </section>

          <section id="contact" className="section">
            <Contact />
          </section>
        </main>

        {/* フッター */}
        <footer className="site-footer">
          <div className="container">
            <p className="muted">© {new Date().getFullYear()} ランキ</p>
            <div className="site-footer__links">
              <a
                className="social-link"
                href="https://github.com/The-fthe"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="social-link"
                href="https://www.linkedin.com/in/chee-seng-lam-5515081a4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>

    </div>
  )
}
