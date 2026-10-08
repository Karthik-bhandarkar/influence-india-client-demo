import { useEffect, useId, useState, type CSSProperties, type KeyboardEvent } from "react"
import { motion, useReducedMotion } from "framer-motion"

export interface WorkforceStage {
  id: string
  number: string
  title: string
  shortLabel: string
  deliverable: string
  metric: string
  description: string
  deliverables: string[]
}

const STAGES: WorkforceStage[] = [
  {
    id: "source",
    number: "01",
    title: "Pan-India Sourcing",
    shortLabel: "SOURCE",
    deliverable: "30+ Corridor Talent Pipeline",
    metric: "48-Hour Talent Shortlist",
    description:
      "Active talent discovery and scouting across tier-1, tier-2, and industrial corridors. We tap pre-screened aspirant pipelines matched directly to your shift schedules.",
    deliverables: [
      "Grassroots scouting across 30+ regional recruitment hubs",
      "Rigorous role-competency baseline screening",
      "Immediate digital candidate profiles & documentation vault",
    ],
  },
  {
    id: "train",
    number: "02",
    title: "Ground Training Program",
    shortLabel: "TRAIN",
    deliverable: "Role-Specific OSTP Academies",
    metric: "100% Floor Readiness",
    description:
      "Aspirants undergo our dedicated Onsite Skill Training Program (OSTP) simulating your exact work environment, machinery, grooming standards, and etiquette before deployment.",
    deliverables: [
      "Standard Operating Procedure (SOP) mastery & grooming etiquette",
      "Sector-specific safety, POS & mechanical floor training",
      "Simulated high-pressure operational environment assessments",
    ],
  },
  {
    id: "certify",
    number: "03",
    title: "Statutory & Skill Certification",
    shortLabel: "CERTIFY",
    deliverable: "100% Background & Police Clearance",
    metric: "Zero Compliance Vulnerability",
    description:
      "Full background vetting, Aadhaar biometric authentication, police clearance, medical fitness check, and strict PF/ESIC statutory enrollment prior to day one.",
    deliverables: [
      "Comprehensive criminal record & court verification checks",
      "Biometric identity audit with digital credential verification",
      "Statutory PF, ESIC & labour regulatory compliance onboarding",
    ],
  },
  {
    id: "deploy",
    number: "04",
    title: "Managed Field Deployment",
    shortLabel: "DEPLOY",
    deliverable: "Onsite Supervisor & Shift Rostering",
    metric: "Day-One Floor Productivity",
    description:
      "Turnkey induction directly at your facility in Bengaluru or nationwide. We place Dedicated Operation Supervisors (DOS) on the ground to oversee attendance and shift handovers.",
    deliverables: [
      "Onsite supervisor assigned to every deployment cohort",
      "Digital geo-tagged biometric attendance tracking",
      "Seamless day-one floor integration with zero client downtime",
    ],
  },
  {
    id: "manage",
    number: "05",
    title: "Autonomous SLA Monitoring",
    shortLabel: "MANAGE",
    deliverable: "24/7 Dedicated Ops & Standby Pool",
    metric: "< 4hr Standby Replacement",
    description:
      "Continuous real-time roster management, performance tracking, payroll handling, and our guaranteed under-4-hour backup replacement SLA for zero floor disruption.",
    deliverables: [
      "Dedicated Operation System (DOS) live attendance telemetry",
      "Instant standby roster dispatch for emergency absences",
      "Single-point escalation desk active 24/7, 365 days a year",
    ],
  },
]

