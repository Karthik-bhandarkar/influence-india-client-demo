import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import OrbitalWorkforceEngine from "../components/OrbitalWorkforceEngine"

const benefits = [
  {
    number: "01",
    title: "Above Industry Compensation",
    description:
      "Being part of our team guarantees financial acknowledgement of your skill, with above-industry compensation, incentives and refreshing programs.",
  },
  {
    number: "02",
    title: "Financial Inclusion",
    description:
      "We promote financial inclusion through schemes for children's education, health and economic stability.",
  },
  {
    number: "03",
    title: "Family Wellness Benefits",
    description:
      "We offer health camps, health insurance and paternity leave to take care of you and your family.",
  },
  {
    number: "04",
    title: "Skill Recognition",
    description:
      "We value good work and responsibility, with rewards and recognition programs for outstanding performers.",
  },
  {
    number: "05",
    title: "Career Growth",
    description:
      "Internal exams, certification and promoted profiles make up 75% of our management roles.",
  },
]

const corporatePillars = [
  {
    number: "01",
    title: "Our Value Proposition",
    description:
      "Influence India Services turns a hiring problem into a managed staffing solution. Through a standardised, technology-led model we source, train, certify and deploy people and then manage them on your floor — one accountable team from the first interview to everyday performance, in place of a panel of vendors.",
  },
  {
    number: "02",
    title: "Regulatory Tailwinds",
    description:
      "Compliance is moving to the centre of workforce management, and staffing that cannot evidence it is being phased out. Every service provider completes thorough background verification and police verification (PVC) before deployment, and our operations run to current regulations — so our clients stay ahead of regulatory change rather than reacting to it.",
  },
  {
    number: "03",
    title: "Unit Economics",
    description:
      "Traditional in-house recruitment carries the full weight of sourcing, training and replacement. The same workforce costs up to 65% less than your current cost of recruitment, with zero capital expenditure, no charge for training, enhancement or enrolment programs, and zero cost escalation across multi-year agreements — a flat, predictable budget instead of a rising one.",
  },
  {
    number: "04",
    title: "Corporate Business Impact",
    description:
      "The gain reaches beyond lower attrition. Our Dedicated Operation System tracks attendance, rosters and performance at every milestone, so floors are planned on live data rather than guesswork, and fast replacement resolution means an absence never becomes an outage.",
  },
]

const integratedOfferings = [
  {
    title: "Staffing Management Solutions",
    description:
      "Customised recruitment management across PAN-India locations, run through one operating centre — sourcing, onboarding and roster management for corporate and non-corporate sectors alike.",
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "A central system for execution, planning and monitoring that gives your team live oversight of the workforce and immediate visibility of what each site needs.",
  },
  {
    title: "Technology Solutions",
    description:
      "Real-time monitoring, predictive rostering and system integration through our tracking and sourcing platform, on a sustainable, scalable and secure base.",
  },
  {
    title: "Managed Staffing Solutions",
    description:
      "Complete ownership of the staffing function — 100% owned management, onsite and offsite trainer teams and 24/7 client support, 365 days a year — delivered as one end-to-end managed service.",
  },
]

const steps = [
  {
    num: "01",
    label: "STEP 1",
    title: "Get in Touch",
    text: "If you are a fresher or experienced with 1 to 5 years, visit our corporate office in Bengaluru or give us a call. Our team will be happy to provide all the necessary information and answer any questions you may have.",
  },
  {
    num: "02",
    label: "STEP 2",
    title: "Interview, Documents & Verification",
    text: "We guide you through one-to-one and walk-in interviews, collecting and submitting the required documents. Our team also conducts a thorough background verification to ensure the safety and reliability of our service providers and employees.",
  },
  {
    num: "03",
    label: "STEP 3",
    title: "Skills, Training, Assessment & Enrolment",
    text: "As part of the recruitment process you will be trained and assessed, with a test of your knowledge and understanding of Influence India service provisions. Additionally, police verification (PVC) will be marked.",
  },
  {
    num: "04",
    label: "STEP 4",
    title: "You Are Ready to Lead the Staffing Industry",
    text: "Once you successfully clear the tests and complete the necessary procedures, you will be ready for deployment in a certified job role within our entity.",
  },
]

