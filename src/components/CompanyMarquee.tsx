import { useMemo } from "react"

import { MARQUEE_LOGOS } from "../data/marqueeLogos"

export default function CompanyMarquee() {
  // Distribute the 167 unique client & institutional logos across two smooth scrolling rows

  const { row1, row2 } = useMemo(() => {
    const half = Math.ceil(MARQUEE_LOGOS.length / 2)

    return {
      row1: MARQUEE_LOGOS.slice(0, half),

      row2: MARQUEE_LOGOS.slice(half),
    }
  }, [])

  return (
    <section
      className="company-marquee-section"
      aria-label="Enterprise clients and institutional partners"
    >
      <div className="container">
        <div className="company-marquee-header">
          <span className="marquee-eyebrow">
            <span className="marquee-dot" />
            <span>TRUSTED WORKFORCE DEPLOYMENT PARTNER</span>
          </span>
          <h2 className="marquee-heading">
            Trusted by India’s leading enterprise &amp; industry teams.
          </h2>
          <p className="marquee-sub">
            Empowering 250+ enterprise workplaces &amp; institutions across
            India with managed staffing &amp; verified operations
          </p>
        </div>
      </div>

      <div className="company-marquee-wrap">
        <div
          className="company-marquee-fade company-marquee-fade--left"
          aria-hidden="true"
        />
        <div
          className="company-marquee-fade company-marquee-fade--right"
          aria-hidden="true"
        />

        {/* Row 1: Scrolling Left */}
        <div className="company-marquee-track company-marquee-track--left company-marquee-track--row1">
          {row1.concat(row1).map((item, idx) => (
            <div
              key={`r1-${idx}`}
              className="partner-logo-card"
              title={item.alt}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="partner-logo-img"
              />
            </div>
          ))}
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="company-marquee-track company-marquee-track--right company-marquee-track--row2 company-marquee-track--reverse">
          {row2.concat(row2).map((item, idx) => (
            <div
              key={`r2-${idx}`}
              className="partner-logo-card"
              title={item.alt}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="partner-logo-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
