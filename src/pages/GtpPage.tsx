import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Footprint {
  number: string
  title: string
  description: string
  category: "youth" | "education" | "tech" | "governance"
  sla?: string
  isGoal?: boolean
}

const footprints: Footprint[] = [
  {
    number: "01",
    title: "Zero Unemployment Target",
    category: "youth",
    sla: "Zero fee conversion directly to verified role offer",
    description: "We aim to eradicate unemployment — a zero unemployment target.",
  },
  {
    number: "02",
    title: "Youth Empowerment",
    category: "youth",
    sla: "100% youth direct access to formal enterprise rosters",
    description: "Empowering skilled and educated young people into the working sector.",
  },
  {
    number: "03",
    title: "Corporate Skills with Education",
    category: "education",
    sla: "OSTP simulated floor orientation before client placement",
    description: "We promote learning skills to work in a corporate world alongside education.",
  },
  {
    number: "04",
    title: "Livelihood for Informal Sectors",
    category: "youth",
    sla: "Formal payroll, statutory EPF and legal workplace protections",
    description: "Livelihood benefits for workers in traditionally informal sectors — a happy work atmosphere.",
  },
  {
    number: "05",
    title: "Education-Matched Opportunities",
    category: "education",
    sla: "Strict degree-to-role relevance matching",
    description: "We embrace equal job opportunities across industries, matched to equal educational qualification.",
  },
  {
    number: "06",
    title: "Dependent Support & Scholarships",
    category: "education",
    sla: "Direct academic stipends and healthcare support for dependents",
    description: "Scholarships and financial support for our employees' children and dependents.",
  },
  {
    number: "07",
    title: "Work–Life Balance",
    category: "youth",
    sla: "Strict 12h cycle cap across 2 rotational day shifts with zero night duty",
    description: "Work–life balance opportunities for working people.",
  },
  {
    number: "08",
    title: "Career Progression Pathways",
    category: "education",
    sla: "75% of supervisor and management roles filled via internal promotions",
    description: "Learning and career progression opportunities for service providers.",
  },
  {
    number: "09",
    title: "100% Gender Diversity",
    category: "education",
    sla: "100% equal opportunity across all corporate deployment rosters",
    description: "100% gender diversity in the workforce — gender equality.",
  },
  {
    number: "10",
    title: "Upskilling Unqualified Talent",
    category: "education",
    sla: "Free foundation literacy and operational drills via regional hubs",
    description: "Promoting skill training and education for unskilled and unqualified people.",
  },
  {
    number: "11",
    title: "Tech-Driven Support",
    category: "tech",
    sla: "Real-time DOS automated attendance telemetry & biometric verification",
    description: "Tech-driven teams and training programs — sustainable tech support in staffing.",
  },
  {
    number: "12",
    title: "Unstoppable GTP Momentum",
    category: "governance",
    sla: "Published audit footprint reviewed quarterly with enterprise partners",
    description: "Unstoppable GTP across the industry.",
  },
  {
    number: "13",
    title: "Lower-Income Empowerment",
    category: "youth",
    sla: "Direct bank transfer payroll with zero intermediate deductions",
    description: "Enabling resources for lower-income groups to empower financial needs.",
  },
  {
    number: "14",
    title: "Quality Workspace Standard",
    category: "tech",
    sla: "Standardised OSHA workplace safety and dignity compliance across client sites",
    description: "Promoting quality workspace for every individual.",
  },
  {
    number: "15",
    title: "Pioneering Sustainable Staffing",
    category: "tech",
    sla: "Zero Capex onboarding for enterprise employers",
    description: "Pioneering sustainable staffing as an operating discipline.",
  },
  {
    number: "16",
    title: "Fair Practices & Economic Security",
    category: "governance",
    sla: "100% statutory ESI, medical cover and direct insurance coverage",
    description: "Ensuring fair practices and economic security for employee dependents.",
  },
  {
    number: "17",
    title: "Industry Skill Efficiency",
    category: "tech",
    sla: "Continuous quarterly skill upgradation modules for all deployed talent",
    description: "Empowering skill efficiency to improve quality and productivity across industries.",
  },
  {
    number: "18",
    title: "Human Employment with AI",
    category: "tech",
    sla: "AI telemetry assisting human dispatchers without replacing human workers",
    description: "Maximising the utilisation of human employment alongside artificial intelligence.",
  },
  {
    number: "19",
    title: "Zero Unemployment Agenda",
    category: "youth",
    sla: "Direct pipeline connecting university campuses with enterprise demand",
    description: "Driving the agenda towards zero unemployment targets.",
  },
  {
    number: "20",
    title: "Policy & Government Partnerships",
    category: "governance",
    sla: "Institutional alignment with regional skill development authorities",
    description: "Formal partnerships with all stakeholders, including governments and policy bodies.",
  },
  {
    number: "21",
    title: "World's Largest Workspace",
    category: "governance",
    sla: "GOAL: TO BECOME THE WORLD'S LARGEST WORKSPACE ECOSYSTEM",
    description: "GOAL: TO BECOME THE WORLD'S LARGEST WORKSPACE ECOSYSTEM.",
    isGoal: true,
  },
]

