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

        // 1. Entrance "Getting Up" Reveal with smooth stagger & bidirectional reverse

        // Plays smoothly as the section enters, reverses smoothly when leaving

        gsap.fromTo(
          cardEls,

          {
            opacity: 0.15,

            y: 50,

            scale: 0.97,
          },

          {
            opacity: 1,

            y: 0,

            scale: 1,

            duration: 0.8,

            stagger: 0.08,

            ease: "power2.out",

            scrollTrigger: {
              trigger: gridEl,

              start: "top 88%",

              end: "bottom 12%",

              toggleActions: "play reverse play reverse",
            },
          },
        )

        // 2. Continuous Organic Parallax Floating: moving above & below as you scroll!

        // Using yPercent so it seamlessly operates alongside the pixel-based y transform.

        // Even indices float upward (above), odd indices float downward (below).

        // Scrub with 1.2s lag provides the silky inertia feel when scrolling forwards and backwards ("while get you back").

        cardEls.forEach((card, i) => {
          const shiftPercent = i % 2 === 0 ? -9 : 8

          gsap.fromTo(card, { yPercent: -shiftPercent }, {
            yPercent: shiftPercent,

            ease: "none",

            scrollTrigger: {
              trigger: gridEl,

              start: "top bottom",

              end: "bottom top",

              scrub: 1.2,
            },
          })
        })
      })
    })

    return () => {
      clearTimeout(timer)

      ctx.revert()
    }
  }, [activeView])
}
