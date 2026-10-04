export default function CompanyMarquee() {
  const companies = [
    {
      name: "Tata Group",
      sector: "Enterprise & IT",
      logo: (
        <svg
          viewBox="0 0 120 32"
          className="company-logo-svg"
          aria-label="Tata logo"
        >
          <circle
            cx="16"
            cy="16"
            r="13"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <path
            d="M10 11h12M16 11v11"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <text
            x="36"
            y="21"
            fontFamily="var(--font-display)"
            fontSize="14"
            fontWeight="800"
            letterSpacing="0.18em"
            fill="currentColor"
          >
            TATA
          </text>
        </svg>
      ),
    },
    {
      name: "Infosys",
      sector: "Digital & Tech",
      logo: (
        <svg
          viewBox="0 0 120 32"
          className="company-logo-svg"
          aria-label="Infosys logo"
        >
          <path
            d="M12 9c-3 0-5 2-5 5s2 5 5 5c4 0 7-3 7-7s-3-5-7-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <text
            x="28"
            y="21"
            fontFamily="var(--font-sans)"
            fontSize="15"
            fontWeight="700"
            letterSpacing="0.04em"
            fill="currentColor"
          >
            Infosys
          </text>
        </svg>
      ),
    },
    {
      name: "Reliance",
      sector: "Industries & Retail",
      logo: (
        <svg
          viewBox="0 0 130 32"
          className="company-logo-svg"
          aria-label="Reliance logo"
        >
          <rect
            x="6"
            y="7"
            width="18"
            height="18"
            rx="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path
            d="M11 11h8M11 16h6M11 21h8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <text
            x="32"
            y="21"
            fontFamily="var(--font-display)"
            fontSize="13"
            fontWeight="800"
            letterSpacing="0.12em"
            fill="currentColor"
          >
            RELIANCE
          </text>
        </svg>
      ),
    },
    {
      name: "HDFC Group",
      sector: "Financial Services",
      logo: (
        <svg
          viewBox="0 0 120 32"
          className="company-logo-svg"
          aria-label="HDFC logo"
        >
          <rect
            x="8"
            y="7"
            width="18"
            height="18"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path d="M12 12h10v8H12z" fill="currentColor" opacity="0.3" />
          <path d="M14 7v18M8 16h18" stroke="currentColor" strokeWidth="1.8" />
          <text
            x="34"
            y="21"
            fontFamily="var(--font-display)"
            fontSize="14"
            fontWeight="800"
            letterSpacing="0.12em"
            fill="currentColor"
          >
            HDFC
          </text>
        </svg>
      ),
    },
    {
      name: "Mahindra",
      sector: "Logistics & Auto",
      logo: (
        <svg
          viewBox="0 0 135 32"
          className="company-logo-svg"
          aria-label="Mahindra logo"
        >
          <path
            d="M6 21l8-14 8 14M10 16h8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="32"
            y="21"
            fontFamily="var(--font-display)"
            fontSize="13"
            fontWeight="800"
            letterSpacing="0.08em"
            fill="currentColor"
          >
            MAHINDRA
          </text>
        </svg>
      ),
    },
    {
      name: "Wipro",
      sector: "IT & Consulting",
      logo: (
        <svg
          viewBox="0 0 120 32"
          className="company-logo-svg"
          aria-label="Wipro logo"
        >
          <circle cx="10" cy="16" r="3" fill="currentColor" />
          <circle cx="18" cy="11" r="2.5" fill="currentColor" />
          <circle cx="18" cy="21" r="2.5" fill="currentColor" />
          <circle cx="26" cy="16" r="2" fill="currentColor" />
          <text
            x="36"
            y="21"
            fontFamily="var(--font-sans)"
            fontSize="15"
            fontWeight="800"
            letterSpacing="0.06em"
            fill="currentColor"
          >
            wipro
          </text>
        </svg>
      ),
    },
    {
      name: "Larsen & Toubro",
      sector: "Infrastructure & Heavy",
      logo: (
        <svg
          viewBox="0 0 120 32"
          className="company-logo-svg"
          aria-label="L&T logo"
        >
          <polygon
            points="17,6 27,12 27,24 17,30 7,24 7,12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <text
            x="11"
            y="21"
            fontFamily="var(--font-display)"
            fontSize="10"
            fontWeight="900"
            fill="currentColor"
          >
            LT
          </text>
          <text
            x="35"
            y="21"
            fontFamily="var(--font-display)"
            fontSize="14"
            fontWeight="800"
            letterSpacing="0.14em"
            fill="currentColor"
          >
            L&amp;T
          </text>
        </svg>
      ),
    },
    {
      name: "Flipkart",
      sector: "E-Commerce Supply",
      logo: (
        <svg
          viewBox="0 0 125 32"
          className="company-logo-svg"
          aria-label="Flipkart logo"
        >
          <path
            d="M8 8h8l2 15H10L8 8z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 5v3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <text
            x="28"
            y="21"
            fontFamily="var(--font-sans)"
            fontSize="14"
            fontWeight="800"
            fontStyle="italic"
            letterSpacing="0.02em"
            fill="currentColor"
          >
            Flipkart
          </text>
        </svg>
      ),
    },
    {
      name: "Delhivery",
      sector: "Supply Chain & Express",
      logo: (
        <svg
          viewBox="0 0 140 32"
          className="company-logo-svg"
          aria-label="Delhivery logo"
        >
          <rect
            x="6"
            y="8"
            width="16"
            height="16"
            rx="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path
            d="M11 16h6l-2-3M15 16l-2 3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="30"
            y="21"
            fontFamily="var(--font-display)"
            fontSize="12"
            fontWeight="900"
            letterSpacing="0.14em"
            fill="currentColor"
          >
            DELHIVERY
          </text>
        </svg>
      ),
    },
    {
      name: "Apollo Health",
      sector: "Healthcare Support",
      logo: (
        <svg
          viewBox="0 0 125 32"
          className="company-logo-svg"
          aria-label="Apollo logo"
        >
          <path
            d="M16 6v20M6 16h20"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle
            cx="16"
            cy="16"
            r="11"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeDasharray="3 2"
          />
          <text
            x="34"
            y="21"
            fontFamily="var(--font-display)"
            fontSize="13"
            fontWeight="800"
            letterSpacing="0.1em"
            fill="currentColor"
          >
            APOLLO
          </text>
        </svg>
      ),
    },
    {
      name: "Titan",
      sector: "Retail & Manufacturing",
      logo: (
        <svg
          viewBox="0 0 120 32"
          className="company-logo-svg"
          aria-label="Titan logo"
        >
          <circle
            cx="15"
            cy="16"
            r="11"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M15 9v14M10 9h10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <text
            x="34"
            y="21"
            fontFamily="var(--font-display)"
            fontSize="13"
            fontWeight="800"
            letterSpacing="0.16em"
            fill="currentColor"
          >
            TITAN
          </text>
        </svg>
      ),
    },
    {
      name: "Amazon India",
      sector: "Fulfillment & Operations",
      logo: (
        <svg
          viewBox="0 0 130 32"
          className="company-logo-svg"
          aria-label="Amazon logo"
        >
          <text
            x="6"
            y="19"
            fontFamily="var(--font-sans)"
            fontSize="15"
            fontWeight="800"
            letterSpacing="-0.02em"
            fill="currentColor"
          >
            amazon
          </text>
          <path
            d="M8 23c14 4 38 4 50-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M57 20l2 2-2 2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ]

  return (
    <section
      className="company-marquee-section"
      aria-label="Enterprise clients and deployment partners"
    >
      <div className="container">
        <div className="company-marquee-header">
          <span className="marquee-eyebrow">
            <span className="marquee-dot" />
            <span>TRUSTED WORKFORCE DEPLOYMENT PARTNER</span>
          </span>
          <p className="marquee-sub">
            Empowering 250+ enterprise workplaces across India with managed
            staffing &amp; verified operations
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

        <div className="company-marquee-track">
          {companies.concat(companies).map((c, idx) => (
            <div
              key={idx}
              className="company-card-pill"
              title={`${c.name} — ${c.sector}`}
            >
              <div className="company-logo-inner">{c.logo}</div>
              <span className="company-sector-tag">{c.sector}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