const categories = [
  { id: "all", label: "ALL 21 FOOTPRINTS", count: 21 },
  { id: "youth", label: "YOUTH & LIVELIHOOD", count: 5 },
  { id: "education", label: "EDUCATION & DIVERSITY", count: 5 },
  { id: "tech", label: "TECH & SUSTAINABILITY", count: 5 },
  { id: "governance", label: "GOVERNANCE & GOALS", count: 6 },
]

const smartStaffingPillars = [
  {
    number: "01",
    title: "Smart Staffing Solution",
    subtitle: "Cutting-edge smart staffing powered by real-time data analytics.",
  },
  {
    number: "02",
    title: "Multi-Integration on Impact Reduction",
    subtitle: "Integrated programs that measurably reduce unemployment impact.",
  },
  {
    number: "03",
    title: "Training & Skill Enhancement",
    subtitle: "Employee training and skill-enhancing programs, continuously refreshed.",
  },
  {
    number: "04",
    title: "Economic Inclusion",
    subtitle: "Financial inclusion and economic security across the workforce we serve.",
  },
]

export default function GtpPage({
  onNavigate,
}: {
  onNavigate: (target: string) => void
}) {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [selectedFootprint, setSelectedFootprint] = useState<Footprint | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const filteredFootprints =
    activeCategory === "all"
      ? footprints
      : footprints.filter((f) => f.category === activeCategory)

  return (
    <div className="gtp-page editorial-page">
      {/* GTP Hero */}
      <section className="section gtp-hero-section" ref={heroRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="page-header-badge"
          >
            <span className="page-badge-dot" />
            <span>GROW TOGETHER POLICY · PUBLISHED COMMITMENT</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="editorial-page-title"
          >
            NOT JUST A SERVICE WE PROVIDE,
            <br />
            <span className="text-lime">BUT A RESPONSIBILITY WE EMBRACE.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="editorial-lead"
          >
            We recognise the importance of minimising unemployment impact in the
            modern world and promoting responsible solution practices —
            committed to creating an efficient and more sustainable future
            workforce by transforming the working sector across industries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="gtp-hero-meta-grid"
          >
            <div className="gtp-meta-card">
              <span className="gtp-meta-num">21</span>
              <span className="gtp-meta-label">PUBLISHED FOOTPRINTS</span>
            </div>
            <div className="gtp-meta-card">
              <span className="gtp-meta-num">ZERO</span>
              <span className="gtp-meta-label">UNEMPLOYMENT TARGET</span>
            </div>
            <div className="gtp-meta-card">
              <span className="gtp-meta-num">100%</span>
              <span className="gtp-meta-label">
                EQUAL OPPORTUNITY &amp; GENDER DIVERSITY
              </span>
            </div>
          </motion.div>

          {/* Foreground Hero Showcase Image with Interactive Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="gtp-hero-image-wrap"
            style={{
              marginTop: "3.5rem",
              position: "relative",
              borderRadius: "1.25rem",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 24px 60px -12px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src="/images/gtp-hero-showcase.jpg"
              alt="Influence India diverse corporate leadership and youth team representing 100% equal opportunity"
              width="1800"
              height="1000"
              className="gtp-hero-image"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
                maxHeight: "560px",
              }}
              loading="eager"
            />
            <div
              className="gtp-hero-image-badge"
              style={{
                position: "absolute",
                bottom: "1.5rem",
                left: "1.5rem",
                background: "rgba(13,15,17,0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "9999px",
                padding: "0.6rem 1.4rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                color: "#f8f9fa",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
              }}
            >
              <span
                className="live-status-dot"
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#a3e635",
                  boxShadow: "0 0 10px #a3e635",
                }}
              />
              <span>100% GENDER EQUALITY &amp; INCLUSIVE WORKFORCE · BENGALURU HQ</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="section gtp-philosophy-section">
        <div className="container">
          <div className="editorial-split-grid">
            <div className="editorial-col-left">
              <span className="section-label-text">OPERATING CONSCIENCE</span>
              <h2>
                A sustainable staffing company is not just a service we provide,
                but a responsibility we embrace.
              </h2>
            </div>
            <div className="editorial-col-right">
              <p>
                We are proud to be at the front of transforming the staffing
                landscape with our innovative services and solutions.
              </p>
              <p>
                At the core of Influence India Services lies a commitment to
                positively impact the staffing industry and leave a moderate
                footprint — an efficient and good workspace ecosystem for the
                generations to come.
              </p>
              <p>
                We recognise the evolving needs of the population and the
                importance of sustainable, efficient industry options to work
                with. As the world seeks a sustainable workspace, Influence
                India is setting an example while simultaneously doing good for
                our work sector, our people and businesses.
              </p>
              <div className="gtp-highlight-banner">
                <strong>OUR COMMITMENT:</strong>
                <span>
                  EACH AND EVERY ASPIRANT GETS WORK, AND AN EQUITABLE WORKING
                  ECOSYSTEM IN THE FUTURE.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 21 Footprints Grid with Category Filter & Inspection Modal */}
      <section className="section gtp-footprints-section" id="footprints">
        <div className="container">
          <div className="section-heading-editorial">
            <span className="section-label-text">
              FOOTPRINTS · 21 COMMITMENTS
            </span>
            <h2>
              TWENTY-ONE FOOTPRINTS
              <br />
              <span className="text-lime">WE ARE LEAVING BEHIND</span>
            </h2>
            <p className="heading-sub">
              Every commitment below is measurable, published, and reviewed —
              the operating conscience of the Grow Together Policy. Click any card to inspect operational benchmark.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div
            className="gtp-filter-pill-bar"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.6rem",
              margin: "2.5rem 0 2rem",
              justifyContent: "flex-start",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: "0.45rem 1.1rem",
                  borderRadius: "9999px",
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  border:
                    activeCategory === cat.id
                      ? "1.5px solid #3f6e14"
                      : "1px solid rgba(23, 29, 22, 0.15)",
                  background:
                    activeCategory === cat.id ? "#ecfccb" : "#ffffff",
                  color: activeCategory === cat.id ? "#365314" : "#4e5a4a",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <span>{cat.label}</span>
                <span
                  style={{
                    background:
                      activeCategory === cat.id ? "#365314" : "rgba(0,0,0,0.06)",
                    color: activeCategory === cat.id ? "#ffffff" : "#4e5a4a",
                    fontSize: "0.65rem",
                    padding: "0.1rem 0.4rem",
                    borderRadius: "9999px",
                  }}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Footprints Grid */}
          <motion.div layout className="footprints-grid">
            <AnimatePresence>
              {filteredFootprints.map((item) => (
                <motion.div
                  key={item.number}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -4, boxShadow: "0 14px 30px -8px rgba(63, 110, 20, 0.18)" }}
                  className={`footprint-card ${
                    item.isGoal ? "footprint-card--goal" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedFootprint(item)}
                >
                  <div className="footprint-card-header">
                    <span className="footprint-num">{item.number}</span>
                    {item.isGoal ? (
                      <span className="footprint-goal-tag">GLOBAL GOAL</span>
                    ) : (
                      <span
                        style={{
                          fontSize: "0.62rem",
                          fontWeight: 800,
                          letterSpacing: "0.08em",
                          color: "#3f6e14",
                          textTransform: "uppercase",
                        }}
                      >
                        INSPECT SLA ↗
                      </span>
                    )}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="footprint-card-footer">
                    <span className="footprint-status-dot" />
                    <span>ACTIVE COMMITMENT</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Interactive Detail Modal for Footprint Inspection */}
      <AnimatePresence>
        {selectedFootprint && (
          <div
            className="footprint-modal-overlay"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "rgba(6, 19, 11, 0.7)",
              backdropFilter: "blur(6px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
            }}
            onClick={() => setSelectedFootprint(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25 }}
              style={{
                background: "#ffffff",
                maxWidth: "540px",
                width: "100%",
                borderRadius: "1.25rem",
                padding: "2.25rem",
                boxShadow: "0 25px 60px -15px rgba(0,0,0,0.4)",
                border: "1px solid rgba(23, 29, 22, 0.12)",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    fontWeight: 900,
                    background: "#06130b",
                    color: "#a3e635",
                    padding: "0.3rem 0.7rem",
                    borderRadius: "6px",
                  }}
                >
                  FOOTPRINT #{selectedFootprint.number}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedFootprint(null)}
                  style={{
                    background: "none",
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: "50%",
                    width: "32px",
                    height: "32px",
                    cursor: "pointer",
                    fontSize: "1rem",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  ✕
                </button>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: "#111827",
                  marginBottom: "0.75rem",
                  lineHeight: 1.25,
                }}
              >
                {selectedFootprint.title}
              </h3>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  color: "#4b5563",
                  marginBottom: "1.5rem",
                }}
              >
                {selectedFootprint.description}
              </p>

              {selectedFootprint.sla && (
                <div
                  style={{
                    background: "#f7fee7",
                    border: "1px solid #d9f99d",
                    borderRadius: "10px",
                    padding: "1rem 1.25rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.65rem",
                      fontWeight: 900,
                      letterSpacing: "0.1em",
                      color: "#3f6e14",
                      marginBottom: "0.3rem",
                      textTransform: "uppercase",
                    }}
                  >
                    ✦ OPERATIONAL BENCHMARK &amp; SLA
                  </span>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      fontWeight: 600,
                      color: "#1e293b",
                      margin: 0,
                    }}
                  >
                    {selectedFootprint.sla}
                  </p>
                </div>
              )}

              <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end" }}>
                <button
                  type="button"
                  onClick={() => setSelectedFootprint(null)}
                  style={{
                    padding: "0.6rem 1.25rem",
                    background: "#111827",
                    color: "#ffffff",
                    borderRadius: "8px",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Responsibility Section */}
      <section className="section gtp-responsibility-section">
        <div className="container">
          <div className="responsibility-banner">
            <span className="section-label-text">RESPONSIBILITY</span>
            <h2>FOSTERING A SAFE AND RESPONSIBLE ENVIRONMENT TO WORK.</h2>
            <p className="responsibility-lead">
              Through our transformative services and solutions we aim to create
              a more connected, sustainable and inclusive working ecosystem —
              together with job aspirants and job providers.
            </p>
            <p>
              We are reshaping the way people work, reducing unemployment impact
              and improving the quality of financially stable life for
              employees.
            </p>
          </div>

          <div className="smart-pillars-grid">
            {smartStaffingPillars.map((p) => (
              <motion.div
                key={p.number}
                whileHover={{ y: -4, borderColor: "#3f6e14" }}
                className="smart-pillar-card"
              >
                <span className="smart-pillar-num">{p.number}</span>
                <h3>{p.title}</h3>
                <p>{p.subtitle}</p>
              </motion.div>
            ))}
          </div>

          {/* Smart Staffing Solution 3-point Breakdown */}
          <div className="smart-solution-breakdown">
            <div className="breakdown-title">
              <h3>SMART STAFFING SOLUTION</h3>
              <p>How data analytics meets on-ground operations.</p>
            </div>
            <div className="breakdown-items">
              <div className="breakdown-item">
                <span className="breakdown-num">01</span>
                <p>CUTTING-EDGE SMART STAFFING SOLUTIONS</p>
              </div>
              <div className="breakdown-item">
                <span className="breakdown-num">02</span>
                <p>
                  REAL-TIME DATA ANALYTICS TO CONNECT WITH CLIENT REQUIREMENTS,
                  VACANCY OPTIMISATION AND DEMAND-RESPONSIVE SERVICES
                </p>
              </div>
              <div className="breakdown-item">
                <span className="breakdown-num">03</span>
                <p>
                  CONVENIENT, RELIABLE, AFFORDABLE AND SUSTAINABLE STAFFING
                  SOLUTIONS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
