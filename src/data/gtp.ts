export interface Footprint {
  number: string

  title: string

  description: string

  category: "youth" | "education" | "tech" | "governance"

  sla?: string

  isGoal?: boolean
}

export const footprints: Footprint[] = [
  {
    number: "01",

    title: "Zero Unemployment Target",

    category: "youth",

    sla: "Zero fee conversion directly to verified role offer",

    description:
      "We aim to eradicate unemployment — a zero unemployment target.",
  },

  {
    number: "02",

    title: "Youth Empowerment",

    category: "youth",

    sla: "100% youth direct access to formal enterprise rosters",

    description:
      "Empowering skilled and educated young people into the working sector.",
  },

  {
    number: "03",

    title: "Corporate Skills with Education",

    category: "education",

    sla: "OSTP simulated floor orientation before client placement",

    description:
      "We promote learning skills to work in a corporate world alongside education.",
  },

  {
    number: "04",

    title: "Livelihood for Informal Sectors",

    category: "youth",

    sla: "Formal payroll, statutory EPF and legal workplace protections",

    description:
      "Livelihood benefits for workers in traditionally informal sectors — a happy work atmosphere.",
  },

  {
    number: "05",

    title: "Education-Matched Opportunities",

    category: "education",

    sla: "Strict degree-to-role relevance matching",

    description:
      "We embrace equal job opportunities across industries, matched to equal educational qualification.",
  },

  {
    number: "06",

    title: "Dependent Support & Scholarships",

    category: "education",

    sla: "Direct academic stipends and healthcare support for dependents",

    description:
      "Scholarships and financial support for our employees' children and dependents.",
  },

  {
    number: "07",

    title: "Work–Life Balance",

    category: "youth",

    sla: "Strict 12h cycle cap across 2 rotational day shifts with zero night duty",

    description: "Work–life balance opportunities for working people.",
  },

  {
    number: "08",

    title: "Career Progression Pathways",

    category: "education",

    sla: "75% of supervisor and management roles filled via internal promotions",

    description:
      "Learning and career progression opportunities for service providers.",
  },

  {
    number: "09",

    title: "100% Gender Diversity",

    category: "education",

    sla: "100% equal opportunity across all corporate deployment rosters",

    description: "100% gender diversity in the workforce — gender equality.",
  },

  {
    number: "10",

    title: "Upskilling Unqualified Talent",

    category: "education",

    sla: "Free foundation literacy and operational drills via regional hubs",

    description:
      "Promoting skill training and education for unskilled and unqualified people.",
  },

  {
    number: "11",

    title: "Tech-Driven Support",

    category: "tech",

    sla: "Real-time DOS automated attendance telemetry & biometric verification",

    description:
      "Tech-driven teams and training programs — sustainable tech support in staffing.",
  },

  {
    number: "12",

    title: "Unstoppable GTP Momentum",

    category: "governance",

    sla: "Published audit footprint reviewed quarterly with enterprise partners",

    description: "Unstoppable GTP across the industry.",
  },

  {
    number: "13",

    title: "Lower-Income Empowerment",

    category: "youth",

    sla: "Direct bank transfer payroll with zero intermediate deductions",

    description:
      "Enabling resources for lower-income groups to empower financial needs.",
  },

  {
    number: "14",

    title: "Quality Workspace Standard",

    category: "tech",

    sla: "Standardised OSHA workplace safety and dignity compliance across client sites",

    description: "Promoting quality workspace for every individual.",
  },

  {
    number: "15",

    title: "Pioneering Sustainable Staffing",

    category: "tech",

    sla: "Zero Capex onboarding for enterprise employers",

    description: "Pioneering sustainable staffing as an operating discipline.",
  },

  {
    number: "16",

    title: "Fair Practices & Economic Security",

    category: "governance",

    sla: "100% statutory ESI, medical cover and direct insurance coverage",

    description:
      "Ensuring fair practices and economic security for employee dependents.",
  },

  {
    number: "17",

    title: "Industry Skill Efficiency",

    category: "tech",

    sla: "Continuous quarterly skill upgradation modules for all deployed talent",

    description:
      "Empowering skill efficiency to improve quality and productivity across industries.",
  },

  {
    number: "18",

    title: "Human Employment with AI",

    category: "tech",

    sla: "AI telemetry assisting human dispatchers without replacing human workers",

    description:
      "Maximising the utilisation of human employment alongside artificial intelligence.",
  },

  {
    number: "19",

    title: "Zero Unemployment Agenda",

    category: "youth",

    sla: "Direct pipeline connecting university campuses with enterprise demand",

    description: "Driving the agenda towards zero unemployment targets.",
  },

  {
    number: "20",

    title: "Policy & Government Partnerships",

    category: "governance",

    sla: "Institutional alignment with regional skill development authorities",

    description:
      "Formal partnerships with all stakeholders, including governments and policy bodies.",
  },

  {
    number: "21",

    title: "World's Largest Workspace",

    category: "governance",

    sla: "GOAL: TO BECOME THE WORLD'S LARGEST WORKSPACE ECOSYSTEM",

    description: "GOAL: TO BECOME THE WORLD'S LARGEST WORKSPACE ECOSYSTEM.",

    isGoal: true,
  },
]

export const categories = [
  { id: "all", label: "ALL 21 FOOTPRINTS", count: 21 },

  { id: "youth", label: "YOUTH & LIVELIHOOD", count: 5 },

  { id: "education", label: "EDUCATION & DIVERSITY", count: 5 },

  { id: "tech", label: "TECH & SUSTAINABILITY", count: 5 },

  { id: "governance", label: "GOVERNANCE & GOALS", count: 6 },
]

export const smartStaffingPillars = [
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
