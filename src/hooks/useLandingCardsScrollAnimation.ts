import { useEffect } from "react"

import { gsap } from "gsap"

import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/**
 * Custom hook to power high-performance, bidirectional card animations on the landing page:
 * 1. Initial "Getting Up" entrance reveal with smooth stagger as cards enter the viewport.
 * 2. Organic bidirectional parallax scrub (floating above and below) that responds continuously
 *    while scrolling down and in reverse when scrolling back up ("while get you back").
 */

export function useLandingCardsScrollAnimation(activeView: string) {
  useEffect(() => {
    // Only run on the home/landing page

    if (activeView !== "home") return

    if (typeof window === "undefined") return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    // Allow DOM and layouts to settle

    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 150)

    const ctx = gsap.context(() => {
      const cardSections = [
        { grid: ".metrics-grid", cards: ".metric-card" },

        { grid: ".services-grid", cards: ".service-card" },

        { grid: ".reliability-grid", cards: ".reliability-card" },

        { grid: ".pillars-grid", cards: ".pillar-card" },

        { grid: ".pricing-stats", cards: ".pricing-stat-card" },

        { grid: ".reasons-list", cards: ".reason-row" },

        { grid: ".testimonials-grid", cards: ".testimonial-card" },
      ]

      cardSections.forEach(({ grid, cards }) => {
        const gridEl = document.querySelector<HTMLElement>(grid)

        if (!gridEl) return

        const cardEls = gridEl.querySelectorAll<HTMLElement>(cards)

        if (!cardEls || cardEls.length === 0) return

        const isMobileScreen = window.innerWidth < 768

        // 1. Entrance Reveal: subtle fade and rise, once per viewport entry
        gsap.fromTo(
          cardEls,
          {
            opacity: isMobileScreen ? 0.35 : 0.25,
            y: isMobileScreen ? 16 : 36,
            scale: isMobileScreen ? 0.99 : 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: isMobileScreen ? 0.38 : 0.7,
            stagger: isMobileScreen ? 0.04 : 0.06,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridEl,
              start: isMobileScreen ? "top 95%" : "top 92%",
              toggleActions: "play none none none",
              once: true,
            },
          },
        )

        // 2. Parallax Floating: active on tablet/desktop (>= 768px), disabled on mobile for stable touch scrolling
        if (!isMobileScreen) {
          cardEls.forEach((card, i) => {
            const shiftPercent = i % 2 === 0 ? -8 : 8

            gsap.fromTo(
              card,
              { yPercent: -shiftPercent },
              {
                yPercent: shiftPercent,
                ease: "none",
                scrollTrigger: {
                  trigger: gridEl,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.2,
                },
              },
            )
          })
        }
      })
    })

    return () => {
      clearTimeout(timer)

      ctx.revert()
    }
  }, [activeView])
}
