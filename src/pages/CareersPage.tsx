import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const gtcCommitments = [
  {
    number: "01",
    title: "Impactful Work",
    description:
      "Join a team actively contributing to reducing unemployment impact, improving the education-to-job ratio and creating a sustainable working sector future for India. Your work will have a significant positive impact on employment and the communities we serve.",
  },
  {
    number: "02",
    title: "Innovation and Technology",
    description:
      "We empower and encourage creative thinking and unique ideas, providing a platform to bring your dream to life. Embrace the opportunity to work with cutting-edge technology and innovative solutions in the staffing space.",
  },
  {
    number: "03",
    title: "Collaborative Culture",
    description:
      "A community of doers, dreamers and changemakers — growing together under the Grow Together Commitment.",
  },
]

const stories = [
  {
    quote:
      "I started my journey as a marketing executive and today I am proud to be working as a marketing senior manager, leading a wonderful team. Over the years I have witnessed how tremendously Influence India can transform. Along with the company's progress I too have grown, both personally and professionally.",
    name: "Mohan Arya",
    role: "Senior Manager, Marketing",
    initials: "MA",
  },
  {
    quote:
      "The onsite management team and the central operation system removed the guesswork from our rosters. We stopped chasing vendors and started planning our floor with confidence.",
    name: "Operations Lead",
    role: "Corporate client, Bengaluru",
    initials: "OL",
  },
  {
    quote:
      "I joined as a fresher. The training, the assessment and the certification made me employable in weeks — and the placement was equivalent to my education.",
    name: "Certified Aspirant",
    role: "Service provider, Karnataka",
    initials: "CA",
  },
]

interface Role {
  num: string
  title: string
  dept: "hr" | "finance" | "operations" | "tech"
  type: string
  exp: string
  desc: string
}

const openRoles: Role[] = [
  {
    num: "01",
    title: "HR EXECUTIVE",
    dept: "hr",
    type: "FULL TIME",
    exp: "FRESHER / 1–3 YEARS",
    desc: "Talent acquisition, candidate documentation, and background verification management for corporate deployment.",
  },
  {
    num: "02",
    title: "ACCOUNTING STAFF",
    dept: "finance",
    type: "FULL TIME",
    exp: "FRESHER / 1–3 YEARS",
    desc: "Payroll ledger management, statutory EPF/ESI compliances, client invoicing and vendor balance reconciliation.",
  },
  {
    num: "03",
    title: "FIELD EXECUTIVE",
    dept: "operations",
    type: "FULL TIME",
    exp: "FRESHER / 1–3 YEARS",
    desc: "On-ground corridor inspections, attendance audits, biometric supervisor support and workforce coordination.",
  },
  {
    num: "04",
    title: "TEAM LEAD",
    dept: "operations",
    type: "FULL TIME",
    exp: "1–3 YEARS",
    desc: "Floor supervision, daily roster planning, SLA compliance oversight and real-time shift handover.",
  },
  {
    num: "05",
    title: "MIS BACK-END STAFF",
    dept: "tech",
    type: "FULL TIME",
    exp: "FRESHER / 1–3 YEARS",
    desc: "Data entry, roster analytics, telemetry reporting and automated attendance tracking on central DOS.",
  },
  {
    num: "06",
    title: "SYSTEM OPERATOR",
    dept: "tech",
    type: "FULL TIME",
    exp: "FRESHER / 1–3 YEARS",
    desc: "Hardware & biometric scanner setup, network telemetry sync, portal user permissions and field device troubleshooting.",
  },
  {
    num: "07",
    title: "OPERATIONS MANAGER",
    dept: "hr",
    type: "FULL TIME",
    exp: "1–3 YEARS",
    desc: "End-to-end client engagement, P&L management for workforce accounts, escalation management and growth planning.",
  },
]

