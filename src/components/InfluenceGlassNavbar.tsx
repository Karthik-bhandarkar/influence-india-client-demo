"use client"

/**
 * Influence India Services — Glass Navbar
 *
 * Adapted from PODIE `aicanvas--glass-navbar` (MIT License (c) 2026 AI Canvas).
 * Preserves the original fluid spring animations, sliding layoutId active pill,
 * glassmorphic backdrop filters, rotating emblem, and responsive animated dropdown.
 * Styled with Influence India Services' signature dark-ink palette and vibrant lime accents.
 */

// Close mobile menu on Escape key

// Glass styles following PODIE design
/* Main Floating Glass Navbar */ /* Glass blur background layer */ /* Left: Brand Identity with Rotating PODIE-style Badge */ /* Center: Desktop Navigation Links with Animated layoutId Sliding Pill */ /* Sliding capsule indicator from PODIE */ /* Right: Actions (Roster Desk Drawer + WhatsApp CTA) */ /* Mobile Menu Button with Animated Phosphor Icons */ /* Mobile Animated Dropdown with Spring Motion from PODIE */ /* Roster Desk quick button in mobile */ /* Mobile Links */ /* Mobile WhatsApp CTA */

import { useState, useEffect, useRef } from "react"

import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

import { List, X } from "@phosphor-icons/react"

import type { ActiveView } from "../App"

export interface NavItem {
  label: string

  href: string
}

interface GlassNavbarProps {
  items: NavItem[]

  activeView: ActiveView

  onNavigate: (href: string) => void

  onOpenRoster?: () => void

  whatsappUrl: string
}

