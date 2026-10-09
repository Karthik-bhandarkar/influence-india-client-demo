export const gtcCommitments = [
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

export const stories = [
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

export interface Role {
  num: string

  title: string

  dept: "hr" | "finance" | "operations" | "tech"

  type: string

  exp: string

  desc: string
}

export const openRoles: Role[] = [
  {
    num: "01",

    title: "HR EXECUTIVE",

    dept: "hr",

    type: "FULL TIME",

    exp: "FRESHER / 1–3 YEARS",

    desc: "Talent acquisition, candidate documentation, and background verification management for corporate deployment.",
  },

  {
    num: "02",

    title: "ACCOUNTING STAFF",

    dept: "finance",

    type: "FULL TIME",

    exp: "FRESHER / 1–3 YEARS",

    desc: "Payroll ledger management, statutory EPF/ESI compliances, client invoicing and vendor balance reconciliation.",
  },

  {
    num: "03",

    title: "FIELD EXECUTIVE",

    dept: "operations",

    type: "FULL TIME",

    exp: "FRESHER / 1–3 YEARS",

    desc: "On-ground corridor inspections, attendance audits, biometric supervisor support and workforce coordination.",
  },

  {
    num: "04",

    title: "TEAM LEAD",

    dept: "operations",

    type: "FULL TIME",

    exp: "1–3 YEARS",

    desc: "Floor supervision, daily roster planning, SLA compliance oversight and real-time shift handover.",
  },

  {
    num: "05",

    title: "MIS BACK-END STAFF",

    dept: "tech",

    type: "FULL TIME",

    exp: "FRESHER / 1–3 YEARS",

    desc: "Data entry, roster analytics, telemetry reporting and automated attendance tracking on central DOS.",
  },

  {
    num: "06",

    title: "SYSTEM OPERATOR",

    dept: "tech",

    type: "FULL TIME",

    exp: "FRESHER / 1–3 YEARS",

    desc: "Hardware & biometric scanner setup, network telemetry sync, portal user permissions and field device troubleshooting.",
  },

  {
    num: "07",

    title: "OPERATIONS MANAGER",

    dept: "hr",

    type: "FULL TIME",

    exp: "1–3 YEARS",

    desc: "End-to-end client engagement, P&L management for workforce accounts, escalation management and growth planning.",
  },
]

const departments = [
  { id: "all", label: "ALL ROLES", count: 7 },

  { id: "operations", label: "OPERATIONS & FIELD", count: 2 },

  { id: "hr", label: "HR & MANAGEMENT", count: 2 },

  { id: "finance", label: "FINANCE & ACCOUNTS", count: 1 },

  { id: "tech", label: "TECH & MIS", count: 2 },
]
