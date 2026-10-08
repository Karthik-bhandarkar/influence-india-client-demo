import { useEffect, useState } from "react"

const blogs = [
  {
    category: "INFRASTRUCTURE",
    readTime: "8 MIN READ",
    title: "CHARGING FORWARD: SEAMLESS STAFFING IN INDIA",
    excerpt:
      "Twenty OSTP locations, built hand-in-hand with governments, education institutions and private educational entities — plus the corporate case for staffing as a service.",
  },
  {
    category: "CORPORATE STAFFING",
    readTime: "7 MIN READ",
    title: "DRIVING THE FUTURE: (MH) SOLUTIONS",
    excerpt:
      "Our value proposition, the regulatory tailwinds behind mass hiring, the unit economics of MH against traditional IHP staffing, and our integrated offering.",
  },
  {
    category: "SYSTEMS",
    readTime: "8 MIN READ",
    title: "INFRASTRUCTURE BEHIND THE WORKFORCE",
    excerpt:
      "Inside the dedicated operation system (DOS), onsite management teams and the analytics that keep rosters running at full strength.",
  },
]

const articleSections = [
  {
    number: "01",
    title: "BUILDING A NETWORK THROUGH COLLABORATION",
    subtitle: "A VAST NETWORK OF OSTP ACROSS INDIA",
    content:
      "As a B2B Staffing-as-a-Service (SaaS) company, Influence India Services provides a vast network of OSTP (Onsite Skill Training Programs) across India. This impressive OSTP infrastructure in India was not built alone.",
  },
  {
    number: "02",
    title: "BUILDING A NETWORK, TOGETHER",
    subtitle: "HAND-IN-HAND WITH GOVERNMENT AND EDUCATION",
    content:
      "We believe in collaboration. That's why we're working hand-in-hand with governments, Education Institutions, and Private Educational Entities. This means efficient (STP) with reliable Skill Education at no cost — a win-win for everyone! It not only supports the growing demand for Skilled Staffing but also contributes to the overall infrastructure and sustainability goals of our Job Seekers and Work Provider.",
    bullets: [
      "Governments collaboration",
      "Education Institutions partnership",
      "Private Educational Entities engagement",
      "Reliable skill education at no cost",
    ],
  },
  {
    number: "03",
    title: "STAFFING AS A SERVICE FOR A SUSTAINABLE FUTURE",
    subtitle: "BUILT TO LAST, BUILT TO EXPAND",
    content:
      "Our Immense Staffing solutions are built to last. We use a modular design for easy expansion as demand grows, and we're investing in future-proof technology to keep pace with next-generation Staffing Recruitments. Sustainability is at our core, with features like OSTP and Sourcing options that get the most out of every Business Requirements. Presently Influence India Services has 20 (OSTP) locations strategically located for our Staffing Requirements, all of these OSTP are also open to the Educational Institutions. We are committed to continuous expansion, driven by both Team size and Qualified Job Aspirants utilization data.",
    bullets: [
      "Modular design for easy expansion as demand grows",
      "Future-proof technology for next-generation recruitment",
      "20 OSTP locations, open to educational institutions",
      "Expansion driven by team size and utilization data",
    ],
  },
  {
    number: "04",
    title: "JOIN THE RECRUITMENT REVOLUTION",
    subtitle: "WE'RE BUILDING A SKILLED WORKFORCE FUTURE",
    content:
      "Influence India Services aren't just building an OSTP's, we're building a Skilled work force future. We're a partner of choice for businesses and corporations seeking to embrace Staffing solutions with confidence. Our focus on internal use today translates to a data-driven, user-centric JOB Aspirants and job providers tomorrow. By prioritizing scalability, sustainability, and job Aspirant well-being, Influence India Services OSTP infrastructure is designed to grow alongside India's Staffing Solution revolution. Join us as we pave the way for a OSTP, more sustainable mode of Staffing.",
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

export default function ResourcesPage() {
  const [activeArticleTab, setActiveArticleTab] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <div className="resources-page editorial-page">
      {/* Hero */}
      <section className="section resources-hero-section">
        <div className="container">
          <div className="page-header-badge">
            <span className="page-badge-dot" />
            <span>KNOWLEDGE HUB & INDUSTRY BRIEFS</span>
          </div>

          <h1 className="editorial-page-title">
            KEEP UP WITH THE FUTURE OF
            <br />
            <span className="text-lime">STAFFING AND RECRUITMENT</span>
          </h1>

          <p className="editorial-lead">
            Empower yourself with information to make choices that have a
            lasting impact on unemployment and on your career growth.
          </p>

          {/* Hero Foreground Knowledge Hub Image */}
          <div className="resources-hero-image-wrap" style={{ marginTop: "3rem", position: "relative", borderRadius: "1.25rem", overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 24px 60px -12px rgba(0,0,0,0.5)" }}>
            <img
              src="/images/resources-knowledge-hub.jpg"
              alt="Influence India knowledge hub and workforce research center in Bengaluru"
              width="1800"
              height="1000"
              className="resources-hero-image"
              style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", maxHeight: "540px" }}
              loading="eager"
            />
            <div className="resources-hero-image-badge" style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", background: "rgba(13,15,17,0.85)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "9999px", padding: "0.6rem 1.4rem", display: "inline-flex", alignItems: "center", gap: "0.75rem", color: "#f8f9fa", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em" }}>
              <span className="live-status-dot" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#a3e635", boxShadow: "0 0 10px #a3e635" }} />
              <span>BENGALURU RESEARCH HUB · WORKFORCE ANALYTICS &amp; INDUSTRY INSIGHTS</span>
            </div>
          </div>
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

          <div className="blogs-grid">
            {blogs.map((blog, idx) => (
              <div key={idx} className="blog-card">
                <div className="blog-card-meta">
                  <span className="blog-category">{blog.category}</span>
                  <span className="blog-read-time">{blog.readTime}</span>
                </div>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <div className="blog-card-footer">
                  <span className="blog-read-link">READ ARTICLE →</span>
                </div>
              </div>
            ))}
          </div>

          <div className="coming-soon-banner">
            <span className="section-label-text">COMING SOON</span>
            <p>MORE ARTICLES ARE PUBLISHED HERE AS THE RESOURCE HUB GROWS.</p>
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
                <div className="article-display-card">
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
                </div>
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
    </div>
  )
}
