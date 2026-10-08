import { useEffect, useRef, useState, type ReactNode } from "react"
import InfinitySvg from "./components/InfinitySvg"
import LandingVideoSection from "./components/LandingVideoSection"
import CompanyMarquee from "./components/CompanyMarquee"
import { useLandingCardsScrollAnimation } from "./hooks/useLandingCardsScrollAnimation"
import GtpPage from "./pages/GtpPage"
import SystemsPage from "./pages/SystemsPage"
import CareersPage from "./pages/CareersPage"
import ResourcesPage from "./pages/ResourcesPage"
import { LiveHubStatusBadge, QuickEnquiryDrawer } from "./components/HalaskaMicroUX"
import ReliabilityEconomics from "./components/ReliabilityEconomics"
import FolderCards from "./components/FolderCards"
import WhyUsEditorialFlow from "./components/WhyUsEditorialFlow"
import WhyUsTactileAccordion from "./components/WhyUsTactileAccordion"
import FooterWordmark from "./components/FooterWordmark"
import FooterEnterprise from "./components/FooterEnterprise"

export type ActiveView = "home" | "about" | "gtp" | "systems" | "careers" | "resources"

const contact = {
  whatsapp: "https://wa.me/919606329992",
  employers: "mailto:contact@influenceindiaservices.com",
  careers: "mailto:careers@influenceindiaservices.com",
  phone: "+91 96063 29992",
  hours: "Monday – Saturday / 10:00AM – 6:00PM",
  address: {
    line1: "69, 1st Floor, Opposite Kuntamaramma Temple",
    line2: "Arehalli, AGS Layout Main Road",
    line3: "Banashankari 3rd Stage",
    city: "Bengaluru 560061, Karnataka, India",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Arehalli+AGS+Layout+Banashankari+3rd+Stage+Bengaluru+560061",
  },
}

const navigation = [
  { label: "About us", href: "#about" },
  { label: "GTP", href: "#gtp" },
  { label: "Systems", href: "#systems" },
  { label: "Careers", href: "#careers" },
  { label: "Resources", href: "#resources" },
  { label: "Contact us", href: "#contact" },
]

const services = [
  {
    number: "01",
    title: "Right staffing",
    tag: "The right people. Matched to the role.",
    body: "Staffing plans tailored to your corporate and non-corporate needs, drawing on a pool of certified aspirants who are trained before they ever reach your floor.",
    enquiryText:
      "Hello Influence India Services, I would like to enquire about Right Staffing solutions.",
  },
  {
    number: "02",
    title: "Elevate entity growth",
    tag: "Growth, without the hiring drag.",
    body: "A sustainable recruiting solution built on premium, well-mannered and knowledgeable people, supported by trainers who keep skills sharp as you scale.",
    enquiryText:
      "Hello Influence India Services, I would like to discuss Elevate Entity Growth staffing.",
  },
  {
    number: "03",
    title: "PAN-India sourcing",
    tag: "Sourced anywhere. Managed everywhere.",
    body: "A seamless opportunity experience, anytime and anywhere, backed by extensive infrastructure to manage staffing, recruiting and onboarding in every corridor.",
    enquiryText:
      "Hello Influence India Services, I need Pan-India sourcing and recruiting assistance.",
  },
  {
    number: "04",
    title: "Staffing services",
    tag: "Cover that never leaves a gap.",
    body: "Sustainable, efficient and replacement staffing for your entity, delivered through a tech-driven system — so an absence never becomes an outage.",
    enquiryText:
      "Hello Influence India Services, I would like to request staffing services.",
  },
  {
    number: "05",
    title: "Managed services",
    tag: "End to end. One operating centre.",
    body: "Sustainable staffing for end-to-end recruitment needs, provided across PAN-India locations through our proprietary staffing management system.",
    enquiryText:
      "Hello Influence India Services, I am interested in Managed Services for our workforce.",
  },
  {
    number: "06",
    title: "Skill adoption",
    tag: "Skills that arrive job-ready.",
    body: "Tailored end-to-end staffing management for corporate and hospitality industries, with staff deployed to a work structure built around your goals.",
    enquiryText:
      "Hello Influence India Services, I want to learn more about your Skill Adoption and OSTP programs.",
  },
]

const reliabilityPillars = [
  {
    number: "01",
    title: "Real-Time Workforce Monitoring",
    description:
      "A central Dedicated Operation System (DOS) tracks attendance, rosters and performance at every milestone. Live visibility means faster decisions and zero guesswork.",
    icon: "chart" as const,
    stamp: "DOS ACTIVE · 0 OUTAGES",
  },
  {
    number: "02",
    title: "Pan-India Network Coverage",
    description:
      "From Bengaluru to every major corridor, our sourcing and training network spans the cities and sectors your business relies on.",
    icon: "globe" as const,
    stamp: "PAN-INDIA · 30+ CITIES",
  },
  {
    number: "03",
    title: "24/7 Client Support",
    description:
      "Real people, 365 days a year. Whether it is a routine roster update or an urgent replacement, we pick up the phone and we own the outcome.",
    icon: "clock" as const,
    stamp: "365 DAYS · REAL PEOPLE",
  },
]

const ecosystemNodes = [
  { label: "Right Staffing", icon: "people" as const },
  { label: "PAN-India Sourcing", icon: "globe" as const },
  { label: "Onsite Skill Training", icon: "growth" as const },
  { label: "Managed Services", icon: "building" as const },
  { label: "Dedicated Operation System", icon: "chart" as const },
  { label: "24/7 Client Support", icon: "clock" as const },
]

const innovationPillars = [
  {
    number: "01",
    title: "Advanced System Technology",
    description:
      "Telemetry, biometric attendance, and automated ground-level workforce coordination across all operational hubs.",
    featured: false,
  },
  {
    number: "02",
    title: "Robust Training Infrastructure",
    description:
      "Dedicated onsite practical training labs and industry curricula ensuring verified day-one deployment readiness.",
    featured: false,
  },
  {
    number: "03",
    title: "Flat Budget, Affordable",
    description:
      "Sector-friendly pricing and zero capital expenditure for a financially advantageous skilled working solution.",
    featured: false,
  },
  {
    number: "04",
    title: "Integrated Offering",
    description:
      "End-to-end recruitment, certification, onsite management, payroll, and compliance unified under one accountable partner.",
    featured: false,
  },
]

