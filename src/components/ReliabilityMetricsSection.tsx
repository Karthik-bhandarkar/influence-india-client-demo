import React from "react"

export interface ComparisonRow {
  aspect: string

  legacy: string

  unified: string

  metric: string
}

const COMPARISON: ComparisonRow[] = [
  {
    aspect: "Vendor Overhead & Coordination",

    legacy:
      "4–6 disconnected vendors (sourcer, local training contractor, third-party payroll agency, unverified backup broker).",

    unified:
      "1 unified partner accountable for the entire lifecycle — sourcing, grooming, payroll, transport & onsite retention.",

    metric: "Single Point SLA",
  },

  {
    aspect: "Training & Day-One Floor-Fit",

    legacy:
      "Candidates learn on your paid operational time after clocking in, causing floor errors, friction, and manager frustration.",

    unified:
      "Role-specific Onsite Skill Training Program (OSTP) simulated & tested before deployment — day-one productive.",

    metric: "100% Day-One Ready",
  },

  {
    aspect: "Standby Replacement Latency",

    legacy:
      "7 to 14 days replacement delay with zero guarantee, forcing existing shifts to absorb crushing overtime.",

    unified:
      "Guaranteed under 4 hours via our active standby roster pool in Bengaluru & regional operating hubs.",

    metric: "< 4hr Emergency SLA",
  },

  {
    aspect: "Statutory & Legal Audit Risk",

    legacy:
      "Fragmented registers, unverified contractor logs, missed PF/ESIC deposits exposing your brand to statutory liability.",

    unified:
      "100% transparent digital vault: Biometric attendance, police clearance, PF, ESIC & wage slips deposited on time.",

    metric: "Zero Audit Exposure",
  },
]

