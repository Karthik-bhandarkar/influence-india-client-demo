export interface AccordionItem {
  id: string | number

  title: string

  badge: string

  claim: string

  image: string

  alt: string

  stamp?: string
}

export const INFLUENCE_REASONS: AccordionItem[] = [
  {
    id: 1,

    title: "One point of contact",

    badge: "01",

    claim:
      "No more chasing multiple vendors. One dedicated team manages sourcing, training, deployment and replacement end to end.",

    image: "/images/workplace-team.jpg",

    alt: "Single point of contact workforce team collaborating",
  },

  {
    id: 2,

    title: "Full workforce visibility",

    badge: "02",

    claim:
      "Transparent, data-driven recruitment with real-time monitoring and proactive updates before issues become gaps.",

    image: "/images/operations-command.jpg",

    alt: "Live DOS attendance and operations command telemetry",
  },

  {
    id: 3,

    title: "Compliance you can trust",

    badge: "03",

    claim:
      "Trained, verified and certified employees — background checks and police verification (PVC) completed before deployment.",

    stamp: "PVC VERIFIED · 100% COMPLIANT",

    image: "/images/skill-certification.jpg",

    alt: "Statutory vetting and certified workforce aspirants",
  },

  {
    id: 4,

    title: "Flat, transparent pricing",

    badge: "04",

    claim:
      "Sector-friendly pricing and zero capital expenditure, for a financially advantageous skilled working solution.",

    image: "/images/corporate-interview.jpg",

    alt: "Flat fee predictable enterprise staffing planning",
  },

  {
    id: 5,

    title: "Fast replacement resolution",

    badge: "05",

    claim:
      "Assistance for streamlined staffing, managing and replacement — so an absence never becomes an outage.",

    image: "/images/team-training.jpg",

    alt: "Rapid standby turnaround and shift backup deployment",
  },
]
