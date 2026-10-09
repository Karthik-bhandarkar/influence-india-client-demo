import { useEffect, useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { Article, blogs, articleSections, categories } from "../data/resources"
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
              borderBottom: "1px solid #dadcd0",
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
                      padding: "0.55rem 1.2rem",
                      borderRadius: "9999px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      border: isActive
                        ? "1px solid #3f6e14"
                        : "1px solid #dadcd0",
                      background: isActive ? "#3f6e14" : "#ffffff",
                      color: isActive ? "#ffffff" : "#3f6e14",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                      boxShadow: isActive
                        ? "0 4px 14px rgba(63, 110, 20, 0.28)"
                        : "0 2px 6px rgba(0,0,0,0.03)",
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
                  padding: "0.6rem 1rem 0.6rem 2.4rem",
                  background: "#ffffff",
                  border: "1px solid #dadcd0",
                  borderRadius: "9999px",
                  color: "#171d16",
                  fontSize: "0.84rem",
                  outline: "none",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                }}
              />
              <svg
                style={{
                  position: "absolute",
                  left: "0.95rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "14px",
                  height: "14px",
                  fill: "none",
                  stroke: "#3f6e14",
                  strokeWidth: 2.2,
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
                    <span className="blog-tag">{blog.category}</span>
                    <span className="blog-read-time">{blog.readTime}</span>
                  </div>
                  <h3>{blog.title}</h3>
                  <p>{blog.excerpt}</p>
                  <div className="blog-card-footer" style={{ marginTop: "auto", paddingTop: "1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="blog-read-link">
                      <span>READ BRIEF</span>
                      <span>→</span>
                    </span>
                    <span style={{ fontSize: "0.72rem", color: "#64748b", letterSpacing: "0.05em", fontWeight: 600 }}>
                      {blog.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredBlogs.length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem 1rem", color: "#64748b" }}>
              <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>No research briefs found matching "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("ALL") }}
                style={{
                  background: "#ffffff",
                  border: "1px solid #3f6e14",
                  color: "#3f6e14",
                  padding: "0.45rem 1.1rem",
                  borderRadius: "9999px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
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
              background: "#081a0e",
              border: "1px solid rgba(163,230,53,0.35)",
              borderRadius: "1.25rem",
              padding: "2.5rem 2.75rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.75rem",
              boxShadow: "0 24px 50px -12px rgba(8, 26, 14, 0.45)",
            }}
          >
            <div style={{ maxWidth: "660px" }}>
              <span style={{ fontSize: "0.75rem", letterSpacing: "0.14em", fontWeight: 800, color: "#a3e635", display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#a3e635", boxShadow: "0 0 8px #a3e635" }} />
                ANNUAL EXECUTIVE WHITE PAPER
              </span>
              <h3 style={{ margin: "0.25rem 0 0.65rem 0", color: "#ffffff", fontSize: "1.45rem", fontFamily: "var(--font-heading)", lineHeight: 1.3 }}>
                2026 India Flexible Workforce &amp; OSTP Skilling Index
              </h3>
              <p style={{ margin: 0, color: "#d2dbd0", fontSize: "0.92rem", lineHeight: 1.65 }}>
                Comprehensive statistical review analyzing hiring cycle efficiency, statutory compliance benchmarks, and retention dynamics across 100,000+ shifts.
              </p>
            </div>
            <button
              onClick={() => triggerDownloadSimulation("India_Flexible_Workforce_OSTP_Index_2026.pdf")}
              style={{
                background: "#a3e635",
                color: "#06130b",
                border: "none",
                borderRadius: "9999px",
                padding: "0.85rem 1.8rem",
                fontWeight: 800,
                fontSize: "0.82rem",
                letterSpacing: "0.06em",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                boxShadow: "0 6px 20px rgba(163, 230, 53, 0.35)",
                whiteSpace: "nowrap",
                transition: "all 0.25s ease",
              }}
            >
              <span>DOWNLOAD PDF DOSSIER</span>
              <span style={{ fontSize: "1rem" }}>↓</span>
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
                background: "#ffffff",
                border: "1px solid #c4e28c",
                borderRadius: "1.25rem",
                padding: "2.5rem",
                boxShadow: "0 30px 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(63, 110, 20, 0.12)",
                color: "#171d16",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                <div>
                  <span style={{ fontSize: "0.72rem", letterSpacing: "0.1em", fontWeight: 800, color: "#3f6e14", textTransform: "uppercase", background: "#eff7dc", padding: "0.25rem 0.65rem", borderRadius: "0.35rem", border: "1px solid #c4e28c" }}>
                    {selectedArticle.category} · {selectedArticle.readTime}
                  </span>
                  <h2 style={{ fontSize: "1.6rem", color: "#171d16", margin: "0.75rem 0 0.25rem 0", fontFamily: "var(--font-heading)", lineHeight: 1.25 }}>
                    {selectedArticle.title}
                  </h2>
                  <span style={{ fontSize: "0.78rem", color: "#64748b" }}>Published {selectedArticle.date}</span>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  style={{
                    background: "#eff7dc",
                    border: "1px solid #c4e28c",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#3f6e14",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  ✕
                </button>
              </div>

              <div style={{ marginBottom: "1.75rem", lineHeight: 1.7, fontSize: "0.95rem", color: "#4e5a4a" }}>
                <p style={{ marginBottom: "1rem" }}>{selectedArticle.fullContent}</p>
                <p>{selectedArticle.excerpt}</p>
              </div>

              <div style={{ background: "#f8fbf3", border: "1px solid #dbe8ca", borderRadius: "0.75rem", padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
                <h4 style={{ margin: "0 0 0.75rem 0", fontSize: "0.8rem", letterSpacing: "0.08em", color: "#3f6e14", textTransform: "uppercase", fontWeight: 800 }}>
                  Key Executive Takeaways
                </h4>
                <ul style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.88rem", color: "#2d4513" }}>
                  {selectedArticle.keyTakeaways.map((takeaway, i) => (
                    <li key={i}>{takeaway}</li>
                  ))}
                </ul>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between", alignItems: "center", paddingTop: "1.25rem", borderTop: "1px solid #e2e8f0" }}>
                <button
                  onClick={() => triggerDownloadSimulation(selectedArticle.downloadablePdf)}
                  style={{
                    background: "#3f6e14",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "9999px",
                    padding: "0.7rem 1.5rem",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    boxShadow: "0 4px 14px rgba(63, 110, 20, 0.3)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <span>DOWNLOAD EXECUTIVE PDF</span>
                  <span>↓</span>
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  style={{
                    background: "transparent",
                    color: "#64748b",
                    border: "1px solid #cbd5e1",
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
