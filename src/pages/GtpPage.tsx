import { useEffect, useRef, useState } from "react"

const footprints = [
  {
    number: "01",
    title: "Zero Unemployment Target",
    description:
      "We aim to eradicate unemployment — a zero unemployment target.",
  },
  {
    number: "02",
    title: "Youth Empowerment",
    description:
      "Empowering skilled and educated young people into the working sector.",
  },
  {
    number: "03",
    title: "Corporate Skills with Education",
    description:
      "We promote learning skills to work in a corporate world alongside education.",
  },
  {
    number: "04",
    title: "Livelihood for Informal Sectors",
    description:
      "Livelihood benefits for workers in traditionally informal sectors — a happy work atmosphere.",
  },
  {
    number: "05",
    title: "Education-Matched Opportunities",
    description:
      "We embrace equal job opportunities across industries, matched to equal educational qualification.",
  },
  {
    number: "06",
    title: "Dependent Support & Scholarships",
    description:
      "Scholarships and financial support for our employees' children and dependents.",
  },
  {
    number: "07",
    title: "Work–Life Balance",
    description: "Work–life balance opportunities for working people.",
  },
  {
    number: "08",
    title: "Career Progression Pathways",
    description:
      "Learning and career progression opportunities for service providers.",
  },
  {
    number: "09",
    title: "100% Gender Diversity",
    description: "100% gender diversity in the workforce — gender equality.",
  },
  {
    number: "10",
    title: "Upskilling Unqualified Talent",
    description:
      "Promoting skill training and education for unskilled and unqualified people.",
  },
  {
    number: "11",
    title: "Tech-Driven Support",
    description:
      "Tech-driven teams and training programs — sustainable tech support in staffing.",
  },
  {
    number: "12",
    title: "Unstoppable GTP Momentum",
    description: "Unstoppable GTP across the industry.",
  },
  {
    number: "13",
    title: "Lower-Income Empowerment",
    description:
      "Enabling resources for lower-income groups to empower financial needs.",
  },
  {
    number: "14",
    title: "Quality Workspace Standard",
    description: "Promoting quality workspace for every individual.",
  },
  {
    number: "15",
    title: "Pioneering Sustainable Staffing",
    description: "Pioneering sustainable staffing as an operating discipline.",
  },
  {
    number: "16",
    title: "Fair Practices & Economic Security",
    description:
      "Ensuring fair practices and economic security for employee dependents.",
  },
  {
    number: "17",
    title: "Industry Skill Efficiency",
    description:
      "Empowering skill efficiency to improve quality and productivity across industries.",
  },
  {
    number: "18",
    title: "Human Employment with AI",
    description:
      "Maximising the utilisation of human employment alongside artificial intelligence.",
  },
  {
    number: "19",
    title: "Zero Unemployment Agenda",
    description: "Driving the agenda towards zero unemployment targets.",
  },
  {
    number: "20",
    title: "Policy & Government Partnerships",
    description:
      "Formal partnerships with all stakeholders, including governments and policy bodies.",
  },
  {
    number: "21",
    title: "World's Largest Workspace",
    description: "GOAL: TO BECOME THE WORLD'S LARGEST WORKSPACE ECOSYSTEM.",
    isGoal: true,
  },
]

const smartStaffingPillars = [
  {
    number: "01",
    title: "Smart Staffing Solution",
    subtitle:
      "Cutting-edge smart staffing powered by real-time data analytics.",
  },
  {
    number: "02",
    title: "Multi-Integration on Impact Reduction",
    subtitle: "Integrated programs that measurably reduce unemployment impact.",
  },
  {
    number: "03",
    title: "Training & Skill Enhancement",
    subtitle:
      "Employee training and skill-enhancing programs, continuously refreshed.",
  },
  {
    number: "04",
    title: "Economic Inclusion",
    subtitle:
      "Financial inclusion and economic security across the workforce we serve.",
  },
]

