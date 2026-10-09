import { useEffect, useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Article {
  id: string
  category: "INFRASTRUCTURE" | "CORPORATE STAFFING" | "SYSTEMS" | "POLICY & SKILLING"
  readTime: string
  date: string
  title: string
  excerpt: string
  fullContent: string
  keyTakeaways: string[]
  downloadablePdf: string
}

const blogs: Article[] = [
  {
    id: "infra-charging-forward",
    category: "INFRASTRUCTURE",
    readTime: "8 MIN READ",
    date: "OCTOBER 2026",
    title: "CHARGING FORWARD: SEAMLESS STAFFING IN INDIA",
    excerpt:
      "Twenty OSTP locations, built hand-in-hand with governments, education institutions and private educational entities — plus the corporate case for staffing as a service.",
    fullContent:
      "Influence India Services' Onsite Skill Training Program (OSTP) infrastructure bridges the acute gap between higher education graduates and industrial workplace readiness. Operating across 20 high-density industrial hubs, each OSTP facility features modular simulations, automated attendance telemetry, and rigorous competency benchmarking.",
    keyTakeaways: [
      "20 strategically located OSTP centers across Karnataka, Maharashtra, and Tamil Nadu",
      "Tripartite operational model uniting State Skill Missions, academic campuses, and Fortune 500 employers",
      "Real-time SLA tracking reducing time-to-productivity from 45 days to under 96 hours",
    ],
    downloadablePdf: "OSTP_Infrastructure_Report_2026.pdf",
  },
  {
    id: "staffing-mh-solutions",
    category: "CORPORATE STAFFING",
    readTime: "7 MIN READ",
    date: "SEPTEMBER 2026",
    title: "DRIVING THE FUTURE: (MH) SOLUTIONS",
    excerpt:
      "Our value proposition, the regulatory tailwinds behind mass hiring, the unit economics of MH against traditional IHP staffing, and our integrated offering.",
    fullContent:
      "Traditional internal hiring pipelines (IHP) create unsustainable cost-per-hire spikes during seasonal demand surges. Our Mass Hiring (MH) solution introduces variable capacity contracts with guaranteed replacement speeds, standardized statutory compliance, and zero attrition downtime.",
    keyTakeaways: [
      "42% average reduction in workforce acquisition overheads vs ad-hoc agency staffing",
      "100% PF, ESIC, and minimum wage statutory audit guarantees with zero compliance penalties",
      "Pre-vetted buffer rosters ensuring full shift staffing even amidst sudden demand peaks",
    ],
    downloadablePdf: "Mass_Hiring_MH_Economic_Blueprint.pdf",
  },
  {
    id: "systems-workforce-infra",
    category: "SYSTEMS",
    readTime: "8 MIN READ",
    date: "SEPTEMBER 2026",
    title: "INFRASTRUCTURE BEHIND THE WORKFORCE",
    excerpt:
      "Inside the dedicated operation system (DOS), onsite management teams and the analytics that keep rosters running at full strength.",
    fullContent:
      "Underneath our human capital engine lies the Dedicated Operation System (DOS). Combining biometric telemetry, automated roster balancing algorithms, and mobile supervisor dispatch, DOS gives floor leadership instantaneous visibility into line availability.",
    keyTakeaways: [
      "Sub-second check-in synchronization between factory turnstiles and central operations headquarters",
      "Predictive shift variance forecasting flags potential roster shortfalls 18 hours prior to shift commencement",
      "Dedicated onsite floor marshals resolving workplace disputes and supervisor inquiries in under 15 minutes",
    ],
    downloadablePdf: "DOS_Operations_Technical_Architecture.pdf",
  },
  {
    id: "policy-grow-together",
    category: "POLICY & SKILLING",
    readTime: "6 MIN READ",
    date: "AUGUST 2026",
    title: "THE GROW TOGETHER COMMITMENT (GTC) IN ACTION",
    excerpt:
      "How transparent wage governance, tier-1 medical cover, and structured career pathways transform temporary staffing into long-term wealth creation.",
    fullContent:
      "Staffing cannot be sustainable if workforce welfare is treated as an afterthought. Through our Grow Together Commitment (GTC), every associate receives guaranteed direct bank account wage transfers on the 1st of every calendar month, comprehensive ESIC cover, and free skill upgrading.",
    keyTakeaways: [
      "Zero salary deduction policies and transparent digital payslip issuance via SMS/WhatsApp",
      "Recognized vocational certification pathways enabling floor associates to transition to team leads",
      "Retention rates 3.2x higher than unorganized contract staffing competitors",
    ],
    downloadablePdf: "Grow_Together_Commitment_Charter.pdf",
  },
  {
    id: "gcc-staffing-trends",
    category: "CORPORATE STAFFING",
    readTime: "9 MIN READ",
    date: "AUGUST 2026",
    title: "GCC EXPANSION & THE RISE OF FLEXIBLE SPECIALISTS",
    excerpt:
      "Analyzing how Global Capability Centers in Bengaluru and Hyderabad are leveraging managed service staffing for technical and compliance workloads.",
    fullContent:
      "Global Capability Centers are pivoting away from rigid permanent hiring towards outcome-aligned contingent staffing squads. By partnering with dedicated staffing operators, multinationals de-risk exploratory engineering and operational sprints without bloating fixed payroll liabilities.",
    keyTakeaways: [
      "Surge in demand for bilingual technical support and compliance auditors across GCCs",
      "Rapid deployment pods ready for production environments in 5 business days",
      "Strict NDA, secure sandbox endpoints, and IP protection guardrails integrated into vendor contracts",
    ],
    downloadablePdf: "GCC_Workforce_Scaling_Study_2026.pdf",
  },
  {
    id: "systems-biometric-telemetry",
    category: "SYSTEMS",
    readTime: "5 MIN READ",
    date: "JULY 2026",
    title: "NEXT-GEN BIOMETRIC ATTENDANCE & RECONCILIATION",
    excerpt:
      "Eliminating buddy punching and dispute backlogs with geo-fenced cloud telemetry and automated muster roll generation.",
    fullContent:
      "Manual muster roll logging is the primary cause of billing disputes and delayed associate salaries. Influence India's automated cloud reconciliation framework consolidates biometric terminal feeds into verified billing registers within seconds of shift conclusion.",
    keyTakeaways: [
      "Elimination of 99.8% of invoice reconciliation disputes with enterprise enterprise clients",
      "Real-time alerts triggered when an employee exceeds maximum statutory weekly overtime thresholds",
      "Instantaneous compliance export compatible with SAP, Workday, and Darwinbox ERP systems",
    ],
    downloadablePdf: "Biometric_Telemetry_Reconciliation_Spec.pdf",
  },
]

const articleSections = [
  {
    number: "01",
    title: "BUILDING A NETWORK THROUGH COLLABORATION",
    subtitle: "A VAST NETWORK OF OSTP ACROSS INDIA",
    content:
      "As a B2B Staffing-as-a-Service (SaaS) company, Influence India Services provides a vast network of OSTP (Onsite Skill Training Programs) across India. This impressive OSTP infrastructure in India was not built alone. We unite vocational colleges, industrial training institutes (ITIs), and enterprise floor managers under an integrated curriculum framework.",
  },
  {
    number: "02",
    title: "BUILDING A NETWORK, TOGETHER",
    subtitle: "HAND-IN-HAND WITH GOVERNMENT AND EDUCATION",
    content:
      "We believe in collaboration. That's why we're working hand-in-hand with governments, Education Institutions, and Private Educational Entities. This means efficient (STP) with reliable Skill Education at no cost — a win-win for everyone! It not only supports the growing demand for Skilled Staffing but also contributes to the overall infrastructure and sustainability goals of our Job Seekers and Work Provider.",
    bullets: [
      "Governments collaboration across state skill development councils",
      "Education Institutions partnership with accredited polytechnics and ITIs",
      "Private Educational Entities engagement for advanced equipment simulations",
      "Reliable skill education at zero tuition burden for job seekers",
    ],
  },
  {
    number: "03",
    title: "STAFFING AS A SERVICE FOR A SUSTAINABLE FUTURE",
    subtitle: "BUILT TO LAST, BUILT TO EXPAND",
    content:
      "Our Immense Staffing solutions are built to last. We use a modular design for easy expansion as demand grows, and we're investing in future-proof technology to keep pace with next-generation Staffing Recruitments. Sustainability is at our core, with features like OSTP and Sourcing options that get the most out of every Business Requirements. Presently Influence India Services has 20 (OSTP) locations strategically located for our Staffing Requirements, all of these OSTP are also open to the Educational Institutions. We are committed to continuous expansion, driven by both Team size and Qualified Job Aspirants utilization data.",
    bullets: [
      "Modular design for rapid facility expansion within 14 calendar days",
      "Future-proof telemetry and analytics for next-generation recruitment",
      "20 operational OSTP hubs open directly to educational institutions",
      "Data-driven expansion prioritizing high-demand industrial belts",
    ],
  },
  {
    number: "04",
    title: "JOIN THE RECRUITMENT REVOLUTION",
    subtitle: "WE'RE BUILDING A SKILLED WORKFORCE FUTURE",
    content:
      "Influence India Services aren't just building an OSTP's, we're building a Skilled work force future. We're a partner of choice for businesses and corporations seeking to embrace Staffing solutions with confidence. Our focus on internal use today translates to a data-driven, user-centric JOB Aspirants and job providers tomorrow. By prioritizing scalability, sustainability, and job Aspirant well-being, Influence India Services OSTP infrastructure is designed to grow alongside India's Staffing Solution revolution.",
  },
  {
    number: "05",
    title: "COST EFFICIENCY: THE CASE FOR STAFFING SOLUTION",
    subtitle: "LOWER OPERATIONAL COSTS & FLEET OPTIMIZATION",
    content:
      "Forward-thinking companies are transitioning from high cost to reliable source of staffing, reaping long-term financial benefits. Staffing companies reduce cost and training expenses compared to self reliable alternatives. Partnering with eMaaS providers further reduces employee individual costs over time. By leveraging data analytics, companies can optimize the performance and usage patterns, cutting operational costs while enhancing efficiency.",
  },
  {
    number: "06",
    title: "IMPROVED EMPLOYEE WELLBEING AND PRODUCTIVITY",
    subtitle: "HEALTHIER WORKFORCES & BOOSTING SATISFACTION",
    content:
      "Adopting staffing solutions contributes to healthier working ecosystem, reducing work load and improving employee wellbeing. Staffing reduces the time line of recruiting, leading to stable work culture. This minimizes work related hassle, resulting in lower absenteeism and enhanced employee productivity. Employees are increasingly seeking out stable and healthier responsible employers. Offering good career options helps attract and retain talent, while fostering higher engagement.",
  },
  {
    number: "07",
    title: "CREATING STABLE JOBS AND SUPPORTING ECOSYSTEM GROWTH",
    subtitle: "DRIVING STAFFING INFRASTRUCTURE & SUSTAINABLE EXPANSION",
    content:
      "The shift to staffing solution is creating new opportunities across multiple sectors, with corporates playing a pivotal role in accelerating India's working ecosystem. Corporate demand for eMaaS encourages investment in staffing solutions, training programs, and skilled out-put, spurring job creation and economic growth. Staffing solution-hailing services are scaling up, generating employment in staff management career, and corporate service, while positioning companies as industry leaders in sustainability.",
  },
]

const categories = ["ALL", "INFRASTRUCTURE", "CORPORATE STAFFING", "SYSTEMS", "POLICY & SKILLING"] as const

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeArticleTab, setActiveArticleTab] = useState(0)
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [downloadToast, setDownloadToast] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const filteredBlogs = useMemo(() => {
    return blogs.filter((b) => {
      const matchCat = activeCategory === "ALL" || b.category === activeCategory
      const matchSearch =
        searchQuery.trim() === "" ||
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.category.toLowerCase().includes(searchQuery.toLowerCase())
      return matchCat && matchSearch
    })
  }, [activeCategory, searchQuery])

  const triggerDownloadSimulation = (fileName: string) => {
    setDownloadToast(`Initiating download: ${fileName}`)
    setTimeout(() => {
      setDownloadToast(`✓ "${fileName}" generated and saved successfully.`)
      setTimeout(() => setDownloadToast(null), 3500)
    }, 1200)
  }

  return (
    <div className="resources-page editorial-page">
      {/* Toast Alert */}
      <AnimatePresence>
        {downloadToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            style={{
              position: "fixed",
              bottom: "2rem",
              right: "2rem",
              zIndex: 9999,
              background: "#06130b",
              border: "1px solid #a3e635",
              color: "#f8f9fa",
              padding: "0.85rem 1.5rem",
              borderRadius: "0.75rem",
              boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
              fontSize: "0.85rem",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#a3e635", boxShadow: "0 0 10px #a3e635" }} />
            {downloadToast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="section resources-hero-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="page-header-badge"
          >
            <span className="page-badge-dot" />
            <span>KNOWLEDGE HUB & INDUSTRY BRIEFS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="editorial-page-title"
          >
            KEEP UP WITH THE FUTURE OF
            <br />
            <span className="text-lime">STAFFING AND RECRUITMENT</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="editorial-lead"
          >
            Empower yourself with information to make choices that have a
            lasting impact on unemployment and on your career growth.
          </motion.p>

          {/* Hero Foreground Knowledge Hub Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="resources-hero-image-wrap"
            style={{
              marginTop: "3rem",
              position: "relative",
              borderRadius: "1.25rem",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 24px 60px -12px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src="/images/resources-knowledge-hub.jpg"
              alt="Influence India knowledge hub and workforce research center in Bengaluru"
              width="1800"
              height="1000"
              className="resources-hero-image"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
                maxHeight: "540px",
              }}
              loading="eager"
            />
            <div
              className="resources-hero-image-badge"
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
              <span>BENGALURU RESEARCH HUB · WORKFORCE ANALYTICS &amp; INDUSTRY INSIGHTS</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Powerful Insights / Blogs Grid */}
      <section className="section resources-blogs-section">
        <div className="container">
          <div className="section-heading-editorial">
            <span className="section-label-text">POWERFUL INSIGHTS</span>
            <h2>READ OUR INFORMATIVE BLOGS</h2>
            <p className="heading-sub">
              Our resources page is designed to be a hub of inspiration and
              information, empowering you to make sustainable choices that have
              a lasting impact on unemployment and your career solutions.
            </p>
          </div>

          {/* Interactive Filter Toolbar & Search */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "2.5rem",
              paddingBottom: "1.5rem",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Category Pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {categories.map((cat) => {
                const isActive = activeCategory === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      padding: "0.5rem 1.1rem",
                      borderRadius: "9999px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      border: isActive
                        ? "1px solid #a3e635"
                        : "1px solid rgba(255,255,255,0.12)",
                      background: isActive ? "#a3e635" : "rgba(255,255,255,0.03)",
                      color: isActive ? "#06130b" : "#cbd5e1",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>

            {/* Instant Search Bar */}
            <div style={{ position: "relative", minWidth: "260px", maxWidth: "340px", width: "100%" }}>
              <input
                type="text"
                placeholder="Search publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.55rem 1rem 0.55rem 2.2rem",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "9999px",
                  color: "#ffffff",
                  fontSize: "0.82rem",
                  outline: "none",
                }}
              />
              <svg
                style={{
                  position: "absolute",
                  left: "0.85rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "14px",
                  height: "14px",
                  fill: "none",
                  stroke: "rgba(255,255,255,0.4)",
                  strokeWidth: 2,
                }}
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>

          {/* Blogs Grid */}
          <motion.div layout className="blogs-grid">
            <AnimatePresence>
              {filteredBlogs.map((blog) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={blog.id}
                  className="blog-card"
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedArticle(blog)}
                >
                  <div className="blog-card-meta">
                    <span className="blog-category">{blog.category}</span>
                    <span className="blog-read-time">{blog.readTime}</span>
                  </div>
                  <h3>{blog.title}</h3>
                  <p>{blog.excerpt}</p>
                  <div className="blog-card-footer" style={{ marginTop: "auto", paddingTop: "1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="blog-read-link" style={{ fontWeight: 700, color: "var(--color-brand-strong, #3f6e14)", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                      READ BRIEF <span>→</span>
                    </span>
                    <span style={{ fontSize: "0.72rem", color: "#64748b", letterSpacing: "0.05em" }}>
                      {blog.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredBlogs.length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem 1rem", color: "#94a3b8" }}>
              <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>No research briefs found matching "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("ALL") }}
                style={{
                  background: "transparent",
                  border: "1px solid #a3e635",
                  color: "#a3e635",
                  padding: "0.4rem 1rem",
                  borderRadius: "9999px",
                  fontSize: "0.78rem",
                  cursor: "pointer",
                }}
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Enterprise Dossier Instant Download Banner */}
          <div
            style={{
              marginTop: "3.5rem",
              background: "linear-gradient(135deg, rgba(63,110,20,0.15) 0%, rgba(10,20,12,0.9) 100%)",
              border: "1px solid rgba(163,230,53,0.3)",
              borderRadius: "1rem",
              padding: "2.25rem 2.5rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.5rem",
            }}
          >
            <div>
              <span style={{ fontSize: "0.72rem", letterSpacing: "0.12em", fontWeight: 800, color: "#a3e635", display: "block", marginBottom: "0.4rem" }}>
                ANNUAL EXECUTIVE WHITE PAPER
              </span>
              <h3 style={{ margin: "0 0 0.5rem 0", color: "#ffffff", fontSize: "1.35rem", fontFamily: "var(--font-heading)" }}>
                2026 India Flexible Workforce &amp; OSTP Skilling Index
              </h3>
              <p style={{ margin: 0, color: "#94a3b8", fontSize: "0.88rem", maxWidth: "600px" }}>
                Comprehensive statistical review analyzing hiring cycle efficiency, statutory compliance benchmarks, and retention dynamics across 100,000+ shifts.
              </p>
            </div>
            <button
              onClick={() => triggerDownloadSimulation("India_Flexible_Workforce_OSTP_Index_2026.pdf")}
              className="action action--lime"
              style={{ whiteSpace: "nowrap", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              <span>DOWNLOAD PDF DOSSIER</span>
              <span>↓</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured In-Depth Article */}
      <section className="section resources-featured-section">
        <div className="container">
          <div className="featured-article-card">
            <div className="featured-article-header">
              <span className="section-label-text">FEATURED ARTICLE</span>
              <h2>
                CHARGING FORWARD:
                <br />
                <span className="text-lime">
                  PIONEERING SEAMLESS STAFFING IN INDIA
                </span>
              </h2>
              <p className="featured-lead">
                India's Corporate Business crave Skilled Work Force, and
                Influence India Services is on a mission to deliver it. We're
                the smartest sustainable staffing company in India, and we know
                the major roadblock for staffing adoption is skilled work force
                — the fear of running out of juice before finding a Skilled work
                force.
              </p>
            </div>

            {/* The Network Today Metrics */}
            <div className="network-metrics-strip">
              <div className="network-metric-box">
                <span className="net-val">20</span>
                <span className="net-lbl">OSTP LOCATIONS ACROSS INDIA</span>
              </div>
              <div className="network-metric-box">
                <span className="net-val">100%</span>
                <span className="net-lbl">SKILL EDUCATION AT NO COST</span>
              </div>
              <div className="network-metric-box">
                <span className="net-val">3</span>
                <span className="net-lbl">
                  COLLABORATION PARTNERS (GOV, EDU, PRIVATE)
                </span>
              </div>
            </div>

            {/* The Good News */}
            <div className="good-news-box">
              <span className="section-label-text">THE GOOD NEWS</span>
              <h3>CONQUERING THE SKILLED WORKFORCE ANXIETY</h3>
              <p>
                Here's the good news: we're conquering this anxiety by building
                a robust network of Skill Training Programs with Education
                across India.
              </p>
              <p>
                In addition, we are working with businesses to fill any Skill
                gaps at their Work Place by setting up on site Skill Training
                Programs at company offices.
              </p>
            </div>

            {/* In This Article - Interactive Tab Navigation */}
            <div className="article-sections-container">
              <div className="article-toc">
                <h4>IN THIS ARTICLE</h4>
                <ul>
                  {articleSections.map((sec, idx) => (
                    <li
                      key={sec.number}
                      className={activeArticleTab === idx ? "is-active" : ""}
                      onClick={() => setActiveArticleTab(idx)}
                    >
                      <span className="toc-num">{sec.number}</span>
                      <span>{sec.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="article-content-display">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeArticleTab}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="article-display-card"
                  >
                    <span className="display-sec-num">
                      SECTION {articleSections[activeArticleTab].number}
                    </span>
                    <h3>{articleSections[activeArticleTab].title}</h3>
                    <h4>{articleSections[activeArticleTab].subtitle}</h4>
                    <p>{articleSections[activeArticleTab].content}</p>

                    {articleSections[activeArticleTab].bullets && (
                      <ul className="article-bullets">
                        {articleSections[activeArticleTab].bullets!.map(
                          (b, i) => (
                            <li key={i}>
                              <span className="bullet-check">✓</span>
                              <span>{b}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* The Corporate Case */}
            <div className="corporate-case-box">
              <span className="section-label-text">THE CORPORATE CASE</span>
              <h3>THE ECONOMIC AND CAREER ADVANTAGES ARE UNDENIABLE</h3>
              <p>
                As India's corporate landscape embraces sustainable staffing
                solution, particularly staffing-as-a-service, the economic and
                individual career advantages are undeniable. With its vast human
                capital and burgeoning Global Capability Centres (GCCs), India
                is uniquely positioned to lead the charge in staffing industry.
              </p>
              <p>
                For corporations managing large teams, providing affordable
                isn't just a responsible choice — it's a strategic business move
                that influences cost, productivity, and corporate reputation.
              </p>
            </div>

            {/* Final CTA in Article */}
            <div className="resources-cta-box">
              <div className="resources-cta-header">
                <span className="section-label-text">WORKFORCE PARTNERSHIP</span>
                <h3>READY TO GET CHARGED UP ABOUT THE FUTURE?</h3>
                <p>
                  Contact Influence India Services today at{" "}
                  <a href="mailto:connect@project-influenceindiaservices.com">
                    connect@project-influenceindiaservices.com
                  </a>{" "}
                  to discuss your Skilled Staffing needs and explore how we can
                  help you make the switch to SAAS (Staffing as a Service).
                </p>
              </div>
              <div className="resources-cta-action">
                <span className="tagline-bold">
                  TOGETHER, LET'S GROW INDIA.
                </span>
                <a
                  href="mailto:contact@influenceindiaservices.com?subject=Enquiry%20from%20Resources%20Hub"
                  className="action action--lime"
                >
                  <span>WRITE TO US</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Article Reading Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 10000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
              background: "rgba(6, 19, 11, 0.8)",
              backdropFilter: "blur(12px)",
            }}
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                maxWidth: "720px",
                maxHeight: "88vh",
                overflowY: "auto",
                background: "#0c1810",
                border: "1px solid rgba(163,230,53,0.35)",
                borderRadius: "1.25rem",
                padding: "2.5rem",
                boxShadow: "0 30px 80px rgba(0,0,0,0.8)",
                color: "#e2e8f0",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                <div>
                  <span style={{ fontSize: "0.72rem", letterSpacing: "0.1em", fontWeight: 800, color: "#a3e635", textTransform: "uppercase" }}>
                    {selectedArticle.category} · {selectedArticle.readTime}
                  </span>
                  <h2 style={{ fontSize: "1.6rem", color: "#ffffff", margin: "0.5rem 0 0.25rem 0", fontFamily: "var(--font-heading)" }}>
                    {selectedArticle.title}
                  </h2>
                  <span style={{ fontSize: "0.78rem", color: "#64748b" }}>Published {selectedArticle.date}</span>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "none",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontSize: "1.2rem",
                    cursor: "pointer",
                  }}
                >
                  ✕
                </button>
              </div>

              <div style={{ marginBottom: "1.75rem", lineHeight: 1.7, fontSize: "0.95rem", color: "#cbd5e1" }}>
                <p style={{ marginBottom: "1rem" }}>{selectedArticle.fullContent}</p>
                <p>{selectedArticle.excerpt}</p>
              </div>

              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0.75rem", padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
                <h4 style={{ margin: "0 0 0.75rem 0", fontSize: "0.8rem", letterSpacing: "0.08em", color: "#a3e635", textTransform: "uppercase" }}>
                  Key Executive Takeaways
                </h4>
                <ul style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.85rem", color: "#94a3b8" }}>
                  {selectedArticle.keyTakeaways.map((takeaway, i) => (
                    <li key={i}>{takeaway}</li>
                  ))}
                </ul>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between", alignItems: "center", paddingTop: "1.25rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <button
                  onClick={() => triggerDownloadSimulation(selectedArticle.downloadablePdf)}
                  style={{
                    background: "#a3e635",
                    color: "#06130b",
                    border: "none",
                    borderRadius: "9999px",
                    padding: "0.65rem 1.4rem",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span>DOWNLOAD EXECUTIVE PDF</span>
                  <span>↓</span>
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  style={{
                    background: "transparent",
                    color: "#94a3b8",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "9999px",
                    padding: "0.65rem 1.4rem",
                    fontWeight: 600,
                    fontSize: "0.82rem",
                    cursor: "pointer",
                  }}
                >
                  Close Brief
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
