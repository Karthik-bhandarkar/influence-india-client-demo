import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ReasonItem {
  number: string
  title: string
  tagline: string
  description: string
  image: string
  stamp?: string
  metric: string
}

const REASONS: ReasonItem[] = [
  {
    number: "01",
    title: "One point of contact",
    tagline: "Single-Window Accountability",
    description:
      "No more chasing multiple vendors. One dedicated team manages sourcing, training, deployment and replacement end to end.",
    image: "/images/workplace-team.jpg",
    metric: "1 Account Director · 0 Vendor Chasing",
  },
  {
    number: "02",
    title: "Full workforce visibility",
    tagline: "Live DOS Attendance & Telemetry",
    description:
      "Transparent, data-driven recruitment with real-time monitoring and proactive updates before issues become gaps.",
    image: "/images/operations-command.jpg",
    metric: "24/7 Operations Monitoring · Zero Guesswork",
  },
  {
    number: "03",
    title: "Compliance you can trust",
    tagline: "Statutory & Police Vetting Verified",
    description:
      "Trained, verified and certified employees — background checks and police verification (PVC) completed before deployment.",
    stamp: "PVC VERIFIED · 100% COMPLIANT",
    image: "/images/skill-certification.jpg",
    metric: "100% PVC Cleared Pre-Deployment",
  },
  {
    number: "04",
    title: "Flat, transparent pricing",
    tagline: "Zero Cap-Ex Predictable Structure",
    description:
      "Sector-friendly pricing and zero capital expenditure, for a financially advantageous skilled working solution.",
    image: "/images/corporate-interview.jpg",
    metric: "Flat Transparent Fee · Zero Hidden Outlays",
  },
  {
    number: "05",
    title: "Fast replacement resolution",
    tagline: "Rapid Standby Turnaround Guarantee",
    description:
      "Assistance for streamlined staffing, managing and replacement — so an absence never becomes an outage.",
    image: "/images/team-training.jpg",
    metric: "<4hr Rapid Standby Replacement",
  },
]

export default function WhyUsTactileAccordion() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-cycle through items 1 to 5 every 2 seconds in order
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % REASONS.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [isPaused])

  const activeItem = REASONS[activeIndex]

  return (
    <div
      className="reasons-accordion-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left Column: 5 Accordion Rows */}
      <div className="reasons-accordion-list" role="tablist" aria-label="Five decisive reasons">
        {REASONS.map((reason, idx) => {
          const isActive = activeIndex === idx

          return (
            <div
              key={reason.number}
              role="tab"
              aria-selected={isActive}
              tabIndex={0}
              className={`reason-accordion-item ${isActive ? "is-active" : ""}`}
              onClick={() => setActiveIndex(idx)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  setActiveIndex(idx)
                }
              }}
            >
              {/* Top 2s Animated Progress Timer for the Active Item */}
              {isActive && (
                <div
                  key={`timer-${activeIndex}`}
                  className="reason-accordion-timer"
                  style={{ animationPlayState: isPaused ? "paused" : "running" }}
                />
              )}

              <div className="reason-accordion-header">
                <span className="reason-accordion-num">{reason.number}</span>
                <div className="reason-accordion-title-block">
                  <h3 className="reason-accordion-title">{reason.title}</h3>
                  {reason.stamp && (
                    <span className="reason-accordion-stamp">
                      ✦ {reason.stamp}
                    </span>
                  )}
                </div>
                <div className={`reason-accordion-check ${isActive ? "is-active" : ""}`}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>

              {/* Collapsible Content */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="reason-accordion-body"
                  >
                    <p className="reason-accordion-desc">{reason.description}</p>

                    {/* Mobile Only: Inline Image */}
                    <div className="reason-accordion-mobile-thumb">
                      <img src={reason.image} alt={reason.title} loading="lazy" />
                      <div className="mobile-thumb-meta">
                        <span className="mobile-thumb-tag">{reason.tagline}</span>
                        <span className="mobile-thumb-metric">{reason.metric}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}

        {/* Playback Status Bar */}
        <div className="reasons-accordion-status-pill">
          <span className="status-dot-pulse" />
          <span>
            {isPaused ? "Paused on hover" : "Auto-cycling every 2 seconds"}
          </span>
          <span className="status-step-counter">
            Step 0{activeIndex + 1} / 05
          </span>
        </div>
      </div>

      {/* Right Column: High-Impact Visual Showcase Panel */}
      <div className="reasons-showcase-panel">
        <div className="reasons-showcase-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.number}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="reasons-showcase-media-wrap"
            >
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="reasons-showcase-img"
              />
              <div className="reasons-showcase-overlay">
                <div className="reasons-showcase-top-badge">
                  <span className="showcase-num-tag">{activeItem.number}</span>
                  <span className="showcase-tagline">{activeItem.tagline}</span>
                </div>
                <div className="reasons-showcase-bottom-caption">
                  <h4 className="showcase-title">{activeItem.title}</h4>
                  <p className="showcase-metric">{activeItem.metric}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
