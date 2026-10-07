export default function CompanyMarquee() {
  // Row 1 (Right to Left): Tech, Enterprise & Conglomerates
  const row1Companies = [
    {
      name: "Tata Group",
      logo: (
        <svg
          viewBox="0 0 130 32"
          className="company-logo-svg"
          aria-label="Tata logo"
        >
          <g transform="translate(4, 2)">
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
      name: "Wipro",
      logo: (
        <svg
          viewBox="0 0 135 32"
          className="company-logo-svg"
          aria-label="Wipro logo"
        >
          <g transform="translate(4, 5)">
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
      name: "HDFC Bank",
      logo: (
        <svg
          viewBox="0 0 145 32"
          className="company-logo-svg"
          aria-label="HDFC Bank logo"
        >
          <g transform="translate(4, 3)">
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
      name: "Larsen & Toubro",
      logo: (
        <svg
          viewBox="0 0 145 32"
          className="company-logo-svg"
          aria-label="L&T logo"
        >
          <g transform="translate(4, 3)">
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
      name: "ICICI Bank",
      logo: (
        <svg
          viewBox="0 0 140 32"
          className="company-logo-svg"
          aria-label="ICICI Bank logo"
        >
          <g transform="translate(4, 3)">
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
      name: "Bosch India",
      logo: (
        <svg
          viewBox="0 0 135 32"
          className="company-logo-svg"
          aria-label="Bosch logo"
        >
          <g transform="translate(4, 3)">
            <circle
              cx="13"
              cy="13"
              r="12"
              fill="none"
              stroke="#ea1c24"
              strokeWidth="2.2"
            />
            <rect
              x="8"
              y="7"
              width="10"
              height="12"
              fill="none"
              stroke="#ea1c24"
              strokeWidth="2"
            />
            <path d="M8 13 h10" stroke="#ea1c24" strokeWidth="2" />
          </g>
          <text
            x="34"
            y="21"
            fill="#111315"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="16"
            fontWeight="900"
            letterSpacing="0.08em"
          >
            BOSCH
          </text>
        </svg>
      ),
    },
  ]

  // Row 2 (Left to Right): Healthcare, Luxury Hotels & Bengaluru Tech Employers
  const row2Companies = [
    {
      name: "Manipal Hospitals",
      logo: (
        <svg
          viewBox="0 0 160 32"
          className="company-logo-svg"
          aria-label="Manipal Hospitals logo"
        >
          <g transform="translate(4, 2)">
            <circle cx="14" cy="14" r="13" fill="#008080" />
            <path
              d="M14 6 v16 M6 14 h16"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="14" cy="14" r="2.5" fill="#fdb813" />
          </g>
          <text
            x="36"
            y="16.5"
            fill="#005a70"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="13"
            fontWeight="900"
            letterSpacing="-0.01em"
          >
            Manipal
          </text>
          <text
            x="36.5"
            y="24.5"
            fill="#e35205"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="7"
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
          viewBox="0 0 145 32"
          className="company-logo-svg"
          aria-label="Taj Hotels logo"
        >
          <g transform="translate(4, 3)">
            <path
              d="M13 2 C7 8 5 15 5 22 h16 C21 15 19 8 13 2 Z"
              fill="none"
              stroke="#a67c52"
              strokeWidth="1.8"
            />
            <path d="M13 5 v17 M8 18 h10" stroke="#a67c52" strokeWidth="1.2" />
            <circle cx="13" cy="2" r="1.5" fill="#a67c52" />
          </g>
          <text
            x="34"
            y="17"
            fill="#1b1c1e"
            fontFamily="Georgia, serif"
            fontSize="14"
            fontWeight="800"
            letterSpacing="0.22em"
          >
            TAJ
          </text>
          <text
            x="34.5"
            y="24.5"
            fill="#a67c52"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="6.5"
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
          viewBox="0 0 135 32"
          className="company-logo-svg"
          aria-label="Accenture logo"
        >
          <g transform="translate(4, 5)">
            <text
              x="0"
              y="17"
              fill="#000000"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="17.5"
              fontWeight="800"
              letterSpacing="-0.02em"
            >
              accenture
            </text>
            <path
              d="M51 2 L56 6 L51 10"
              fill="none"
              stroke="#a100ff"
              strokeWidth="2.8"
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
          viewBox="0 0 150 32"
          className="company-logo-svg"
          aria-label="The Leela logo"
        >
          <g transform="translate(4, 3)">
            <circle cx="13" cy="13" r="12" fill="#1c2536" />
            <path d="M13 5 l4 8 h-8 z M13 15 l4 6 h-8 z" fill="#c5a059" />
          </g>
          <text
            x="34"
            y="17"
            fill="#1c2536"
            fontFamily="Georgia, serif"
            fontSize="13"
            fontWeight="800"
            letterSpacing="0.18em"
          >
            THE LEELA
          </text>
          <text
            x="34.5"
            y="24.5"
            fill="#c5a059"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="6.5"
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
          viewBox="0 0 160 32"
          className="company-logo-svg"
          aria-label="Narayana Health logo"
        >
          <g transform="translate(4, 3)">
            <circle cx="13" cy="13" r="12" fill="#003366" />
            <path
              d="M7 14 C7 9 13 6 19 14 C13 22 7 19 7 14 Z"
              fill="#e65100"
            />
            <circle cx="13" cy="13" r="3.5" fill="#ffffff" />
          </g>
          <text
            x="35"
            y="16.5"
            fill="#003366"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="12.5"
            fontWeight="900"
            letterSpacing="0.04em"
          >
            NARAYANA
          </text>
          <text
            x="35.5"
            y="24.5"
            fill="#e65100"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="7"
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
          viewBox="0 0 145 32"
          className="company-logo-svg"
          aria-label="ITC Hotels logo"
        >
          <g transform="translate(4, 3)">
            <rect x="0" y="0" width="26" height="26" rx="3" fill="#111827" />
            <path
              d="M6 7 h14 M13 7 v12 M9 19 h8"
              stroke="#d4af37"
              strokeWidth="1.8"
            />
          </g>
          <text
            x="34"
            y="17"
            fill="#111827"
            fontFamily="Georgia, serif"
            fontSize="13"
            fontWeight="900"
            letterSpacing="0.16em"
          >
            ITC HOTELS
          </text>
          <text
            x="34.5"
            y="24.5"
            fill="#b45309"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="6.8"
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
          viewBox="0 0 145 32"
          className="company-logo-svg"
          aria-label="Cognizant logo"
        >
          <g transform="translate(4, 3)">
            <circle
              cx="13"
              cy="13"
              r="11"
              fill="none"
              stroke="#0033a0"
              strokeWidth="3"
              strokeDasharray="50 15"
            />
            <path
              d="M10 13 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0"
              fill="#0033a0"
            />
          </g>
          <text
            x="34"
            y="20.5"
            fill="#0033a0"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="15.5"
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
          viewBox="0 0 135 32"
          className="company-logo-svg"
          aria-label="Apollo logo"
        >
          <g transform="translate(4, 2)">
            <circle
              cx="13"
              cy="14"
              r="12"
              fill="#fff7e6"
              stroke="#c92228"
              strokeWidth="1.2"
            />
            <path
              d="M13 5 C15 9 17 11 17 14 C17 17 15 19 13 22 C11 19 9 17 9 14 C9 11 11 9 13 5 Z"
              fill="#c92228"
            />
            <path
              d="M8 12 Q13 14 18 12 M7 16 Q13 18 19 16"
              fill="none"
              stroke="#d49b29"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </g>
          <text
            x="36"
            y="17"
            fill="#c92228"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="13"
            fontWeight="800"
            letterSpacing="0.04em"
          >
            Apollo
          </text>
          <text
            x="36.5"
            y="24"
            fill="#555d50"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="6.8"
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
          viewBox="0 0 135 32"
          className="company-logo-svg"
          aria-label="Swiggy logo"
        >
          <g transform="translate(4, 3)">
            <path
              d="M13 2 C6 2 2 7 2 13 C2 19 13 25 13 25 C13 25 24 19 24 13 C24 7 20 2 13 2 Z"
              fill="#fc8019"
            />
            <path
              d="M10 10 C10 8 16 8 16 11 C16 14 10 13 10 16 C10 18 16 18 16 18"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </g>
          <text
            x="33"
            y="21"
            fill="#fc8019"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="17.5"
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
          viewBox="0 0 140 32"
          className="company-logo-svg"
          aria-label="PhonePe logo"
        >
          <g transform="translate(4, 3)">
            <rect x="0" y="0" width="26" height="26" rx="6" fill="#5f259f" />
            <text
              x="13"
              y="19"
              textAnchor="middle"
              fill="#ffffff"
              fontFamily="system-ui, sans-serif"
              fontSize="16"
              fontWeight="900"
            >
              पे
            </text>
          </g>
          <text
            x="35"
            y="21"
            fill="#5f259f"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="16.5"
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
          viewBox="0 0 150 32"
          className="company-logo-svg"
          aria-label="JW Marriott logo"
        >
          <g transform="translate(4, 3)">
            <path
              d="M6 21 C6 11 11 6 21 6 M10 21 C10 14 14 10 21 10"
              fill="none"
              stroke="#6b21a8"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <circle cx="21" cy="6" r="2.5" fill="#6b21a8" />
          </g>
          <text
            x="33"
            y="17"
            fill="#1e1e24"
            fontFamily="Georgia, serif"
            fontSize="13.5"
            fontWeight="800"
            letterSpacing="0.14em"
          >
            JW MARRIOTT
          </text>
          <text
            x="33.5"
            y="24.5"
            fill="#6b7280"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="6.8"
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
          viewBox="0 0 145 32"
          className="company-logo-svg"
          aria-label="State Bank of India logo"
        >
          <g transform="translate(4, 3)">
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
