import type { Metadata } from "next"
import type { ReactNode } from "react"
import SeoSchema from "@/components/SeoSchema"

export const metadata: Metadata = {
  metadataBase: new URL("https://influenceindiaservices.com"),
  title: {
    default:
      "Influence India Services | Contract Staffing, Managed Workforce & OSTP Job Placement in Bengaluru & PAN-India",
    template: "%s | Influence India Services (Bengaluru HQ)",
  },
  description:
    "Trusted single-vendor contract staffing & managed workforce partner in Bengaluru (560061) & across 30+ Indian cities. 100% PF/ESIC/CLRA compliance, Onsite Skill Training (OSTP), <4hr replacement SLA for enterprises, and zero-fee trained job placements for aspirants.",
  keywords: [
    // B2B High-Intent Enterprise & Staffing Models
    "contract staffing company in Bengaluru",
    "managed workforce deployment India",
    "third party payroll outsourcing Bangalore",
    "temp staffing and bulk manpower agency",
    "single vendor staffing SLA India",
    "turnkey workforce management solutions",
    "zero capex contract staffing",
    "train and deploy staffing agency",
    // B2B Statutory Compliance & Operational Technology
    "100% statutory compliance staffing EPF ESIC LWF CLRA",
    "police verification PVC vetted manpower supply",
    "Onsite Skill Training Program OSTP",
    "Dedicated Operation System DOS biometric attendance",
    "emergency standby replacement staffing Bangalore",
    // B2B Sector-Specific & Bengaluru Industrial Corridors
    "warehouse and logistics manpower supplier Bengaluru",
    "integrated facility management IFM staffing Bangalore",
    "manufacturing and production contract labour Peenya Bommasandra",
    "IT and corporate staffing Whitefield Electronic City",
    "hospitality retail and BFSI staffing agency India",
    // B2C Job Seeker & Aspirant High-Volume Searches
    "fresher jobs with free training in Bengaluru",
    "direct joining jobs in Bangalore without consultancy fee",
    "zero fee job placement agency Karnataka",
    "jobs with PF ESIC and medical cover in Bangalore",
    "walk-in interview jobs in Banashankari Arehalli Bengaluru",
    "warehouse logistics and corporate jobs for freshers",
    "12th pass ITI and graduate jobs with skill certification",
    // Brand & Hyper-Local HQ
    "Influence India Services Bengaluru 560061",
    "Grow Together Policy GTP careers",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://influenceindiaservices.com",
    siteName: "Influence India Services",
    title:
      "Influence India Services | Contract Staffing, Managed Workforce & OSTP Job Placement in Bengaluru & PAN-India",
    description:
      "Trusted single-vendor contract staffing & managed workforce partner in Bengaluru (560061) & across 30+ Indian cities. 100% PF/ESIC/CLRA compliance, Onsite Skill Training (OSTP), <4hr replacement SLA for enterprises, and zero-fee trained job placements for aspirants.",
    images: [
      {
        url: "https://influenceindiaservices.com/images/workplace-team.jpg",
        width: 1800,
        height: 1012,
        alt: "Influence India Services Workforce Operations and Onboarding in Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Influence India Services | Contract Staffing, Managed Workforce & OSTP Job Placement in Bengaluru & PAN-India",
    description:
      "Trusted single-vendor contract staffing & managed workforce partner in Bengaluru (560061) & across 30+ Indian cities. 100% PF/ESIC/CLRA compliance, Onsite Skill Training (OSTP), <4hr replacement SLA for enterprises, and zero-fee trained job placements for aspirants.",
    images: ["https://influenceindiaservices.com/images/workplace-team.jpg"],
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Arehalli, Banashankari, Bengaluru, Karnataka",
    "geo.position": "12.9081;77.5398",
    ICBM: "12.9081, 77.5398",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <SeoSchema />
      </head>
      <body>{children}</body>
    </html>
  )
}
