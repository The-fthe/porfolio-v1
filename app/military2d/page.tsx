import { GameButton } from "../components/GameButton"
import { GameTrailerLink } from "../components/GameTrailerLink"
import { DevelopmentCarousel } from "../components/DevelopmentCarousel"
import { SITE_PRIVACY_URL, THIRD_PARTY_NOTICES_URL } from "../legal-links"

const WEBGL = "https://fthe.itch.io/military2d"
const ANDROID = "https://play.google.com/store/apps/details?id=com.fthe.Military2d"
const GAME_PRIVACY = "https://pages.flycricket.io/military2d/privacy.html"
const BLOG = "https://qiita.com/ramu2025/items/68ac0f34628ddce331e3"
const BLOG_TITLE = "Fableで学生時代につくったUnityゲームを復旧した"

const socials = [
  {
    label: "X",
    href: "https://x.com/fthe_cheese",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "GitHub",
    href: "https://github.com/The-fthe",
    path: "M12 .7C5.7.7.6 5.8.6 12.1c0 5 3.2 9.2 7.7 10.7.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.4.1-3 0 0 1-.3 3.1 1.2A10.8 10.8 0 0 1 12 6.8c1 0 1.9.1 2.8.4 2.1-1.5 3.1-1.2 3.1-1.2.6 1.6.2 2.7.1 3 .7.8 1.2 1.8 1.2 3 0 4.3-2.6 5.2-5.1 5.5.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6 4.5-1.5 7.7-5.7 7.7-10.7C23.4 5.8 18.3.7 12 .7Z",
  },
]

const stages = [
  {
    number: "01",
    title: "5種類の戦車部隊",
    description: "異なる動きをする5種類の敵戦車が複数登場。すべて撃破するまで、次のステージへの道は開きません。",
    reward: "周囲の兵士が加わり、主砲とは別に近距離攻撃を続ける。",
  },
  {
    number: "02",
    title: "転移する砲台ボス",
    description: "複数の拠点を出入りしながら、全方向への弾幕とプレイヤーを狙う射撃を切り替えるボス戦。",
    reward: "被弾すると一定時間無敵になり、連続ダメージを防ぐシールド。",
  },
  {
    number: "03",
    title: "大型戦車との最終戦",
    description: "3つの攻撃パターンを持つ大型戦車が待つ最終ステージ。障害物に身を隠し、攻撃の隙を見て反撃します。",
    reward: "すべての攻撃を読み切り、大型戦車を撃破すればゲームクリア。",
  },
]

export default function Home() {
  return (
    <div className="game-page" id="top">
      <header className="game-header">
        <a className="header-logo" href="#top" aria-label="Military2D トップへ">
          Military2D
        </a>

        <nav className="header-nav" aria-label="メインナビゲーション">
          <a href="#about">ゲーム紹介</a>
          <a href="#features">ゲーム特徴</a>
          <a href="#creator">製作者</a>
          <a href={GAME_PRIVACY} target="_blank" rel="noreferrer">ポリシー</a>
        </nav>
      </header>

      <main>
        <section className="title-screen">
          <div className="title-screen__sun" aria-hidden="true" />
          <img className="title-screen__tank" src="../legacy/tank-hero.webp" alt="Military2Dの戦車" />
          <div className="title-screen__content">
            <h1 className="title-screen__logo">Military2D</h1>
            <h2>撃って、避けて、<br />生き残れ。</h2>
            <p className="title-screen__lead">
              敵部隊を全滅させ、強化を獲得しながら3つの戦場を進む、<br />
              見下ろし型2Dタンクアクションゲーム。
            </p>
            <div className="title-screen__actions">
              <GameButton href={WEBGL}>WEBGL版をプレイ</GameButton>
              <GameButton href={ANDROID} tone="white">ANDROID版を見る</GameButton>
            </div>
          </div>
          <div className="game-ribbon" aria-hidden="true">
            <span>3 STAGES</span><i>★</i><span>2 BOSS BATTLES</span><i>★</i><span>自動照準</span><i>★</i><span>PC / Android</span>
          </div>
        </section>

        <section className="gameplay-section" id="about" aria-labelledby="gameplay-title">
          <div className="gameplay-copy">
            <span className="stage-label">ゲーム紹介</span>
            <h2 id="gameplay-title">倒して、強化して、<br />最終決戦へ。</h2>
            <p>
              3つのステージを順番に攻略するタンクアクションです。
              敵を全滅させると次の戦場への道と強化アイテムが開き、
              新しい能力を加えた戦車で2体のボスに挑みます。
            </p>
          </div>
          <GameTrailerLink />
        </section>

        <section className="feature-section" id="features" aria-labelledby="features-title">
          <div className="feature-heading">
            <span className="stage-label">ゲーム特徴</span>
            <h2 id="features-title">3つのステージを突破せよ。</h2>
          </div>
          <div className="feature-panels">
          {stages.map((stage) => (
            <article key={stage.number}>
              <div className="feature-stage-number"><small>STAGE</small><em>{stage.number}</em></div>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
              <div className="stage-reward">
                <small>{stage.number === "03" ? "GOAL" : "POWER UP"}</small>
                <strong>{stage.reward}</strong>
              </div>
            </article>
          ))}
          </div>
        </section>

        <section className="development-section" aria-labelledby="development-title">
          <div className="development-heading">
            <span>開発特徴</span>
            <h2 id="development-title">ゲームの仕組み</h2>
          </div>
          <DevelopmentCarousel />
        </section>

        <section className="creator-section" id="creator" aria-labelledby="creator-title">
          <div className="creator-profile">
            <span className="stage-label">製作者</span>
            <h2 id="creator-title">ランキ</h2>
            <p>Military2Dの企画・ゲームシステム・UI・マルチプラットフォーム対応を個人で制作しました。</p>
          </div>

          <div className="creator-links">
            <div className="blog-block">
              <span className="stage-label">ENGINEER BLOG</span>
              <h3>技術ブログ</h3>
              <a className="blog-card" href={BLOG} target="_blank" rel="noreferrer">
                <small>QIITA</small>
                <strong>{BLOG_TITLE}</strong>
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <nav className="social-links" aria-label="製作者のソーシャルリンク">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} title={social.label}>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d={social.path} /></svg>
                  <span>{social.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </section>
      </main>

      <footer className="game-footer">
        <div className="footer-bottom">
          <div className="footer-credit">
            <strong>Military2D</strong>
            <p><time dateTime="2021-06">2021.06–07</time> / CREATED BY ランキ</p>
          </div>
          <a className="footer-policy" href={GAME_PRIVACY} target="_blank" rel="noreferrer">
            ゲームのプライバシーポリシー <span aria-hidden="true">↗</span>
          </a>
          <a className="footer-policy" href={SITE_PRIVACY_URL}>サイトのプライバシー</a>
          <a className="footer-policy" href={THIRD_PARTY_NOTICES_URL}>第三者ライセンス</a>
        </div>
      </footer>
      <a className="floating-top" href="#top" aria-label="トップへ戻る"><span>↑</span>TOP</a>
    </div>
  )
}
