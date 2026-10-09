import { useEffect } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function LenisSmoothScroll() {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    if (prefersReducedMotion) return

    gsap.registerPlugin(ScrollTrigger)

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768

    const lenis = new Lenis({
      duration: isMobile ? 0.9 : 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.0,
      autoRaf: false,
    })

    // Store global reference for view change smooth resets
    ;(window as any).__lenis = lenis

    // Sync Lenis scroll with GSAP ScrollTrigger on every frame
    const handleScroll = () => {
      ScrollTrigger.update()
    }
    lenis.on("scroll", handleScroll)

    // Connect Lenis smoothly into GSAP's high-precision render loop
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(tickerCallback)
    gsap.ticker.lagSmoothing(0)

    // Refresh triggers once layout settles
    ScrollTrigger.refresh()

    return () => {
      lenis.off("scroll", handleScroll)
      gsap.ticker.remove(tickerCallback)
      lenis.destroy()
      delete (window as any).__lenis
    }
  }, [])

  return null
}
