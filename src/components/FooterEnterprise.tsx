import React, { useState, type FormEvent } from "react"

export interface FooterEnterpriseProps {
  onNavigate: (view: string) => void
}

const companyLinks = [
  { label: "Home", nav: "home" },
  { label: "About us", nav: "about" },
  { label: "Grow Together Policy", nav: "gtp" },
  { label: "Job eco-system", nav: "systems" },
  { label: "Driving the future", nav: "careers" },
  { label: "Charging forward", nav: "systems" },
  { label: "Careers", nav: "careers" },
  { label: "Resources", nav: "resources" },
  { label: "Contact us", nav: "home", target: "#contact" },
]

const servicesLinks = [
  { label: "Right staffing", nav: "home", target: "#services" },
  { label: "Elevate entity growth", nav: "home", target: "#services" },
  { label: "PAN-India sourcing & recruiting", nav: "home", target: "#services" },
  { label: "Staffing services", nav: "home", target: "#services" },
  { label: "Managed services", nav: "home", target: "#services" },
  { label: "Skill adoption", nav: "home", target: "#services" },
  { label: "Onsite skill training (OSTP)", nav: "home", target: "#services" },
  { label: "Unique platform", nav: "systems" },
]

const sectorLinks = [
  "Corporate & IT services",
  "Hospitality",
  "Facility management",
  "Banking & financial services",
  "Retail & e-commerce",
  "Manufacturing & industrial",
  "Logistics & warehousing",
  "Healthcare support",
]

const regionalHubs = [
  "Gujarat",
  "Uttar Pradesh",
  "Bhubaneswar",
  "Mumbai & Pune",
  "Chennai",
  "Hyderabad",
]

const policies = [
  { title: "Code of Conduct", id: "conduct" },
  { title: "Privacy Policy", id: "privacy" },
  { title: "Terms & Conditions", id: "terms" },
  { title: "Refund Policy", id: "refund" },
  { title: "Whistleblowing Policy", id: "whistleblowing" },
  { title: "Grow Together Policy", id: "gtp" },
]