const faqs = [
  {
    q: "What is expected from an Influence India service provider?",
    a: "The Influence India service provider is expected to provide and meet the service goals as per the manual and the roster assigned by their team leader or manager. There are 7 working days a week with a flexible week of rosters, on-time login and logout to duty, and compliance with the Influence India code of conduct and all company policies.",
  },
  {
    q: "What are the working hours?",
    a: "We work in a 12-hour cycle across two rotational day shifts — 6:00 to 2:00 and 2:00 to 10:00.",
  },
  {
    q: "Is a day or night shift compulsory?",
    a: "No. We do not operate night shifts. We work only day shifts, in rotational blue and grey shift patterns.",
  },
  {
    q: "Do we have EPF and medical cover?",
    a: "Yes. EPF and medical insurance are provided to onboarded service providers.",
  },
  {
    q: "Is there any fee for joining?",
    a: "No fee is collected from job seekers. Once onboard, a one-time module fee is deducted from the salary within the first trimester.",
  },
  {
    q: "What if a criminal record is discovered during PVC verification?",
    a: "The service shall not continue if a criminal record is found during the police verification (PVC) process.",
  },
  {
    q: "Are there career shifts within a job site?",
    a: "Yes. Most of our management roles are handled by previous employees, promoted on the basis of their performance.",
  },
  {
    q: "Which cities do you operate in?",
    a: "Our corporate office is in Bengaluru, Karnataka. We are expanding to Mumbai and Pune, Chennai, Hyderabad, Gujarat, Uttar Pradesh and Bhubaneswar.",
  },
]

