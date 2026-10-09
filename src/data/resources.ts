export interface Article {
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

export const blogs: Article[] = [
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

export const articleSections = [
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

export const categories = [
  "ALL",
  "INFRASTRUCTURE",
  "CORPORATE STAFFING",
  "SYSTEMS",
  "POLICY & SKILLING",
] as const
