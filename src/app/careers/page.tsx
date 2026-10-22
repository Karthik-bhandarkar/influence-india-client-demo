import type { Metadata } from "next"
import CareersPage from "@/pages/CareersPage"

export const metadata: Metadata = {
  title:
    "Free Skill Training (OSTP) & Direct Job Placements in Bengaluru & India | Zero Joining Fee",
  description:
    "Apply for certified corporate, logistics, hospitality, retail, and facility management jobs across 250+ enterprises in Bengaluru and 30+ cities. 100% free OSTP training, zero joining fee, guaranteed EPF & medical cover.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://influenceindiaservices.com/careers",
    siteName: "Influence India Services",
    title:
      "Free Skill Training (OSTP) & Direct Job Placements in Bengaluru & India | Zero Joining Fee",
    description:
      "Apply for certified corporate, logistics, hospitality, retail, and facility management jobs across 250+ enterprises in Bengaluru and 30+ cities. 100% free OSTP training, zero joining fee, guaranteed EPF & medical cover.",
    images: [
      {
        url: "https://influenceindiaservices.com/images/corporate-interview.jpg",
        width: 1800,
        height: 1000,
        alt: "Careers and OSTP Skill Training at Influence India Services",
      },
    ],
  },
}

export default function Page() {
  return <CareersPage />
}