export default function OrbitalWorkforceEngine() {
  const [activeStage, setActiveStage] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const uniqueId = useId().replace(/:/g, "")

  // Auto-advance loop when not paused
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % STAGES.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [isPaused, prefersReducedMotion])

  const current = STAGES[activeStage]

  // Calculate coordinates on a circle (radius = 165)
  const radius = 165
  const center = 210
  const nodePositions = STAGES.map((_, idx) => {
    // 5 nodes spaced evenly (72 degrees each), starting at top (-90 deg)
    const angle = (idx * 72 - 90) * (Math.PI / 180)
    const x = center + radius * Math.cos(angle)
    const y = center + radius * Math.sin(angle)
    return { x, y }
  })

  return (
    <div
      className="orbital-engine-container"
      style={{
        position: "relative",
        width: "100%",
        marginTop: "3rem",
      }}
    >
      {/* Visual Subtitle & Telemetry Header */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          marginBottom: "2.5rem",
          paddingBottom: "1.25rem",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
              padding: "0.28rem 0.75rem",
              borderRadius: "9999px",
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontFamily: "var(--font-mono)",
              background: "rgba(196, 230, 80, 0.15)",
              color: "var(--color-lime)",
              border: "1px solid rgba(196, 230, 80, 0.35)",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--color-lime)",
                boxShadow: "0 0 8px var(--color-lime)",
              }}
            />
            DOS ACTIVE · 0 OUTAGES
          </span>
          <span
            style={{
              fontSize: "0.78rem",
              color: "rgba(248, 248, 242, 0.65)",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.08em",
            }}
          >
            CLOSED-LOOP WORKFORCE GOVERNANCE
          </span>
        </div>

        {/* Play / Pause Toggle */}
        <button
          type="button"
          onClick={() => setIsPaused(!isPaused)}
          className="orbital-pause-btn"
          title={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            padding: "0.35rem 0.85rem",
            borderRadius: "9999px",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.16)",
            color: "var(--color-paper)",
            fontSize: "0.7rem",
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.08em",
            transition: "all 0.2s ease",
          }}
        >
          <span>{isPaused ? "▶ RESUME" : "⏸ PAUSE"}</span>
        </button>
      </div>

      {/* Main Dual Grid: Interactive Orbit Visualizer + Live Stage Inspector */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        {/* Left: The Concentric Orbital Visualizer */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: "440px",
            margin: "0 auto",
            aspectRatio: "1 / 1",
          }}
        >
          {/* Ambient Radial Lime Glow */}
          <div
            style={{
              position: "absolute",
              inset: "10%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(196, 230, 80, 0.12) 0%, rgba(63, 110, 20, 0.08) 50%, transparent 75%)",
              filter: "blur(28px)",
              pointerEvents: "none",
            }}
          />

          {/* SVG Orbit Tracks */}
          <svg
            viewBox="0 0 420 420"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              overflow: "visible",
            }}
          >
            {/* Outer Concentric Hairline Ring */}
            <circle
              cx={center}
              cy={center}
              r={195}
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="1"
              strokeDasharray="4 6"
            />

            {/* Primary Main Orbit Track */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke="rgba(196, 230, 80, 0.28)"
              strokeWidth="1.8"
            />

            {/* Inner Concentric Hairline Ring */}
            <circle
              cx={center}
              cy={center}
              r={115}
              fill="none"
              stroke="rgba(255, 255, 255, 0.07)"
              strokeWidth="1"
              strokeDasharray="2 4"
            />

            {/* Connecting Vector Rays to Selected Node */}
            <line
              x1={center}
              y1={center}
              x2={nodePositions[activeStage].x}
              y2={nodePositions[activeStage].y}
              stroke="var(--color-lime)"
              strokeWidth="2"
              strokeDasharray="3 3"
              opacity="0.85"
            />

            {/* Orbit Arc Connector between nodes */}
            <path
              d={`M ${nodePositions[0].x} ${nodePositions[0].y} L ${nodePositions[1].x} ${nodePositions[1].y} L ${nodePositions[2].x} ${nodePositions[2].y} L ${nodePositions[3].x} ${nodePositions[3].y} L ${nodePositions[4].x} ${nodePositions[4].y} Z`}
              fill="none"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="1"
            />
          </svg>

          {/* Central System Core Card */}
          <div
            style={{
              position: "relative",
              zIndex: 3,
              width: "155px",
              height: "155px",
              borderRadius: "50%",
              background: "rgba(18, 23, 17, 0.92)",
              backdropFilter: "blur(12px)",
              border: "1.5px solid rgba(196, 230, 80, 0.45)",
              boxShadow:
                "0 0 25px rgba(196, 230, 80, 0.15), inset 0 0 15px rgba(0, 0, 0, 0.5)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "1rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                letterSpacing: "0.18em",
                fontWeight: 700,
                color: "var(--color-lime)",
                textTransform: "uppercase",
              }}
            >
              SYSTEM CORE
            </span>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "var(--color-paper)",
                lineHeight: 1.1,
                marginTop: "0.25rem",
              }}
            >
              WORKFORCE
            </span>
            <span
              style={{
                fontSize: "0.65rem",
                fontFamily: "var(--font-mono)",
                color: "rgba(248, 248, 242, 0.55)",
                marginTop: "0.35rem",
                letterSpacing: "0.06em",
              }}
            >
              STAGE {current.number} OF 05
            </span>
          </div>

          {/* Orbiting Interactive Satellites */}
          {STAGES.map((stage, idx) => {
            const pos = nodePositions[idx]
            const isSelected = activeStage === idx

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => {
                  setActiveStage(idx)
                  setIsPaused(true)
                }}
                className={`orbit-node-btn ${isSelected ? "is-selected" : ""}`}
                style={{
                  position: "absolute",
                  left: `${pos.x}px`,
                  top: `${pos.y}px`,
                  transform: "translate(-50%, -50%)",
                  zIndex: isSelected ? 10 : 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: isSelected ? "54px" : "44px",
                  height: isSelected ? "54px" : "44px",
                  borderRadius: "50%",
                  background: isSelected
                    ? "var(--color-lime)"
                    : "rgba(24, 30, 23, 0.96)",
                  color: isSelected ? "var(--color-ink)" : "var(--color-paper)",
                  border: isSelected
                    ? "2px solid #ffffff"
                    : "1.5px solid rgba(255, 255, 255, 0.22)",
                  boxShadow: isSelected
                    ? "0 0 20px var(--color-lime), 0 4px 12px rgba(0, 0, 0, 0.4)"
                    : "0 2px 8px rgba(0, 0, 0, 0.3)",
                  cursor: "pointer",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                aria-label={`Inspect Stage ${stage.number}: ${stage.title}`}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: isSelected ? "0.82rem" : "0.72rem",
                    fontWeight: 800,
                  }}
                >
                  {stage.number}
                </span>

                {/* Satellite Floating Label */}
                <span
                  style={{
                    position: "absolute",
                    top: idx === 0 ? "-28px" : idx === 2 || idx === 3 ? "48px" : undefined,
                    bottom: idx === 1 || idx === 4 ? "-26px" : undefined,
                    left: "50%",
                    transform: "translateX(-50%)",
                    whiteSpace: "nowrap",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    fontFamily: "var(--font-mono)",
                    textTransform: "uppercase",
                    padding: "0.15rem 0.45rem",
                    borderRadius: "4px",
                    background: isSelected
                      ? "var(--color-lime)"
                      : "rgba(17, 23, 16, 0.85)",
                    color: isSelected ? "var(--color-ink)" : "rgba(248, 248, 242, 0.8)",
                    border: isSelected
                      ? "1px solid var(--color-lime)"
                      : "1px solid rgba(255, 255, 255, 0.12)",
                    pointerEvents: "none",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                  }}
                >
                  {stage.shortLabel}
                </span>
              </button>
            )
          })}
        </div>

        {/* Right: Detailed Stage Inspector Card */}
        <div
          style={{
            background: "rgba(18, 24, 17, 0.75)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(255, 255, 255, 0.14)",
            borderRadius: "16px",
            padding: "2.25rem",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.25)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Stage Progress Bar */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${((activeStage + 1) / STAGES.length) * 100}%`,
                background: "var(--color-lime)",
                boxShadow: "0 0 10px var(--color-lime)",
                transition: "width 0.4s ease-out",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1.25rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "var(--color-lime)",
                textTransform: "uppercase",
              }}
            >
              LIFECYCLE STAGE {current.number} / 05
            </span>
            <span
              style={{
                padding: "0.22rem 0.65rem",
                borderRadius: "9999px",
                background: "rgba(196, 230, 80, 0.12)",
                border: "1px solid rgba(196, 230, 80, 0.3)",
                fontSize: "0.7rem",
                fontFamily: "var(--font-mono)",
                fontWeight: 600,
                color: "var(--color-lime)",
              }}
            >
              ✦ {current.metric}
            </span>
          </div>

          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
              fontWeight: 600,
              color: "var(--color-paper)",
              lineHeight: 1.2,
              marginBottom: "0.85rem",
            }}
          >
            {current.title}
          </h3>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.98rem",
              lineHeight: 1.68,
              color: "rgba(248, 248, 242, 0.8)",
              marginBottom: "1.75rem",
            }}
          >
            {current.description}
          </p>

          <div
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              paddingTop: "1.25rem",
            }}
          >
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(248, 248, 242, 0.5)",
                marginBottom: "0.85rem",
              }}
            >
              CORE DELIVERABLES &amp; COMPLIANCE:
            </span>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {current.deliverables.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.65rem",
                    fontSize: "0.88rem",
                    color: "var(--color-paper)",
                    marginBottom: "0.65rem",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      color: "var(--color-lime)",
                      fontWeight: 800,
                      marginTop: "2px",
                    }}
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Stage Navigation Tabs */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              marginTop: "2rem",
              paddingTop: "1.25rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              overflowX: "auto",
            }}
          >
            {STAGES.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setActiveStage(idx)
                  setIsPaused(true)
                }}
                style={{
                  flex: "1 1 auto",
                  padding: "0.5rem 0.65rem",
                  borderRadius: "6px",
                  background:
                    activeStage === idx
                      ? "rgba(196, 230, 80, 0.2)"
                      : "rgba(255, 255, 255, 0.04)",
                  border:
                    activeStage === idx
                      ? "1px solid var(--color-lime)"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                  color:
                    activeStage === idx
                      ? "var(--color-lime)"
                      : "rgba(248, 248, 242, 0.65)",
                  fontSize: "0.7rem",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                0{idx + 1} {s.shortLabel}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
