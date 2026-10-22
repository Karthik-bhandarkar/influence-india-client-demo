import React, { useState } from "react"

const FLOW_STEPS = [
  {
    step: "01",

    label: "SOURCE",

    headline: "Talent Discovery",

    desc: "Rigorous talent screening across 30+ regional corridors and tier-2 hubs.",
  },

  {
    step: "02",

    label: "TRAIN",

    headline: "OSTP Academies",

    desc: "Role-specific training in simulated floor environments and etiquette.",
  },

  {
    step: "03",

    label: "CERTIFY",

    headline: "Statutory Vetting",

    desc: "Aadhaar verification, police clearance, medical test & PF/ESIC onboarding.",
  },

  {
    step: "04",

    label: "DEPLOY",

    headline: "Turnkey Induction",

    desc: "Direct floor integration with assigned Dedicated Operation Supervisors.",
  },

  {
    step: "05",

    label: "MANAGE",

    headline: "Autonomous SLA",

    desc: "24/7 attendance telemetry, performance tracking & <4hr standby backup.",
  },
]

export default function WhyChooseUsHighlights() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <div
      className="why-us-editorial-flow"
      style={{
        marginTop: "3rem",

        marginBottom: "3.5rem",
      }}
    >
      {/* 5-Step Process Sequence Capsules */}
      <div
        style={{
          display: "grid",

          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",

          gap: "1rem",
        }}
      >
        {FLOW_STEPS.map((item, idx) => {
          const isHovered = hoveredIdx === idx

          return (
            <div
              key={item.step}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                position: "relative",

                background: isHovered ? "var(--color-brand-light)" : "#ffffff",

                border: isHovered
                  ? "1px solid var(--color-brand-strong)"
                  : "1px solid var(--color-line)",

                borderRadius: "14px",

                padding: "1.4rem",

                boxShadow: isHovered
                  ? "0 10px 24px rgba(63, 110, 20, 0.12)"
                  : "0 4px 12px rgba(23, 29, 22, 0.03)",

                transform: isHovered ? "translateY(-4px)" : "translateY(0)",

                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",

                cursor: "default",
              }}
            >
              {/* Top Step Number & Label */}
              <div
                style={{
                  display: "flex",

                  alignItems: "center",

                  justifyContent: "space-between",

                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",

                    fontSize: "0.78rem",

                    fontWeight: 800,

                    color: isHovered
                      ? "var(--color-brand-strong)"
                      : "var(--color-muted)",
                  }}
                >
                  {item.step}
                </span>

                <span
                  style={{
                    fontFamily: "var(--font-mono)",

                    fontSize: "0.65rem",

                    fontWeight: 700,

                    letterSpacing: "0.14em",

                    padding: "0.18rem 0.5rem",

                    borderRadius: "9999px",

                    background: isHovered
                      ? "var(--color-brand-strong)"
                      : "rgba(23, 29, 22, 0.06)",

                    color: isHovered
                      ? "var(--color-paper)"
                      : "var(--color-ink)",

                    transition: "all 0.25s",
                  }}
                >
                  {item.label}
                </span>
              </div>

              {/* Headline */}
              <h4
                style={{
                  fontFamily: "var(--font-serif)",

                  fontSize: "1.2rem",

                  fontWeight: 600,

                  color: "var(--color-ink)",

                  lineHeight: 1.25,

                  marginBottom: "0.45rem",
                }}
              >
                {item.headline}
              </h4>

              {/* Blurb */}
              <p
                style={{
                  fontFamily: "var(--font-sans)",

                  fontSize: "0.84rem",

                  lineHeight: 1.55,

                  color: "var(--color-muted)",
                }}
              >
                {item.desc}
              </p>

              {/* Bottom active line */}
              <div
                style={{
                  position: "absolute",

                  bottom: 0,

                  left: 0,

                  right: 0,

                  height: "3px",

                  borderRadius: "0 0 14px 14px",

                  background: isHovered
                    ? "var(--color-brand-strong)"
                    : "transparent",

                  transition: "background 0.3s",
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
