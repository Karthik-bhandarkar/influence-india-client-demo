export default function CompanyMarquee() {
  // Row 1 (Right to Left): Tech Software Giants, Telecom, Conglomerates & Banking (Top Bengaluru Employers)
  const row1Companies = [
    {
      name: "Tata Group",
      logo: (
        <svg
          viewBox="0 0 145 36"
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
          viewBox="0 0 140 36"
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
            {/* Official signature wave curve */}
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
      name: "Cognizant",
      logo: (
        <svg
          viewBox="0 0 165 36"
          className="company-logo-svg"
          aria-label="Cognizant logo"
        >
          {/* Official 2022 Cognizant Faceted Rebrand Emblem */}
          <g transform="translate(4, 5) scale(0.65)">
            <path fill="#3d54ce" d="m0 22 15.3 22 15.8-9.5L22.2 22z" />
            <path fill="#13457d" d="M15.3 44h21.8l15-22z" />
            <path fill="#000048" d="M15.3 0 0 22h22.2l8.9-12.5z" />
            <path fill="#35cacf" d="m15.3 0 36.8 22-15-22z" />
          </g>
          {/* Official Wordmark */}
          <text
            x="44"
            y="23.5"
            fill="#000048"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="17.5"
            fontWeight="800"
            letterSpacing="-0.02em"
          >
            Cognizant
          </text>
        </svg>
      ),
    },
    {
      name: "Cisco",
      logo: (
        <svg
          viewBox="0 0 145 36"
          className="company-logo-svg"
          aria-label="Cisco logo"
        >
          <g transform="translate(6, 4)">
            {/* Official Cisco Golden Gate Signal Bars */}
            <svg viewBox="0 0 24 24" width="28" height="28">
              <path
                fill="#049fd9"
                d="M16.331 18.171V17.06l-.022.01c-.25.121-.522.19-.801.203a1.186 1.186 0 01-.806-.237 1.038 1.038 0 01-.352-.498 1.21 1.21 0 01-.023-.667c.052-.225.178-.426.357-.569.16-.134.355-.218.562-.242a1.85 1.85 0 011.061.198l.024.013v-1.117l-.051-.014a2.862 2.862 0 00-1.011-.132 2.34 2.34 0 00-.903.206c-.287.132-.54.327-.739.571a2.221 2.221 0 00-.04 2.705c.295.378.709.645 1.175.756.491.12 1.006.102 1.487-.052l.082-.023M5.336 18.171V17.06l-.022.01c-.25.121-.522.19-.801.203a1.183 1.183 0 01-.806-.237 1.03 1.03 0 01-.351-.498 1.202 1.202 0 01-.024-.667c.052-.225.177-.426.357-.569.16-.134.355-.218.562-.242a1.85 1.85 0 011.061.198l.024.013v-1.117l-.051-.014a2.862 2.862 0 00-1.011-.132 2.344 2.344 0 00-.903.206 2.08 2.08 0 00-.74.571 2.224 2.224 0 00-.041 2.705 2.11 2.11 0 001.176.756c.491.12 1.005.102 1.487-.052l.083-.023M9.26 17.249l-.004.957.07.012c.22.041.441.069.664.085.195.019.391.022.587.012.187-.014.372-.049.551-.104.21-.06.405-.163.571-.305a1.16 1.16 0 00.333-.478 1.31 1.31 0 00-.007-.96 1.068 1.068 0 00-.298-.414 1.261 1.261 0 00-.438-.255l-.722-.268a.388.388 0 01-.197-.188.245.245 0 01.008-.219.382.382 0 01.154-.142.798.798 0 01.257-.074c.153-.022.308-.021.46.005.18.02.358.051.533.096l.038.008v-.883l-.069-.015a4.749 4.749 0 00-.543-.097 2.844 2.844 0 00-.714-.003c-.3.027-.585.143-.821.33-.16.126-.281.293-.351.484-.104.29-.105.608 0 .899.054.145.14.274.252.381.097.093.207.173.327.236.157.084.324.149.497.195.057.017.114.035.17.054l.085.031.024.01c.084.03.162.078.226.14.045.042.08.094.101.151a.325.325 0 01.001.161.339.339 0 01-.166.198.856.856 0 01-.275.086 2.032 2.032 0 01-.427.021 5.208 5.208 0 01-.557-.074 9.195 9.195 0 01-.287-.067l-.033-.006zm-2.475.995h1.05v-4.167h-1.05v4.167zm12.162-2.936a1.095 1.095 0 011.541.158 1.094 1.094 0 01-.157 1.541l-.017.014a1.096 1.096 0 01-1.367-1.713m-1.525.854a2.193 2.193 0 002.666 2.107 2.139 2.139 0 00.701-3.937 2.207 2.207 0 00-3.367 1.83M22.961 10.728a.52.52 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155M20.117 10.728a.522.522 0 001.041 0V8.139a.521.521 0 00-1.04 0v2.589M17.231 11.771a.521.521 0 001.039 0V6.17a.52.52 0 00-1.039 0v5.601M14.393 10.728a.521.521 0 001.04 0V8.139a.52.52 0 00-1.039 0v2.589M11.494 10.728a.522.522 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155M8.624 10.728a.52.52 0 001.039 0V8.139a.52.52 0 00-1.039 0v2.589M5.737 11.771a.52.52 0 001.039 0V6.17a.52.52 0 00-1.039 0v5.601M2.876 10.728a.522.522 0 001.04 0V8.139a.52.52 0 00-1.039 0v2.589M0 10.728a.521.521 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155"
              />
            </svg>
          </g>
          <text
            x="39"
            y="23"
            fill="#049fd9"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="18"
            fontWeight="800"
            letterSpacing="-0.02em"
          >
            cisco
          </text>
        </svg>
      ),
    },
    {
      name: "Dell Technologies",
      logo: (
        <svg
          viewBox="0 0 155 36"
          className="company-logo-svg"
          aria-label="Dell Technologies logo"
        >
          <g transform="translate(6, 4)">
            {/* Official Dell Circle Emblem */}
            <svg viewBox="0 0 24 24" width="28" height="28">
              <path
                fill="#0076ce"
                d="M17.963 14.6V9.324h1.222v4.204h2.14v1.07h-3.362zm-9.784-3.288l2.98-2.292c.281.228.56.458.841.687l-2.827 2.14.611.535 2.827-2.216c.281.228.56.458.841.688a295.83 295.83 0 0 1-2.827 2.216l.61.536 2.83-2.295-.001-1.986h1.223v4.204h2.216v1.07h-3.362v-1.987c-.995.763-1.987 1.529-2.981 2.292l-2.981-2.292c-.144.729-.653 1.36-1.312 1.694-.285.147-.597.24-.915.276-.183.022-.367.017-.551.017H3.516V9.325H5.69a2.544 2.544 0 0 1 1.563.557c.454.36.778.872.927 1.43m-3.516-.917v3.21l.953-.001a1.377 1.377 0 0 0 1.036-.523 1.74 1.74 0 0 0 .182-1.889 1.494 1.494 0 0 0-.976-.766c-.166-.04-.338-.03-.507-.032h-.688zM11.82 0h.337a11.94 11.94 0 0 1 5.405 1.373 12.101 12.101 0 0 1 4.126 3.557A11.93 11.93 0 0 1 24 11.82v.36a11.963 11.963 0 0 1-3.236 8.033A11.967 11.967 0 0 1 12.182 24h-.361a11.993 11.993 0 0 1-4.145-.806 12.04 12.04 0 0 1-4.274-2.836A12.057 12.057 0 0 1 .576 15.67 12.006 12.006 0 0 1 0 12.181v-.361a11.924 11.924 0 0 1 1.992-6.396 12.211 12.211 0 0 1 4.71-4.172A11.875 11.875 0 0 1 11.82 0m-.153 1.23a10.724 10.724 0 0 0-6.43 2.375 10.78 10.78 0 0 0-3.319 4.573 10.858 10.858 0 0 0 .193 8.12 10.788 10.788 0 0 0 3.546 4.421 10.698 10.698 0 0 0 4.786 1.946c1.456.209 2.955.124 4.376-.26a10.756 10.756 0 0 0 5.075-3.062 10.742 10.742 0 0 0 2.686-5.28 10.915 10.915 0 0 0-.122-4.682 10.77 10.77 0 0 0-7.098-7.626 10.78 10.78 0 0 0-3.693-.525z"
              />
            </svg>
          </g>
          <text
            x="39"
            y="19"
            fill="#0076ce"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="14"
            fontWeight="800"
            letterSpacing="0.08em"
          >
            DELL
          </text>
          <text
            x="39.5"
            y="27.5"
            fill="#555d50"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="7"
            fontWeight="700"
            letterSpacing="0.16em"
          >
            TECHNOLOGIES
          </text>
        </svg>
      ),
    },
    {
      name: "SAP Labs",
      logo: (
        <svg
          viewBox="0 0 145 36"
          className="company-logo-svg"
          aria-label="SAP Labs logo"
        >
          <g transform="translate(6, 4)">
            {/* Official SAP Polygonal Emblem */}
            <svg viewBox="0 0 24 24" width="28" height="28">
              <path
                fill="#008fd3"
                d="M0 6.064v11.872h12.13L24 6.064zm3.264 2.208h.005c.863.001 1.915.245 2.676.633l-.82 1.43c-.835-.404-1.255-.442-1.73-.467-.708-.038-1.064.215-1.069.488-.007.332.669.633 1.305.838.964.306 2.19.715 2.377 1.9L7.77 8.437h2.046l2.064 5.576-.007-5.575h2.37c2.257 0 3.318.764 3.318 2.519 0 1.575-1.09 2.514-2.936 2.514h-.763l-.01 2.094-3.588-.003-.25-.908c-.37.122-.787.189-1.23.189-.456 0-.885-.071-1.263-.2l-.358.919-2 .006.09-.462c-.029.025-.057.05-.087.074-.535.43-1.208.629-2.037.644l-.213.002a5.075 5.075 0 0 1-2.581-.675l.73-1.448c.79.467 1.286.572 1.956.558.347-.007.598-.07.761-.239a.557.557 0 0 0 .156-.369c.007-.376-.53-.553-1.185-.756-.531-.164-1.135-.389-1.606-.735-.559-.41-.825-.924-.812-1.65a1.99 1.99 0 0 1 .566-1.377c.519-.537 1.357-.863 2.363-.863zm10.597 1.67v1.904h.521c.694 0 1.247-.23 1.248-.964 0-.709-.554-.94-1.248-.94zm-5.087.767l-.748 2.362c.223.085.481.133.757.133.268 0 .52-.047.742-.126l-.736-2.37z"
              />
            </svg>
          </g>
          <text
            x="39"
            y="19"
            fill="#008fd3"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="15"
            fontWeight="900"
            letterSpacing="0.08em"
          >
            SAP
          </text>
          <text
            x="39.5"
            y="27.5"
            fill="#555d50"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="7.2"
            fontWeight="700"
            letterSpacing="0.16em"
          >
            LABS INDIA
          </text>
        </svg>
      ),
    },
    {
      name: "Siemens",
      logo: (
        <svg
          viewBox="0 0 150 36"
          className="company-logo-svg"
          aria-label="Siemens logo"
        >
          <g transform="translate(6, 4)">
            {/* Official Siemens Teal Wordmark Symbol */}
            <svg viewBox="0 0 24 24" width="28" height="28">
              <path
                fill="#00646e"
                d="M1.478 10.016c.24 0 .59.046 1.046.14v.726a2.465 2.465 0 0 0-.946-.213c-.41 0-.615.118-.615.354 0 .088.041.16.124.216.069.045.258.14.568.286.446.208.743.388.89.541.176.182.264.417.264.705 0 .415-.172.73-.516.949-.279.176-.64.264-1.085.264-.375 0-.753-.046-1.133-.139v-.755c.41.135.774.203 1.09.203.437 0 .655-.121.655-.362a.302.302 0 0 0-.095-.227c-.065-.065-.232-.155-.5-.27-.481-.208-.795-.384-.94-.53a.999.999 0 0 1-.284-.73c0-.377.137-.666.413-.864.272-.196.626-.294 1.064-.294zm21.19 0c.246 0 .565.04.956.123l.09.016v.727a2.471 2.471 0 0 0-.948-.213c-.409 0-.612.118-.612.354 0 .088.04.16.123.216.066.043.256.139.57.286.443.208.74.388.889.541.176.182.264.417.264.705 0 .415-.172.73-.514.949-.28.176-.643.264-1.087.264-.376 0-.754-.046-1.134-.139v-.755c.407.135.77.203 1.09.203.437 0 .655-.121.655-.362 0-.09-.03-.166-.092-.227-.066-.065-.233-.155-.503-.27-.48-.206-.793-.382-.94-.53a.997.997 0 0 1-.284-.732c0-.376.137-.664.413-.862.272-.196.627-.294 1.064-.294zm-12.674.066l.92 2.444.942-2.444h1.257v3.825h-.968v-2.708l-1.072 2.747h-.632l-1.052-2.747v2.708H8.67v-3.825zm-5.587 0v3.825H3.386v-3.825zm3.554 0v.692H6.327v.864H7.75v.63H6.327v.908h1.677v.73h-2.66v-3.824zm8.707 0v.692h-1.634v.864h1.422v.63h-1.422v.908h1.677v.73H14.05v-3.824zm1.898 0l1.255 2.56v-2.56h.719v3.825h-1.15l-1.288-2.595v2.595h-.72v-3.825z"
              />
            </svg>
          </g>
          <text
            x="39"
            y="23"
            fill="#00646e"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="18"
            fontWeight="800"
            letterSpacing="0.06em"
          >
            SIEMENS
          </text>
        </svg>
      ),
    },
    {
      name: "Bharti Airtel",
      logo: (
        <svg
          viewBox="0 0 145 36"
          className="company-logo-svg"
          aria-label="Bharti Airtel logo"
        >
          <g transform="translate(6, 4)">
            {/* Official Airtel Lowercase Curved Ribbon 'a' Mark */}
            <svg viewBox="0 0 24 24" width="28" height="28">
              <path
                fill="#e40000"
                d="M7.137 23.862c.79 0 1.708-.19 2.751-.554 1.55-.538 2.784-1.281 3.986-2.009l.316-.205a29.733 29.733 0 0 0 3.764-2.72 16.574 16.574 0 0 0 5.457-7.529c.395-1.138.949-3.384.268-5.487a7.117 7.117 0 0 0-2.862-3.749c-.158-.126-1.898-1.47-5.203-1.47-3.005 0-6.31 1.107-9.806 3.32l-.11.08-.317.205a20.133 20.133 0 0 0-2.309 1.693C1.585 6.813-.091 9.106.004 11.067c.031.79.427 1.534 1.075 2.008a3.472 3.472 0 0 0 2.214.68c1.803 0 3.765-.948 5.109-1.74l.253-.157.696-.443.237-.158c1.898-1.234 3.875-2.515 6.105-3.258a5.255 5.255 0 0 1 1.55-.285 3.163 3.163 0 0 1 .664.08 2.112 2.112 0 0 1 1.47 1.106c.523 1.012.396 2.61-.316 4.08a17.871 17.871 0 0 1-4.887 5.836 19.488 19.488 0 0 1-3.194 2.215l-.095.031a9.634 9.634 0 0 1-1.471.696l-.08.032-.41.158c-2.23.57-.87-1.329-.87-1.329.474-.537.98-1.028 1.518-1.502.316-.269.633-.554.933-.854l.064-.063c.395-.38.933-.902.901-1.645-.047-.98-1.075-1.582-2.056-1.613h-.063c-.95 0-1.819.522-2.404.98a7.27 7.27 0 0 0-1.598 1.74c-.6.901-1.85 3.226-.632 5.077.49.743 1.313 1.123 2.42 1.123z"
              />
            </svg>
          </g>
          <text
            x="39"
            y="23.5"
            fill="#e40000"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="19"
            fontWeight="800"
            letterSpacing="-0.04em"
          >
            airtel
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
            {/* Official Reliance Navy Emblem */}
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
      name: "Bosch India",
      logo: (
        <svg
          viewBox="0 0 150 36"
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
    {
      name: "HDFC Bank",
      logo: (
        <svg
          viewBox="0 0 155 36"
          className="company-logo-svg"
          aria-label="HDFC Bank logo"
        >
          <g transform="translate(4, 4)">
            {/* Official HDFC Interlocking Security Square */}
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
      name: "Razorpay",
      logo: (
        <svg
          viewBox="0 0 150 36"
          className="company-logo-svg"
          aria-label="Razorpay logo"
        >
          <g transform="translate(6, 4)">
            {/* Official Razorpay Angled Lightning Monogram */}
            <svg viewBox="0 0 24 24" width="28" height="28">
              <path
                fill="#0c2340"
                d="M22.436 0l-11.91 7.773-1.174 4.276 6.625-4.297L11.65 24h4.391l6.395-24z"
              />
              <path
                fill="#0c83fe"
                d="M14.26 10.098L3.389 17.166 1.564 24h9.008l3.688-13.902Z"
              />
            </svg>
          </g>
          <text
            x="40"
            y="23"
            fill="#0c2340"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="17.5"
            fontWeight="800"
            letterSpacing="-0.02em"
          >
            Razorpay
          </text>
        </svg>
      ),
    },
  ]

  // Row 2 (Left to Right): Bengaluru Healthcare Networks, Luxury Hotels & Consumer Tech Employers
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
      name: "Fortis Healthcare",
      logo: (
        <svg
          viewBox="0 0 155 36"
          className="company-logo-svg"
          aria-label="Fortis Healthcare logo"
        >
          <g transform="translate(5, 4)">
            {/* Official Fortis Human Caring Figure */}
            <circle
              cx="14"
              cy="14"
              r="13"
              fill="#eaf5ea"
              stroke="#107c41"
              strokeWidth="1.2"
            />
            <circle cx="14" cy="8.5" r="3" fill="#d83b01" />
            <path
              d="M7 21 C8.5 15 11 13 14 13 C17 13 19.5 15 21 21"
              fill="none"
              stroke="#107c41"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          </g>
          <text
            x="39"
            y="18.5"
            fill="#107c41"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="15"
            fontWeight="800"
            letterSpacing="0.02em"
          >
            Fortis
          </text>
          <text
            x="39.5"
            y="27.5"
            fill="#d83b01"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="7"
            fontWeight="800"
            letterSpacing="0.16em"
          >
            HEALTHCARE
          </text>
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
      name: "The Oberoi Bengaluru",
      logo: (
        <svg
          viewBox="0 0 165 36"
          className="company-logo-svg"
          aria-label="The Oberoi logo"
        >
          <g transform="translate(6, 4)">
            {/* Regal Oberoi Sunburst / Lotus Crest */}
            <circle cx="14" cy="14" r="13" fill="#1a1c1e" />
            <path
              d="M14 6 L16 11 L21 11 L17 14.5 L18.5 20 L14 16.5 L9.5 20 L11 14.5 L7 11 L12 11 Z"
              fill="#b4833e"
            />
          </g>
          <text
            x="39"
            y="18.5"
            fill="#1a1c1e"
            fontFamily="Georgia, serif"
            fontSize="14"
            fontWeight="800"
            letterSpacing="0.18em"
          >
            THE OBEROI
          </text>
          <text
            x="39.5"
            y="27.5"
            fill="#b4833e"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="7"
            fontWeight="700"
            letterSpacing="0.22em"
          >
            BENGALURU
          </text>
        </svg>
      ),
    },
    {
      name: "Radisson Blu",
      logo: (
        <svg
          viewBox="0 0 160 36"
          className="company-logo-svg"
          aria-label="Radisson Blu logo"
        >
          <g transform="translate(4, 3)">
            <text
              x="2"
              y="18"
              fill="#141824"
              fontFamily="Georgia, serif"
              fontSize="14"
              fontWeight="800"
              fontStyle="italic"
              letterSpacing="0.04em"
            >
              Radisson
            </text>
            <rect x="68" y="7" width="28" height="15" rx="2" fill="#00009c" />
            <text
              x="82"
              y="18.5"
              fill="#ffffff"
              fontFamily="system-ui, sans-serif"
              fontSize="9.5"
              fontWeight="900"
              letterSpacing="0.1em"
              textAnchor="middle"
            >
              BLU
            </text>
            <text
              x="2"
              y="28"
              fill="#555d50"
              fontFamily="system-ui, sans-serif"
              fontSize="6.8"
              fontWeight="700"
              letterSpacing="0.2em"
            >
              HOTEL BENGALURU
            </text>
          </g>
        </svg>
      ),
    },
    {
      name: "Swiggy",
      logo: (
        <svg
          viewBox="0 0 150 36"
          className="company-logo-svg"
          aria-label="Swiggy logo"
        >
          <g transform="translate(6, 4)">
            {/* Official Swiggy Location-Pin Ribbon Emblem */}
            <svg viewBox="0 0 24 24" width="28" height="28">
              <path
                fill="#fc8019"
                d="M12.034 24c-.376-.411-2.075-2.584-3.95-5.513-.547-.916-.901-1.63-.833-1.814.178-.48 3.355-.743 4.333-.308.298.132.29.307.29.409 0 .44-.022 1.619-.022 1.619a.441.441 0 1 0 .883-.002l-.005-2.939c0-.255-.278-.319-.331-.329-.511-.002-1.548-.006-2.661-.006-2.457 0-3.006.101-3.423-.172-.904-.591-2.383-4.577-2.417-6.819C3.849 4.964 5.723 2.225 8.362.868A8.13 8.13 0 0 1 12.026 0c4.177 0 7.617 3.153 8.075 7.209l.001.011c.084.981-5.321 1.189-6.39.904-.164-.044-.206-.212-.206-.284L13.5 4.996a.442.442 0 0 0-.884.002l.009 3.866a.33.33 0 0 0 .268.32l3.354-.001c1.79 0 2.542.207 3.042.588.333.254.461.739.349 1.37C18.633 16.755 12.273 23.71 12.034 24z"
              />
            </svg>
          </g>
          <text
            x="39"
            y="23.5"
            fill="#fc8019"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="19"
            fontWeight="900"
            letterSpacing="-0.03em"
          >
            swiggy
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
          <g transform="translate(6, 4)">
            {/* Official Purple Squircle with Devanagari 'पे' */}
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
            x="40"
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
      name: "Zomato",
      logo: (
        <svg
          viewBox="0 0 145 36"
          className="company-logo-svg"
          aria-label="Zomato logo"
        >
          <g transform="translate(6, 4)">
            <rect x="0" y="0" width="28" height="28" rx="6" fill="#e23744" />
            <text
              x="14"
              y="19"
              fill="#ffffff"
              fontFamily="system-ui, sans-serif"
              fontSize="15"
              fontWeight="900"
              fontStyle="italic"
              textAnchor="middle"
            >
              z
            </text>
          </g>
          <text
            x="40"
            y="23"
            fill="#e23744"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="19"
            fontWeight="900"
            fontStyle="italic"
            letterSpacing="-0.03em"
          >
            zomato
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
      name: "Aster DM Healthcare",
      logo: (
        <svg
          viewBox="0 0 165 36"
          className="company-logo-svg"
          aria-label="Aster DM Healthcare logo"
        >
          <g transform="translate(6, 4)">
            <circle cx="14" cy="14" r="13" fill="#009688" />
            <path
              d="M14 6 v16 M6 14 h16"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="14" cy="14" r="3" fill="#8bc34a" />
          </g>
          <text
            x="39"
            y="18.5"
            fill="#004d40"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="14"
            fontWeight="800"
            letterSpacing="0.02em"
          >
            Aster DM
          </text>
          <text
            x="39.5"
            y="27.5"
            fill="#009688"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="7"
            fontWeight="800"
            letterSpacing="0.14em"
          >
            HEALTHCARE
          </text>
        </svg>
      ),
    },
    {
      name: "Sheraton Grand",
      logo: (
        <svg
          viewBox="0 0 165 36"
          className="company-logo-svg"
          aria-label="Sheraton Grand logo"
        >
          <g transform="translate(6, 4)">
            <circle cx="14" cy="14" r="13" fill="#1e3a8a" />
            <text
              x="14"
              y="19"
              fill="#facc15"
              fontFamily="Georgia, serif"
              fontSize="14"
              fontWeight="900"
              textAnchor="middle"
            >
              S
            </text>
          </g>
          <text
            x="39"
            y="18.5"
            fill="#1e3a8a"
            fontFamily="Georgia, serif"
            fontSize="13.5"
            fontWeight="800"
            letterSpacing="0.12em"
          >
            SHERATON GRAND
          </text>
          <text
            x="39.5"
            y="27.5"
            fill="#b45309"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="7"
            fontWeight="700"
            letterSpacing="0.16em"
          >
            BENGALURU WHITEFIELD
          </text>
        </svg>
      ),
    },
    {
      name: "Cloudnine Hospitals",
      logo: (
        <svg
          viewBox="0 0 160 36"
          className="company-logo-svg"
          aria-label="Cloudnine Hospitals logo"
        >
          <g transform="translate(6, 4)">
            <circle
              cx="14"
              cy="14"
              r="13"
              fill="#fff1f2"
              stroke="#ec4899"
              strokeWidth="1.2"
            />
            <path
              d="M9 17 a3 3 0 0 1 5 -2 a4 4 0 0 1 6 3 a2.5 2.5 0 0 1 -2 2.5 h-8 a2.5 2.5 0 0 1 -1 -3.5 z"
              fill="#ec4899"
            />
          </g>
          <text
            x="39"
            y="18.5"
            fill="#be185d"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="14"
            fontWeight="800"
            letterSpacing="-0.01em"
          >
            cloudnine
          </text>
          <text
            x="39.5"
            y="27.5"
            fill="#0284c7"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="7"
            fontWeight="800"
            letterSpacing="0.15em"
          >
            HOSPITALS BENGALURU
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

        {/* Row 1: Right to Left (Tech Software, Conglomerates & Banking Giants) */}
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

        {/* Row 2: Left to Right (Healthcare, Luxury Hotels & Consumer Tech Leaders) */}
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
