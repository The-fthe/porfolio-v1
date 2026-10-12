const VIDEO_ID = "QPZpLN67xXI"
const VIDEO_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}&t=1s`

export function GameTrailerLink() {
  return (
    <div className="gameplay-frame game-video">
      <a
        className="game-video__thumbnail"
        href={VIDEO_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="YouTubeでMilitary2Dの紹介動画を見る"
      >
        <img
          src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
          alt="Military2D紹介動画のサムネイル"
        />
        <span className="game-video__play" aria-hidden="true">▶</span>
        <strong>YOUTUBEで紹介動画を見る</strong>
      </a>
    </div>
  )
}