export default function InfluenceGlassNavbar({
  items,

  activeView,

  onNavigate,

  onOpenRoster,

  whatsappUrl,
}: GlassNavbarProps) {
  const [hovered, setHovered] = useState<string | null>(null)

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleRef = useRef<HTMLButtonElement>(null)

  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (
        e.key ===
          "Escape" &&
        menuOpen
      ) {
        setMenuOpen(false)

        toggleRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [menuOpen])

  const glassStyle = {
    background: "rgba(13, 15, 17, 0.88)",

    border: "1px solid rgba(255, 255, 255, 0.12)",

    boxShadow:
      "0 12px 36px -4px rgba(0, 0, 0, 0.45), 0 4px 12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.14)",
  }

  const glassBlur = {
    backdropFilter: "blur(24px) saturate(1.8)",

    WebkitBackdropFilter: "blur(24px) saturate(1.8)",
  }

  const limeCtaStyle = {
    background:
      "linear-gradient(135deg, rgba(200, 255, 0, 0.95), rgba(164, 232, 55, 0.9))",

    border: "1px solid rgba(200, 255, 0, 0.6)",

    boxShadow: "0 2px 14px rgba(200, 255, 0, 0.35)",

    color: "#111315",
  }

  const limeCtaHover = {
    background:
      "linear-gradient(135deg, rgba(215, 255, 30, 1), rgba(180, 245, 60, 0.95))",

    boxShadow: "0 4px 22px rgba(200, 255, 0, 0.6)",
  }

  return (
    <header className="sticky top-3 z-40 flex w-full justify-center px-3 sm:px-6 pointer-events-none transition-all">
      <div className="relative flex w-full max-w-[1240px] flex-col pointer-events-auto">
        {}
        <motion.nav
          initial={shouldReduceMotion ? { y: 0 } : { y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",

            stiffness: shouldReduceMotion ? 1000 : 220,

            damping: 24,
          }}
          className="relative isolate flex w-full items-center justify-between gap-1.5 rounded-full px-2.5 py-2 sm:px-4 sm:py-2.5 transition-shadow"
          style={glassStyle}
          aria-label="Main glass navigation"
        >
          {}
          <div
            className="pointer-events-none absolute inset-0 z-[-1] rounded-full"
            style={glassBlur}
          />

          {}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()

              onNavigate("home")
            }}
            className="flex cursor-pointer items-center gap-2.5 pl-1.5 pr-2 py-1 select-none group"
            aria-label="Influence India Services — Return to Home"
          >
            <motion.div
              animate={shouldReduceMotion ? {} : { rotate: [0, 360] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="h-7 w-7 rounded-lg flex items-center justify-center p-0.5 shadow-sm flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #d2f802, #00d26a)",
              }}
            >
              <span className="text-[10px] font-black tracking-tighter text-black select-none">
                IIS
              </span>
            </motion.div>

            <span className="brand-image block w-[84px] sm:w-[94px] transition-transform duration-200 group-hover:scale-105">
              <img
                src="/images/influence-india-logo.png"
                width="1600"
                height="1081"
                alt="Influence India Services"
                className="h-auto w-full filter brightness-0 invert opacity-95"
              />
            </span>
          </a>

          {}
          <div className="hidden items-center gap-0.5 md:flex lg:gap-1">
            {items.map((item) => {
              const cleanHref = item.href.replace("#", "")

              const isSelected =
                activeView === cleanHref ||
                (cleanHref === "about" && activeView === "about")

              const isHovered = hovered === item.href

              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()

                    onNavigate(item.href)
                  }}
                  onHoverStart={() => setHovered(item.href)}
                  onHoverEnd={() => setHovered(null)}
                  className="relative cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors uppercase lg:px-4 lg:text-[13px]"
                  style={{
                    color: isSelected
                      ? "#c8ff00"
                      : isHovered
                        ? "rgba(255, 255, 255, 0.95)"
                        : "rgba(255, 255, 255, 0.65)",
                  }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
                >
                  {}
                  {isSelected && (
                    <motion.div
                      layoutId="glass-nav-active"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "rgba(200, 255, 0, 0.12)",

                        border: "1px solid rgba(200, 255, 0, 0.3)",

                        boxShadow: "0 0 16px rgba(200, 255, 0, 0.15)",
                      }}
                      transition={{
                        type: "spring",

                        stiffness: 420,

                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.a>
              )
            })}
          </div>

          {}
          <div className="hidden items-center gap-2 sm:flex">
            {onOpenRoster && (
              <motion.button
                type="button"
                onClick={onOpenRoster}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 1.03,

                        backgroundColor: "rgba(255, 255, 255, 0.14)",
                      }
                }
                whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
                className="flex cursor-pointer items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white/80 transition-colors"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",

                  border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c8ff00] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c8ff00]" />
                </span>
                <span>Roster Desk</span>
              </motion.button>
            )}

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={
                shouldReduceMotion ? {} : { scale: 1.04, ...limeCtaHover }
              }
              whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
              className="flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
              style={limeCtaStyle}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>WhatsApp</span>
            </motion.a>
          </div>

          {}
          <motion.button
            ref={toggleRef}
            type="button"
            className="mr-1 flex cursor-pointer items-center justify-center rounded-full p-2 text-white/80 md:hidden transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
            style={{
              background: menuOpen
                ? "rgba(200, 255, 0, 0.15)"
                : "rgba(255, 255, 255, 0.08)",

              border: "1px solid rgba(255, 255, 255, 0.12)",

              color: menuOpen ? "#c8ff00" : "rgba(255, 255, 255, 0.85)",
            }}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open navigation menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="x"
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { rotate: -90, opacity: 0 }
                  }
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { rotate: 0, opacity: 1 }
                  }
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { rotate: 90, opacity: 0 }
                  }
                  transition={{ duration: 0.15 }}
                >
                  <X size={18} weight="bold" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { rotate: 90, opacity: 0 }
                  }
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { rotate: 0, opacity: 1 }
                  }
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { rotate: -90, opacity: 0 }
                  }
                  transition={{ duration: 0.15 }}
                >
                  <List size={18} weight="bold" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.nav>

        {}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -10, scale: 0.97 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -10, scale: 0.97 }
              }
              transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative isolate mt-2 flex flex-col gap-1.5 rounded-3xl p-3 md:hidden shadow-2xl"
              style={glassStyle}
            >
              <div
                className="pointer-events-none absolute inset-0 z-[-1] rounded-3xl"
                style={glassBlur}
              />

              {}
              {onOpenRoster && (
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false)

                    onOpenRoster()
                  }}
                  className="flex cursor-pointer items-center justify-between rounded-2xl px-4 py-2.5 text-sm font-semibold text-white/90 transition-colors"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",

                    border: "1px solid rgba(255, 255, 255, 0.12)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c8ff00] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c8ff00]" />
                    </span>
                    <span>Fast-Track Roster Desk</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#c8ff00]">
                    LIVE
                  </span>
                </button>
              )}

              {}
              {items.map((item) => {
                const cleanHref = item.href.replace("#", "")

                const isSelected =
                  activeView === cleanHref ||
                  (cleanHref === "about" && activeView === "about")

                return (
                  <button
                    key={item.href}
                    onClick={() => {
                      setMenuOpen(false)

                      onNavigate(item.href)
                    }}
                    className="flex cursor-pointer items-center justify-between rounded-full px-4 py-2.5 text-left text-sm font-medium transition-colors"
                    style={{
                      color: isSelected
                        ? "#c8ff00"
                        : "rgba(255, 255, 255, 0.75)",

                      background: isSelected
                        ? "rgba(200, 255, 0, 0.12)"
                        : "transparent",

                      border: isSelected
                        ? "1px solid rgba(200, 255, 0, 0.25)"
                        : "1px solid transparent",
                    }}
                  >
                    <span>{item.label}</span>
                    {isSelected && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c8ff00]" />
                    )}
                  </button>
                )
              })}

              {}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-1 flex cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2.5 text-center text-sm font-bold uppercase tracking-wider"
                style={limeCtaStyle}
              >
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
