import React, { useState } from "react"

import { motion, type Transition } from "framer-motion"

export interface FolderCardItem {
  id?: string | number

  number: string

  title: string

  description: string

  bgImage?: string

  characterImage?: string

  folderColor: string

  gradientTop?: string

  gradientBottom?: string

  borderColor: string

  textColor: string

  subTextColor: string

  badgeBg: string

  badgeBorder: string

  badgeText: string

  badgeDotColor: string

  href?: string

  stamp?: string
}

export const RELIABILITY_FOLDER_CARDS: FolderCardItem[] = [
  {
    id: "01",

    number: "01",

    title: "Real-Time Workforce Monitoring",

    description:
      "A central Dedicated Operation System (DOS) tracks attendance, rosters and performance at every milestone.",

    folderColor: "#F4FBF7",

    gradientTop: "#FFFFFF",

    gradientBottom: "#E5F6ED",

    borderColor: "rgba(16, 185, 129, 0.28)",

    textColor: "#0F291E",

    subTextColor: "rgba(15, 41, 30, 0.72)",

    badgeBg: "rgba(255, 255, 255, 0.85)",

    badgeBorder: "rgba(16, 185, 129, 0.3)",

    badgeText: "#065F46",

    badgeDotColor: "#10B981",

    bgImage: "/images/reliability-dos-telemetry.jpg",

    stamp: "DOS ACTIVE · 0 OUTAGES",
  },

  {
    id: "02",

    number: "02",

    title: "Pan-India Network Coverage",

    description:
      "From Bengaluru to every major corridor, our sourcing and training network spans 30+ regional hubs.",

    folderColor: "#FCFAF6",

    gradientTop: "#FFFFFF",

    gradientBottom: "#F4EDE1",

    borderColor: "rgba(217, 119, 6, 0.24)",

    textColor: "#2A1E14",

    subTextColor: "rgba(42, 30, 20, 0.72)",

    badgeBg: "rgba(255, 255, 255, 0.85)",

    badgeBorder: "rgba(217, 119, 6, 0.28)",

    badgeText: "#854D0E",

    badgeDotColor: "#F59E0B",

    bgImage: "/images/reliability-pan-india.jpg",

    stamp: "PAN-INDIA · 30+ CITIES",
  },

  {
    id: "03",

    number: "03",

    title: "24/7 Client Support",

    description:
      "Real people, 365 days a year. Whether routine roster updates or urgent replacement, we own the outcome.",

    folderColor: "#F8FAFC",

    gradientTop: "#FFFFFF",

    gradientBottom: "#EDF2F7",

    borderColor: "rgba(99, 102, 241, 0.24)",

    textColor: "#141A29",

    subTextColor: "rgba(20, 26, 41, 0.72)",

    badgeBg: "rgba(255, 255, 255, 0.85)",

    badgeBorder: "rgba(99, 102, 241, 0.28)",

    badgeText: "#3730A3",

    badgeDotColor: "#6366F1",

    bgImage: "/images/reliability-support-247.jpg",

    stamp: "365 DAYS · REAL PEOPLE",
  },
]

const gpuSpringTransition: Transition = {
  type: "spring",

  stiffness: 260,

  damping: 28,

  mass: 0.75,

  restDelta: 0.0005,

  restSpeed: 0.0005,
}