const departments = [
  { id: "all", label: "ALL ROLES", count: 7 },
  { id: "operations", label: "OPERATIONS & FIELD", count: 2 },
  { id: "hr", label: "HR & MANAGEMENT", count: 2 },
  { id: "finance", label: "FINANCE & ACCOUNTS", count: 1 },
  { id: "tech", label: "TECH & MIS", count: 2 },
]

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState<string>("all")
  const [selectedRole, setSelectedRole] = useState<Role | null>(null)
  const [applicantName, setApplicantName] = useState("")
  const [applicantPhone, setApplicantPhone] = useState("")
  const [applicantDegree, setApplicantDegree] = useState("")

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const filteredRoles =
    activeDept === "all"
      ? openRoles
      : openRoles.filter((r) => r.dept === activeDept)

  return (
    <div className="careers-page editorial-page">
      {/* Hero */}
      <section className="section careers-hero-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="page-header-badge"
          >
            <span className="page-badge-dot" />
            <span>CAREERS · GROW WITH INFLUENCE INDIA</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="editorial-page-title"
          >
            JOIN OUR UNIQUE
            <br />
            <span className="text-lime">SYSTEM INNOVATORS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="editorial-lead"
          >
            Be part of a unique and innovative company at the forefront of
            sustainable staffing solutions — a community of doers, dreamers and
            changemakers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="hero-actions"
          >
            <a href="#open-roles" className="action action--lime">
              <span>OPEN POSITIONS</span>
              <span>↓</span>
            </a>
            <a
              href="mailto:careers@influenceindiaservices.com?subject=Application%20for%20Careers%20at%20Influence%20India"
              className="action action--dark"
            >
              <span>SEND YOUR RESUME</span>
              <span>✉</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="careers-hero-image-wrap"
          >
            <img
              src="/images/corporate-interview.jpg"
              alt="Interview and career onboarding at Influence India Services"
              width="1800"
              height="1000"
              className="careers-hero-image"
            />
            <div className="careers-hero-badge">
              <span className="live-status-dot" />
              <span>
                75% OF MANAGEMENT ROLES FILLED THROUGH INTERNAL PROMOTION
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section careers-community-section">
        <div className="container">
          <div className="editorial-split-grid">
            <div className="editorial-col-left">
              <span className="section-label-text">A COMMUNITY OF DOERS</span>
              <h2>
                DOERS, DREAMERS
                <br />
                <span className="text-lime">AND CHANGEMAKERS</span>
              </h2>
            </div>
            <div className="editorial-col-right">
              <p>
                We are passionate about revolutionising the staffing industry in
                India and creating a stable workspace for all. As we continue to
                expand our service and make a major positive impact on the
                working industry, we are seeking talented individuals who share
                our vision and are committed to driving change.
              </p>
              <p className="highlight-text">
                Life at Influence India is dynamic, fast-paced and exciting,
                with a constant focus on creating real impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GTC Commitment */}
      <section className="section careers-gtc-section">
        <div className="container">
          <div className="section-heading-editorial">
            <span className="section-label-text">
              GTC — GROW TOGETHER COMMITMENT
            </span>
            <h2>
              LET'S DRIVE SUSTAINABLE STAFFING SOLUTION SERVICES
              <br />
              <span className="text-lime">
                AND RESHAPE THE FUTURE OF WORKSPACE IN INDIA.
              </span>
            </h2>
          </div>

          <div className="gtc-grid">
            {gtcCommitments.map((item) => (
              <motion.div
                key={item.number}
                whileHover={{ y: -4, borderColor: "#3f6e14" }}
                className="gtc-card"
              >
                <span className="gtc-num">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories of Success */}
      <section className="section careers-stories-section">
        <div className="container">
          <div className="section-heading-editorial">
            <span className="section-label-text">A WORD FROM OUR TEAM</span>
            <h2>
              MOMENTS FROM OUR
              <br />
              <span className="text-lime">STORIES OF SUCCESS</span>
            </h2>
          </div>

          <div className="stories-grid">
            {stories.map((story, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="story-card"
              >
                <span className="story-quote-mark">“</span>
                <p className="story-quote">{story.quote}</p>
                <div className="story-author">
                  <div className="story-avatar">{story.initials}</div>
                  <div>
                    <strong>{story.name}</strong>
                    <span>{story.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn, Grow and Lead */}
      <section className="section careers-learn-section">
        <div className="container">
          <div className="learn-box">
            <div className="learn-left">
              <span className="section-label-text">
                LIFE AT INFLUENCE INDIA
              </span>
              <h2>LEARN, GROW AND LEAD</h2>
              <p>
                Internal exams, certification and promotion make up 75% of our
                management roles. Every team member has a direct, transparent
                trajectory from entry level to team leadership.
              </p>
            </div>
            <div className="learn-right">
              <img
                src="/images/skill-certification.jpg"
                alt="Practical training and certification workshop"
                width="800"
                height="500"
                className="learn-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions with Department Filter & Quick Apply Modal */}
      <section className="section careers-positions-section" id="open-roles">
        <div className="container">
          <div className="section-heading-editorial">
            <span className="section-label-text">OPEN POSITIONS</span>
            <h2>
              SEVEN FULL-TIME ROLES
              <br />
              <span className="text-lime">OPEN RIGHT NOW</span>
            </h2>
            <div className="positions-meta-bar">
              <span className="meta-pill">
                <span className="meta-pill-dot" />
                <strong className="meta-pill-label">CITY:</strong>
                <span className="meta-pill-val">Bengaluru</span>
              </span>
              <span className="meta-pill">
                <span className="meta-pill-dot" />
                <strong className="meta-pill-label">STATE:</strong>
                <span className="meta-pill-val">Karnataka</span>
              </span>
              <span className="meta-pill">
                <span className="meta-pill-dot" />
                <strong className="meta-pill-label">COUNTRY:</strong>
                <span className="meta-pill-val">India</span>
              </span>
              <span className="meta-pill">
                <span className="meta-pill-dot" />
                <strong className="meta-pill-label">INDUSTRY:</strong>
                <span className="meta-pill-val">Staffing Solution Service</span>
              </span>
            </div>
          </div>

          {/* Interactive Department Filter Pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.6rem",
              margin: "2.5rem 0 2rem",
            }}
          >
            {departments.map((dept) => (
              <button
                key={dept.id}
                type="button"
                onClick={() => setActiveDept(dept.id)}
                style={{
                  padding: "0.45rem 1.1rem",
                  borderRadius: "9999px",
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  border:
                    activeDept === dept.id
                      ? "1.5px solid #3f6e14"
                      : "1px solid rgba(23, 29, 22, 0.15)",
                  background:
                    activeDept === dept.id ? "#ecfccb" : "#ffffff",
                  color: activeDept === dept.id ? "#365314" : "#4e5a4a",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <span>{dept.label}</span>
                <span
                  style={{
                    background:
                      activeDept === dept.id ? "#365314" : "rgba(0,0,0,0.06)",
                    color: activeDept === dept.id ? "#ffffff" : "#4e5a4a",
                    fontSize: "0.65rem",
                    padding: "0.1rem 0.4rem",
                    borderRadius: "9999px",
                  }}
                >
                  {dept.count}
                </span>
              </button>
            ))}
          </div>

          <motion.div layout className="roles-list">
            <AnimatePresence>
              {filteredRoles.map((role) => (
                <motion.div
                  key={role.num}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.3 }}
                  className="role-card"
                >
                  <div className="role-card-left">
                    <span className="role-num">{role.num}</span>
                    <div className="role-info">
                      <h3>{role.title}</h3>
                      <p>{role.desc}</p>
                    </div>
                  </div>

                  <div className="role-card-right">
                    <div className="role-tags">
                      <span className="role-tag role-tag--type">{role.type}</span>
                      <span className="role-tag role-tag--exp">{role.exp}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedRole(role)}
                      className="role-apply-btn"
                    >
                      <span>APPLY</span>
                      <span className="role-apply-arrow">→</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="roles-footer-banner">
            <div className="roles-footer-content">
              <h3>READY TO DRIVE CHANGE</h3>
              <p>
                EXPLORE OUR CAREERS AND BE PART OF THE FUTURE OF THE STAFFING
                SOLUTION INDUSTRY. For a job description, or to send your
                resume, write to{" "}
                <a href="mailto:careers@influenceindiaservices.com">
                  careers@influenceindiaservices.com
                </a>
                .
              </p>
            </div>
            <a
              href="mailto:careers@influenceindiaservices.com?subject=Resume%20Submission"
              className="action action--lime"
            >
              <span>SEND YOUR RESUME</span>
              <span>✉</span>
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Quick Apply Modal */}
      <AnimatePresence>
        {selectedRole && (
          <div
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
            onClick={() => setSelectedRole(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25 }}
              style={{
                background: "#ffffff",
                maxWidth: "520px",
                width: "100%",
                borderRadius: "1.25rem",
                padding: "2.25rem",
                boxShadow: "0 25px 60px -15px rgba(0,0,0,0.4)",
                border: "1px solid rgba(23, 29, 22, 0.12)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#3f6e14", letterSpacing: "0.1em" }}>
                  FAST-TRACK CANDIDATE ROSTER
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedRole(null)}
                  style={{ background: "none", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "50%", width: "30px", height: "30px", cursor: "pointer" }}
                >
                  ✕
                </button>
              </div>

              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 800, color: "#111827", marginBottom: "0.3rem" }}>
                Apply for {selectedRole.title}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#6b7280", marginBottom: "1.5rem" }}>
                {selectedRole.desc}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 800, color: "#374151", marginBottom: "0.3rem" }}>
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Enter your full name"
                    style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "0.9rem" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 800, color: "#374151", marginBottom: "0.3rem" }}>
                    WHATSAPP / PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "0.9rem" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 800, color: "#374151", marginBottom: "0.3rem" }}>
                    HIGHEST EDUCATION / DEGREE *
                  </label>
                  <input
                    type="text"
                    value={applicantDegree}
                    onChange={(e) => setApplicantDegree(e.target.value)}
                    placeholder="e.g. B.Com, BBA, B.E., Diploma"
                    style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "0.9rem" }}
                  />
                </div>

                <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
                  <a
                    href={`mailto:careers@influenceindiaservices.com?subject=Application%20for%20${encodeURIComponent(
                      selectedRole.title,
                    )}&body=Name:%20${encodeURIComponent(applicantName)}%0D%0APhone:%20${encodeURIComponent(
                      applicantPhone,
                    )}%0D%0AEducation:%20${encodeURIComponent(applicantDegree)}`}
                    style={{
                      flex: 1,
                      textAlign: "center",
                      padding: "0.85rem",
                      background: "#3f6e14",
                      color: "#ffffff",
                      borderRadius: "8px",
                      fontWeight: 800,
                      fontSize: "0.85rem",
                      textDecoration: "none",
                    }}
                  >
                    SUBMIT APPLICATION ✉
                  </a>
                  <a
                    href={`https://wa.me/919606329992?text=Hello%20Influence%20India,%20I%20am%20applying%20for%20${encodeURIComponent(
                      selectedRole.title,
                    )}.%20Name:%20${encodeURIComponent(applicantName)},%20Phone:%20${encodeURIComponent(
                      applicantPhone,
                    )},%20Education:%20${encodeURIComponent(applicantDegree)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "0.85rem 1.25rem",
                      background: "#25D366",
                      color: "#ffffff",
                      borderRadius: "8px",
                      fontWeight: 800,
                      fontSize: "0.85rem",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