export default function GtpPage({
  onNavigate,
}: {
  onNavigate: (target: string) => void
}) {
  const [activeFootprint, setActiveFootprint] = useState<number | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <div className="gtp-page editorial-page">
      {/* GTP Hero */}
      <section className="section gtp-hero-section" ref={heroRef}>
        <div className="container">
          <div className="page-header-badge">
            <span className="page-badge-dot" />
            <span>GROW TOGETHER POLICY · PUBLISHED COMMITMENT</span>
          </div>

          <h1 className="editorial-page-title">
            NOT JUST A SERVICE WE PROVIDE,
            <br />
            <span className="text-lime">BUT A RESPONSIBILITY WE EMBRACE.</span>
          </h1>

          <p className="editorial-lead">
            We recognise the importance of minimising unemployment impact in the
            modern world and promoting responsible solution practices —
            committed to creating an efficient and more sustainable future
            workforce by transforming the working sector across industries.
          </p>

          <div className="gtp-hero-meta-grid">
            <div className="gtp-meta-card">
              <span className="gtp-meta-num">21</span>
              <span className="gtp-meta-label">PUBLISHED FOOTPRINTS</span>
            </div>
            <div className="gtp-meta-card">
              <span className="gtp-meta-num">ZERO</span>
              <span className="gtp-meta-label">UNEMPLOYMENT TARGET</span>
            </div>
            <div className="gtp-meta-card">
              <span className="gtp-meta-num">100%</span>
              <span className="gtp-meta-label">
                EQUAL OPPORTUNITY & GENDER DIVERSITY
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="section gtp-philosophy-section">
        <div className="container">
          <div className="editorial-split-grid">
            <div className="editorial-col-left">
              <span className="section-label-text">OPERATING CONSCIENCE</span>
              <h2>
                A sustainable staffing company is not just a service we provide,
                but a responsibility we embrace.
              </h2>
            </div>
            <div className="editorial-col-right">
              <p>
                We are proud to be at the front of transforming the staffing
                landscape with our innovative services and solutions.
              </p>
              <p>
                At the core of Influence India Services lies a commitment to
                positively impact the staffing industry and leave a moderate
                footprint — an efficient and good workspace ecosystem for the
                generations to come.
              </p>
              <p>
                We recognise the evolving needs of the population and the
                importance of sustainable, efficient industry options to work
                with. As the world seeks a sustainable workspace, Influence
                India is setting an example while simultaneously doing good for
                our work sector, our people and businesses.
              </p>
              <div className="gtp-highlight-banner">
                <strong>OUR COMMITMENT:</strong>
                <span>
                  EACH AND EVERY ASPIRANT GETS WORK, AND AN EQUITABLE WORKING
                  ECOSYSTEM IN THE FUTURE.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 21 Footprints Grid */}
      <section className="section gtp-footprints-section" id="footprints">
        <div className="container">
          <div className="section-heading-editorial">
            <span className="section-label-text">
              FOOTPRINTS · 21 COMMITMENTS
            </span>
            <h2>
              TWENTY-ONE FOOTPRINTS
              <br />
              <span className="text-lime">WE ARE LEAVING BEHIND</span>
            </h2>
            <p className="heading-sub">
              Every commitment below is measurable, published, and reviewed —
              the operating conscience of the Grow Together Policy.
            </p>
          </div>

          <div className="footprints-grid">
            {footprints.map((item, idx) => (
              <div
                key={item.number}
                className={`footprint-card ${
                  item.isGoal ? "footprint-card--goal" : ""
                } ${activeFootprint === idx ? "is-active" : ""}`}
                onMouseEnter={() => setActiveFootprint(idx)}
                onMouseLeave={() => setActiveFootprint(null)}
              >
                <div className="footprint-card-header">
                  <span className="footprint-num">{item.number}</span>
                  {item.isGoal && (
                    <span className="footprint-goal-tag">GLOBAL GOAL</span>
                  )}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="footprint-card-footer">
                  <span className="footprint-status-dot" />
                  <span>ACTIVE COMMITMENT</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibility Section */}
      <section className="section gtp-responsibility-section">
        <div className="container">
          <div className="responsibility-banner">
            <span className="section-label-text">RESPONSIBILITY</span>
            <h2>FOSTERING A SAFE AND RESPONSIBLE ENVIRONMENT TO WORK.</h2>
            <p className="responsibility-lead">
              Through our transformative services and solutions we aim to create
              a more connected, sustainable and inclusive working ecosystem —
              together with job aspirants and job providers.
            </p>
            <p>
              We are reshaping the way people work, reducing unemployment impact
              and improving the quality of financially stable life for
              employees.
            </p>
          </div>

          <div className="smart-pillars-grid">
            {smartStaffingPillars.map((p) => (
              <div key={p.number} className="smart-pillar-card">
                <span className="smart-pillar-num">{p.number}</span>
                <h3>{p.title}</h3>
                <p>{p.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Smart Staffing Solution 3-point Breakdown */}
          <div className="smart-solution-breakdown">
            <div className="breakdown-title">
              <h3>SMART STAFFING SOLUTION</h3>
              <p>How data analytics meets on-ground operations.</p>
            </div>
            <div className="breakdown-items">
              <div className="breakdown-item">
                <span className="breakdown-num">01</span>
                <p>CUTTING-EDGE SMART STAFFING SOLUTIONS</p>
              </div>
              <div className="breakdown-item">
                <span className="breakdown-num">02</span>
                <p>
                  REAL-TIME DATA ANALYTICS TO CONNECT WITH CLIENT REQUIREMENTS,
                  VACANCY OPTIMISATION AND DEMAND-RESPONSIVE SERVICES
                </p>
              </div>
              <div className="breakdown-item">
                <span className="breakdown-num">03</span>
                <p>
                  CONVENIENT, RELIABLE, AFFORDABLE AND SUSTAINABLE STAFFING
                  SOLUTIONS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
