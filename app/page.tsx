const skillGroups = [
  {
    title: "ゲーム開発",
    skills: ["Unity", "Unreal Engine", "Godot", "ゲームデザイン", "レベルデザイン"],
  },
  {
    title: "プログラミング",
    skills: ["C#", "C++", "TypeScript", "JavaScript", "Python", "React"],
  },
  {
    title: "制作・運用",
    skills: ["Blender", "UI / UX", "Git", "アジャイル開発", "プロジェクト管理"],
  },
];

const highlights = [
  "ミニゲーム管理システムの設計・実装",
  "SpriteAtlasとビルド工程の最適化",
  "Android / iOS課金、Firebase、広告連携",
  "コード標準化と共通ライブラリによる移植効率化",
  "イベント駆動による依存関係の整理と拡張性向上",
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ページ上部へ">
          CHEE SENG LAM
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#profile">プロフィール</a>
          <a href="#skills">スキル</a>
          <a href="#projects">実績</a>
          <a href="#contact">連絡先</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">GAME PROGRAMMER · PORTFOLIO</p>
            <h1 id="hero-title">
              遊びの手触りを、
              <br />
              <span>確かな実装へ。</span>
            </h1>
            <p className="hero-description">
              Unityを中心に、モバイル・Nintendo Switch・Webなどの開発と運用に携わるゲームプログラマーです。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">実績を見る</a>
              <a className="button button-secondary" href="#contact">連絡する</a>
            </div>
          </div>
          <div className="hero-mark" aria-hidden="true">
            <span>CS</span>
          </div>
        </section>

        <section id="profile" className="section profile-section">
          <div className="section-heading">
            <p className="section-number">01</p>
            <h2>プロフィール</h2>
          </div>
          <div className="profile-grid">
            <p className="lead">
              ゲームを完成させる実装力と、チームが継続して開発できる仕組みづくりを大切にしています。
            </p>
            <div className="profile-copy">
              <p>
                株式会社カエルエックスでゲームプログラマーとして勤務。受託・自社案件の新規開発から運用、リリース対応まで幅広く経験しています。
              </p>
              <p>
                標準化、ドキュメント作成、共通ライブラリ整備にも取り組み、開発速度と保守性の向上に貢献してきました。
              </p>
              <dl className="facts">
                <div><dt>経験領域</dt><dd>Mobile / Switch / Web</dd></div>
                <div><dt>主な技術</dt><dd>Unity / C#</dd></div>
                <div><dt>拠点</dt><dd>Japan</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="section-number">02</p>
            <h2>スキル</h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section project-section">
          <div className="section-heading light-heading">
            <p className="section-number">03</p>
            <h2>プロジェクト実績</h2>
          </div>
          <article className="project-card">
            <div className="project-intro">
              <p className="project-index">FEATURED PROJECT</p>
              <h3>あそびタッチ</h3>
              <p>子供向け知育アプリ · iOS / Android</p>
            </div>
            <div className="project-details">
              <p>
                Unityを用いた知育アプリで、ミニゲーム基盤から課金・広告・分析まで幅広い機能を担当しました。
              </p>
              <ul>
                {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <div className="tags">
                {['Unity', 'C#', 'Firebase', 'AdMob', 'DOTween'].map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </article>
        </section>

        <section id="contact" className="section contact-section">
          <p className="eyebrow">LET&apos;S CONNECT</p>
          <h2>一緒に、次の体験を<br />つくりませんか。</h2>
          <div className="contact-links">
            <a href="mailto:lcslianandfthe.cs@gmail.com">Email</a>
            <a href="https://github.com/The-fthe" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/chee-seng-lam-5515081a4/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Chee Seng Lam</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
