export default function CompanyMarquee() {
  // Row 1 (Right to Left): Iconic Tech, Banking & Industrial Conglomerates
  const row1Companies = [
    {
      name: "Tata Group",
      logo: (
        <svg
          viewBox="0 0 140 36"
          className="company-logo-svg"
          aria-label="Tata logo"
        >
          <g transform="translate(4, 4)">
            {/* Official Wolff Olins TATA Oval Emblem */}
            <ellipse cx="14" cy="14" rx="14" ry="12.5" fill="#005699" />
            <path
              d="M7.5 21 C7.5 13 10.5 9 14 7.5 C17.5 9 20.5 13 20.5 21"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M14 8 V19"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
          <text
            x="40"
            y="23"
            fill="#005699"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="16"
            fontWeight="800"
            letterSpacing="0.22em"
          >
            TATA
          </text>
        </svg>
      ),
    },
    {
      name: "Infosys",
      logo: (
        <svg
          viewBox="0 0 135 36"
          className="company-logo-svg"
          aria-label="Infosys logo"
        >
          <g transform="translate(4, 5)">
            <text
              x="2"
              y="20"
              fill="#007cc3"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="20"
              fontWeight="700"
              letterSpacing="-0.03em"
            >
              Infosys
            </text>
            {/* Official top wave curve */}
            <path
              d="M77 7 C79.5 4.5 83 5.5 85.5 8"
              fill="none"
              stroke="#007cc3"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "Wipro",
      logo: (
        <svg
          viewBox="0 0 145 36"
          className="company-logo-svg"
          aria-label="Wipro logo"
        >
          <g transform="translate(4, 6)">
            {/* Official Wipro Multi-Color Connected Dot Constellation */}
            <circle cx="5" cy="12" r="3.2" fill="#7c2582" />
            <circle cx="11" cy="5" r="2.7" fill="#0072ce" />
            <circle cx="13.5" cy="18" r="2.9" fill="#78be20" />
            <circle cx="20.5" cy="9" r="3.6" fill="#f08000" />
            <circle cx="21.5" cy="17" r="2.5" fill="#e4002b" />
            <circle cx="2" cy="6.5" r="2" fill="#00a3e0" />
            <circle cx="9" cy="21" r="2.2" fill="#ffd100" />
          </g>
          <text
            x="36"
            y="23"
            fill="#2b2b2a"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="18.5"
            fontWeight="700"
            letterSpacing="-0.03em"
          >
            wipro
          </text>
          <circle cx="94" cy="11" r="1.8" fill="#78be20" />
        </svg>
      ),
    },
    {
      name: "HDFC Bank",
      logo: (
        <svg
          viewBox="0 0 155 36"
          className="company-logo-svg"
          aria-label="HDFC Bank logo"
        >
          <g transform="translate(4, 4)">
            {/* Official HDFC Interlocking Square */}
            <rect x="0" y="0" width="28" height="28" rx="2" fill="#004c8f" />
            <rect x="6" y="6" width="16" height="16" fill="#ffffff" />
            <rect x="9.5" y="9.5" width="9" height="9" fill="#ed232a" />
            <path
              d="M0 12.5h6v3H0zM22 12.5h6v3h-6zM12.5 0h3v6h-3zM12.5 22h3v6h-3z"
              fill="#ffffff"
            />
          </g>
          <text
            x="40"
            y="18.5"
            fill="#004c8f"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="13.5"
            fontWeight="900"
            letterSpacing="0.06em"
          >
            HDFC BANK
          </text>
          <text
            x="40.5"
            y="28"
            fill="#ed232a"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="7.2"
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
          viewBox="0 0 155 36"
          className="company-logo-svg"
          aria-label="Mahindra logo"
        >
          <g transform="translate(4, 5)">
            {/* Official Modern Mahindra Twin Peaks Emblem */}
            <path d="M1 20 L7 6 L13 16 L9 25 Z" fill="#e31837" />
            <path d="M14 16 L20 6 L26 20 L18 25 Z" fill="#b80c23" />
            <path
              d="M13 16 L7 6 L11 6 L16 14.5 Z"
              fill="#ff4060"
              opacity="0.85"
            />
          </g>
          <text
            x="36"
            y="23"
            fill="#e31837"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="16.5"
            fontWeight="900"
            letterSpacing="0.04em"
          >
            Mahindra
          </text>
        </svg>
      ),
    },
    {
      name: "Larsen & Toubro",
      logo: (
        <svg
          viewBox="0 0 155 36"
          className="company-logo-svg"
          aria-label="L&T logo"
        >
          <g transform="translate(4, 4)">
            {/* Official L&T Industrial Circular Seal */}
            <circle cx="14" cy="14" r="14" fill="#003876" />
            <circle
              cx="14"
              cy="14"
              r="12.2"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.1"
            />
            <text
              x="14"
              y="18.5"
              textAnchor="middle"
              fill="#ffffff"
              fontFamily="Georgia, serif"
              fontSize="12"
              fontWeight="900"
              fontStyle="italic"
            >
              L&amp;T
            </text>
          </g>
          <text
            x="38"
            y="23"
            fill="#003876"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="15"
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
          viewBox="0 0 160 36"
          className="company-logo-svg"
          aria-label="Reliance logo"
        >
          <g transform="translate(4, 4)">
            {/* Official Reliance Emblem */}
            <rect x="0" y="0" width="28" height="28" rx="4" fill="#0b3a75" />
            <path
              d="M7 6 h8 c3.5 0 5.5 1.6 5.5 4.2 c0 2.4 -1.6 3.8 -4 4.2 l5 6.6 h-4 l-4.5 -6 h-2.5 v6 h-3.5 z M10.5 9 v4 h4.5 c1.8 0 2.8 -0.8 2.8 -2 c0 -1.2 -1 -2 -2.8 -2 z"
              fill="#ffffff"
            />
            <circle cx="23" cy="5.5" r="3.2" fill="#ed232a" />
          </g>
          <text
            x="38"
            y="18.5"
            fill="#0b3a75"
            fontFamily="Georgia, serif"
            fontSize="14.5"
            fontWeight="700"
            letterSpacing="0.04em"
          >
            Reliance
          </text>
          <text
            x="38.5"
            y="27.5"
            fill="#555d50"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="7.5"
            fontWeight="700"
            letterSpacing="0.14em"
          >
            INDUSTRIES LIMITED
          </text>
        </svg>
      ),
    },
    {
      name: "ICICI Bank",
      logo: (
        <svg
          viewBox="0 0 150 36"
          className="company-logo-svg"
          aria-label="ICICI Bank logo"
        >
          <g transform="translate(4, 4)">
            {/* Official ICICI Flame Globe */}
            <circle cx="14" cy="14" r="13.5" fill="#b82928" />
            <path
              d="M14 3 C19 3 24 7.5 24 14 C24 20.5 19 25 14 25 C9 25 4 20.5 4 14 C4 9.5 7.5 5 12 3.5"
              fill="none"
              stroke="#f37021"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
            <path
              d="M14 9 v11 M14 6.5 a1.2 1.2 0 1 0 0 -2.4 a1.2 1.2 0 0 0 0 2.4"
              stroke="#ffffff"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </g>
          <text
            x="38"
            y="19"
            fill="#b82928"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="14.5"
            fontWeight="900"
            letterSpacing="0.03em"
          >
            ICICI Bank
          </text>
          <text
            x="38.5"
            y="28"
            fill="#f37021"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="7.5"
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
          viewBox="0 0 140 36"
          className="company-logo-svg"
          aria-label="Airtel logo"
        >
          <g transform="translate(4, 4)">
            {/* Official Airtel Red Ribbon */}
            <path
              d="M14 2 A12 12 0 1 1 5 22 C7 17.5 11.5 16.5 16 16.5 C20.5 16.5 22.5 18.5 22.5 22"
              fill="none"
              stroke="#e40000"
              strokeWidth="4.2"
              strokeLinecap="round"
            />
            <circle cx="14" cy="14" r="3.8" fill="#e40000" />
          </g>
          <text
            x="38"
            y="23"
            fill="#e40000"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="18.5"
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
          viewBox="0 0 145 36"
          className="company-logo-svg"
          aria-label="Flipkart logo"
        >
          <g transform="translate(4, 4)">
            {/* Official Flipkart Shopping Bag */}
            <rect x="0" y="3.5" width="26" height="24" rx="4.5" fill="#2874f0" />
            <path
              d="M8 3.5 V0.5 C8 0.5 18 0.5 18 3.5"
              fill="none"
              stroke="#ffe11b"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M7.5 9 h11 M7.5 14.5 h6.5 M7.5 9 v13"
              stroke="#ffe11b"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 12 l3-3.5"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
          <text
            x="38"
            y="23"
            fill="#2874f0"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="17"
            fontWeight="900"
            fontStyle="italic"
            letterSpacing="-0.02em"
          >
            Flipkart
          </text>
          <circle cx="111" cy="13" r="2.8" fill="#ffe11b" />
        </svg>
      ),
    },
    {
      name: "Amazon India",
      logo: (
        <svg
          viewBox="0 0 145 36"
          className="company-logo-svg"
          aria-label="Amazon logo"
        >
          <g transform="translate(4, 6)">
            <text
              x="0"
              y="16"
              fill="#131921"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="18.5"
              fontWeight="900"
              letterSpacing="-0.03em"
            >
              amazon
            </text>
            {/* Official curved smile arrow */}
            <path
              d="M5 20.5 C27 27 54 26 68 17.5"
              fill="none"
              stroke="#ff9900"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <path
              d="M64 16 L70 17.5 L67.5 22.5"
              fill="#ff9900"
              stroke="#ff9900"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "Bosch India",
      logo: (
        <svg
          viewBox="0 0 145 36"
          className="company-logo-svg"
          aria-label="Bosch logo"
        >
          <g transform="translate(4, 4)">
            {/* Official Bosch Magnet Armature Symbol */}
            <circle
              cx="14"
              cy="14"
              r="13"
              fill="none"
              stroke="#ea1c24"
              strokeWidth="2.5"
            />
            <rect
              x="8.5"
              y="7.5"
              width="11"
              height="13"
              fill="none"
              stroke="#ea1c24"
              strokeWidth="2.2"
            />
            <path d="M8.5 14 h11" stroke="#ea1c24" strokeWidth="2.2" />
          </g>
          <text
            x="38"
            y="23"
            fill="#111315"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="17.5"
            fontWeight="900"
            letterSpacing="0.08em"
          >
            BOSCH
          </text>
        </svg>
      ),
    },
  ]

  // Row 2 (Left to Right): Bengaluru Healthcare, Luxury Hotels & Tech Employers
  const row2Companies = [
    {
      name: "Manipal Hospitals",
      logo: (
        <svg
          viewBox="0 0 165 36"
          className="company-logo-svg"
          aria-label="Manipal Hospitals logo"
        >
          <g transform="translate(4, 3)">
            {/* Official Teal Shield & Golden Nucleus */}
            <circle cx="15" cy="15" r="14" fill="#008080" />
            <path
              d="M15 6.5 v17 M6.5 15 h17"
              stroke="#ffffff"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <circle cx="15" cy="15" r="2.8" fill="#fdb813" />
          </g>
          <text
            x="38"
            y="18.5"
            fill="#005a70"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="14.5"
            fontWeight="900"
            letterSpacing="-0.01em"
          >
            Manipal
          </text>
          <text
            x="38.5"
            y="27.5"
            fill="#e35205"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="7.5"
            fontWeight="800"
            letterSpacing="0.14em"
          >
            HOSPITALS
          </text>
        </svg>
      ),
    },
    {
      name: "The Taj Hotels",
      logo: (
        <svg
          viewBox="0 0 155 36"
          className="company-logo-svg"
          aria-label="Taj Hotels logo"
        >
          <g transform="translate(4, 4)">
            {/* Official Regal Taj Dome Crest */}
            <path
              d="M14 2 C7.5 8.5 5.5 16 5.5 24 h17 C22.5 16 20.5 8.5 14 2 Z"
              fill="none"
              stroke="#a67c52"
              strokeWidth="2"
            />
            <path d="M14 5 v19 M8.5 19.5 h11" stroke="#a67c52" strokeWidth="1.3" />
            <circle cx="14" cy="2" r="1.6" fill="#a67c52" />
          </g>
          <text
            x="36"
            y="19"
            fill="#1b1c1e"
            fontFamily="Georgia, serif"
            fontSize="15"
            fontWeight="800"
            letterSpacing="0.22em"
          >
            TAJ
          </text>
          <text
            x="36.5"
            y="27.5"
            fill="#a67c52"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="7"
            fontWeight="700"
            letterSpacing="0.2em"
          >
            HOTELS &amp; PALACES
          </text>
        </svg>
      ),
    },
    {
      name: "Accenture",
      logo: (
        <svg
          viewBox="0 0 145 36"
          className="company-logo-svg"
          aria-label="Accenture logo"
        >
          <g transform="translate(4, 6)">
            <text
              x="0"
              y="18"
              fill="#000000"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="19"
              fontWeight="800"
              letterSpacing="-0.02em"
            >
              accenture
            </text>
            {/* Signature purple forward chevron floating above 't' */}
            <path
              d="M55 2 L60.5 6.5 L55 11"
              fill="none"
              stroke="#a100ff"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "The Leela Palace",
      logo: (
        <svg
          viewBox="0 0 160 36"
          className="company-logo-svg"
          aria-label="The Leela logo"
        >
          <g transform="translate(4, 4)">
            {/* The Leela Gold Crest */}
            <circle cx="14" cy="14" r="13" fill="#1c2536" />
            <path d="M14 5 l4.5 9 h-9 z M14 16 l4.5 7 h-9 z" fill="#c5a059" />
          </g>
          <text
            x="36"
            y="18.5"
            fill="#1c2536"
            fontFamily="Georgia, serif"
            fontSize="14"
            fontWeight="800"
            letterSpacing="0.18em"
          >
            THE LEELA
          </text>
          <text
            x="36.5"
            y="27.5"
            fill="#c5a059"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="7"
            fontWeight="700"
            letterSpacing="0.22em"
          >
            PALACES HOTELS RESORTS
          </text>
        </svg>
      ),
    },
    {
      name: "Narayana Health",
      logo: (
        <svg
          viewBox="0 0 165 36"
          className="company-logo-svg"
          aria-label="Narayana Health logo"
        >
          <g transform="translate(4, 4)">
            {/* Official Narayana Care Emblem */}
            <circle cx="14" cy="14" r="13" fill="#003366" />
            <path
              d="M7.5 15 C7.5 9.5 14 6.5 20.5 15 C14 23.5 7.5 20.5 7.5 15 Z"
              fill="#e65100"
            />
            <circle cx="14" cy="14" r="3.8" fill="#ffffff" />
          </g>
          <text
            x="38"
            y="18.5"
            fill="#003366"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="13.5"
            fontWeight="900"
            letterSpacing="0.04em"
          >
            NARAYANA
          </text>
          <text
            x="38.5"
            y="27.5"
            fill="#e65100"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="7.5"
            fontWeight="800"
            letterSpacing="0.16em"
          >
            HEALTH
          </text>
        </svg>
      ),
    },
    {
      name: "ITC Hotels",
      logo: (
        <svg
          viewBox="0 0 155 36"
          className="company-logo-svg"
          aria-label="ITC Hotels logo"
        >
          <g transform="translate(4, 4)">
            <rect x="0" y="0" width="28" height="28" rx="3.5" fill="#111827" />
            <path
              d="M6.5 7.5 h15 M14 7.5 v13 M9.5 20.5 h9"
              stroke="#d4af37"
              strokeWidth="2"
            />
          </g>
          <text
            x="37"
            y="18.5"
            fill="#111827"
            fontFamily="Georgia, serif"
            fontSize="14"
            fontWeight="900"
            letterSpacing="0.16em"
          >
            ITC HOTELS
          </text>
          <text
            x="37.5"
            y="27.5"
            fill="#b45309"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="7.2"
            fontWeight="700"
            letterSpacing="0.16em"
          >
            RESPONSIBLE LUXURY
          </text>
        </svg>
      ),
    },
    {
      name: "Cognizant",
      logo: (
        <svg
          viewBox="0 0 155 36"
          className="company-logo-svg"
          aria-label="Cognizant logo"
        >
          <g transform="translate(4, 4)">
            {/* Modern Cognizant Mobius 'C' Loop */}
            <circle
              cx="14"
              cy="14"
              r="12"
              fill="none"
              stroke="#0033a0"
              strokeWidth="3.2"
              strokeDasharray="54 16"
            />
            <path
              d="M11 14 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0"
              fill="#0033a0"
            />
          </g>
          <text
            x="36"
            y="22.5"
            fill="#0033a0"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="17"
            fontWeight="800"
            letterSpacing="-0.02em"
          >
            Cognizant
          </text>
        </svg>
      ),
    },
    {
      name: "Apollo Hospitals",
      logo: (
        <svg
          viewBox="0 0 150 36"
          className="company-logo-svg"
          aria-label="Apollo logo"
        >
          <g transform="translate(4, 3)">
            {/* Official Apollo Caduceus Sunburst */}
            <circle
              cx="14"
              cy="15"
              r="13"
              fill="#fff7e6"
              stroke="#c92228"
              strokeWidth="1.3"
            />
            <path
              d="M14 5.5 C16 9.5 18 12 18 15 C18 18 16 20.5 14 23.5 C12 20.5 10 18 10 15 C10 12 12 9.5 14 5.5 Z"
              fill="#c92228"
            />
            <path
              d="M8.5 13 Q14 15 19.5 13 M7.5 17.5 Q14 19.5 20.5 17.5"
              fill="none"
              stroke="#d49b29"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </g>
          <text
            x="38"
            y="18.5"
            fill="#c92228"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="14"
            fontWeight="800"
            letterSpacing="0.04em"
          >
            Apollo
          </text>
          <text
            x="38.5"
            y="27.5"
            fill="#555d50"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="7.2"
            fontWeight="700"
            letterSpacing="0.14em"
          >
            HOSPITALS
          </text>
        </svg>
      ),
    },
    {
      name: "Swiggy",
      logo: (
        <svg
          viewBox="0 0 145 36"
          className="company-logo-svg"
          aria-label="Swiggy logo"
        >
          <g transform="translate(4, 4)">
            {/* Official Swiggy Location-Pin Ribbon Emblem */}
            <path
              d="M14 2 C6.5 2 2 7.5 2 14 C2 20.5 14 27 14 27 C14 27 26 20.5 26 14 C26 7.5 21.5 2 14 2 Z"
              fill="#fc8019"
            />
            <path
              d="M11 11 C11 9 17 9 17 12 C17 15 11 14.5 11 17.5 C11 19.5 17 19.5 17 19.5"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </g>
          <text
            x="36"
            y="23"
            fill="#fc8019"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="18.5"
            fontWeight="900"
            letterSpacing="-0.03em"
          >
            SWIGGY
          </text>
        </svg>
      ),
    },
    {
      name: "PhonePe",
      logo: (
        <svg
          viewBox="0 0 150 36"
          className="company-logo-svg"
          aria-label="PhonePe logo"
        >
          <g transform="translate(4, 4)">
            {/* Official Purple Tile with Devanagari 'पे' */}
            <rect x="0" y="0" width="28" height="28" rx="6.5" fill="#5f259f" />
            <text
              x="14"
              y="20.5"
              textAnchor="middle"
              fill="#ffffff"
              fontFamily="system-ui, sans-serif"
              fontSize="17.5"
              fontWeight="900"
            >
              पे
            </text>
          </g>
          <text
            x="38"
            y="23"
            fill="#5f259f"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="18"
            fontWeight="800"
            letterSpacing="-0.02em"
          >
            PhonePe
          </text>
        </svg>
      ),
    },
    {
      name: "JW Marriott",
      logo: (
        <svg
          viewBox="0 0 160 36"
          className="company-logo-svg"
          aria-label="JW Marriott logo"
        >
          <g transform="translate(4, 4)">
            {/* Official Griffin Crest */}
            <path
              d="M6 22 C6 11 11.5 6 22 6 M10.5 22 C10.5 14.5 15 10.5 22 10.5"
              fill="none"
              stroke="#6b21a8"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <circle cx="22" cy="6" r="2.8" fill="#6b21a8" />
          </g>
          <text
            x="35"
            y="18.5"
            fill="#1e1e24"
            fontFamily="Georgia, serif"
            fontSize="14.5"
            fontWeight="800"
            letterSpacing="0.14em"
          >
            JW MARRIOTT
          </text>
          <text
            x="35.5"
            y="27.5"
            fill="#6b7280"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="7.2"
            fontWeight="700"
            letterSpacing="0.18em"
          >
            BENGALURU
          </text>
        </svg>
      ),
    },
    {
      name: "State Bank of India",
      logo: (
        <svg
          viewBox="0 0 155 36"
          className="company-logo-svg"
          aria-label="State Bank of India logo"
        >
          <g transform="translate(4, 4)">
            {/* Official SBI Blue Keyhole */}
            <circle cx="14" cy="14" r="13" fill="#280071" />
            <circle cx="14" cy="14" r="4.5" fill="#ffffff" />
            <rect x="12" y="14" width="4" height="13" fill="#ffffff" />
          </g>
          <text
            x="38"
            y="18.5"
            fill="#280071"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="13.5"
            fontWeight="900"
            letterSpacing="0.06em"
          >
            STATE BANK OF INDIA
          </text>
          <text
            x="38.5"
            y="28"
            fill="#00a8ca"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="7.2"
            fontWeight="700"
            letterSpacing="0.14em"
          >
            THE BANKER TO EVERY INDIAN
          </text>
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
            Deploying verified staffing operations across healthcare, luxury
            hospitality, and IT hubs in Bengaluru &amp; nationwide
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

        {/* Row 1: Right to Left (Tech & Conglomerates) */}
        <div className="company-marquee-track company-marquee-track--left">
          {row1Companies.concat(row1Companies).map((c, idx) => (
            <div
              key={`r1-${idx}`}
              className="company-logo-item"
              title={c.name}
              aria-label={c.name}
            >
              {c.logo}
            </div>
          ))}
        </div>

        {/* Row 2: Left to Right (Healthcare, Hospitality & Bengaluru Powerhouses) */}
        <div className="company-marquee-track company-marquee-track--right">
          {row2Companies.concat(row2Companies).map((c, idx) => (
            <div
              key={`r2-${idx}`}
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
