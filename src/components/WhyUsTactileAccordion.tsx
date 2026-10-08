import React, { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export interface AccordionItem {
  id: string | number
  title: string
  badge: string
  claim: string
  image: string
  alt: string
  stamp?: string
}

const INFLUENCE_REASONS: AccordionItem[] = [
  {
    id: 1,
    title: "One point of contact",
    badge: "01",
    claim:
      "No more chasing multiple vendors. One dedicated team manages sourcing, training, deployment and replacement end to end.",
    image: "/images/workplace-team.jpg",
    alt: "Single point of contact workforce team collaborating",
  },
  {
    id: 2,
    title: "Full workforce visibility",
    badge: "02",
    claim:
      "Transparent, data-driven recruitment with real-time monitoring and proactive updates before issues become gaps.",
    image: "/images/operations-command.jpg",
    alt: "Live DOS attendance and operations command telemetry",
  },
  {
    id: 3,
    title: "Compliance you can trust",
    badge: "03",
    claim:
      "Trained, verified and certified employees — background checks and police verification (PVC) completed before deployment.",
    stamp: "PVC VERIFIED · 100% COMPLIANT",
    image: "/images/skill-certification.jpg",
    alt: "Statutory vetting and certified workforce aspirants",
  },
  {
    id: 4,
    title: "Flat, transparent pricing",
    badge: "04",
    claim:
      "Sector-friendly pricing and zero capital expenditure, for a financially advantageous skilled working solution.",
    image: "/images/corporate-interview.jpg",
    alt: "Flat fee predictable enterprise staffing planning",
  },
  {
    id: 5,
    title: "Fast replacement resolution",
    badge: "05",
    claim:
      "Assistance for streamlined staffing, managing and replacement — so an absence never becomes an outage.",
    image: "/images/team-training.jpg",
    alt: "Rapid standby turnaround and shift backup deployment",
  },
]

const springPhysics = {
  type: "spring" as const,
  stiffness: 340,
  damping: 28,
  mass: 0.8,
}

const bouncySpring = {
  type: "spring" as const,
  stiffness: 400,
  damping: 22,
}

export interface AccordionOSProps {
  items?: AccordionItem[]
  defaultActiveIndex?: number | null
  className?: string
  containerHeight?: number | string
  containerWidth?: number | string
  autoPlay?: boolean
  autoPlayInterval?: number
  pauseOnHover?: boolean
  onItemChange?: (index: number | null) => void
}

export function AccordionOS({
  items = INFLUENCE_REASONS,
  defaultActiveIndex = 0,
  className = "",
  containerHeight = 520,
  containerWidth = "100%",
  autoPlay = true,
  autoPlayInterval = 5000, // 5-second order-wise cycle as requested
  pauseOnHover = true,
  onItemChange,
}: AccordionOSProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(defaultActiveIndex)
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const handleToggle = useCallback(
    (index: number) => {
      setActiveIndex((prev) => {
        const next = prev === index ? null : index
        onItemChange?.(next)
        return next
      })
    },
    [onItemChange],
  )

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return 0
      const next = prev > 0 ? prev - 1 : items.length - 1
      onItemChange?.(next)
      return next
    })
  }, [items.length, onItemChange])

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return 0
      const next = prev < items.length - 1 ? prev + 1 : 0
      onItemChange?.(next)
      return next
    })
  }, [items.length, onItemChange])

  // Automatic slide changing (AutoPlay every 2 seconds order-wise)
  useEffect(() => {
    if (!autoPlay || (pauseOnHover && isHovered)) return

    const interval = setInterval(() => {
      handleNext()
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, pauseOnHover, isHovered, handleNext])

  // Global Keyboard Navigation (ArrowUp, ArrowDown, W/S, 1-5, Escape)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase()
      if (tag === "input" || tag === "textarea" || (e.target as HTMLElement)?.isContentEditable) {
        return
      }

      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key.toLowerCase() === "s") {
        e.preventDefault()
        handleNext()
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key.toLowerCase() === "w") {
        e.preventDefault()
        handlePrev()
      } else if (e.key === "Escape") {
        e.preventDefault()
        setActiveIndex(null)
        onItemChange?.(null)
      } else if (["1", "2", "3", "4", "5"].includes(e.key)) {
        const num = parseInt(e.key, 10) - 1
        if (num < items.length) {
          e.preventDefault()
          setActiveIndex(num)
          onItemChange?.(num)
        }
      }
    }

    window.addEventListener("keydown", handleGlobalKeyDown)
    return () => window.removeEventListener("keydown", handleGlobalKeyDown)
  }, [handleNext, handlePrev, items.length, onItemChange])

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`accordion-os-root ${className}`}
      style={{
        width: typeof containerWidth === "number" ? `${containerWidth}px` : containerWidth,
        maxWidth: "100%",
      }}
    >
      <motion.div
        className="accordion-os-card"
        style={{
          height: typeof containerHeight === "number" ? `${containerHeight}px` : containerHeight,
        }}
        initial={{ opacity: 0, scale: 0.98, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Left Interactive Column */}
        <div className="accordion-os-sidebar">
          {/* Accordion Items */}
          <div className="accordion-os-items-stack">
            {items.map((item, index) => {
              const isOpen = activeIndex === index
              return (
                <motion.div
                  key={item.id ?? index}
                  layout
                  transition={springPhysics}
                  onClick={() => handleToggle(index)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isOpen}
                  whileHover={{ scale: isOpen ? 1.01 : 1.025, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`accordion-os-pill ${isOpen ? "accordion-os-pill-open" : "accordion-os-pill-closed"}`}
                >
                  <div className="accordion-os-title-stack">
                    <motion.div
                      className="accordion-os-icon-btn"
                      animate={{
                        backgroundColor: isOpen ? "rgba(23, 29, 22, 0.92)" : "rgba(255, 255, 255, 0.88)",
                        color: isOpen ? "#ffffff" : "rgb(23, 29, 22)",
                        borderColor: isOpen ? "rgba(23, 29, 22, 0.8)" : "rgba(23, 29, 22, 0.15)",
                      }}
                      whileHover={{ scale: 1.15, rotate: isOpen ? -45 : 90 }}
                      whileTap={{ scale: 0.9 }}
                      transition={bouncySpring}
                    >
                      <motion.svg
                        viewBox="0 0 24 24"
                        className="accordion-os-svg-icon"
                        animate={{ rotate: isOpen ? 135 : 0 }}
                        transition={bouncySpring}
                      >
                        <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                        <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                      </motion.svg>
                    </motion.div>

                    <div className="accordion-os-title-wrapper">
                      <span className="accordion-os-title-text">{item.title}</span>
                      <span className={`accordion-os-pill-badge ${isOpen ? "accordion-os-pill-badge-active" : ""}`}>
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="claim-content"
                        initial={{ opacity: 0, height: 0, marginTop: 0, filter: "blur(4px)" }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                          marginTop: 12,
                          filter: "blur(0px)",
                          transition: {
                            height: { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
                            opacity: { duration: 0.28, delay: 0.06 },
                            filter: { duration: 0.25 },
                          },
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                          marginTop: 0,
                          filter: "blur(4px)",
                          transition: {
                            height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                            opacity: { duration: 0.15 },
                          },
                        }}
                        className="accordion-os-claim-container"
                      >
                        <motion.p
                          initial={{ y: 6 }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.25, delay: 0.05 }}
                          className="accordion-os-claim-text"
                        >
                          {item.claim}
                        </motion.p>
                        {item.stamp && (
                          <div style={{ marginTop: "0.65rem" }}>
                            <span className="accordion-os-inline-stamp">✦ {item.stamp}</span>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom Floating Navigation Deck */}
          <div className="accordion-os-bottom-deck">
            <AnimatePresence>
              {activeIndex !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.9 }}
                  transition={bouncySpring}
                  className="accordion-os-nav-stack"
                >
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous (Up Arrow)"
                    className="accordion-os-nav-btn"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="accordion-os-nav-svg">
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                  </button>

                  <div className="accordion-os-counter">
                    <span>{String((activeIndex ?? 0) + 1).padStart(2, "0")}</span>
                    <span className="accordion-os-counter-divider">/</span>
                    <span>{String(items.length).padStart(2, "0")}</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next (Down Arrow)"
                    className="accordion-os-nav-btn"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="accordion-os-nav-svg">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Persistent Pre-Decoded Instant GPU Visual Layers */}
        <div className="accordion-os-visual-wrapper">
          {items.map((item, idx) => {
            const isActive = activeIndex === idx
            return (
              <motion.div
                key={item.id ?? idx}
                className="accordion-os-image-layer"
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 1.04,
                  zIndex: isActive ? 3 : 1,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={item.image}
                  alt={item.alt || item.title}
                  className="accordion-os-image"
                  loading="eager"
                  decoding="async"
                />
                <div className="accordion-os-image-scrim" />
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Embedded Component Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .accordion-os-root {
          box-sizing: border-box;
          margin: 2.5rem auto 0;
          font-family: var(--font-sans), system-ui, sans-serif;
          user-select: none;
          perspective: 1200px;
          container-type: inline-size;
        }

        .accordion-os-card {
          position: relative;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: stretch;
          background-color: #0b1510;
          border-radius: 36px;
          padding: 24px;
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(63, 110, 20, 0.2);
        }

        .accordion-os-sidebar {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          width: 320px;
          height: 100%;
          flex-shrink: 0;
          pointer-events: auto;
        }

        .accordion-os-items-stack {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          width: 100%;
          z-index: 10;
        }

        .accordion-os-pill {
          width: fit-content;
          max-width: 320px;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          background-color: rgba(245, 245, 247, 0.78);
          border-radius: 24px;
          padding: 12px 18px;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.75);
          transition: background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          outline: none;
          box-sizing: border-box;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
        }

        .accordion-os-pill:hover {
          border-color: rgba(63, 110, 20, 0.35);
          background-color: rgba(255, 255, 255, 0.94);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }

        .accordion-os-pill:focus-visible {
          box-shadow: 0 0 0 2px var(--color-brand-strong);
        }

        .accordion-os-pill-open {
          width: 320px;
          background-color: rgba(255, 255, 255, 0.92);
          border-color: rgba(63, 110, 20, 0.4);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(63, 110, 20, 0.2);
        }

        .accordion-os-title-stack {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
        }

        .accordion-os-icon-btn {
          width: 24px;
          height: 24px;
          border-radius: 9999px;
          border: 1.5px solid rgba(23, 29, 22, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: rgb(23, 29, 22);
          background: rgba(255, 255, 255, 0.85);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
        }

        .accordion-os-svg-icon {
          width: 14px;
          height: 14px;
        }

        .accordion-os-title-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 8px;
        }

        .accordion-os-title-text {
          font-family: var(--font-editorial-serif), 'Playfair Display', Georgia, serif;
          font-size: 15px;
          font-weight: 600;
          color: #171d16;
          letter-spacing: -0.015em;
          white-space: nowrap;
        }

        .accordion-os-pill-badge {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: rgba(23, 29, 22, 0.45);
          font-variant-numeric: tabular-nums;
        }

        .accordion-os-pill-badge-active {
          color: var(--color-brand-strong);
        }

        .accordion-os-claim-container {
          overflow: hidden;
          width: 100%;
        }

        .accordion-os-claim-text {
          margin: 0;
          font-family: var(--font-sans);
          font-size: 13px;
          line-height: 1.55;
          color: #3b4438;
          word-break: break-word;
        }

        .accordion-os-inline-stamp {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #2b520c;
          background: #eff7dc;
          border: 1px solid #c4e28c;
          padding: 2px 8px;
          border-radius: 9999px;
        }

        .accordion-os-bottom-deck {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          z-index: 10;
          margin-top: auto;
          padding-top: 18px;
        }

        .accordion-os-nav-stack {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          padding: 5px 8px;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
        }

        .accordion-os-nav-btn {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          border-radius: 9999px;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #171d16;
          border: 1px solid rgba(23, 29, 22, 0.12);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
          transition: transform 0.2s ease, background-color 0.2s ease;
        }

        .accordion-os-nav-btn:hover {
          background-color: var(--color-lime);
          border-color: var(--color-brand-strong);
          transform: scale(1.08);
        }

        .accordion-os-nav-svg {
          width: 14px;
          height: 14px;
          display: block;
        }

        .accordion-os-counter {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 28px;
          padding: 0 4px;
          gap: 4px;
          font-family: var(--font-mono);
          font-size: 11.5px;
          font-weight: 700;
          line-height: 1;
          color: #171d16;
          font-variant-numeric: tabular-nums;
        }

        .accordion-os-counter-divider {
          opacity: 0.35;
        }

        .accordion-os-visual-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .accordion-os-image-layer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          will-change: opacity, transform;
        }

        .accordion-os-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: 36px;
          display: block;
        }

        .accordion-os-image-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(3, 26, 16, 0.55) 0%, rgba(3, 26, 16, 0.2) 40%, transparent 80%),
                      radial-gradient(circle at 20% 50%, rgba(3, 26, 16, 0.4) 0%, transparent 60%);
          border-radius: 36px;
        }

        @container (max-width: 680px) {
          .accordion-os-card {
            flex-direction: column;
            justify-content: flex-start;
            height: auto !important;
            min-height: 520px;
            padding: 16px;
            border-radius: 26px;
          }

          .accordion-os-sidebar {
            width: 100%;
            height: auto;
          }

          .accordion-os-pill {
            max-width: 100%;
            padding: 11px 16px;
            border-radius: 20px;
          }

          .accordion-os-pill-open {
            width: 100%;
            max-width: 100%;
          }

          .accordion-os-title-text {
            font-size: 14.5px;
            white-space: normal;
          }

          .accordion-os-bottom-deck {
            margin-top: 20px;
            margin-bottom: 8px;
          }

          .accordion-os-image,
          .accordion-os-image-scrim {
            border-radius: 26px;
          }
        }
      ` }} />
    </div>
  )
}

export default function WhyUsTactileAccordion() {
  return <AccordionOS />
}
