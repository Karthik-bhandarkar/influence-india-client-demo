import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import InfinitySvg from "../components/InfinitySvg"

interface AboutPageProps {
  onNavigate?: (target: string) => void
}

const contact = {
  whatsapp: "https://wa.me/919606329992",
  employers: "mailto:contact@influenceindiaservices.com",
  careers: "mailto:careers@influenceindiaservices.com",
  phone: "+91 96063 29992",
  address: {
    line1: "69, 1st Floor, Opposite Kuntamaramma Temple",
    line2: "Arehalli, AGS Layout Main Road, Banashankari 3rd Stage",
    city: "Bengaluru 560061, Karnataka, India",
    directionsUrl: "https://maps.app.goo.gl/Te4jpDgYpbt2toRbA",
  },
}

const aboutAims = [
  { label: "Skilful workforce", value: 100, suffix: "%", description: "Standardised pre-deployment induction across all corporate roles." },
  { label: "Placement conversion", value: 100, suffix: "%", description: "Direct education-to-role matching with verified employer offers." },
  { label: "Companies collaboration", value: 250, suffix: "+", description: "Enterprise partners across IT, hospitality, healthcare & banking." },
  { label: "Satisfied clients", value: 200, suffix: "+", description: "Sustained workforce retention with 99.4% recurring engagement." },
  { label: "Active corridors", value: 30, suffix: "+", description: "Rapid deployment presence across Bengaluru, Mumbai, NCR & beyond." },
]

const twelveCommitments = [
  { number: "01", category: "youth", title: "Zero Unemployment Target", desc: "Dedicated pipeline converting graduates and vocational talent into vetted careers." },
  { number: "02", category: "ethics", title: "Social Responsibility", desc: "Inclusive hiring initiatives supporting regional youth and underrepresented groups." },
  { number: "03", category: "quality", title: "100% Job Conversion Efficiency", desc: "Rigorous alignment between aspirant qualifications and employer floor requirements." },
  { number: "04", category: "youth", title: "Job Security & Fair Wage", desc: "Statutory compliance, direct bank compensation, and transparent payroll." },
  { number: "05", category: "quality", title: "Integrated Solution", desc: "Single accountable partner for talent sourcing, training, deployment & compliance." },
  { number: "06", category: "tech", title: "Smart Telemetry & Tracking", desc: "Real-time dispatch oversight, verified attendance, and SLA monitoring." },
  { number: "07", category: "quality", title: "Timely Skill Upgradation", desc: "Continuous skill development modules ensuring long-term workplace productivity." },
  { number: "08", category: "quality", title: "Efficient Master Trainers", desc: "Industry veterans delivering hands-on grooming, etiquette & technical drills." },
  { number: "09", category: "youth", title: "Seamless Opportunity Access", desc: "Zero applicant fees — aspirants never pay a single rupee for placements." },
  { number: "10", category: "quality", title: "OSTP — Onsite Training", desc: "Hands-on floor simulation matching client-specific workflows and security protocols." },
  { number: "11", category: "tech", title: "Scalable Deployment Engine", desc: "Capability to mobilise 5 to 500+ trained personnel in under 72 hours." },
  { number: "12", category: "ethics", title: "Transparent Cost Structure", desc: "Predictable, transparent commercial models without hidden middleman margins." },
]

const expansionCities = [
  { name: "Bengaluru (HQ)", status: "Active HQ", tag: "Live" },
  { name: "Mumbai & Pune", status: "Western Corridor", tag: "Live" },
  { name: "Chennai", status: "Southern Corridor", tag: "Live" },
  { name: "Hyderabad", status: "Cyber Corridor", tag: "Live" },
  { name: "Gujarat (Ahmedabad/Surat)", status: "Industrial Corridor", tag: "Live" },
  { name: "Uttar Pradesh (Noida/Lucknow)", status: "Northern Hub", tag: "Live" },
  { name: "Bhubaneswar & East", status: "Eastern Corridor", tag: "Expanding" },
]

