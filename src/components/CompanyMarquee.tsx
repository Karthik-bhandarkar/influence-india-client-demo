export default function CompanyMarquee() {
  const companies = [
    {
      name: "Tata Group",
      logo: (
        <svg
          viewBox="0 0 130 32"
          className="company-logo-svg"
          aria-label="Tata logo"
        >
          <g transform="translate(4, 2)">
            {/* Iconic TATA Oval Emblem */}
            <ellipse cx="14" cy="14" rx="13" ry="11.5" fill="#005699" />
            <path
              d="M8.5 20.5 C8.5 13 11 9.5 14 8 C17 9.5 19.5 13 19.5 20.5 M11.5 12 C12.8 10.8 14 10.5 14 10.5 C14 10.5 15.2 10.8 16.5 12"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 8.5 V18.5"
              stroke="#ffffff"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </g>
          <text
            x="38"
            y="21"
            fill="#005699"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="14.5"
            fontWeight="800"
            letterSpacing="0.22em"
          >
            TATA
          </text>
        </svg>
      ),
    },
    {
      name: "HDFC Bank",
      logo: (
        <svg
          viewBox="0 0 145 32"
          className="company-logo-svg"
          aria-label="HDFC Bank logo"
        >
          <g transform="translate(4, 3)">
            {/* Official HDFC Interlocking Square */}
            <rect x="0" y="0" width="26" height="26" rx="2" fill="#004c8f" />
            <rect x="5.5" y="5.5" width="15" height="15" fill="#ffffff" />
            <rect x="9" y="9" width="8" height="8" fill="#ed232a" />
            <path
              d="M0 11.5h5.5v3H0zM20.5 11.5h5.5v3h-5.5zM11.5 0h3v5.5h-3zM11.5 20.5h3v5.5h-3z"
              fill="#ffffff"
            />
          </g>
          <text
            x="37"
            y="17"
            fill="#004c8f"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="12.5"
            fontWeight="900"
            letterSpacing="0.06em"
          >
            HDFC BANK
          </text>
          <text
            x="37.5"
            y="25.5"
            fill="#ed232a"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="6.8"
            fontWeight="700"
            letterSpacing="0.12em"
          >
            WE UNDERSTAND YOUR WORLD
          </text>
        </svg>
      ),
    },
    {
      name: "Mahindra",
      logo: (
        <svg
          viewBox="0 0 145 32"
          className="company-logo-svg"
          aria-label="Mahindra logo"
        >
          <g transform="translate(4, 4)">
            {/* Authentic Mahindra Twin Peaks Emblem */}
            <path d="M1 18 L7 6 L12 15 L8 23 Z" fill="#e31837" />
            <path d="M13 15 L18 6 L24 18 L17 23 Z" fill="#c10d28" />
            <path
              d="M12 15 L7 6 L10 6 L14.5 13.5 Z"
              fill="#ff3b59"
              opacity="0.8"
            />
          </g>
          <text
            x="34"
            y="21"
            fill="#e31837"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="15.5"
            fontWeight="900"
            letterSpacing="0.04em"
          >
            Mahindra
          </text>
        </svg>
      ),
    },
    {
      name: "Wipro",
      logo: (
        <svg
          viewBox="0 0 135 32"
          className="company-logo-svg"
          aria-label="Wipro logo"
        >
          <g transform="translate(4, 5)">
            {/* Official Wipro Multi-Color Connected Dot Constellation */}
            <circle cx="5" cy="11" r="2.8" fill="#7c2582" />
            <circle cx="10" cy="5" r="2.4" fill="#0072ce" />
            <circle cx="12" cy="16" r="2.6" fill="#78be20" />
            <circle cx="18" cy="8" r="3.2" fill="#f08000" />
            <circle cx="19" cy="15" r="2.2" fill="#e4002b" />
            <circle cx="2" cy="6" r="1.8" fill="#00a3e0" />
            <circle cx="8" cy="19" r="1.9" fill="#ffd100" />
          </g>
          <text
            x="32"
            y="21"
            fill="#2b2b2a"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="17"
            fontWeight="700"
            letterSpacing="-0.03em"
          >
            wipro
          </text>
          <circle cx="85" cy="10" r="1.6" fill="#78be20" />
        </svg>
      ),
    },
    {
      name: "Infosys",
      logo: (
        <svg
          viewBox="0 0 130 32"
          className="company-logo-svg"
          aria-label="Infosys logo"
        >
          <g transform="translate(4, 4)">
            <text
              x="2"
              y="18"
              fill="#007cc3"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="18.5"
              fontWeight="700"
              letterSpacing="-0.03em"
            >
              Infosys
            </text>
            <path
              d="M71 6.5 C73 4.5 76 5 78 7"
              fill="none"
              stroke="#007cc3"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "Larsen & Toubro",
      logo: (
        <svg
          viewBox="0 0 145 32"
          className="company-logo-svg"
          aria-label="L&T logo"
        >
          <g transform="translate(4, 3)">
            {/* Authentic L&T Blue Industrial Seal */}
            <circle cx="13" cy="13" r="12.5" fill="#003876" />
            <circle
              cx="13"
              cy="13"
              r="10.8"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1"
            />
            <text
              x="13"
              y="17"
              textAnchor="middle"
              fill="#ffffff"
              fontFamily="Georgia, serif"
              fontSize="11"
              fontWeight="900"
              fontStyle="italic"
            >
              L&amp;T
            </text>
          </g>
          <text
            x="36"
            y="21"
            fill="#003876"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="14"
            fontWeight="900"
            letterSpacing="0.08em"
          >
            LARSEN &amp; TOUBRO
          </text>
        </svg>
      ),
    },
    {
      name: "Reliance Industries",
      logo: (
        <svg
          viewBox="0 0 150 32"
          className="company-logo-svg"
          aria-label="Reliance logo"
        >
          <g transform="translate(4, 3)">
            {/* Authentic Reliance Emblem */}
            <rect x="0" y="0" width="26" height="26" rx="4" fill="#0b3a75" />
            <path
              d="M7 6 h7 c3 0 5 1.5 5 4 c0 2.2 -1.5 3.5 -3.5 3.8 l4.5 6.2 h-3.5 l-4 -5.5 h-2.5 v5.5 h-3 z M10 8.5 v3.5 h4 c1.5 0 2.5 -0.7 2.5 -1.8 c0 -1.1 -1 -1.7 -2.5 -1.7 z"
              fill="#ffffff"
            />
            <circle cx="21" cy="5" r="3" fill="#ed232a" />
          </g>
          <text
            x="36"
            y="17"
            fill="#0b3a75"
            fontFamily="Georgia, serif"
            fontSize="13.5"
            fontWeight="700"
            letterSpacing="0.04em"
          >
            Reliance
          </text>
          <text
            x="36.5"
            y="25"
            fill="#555d50"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="7"
            fontWeight="700"
            letterSpacing="0.14em"
          >
            INDUSTRIES LIMITED
          </text>
        </svg>
      ),
    },
    {
      name: "State Bank of India",
      logo: (
        <svg
          viewBox="0 0 145 32"
          className="company-logo-svg"
          aria-label="State Bank of India logo"
        >
          <g transform="translate(4, 3)">
            {/* Iconic SBI Keyhole Circle */}
            <circle cx="13" cy="13" r="12" fill="#280071" />
            <circle cx="13" cy="13" r="4.2" fill="#ffffff" />
            <rect x="11.2" y="13" width="3.6" height="12" fill="#ffffff" />
          </g>
          <text
            x="36"
            y="17"
            fill="#280071"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="12.5"
            fontWeight="900"
            letterSpacing="0.06em"
          >
            STATE BANK OF INDIA
          </text>
          <text
            x="36.5"
            y="25"
            fill="#00a8ca"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="6.8"
            fontWeight="700"
            letterSpacing="0.14em"
          >
            THE BANKER TO EVERY INDIAN
          </text>
        </svg>
      ),
    },
    {
      name: "ICICI Bank",
      logo: (
        <svg
          viewBox="0 0 140 32"
          className="company-logo-svg"
          aria-label="ICICI Bank logo"
        >
          <g transform="translate(4, 3)">
            {/* Authentic ICICI Orange/Maroon Flame Globe */}
            <circle cx="13" cy="13" r="12" fill="#b82928" />
            <path
              d="M13 3 C17 3 22 7 22 13 C22 19 17 23 13 23 C9 23 4 19 4 13 C4 9 7 5 11 3.5"
              fill="none"
              stroke="#f37021"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M13 8 v10 M13 6 a1 1 0 1 0 0 -2 a1 1 0 0 0 0 2"
              stroke="#ffffff"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </g>
          <text
            x="35"
            y="17"
            fill="#b82928"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="13.5"
            fontWeight="900"
            letterSpacing="0.03em"
          >
            ICICI Bank
          </text>
          <text
            x="35.5"
            y="25"
            fill="#f37021"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="7"
            fontWeight="700"
            letterSpacing="0.12em"
          >
            HUM HAI NA
          </text>
        </svg>
      ),
    },
    {
      name: "Bharti Airtel",
      logo: (
        <svg
          viewBox="0 0 130 32"
          className="company-logo-svg"
          aria-label="Airtel logo"
        >
          <g transform="translate(4, 3)">
            {/* Authentic Airtel Red Ribbon 'a' */}
            <path
              d="M13 2 A11 11 0 1 1 5 20 C7 16 11 15 15 15 C19 15 21 17 21 20"
              fill="none"
              stroke="#e40000"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="13" cy="13" r="3.5" fill="#e40000" />
          </g>
          <text
            x="35"
            y="21"
            fill="#e40000"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="17"
            fontWeight="700"
            letterSpacing="-0.04em"
          >
            airtel
          </text>
        </svg>
      ),
    },
    {
      name: "Flipkart",
      logo: (
        <svg
          viewBox="0 0 135 32"
          className="company-logo-svg"
          aria-label="Flipkart logo"
        >
          <g transform="translate(4, 3)">
            {/* Authentic Flipkart Yellow/Blue Bag */}
            <rect x="0" y="3" width="24" height="22" rx="4" fill="#2874f0" />
            <path
              d="M7 3 V0 C7 0 17 0 17 3"
              fill="none"
              stroke="#ffe11b"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M7 8 h10 M7 13 h6 M7 8 v12"
              stroke="#ffe11b"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 11 l2.5-3"
              stroke="#ffffff"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </g>
          <text
            x="35"
            y="21"
            fill="#2874f0"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="15.5"
            fontWeight="900"
            fontStyle="italic"
            letterSpacing="-0.02em"
          >
            Flipkart
          </text>
          <circle cx="102" cy="12" r="2.5" fill="#ffe11b" />
        </svg>
      ),
    },
    {
      name: "Amazon India",
      logo: (
        <svg
          viewBox="0 0 135 32"
          className="company-logo-svg"
          aria-label="Amazon logo"
        >
          <g transform="translate(4, 5)">
            <text
              x="0"
              y="15"
              fill="#131921"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="17"
              fontWeight="900"
              letterSpacing="-0.03em"
            >
              amazon
            </text>
            {/* Official Amazon curved smile arrow */}
            <path
              d="M4 19 C24 25 50 24 64 16"
              fill="none"
              stroke="#ff9900"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M60 14.5 L65.5 16 L63 20.5"
              fill="#ff9900"
              stroke="#ff9900"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "ITC Limited",
      logo: (
        <svg
          viewBox="0 0 135 32"
          className="company-logo-svg"
          aria-label="ITC logo"
        >
          <g transform="translate(4, 3)">
            {/* Iconic Triangular ITC Monogram */}
            <path
              d="M13 2 L25 24 L1 24 Z"
              fill="none"
              stroke="#003366"
              strokeWidth="2.4"
              strokeLinejoin="round"
            />
            <text
              x="13"
              y="21"
              textAnchor="middle"
              fill="#003366"
              fontFamily="Georgia, serif"
              fontSize="9.5"
              fontWeight="900"
            >
              ITC
            </text>
          </g>
          <text
            x="35"
            y="20.5"
            fill="#003366"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="14.5"
            fontWeight="900"
            letterSpacing="0.1em"
          >
            ITC LIMITED
          </text>
        </svg>
      ),
    },
    {
      name: "Zomato",
      logo: (
        <svg
          viewBox="0 0 130 32"
          className="company-logo-svg"
          aria-label="Zomato logo"
        >
          <g transform="translate(4, 4)">
            <text
              x="2"
              y="18.5"
              fill="#cb202d"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="20"
              fontWeight="900"
              fontStyle="italic"
              letterSpacing="-0.04em"
            >
              zomato
            </text>
          </g>
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
          <h2 className="marquee-heading">
            Trusted by India’s leading enterprise &amp; industry teams.
          </h2>
          <p className="marquee-sub">
            Deploying managed, certified staffing operations across 250+ enterprise workplaces nationwide
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
              className="company-logo-item"
              title={c.name}
              aria-label={c.name}
            >
              {c.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
