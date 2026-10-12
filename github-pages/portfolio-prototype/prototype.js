// Disposable portfolio prototypes. Switchable by ?variant=A|B|C; no production changes.
const variants = {
  A: { name: '作品展示', description: '実際の画面を大きく見せ、作品から人を知る。', benefit: 'ゲームの雰囲気が一目で伝わる。', risk: '業務経験の詳しい確認にはスクロールが必要。' },
  B: { name: '採用向け', description: 'プロフィールを横に置き、担当内容を作品ごとに読む。', benefit: '経験と実装範囲を短時間で確認できる。', risk: '作品の世界観より情報を優先する。' },
  C: { name: '制作ノート', description: '作品の一覧から一作を選び、制作の背景まで読む。', benefit: '個人制作の考え方と業務実績を分けて見せられる。', risk: '全作品の詳細を見るには切り替えが必要。' },
};
const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>';
const external = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5H5v14h14v-3M12 5h7v7M19 5l-9 9"/></svg>';
const projects = [
  { id: 'shiro', title: '白路', subtitle: 'しろ', kind: '個人制作 / ゲームジャム', category: 'personal', image: 'shiro-title.webp', alt: '白路のステージ選択画面。和紙の背景に四つの目的地が並ぶ', caption: '公開版のステージ選択画面', meta: '2026 · Unity / C# · ブラウザ', description: '道を覗いて覚え、タイルを回してつなぐパズル。お題「しろ」から、白紙に隠された道をたどる遊びをつくりました。', role: '個人制作。道つなぎパズルの制作と画面調整。', detail: 'タイル・ボード・UIをPrefab化し、あとからUnity上で配置を調整できる構成に変更しました。', url: 'https://unityroom.com/games/sakakupuzzle', action: '白路を遊ぶ', article: 'https://qiita.com/ramu2025/items/0a6d1fae1ae1881f966d' },
  { id: 'kabedon', title: '壁ドン彼氏', subtitle: '〜真夏のチャラ男〜', kind: '業務作品 / Nintendo Switch', category: 'commercial', image: 'kabedon.webp', alt: '壁ドン彼氏 〜真夏のチャラ男〜の作品画像', caption: 'Nintendo Switch向けビジュアルノベル', meta: 'Unity / C# / AssetBundle · Nintendo Switch', description: '自社開発のNintendo Switch向けビジュアルノベル。クライアント実装を担当しました。', role: 'クライアント実装', detail: 'ビジュアルノベルツールの機能追加、AssetBundleの導入、スクリーンショット機能の追加。', url: 'https://web.archive.org/web/20260702064619/https://store-jp.nintendo.com/item/software/D70010000062865#', action: '作品のアーカイブを見る' },
  { id: 'military', title: 'Military2D', subtitle: '', kind: '個人制作 / 2Dゲーム', category: 'personal', image: 'military2d.webp', alt: 'Military2Dのゲーム画面', caption: '個人制作の2Dゲーム', meta: 'Unity / C# · itch.ioで公開', description: '個人開発の2Dゲーム。作品紹介ページでゲーム内容や開発の特徴をまとめています。', role: '個人制作', detail: '作品紹介ページから、ゲーム内容と開発の特徴を確認できます。', url: 'https://the-fthe.github.io/porfolio-v1/military2d/', action: '作品紹介を見る' },
];
const link = (url, text, className = 'text-link') => `<a class="${className}" href="${url}" target="_blank" rel="noopener noreferrer">${text}${external}</a>`;
function projectLinks(p) { return `<div class="project-links">${link(p.url, p.action, 'button-link')}${p.article ? link(p.article, '開発記録を読む') : ''}</div>`; }
function aiNote() { return ''; }
function image(p, className = '') { return `<figure class="${className}"><img src="./assets/${p.image}" alt="${p.alt}" width="1280" height="720"><figcaption>${p.caption}</figcaption></figure>`; }
function navigation(className = '') { return `<nav class="${className}" aria-label="サイト内"><a href="#works">作品</a><a href="#about">経歴・できること</a><a href="#contact">連絡先</a></nav>`; }
function footer() { return `<footer id="contact"><div><h2>連絡先</h2><p>お仕事や制作についてのご相談はこちらへ。</p><button type="button" class="copy-email" data-copy-email>メールアドレスをコピー ${arrow}</button><p class="email">the.fthe.job@gmail.com</p><p class="copy-status" role="status"></p></div><div class="footer-links">${link('https://github.com/The-fthe', 'GitHub')}${link('https://www.linkedin.com/in/chee-seng-lam-5515081a4/', 'LinkedIn')}${link('https://x.com/fthe_cheese', 'X')}</div><div class="footer-bottom"><span>© 2026 ランキ</span><div></div></div></footer>`; }
function experience() { return `<section class="experience" id="about"><div class="experience-intro"><h2>経歴・できること</h2><p>Unity/C#を約4年経験。教育・知育アプリ、Nintendo Switch向けタイトルで、クライアント実装・保守運用・移植を担当してきました。</p></div><dl class="experience-list"><div><dt>ゲームの実装</dt><dd>学習用アプリやミニゲーム、ビジュアルノベルの機能追加。</dd></div><div><dt>移植・運用</dt><dd>知育アプリの移植、保守運用、ローカライズの実装。</dd></div><div><dt>開発の改善</dt><dd>エディタ拡張などのツール整備、ビルド・検証の効率化。</dd></div></dl></section>`; }
function VariantA() {
  const p = projects[0];
  return `<div class="design design-a"><header class="header"><a class="brand" href="#main">ランキ<span>ラーム チーシン</span></a>${navigation()}</header><main id="main"><section class="a-opening" id="works"><div class="a-heading"><h1>ゲームと、その制作。</h1><p>Unity / C# ゲームプログラマー</p></div><div class="a-feature">${image(p, 'a-feature-image')}<div class="a-feature-copy"><h2>白路<span>しろ</span></h2><p class="project-kind">${p.kind}</p><p>${p.description}</p><p class="project-meta">Unity1週間ゲームジャム<br>お題「しろ」 · 約3分で遊べます</p>${projectLinks(p)}</div></div></section><section class="a-other"><div class="section-heading"><h2>ほかの作品</h2><p>業務で担当した作品と、個人でつくった作品。</p></div>${projects.slice(1).map(p => `<article class="a-work">${image(p)}<div><p class="project-kind">${p.kind}</p><h3>${p.title}<span>${p.subtitle}</span></h3><p>${p.description}</p><dl class="role"><dt>${p.id === "military" ? "制作形態" : "担当"}</dt><dd>${p.id === "military" ? p.role : p.detail}</dd></dl>${projectLinks(p)}</div></article>`).join('')}</section>${experience()}</main>${footer()}</div>`;
}
function VariantB() {
  return `<div class="design design-b"><aside class="b-profile"><a class="brand" href="#main">ランキ</a><img class="portrait" src="./assets/fthe.webp" alt="ランキのプロフィール画像" width="80" height="80"><h1>ラーム<br>チーシン</h1><p class="b-name">ゲームプログラマー</p><p>Unity / C#を約4年。<br>実装・移植・保守運用を<br>担当してきました。</p>${navigation()}<div class="b-languages"><h2>言語</h2><p>日本語 / 英語<br>中国語 / 広東語</p></div>${link('https://github.com/The-fthe', 'GitHub')}</aside><div class="b-content"><main id="main"><section class="b-opening"><h2>実装から、移植と運用まで。</h2><p>教育・知育アプリとNintendo Switch向けタイトルのクライアント実装を経験しています。個人制作では、Unityのゲームを公開しています。</p></section><section id="works" class="b-works"><div class="b-works-header"><h2>制作・担当作品</h2><div class="filters" role="group" aria-label="作品の絞り込み"><button type="button" data-filter="all" aria-pressed="true">すべて</button><button type="button" data-filter="commercial" aria-pressed="false">業務作品</button><button type="button" data-filter="personal" aria-pressed="false">個人制作</button></div></div><p class="filter-status" role="status" aria-live="polite">3作品を表示</p>${[projects[1], projects[0], projects[2]].map(p => `<article class="b-work" data-category="${p.category}">${image(p)}<div class="b-work-text"><p class="project-kind">${p.kind}</p><h3>${p.title}<span>${p.subtitle}</span></h3><p>${p.description}</p><dl class="role"><dt>${p.id === "military" ? "制作形態" : "担当・制作内容"}</dt><dd>${p.id === "military" ? p.role : p.detail}</dd></dl><p class="project-meta">${p.meta}</p>${projectLinks(p)}${aiNote(p)}</div></article>`).join('')}</section>${experience()}</main>${footer()}</div></div>`;
}
function cProject(p) { return `<div class="c-project-image">${image(p)}${p.id === 'shiro' ? '<img class="c-board" src="./assets/shiro-play.webp" alt="白路の操作説明画面。タイルを覗く操作と回す操作の案内" width="1280" height="720"><span class="c-board-caption">操作説明画面</span>' : ''}</div><div class="c-project-copy"><h2>${p.title}<span>${p.subtitle}</span></h2><p class="project-kind">${p.kind}</p><p>${p.description}</p><div class="c-note"><h3>${p.id === 'shiro' ? 'あとから調整できる構成に' : p.id === 'military' ? '公開について' : '担当したこと'}</h3><p>${p.detail}</p></div>${projectLinks(p)}${aiNote(p)}</div>`; }
function VariantC() {
  return `<div class="design design-c"><header class="header"><a class="brand" href="#main">ランキ<span>ゲーム制作ノート</span></a>${navigation()}</header><main id="main"><section class="c-opening" id="works"><div class="c-heading"><h1>つくったゲームを、<br>ひとつずつ。</h1><p>ラーム チーシン<br>Unity / C# ゲームプログラマー</p></div><div class="c-workspace"><div class="c-index"><h2>作品を選ぶ</h2><div role="tablist" aria-label="作品">${projects.map((p, i) => `<button role="tab" id="tab-${p.id}" aria-controls="project-panel" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-project="${p.id}"><span>${p.title}</span><small>${p.category === 'commercial' ? '業務作品' : '個人制作'}</small>${arrow}</button>`).join('')}</div><p>公開作品と、<br>制作の途中で考えたこと。</p></div><article class="c-project" id="project-panel" role="tabpanel" aria-labelledby="tab-shiro" tabindex="0">${cProject(projects[0])}</article></div></section><section class="c-person" id="about"><div><h2>ラーム チーシン<span>ランキ</span></h2><p>Unity/C#を約4年経験し、教育・知育アプリ、Nintendo Switch向けタイトルのクライアント実装・保守運用・移植を担当してきました。</p><p>ゲームをつくることに加えて、エディタ拡張やビルド・検証の効率化にも取り組んでいます。</p></div><dl><div><dt>業務で取り組んだこと</dt><dd>学習用アプリ、ミニゲームの実装<br>ローカライズ、翻訳シートの抽出と導入<br>知育アプリの移植・保守運用</dd></div><div><dt>使用技術</dt><dd>Unity / C# / AssetBundle</dd></div><div><dt>話せる言語</dt><dd>日本語 / 英語 / 中国語 / 広東語</dd></div></dl></section></main>${footer()}</div>`;
}
const site = document.querySelector('#site');
const comparison = document.querySelector('#comparison');
comparison.innerHTML = `<div class="comparison-heading"><h2>3案の見せ方</h2><p>同じ作品・経歴を使った、構成の比較です。ボタンで各案を表示できます。</p></div><div class="comparison-options">${Object.entries(variants).map(([key, v]) => `<article><div class="comparison-title"><strong>${key}</strong><h3>${v.name}</h3></div><img src="./assets/preview-${key}.webp" alt="${v.name}案の画面プレビュー" width="720" height="450"><p>${v.description}</p><dl><div><dt>よいところ</dt><dd>${v.benefit}</dd></div><div><dt>見ておきたい点</dt><dd>${v.risk}</dd></div></dl><button type="button" data-variant="${key}">${key}案を表示 ${arrow}</button></article>`).join('')}</div>`;
let active = 'A';
let chosen = null;
const keys = Object.keys(variants);
function render(key, scroll = false) {
  active = variants[key] ? key : 'A';
  document.body.dataset.activeVariant = active;
  site.innerHTML = { A: VariantA, B: VariantB, C: VariantC }[active]();
  document.title = `${active}案 ${variants[active].name}｜ランキのポートフォリオ比較`;
  const url = new URL(location.href); url.searchParams.set('variant', active); history.replaceState(null, '', url);
  document.querySelectorAll('button[data-variant]').forEach(b => { b.setAttribute('aria-pressed', String(b.dataset.variant === active)); });
  document.querySelector('#choose').textContent = `${active}案を選ぶ`;
  document.querySelector('#choice-status').textContent = chosen ? `${chosen}案を選択中 · このチャットに案名をお伝えください` : '';
  if (scroll) window.scrollTo({ top: 0, behavior: 'instant' });
}
function cycle(delta) { render(keys[(keys.indexOf(active) + delta + keys.length) % keys.length], true); }
document.querySelector('#previous').addEventListener('click', () => cycle(-1));
document.querySelector('#next').addEventListener('click', () => cycle(1));
document.querySelector('#choose').addEventListener('click', () => { chosen = active; document.querySelector('#choice-status').textContent = `${chosen}案を選択しました · このチャットに案名をお伝えください`; });
document.querySelector('#compare-toggle').addEventListener('click', e => {
  comparison.hidden = !comparison.hidden;
  e.currentTarget.setAttribute('aria-expanded', String(!comparison.hidden));
  e.currentTarget.textContent = comparison.hidden ? '3案の違いを見る' : '比較を閉じる';
});
document.addEventListener('click', async e => {
  const variant = e.target.closest('button[data-variant]');
  if (variant) { render(variant.dataset.variant, true); return; }
  const filter = e.target.closest('[data-filter]');
  if (filter) {
    let count = 0;
    document.querySelectorAll('.b-work').forEach(row => { row.hidden = filter.dataset.filter !== 'all' && row.dataset.category !== filter.dataset.filter; if (!row.hidden) count++; });
    document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === filter)));
    document.querySelector('.filter-status').textContent = `${count}作品を表示`;
    return;
  }
  const project = e.target.closest('[data-project]');
  if (project) {
    const panel = document.querySelector('#project-panel');
    panel.innerHTML = cProject(projects.find(p => p.id === project.dataset.project));
    panel.setAttribute('aria-labelledby', project.id);
    document.querySelectorAll('[data-project]').forEach(b => { b.setAttribute('aria-selected', String(b === project)); b.tabIndex = b === project ? 0 : -1; });
    return;
  }
  const copy = e.target.closest('[data-copy-email]');
  if (copy) {
    const status = document.querySelector('.copy-status');
    try { await navigator.clipboard.writeText('the.fthe.job@gmail.com'); status.textContent = 'コピーしました。メールソフトに貼り付けてお使いください。'; }
    catch { status.textContent = 'コピーできませんでした。下のメールアドレスを選択してコピーしてください。'; }
  }
});
document.addEventListener('keydown', e => {
  if (e.target.closest('input,textarea,select,[contenteditable]')) return;
  const tab = e.target.closest('[role="tab"]');
  if (tab && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(e.key)) {
    e.preventDefault(); const tabs = [...document.querySelectorAll('[role="tab"]')];
    const index = e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : (tabs.indexOf(tab) + (['ArrowLeft', 'ArrowUp'].includes(e.key) ? -1 : 1) + tabs.length) % tabs.length;
    tabs[index].click(); tabs[index].focus(); return;
  }
  if (e.target.closest('.switcher') && ['ArrowLeft', 'ArrowRight'].includes(e.key)) { e.preventDefault(); cycle(e.key === 'ArrowLeft' ? -1 : 1); }
});
render(new URLSearchParams(location.search).get('variant') || 'A');