const reasons = [
  {
    number: "01",
    title: "One point of contact",
    description:
      "No more chasing multiple vendors. One team manages sourcing, training, deployment and replacement end to end.",
  },
  {
    number: "02",
    title: "Full workforce visibility",
    description:
      "Transparent, data-driven recruitment with real-time monitoring and proactive updates before issues become gaps.",
  },
  {
    number: "03",
    title: "Compliance you can trust",
    description:
      "Trained, verified and certified employees — background checks and police verification (PVC) completed before deployment.",
    stamp: "PVC VERIFIED · 100% COMPLIANT",
  },
  {
    number: "04",
    title: "Flat, transparent pricing",
    description:
      "Sector-friendly pricing and zero capital expenditure, for a financially advantageous skilled working solution.",
  },
  {
    number: "05",
    title: "Fast replacement resolution",
    description:
      "Assistance for streamlined staffing, managing and replacement — so an absence never becomes an outage.",
  },
]

const testimonials = [
  {
    quote:
      "I started my journey as a marketing executive and today I am proud to be working as a marketing senior manager, leading a wonderful team. Over the years I have witnessed how tremendously Influence India can transform. Along with the company's progress I too have grown, both personally and professionally.",
    name: "Mohan Arya",
    role: "Senior Manager, Marketing",
    monogram: "MA",
  },
  {
    quote:
      "The onsite management team and the central operation system removed the guesswork from our rosters. We stopped chasing vendors and started planning our floor with confidence.",
    name: "Operations Lead",
    role: "Corporate client, Bengaluru",
    monogram: "OL",
  },
  {
    quote:
      "I joined as a fresher. The training, the assessment and the certification made me employable in weeks — and the placement was equivalent to my education.",
    name: "Certified Aspirant",
    role: "Service provider, Karnataka",
    monogram: "CA",
  },
]

const faqs = [
  {
    question: "What is expected from an Influence India service provider?",
    answer:
      "The Influence India service provider is expected to provide and meet the service goals as per the manual and the roster assigned by their team leader or manager. There are 7 working days a week with a flexible week of rosters, on-time login and logout to duty, and compliance with the Influence India code of conduct and all company policies.",
  },
  {
    question: "What are the working hours?",
    answer:
      "We work in a 12-hour cycle across two rotational day shifts — 6:00 to 2:00 and 2:00 to 10:00.",
  },
  {
    question: "Is a day or night shift compulsory?",
    answer:
      "No. We do not operate night shifts. We work only day shifts, in rotational blue and grey shift patterns.",
  },
  {
    question: "Do we have EPF and medical cover?",
    answer:
      "Yes. EPF and medical insurance are provided to onboarded service providers.",
  },
  {
    question: "Is there any fee for joining?",
    answer:
      "No fee is collected from job seekers. Once onboard, a one-time module fee is deducted from the salary within the first trimester.",
  },
  {
    question:
      "What if a criminal record is discovered during PVC verification?",
    answer:
      "The service shall not continue if a criminal record is found during the police verification (PVC) process.",
  },
  {
    question: "Are there career shifts within a job site?",
    answer:
      "Yes. Most of our management roles are handled by previous employees, promoted on the basis of their performance.",
  },
  {
    question: "Which cities do you operate in?",
    answer:
      "Our corporate office is in Bengaluru, Karnataka. We are expanding to Mumbai and Pune, Chennai, Hyderabad, Gujarat, Uttar Pradesh and Bhubaneswar.",
  },
]

const aboutAims = [
  { label: "Skilful workforce", value: 100, suffix: "%" },
  { label: "Placement conversion", value: 100, suffix: "%" },
  { label: "Companies collaboration", value: 250, suffix: "+" },
  { label: "Satisfied clients", value: 200, suffix: "+" },
  { label: "Cities", value: 30, suffix: "+" },
]

const twelveCommitments = [
  { number: "01", title: "Zero Unemployment" },
  { number: "02", title: "Social Responsibility" },
  { number: "03", title: "100% Job Conversion Efficiency" },
  { number: "04", title: "Job Security" },
  { number: "05", title: "Integrated Solution" },
  { number: "06", title: "Smart Technology" },
  { number: "07", title: "Timely Skill Upgradation" },
  { number: "08", title: "Efficient Trainers" },
  { number: "09", title: "Seamless Job Opportunity Availability" },
  { number: "10", title: "OSTP — Onsite Skill Training Programs" },
  { number: "11", title: "Scalable Solution" },
  { number: "12", title: "Affordable Service Cost Structure" },
]

const expansionCities = [
  "Mumbai & Pune",
  "Chennai",
  "Hyderabad",
  "Gujarat",
  "Uttar Pradesh",
  "Bhubaneswar",
]

const sectors = [
  "Corporate & IT services",
  "Hospitality",
  "Facility management",
  "Banking & financial services",
  "Retail & e-commerce",
  "Manufacturing & industrial",
  "Logistics & warehousing",
  "Healthcare support",
]

const policies = [
  "Code of Conduct",
  "Privacy Policy",
  "Terms & Conditions",
  "Refund Policy",
  "Whistleblowing Policy",
  "Grow Together Policy",
]