export default function AboutPage({ onNavigate }: AboutPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <div className="about-page-root">
      <AboutHero onNavigate={onNavigate} />
      <OurMission onNavigate={onNavigate} />
      <OurAim />
      <WhatWeStandFor />
      <InspiredByInfinity onNavigate={onNavigate} />
      <AcrossIndiaWhereWeAre onNavigate={onNavigate} />
    </div>
  )
}

/* =========================================================================
   1. HERO SECTION: BALANCED 2-COLUMN STAGE WITH RICH FOREGROUND SHOWCASE
   ========================================================================= */
function AboutHero({ onNavigate }: { onNavigate?: (target: string) => void }) {
  return (
    <section className="about-hero-stage" aria-labelledby="about-hero-title">
      {/* Background Layer 1: Atmospheric Architectural Backdrop */}
      <div className="about-hero-bg-layer" aria-hidden="true">
        <img
          src="/images/about-hero-dark-bg.jpg"
          alt=""
          className="about-hero-bg-img"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="about-hero-bg-video"
          src="/videos/workplace-loop.mp4"
        />
        <div className="about-hero-bg-radial" />
        <div className="about-hero-bg-grid" />
        <div className="about-hero-bg-bottom-fade" />
      </div>

      <div className="container about-hero-container">
        <div className="about-hero-grid">
          {/* Left Column: Editorial Copy, Badges, CTAs, and Stat Chips */}
          <motion.div
            className="about-hero-left"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Badges */}
            <div className="about-hero-badges-row">
              <span className="about-pill-badge">
                <span className="pulse-dot" />
                <span>ABOUT US · BENGALURU HQ</span>
              </span>
              <span className="about-stamp-badge">
                ✦ YOUTH WORKFORCE MISSION
              </span>
            </div>

            {/* Editorial Heading */}
            <h1 id="about-hero-title" className="about-hero-headline">
              Creating good
              <span className="about-hero-headline-accent"> work opportunities </span>
              for Indian youth.
            </h1>

            {/* Narrative Lead */}
            <p className="about-hero-narrative">
              Driving positive change by promoting a dignified, efficient and work-friendly
              culture nationwide — creating a skilled and sustainable future for India’s
              working sector by revolutionising the way people work.
            </p>

            {/* Primary Action Buttons */}
            <div className="about-hero-cta-cluster">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="about-btn about-btn--primary"
              >
                <span>TALK WITH US</span>
                <span className="btn-icon">💬</span>
              </a>
              <a href="#mission" className="about-btn about-btn--outline">
                <span>OUR MISSION</span>
                <span className="btn-icon">↓</span>
              </a>
              {onNavigate && (
                <button
                  type="button"
                  onClick={() => onNavigate("gtp")}
                  className="about-btn about-btn--ghost"
                >
                  <span>GTP FOOTPRINTS</span>
                  <span className="btn-icon">↗</span>
                </button>
              )}
            </div>

            {/* Live Key Metrics Pill Strip */}
            <div className="about-hero-stats-strip">
              <div className="about-stat-pill">
                <span className="pill-dot pill-dot--lime" />
                <span className="pill-val">100%</span>
                <span className="pill-lbl">Placement Conversion</span>
              </div>
              <div className="about-stat-pill">
                <span className="pill-dot pill-dot--cyan" />
                <span className="pill-val">Zero</span>
                <span className="pill-lbl">Aspirant Fees</span>
              </div>
              <div className="about-stat-pill">
                <span className="pill-dot pill-dot--emerald" />
                <span className="pill-val">250+</span>
                <span className="pill-lbl">Enterprise Clients</span>
              </div>
              <div className="about-stat-pill">
                <span className="pill-dot pill-dot--lime" />
                <span className="pill-val">30+</span>
                <span className="pill-lbl">Active Cities</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Foreground Multi-Layer Visual Showcase */}
          <motion.div
            className="about-hero-right"
            initial={{ opacity: 0, scale: 0.94, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-showcase-card">
              {/* Main Visual Image */}
              <div className="about-showcase-image-wrapper">
                <img
                  src="/images/about-hero-workforce.jpg"
                  alt="Young Indian professionals collaborating in modern corporate workspace"
                  className="about-showcase-img"
                  loading="eager"
                  width="960"
                  height="720"
                />
                <div className="about-showcase-image-glow" />
              </div>

              {/* Floating Glassmorphic Telemetry Card (Top-Left) */}
              <div className="about-floating-telemetry">
                <div className="telemetry-header">
                  <span className="pulse-dot pulse-dot--active" />
                  <span className="telemetry-tag">LIVE WORKFORCE TELEMETRY</span>
                </div>
                <div className="telemetry-body">
                  <span className="telemetry-metric">3,400+</span>
                  <span className="telemetry-desc">Trained Candidates Deployed FY 2025–26</span>
                </div>
                <div className="telemetry-bar">
                  <div className="telemetry-bar-fill" style={{ width: "94%" }} />
                </div>
              </div>

              {/* Floating Glassmorphic HQ Corridor Card (Bottom-Right) */}
              <div className="about-floating-corridor">
                <div className="corridor-icon-badge">📍</div>
                <div className="corridor-text">
                  <span className="corridor-title">BENGALURU HEADQUARTERS</span>
                  <span className="corridor-sub">Banashankari 3rd Stage · 30+ Hubs Live</span>
                </div>
                <span className="corridor-status-pill">ACTIVE</span>
              </div>

              {/* Bottom Showcase Strip */}
              <div className="about-showcase-footer-strip">
                <div className="footer-strip-item">
                  <span className="strip-dot" />
                  <span>100% GENDER EQUALITY</span>
                </div>
                <div className="footer-strip-sep" />
                <div className="footer-strip-item">
                  <span className="strip-dot" />
                  <span>STATUTORY AUDITED</span>
                </div>
                <div className="footer-strip-sep" />
                <div className="footer-strip-item">
                  <span className="strip-dot" />
                  <span>0% MIDDLEMAN MARGIN</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   2. OUR MISSION: REFINED TWO-COLUMN WITH FAQ-STYLE ACCORDION & SCROLL-SYNCED VISUAL
   ========================================================================= */
function OurMission({ onNavigate }: { onNavigate?: (target: string) => void }) {
  // FAQ-style accordion state (toggles open/close, default first item open)
  const [openPillar, setOpenPillar] = useState<number | null>(0)
  const [isDesktop, setIsDesktop] = useState(true)
  const isManualClickRef = useRef(false)
  const pillarRef0 = useRef<HTMLDivElement>(null)
  const pillarRef1 = useRef<HTMLDivElement>(null)
  const pillarRef2 = useRef<HTMLDivElement>(null)

  const pillars = [
    {
      num: "01",
      title: "Reliable & Equivalent Jobs",
      badge: "MERIT-BASED ACCESS",
      lead: "Matching educated aspirants to verified roles that respect their academic training and life goals.",
      body: "We provide reliable, affordable and structured job solutions that mirror educated youth's qualifications, creating genuine pathways into the formal corporate and institutional sectors.",
      tag: "QUALIFICATION RECOGNITION",
      tagline: "Bridging degrees with dignity in India’s premier corporate corridors.",
      metric: "100%",
      metricLabel: "Academic-to-role qualification alignment rate",
      image: "/images/workplace-team.jpg",
    },
    {
      num: "02",
      title: "Unemployment Impact Eradication",
      badge: "ZERO ASPIRANT FEES",
      lead: "Direct conversion from degree to professional offer letter with zero hidden charges.",
      body: "We strive to reduce unemployment impact among Indian youth by offering education-equivalent jobs, elevating workplace dignity, and improving the overall quality of life for families nationwide.",
      tag: "ZERO FINANCIAL FRICTION",
      tagline: "Equal opportunity for every educated aspirant across India.",
      metric: "75%",
      metricLabel: "Unemployment impact reduction in serviced sectors",
      image: "/images/corporate-interview.jpg",
    },
    {
      num: "03",
      title: "Corporate Skills with Education",
      badge: "OSTP PRACTICAL DRILLS",
      lead: "Hands-on pre-deployment orientation ensuring Day-1 productivity.",
      body: "Our proprietary OSTP (Onsite Skill Training Program) prepares candidates in soft skills, digital tools, workplace ethics, and safety protocols before they ever step onto the client floor.",
      tag: "DAY-1 READINESS",
      tagline: "Groomed, certified, and ready for high-compliance enterprise environments.",
      metric: "Day-1",
      metricLabel: "Immediate deployment standard across partner enterprises",
      image: "/images/skill-certification.jpg",
    },
  ]

  const pillarRefs = [pillarRef0, pillarRef1, pillarRef2]
  const activeIndex = openPillar ?? 0
  const currentPillar = pillars[activeIndex]

  // Track viewport width for responsive motion
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Scroll effect: while reading through the left side, the right side image shifts down accordingly
  useEffect(() => {
    const handleScroll = () => {
      if (isManualClickRef.current) return
      const refs = [pillarRef0, pillarRef1, pillarRef2]
      const targetLine = window.innerHeight * 0.42

      let bestIdx = 0
      let bestDist = Infinity

      refs.forEach((ref, idx) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const mid = rect.top + rect.height / 2
        const dist = Math.abs(mid - targetLine)

        // Only evaluate if card is visible in the viewport
        if (rect.bottom > 120 && rect.top < window.innerHeight - 100) {
          if (dist < bestDist) {
            bestDist = dist
            bestIdx = idx
          }
        }
      })

      if (bestDist < window.innerHeight * 0.45) {
        setOpenPillar((prev) => (prev !== bestIdx ? bestIdx : prev))
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const togglePillar = (idx: number) => {
    isManualClickRef.current = true
    setOpenPillar(openPillar === idx ? null : idx)
    setTimeout(() => {
      isManualClickRef.current = false
    }, 900)
  }

  // Calculate downward offset for the right side image to follow what is being read on the left
  const yOffset = activeIndex === 0 ? 0 : activeIndex === 1 ? 110 : 215

  return (
    <section id="mission" className="about-mission-section" aria-labelledby="mission-title">
      <div className="container">
        <div className="mission-grid">
          {/* Copy Column with FAQ-style animated accordion */}
          <div className="mission-copy">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="section-label-chip">
                <span className="chip-num">01</span>
                <span>OUR MISSION</span>
              </div>

              <h2 id="mission-title" className="mission-heading">
                Leading the transition towards a{" "}
                <span className="text-lime-contrast">sustainable workspace</span> in India.
              </h2>

              <p className="mission-lead-text">
                Influence India Services was founded on the fundamental principle that India’s educated
                youth deserve direct, transparent, and merit-based access to the modern economy.
                We provide the entire operational infrastructure bridging ambitious candidates and
                India’s premier enterprises.
              </p>
            </motion.div>

            {/* Interactive Pillar Selector Cards styled & animated like FAQ items */}
            <div className="mission-pillars-stack" role="region" aria-label="Our Mission Pillars">
              {pillars.map((p, idx) => {
                const isOpen = openPillar === idx
                return (
                  <motion.div
                    key={idx}
                    ref={pillarRefs[idx]}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className={`mission-pillar-card ${isOpen ? "is-active is-open" : ""}`}
                  >
                    <button
                      type="button"
                      className="pillar-accordion-trigger"
                      onClick={() => togglePillar(idx)}
                      aria-expanded={isOpen}
                      aria-controls={`mission-pillar-panel-${idx}`}
                    >
                      <div className="pillar-header-left">
                        <span className="pillar-num-badge">{p.num}</span>
                        <div className="pillar-title-wrap">
                          <h3 className="pillar-title">{p.title}</h3>
                          <span className="pillar-badge-sub">{p.badge}</span>
                        </div>
                      </div>
                      <span className={`pillar-toggle-indicator ${isOpen ? "is-open" : ""}`} aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path
                            d="M7 1V13M1 7H13"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`mission-pillar-panel-${idx}`}
                          key={`panel-${idx}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="pillar-collapsible-wrapper"
                        >
                          <div className="pillar-expanded-body">
                            <p className="pillar-lead-highlight">{p.lead}</p>
                            <p className="pillar-body">{p.body}</p>
                            <div className="pillar-metric-tag">
                              <span className="pillar-tag-chip">{p.tag}</span>
                              <span className="pillar-metric-summary">
                                <strong>{p.metric}</strong> · {p.metricLabel}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>

            {onNavigate && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mission-policy-action-card"
              >
                <div className="policy-action-info">
                  <span className="policy-action-eyebrow">
                    <span className="pulse-dot" />
                    OPERATIONAL COVENANT
                  </span>
                  <h4 className="policy-action-title">Grow Together Policy (GTP)</h4>
                  <p className="policy-action-desc">
                    Explore our 21 published footprints driving 100% gender diversity,
                    zero aspirant fees, and lifelong career progression.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate("gtp")}
                  className="about-btn about-btn--primary"
                >
                  <span>READ GROW TOGETHER POLICY</span>
                  <span className="btn-icon">→</span>
                </button>
              </motion.div>
            )}
          </div>

          {/* Sticky Visual Column: Glides down smoothly according to the active reading position */}
          <div className="mission-visual-sticky-col">
            <motion.div
              className="mission-visual"
              animate={{
                y: isDesktop ? yOffset : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 230,
                damping: 27,
                mass: 0.85,
              }}
            >
              <div className="mission-showcase-frame">
                <div className="mission-reading-tracker">
                  <span className="tracker-pulse-dot" />
                  <span className="tracker-text">SCROLL SYNC · PILLAR 0{activeIndex + 1}</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentPillar.image}
                    src={currentPillar.image}
                    alt={currentPillar.title}
                    className="mission-photo"
                    loading="eager"
                    width="1800"
                    height="1012"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                </AnimatePresence>

                <div className="mission-photo-overlay-glass">
                  <div className="overlay-badge-row">
                    <span className="overlay-pill">
                      PILLAR {currentPillar.num} · {currentPillar.tag}
                    </span>
                    <span className="overlay-city">BENGALURU HQ</span>
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.h4
                      key={currentPillar.tagline}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.28 }}
                      className="overlay-tagline"
                    >
                      "{currentPillar.tagline}"
                    </motion.h4>
                  </AnimatePresence>
                </div>
              </div>

              {/* Supporting Micro-Stats with dynamic active pillar indicators */}
              <div className="mission-micro-stats">
                <div className={`micro-stat-box ${activeIndex === 0 ? "is-highlighted" : ""}`}>
                  <div className="micro-stat-top">
                    <span className="micro-stat-val">100%</span>
                    <span className="micro-stat-dot" />
                  </div>
                  <span className="micro-stat-lbl">Equal gender opportunity in placement rosters</span>
                </div>
                <div className={`micro-stat-box ${activeIndex === 1 ? "is-highlighted" : ""}`}>
                  <div className="micro-stat-top">
                    <span className="micro-stat-val">75%</span>
                    <span className="micro-stat-dot" />
                  </div>
                  <span className="micro-stat-lbl">Unemployment impact reduction in serviced sectors</span>
                </div>
                <div className={`micro-stat-box ${activeIndex === 2 ? "is-highlighted" : ""}`}>
                  <div className="micro-stat-top">
                    <span className="micro-stat-val">Day-1</span>
                    <span className="micro-stat-dot" />
                  </div>
                  <span className="micro-stat-lbl">Immediate productivity readiness via OSTP drills</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   3. OUR AIM: HIGH-IMPACT METRICS WITH INTERACTIVE PROGRESS INDICATORS
   ========================================================================= */
function OurAim() {
  return (
    <section className="about-aims-section" aria-labelledby="aims-title">
      <div className="container">
        <div className="aims-header-split">
          <div>
            <div className="section-label-chip">
              <span className="chip-num">02</span>
              <span>OUR AIM</span>
            </div>
            <h2 id="aims-title" className="aims-heading">
              Measurable impact
              <br />
              <span className="text-muted-editorial">on Indian youth.</span>
            </h2>
          </div>
          <p className="aims-aside-desc">
            Delivering 100% placement conversion, dignified employment, and sustainable career
            transformation across 30+ major Indian economic corridors.
          </p>
        </div>

        <div className="aims-cards-grid">
          {aboutAims.map((aim, idx) => (
            <div key={idx} className="aim-metric-card">
              <div className="aim-card-top">
                <span className="aim-metric-number">
                  {aim.value}
                  <span className="aim-suffix">{aim.suffix}</span>
                </span>
                <span className="aim-metric-icon">✦</span>
              </div>
              <h3 className="aim-metric-label">{aim.label}</h3>
              <p className="aim-metric-desc">{aim.description}</p>
              <div className="aim-progress-indicator">
                <div
                  className="aim-progress-bar"
                  style={{ width: aim.value === 100 ? "100%" : "85%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   4. WHAT WE STAND FOR: 12 COMMITMENTS WITH CATEGORY FILTER
   ========================================================================= */
function WhatWeStandFor() {
  const [filter, setFilter] = useState<string>("all")

  const categories = [
    { id: "all", label: "All (12 Commitments)" },
    { id: "youth", label: "Youth & Opportunity" },
    { id: "quality", label: "Training & Quality" },
    { id: "tech", label: "Scale & Telemetry" },
    { id: "ethics", label: "Ethics & Compliance" },
  ]

  const filtered = filter === "all"
    ? twelveCommitments
    : twelveCommitments.filter((c) => c.category === filter)

  return (
    <section className="about-commitments-section" aria-labelledby="commitments-title">
      <div className="container">
        <div className="commitments-header-split">
          <div>
            <div className="section-label-chip">
              <span className="chip-num">03</span>
              <span>WHAT WE STAND FOR</span>
            </div>
            <h2 id="commitments-title" className="commitments-heading">
              Twelve commitments
              <br />
              <span className="text-muted-editorial">behind every placement.</span>
            </h2>
          </div>
          <p className="commitments-aside-desc">
            A unified operational covenant ensuring merit, transparency, statutory compliance,
            and lifelong dignity for every aspirant who passes through our doors.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="commitments-filters-row">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`commitment-filter-btn ${filter === cat.id ? "is-active" : ""}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 12 Commitments Grid */}
        <div className="commitments-cards-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((c) => (
              <motion.div
                key={c.number}
                className="commitment-item-card"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <div className="card-top-info">
                  <span className="commitment-index">{c.number}</span>
                  <span className="commitment-check-mark">✓</span>
                </div>
                <h3 className="commitment-item-title">{c.title}</h3>
                <p className="commitment-item-desc">{c.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   5. INSPIRED BY INFINITY: COSMIC BRAND EMBLEM & PHILOSOPHY
   ========================================================================= */
function InspiredByInfinity({ onNavigate }: { onNavigate?: (target: string) => void }) {
  return (
    <section className="about-infinity-section" aria-labelledby="infinity-title">
      <div className="about-infinity-bg-radial" />
      <div className="container about-infinity-container">
        <div className="about-infinity-grid">
          {/* Left: Infinity Symbol Interactive Showcase */}
          <div className="infinity-graphic-card">
            <div className="infinity-symbol-frame">
              <InfinitySvg />
            </div>
            <div className="infinity-caption-badge">
              <span className="pulse-dot" />
              <span>THE INFLUENCE INDIA INFINITY EMBLEM</span>
            </div>
          </div>

          {/* Right: Narrative Philosophy */}
          <div className="infinity-copy-column">
            <div className="section-label-chip section-label-chip--light">
              <span className="chip-num">04</span>
              <span>INSPIRED BY INFINITY</span>
            </div>

            <h2 id="infinity-title" className="infinity-headline">
              Endless opportunities remain constant.
              <br />
              <span className="text-lime">The duty is to grab them.</span>
            </h2>

            <div className="infinity-paragraphs-stack">
              <p>
                Infinity is derived from the universe and endless opportunities. In an economy as
                dynamic and expansive as India’s, potential is infinite — but the catalyst lies in
                equipping educated youth with real-world skills.
              </p>
              <p>
                To seize these opportunities, one needs both education and the practical competencies
                required for equivalent roles. When our youth are properly trained and ethically matched,
                enterprise productivity flourishes.
              </p>
              <blockquote className="infinity-quote-box">
                "Fuelling a sustainable workspace, powering the way towards a young, skilful work sector in India."
              </blockquote>
            </div>

            {onNavigate && (
              <div className="infinity-cta-row">
                <button
                  type="button"
                  onClick={() => onNavigate("careers")}
                  className="about-btn about-btn--primary"
                >
                  <span>EXPLORE CAREERS</span>
                  <span className="btn-icon">→</span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate("systems")}
                  className="about-btn about-btn--outline"
                >
                  <span>VIEW OPERATING SYSTEMS</span>
                  <span className="btn-icon">↗</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   6. ACROSS INDIA WHERE WE ARE: EXPANSION CORRIDORS & BENGALURU HQ
   ========================================================================= */
function AcrossIndiaWhereWeAre({ onNavigate }: { onNavigate?: (target: string) => void }) {
  const [copied, setCopied] = useState(false)

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("69, 1st Floor, Arehalli, AGS Layout Main Road, Banashankari 3rd Stage, Bengaluru 560061")
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  return (
    <section className="about-locations-section" aria-labelledby="locations-title">
      <div className="container">
        <div className="locations-header-split">
          <div>
            <div className="section-label-chip">
              <span className="chip-num">05</span>
              <span>ACROSS INDIA</span>
            </div>
            <h2 id="locations-title" className="locations-heading">
              From Bengaluru
              <br />
              <span className="text-muted-editorial">to every national corridor.</span>
            </h2>
          </div>
          <p className="locations-aside-desc">
            Thirty-plus cities, one accountable operating team, and direct ground supervision
            at every client facility.
          </p>
        </div>

        <div className="locations-dual-grid">
          {/* Left Column: Corporate HQ Showcase & Actions */}
          <div className="hq-showcase-card">
            <span className="hq-eyebrow-tag">CORPORATE HEADQUARTERS</span>
            <h3 className="hq-city-name">BENGALURU, KARNATAKA</h3>
            <p className="hq-address-line">
              69, 1st Floor, Opposite Kuntamaramma Temple, Arehalli, AGS Layout Main Road,
              Banashankari 3rd Stage, Bengaluru 560061, Karnataka, India
            </p>

            <div className="hq-actions-cluster">
              <a
                href={contact.address.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="action-link-hq action-link-hq--primary"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <span>↗</span>
              </a>
              <button
                type="button"
                onClick={handleCopyAddress}
                className="action-link-hq action-link-hq--secondary"
              >
                <span>{copied ? "COPIED TO CLIPBOARD ✓" : "COPY ADDRESS"}</span>
              </button>
            </div>

            <div className="hq-meta-stats">
              <div className="hq-meta-item">
                <span className="meta-val">100%</span>
                <span className="meta-lbl">Conversion in Karnataka</span>
              </div>
              <div className="hq-meta-item">
                <span className="meta-val">24/7</span>
                <span className="meta-lbl">Operations Telemetry</span>
              </div>
            </div>
          </div>

          {/* Right Column: Corridors & Onsite Training Preview */}
          <div className="corridors-showcase-card">
            <span className="corridors-tag">EXPANSION & DEPLOYMENT CORRIDORS</span>
            <div className="corridor-pills-flow">
              {expansionCities.map((city, idx) => (
                <div key={idx} className="corridor-chip">
                  <span className="pulse-dot" />
                  <span className="corridor-chip-name">{city.name}</span>
                  <span className="corridor-chip-badge">{city.tag}</span>
                </div>
              ))}
            </div>

            <div className="onsite-training-preview-box">
              <img
                src="/images/team-training.jpg"
                alt="Aspirants undergoing onsite training"
                className="onsite-training-img"
                loading="lazy"
                width="1200"
                height="800"
              />
              <div className="onsite-training-badge">
                <span className="pulse-dot" />
                <span>ON-GROUND PRESENCE ACROSS 30+ CITIES</span>
                <span className="tactile-stamp-micro">ACTIVE CORRIDORS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
