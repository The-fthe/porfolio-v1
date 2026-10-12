"use client"

import { useEffect, useRef } from "react"

export function ScrollTank() {
  const runway = useRef<HTMLDivElement>(null)
  const turret = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const area = runway.current
    const gun = turret.current
    if (!area || !gun) return
    const motion = matchMedia("(prefers-reduced-motion: reduce)")
    const pointer = matchMedia("(pointer: fine)")
    let visible = false
    let frame = 0
    let x = 0
    let y = 0
    const stop = () => { cancelAnimationFrame(frame); frame = 0 }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (!visible) stop()
    })
    observer.observe(area)
    const move = (event: PointerEvent) => {
      if (!visible || motion.matches || !pointer.matches || document.hidden) return
      x = event.clientX
      y = event.clientY
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const rig = gun.parentElement!.getBoundingClientRect()
        const angle = Math.atan2(y - (rig.top + 49), x - (rig.left + 75)) * 180 / Math.PI
        gun.style.transform = `rotate(${angle}deg)`
      })
    }
    const reset = () => { stop(); gun.style.transform = "" }
    window.addEventListener("pointermove", move, { passive: true })
    motion.addEventListener("change", reset)
    document.addEventListener("visibilitychange", stop)
    return () => {
      stop()
      observer.disconnect()
      window.removeEventListener("pointermove", move)
      motion.removeEventListener("change", reset)
      document.removeEventListener("visibilitychange", stop)
    }
  }, [])

  return <div className="tank-runway" ref={runway} aria-hidden="true">
    <div className="tank-tracks" />
    <div className="tank-rig">
      <img className="tank-body" src={`${import.meta.env.BASE_URL}works/tank-body.webp`} alt="" width={160} height={97} />
      <img className="tank-turret" ref={turret} src={`${import.meta.env.BASE_URL}works/tank-turret.webp`} alt="" width={160} height={97} />
    </div>
  </div>
}
