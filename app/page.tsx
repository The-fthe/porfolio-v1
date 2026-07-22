import { projects } from "./data/projects"
import { Skills } from "./components/Skills"
import { Contact } from "./components/Contact"
import { Profile } from "./components/Profile"
import { ProjectCard } from "./components/ProjectCard"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">ラーム チーシン</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#profile" className="hover:text-gray-600">
                  プロフィール
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-gray-600">
                  スキル
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gray-600">
                  プロジェクト
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-600">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* プロフィールセクション */}
        <section id="profile" className="py-12">
          <Profile />
        </section>

        {/* スキルセクション */}
        <section id="skills" className="py-12">
          <Skills />
        </section>

        {/* プロジェクトセクション */}
        <section id="projects" className="py-12">
          <h2 className="text-3xl font-bold mb-8">プロジェクト</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* お問い合わせセクション */}
        <section id="contact" className="py-12">
          <Contact />
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} ラーム チーシン. All rights reserved.</p>
          <div className="mt-2">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 mx-2"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 mx-2"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