type IconName = "arrow" | "arrow-up" | "people" | "work" | "growth" | "globe" | "mail" | "whatsapp" | "plus" | "menu" | "close" | "check" | "shield" | "clock" | "chart" | "building" | "compass"

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="M4 12h15M13 5l7 7-7 7" />,
    "arrow-up": <path d="M5 19 19 5M5 5h14v14" />,
    people: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 21v-3a6 6 0 0 1 12 0v3M17 5a3 3 0 0 1 0 6M17 15a5 5 0 0 1 4 5" />
      </>
    ),
    work: (
      <>
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M8 7V3h8v4M3 12c5 4 13 4 18 0M10 14h4" />
      </>
    ),
    growth: (
      <>
        <path d="m3 18 6-6 4 4 8-11M14 5h7v7M3 22h18" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M20.6 11.8a8.6 8.6 0 0 1-12.8 7.5L3 21l1.6-4.8a8.6 8.6 0 1 1 16-4.4Z" />
        <path d="M8.2 7.5c-.8 1-.8 2.5.3 4.2 1.2 2 3.7 3.6 5.6 3.6.9 0 1.8-.6 2.1-1.4l-2.6-1.3-.8 1c-1.6-.6-2.7-1.7-3.3-3.1l.9-.9-1.2-2.3Z" />
      </>
    ),
    plus: <path d="M12 4v16M4 12h16" />,
    menu: <path d="M3 6h18M3 12h18M3 18h18" />,
    close: <path d="m5 5 14 14M5 19 19 5" />,
    check: <path d="m5 13 4 4L19 7" />,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    chart: (
      <>
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </>
    ),
    building: (
      <>
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
      </>
    ),
    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </>
    ),
  }

  return (
    <svg
      className={`icon ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

function useCountUp(target: number, inView: boolean, duration = 1200) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let startTime: number | null = null
    let animationFrameId: number

    function animate(now: number) {
      if (!startTime) startTime = now
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeProgress * target))

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [target, inView, duration])

  return count
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [showPill, setShowPill] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const scrollTotal =
        document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY
      if (scrollTotal > 0) {
        setProgress(Math.min(currentScroll / scrollTotal, 1))
      }
      setShowPill(currentScroll > 260)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { progress, showPill }
}

function ActionLink({
  href,
  children,
  variant = "dark",
  arrow = "arrow-up",
  className = "",
  onClick,
}: {
  href: string
  children: ReactNode
  variant?: "dark" | "outline" | "outline-light" | "lime" | "light"
  arrow?: IconName
  className?: string
  onClick?: () => void
}) {
  const external = href.startsWith("https:")
  return (
    <a
      href={href}
      className={`action action--${variant} ${className}`}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
      <Icon name={arrow} />
    </a>
  )
}

function SectionLabel({
  number,
  children,
  light = false,
}: {
  number?: string
  children: ReactNode
  light?: boolean
}) {
  return (
    <div className={`section-label ${light ? "section-label--light" : ""}`}>
      <span className="label-dot" />
      {number && <span className="section-number">{number} /</span>}
      <span>{children}</span>
    </div>
  )
}

function Brand({
  footer = false,
  onNavigateHome,
}: {
  footer?: boolean
  onNavigateHome?: () => void
}) {
  return (
    <a
      className={`brand ${footer ? "brand--footer" : ""}`}
      href="#home"
      onClick={(e) => {
        if (onNavigateHome) {
          e.preventDefault()
          onNavigateHome()
        }
      }}
      aria-label="Influence India Services — home"
    >
      <span className="brand-image">
        <img
          src="/images/influence-india-logo.png"
          width="1600"
          height="1081"
          alt="Influence India Services"
        />
      </span>
    </a>
  )
}

function Header({
  activeView,
  onNavigate,
  onOpenRoster,
}: {
  activeView: ActiveView
  onNavigate: (target: string) => void
  onOpenRoster?: () => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand onNavigateHome={() => onNavigate("home")} />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => {
            const cleanHref = item.href.replace("#", "")
            const isActive =
              activeView === cleanHref ||
              (cleanHref === "about" && activeView === "about")
            return (
              <a
                key={item.href}
                href={item.href}
                className={isActive ? "is-active" : ""}
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate(item.href)
                }}
              >
                {item.label}
              </a>
            )
          })}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {onOpenRoster && (
            <button
              type="button"
              onClick={onOpenRoster}
              className="roster-desk-badge-btn"
              title="Open Fast-Track Roster Desk"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.5rem 0.95rem",
                borderRadius: "9999px",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                background: "rgba(17, 19, 21, 0.05)",
                border: "1px solid rgba(17, 19, 21, 0.12)",
                color: "var(--color-ink)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "#3f6e14",
                  boxShadow: "0 0 6px #3f6e14",
                }}
              />
              <span>Roster Desk</span>
            </button>
          )}
          <ActionLink
            href={contact.whatsapp}
            variant="lime"
            arrow="whatsapp"
            className="header-contact"
          >
            WhatsApp
          </ActionLink>
        </div>
        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
      >
        {onOpenRoster && (
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false)
              onOpenRoster()
            }}
            className="mobile-roster-action"
          >
            <span className="halaska-dot" />
            <span>Fast-Track Roster Desk</span>
          </button>
        )}
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => {
              e.preventDefault()
              setMenuOpen(false)
              onNavigate(item.href)
            }}
          >
            {item.label}
            <Icon name="arrow-up" />
          </a>
        ))}
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          WhatsApp
          <Icon name="whatsapp" />
        </a>
      </nav>
    </header>
  )
}



function Hero() {
  const [highlightDrawn, setHighlightDrawn] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHighlightDrawn(true), 150)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <SectionLabel>ONE SYSTEM · EVERY STEP OF THE CAREER</SectionLabel>
          <h1 id="hero-title">
            One system.
            <br />
            <span
              className={`hero-highlight ${highlightDrawn ? "is-drawn" : ""}`}
            >
              Every step
              <svg
                viewBox="0 0 600 24"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 16C135 1 399 0 597 9" />
              </svg>
            </span>
            <br />
            of the career.
          </h1>
          <p className="hero-description">
            Sourcing, skill training, certification and onsite management —
            unified across India under one accountable team. We are emerging the
            opportunities to the un-sourced world.
          </p>
          <div className="hero-actions">
            <ActionLink href={contact.whatsapp} variant="lime" arrow="whatsapp">
              Talk with us
            </ActionLink>
            <ActionLink href="#what-we-do" variant="outline">
              What we do
            </ActionLink>
          </div>
          <div className="hero-bottom">
            <span className="small-orbit">
              <Icon name="globe" />
            </span>
            <span>YOUR FUTURE DREAMS COME TRUE TODAY</span>
            <a href="#what-we-do" aria-label="Explore what we do">
              <span>Explore</span>
              <Icon name="arrow" />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo">
            <img
              src="/images/workplace-team.jpg"
              alt="Colleagues collaborating around a table in an Indian workplace"
              width="1800"
              height="1012"
              fetchPriority="high"
            />
            <span className="photo-index">01 — PEOPLE AT WORK</span>
          </div>
          <div className="hero-image-note">
            <span className="note-orbit" aria-hidden="true">
              <Icon name="plus" />
            </span>
            <div>
              <span className="eyebrow">INFLUENCE INDIA SERVICES</span>
              <span className="image-note-title">
                People &<br />
                workplaces.
              </span>
            </div>
            <Icon name="arrow-up" />
          </div>
          <span className="hero-side-text">
            STAFFING · WORKFORCE MANAGEMENT · SKILL TRAINING
          </span>
        </div>
      </div>
    </section>
  )
}

function OutcomeOwnership({
  onNavigateAbout,
}: {
  onNavigateAbout?: () => void
}) {
  const { ref, inView } = useInView()

  return (
    <section
      id="about-preview"
      ref={ref}
      className={`section outcome-section editorial-reveal ${
        inView ? "is-revealed" : ""
      }`}
      aria-labelledby="outcome-title"
    >
      <div className="container outcome-grid">
        <div>
          <SectionLabel number="01">INFLUENCE INDIA SERVICES</SectionLabel>
          <h2 id="outcome-title" className="outcome-title">
            We build the workforce.
            <br />
            <span className="text-lime">We own the outcome.</span>
          </h2>
        </div>
        <div className="outcome-copy">
          <p>
            With sourcing, training, deployment and onsite management under one
            roof and one accountable team, your workforce performs the way your
            business demands: predictably, transparently, and without excuses.
          </p>
          <p>
            That means no finger-pointing between vendors. No attrition lost in
            handoffs. Just one team, accountable from the first interview to
            everyday performance on your floor.
          </p>
          <a
            className="text-link"
            href="#about"
            onClick={(e) => {
              if (onNavigateAbout) {
                e.preventDefault()
                onNavigateAbout()
              }
            }}
          >
            Learn more about us
            <Icon name="arrow-up" />
          </a>
        </div>
      </div>
    </section>
  )
}

function Metrics() {
  const { ref, inView } = useInView()
  const count1 = useCountUp(100, inView, 1200)
  const count2 = useCountUp(250, inView, 1400)
  const count3 = useCountUp(30, inView, 1000)

  return (
    <section
      ref={ref}
      className={`metrics-section editorial-reveal ${
        inView ? "is-revealed" : ""
      }`}
      aria-label="Impact and reach metrics"
    >
      <div className="container">
        <div className="metrics-header">
          <div>
            <SectionLabel>PROVEN REACH</SectionLabel>
            <h3>From countless journeys, clarity emerges</h3>
          </div>
          <ActionLink href="#careers" variant="outline">
            Get opportunity to work with
          </ActionLink>
        </div>
        <div className="metrics-grid">
          <div className="metric-card">
            <span className={`metric-number ${inView ? "is-counted" : ""}`}>
              {count1}%
            </span>
            <span className="metric-label">Skilled workforce target</span>
          </div>
          <div className="metric-card">
            <span className={`metric-number ${inView ? "is-counted" : ""}`}>
              {count2}+
            </span>
            <span className="metric-label">Companies collaboration</span>
          </div>
          <div className="metric-card">
            <span className={`metric-number ${inView ? "is-counted" : ""}`}>
              {count3}+
            </span>
            <span className="metric-label">Cities across India</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services({
  onNavigate,
}: {
  onNavigate?: (target: string) => void
}) {
  const { ref, inView } = useInView()

  return (
    <section
      id="what-we-do"
      ref={ref}
      className={`services-section editorial-reveal ${
        inView ? "is-revealed" : ""
      }`}
      aria-labelledby="services-title"
    >
      <span id="services" className="sr-only" aria-hidden="true" />
      <div className="container">
        <div className="services-header-row">
          <div>
            <div className="services-eyebrow">
              <span className="services-eyebrow-line" />
              <span>WHAT WE DO</span>
            </div>
            <h2 id="services-title" className="services-main-title">
              Everything your workforce
              <br />
              needs. <em>Under one system.</em>
            </h2>
          </div>
          <a
            href="#systems"
            className="services-pill-cta"
            onClick={(e) => {
              e.preventDefault()
              if (onNavigate) {
                onNavigate("systems")
              } else {
                window.location.hash = "#systems"
              }
            }}
          >
            <span>ALL TWELVE SERVICES</span>
            <span className="cta-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div className="services-glossy-grid">
          {services.map((service, idx) => (
            <a
              key={service.number}
              className="services-glossy-card"
              href={`${contact.whatsapp}?text=${encodeURIComponent(
                service.enquiryText,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                transitionDelay: inView ? `${idx * 60}ms` : "0ms",
              }}
            >
              <div className="services-card-header">
                <span className="services-card-num">{service.number}</span>
                <span className="services-card-arrow-circle" aria-hidden="true">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </div>
              <h3 className="services-card-title">{service.title}</h3>
              <p className="services-card-tag">{service.tag}</p>
              <p className="services-card-body">{service.body}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reliability() {
  const { ref, inView } = useInView()

  return (
    <section
      className={`section reliability-section editorial-reveal ${
        inView ? "is-revealed" : ""
      }`}
      ref={ref}
      aria-labelledby="reliability-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <SectionLabel number="03">RELIABILITY</SectionLabel>
            <h2 id="reliability-title">
              Reliability at every
              <br />
              <span className="muted-heading">milestone.</span>
            </h2>
          </div>
          <p className="heading-aside">
            Fully skilled workforce and trainers, managed end to end — ensuring
            quality, transparency, visibility, endurance, efficiency and high
            performance.
          </p>
        </div>
        <FolderCards />
        <ReliabilityEconomics />
      </div>
    </section>
  )
}



function PillarsOfInnovation() {
  const { ref, inView } = useInView()

  return (
    <section
      ref={ref}
      className={`section pillars-section editorial-reveal ${
        inView ? "is-revealed" : ""
      }`}
      aria-labelledby="pillars-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <SectionLabel number="05">04 PILLARS</SectionLabel>
            <h2 id="pillars-title">
              We constantly explore
              <br />
              innovative ways to shape a
              <br />
              <span className="muted-heading">sustainable workforce.</span>
            </h2>
          </div>
          <p className="heading-aside">
            Transforming the placement experience with robust standards,
            sector-friendly economics, and seamless technological coordination.
          </p>
        </div>
        <div className="pillars-grid">
          {innovationPillars.map((pillar) => (
            <div key={pillar.number} className="pillar-card" tabIndex={0}>
              <span className="pillar-number">PILLAR {pillar.number}</span>
              <h3>{pillar.title}</h3>
              {pillar.description && <p>{pillar.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingDisruption() {
  const { ref, inView } = useInView()
  const countSavings = useCountUp(65, inView, 1200)
  const countOwned = useCountUp(100, inView, 1200)

  return (
    <section
      ref={ref}
      className={`section pricing-section editorial-reveal ${
        inView ? "is-revealed" : ""
      }`}
      aria-labelledby="pricing-title"
    >
      <div className="container pricing-grid">
        <div className="pricing-copy">
          <SectionLabel number="06">FINANCIAL ADVANTAGE</SectionLabel>
          <h2 id="pricing-title">
            Built for entities that can’t afford disruption.
          </h2>
          <p>
            Zero investment for entities on training, enhancement and enrolment
            programs. Up to 65% more affordable than your current cost of
            recruitment, with zero cost escalation across multi-year agreements.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <ActionLink href={contact.employers} variant="dark">
              Discuss workforce solutions
            </ActionLink>
          </div>
        </div>
        <div className="pricing-stats">
          <div className="pricing-stat-card">
            <div className="pricing-stat-num">{countSavings}%</div>
            <div className="pricing-stat-text">
              <h4>More Affordable</h4>
              <p>
                Up to 65% more affordable than your current investment in
                recruits, with a flat multi-year budget.
              </p>
            </div>
          </div>
          <div className="pricing-stat-card">
            <div className="pricing-stat-num">0</div>
            <div className="pricing-stat-text">
              <h4>Zero Capex</h4>
              <p>
                Zero capital expenditure and zero investment on training,
                enhancement and enrolment programs.
              </p>
            </div>
          </div>
          <div className="pricing-stat-card">
            <div className="pricing-stat-num">{countOwned}%</div>
            <div className="pricing-stat-text">
              <h4>Owned Management</h4>
              <p>
                100% owned management provides complete control and availability
                of skilled manpower.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillTraining() {
  const { ref, inView } = useInView()

  return (
    <section
      id="careers"
      ref={ref}
      className={`section careers-section editorial-reveal ${
        inView ? "is-revealed" : ""
      }`}
      aria-labelledby="training-title"
    >
      <div className="container">
        <SectionLabel number="07">SKILL TRAINING</SectionLabel>
        <div className="careers-grid">
          <div className="careers-photo">
            <img
              src="/images/team-training.jpg"
              alt="Workplace group presentation and training session"
              width="1200"
              height="800"
              loading="lazy"
            />
            <div className="careers-image-caption">
              <span>OSTP — ONSITE SKILL TRAINING PROGRAMS NOW LIVE</span>
              <Icon name="arrow-up" />
            </div>
          </div>
          <div className="careers-copy">
            <span className="eyebrow">GET OPPORTUNITY TO WORK WITH</span>
            <h3 id="training-title">Skills built before deployment.</h3>
            <p>
              Every aspirant is trained, assessed and certified before they
              reach your floor.
            </p>
            <div className="careers-divider" />
            <span className="eyebrow">
              CONTACT OUR CAREERS & ONBOARDING TEAM
            </span>
            <a className="careers-email" href={contact.careers}>
              careers@influenceindiaservices.com
            </a>
            <div className="careers-actions">
              <ActionLink href={contact.careers} variant="dark">
                Email careers team
              </ActionLink>
              <ActionLink
                href={`${contact.whatsapp}?text=${encodeURIComponent("Hello Influence India Services, I have a careers or skill training enquiry.")}`}
                variant="outline"
                arrow="whatsapp"
              >
                WhatsApp enquiry
              </ActionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  const { ref, inView } = useInView()

  return (
    <section
      ref={ref}
      className={`section why-us-section editorial-reveal ${
        inView ? "is-revealed" : ""
      }`}
      aria-labelledby="why-us-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <SectionLabel number="08">05 REASONS</SectionLabel>
            <h2 id="why-us-title">Staffing that works as hard as you do.</h2>
          </div>
          <p className="heading-aside">
            Five decisive structural advantages engineered to ensure your
            operations never stall.
          </p>
        </div>
        <WhyUsEditorialFlow />
        <WhyUsTactileAccordion />
      </div>
    </section>
  )
}

function Testimonials() {
  const { ref, inView } = useInView()

  return (
    <section
      ref={ref}
      className={`section testimonials-section editorial-reveal ${
        inView ? "is-revealed" : ""
      }`}
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <SectionLabel number="09">OUR PEOPLE</SectionLabel>
            <h2 id="testimonials-title">
              Trusted by entities and aspirants across India.
            </h2>
          </div>
          <p className="heading-aside">
            From the aspirants we train and certify to the entities that deploy
            them — the same accountable team stands behind both.
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((item, idx) => (
            <article key={idx} className="testimonial-card">
              <p className="testimonial-quote">{item.quote}</p>
              <div className="testimonial-author">
                <div className="author-monogram">{item.monogram}</div>
                <div className="author-details">
                  <h4>{item.name}</h4>
                  <p>{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section
      id="resources"
      className="section faq-section"
      aria-labelledby="faq-title"
    >
      <div className="container faq-layout">
        <div className="faq-aside">
          <SectionLabel number="10">08 QUESTIONS</SectionLabel>
          <h2 id="faq-title">
            Straightforward
            <br />
            answers.
          </h2>
          <p>So you can move forward with confidence.</p>
          <div className="faq-contact-card">
            <span className="eyebrow">NEED FURTHER CLARIFICATION?</span>
            <p>
              Still have questions? Our team answers within one working day.
            </p>
            <ActionLink href={contact.employers} variant="dark">
              Email us
            </ActionLink>
          </div>
        </div>
        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="faq-item"
                data-open={isOpen ? "true" : "false"}
              >
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="faq-number">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="faq-question">{faq.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    <Icon name="plus" />
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="faq-answer"
                    role="region"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ReadyToDriveChange() {
  return (
    <section
      id="contact"
      className="section ready-section"
      aria-labelledby="ready-title"
    >
      <div className="container">
        <SectionLabel number="11" light>
          WORK WITH US
        </SectionLabel>
        <div className="ready-heading">
          <h2 id="ready-title">
            Ready to drive change?
            <br />
            <span className="text-lime">Work with us.</span>
          </h2>
          <div className="ready-actions">
            <ActionLink href={contact.careers} variant="lime">
              Explore careers
            </ActionLink>
            <ActionLink
              href={contact.whatsapp}
              variant="outline-light"
              arrow="whatsapp"
            >
              WhatsApp (+91 96063 29992)
            </ActionLink>
          </div>
        </div>
        <p
          style={{
            marginTop: "1.5rem",
            maxWidth: "600px",
            color: "var(--dark-muted)",
            fontSize: "0.95rem",
            lineHeight: "1.8",
          }}
        >
          We are here to help you grow without hassle. No call centres, no
          runaround — just experienced people ready to help.
        </p>
        <div className="ready-email-strip">
          <span className="ready-tagline">
            YOUR FUTURE DREAMS COME TRUE TODAY
          </span>
          <a className="ready-email-link" href={contact.employers}>
            <span>contact@influenceindiaservices.com</span>
            <Icon name="arrow-up" />
          </a>
        </div>
      </div>
    </section>
  )
}

function GtpNotice() {
  const gtpItems = [
    "GROW TOGETHER POLICY: 21 FOOTPRINTS PUBLISHED",
    "OSTP — ONSITE SKILL TRAINING PROGRAMS NOW LIVE",
    "PAN-INDIA REACH: 30+ CITIES ACTIVE",
    "ZERO CAPEX ONBOARDING & DEPLOYMENT",
    "MANAGED TALENT PIPELINES ACROSS KEY CORRIDORS",
    "ENTERPRISE-GRADE WORKFORCE RELIABILITY",
  ]

  return (
    <div
      id="gtp"
      className="brand-strip"
      aria-label="Grow Together Policy and Skill Training Updates"
    >
      <div className="brand-strip__track">
        {gtpItems.concat(gtpItems).map((item, idx) => (
          <span key={idx} className="brand-strip__item">
            <span>{item}</span>
            <span className="brand-strip__sep" aria-hidden="true">
              <Icon name="plus" />
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* Dedicated About Us Page Components */
function AboutHero() {
  return (
    <section className="about-hero" aria-labelledby="about-hero-title">
      <div className="about-hero-video-wrap" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="about-hero-video"
          src="/videos/workplace-loop.mp4"
        />
        <div className="about-hero-overlay" />
      </div>
      <div className="container about-hero-content">
        <div className="about-hero-badge">
          <SectionLabel light>ABOUT US</SectionLabel>
          <span className="tactile-stamp is-stamped">
            ✦ YOUTH WORKFORCE MISSION
          </span>
        </div>
        <h1 id="about-hero-title" className="about-hero-title">
          Creating good
          <br />
          <span className="text-lime">work opportunities</span>
          <br />
          for Indian youth.
        </h1>
        <p className="about-hero-lead">
          Driving positive change by promoting a good, efficient and
          work-friendly culture in and across the country — creating a skilful
          and more sustainable future for the Indian working sector by
          revolutionising the way people work.
        </p>
        <div className="about-hero-actions">
          <ActionLink href={contact.whatsapp} variant="lime" arrow="whatsapp">
            Talk with us
          </ActionLink>
          <ActionLink href="#mission" variant="outline-light">
            Our mission
          </ActionLink>
        </div>
      </div>
    </section>
  )
}

function OurMission() {
  const { ref, inView } = useInView()

  return (
    <section
      id="mission"
      ref={ref}
      className={`section mission-section editorial-reveal ${
        inView ? "is-revealed" : ""
      }`}
      aria-labelledby="mission-title"
    >
      <div className="container mission-grid">
        <div className="mission-copy">
          <SectionLabel number="01">OUR MISSION</SectionLabel>
          <h2 id="mission-title">
            Leading the transition towards a
            <br />
            <span className="text-lime">sustainable workspace</span> in India.
          </h2>
          <p className="mission-lead">
            With a mission to lead the transition towards a sustainable
            workspace in India, we offer a comprehensive range of job
            opportunities and the supporting infrastructure behind them.
          </p>
          <div className="mission-pillars">
            <div className="mission-pillar-card">
              <span className="pillar-num">01</span>
              <p>
                We aim to provide reliable, affordable and cost-effective job
                solutions that match educated aspirants&apos; goals and
                contribute to the Indian economy.
              </p>
            </div>
            <div className="mission-pillar-card">
              <span className="pillar-num">02</span>
              <p>
                We strive to reduce the unemployment impact among educated
                Indian youth by providing education-equivalent jobs, improving
                skills and enhancing the overall quality of life across the
                working sector.
              </p>
            </div>
          </div>
        </div>
        <div className="mission-visual">
          <div className="mission-photo-frame">
            <img
              src="/images/workplace-team.jpg"
              alt="Indian workplace team collaborating around a conference table"
              width="1800"
              height="1012"
            />
            <div className="mission-photo-badge">
              <span>SUSTAINABLE WORKSPACE INITIATIVE</span>
              <Icon name="arrow-up" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function OurAim() {
  const { ref, inView } = useInView()

  return (
    <section
      ref={ref}
      className={`section aims-section editorial-reveal ${
        inView ? "is-revealed" : ""
      }`}
      aria-labelledby="aims-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <SectionLabel number="02">OUR AIM</SectionLabel>
            <h2 id="aims-title">
              Measurable impact
              <br />
              <span className="muted-heading">on Indian youth.</span>
            </h2>
          </div>
          <p className="heading-aside">
            Delivering 100% placement conversion and sustainable career
            transformation across 30+ major Indian corridors.
          </p>
        </div>
        <div className="aims-grid">
          {aboutAims.map((aim, idx) => (
            <div key={idx} className="aim-card">
              <span className="aim-number">
                {aim.value}
                {aim.suffix}
              </span>
              <span className="aim-label">{aim.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhatWeStandFor() {
  const { ref, inView } = useInView()

  return (
    <section
      ref={ref}
      className={`section commitments-section editorial-reveal ${
        inView ? "is-revealed" : ""
      }`}
      aria-labelledby="commitments-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <SectionLabel number="03">WHAT WE STAND FOR</SectionLabel>
            <h2 id="commitments-title">
              Twelve commitments
              <br />
              <span className="muted-heading">behind every placement.</span>
            </h2>
          </div>
          <p className="heading-aside">
            A unified ethical and operational covenant ensuring quality,
            transparency, and lifelong dignity for every aspirant.
          </p>
        </div>
        <div className="commitments-grid">
          {twelveCommitments.map((c) => (
            <div key={c.number} className="commitment-card">
              <span className="commitment-num">{c.number}</span>
              <h3>{c.title}</h3>
              <Icon name="check" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function InspiredByInfinity() {
  const { ref, inView } = useInView()

  return (
    <section
      ref={ref}
      className={`section infinity-section editorial-reveal ${
        inView ? "is-revealed" : ""
      }`}
      aria-labelledby="infinity-title"
    >
      <div className="container infinity-grid">
        <div className="infinity-symbol-wrap" aria-hidden="true">
          <InfinitySvg />
        </div>
        <div className="infinity-copy">
          <SectionLabel light number="04">
            INSPIRED BY INFINITY
          </SectionLabel>
          <h2 id="infinity-title">
            Endless opportunities remain constant.
            <br />
            <span className="text-lime">The duty is to grab them.</span>
          </h2>
          <div className="infinity-paragraphs">
            <p>
              Infinity is derived from the universe and endless opportunities.
              They remain constant — the duty is to grab them.
            </p>
            <p>
              For grabbing good opportunities in the working sector, one also
              needs the education and skills required for equivalent jobs. If we
              are educated and skilled youth, then opportunities come naturally.
            </p>
            <p className="infinity-highlight">
              Fuelling a sustainable workspace, powering the way towards a
              young, skilful work sector in India.
            </p>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <ActionLink href={contact.careers} variant="lime">
              Explore careers
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  )
}

function AcrossIndiaWhereWeAre() {
  const { ref, inView } = useInView()

  return (
    <section
      ref={ref}
      className={`section locations-deep-section editorial-reveal ${
        inView ? "is-revealed" : ""
      }`}
      aria-labelledby="corridors-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <SectionLabel number="05">ACROSS INDIA</SectionLabel>
            <h2 id="corridors-title">
              From Bengaluru
              <br />
              <span className="muted-heading">to every corridor.</span>
            </h2>
          </div>
          <p className="heading-aside">
            Thirty-plus cities, one accountable operating team.
          </p>
        </div>
        <div className="locations-deep-grid">
          <div className="locations-story">
            <span className="eyebrow">WHERE WE ARE</span>
            <h3>
              Fuelling sustainable workspace — powering the way toward a
              corporate ecosystem.
            </h3>
            <p>
              We aim to be recognised for implementing guidance on educated
              population responsibility. Our unemployment impact in Karnataka is
              equal to three quarters of the working population we serve, at
              100% conversion.
            </p>
            <div className="current-hq-card">
              <span className="hq-tag">NOW AT (CORPORATE HQ)</span>
              <h4>BENGALURU, KARNATAKA</h4>
              <p>69, 1st Floor, Banashankari 3rd Stage, Bengaluru 560061</p>
              <a
                href={contact.address.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Get directions
                <Icon name="arrow-up" />
              </a>
            </div>
          </div>
          <div className="expansion-corridors">
            <span className="eyebrow">EXPANDING TO</span>
            <div className="corridor-pills">
              {expansionCities.map((city, idx) => (
                <div key={idx} className="corridor-pill">
                  <span className="pulse-dot" />
                  <span>{city}</span>
                  <Icon name="arrow-up" />
                </div>
              ))}
            </div>
            <div className="expansion-training-preview">
              <img
                src="/images/team-training.jpg"
                alt="Aspirants undergoing onsite training"
                width="1200"
                height="800"
                loading="lazy"
              />
              <div className="expansion-training-caption">
                <span>ON-GROUND PRESENCE IN 30+ CITIES</span>
                <span className="tactile-stamp is-stamped">
                  ACTIVE CORRIDORS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurMission />
      <OurAim />
      <WhatWeStandFor />
      <InspiredByInfinity />
      <AcrossIndiaWhereWeAre />
    </>
  )
}

function Footer({ onNavigate }: { onNavigate: (target: string) => void }) {
  return <FooterEnterprise onNavigate={onNavigate} />
}

function FloatingWhatsApp({ href, show }: { href: string; show: boolean }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [autoPeek, setAutoPeek] = useState(false)
  const hasPeekedRef = useRef(false)

  // Auto-peek on scroll: when the button first slides into view,
  // reveal the full text for 4.2 seconds to introduce "30+ Cities Live · Talk with us",
  // then smoothly collapse back into "just icon" to keep the screen clean.
  useEffect(() => {
    if (show && !hasPeekedRef.current) {
      hasPeekedRef.current = true
      const startTimer = setTimeout(() => {
        setAutoPeek(true)
      }, 400)

      const endTimer = setTimeout(() => {
        setAutoPeek(false)
      }, 4400)

      return () => {
        clearTimeout(startTimer)
        clearTimeout(endTimer)
      }
    }
  }, [show])

  const isExpanded = isHovered || isFocused || autoPeek

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`floating-whatsapp ${show ? "is-visible" : ""} ${
        isExpanded ? "is-expanded" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      aria-label="30+ cities live — chat with us on WhatsApp"
      title="Chat with us on WhatsApp (30+ Cities Live)"
    >
      {/* Expandable text drawer with smooth spring transition */}
      <div className="floating-whatsapp-drawer" aria-hidden={!isExpanded}>
        <span className="floating-pulse-dot" aria-hidden="true" />
        <span className="floating-whatsapp-text">
          <span className="floating-whatsapp-highlight">30+ Cities Live</span>
          <span className="floating-whatsapp-sep">·</span>
          <span className="floating-whatsapp-cta">Talk with us</span>
        </span>
      </div>

      {/* Primary WhatsApp Action Icon Button */}
      <div className="floating-whatsapp-badge">
        <svg
          className="floating-whatsapp-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 1.763.458 3.42 1.258 4.864L2.002 22l5.28-1.226a9.96 9.96 0 0 0 4.719 1.227c5.522 0 9.999-4.477 9.999-9.999 0-5.522-4.477-10-9.999-10zm0 18.25a8.21 8.21 0 0 1-4.195-1.148l-.301-.179-3.117.818.832-3.038-.196-.312a8.21 8.21 0 0 1-1.272-4.391c0-4.55 3.7-8.25 8.249-8.25 4.55 0 8.25 3.7 8.25 8.25 0 4.55-3.7 8.25-8.25 8.25zm4.526-6.177c-.248-.124-1.467-.724-1.695-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.187-.539.062s-1.05-.387-2.001-1.234c-.74-.66-1.24-1.475-1.385-1.724-.145-.249-.015-.383.109-.507.112-.111.249-.29.373-.435.124-.145.166-.249.249-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.35-.767-1.848-.202-.486-.407-.42-.56-.428-.145-.008-.311-.01-.477-.01-.166 0-.435.062-.663.311-.228.249-.871.851-.871 2.075 0 1.224.892 2.407 1.016 2.573.124.166 1.755 2.68 4.252 3.758.594.256 1.058.409 1.42.524.597.19 1.14.163 1.57.099.479-.071 1.467-.6 1.674-1.179.207-.579.207-1.075.145-1.179-.062-.104-.228-.166-.477-.29z" />
        </svg>

        {/* Pulsing online status beacon when collapsed to "just icon" */}
        <span className="floating-whatsapp-pip" aria-hidden="true" />
      </div>
    </a>
  )
}

export default function App() {
  const { progress, showPill } = useScrollProgress()
  const [rosterDrawerOpen, setRosterDrawerOpen] = useState(false)
  const [view, setView] = useState<ActiveView>(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.toLowerCase()
      if (hash === "#about" || hash === "#about-us") return "about"
      if (hash === "#gtp" || hash === "#footprints") return "gtp"
      if (hash === "#systems" || hash === "#ecosystem") return "systems"
      if (hash === "#careers" || hash === "#jobs") return "careers"
      if (hash === "#resources" || hash === "#insights") return "resources"
    }
    return "home"
  })

  // Smooth bidirectional "getting up" & above/below parallax scroll animations for landing cards
  useLandingCardsScrollAnimation(view)

  useEffect(() => {
    function handleHashChange() {
      const hash = window.location.hash.toLowerCase()
      if (hash === "#about" || hash === "#about-us") {
        setView("about")
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else if (hash === "#gtp" || hash === "#footprints") {
        setView("gtp")
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else if (hash === "#systems" || hash === "#ecosystem") {
        setView("systems")
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else if (hash === "#careers" || hash === "#jobs") {
        setView("careers")
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else if (hash === "#resources" || hash === "#insights") {
        setView("resources")
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else if (hash === "#home" || hash === "") {
        setView("home")
      }
    }
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const handleNavigate = (target: string) => {
    const clean = target.replace("#", "").toLowerCase()
    if (clean === "about" || clean === "about-us") {
      setView("about")
      window.location.hash = "#about"
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (clean === "gtp" || clean === "footprints") {
      setView("gtp")
      window.location.hash = "#gtp"
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (clean === "systems" || clean === "ecosystem") {
      setView("systems")
      window.location.hash = "#systems"
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (clean === "careers" || clean === "jobs") {
      setView("careers")
      window.location.hash = "#careers"
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (clean === "resources" || clean === "insights") {
      setView("resources")
      window.location.hash = "#resources"
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (clean === "home" || clean === "") {
      setView("home")
      window.location.hash = "#home"
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      // It's a section on the home page like #contact, #what-we-do, etc.
      if (view !== "home") {
        setView("home")
      }
      setTimeout(() => {
        const el = document.querySelector(
          target.startsWith("#") ? target : `#${target}`,
        )
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
        }
      }, 50)
    }
  }

  return (
    <>
      {/* 3px Razor-thin scroll progress telemetry line */}
      <div
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div id="home">
        <Header activeView={view} onNavigate={handleNavigate} onOpenRoster={() => setRosterDrawerOpen(true)} />
        <main id="main">
          {view === "home" && (
            <>
              <Hero />
              <CompanyMarquee />
              <OutcomeOwnership
                onNavigateAbout={() => handleNavigate("about")}
              />
              <Metrics />
              <LandingVideoSection onNavigate={handleNavigate} />
              <Services onNavigate={handleNavigate} />
              <Reliability />
              <PillarsOfInnovation />
              <PricingDisruption />
              <SkillTraining />
              <WhyUs />
              <Testimonials />
              <Faq />
            </>
          )}

          {view === "about" && <AboutPage />}
          {view === "gtp" && <GtpPage onNavigate={handleNavigate} />}
          {view === "systems" && <SystemsPage onNavigate={handleNavigate} />}
          {view === "careers" && <CareersPage />}
          {view === "resources" && <ResourcesPage />}

          <GtpNotice />
        </main>
        <Footer onNavigate={handleNavigate} />
      </div>

      {/* Halaska Tactile Fast-Track Roster Drawer */}
      <QuickEnquiryDrawer
        isOpen={rosterDrawerOpen}
        onClose={() => setRosterDrawerOpen(false)}
      />

      {/* Floating WhatsApp Action Button with Smooth Expandable Drawer */}
      <FloatingWhatsApp href={contact.whatsapp} show={showPill} />
    </>
  )
}
