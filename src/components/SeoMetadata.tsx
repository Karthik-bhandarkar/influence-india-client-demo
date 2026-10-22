import { useEffect, type FC } from "react"
import { type ActiveView } from "../App"

interface SeoMetadataProps {
  activeView: ActiveView
}

const titles: Record<ActiveView, string> = {
  home: "Influence India Services | Contract Staffing, Managed Workforce & OSTP Job Placement in Bengaluru & PAN-India",
  about: "About Us | Influence India Services (Bengaluru HQ)",
  gtp: "Grow Together Policy (GTP) | Influence India Services (Bengaluru HQ)",
  systems: "Systems & Dedicated Operation System (DOS) | Influence India Services (Bengaluru HQ)",
  careers: "Free Skill Training (OSTP) & Direct Job Placements in Bengaluru & India | Zero Joining Fee",
  resources: "Resources & Workforce Insights | Influence India Services (Bengaluru HQ)",
  contact: "Contact Us & Bengaluru HQ | Influence India Services (Bengaluru HQ)",
}

const descriptions: Record<ActiveView, string> = {
  home: "Trusted single-vendor contract staffing & managed workforce partner in Bengaluru (560061) & across 30+ Indian cities. 100% PF/ESIC/CLRA compliance, Onsite Skill Training (OSTP), <4hr replacement SLA for enterprises, and zero-fee trained job placements for aspirants.",
  careers: "Apply for certified corporate, logistics, hospitality, retail, and facility management jobs across 250+ enterprises in Bengaluru and 30+ cities. 100% free OSTP training, zero joining fee, guaranteed EPF & medical cover.",
  about: "Learn about Influence India Services, headquartered in Bengaluru. Transforming workforce deployment with 100% statutory compliance, 30+ regional hubs, and OSTP training.",
  gtp: "Influence India Services Grow Together Policy (GTP): internal career mobility, zero deduction policy, and workforce development.",
  systems: "Dedicated Operation System (DOS): biometric attendance, real-time live telemetry, and <4hr replacement SLA for enterprise staffing.",
  resources: "Workforce insights, compliance guides, CLRA updates, and operational research by Influence India Services.",
  contact: "Get in touch with Influence India Services Bengaluru HQ in Arehalli, Banashankari (560061). Enterprise staffing inquiries and candidate onboarding.",
}

export const SeoMetadata: FC<SeoMetadataProps> = ({ activeView }) => {
  useEffect(() => {
    const title = titles[activeView] || titles.home
    const desc = descriptions[activeView] || descriptions.home

    document.title = title

    let metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute("content", desc)
    }

    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute("content", title)
    }

    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) {
      ogDesc.setAttribute("content", desc)
    }

    let twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) {
      twitterTitle.setAttribute("content", title)
    }

    let twitterDesc = document.querySelector('meta[name="twitter:description"]')
    if (twitterDesc) {
      twitterDesc.setAttribute("content", desc)
    }

    // Canonical tag update
    let canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      const url = activeView === "home" 
        ? "https://influenceindiaservices.com/" 
        : `https://influenceindiaservices.com/${activeView}`
      canonical.setAttribute("href", url)
    }
  }, [activeView])

  return null
}

export default SeoMetadata