export function FolderPeek({ card }: { card: FolderCardItem }) {
  const Component = card.href ? motion.a : motion.div

  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="folder-card-wrapper relative isolate h-[430px] w-full max-w-[348px] shrink-0">
      <Component
        {...(card.href
          ? { href: card.href, target: "_blank", rel: "noopener noreferrer" }
          : {})}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="group relative block h-[430px] w-full cursor-pointer select-none overflow-hidden rounded-[28px] transform-gpu [backface-visibility:hidden] [contain:paint] [perspective:1000px] transition-shadow duration-300"
        style={{
          border: `1.5px solid ${card.borderColor}`,

          background: "#181D20",

          boxShadow: isHovered
            ? "0 22px 48px -10px rgba(15, 23, 42, 0.16), 0 38px 72px -16px rgba(15, 23, 42, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.95)"
            : "0 1px 3px rgba(0, 0, 0, 0.04), 0 12px 28px -6px rgba(15, 23, 42, 0.09), 0 24px 48px -12px rgba(15, 23, 42, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)",

          boxSizing: "border-box",
        }}
        initial="initial"
        whileHover="hover"
        animate="initial"
      >
        {/* Background photo layer */}
        <motion.div
          className="absolute inset-0 z-0 overflow-hidden transform-gpu will-change-[transform]"
          variants={{
            initial: { scale: 1 },

            hover: { scale: 1.08 },
          }}
          transition={gpuSpringTransition}
        >
          {card.bgImage ? (
            <img
              src={card.bgImage}
              alt=""
              decoding="async"
              loading="eager"
              className="pointer-events-none h-full w-full select-none object-cover"
            />
          ) : null}
          {/* Subtle photographic vignette overlay for visual depth */}
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/25 via-transparent to-black/35" />
        </motion.div>

        {/* Sliding Folder Flap with Realistic Gradients and Directional Shadows */}
        <motion.div
          className="pointer-events-none absolute inset-x-0 top-[78px] z-20 h-[380px] transform-gpu will-change-[transform]"
          variants={{
            initial: { y: 0 },

            hover: { y: 46 },
          }}
          transition={gpuSpringTransition}
        >
          <svg
            viewBox="0 0 280 380"
            fill="none"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full drop-shadow-[0_-8px_16px_rgba(15,23,42,0.12)] drop-shadow-[0_-2px_4px_rgba(15,23,42,0.06)]"
          >
            <defs>
              <linearGradient
                id={`folder-gradient-${card.number}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={card.gradientTop ?? "#FFFFFF"} />
                <stop offset="30%" stopColor={card.folderColor} />
                <stop
                  offset="100%"
                  stopColor={card.gradientBottom ?? card.folderColor}
                />
              </linearGradient>
            </defs>
            <path
              d="M 0,20 C 0,9 9,0 20,0 L 122,0 C 133,0 140,5.5 143.5,15 C 147,24.5 154,30 164,30 L 262,30 C 272,30 280,38 280,48 L 280,380 L 0,380 Z"
              fill={`url(#folder-gradient-${card.number})`}
              stroke="rgba(255, 255, 255, 0.95)"
              strokeWidth="1.2"
            />
          </svg>

          {/* Refined Architectural Folder Number */}
          <div className="absolute left-6 top-3.5 flex items-baseline gap-1 select-none">
            <span
              className="font-serif italic text-[2.75rem] font-normal leading-none tracking-tight"
              style={{ color: card.textColor }}
            >
              {card.number}
            </span>
          </div>

          {/* Top Arrow Micro-Action Button */}
          <motion.div
            className="absolute right-6 top-[38px] flex h-7 w-7 transform-gpu items-center justify-center rounded-full will-change-[transform]"
            style={{
              background: "rgba(0, 0, 0, 0.04)",

              border: "1px solid rgba(0, 0, 0, 0.08)",
            }}
            variants={{
              initial: { x: 0, scale: 1 },

              hover: { x: 4, scale: 1.1 },
            }}
            transition={gpuSpringTransition}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke={card.textColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none h-3.5 w-3.5 opacity-80"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Bottom Title, Description & Luxury Stamp Pill */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex flex-col gap-2 p-6 pb-6">
          <h3
            className="select-none font-serif text-[1.15rem] font-semibold leading-[1.3] tracking-tight"
            style={{ color: card.textColor }}
          >
            {card.title}
          </h3>
          <p
            className="select-none font-sans text-[12.5px] font-normal leading-relaxed"
            style={{ color: card.subTextColor }}
          >
            {card.description}
          </p>
          {card.stamp && (
            <div className="pt-1">
              <span
                style={{
                  display: "inline-flex",

                  alignItems: "center",

                  gap: "0.45rem",

                  fontFamily: "var(--font-mono)",

                  fontSize: "9px",

                  fontWeight: 700,

                  letterSpacing: "0.08em",

                  textTransform: "uppercase",

                  padding: "3px 9px",

                  borderRadius: "9999px",

                  background: card.badgeBg,

                  border: `1px solid ${card.badgeBorder}`,

                  color: card.badgeText,

                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
                }}
              >
                <span
                  style={{
                    width: "5px",

                    height: "5px",

                    borderRadius: "9999px",

                    backgroundColor: card.badgeDotColor,

                    boxShadow: `0 0 6px ${card.badgeDotColor}`,
                  }}
                />
                {card.stamp}
              </span>
            </div>
          )}
        </div>
      </Component>
    </div>
  )
}

export default function FolderCards({
  cards = RELIABILITY_FOLDER_CARDS,
}: {
  cards?: FolderCardItem[]
}) {
  return (
    <div className="folder-cards-grid-wrap my-8 flex w-full flex-wrap items-center justify-center gap-6 sm:gap-8">
      {cards.map((card) => (
        <FolderPeek key={card.id ?? card.number} card={card} />
      ))}
    </div>
  )
}
