import { useState, useEffect, type FormEvent } from "react"

export interface ContactPageProps {
  onNavigate: (target: string) => void
}

const contactChannels = [
  {
    badge: "CORPORATE & CLIENT DESK",
    title: "Enterprise Staffing",
    desc: "For corporate hiring contracts, managed onsite workforce, and pan-India talent deployment.",
    email: "contact@influenceindiaservices.com",
    ctaLabel: "Email Corporate Desk",
    subject: "Enterprise Staffing & Managed Workforce Inquiry",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    badge: "CAREERS & ASPIRANTS DESK",
    title: "Careers & Placement",
    desc: "For job seekers, freshers, skilled trainees, and aspirants seeking placement under GTP.",
    email: "careers@influenceindiaservices.com",
    ctaLabel: "Email Careers Desk",
    subject: "Candidate Placement & Career Application",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    badge: "INSTANT CHAT & DISPATCH",
    title: "WhatsApp & Phone",
    desc: "Speak with our central coordination desk for urgent inquiries and quick consultations.",
    email: "+91 96063 29992",
    ctaLabel: "Chat on WhatsApp",
    isWhatsApp: true,
    href: "https://wa.me/919606329992?text=Hello%20Influence%20India%20Services,%20I%20would%20like%20to%20connect%20regarding%20workforce%20solutions.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 1.763.458 3.42 1.258 4.864L2.002 22l5.28-1.226a9.96 9.96 0 0 0 4.719 1.227c5.522 0 9.999-4.477 9.999-9.999 0-5.522-4.477-10-9.999-10zm0 18.25a8.21 8.21 0 0 1-4.195-1.148l-.301-.179-3.117.818.832-3.038-.196-.312a8.21 8.21 0 0 1-1.272-4.391c0-4.55 3.7-8.25 8.249-8.25 4.55 0 8.25 3.7 8.25 8.25 0 4.55-3.7 8.25-8.25 8.25zm4.526-6.177c-.248-.124-1.467-.724-1.695-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.187-.539.062s-1.05-.387-2.001-1.234c-.74-.66-1.24-1.475-1.385-1.724-.145-.249-.015-.383.109-.507.112-.111.249-.29.373-.435.124-.145.166-.249.249-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.35-.767-1.848-.202-.486-.407-.42-.56-.428-.145-.008-.311-.01-.477-.01-.166 0-.435.062-.663.311-.228.249-.871.851-.871 2.075 0 1.224.892 2.407 1.016 2.573.124.166 1.755 2.68 4.252 3.758.594.256 1.058.409 1.42.524.597.19 1.14.163 1.57.099.479-.071 1.467-.6 1.674-1.179.207-.579.207-1.075.145-1.179-.062-.104-.228-.166-.477-.29z" />
      </svg>
    ),
  },
]

const inquiryCategories = [
  "Right Staffing & Recruitment",
  "Managed Services & Onsite Ops",
  "Grow Together Policy (GTP) Tie-up",
  "OSTP Skill Training Programs",
  "Candidate Placement / Careers",
  "General Partnership Inquiry",
]

const teamSizes = ["1–10 Hires", "11–50 Hires", "51–200 Hires", "200+ Enterprise Scale"]

