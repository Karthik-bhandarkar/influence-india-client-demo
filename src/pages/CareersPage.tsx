import { useEffect, useState } from "react"

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

const openRoles = [
  {
    num: "01",
    title: "HR",
    type: "FULL TIME",
    exp: "FRESHER / 1–3 YEARS",
    desc: "Talent acquisition, candidate documentation, and background verification management for corporate deployment.",
  },
  {
    num: "02",
    title: "ACCOUNTING STAFF",
    type: "FULL TIME",
    exp: "FRESHER / 1–3 YEARS",
    desc: "Payroll ledger management, statutory EPF/ESI compliances, client invoicing and vendor balance reconciliation.",
  },
  {
    num: "03",
    title: "FIELD EXECUTIVE",
    type: "FULL TIME",
    exp: "FRESHER / 1–3 YEARS",
    desc: "On-ground corridor inspections, attendance audits, biometric supervisor support and workforce coordination.",
  },
  {
    num: "04",
    title: "TEAM LEAD",
    type: "FULL TIME",
    exp: "1–3 YEARS",
    desc: "Floor supervision, daily roster planning, SLA compliance oversight and real-time shift handover.",
  },
  {
    num: "05",
    title: "MIS BACK-END STAFF",
    type: "FULL TIME",
    exp: "FRESHER / 1–3 YEARS",
    desc: "Data entry, roster analytics, telemetry reporting and automated attendance tracking on central DOS.",
  },
  {
    num: "06",
    title: "SYSTEM OPERATOR",
    type: "FULL TIME",
    exp: "FRESHER / 1–3 YEARS",
    desc: "Hardware & biometric scanner setup, network telemetry sync, portal user permissions and field device troubleshooting.",
  },
  {
    num: "07",
    title: "MANAGER",
    type: "FULL TIME",
    exp: "1–3 YEARS",
    desc: "End-to-end client engagement, P&L management for workforce accounts, escalation management and growth planning.",
  },
]

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <div className="careers-page editorial-page">
      {/* Hero */}
      <section className="section careers-hero-section">
        <div className="container">
          <div className="page-header-badge">
            <span className="page-badge-dot" />
            <span>CAREERS · GROW WITH INFLUENCE INDIA</span>
          </div>

          <h1 className="editorial-page-title">
            JOIN OUR UNIQUE
            <br />
            <span className="text-lime">SYSTEM INNOVATORS</span>
          </h1>

          <p className="editorial-lead">
            Be part of a unique and innovative company at the forefront of
            sustainable staffing solutions — a community of doers, dreamers and
            changemakers.
          </p>

          <div className="hero-actions">
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
          </div>

          <div className="careers-hero-image-wrap">
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
          </div>
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
              <div key={item.number} className="gtc-card">
                <span className="gtc-num">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
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
              <div key={idx} className="story-card">
                <span className="story-quote-mark">“</span>
                <p className="story-quote">{story.quote}</p>
                <div className="story-author">
                  <div className="story-avatar">{story.initials}</div>
                  <div>
                    <strong>{story.name}</strong>
                    <span>{story.role}</span>
                  </div>
                </div>
              </div>
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

      {/* Open Positions */}
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
              <span className="meta-pill">
                <span className="meta-pill-dot" />
                <strong className="meta-pill-label">JOB TYPE:</strong>
                <span className="meta-pill-val">Full Time</span>
              </span>
              <span className="meta-pill">
                <span className="meta-pill-dot" />
                <strong className="meta-pill-label">EXPERIENCE:</strong>
                <span className="meta-pill-val">Fresher / 1–3 years</span>
              </span>
            </div>
          </div>

          <div className="roles-list">
            {openRoles.map((role) => (
              <div key={role.num} className="role-card">
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
                  <a
                    href={`mailto:careers@influenceindiaservices.com?subject=Application%20for%20${encodeURIComponent(
                      role.title,
                    )}%20Role`}
                    className="role-apply-btn"
                  >
                    <span>APPLY</span>
                    <span className="role-apply-arrow">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

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
    </div>
  )
}
