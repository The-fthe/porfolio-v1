"use client"

import { useRef } from "react"

export function DevelopmentCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 })

  const startDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return
    const track = trackRef.current
    if (!track || track.scrollWidth <= track.clientWidth) return

    drag.current = { active: true, startX: event.clientX, scrollLeft: track.scrollLeft }
    track.setPointerCapture(event.pointerId)
    track.classList.add("is-dragging")
  }

  const moveDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    if (!track || !drag.current.active) return
    event.preventDefault()
    track.scrollLeft = drag.current.scrollLeft - (event.clientX - drag.current.startX)
  }

  const stopDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    if (!track || !drag.current.active) return
    drag.current.active = false
    if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId)
    track.classList.remove("is-dragging")
  }

  const moveWithKeyboard = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return
    event.preventDefault()
    trackRef.current?.scrollBy({ left: event.key === "ArrowRight" ? 420 : -420, behavior: "smooth" })
  }

  return (
    <div className="development-carousel">
      <p className="development-drag-hint"><span aria-hidden="true">↔</span> 左右にドラッグして見る</p>
      <div
        className="development-grid"
        ref={trackRef}
        tabIndex={0}
        aria-label="開発特徴。左右にドラッグまたは矢印キーで移動できます"
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        onKeyDown={moveWithKeyboard}
      >
        <figure>
          <img src="../legacy/ai-path.webp" alt="追跡AIの経路探索についての開発特徴" draggable="false" />
          <figcaption>
            <div><span>01</span><strong>追跡AIと経路探索</strong></div>
            <p>障害物を避けながらプレイヤーを追う経路探索を実装しました。</p>
          </figcaption>
        </figure>
        <figure>
          <img src="../legacy/multiplatform.webp" alt="マルチプラットフォーム対応についての開発特徴" draggable="false" />
          <figcaption>
            <div><span>02</span><strong>PC・Android対応</strong></div>
            <p>キーボード・マウスとタッチ操作の両方に対応しています。</p>
          </figcaption>
        </figure>
        <figure>
          <video autoPlay muted loop playsInline aria-label="自動照準を切り替えるゲームプレイ映像">
            <source src="../legacy/gameplay.webm" type="video/webm" />
          </video>
          <figcaption>
            <div><span>03</span><strong>自動照準の切り替え</strong></div>
            <p>照準ボタンで自動照準をON／OFF。状況に合わせて砲塔の狙い方を切り替えられます。</p>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}