const faqs = [
  {
    q: "How fast can Influence India deploy verified workforce?",
    a: "Depending on role profiles and location, initial shortlisted and background-verified aspirants can be mobilised within 48 to 72 hours through our central operations command.",
  },
  {
    q: "How does the email contact system work?",
    a: "When you submit this form or click any email link, your email client opens pre-formatted with your exact requirements, ensuring direct transmission to the designated senior relationship officer.",
  },
  {
    q: "Can educational institutions partner for GTP (Grow Together Policy)?",
    a: "Yes. We partner with universities and technical colleges across India to bridge classroom education with guaranteed corporate placements under our 21 GTP footprints.",
  },
  {
    q: "What regions and cities are currently live?",
    a: "Our active operational network covers 30+ cities across India including Bengaluru, Mumbai, Pune, Chennai, Hyderabad, Gujarat, Uttar Pradesh, and Bhubaneswar.",
  },
]

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [company, setCompany] = useState("")
  const [category, setCategory] = useState(inquiryCategories[0])
  const [teamSize, setTeamSize] = useState(teamSizes[0])
  const [preferredMethod, setPreferredMethod] = useState("Email")
  const [message, setMessage] = useState("")

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submittedData, setSubmittedData] = useState<{
    mailtoUrl: string
    summary: string
  } | null>(null)
  const [copied, setCopied] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [locationToast, setLocationToast] = useState<string | null>(null)

  const handleGetLocation = async () => {
    const mapsUrl = "https://maps.app.goo.gl/Te4jpDgYpbt2toRbA"
    window.open(mapsUrl, "_blank", "noopener,noreferrer")
    try {
      await navigator.clipboard.writeText(
        "Influence India Services, 69, 1st Floor, Opposite Kuntamaramma Temple, Arehalli, AGS Layout Main Road, Banashankari 3rd Stage, Bengaluru 560061, Karnataka, India (GPS: 12.9084977, 77.5385120)",
      )
      setLocationToast("Location address copied & opened in Google Maps!")
    } catch {
      setLocationToast("Opening Bengaluru Office on Google Maps...")
    }
    setTimeout(() => setLocationToast(null), 4000)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const subject = `[Influence India Inquiry] ${category} — ${fullName}${company ? ` (${company})` : ""}`

    const bodyText = `INFLUENCE INDIA SERVICES — DIRECT INQUIRY
===========================================
Full Name: ${fullName}
Work Email: ${email}
Phone / WhatsApp: ${phone || "Not specified"}
Company / Institution: ${company || "Not specified"}
Inquiry Category: ${category}
Requirement Scale: ${teamSize}
Preferred Contact Method: ${preferredMethod}

MESSAGE & REQUIREMENTS:
${message}

===========================================
Submitted via influenceindiaservices.com/contact`

    const mailtoUrl = `mailto:contact@influenceindiaservices.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyText)}`

    setSubmittedData({
      mailtoUrl,
      summary: bodyText,
    })
    setIsSubmitted(true)

    // Trigger user's mail client directly
    window.location.href = mailtoUrl
  }

  const handleCopySummary = async () => {
    if (!submittedData) return
    try {
      await navigator.clipboard.writeText(submittedData.summary)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Fallback
    }
  }

  const handleResetForm = () => {
    setIsSubmitted(false)
    setSubmittedData(null)
    setFullName("")
    setEmail("")
    setPhone("")
    setCompany("")
    setMessage("")
  }

  return (
    <div className="contact-page editorial-page">
      <div className="container">
        {/* Top Breadcrumb & Navigation */}
        <div className="contact-breadcrumbs">
          <button
            type="button"
            className="contact-back-btn"
            onClick={() => onNavigate("home")}
          >
            <span aria-hidden="true">←</span>
            <span>Back to Home</span>
          </button>
          <span className="contact-crumb-sep">/</span>
          <span className="contact-crumb-current">Contact Us</span>
        </div>

        {/* Hero Header */}
        <header className="contact-hero-header">
          <div className="page-header-badge">
            <span className="page-badge-dot" />
            <span>DIRECT WORKFORCE &amp; RECRUITMENT DESK</span>
          </div>

          <h1 className="editorial-page-title">
            LET&apos;S TALK ABOUT YOUR
            <br />
            <span className="text-lime">WORKFORCE FUTURE</span>
          </h1>

          <p className="editorial-lead">
            Connect directly with our central operations command for managed
            staffing, GTP institutional partnerships, or candidate placement
            across India. We respond within 2–4 business hours.
          </p>
        </header>

        {/* Direct Channels Cards */}
        <section
          className="contact-channels-grid"
          aria-label="Direct Contact Channels"
        >
          {contactChannels.map((c, idx) => (
            <div key={idx} className="contact-channel-card">
              <div className="contact-channel-top">
                <span className="contact-channel-badge">{c.badge}</span>
                <span className="contact-channel-icon" aria-hidden="true">
                  {c.icon}
                </span>
              </div>
              <h2 className="contact-channel-title">{c.title}</h2>
              <p className="contact-channel-desc">{c.desc}</p>

              <div className="contact-channel-val">
                <code>{c.email}</code>
              </div>

              {c.isWhatsApp ? (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-action contact-channel-action--whatsapp"
                >
                  <span>{c.ctaLabel}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <a
                  href={`mailto:${c.email}?subject=${encodeURIComponent(
                    c.subject || "Inquiry for Influence India Services",
                  )}`}
                  className="contact-channel-action contact-channel-action--email"
                >
                  <span>{c.ctaLabel}</span>
                  <span aria-hidden="true">✉</span>
                </a>
              )}
            </div>
          ))}
        </section>

        {/* Main Grid: Contact Form + Corporate Info Sidebar */}
        <section className="contact-main-grid" id="contact-form-section">
          {/* Left Column: Form Card */}
          <div className="contact-form-container">
            <div className="contact-form-card">
              {!isSubmitted ? (
                <>
                  <div className="contact-form-header">
                    <span className="contact-form-eyebrow">
                      <span>STRUCTURED INQUIRY FORM</span>
                      <span className="contact-form-dot" />
                      <span>DIRECT TO EMAIL</span>
                    </span>
                    <h2 className="contact-form-title">
                      Send an Official Inquiry
                    </h2>
                    <p className="contact-form-subtitle">
                      Complete this form to generate a structured email brief
                      directly to our relationship team.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="contact-form-row">
                      <div className="contact-field">
                        <label
                          htmlFor="contact-fullname"
                          className="contact-label"
                        >
                          Full Name <span className="text-required">*</span>
                        </label>
                        <input
                          id="contact-fullname"
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Ramesh Kumar"
                          className="contact-input"
                        />
                      </div>

                      <div className="contact-field">
                        <label htmlFor="contact-email" className="contact-label">
                          Work Email <span className="text-required">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. ramesh@company.com"
                          className="contact-input"
                        />
                      </div>
                    </div>

                    <div className="contact-form-row">
                      <div className="contact-field">
                        <label htmlFor="contact-phone" className="contact-label">
                          Phone / WhatsApp{" "}
                          <span className="text-required">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +91 96063 29992"
                          className="contact-input"
                        />
                      </div>

                      <div className="contact-field">
                        <label
                          htmlFor="contact-company"
                          className="contact-label"
                        >
                          Company / Institution Name
                        </label>
                        <input
                          id="contact-company"
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="e.g. Enterprise Ltd. or College Name"
                          className="contact-input"
                        />
                      </div>
                    </div>

                    {/* Inquiry Category Selector */}
                    <div className="contact-field">
                      <label className="contact-label">
                        Inquiry Category
                      </label>
                      <div className="contact-category-chips">
                        {inquiryCategories.map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            className={`contact-chip ${
                              category === cat ? "is-selected" : ""
                            }`}
                            onClick={() => setCategory(cat)}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="contact-form-row">
                      <div className="contact-field">
                        <label
                          htmlFor="contact-teamsize"
                          className="contact-label"
                        >
                          Estimated Requirement Scale
                        </label>
                        <select
                          id="contact-teamsize"
                          value={teamSize}
                          onChange={(e) => setTeamSize(e.target.value)}
                          className="contact-select"
                        >
                          {teamSizes.map((size) => (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="contact-field">
                        <label className="contact-label">
                          Preferred Response Method
                        </label>
                        <div className="contact-method-radios">
                          {["Email", "WhatsApp", "Phone Call"].map((m) => (
                            <label key={m} className="contact-radio-label">
                              <input
                                type="radio"
                                name="preferredMethod"
                                value={m}
                                checked={preferredMethod === m}
                                onChange={(e) =>
                                  setPreferredMethod(e.target.value)
                                }
                              />
                              <span>{m}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Message Box */}
                    <div className="contact-field">
                      <label htmlFor="contact-msg" className="contact-label">
                        Message &amp; Requirements{" "}
                        <span className="text-required">*</span>
                      </label>
                      <textarea
                        id="contact-msg"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Detail your roles, hiring count, locations, required turnaround, or partnership questions..."
                        className="contact-textarea"
                      />
                    </div>

                    <div className="contact-form-footer">
                      <button
                        type="submit"
                        className="action action--lime contact-submit-btn"
                      >
                        <span>DISPATCH INQUIRY VIA EMAIL</span>
                        <span aria-hidden="true">✉ →</span>
                      </button>
                      <span className="contact-form-security-note">
                        🔒 Form generates an instant pre-addressed email to our
                        leadership desk with zero spam.
                      </span>
                    </div>
                  </form>
                </>
              ) : (
                /* Success / Submission Prepared State */
                <div className="contact-success-state">
                  <div className="contact-success-badge">
                    <span className="contact-success-icon" aria-hidden="true">
                      ✓
                    </span>
                    <span>INQUIRY PREPARED SUCCESSFULLY</span>
                  </div>

                  <h2 className="contact-success-title">
                    Thank you, {fullName}!
                  </h2>
                  <p className="contact-success-lead">
                    Your inquiry has been compiled and pre-formatted for direct
                    delivery to{" "}
                    <strong>contact@influenceindiaservices.com</strong>.
                  </p>

                  <div className="contact-success-actions">
                    <a
                      href={submittedData?.mailtoUrl}
                      className="action action--lime"
                    >
                      <span>OPEN IN MAIL APP (SEND NOW)</span>
                      <span aria-hidden="true">✉</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="action action--dark"
                    >
                      <span>
                        {copied ? "COPIED TO CLIPBOARD!" : "COPY INQUIRY TEXT"}
                      </span>
                      <span aria-hidden="true">{copied ? "✓" : "📋"}</span>
                    </button>

                    <a
                      href={`https://wa.me/919606329992?text=${encodeURIComponent(
                        `Hi Influence India, I submitted an inquiry for ${category}: ${fullName} (${company || "Individual"})`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action action--outline"
                    >
                      <span>ALSO SEND VIA WHATSAPP</span>
                      <span aria-hidden="true">💬</span>
                    </a>
                  </div>

                  <div className="contact-summary-preview">
                    <span className="contact-summary-preview-title">
                      GENERATED INQUIRY CONTENT:
                    </span>
                    <pre className="contact-summary-pre">
                      {submittedData?.summary}
                    </pre>
                  </div>

                  <div className="contact-success-reset">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="contact-text-btn"
                    >
                      ← Need to submit another inquiry?
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Corporate Info & Guarantees */}
          <aside className="contact-sidebar">
            {/* Headquarters Card */}
            <div className="contact-info-card">
              <span className="contact-info-eyebrow">HEADQUARTERS</span>
              <h3 className="contact-info-heading">
                Influence India Services
              </h3>

              {/* Exact Location Google Map Image Card */}
              <div className="contact-map-box">
                <a
                  href="https://maps.app.goo.gl/Te4jpDgYpbt2toRbA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-map-link"
                  title="Click to view Bengaluru Office exact location in Google Maps"
                >
                  <img
                    src="/images/bengaluru-office-map.png"
                    alt="Google Map Exact Location — Bengaluru Office, Arehalli, AGS Layout, Banashankari 3rd Stage"
                    className="contact-map-img"
                    width="768"
                    height="460"
                    loading="lazy"
                  />
                  <div className="contact-map-overlay">
                    <span className="contact-map-overlay-text">
                      <span aria-hidden="true">📍</span>
                      <span>Bengaluru Office (Arehalli, AGS Layout)</span>
                    </span>
                    <span className="contact-map-overlay-badge">
                      Click to Open ↗
                    </span>
                  </div>
                </a>
              </div>

              <address className="contact-info-address">
                69, 1st Floor, Opposite Kuntamaramma Temple
                <br />
                Arehalli, AGS Layout Main Road
                <br />
                Banashankari 3rd Stage
                <br />
                Bengaluru 560061, Karnataka, India
              </address>

              <div className="contact-coords-bar">
                <span>GPS: 12.9085° N, 77.5385° E</span>
                <span>Banashankari 3rd Stage</span>
              </div>

              {/* Location Action Buttons */}
              <div className="contact-location-actions">
                <button
                  type="button"
                  onClick={handleGetLocation}
                  className="contact-get-location-btn"
                  title="Get exact location and directions for the Bengaluru office"
                >
                  <span className="btn-icon" aria-hidden="true">📍</span>
                  <span>GET LOCATION</span>
                  <span aria-hidden="true">↗</span>
                </button>

                {locationToast && (
                  <div className="contact-location-toast" role="status">
                    ✓ {locationToast}
                  </div>
                )}

                <a
                  href="https://maps.app.goo.gl/Te4jpDgYpbt2toRbA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-maps-btn"
                >
                  <span>Open in Google Maps</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="contact-info-meta-item" style={{ marginTop: "1.25rem" }}>
                <span className="contact-meta-label">HOURS OF OPERATION</span>
                <span className="contact-meta-val">
                  Monday – Saturday · 10:00AM – 6:00PM IST
                </span>
              </div>

              <div className="contact-info-meta-item">
                <span className="contact-meta-label">DIRECT PHONE</span>
                <a href="tel:+919606329992" className="contact-meta-link">
                  +91 96063 29992
                </a>
              </div>

              <div className="contact-info-meta-item">
                <span className="contact-meta-label">PRIMARY EMAIL</span>
                <a
                  href="mailto:contact@influenceindiaservices.com"
                  className="contact-meta-link"
                >
                  contact@influenceindiaservices.com
                </a>
              </div>
            </div>

            {/* Regional Hubs Card */}
            <div className="contact-info-card">
              <div className="contact-info-badge">
                <span className="page-badge-dot" />
                <span>PAN-INDIA REACH</span>
              </div>
              <h3 className="contact-info-heading">Regional Deployment Hubs</h3>
              <p className="contact-info-sub">
                Our central operations command manages workforce placement and
                on-ground teams across key industrial clusters:
              </p>
              <div className="contact-cities-cloud">
                {[
                  "Bengaluru (HQ)",
                  "Mumbai & Pune",
                  "Chennai",
                  "Hyderabad",
                  "Gujarat Cluster",
                  "Uttar Pradesh",
                  "Bhubaneswar",
                  "30+ Tier-1 & Tier-2 Cities",
                ].map((city, idx) => (
                  <span key={idx} className="contact-city-tag">
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Service Commitments */}
            <div className="contact-info-card contact-info-card--brand">
              <span className="contact-info-eyebrow">OUR COMMITMENT</span>
              <h3 className="contact-info-heading">
                Why Work With Influence India?
              </h3>
              <ul className="contact-commitments-list">
                <li>
                  <span className="commit-check">✓</span>
                  <div>
                    <strong>2–4 Hour Turnaround:</strong> Dedicated enterprise
                    manager assigned immediately.
                  </div>
                </li>
                <li>
                  <span className="commit-check">✓</span>
                  <div>
                    <strong>Zero Ghosting Policy:</strong> Transparent status
                    tracking for all enterprise requests.
                  </div>
                </li>
                <li>
                  <span className="commit-check">✓</span>
                  <div>
                    <strong>Verified Compliance:</strong> 100% background checks
                    and legal statutory adherence.
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </section>

        {/* Quick FAQ Section */}
        <section className="contact-faq-section" aria-label="Frequently Asked Questions">
          <div className="contact-faq-header">
            <span className="contact-info-eyebrow">HELP &amp; FAQS</span>
            <h2 className="contact-faq-title">Frequently Asked Questions</h2>
            <p className="contact-faq-sub">
              Quick answers about our staffing models, response times, and
              institutional policies.
            </p>
          </div>

          <div className="contact-faq-list">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`contact-faq-item ${
                  openFaq === idx ? "is-open" : ""
                }`}
              >
                <button
                  type="button"
                  className="contact-faq-q"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  <span className="contact-faq-icon">
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="contact-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