export default function SystemsPage({
  onNavigate,
}: {
  onNavigate: (target: string) => void
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [activeShift, setActiveShift] = useState<"blue" | "grey">("blue")

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <div className="systems-page editorial-page">
      {/* Systems / Job Eco-System Hero */}
      <section className="section systems-hero-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="page-header-badge"
          >
            <span className="page-badge-dot" />
            <span>JOB ECO-SYSTEM &amp; DEDICATED OPERATION SYSTEM</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="editorial-page-title"
          >
            BECOME AN INFLUENCE INDIA
            <br />
            <span className="text-lime">TEAM MEMBER</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="editorial-lead"
          >
            Seamless earning opportunities and knowledge gaining. Join the 250+
            community of companies delivering quality job requirements — and
            grow up to infinite in your career.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="hero-actions"
          >
            <button
              type="button"
              className="action action--lime"
              onClick={() => onNavigate("careers")}
            >
              <span>APPLY NOW</span>
              <span>→</span>
            </button>
            <button
              type="button"
              className="action action--dark"
              onClick={() => onNavigate("careers")}
            >
              <span>OPEN POSITIONS</span>
              <span>↓</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="systems-hero-image-wrap"
          >
            <img
              src="/images/systems-telemetry-hub.jpg"
              alt="Operations Command Center and India live telemetry at Influence India Services"
              width="1800"
              height="1000"
              className="systems-hero-image"
            />
            <div className="systems-hero-image-badge">
              <span className="live-status-dot" />
              <span>LIVE TELEMETRY · 250+ CLIENT COMPANIES CONNECTED</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proprietary Architecture: Closed-Loop Orbital Engine */}
      <section className="section systems-orbital-section" style={{ background: "#06130b", color: "#ffffff", padding: "5.5rem 0" }}>
        <div className="container">
          <div className="section-heading-editorial" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label-text" style={{ color: "#34d399" }}>• 04 / PROPRIETARY ARCHITECTURE</span>
            <h2 style={{ color: "#ffffff", marginTop: "0.75rem" }}>
              ONE CLOSED-LOOP WORKFORCE
              <br />
              <span className="text-lime" style={{ color: "#34d399" }}>ORBITAL ENGINE</span>
            </h2>
            <p className="heading-sub" style={{ color: "#9cb8a8", maxWidth: "680px", margin: "1rem auto 0" }}>
              Every stage connected in an autonomous feedback cycle. Zero friction between candidate discovery, ground skill training, statutory compliance, and day-one onsite performance.
            </p>
          </div>
          <OrbitalWorkforceEngine />
        </div>
      </section>

      {/* Live Dual-Shift Operational Simulator */}
      <section className="section systems-shift-simulator-section" style={{ background: "#fbfcf8", padding: "5rem 0", borderBottom: "1px solid rgba(23, 29, 22, 0.08)" }}>
        <div className="container">
          <div className="section-heading-editorial">
            <span className="section-label-text">OPERATIONAL CYCLES · 12H ARCHITECTURE</span>
            <h2>
              ROTATIONAL DAY SHIFTS
              <br />
              <span className="text-lime">ZERO NIGHT-DUTY MANDATE</span>
            </h2>
            <p className="heading-sub">
              Influence India Services operates strictly day shifts across two 8-hour operational cycles. Explore duty parameters below.
            </p>
          </div>

          {/* Interactive Shift Selector Tabs */}
          <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", marginBottom: "2rem", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={() => setActiveShift("blue")}
              style={{
                padding: "0.75rem 1.6rem",
                borderRadius: "12px",
                border: activeShift === "blue" ? "2px solid #2563eb" : "1px solid rgba(23,29,22,0.15)",
                background: activeShift === "blue" ? "#eff6ff" : "#ffffff",
                color: activeShift === "blue" ? "#1d4ed8" : "#4b5563",
                fontWeight: 800,
                fontSize: "0.88rem",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                transition: "all 0.25s ease",
              }}
            >
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#2563eb", display: "inline-block" }} />
              <span>SHIFT BLUE (06:00 – 14:00)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveShift("grey")}
              style={{
                padding: "0.75rem 1.6rem",
                borderRadius: "12px",
                border: activeShift === "grey" ? "2px solid #4b5563" : "1px solid rgba(23,29,22,0.15)",
                background: activeShift === "grey" ? "#f3f4f6" : "#ffffff",
                color: activeShift === "grey" ? "#111827" : "#4b5563",
                fontWeight: 800,
                fontSize: "0.88rem",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                transition: "all 0.25s ease",
              }}
            >
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#4b5563", display: "inline-block" }} />
              <span>SHIFT GREY (14:00 – 22:00)</span>
            </button>
          </div>

          {/* Shift Details Interactive Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeShift}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              style={{
                background: "#ffffff",
                border: "1px solid rgba(23, 29, 22, 0.1)",
                borderRadius: "18px",
                padding: "2.5rem",
                boxShadow: "0 10px 30px -8px rgba(0,0,0,0.06)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "2rem",
              }}
            >
              <div>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", color: "#3f6e14", textTransform: "uppercase" }}>
                  OPERATING WINDOW
                </span>
                <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#111827", marginTop: "0.35rem" }}>
                  {activeShift === "blue" ? "06:00 AM – 02:00 PM" : "02:00 PM – 10:00 PM"}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#6b7280", marginTop: "0.5rem", lineHeight: 1.6 }}>
                  {activeShift === "blue"
                    ? "Morning prime enterprise deployment window. Rigorous 05:45 biometric check-in with dedicated onsite team leader handover."
                    : "Afternoon rotational cycle ensuring seamless business continuity across banking, healthcare, and IT corridors."}
                </p>
              </div>

              <div>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", color: "#3f6e14", textTransform: "uppercase" }}>
                  ROSTER PROTOCOL
                </span>
                <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#111827", marginTop: "0.35rem" }}>
                  {activeShift === "blue" ? "Morning Wave A" : "Afternoon Wave B"}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#6b7280", marginTop: "0.5rem", lineHeight: 1.6 }}>
                  7-day flexible rolling week with statutory rest days. Zero overtime exploitation, with EPF &amp; medical cover logged on central DOS.
                </p>
              </div>

              <div>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", color: "#3f6e14", textTransform: "uppercase" }}>
                  STANDBY RESOLUTION
                </span>
                <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#111827", marginTop: "0.35rem" }}>
                  &lt; 4 Hours Guarantee
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#6b7280", marginTop: "0.5rem", lineHeight: 1.6 }}>
                  In the event of an unplanned absence, pre-vetted reserve aspirants from the regional cluster are mobilised within four hours.
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Unbeatable Benefits */}
      <section className="section systems-benefits-section">
        <div className="container">
          <div className="section-heading-editorial">
            <span className="section-label-text">UNBEATABLE BENEFITS</span>
            <h2>
              JOIN AND GROW TOGETHER
              <br />
              <span className="text-lime">FOR A BETTER CAREER</span>
            </h2>
            <p className="heading-sub">
              Grow up to infinite in your career. Join the future community of
              staffing solutions built around your career goals.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((b) => (
              <motion.div
                key={b.number}
                whileHover={{ y: -4, borderColor: "#3f6e14" }}
                className="benefit-card"
              >
                <span className="benefit-num">{b.number}</span>
                <h3>{b.title}</h3>
                <p>{b.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="systems-cta-strip">
            <p>
              Four steps from first contact to a certified job role. Talk to our
              Bengaluru team and we will take it from there.
            </p>
            <button
              type="button"
              className="action action--lime"
              onClick={() => onNavigate("careers")}
            >
              <span>START YOUR APPLICATION</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Corporate Staffing */}
      <section className="section systems-corporate-section">
        <div className="container">
          <div className="section-heading-editorial">
            <span className="section-label-text">CORPORATE STAFFING</span>
            <h2>
              DRIVING THE FUTURE
              <br />
              <span className="text-lime">OF CORPORATE STAFFING</span>
            </h2>
            <p className="heading-sub">
              As the working sector professionalises, Influence India Services
              is emerging as a leader in workforce management — sourcing,
              training, deployment and onsite management under one accountable
              team, and one operating system for corporate and non-corporate
              staffing across India.
            </p>
          </div>

          <div className="corporate-pillars-grid">
            {corporatePillars.map((cp) => (
              <motion.div
                key={cp.number}
                whileHover={{ y: -4, borderColor: "#3f6e14" }}
                className="corporate-pillar-card"
              >
                <span className="corp-num">{cp.number}</span>
                <h3>{cp.title}</h3>
                <p>{cp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Offering */}
      <section className="section systems-offerings-section">
        <div className="container">
          <div className="section-heading-editorial">
            <span className="section-label-text">OUR INTEGRATED OFFERING</span>
            <h2>
              ONE MANAGED CONTRACT.
              <br />
              <span className="text-lime">
                END-TO-END RECRUITMENT &amp; MANAGEMENT.
              </span>
            </h2>
          </div>

          <div className="integrated-grid">
            {integratedOfferings.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, borderColor: "#3f6e14" }}
                className="integrated-card"
              >
                <div className="integrated-marker">0{idx + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* About IIS Box */}
          <div className="systems-about-box">
            <div className="systems-about-header">
              <span className="section-label-text">
                PIONEERING SUSTAINABLE STAFFING
              </span>
              <h3>ABOUT INFLUENCE INDIA SERVICES</h3>
            </div>
            <p>
              A sustainable staffing and job-providing-as-a-service company
              serving corporate clients across India. Our commitment is to
              convert educational qualification into employment — reducing the
              unemployment impact among educated Indian youth by placing them in
              education-equivalent jobs. Under the Grow Together Policy we
              publish twenty-one footprints we hold ourselves to, and internal
              exams, certification and promotion make up 75% of our management
              roles. We are committed to setting new benchmarks for
              sustainability, efficiency and innovation in staffing management.
            </p>
            <p>
              Influence India Services is not just a solutions provider — we are
              your partner in achieving sustainable corporate business. Our
              integrated offering helps you reduce cost, stay compliant and
              contribute to a better staffing future. As we continue to innovate
              and expand, we invite you to join us in leading the future of
              corporate staffing.
            </p>
          </div>
        </div>
      </section>

      {/* 4-Step Application Process */}
      <section className="section systems-process-section">
        <div className="container">
          <div className="section-heading-editorial">
            <span className="section-label-text">
              APPLICATION PROCESS · 04 STEPS
            </span>
            <h2>
              TAKE THE FIRST STEP TOWARDS
              <br />
              <span className="text-lime">
                BECOMING A TRUSTED SERVICE PROVIDER
              </span>
            </h2>
            <p className="heading-sub">
              Join our team of skilled professionals and start providing
              top-notch service to our clients. Four steps, from first contact
              to certified deployment.
            </p>
          </div>

          <div className="process-steps-grid">
            {steps.map((st) => (
              <motion.div
                key={st.num}
                whileHover={{ y: -4, borderColor: "#3f6e14" }}
                className="process-step-card"
              >
                <span className="step-tag">{st.label}</span>
                <span className="step-num">{st.num}</span>
                <h3>{st.title}</h3>
                <p>{st.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Smooth Animated Accordion */}
      <section className="section systems-faq-section">
        <div className="container">
          <div className="section-heading-editorial">
            <span className="section-label-text">F.A.Q · 08 QUESTIONS</span>
            <h2>
              STRAIGHTFORWARD
              <br />
              <span className="text-lime">ANSWERS</span>
            </h2>
            <p className="heading-sub">
              So you can move forward with confidence. Still have questions? Our
              team answers within one working day.
            </p>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className={`faq-item-card ${isOpen ? "is-open" : ""}`}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                >
                  <div className="faq-item-header">
                    <span className="faq-item-num">0{idx + 1}</span>
                    <h3>{faq.q}</h3>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="faq-toggle-icon"
                      style={{ display: "grid", placeItems: "center" }}
                    >
                      +
                    </motion.span>
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="faq-item-body"
                        style={{ overflow: "hidden" }}
                      >
                        <p>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