export default function FooterEnterprise({ onNavigate }: FooterEnterpriseProps) {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)
  const [activePolicy, setActivePolicy] = useState<{ title: string; desc: string } | null>(null)

  const handleLinkClick = (nav: string, target?: string) => {
    if (target) {
      if (window.location.hash !== "#home" && window.location.hash !== "") {
        onNavigate("home")
      }
      setTimeout(() => {
        const el = document.querySelector(target)
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      }, 80)
    } else {
      onNavigate(nav)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handlePolicyClick = (policyTitle: string, id: string) => {
    if (id === "gtp") {
      onNavigate("gtp")
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    const descriptions: Record<string, string> = {
      conduct:
        "Influence India Services upholds strict integrity, workplace dignity, candidate protection, and uncompromised compliance across all Indian labor standards.",
      privacy:
        "Candidate records, institutional data, and enterprise metrics are fully encrypted and held with institutional confidentiality.",
      terms:
        "All workforce engagements and OSTP training programs are governed by binding, transparent SLAs ensuring mutual delivery milestones.",
      refund:
        "Milestone-based operational governance provides complete fairness, placement accountability, and contract compliance.",
      whistleblowing:
        "A confidential 24/7 ombudsman channel is maintained for direct escalation of any grievance or compliance concern without fear of retaliation.",
    }

    setActivePolicy({
      title: policyTitle,
      desc: descriptions[id] || "Official policy documentation maintained by Influence India Services Compliance Board.",
    })
  }

  const onEmailSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSent(true)
    }
  }

  return (
    <footer
      className="relative overflow-hidden bg-white text-[#111827] border-t border-[#d3d4d3]"
      aria-label="Influence India Services Footer"
      style={{
        backgroundColor: "#FFFFFF",
        color: "#111827",
      }}
    >
      {/* 1. TOP SEPARATOR LINE: Clean copper/emerald hairline clearly separating the footer */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#b06741] to-transparent opacity-85" />
      <div className="pointer-events-none absolute inset-x-0 top-[2px] h-[1px] bg-[#d3d4d3]" />

      <div className="relative mx-auto max-w-[1340px] px-6 pt-16 pb-10 sm:px-10 lg:px-12">
        {/* 2. FIVE-COLUMN ENTERPRISE GRID */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.3fr_0.9fr_1.1fr_1fr_1.4fr] lg:gap-8 xl:gap-11">
          
          {/* COLUMN 1: Brand & Identity */}
          <div className="flex flex-col items-start pr-2">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                onNavigate("home")
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="group inline-block leading-none transition-opacity hover:opacity-85"
              aria-label="Influence India Services — home"
            >
              <span
                className="block text-[25px] sm:text-[28px] font-normal tracking-[0.14em] text-[#0e2119]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                INFLUEN<span className="text-[#005952]">C</span>E
              </span>
              <span className="mt-1 flex items-center gap-2">
                <span
                  className="text-[11px] sm:text-[12px] font-semibold tracking-[0.3em] text-[#0e2119]"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  INDIA
                </span>
                <span className="h-[1px] w-5 bg-[#005952]/60" />
                <span className="text-[8.5px] font-medium uppercase tracking-[0.42em] text-[#005952]">
                  Services
                </span>
              </span>
            </a>

            <p className="mt-5 text-[13.5px] leading-[1.75] text-[#5A6B63] max-w-[310px] font-normal">
              One system for sourcing, training, certification, deployment and onsite management — built for entities and aspirants across India.
            </p>

            {/* Social outline circles matching screenshot */}
            <div className="mt-6 flex items-center gap-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-[#d3d4d3] text-[11.5px] font-bold text-[#5A6B63] transition-all hover:border-[#b06741] hover:text-[#0e2119] hover:shadow-sm"
              >
                in
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="grid h-9 w-9 place-items-center rounded-full border border-[#d3d4d3] text-[#5A6B63] transition-all hover:border-[#b06741] hover:text-[#0e2119] hover:shadow-sm"
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-[#d3d4d3] text-[12px] font-bold text-[#5A6B63] transition-all hover:border-[#b06741] hover:text-[#0e2119] hover:shadow-sm"
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-[#d3d4d3] text-[#5A6B63] transition-all hover:border-[#b06741] hover:text-[#0e2119] hover:shadow-sm"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>

            {/* 30+ Cities live operations pill */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#005952]/25 bg-[#F0FDF4] px-3.5 py-1 text-[9.5px] font-bold tracking-[0.08em] text-[#005952] uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#059669]" />
              </span>
              <span>30+ CITIES · LIVE OPERATIONS</span>
            </div>
          </div>

          {/* COLUMN 2: Company */}
          <div>
            <div className="h-[1px] w-6 bg-[#b06741]" />
            <h4 className="mt-3.5 text-[9.5px] font-bold uppercase tracking-[0.38em] text-[#0e2119]">
              Company
            </h4>
            <ul className="mt-5 space-y-2.5 text-[13.5px] text-[#5A6B63]">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={`#${item.nav}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleLinkClick(item.nav, item.target)
                    }}
                    className="inline-block transition-colors hover:text-[#005952]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Services */}
          <div>
            <div className="h-[1px] w-6 bg-[#b06741]" />
            <h4 className="mt-3.5 text-[9.5px] font-bold uppercase tracking-[0.38em] text-[#0e2119]">
              Services
            </h4>
            <ul className="mt-5 space-y-2.5 text-[13.5px] text-[#5A6B63]">
              {servicesLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={`#${item.nav}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleLinkClick(item.nav, item.target)
                    }}
                    className="inline-block transition-colors hover:text-[#005952]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Sectors */}
          <div>
            <div className="h-[1px] w-6 bg-[#b06741]" />
            <h4 className="mt-3.5 text-[9.5px] font-bold uppercase tracking-[0.38em] text-[#0e2119]">
              Sectors
            </h4>
            <ul className="mt-5 space-y-2.5 text-[13.5px] text-[#5A6B63]">
              {sectorLinks.map((sector) => (
                <li key={sector}>
                  <span className="inline-block text-[#5A6B63] transition-colors hover:text-[#0e2119] cursor-default">
                    {sector}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 5: Corporate Office */}
          <div className="flex flex-col">
            <div className="h-[1px] w-6 bg-[#b06741]" />
            <h4 className="mt-3.5 text-[9.5px] font-bold uppercase tracking-[0.38em] text-[#0e2119]">
              Corporate Office
            </h4>
            
            <p className="mt-5 text-[13.5px] leading-[1.65] text-[#5A6B63]">
              69, 1st Floor, Opposite Kuntamaramma Temple, Arehalli, AGS Layout Main Road
              <br />
              Bengaluru 560061, Karnataka, India
            </p>

            <a
              href="https://maps.app.goo.gl/jDV9X3riE4SQLkmU9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.1em] text-[#0e2119] uppercase transition-colors hover:text-[#005952]"
            >
              <span>GET DIRECTIONS</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>

            <div className="mt-5 space-y-1.5 border-t border-[#d3d4d3] pt-4 text-[13px] text-[#5A6B63]">
              <div>
                <a
                  href="mailto:contact@influenceindiaservices.com"
                  className="transition-colors hover:text-[#0e2119] block truncate"
                >
                  contact@influenceindiaservices.com
                </a>
              </div>
              <div>
                <a
                  href="mailto:careers@influenceindiaservices.com"
                  className="transition-colors hover:text-[#0e2119] block truncate"
                >
                  careers@influenceindiaservices.com
                </a>
              </div>
              <div className="text-[#0e2119] font-medium">
                <a
                  href="https://wa.me/919606329992"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#005952] transition-colors"
                >
                  +91 96063 29992 <span className="text-[#5A6B63] font-normal">(WhatsApp)</span>
                </a>
              </div>
              <div className="text-[12px] text-[#7c6f6d]">
                Mon – Sat / 10:00AM – 6:00PM
              </div>
            </div>
          </div>
        </div>

        {/* 3. EMAIL NEWSLETTER INQUIRY RIBBON (Matching screenshot) */}
        <div className="mt-14 border-t border-[#d3d4d3] pt-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <p
              className="text-[20px] sm:text-[23px] font-light text-[#0e2119]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Direct staffing inquiries &amp; career guidance, straight to your inbox.
            </p>
            {sent ? (
              <p className="rounded-full border border-[#005952]/30 bg-[#F0FDF4] px-6 py-3 text-[12.5px] font-medium text-[#005952]">
                Thank you — our team will be in touch shortly.
              </p>
            ) : (
              <form
                onSubmit={onEmailSubmit}
                className="flex gap-2 rounded-full border border-[#d3d4d3] bg-white p-1.5 lg:min-w-[24rem] shadow-2xs hover:border-[#005952]/40 transition-colors"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="min-w-0 flex-1 rounded-full bg-transparent px-5 text-[13.5px] text-[#0e2119] outline-none placeholder:text-[#9CA3AF]"
                />
                <button
                  type="submit"
                  className="min-h-[40px] rounded-full bg-[#005952] px-6 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white transition-all hover:bg-[#003e38] shrink-0"
                >
                  Connect
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4. LOCATIONS MOVEMENT STRIP (Stationary Bengaluru HQ + Moving Marquee) */}
        <div className="mt-8 border-t border-[#d3d4d3] pt-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 overflow-hidden rounded-2xl bg-[#F8FAF9] border border-[#d3d4d3] p-2.5 sm:px-4 sm:py-2.5">
            {/* Stationary Bengaluru HQ Badge */}
            <div
              className="flex-shrink-0 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#d3d4d3] shadow-xs"
              title="Corporate Headquarters & Central Operations"
            >
              <div className="relative flex items-center justify-center w-2.5 h-2.5">
                <span className="absolute w-full h-full rounded-full bg-[#10b981] opacity-75 animate-ping" />
                <span className="relative w-1.5 h-1.5 rounded-full bg-[#059669] shadow-[0_0_6px_#10b981]" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[7.5px] font-bold tracking-[0.14em] uppercase text-[#005952]">
                  HEADQUARTERS
                </span>
                <span className="text-[12px] font-extrabold tracking-tight text-[#0e2119]">
                  BENGALURU
                </span>
              </div>
              <span className="text-[8px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#F0FDF4] border border-[#bbf7d0] text-[#005952]">
                CENTRAL HUB
              </span>
            </div>

            <div className="hidden sm:block h-6 w-px bg-[#d3d4d3] flex-shrink-0" />

            {/* Kinetic Marquee Ticker for Regional Hubs */}
            <div className="flex-1 min-w-0 flex items-center gap-3 overflow-hidden">
              <span className="flex-shrink-0 text-[9px] font-bold tracking-[0.15em] text-[#7c6f6d] uppercase">
                REGIONAL HUBS →
              </span>
              <div className="footer-marquee-viewport flex-1 overflow-hidden relative">
                <div className="footer-marquee-track flex items-center gap-2.5 w-max">
                  {[...regionalHubs, ...regionalHubs, ...regionalHubs].map((city, idx) => (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#d3d4d3] text-[11px] font-medium text-[#374151] whitespace-nowrap shadow-2xs hover:border-[#005952] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_4px_#3b82f6]" />
                      <span>{city}</span>
                      <span className="text-[8px] font-bold uppercase px-1.5 py-0.2 rounded-full bg-blue-50 border border-blue-200 text-blue-700">
                        ACTIVE
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. MONUMENTAL "INFLUENCE INDIA" TYPOGRAPHY (Exact 1:1 match to reference image media_1791473215687.png) */}
        <div className="mt-14 mb-8 select-none flex justify-center items-center px-2">
          <img
            src="/images/influence-india-watermark-transparent.png"
            alt="INFLUENCE INDIA"
            width={1024}
            height={321}
            className="w-full max-w-[1040px] h-auto object-contain select-none pointer-events-none transition-opacity duration-300 hover:opacity-90"
            loading="eager"
            style={{
              display: "block",
            }}
          />
        </div>

        {/* 6. BOTTOM POLICY ROW (Matching screenshot) */}
        <div className="mt-6 flex flex-col gap-4 border-t border-[#d3d4d3] pt-6 sm:flex-row sm:items-center sm:justify-between text-[11.5px] text-[#5A6B63]">
          <p className="text-[12px] text-[#5A6B63]">
            © {new Date().getFullYear()} Influence India Services. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-medium text-[#5A6B63]">
            {policies.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => handlePolicyClick(p.title, p.id)}
                className="transition-colors hover:text-[#0e2119] cursor-pointer bg-transparent border-0 p-0 text-left"
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>

        {/* 7. BOTTOM SUB-STRIP: Tagline + Back to top */}
        <div className="mt-4 flex items-center justify-between border-t border-[#e5e7eb] pt-3 text-[10px] font-bold tracking-[0.14em] text-[#7c6f6d] uppercase">
          <span className="text-[#5A6B63]">
            PEOPLE. WORK. ACROSS INDIA.
          </span>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="inline-flex items-center gap-1 text-[#0e2119] hover:text-[#005952] transition-colors"
          >
            <span>BACK TO TOP</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>
      </div>

      {/* Policy Overlay Modal */}
      {activePolicy && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs"
          onClick={() => setActivePolicy(null)}
        >
          <div
            className="max-w-md rounded-2xl border border-[#d3d4d3] bg-white p-6 text-[#111827] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-3">
              <h3 className="text-sm font-bold tracking-wider uppercase text-[#005952]">
                {activePolicy.title}
              </h3>
              <button
                type="button"
                onClick={() => setActivePolicy(null)}
                className="text-[#9CA3AF] hover:text-[#111827] text-lg leading-none"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <p className="mt-4 text-[13.5px] leading-relaxed text-[#4B5563]">
              {activePolicy.desc}
            </p>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setActivePolicy(null)}
                className="rounded-full bg-[#005952] px-5 py-2 text-[11px] font-bold uppercase tracking-wider text-white hover:bg-[#003e38]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