export default function ReliabilityMetricsSection() {
  return (
    <div
      className="reliability-economics-wrap"
      style={{
        marginTop: "4rem",

        paddingTop: "3.5rem",

        borderTop: "1px solid var(--color-line)",
      }}
    >
      {/* Subheader */}
      <div style={{ maxWidth: "780px", marginBottom: "2.5rem" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",

            fontSize: "0.72rem",

            fontWeight: 700,

            letterSpacing: "0.18em",

            textTransform: "uppercase",

            color: "var(--color-brand-strong)",
          }}
        >
          THE ECONOMIC EQUATION · SINGLE-VENDOR ADVANTAGE
        </span>
        <h3
          style={{
            fontFamily: "var(--font-serif)",

            fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",

            fontWeight: 600,

            color: "var(--color-ink)",

            marginTop: "0.65rem",

            lineHeight: 1.2,
          }}
        >
          Why fragmented multi-vendor staffing drains enterprise margins.
        </h3>
        <p
          style={{
            fontFamily: "var(--font-sans)",

            fontSize: "1rem",

            lineHeight: 1.7,

            color: "var(--color-muted)",

            marginTop: "0.85rem",
          }}
        >
          When sourcing, training, deployment, and daily management are split
          across different vendors, your operational floor absorbs the friction.
          Influence India unifies the complete chain under one clear contract.
        </p>
      </div>

      {/* Comparison Board */}
      <div
        className="economics-board"
        style={{
          background: "#ffffff",

          border: "1px solid var(--color-line)",

          borderRadius: "14px",

          overflow: "hidden",

          boxShadow: "0 10px 30px rgba(23, 29, 22, 0.04)",
        }}
      >
        {/* Table Header (Desktop / Tablet) */}
        <div
          className="economics-header-row"
          style={{
            background: "var(--color-panel)",
            borderBottom: "1px solid var(--color-line)",
            padding: "1rem 1.5rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-ink)",
          }}
        >
          <div>OPERATIONAL FACTOR</div>
          <div style={{ color: "#7a8478" }}>
            TRADITIONAL FRAGMENTED AGENCIES
          </div>
          <div style={{ color: "var(--color-brand-strong)" }}>
            INFLUENCE INDIA UNIFIED MODEL
          </div>
        </div>

        {/* Rows */}
        <div className="economics-rows-wrap">
          {COMPARISON.map((row, idx) => (
            <div
              key={idx}
              className="economics-row"
              style={{
                padding: "1.35rem 1.5rem",
                borderBottom:
                  idx < COMPARISON.length - 1
                    ? "1px solid var(--color-line)"
                    : "none",
                alignItems: "flex-start",
                gap: "1rem",
                transition: "background 0.2s ease",
              }}
            >
              {/* Aspect */}
              <div className="economics-aspect-cell">
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--color-ink)",
                    display: "block",
                  }}
                >
                  {row.aspect}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    marginTop: "0.35rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    padding: "0.15rem 0.45rem",
                    borderRadius: "4px",
                    background: "rgba(63, 110, 20, 0.08)",
                    color: "var(--color-brand-strong)",
                  }}
                >
                  {row.metric}
                </span>
              </div>

              {/* Traditional Agency */}
              <div
                className="economics-legacy-cell"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.88rem",
                  lineHeight: 1.6,
                  color: "#6c786a",
                }}
              >
                <span className="economics-mobile-label">TRADITIONAL AGENCIES: </span>
                <span
                  style={{
                    color: "#dc2626",
                    fontWeight: 800,
                    marginRight: "0.4rem",
                  }}
                >
                  ✕
                </span>
                {row.legacy}
              </div>

              {/* Influence India Unified */}
              <div
                className="economics-unified-cell"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  color: "var(--color-ink)",
                  fontWeight: 500,
                }}
              >
                <span className="economics-mobile-label">INFLUENCE INDIA MODEL: </span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: "var(--color-lime)",
                    color: "var(--color-ink)",
                    fontWeight: 900,
                    fontSize: "0.72rem",
                    marginRight: "0.5rem",
                    verticalAlign: "middle",
                  }}
                >
                  ✓
                </span>
                {row.unified}
              </div>
            </div>
          ))}
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .economics-header-row {
            display: grid;
            grid-template-columns: 1.2fr 1.6fr 1.8fr;
          }
          .economics-row {
            display: grid;
            grid-template-columns: 1.2fr 1.6fr 1.8fr;
          }
          .economics-mobile-label {
            display: none;
          }
          @media (max-width: 768px) {
            .economics-header-row {
              display: none !important;
            }
            .economics-row {
              display: flex !important;
              flex-direction: column !important;
              padding: 1.25rem 1.15rem !important;
              gap: 0.85rem !important;
            }
            .economics-mobile-label {
              display: block;
              font-family: var(--font-mono);
              font-size: 0.65rem;
              font-weight: 700;
              letter-spacing: 0.08em;
              margin-bottom: 0.35rem;
              text-transform: uppercase;
            }
            .economics-legacy-cell {
              background: rgba(239, 68, 68, 0.04);
              border: 1px solid rgba(239, 68, 68, 0.15);
              border-radius: 8px;
              padding: 0.75rem 0.85rem;
            }
            .economics-legacy-cell .economics-mobile-label {
              color: #dc2626;
            }
            .economics-unified-cell {
              background: rgba(83, 140, 21, 0.06);
              border: 1px solid rgba(83, 140, 21, 0.22);
              border-radius: 8px;
              padding: 0.75rem 0.85rem;
            }
            .economics-unified-cell .economics-mobile-label {
              color: var(--color-brand-strong);
            }
          }
        ` }} />
      </div>

      {/* 3 Metric Cards Under Comparison Board */}
      <div
        style={{
          display: "grid",

          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",

          gap: "1.25rem",

          marginTop: "1.75rem",
        }}
      >
        <div
          style={{
            background: "#ffffff",

            border: "1px solid var(--color-line)",

            borderRadius: "12px",

            padding: "1.5rem",

            boxShadow: "0 4px 14px rgba(23, 29, 22, 0.03)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-serif)",

              fontSize: "2.4rem",

              fontWeight: 700,

              color: "var(--color-brand-strong)",

              display: "block",

              lineHeight: 1,
            }}
          >
            32%
          </span>
          <h4
            style={{
              fontFamily: "var(--font-sans)",

              fontSize: "0.95rem",

              fontWeight: 700,

              color: "var(--color-ink)",

              marginTop: "0.5rem",
            }}
          >
            Friction &amp; Overhead Reduction
          </h4>
          <p
            style={{
              fontFamily: "var(--font-sans)",

              fontSize: "0.82rem",

              color: "var(--color-muted)",

              marginTop: "0.35rem",

              lineHeight: 1.5,
            }}
          >
            Eliminating coordination losses across sourcing, training, and
            attendance vendors into one consolidated billing account.
          </p>
        </div>

        <div
          style={{
            background: "#ffffff",

            border: "1px solid var(--color-line)",

            borderRadius: "12px",

            padding: "1.5rem",

            boxShadow: "0 4px 14px rgba(23, 29, 22, 0.03)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-serif)",

              fontSize: "2.4rem",

              fontWeight: 700,

              color: "var(--color-brand-strong)",

              display: "block",

              lineHeight: 1,
            }}
          >
            99.2%
          </span>
          <h4
            style={{
              fontFamily: "var(--font-sans)",

              fontSize: "0.95rem",

              fontWeight: 700,

              color: "var(--color-ink)",

              marginTop: "0.5rem",
            }}
          >
            Shift Attendance &amp; Retention
          </h4>
          <p
            style={{
              fontFamily: "var(--font-sans)",

              fontSize: "0.82rem",

              color: "var(--color-muted)",

              marginTop: "0.35rem",

              lineHeight: 1.5,
            }}
          >
            Dedicated ground supervisors actively monitor muster rolls, shift
            handshakes, and transport punctuality in real time.
          </p>
        </div>

        <div
          style={{
            background: "var(--color-forest)",

            color: "var(--color-paper)",

            border: "1px solid rgba(255, 255, 255, 0.12)",

            borderRadius: "12px",

            padding: "1.5rem",

            boxShadow: "0 10px 24px rgba(23, 29, 22, 0.12)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-serif)",

              fontSize: "2.4rem",

              fontWeight: 700,

              color: "var(--color-lime)",

              display: "block",

              lineHeight: 1,
            }}
          >
            &lt; 4 Hours
          </span>
          <h4
            style={{
              fontFamily: "var(--font-sans)",

              fontSize: "0.95rem",

              fontWeight: 700,

              color: "var(--color-paper)",

              marginTop: "0.5rem",
            }}
          >
            Standby Emergency Replacement
          </h4>
          <p
            style={{
              fontFamily: "var(--font-sans)",

              fontSize: "0.82rem",

              color: "rgba(248, 248, 242, 0.7)",

              marginTop: "0.35rem",

              lineHeight: 1.5,
            }}
          >
            Pre-vetted buffer workforce ready on immediate call to ensure zero
            operational downtime during peak requirements.
          </p>
        </div>
      </div>
    </div>
  )
}
