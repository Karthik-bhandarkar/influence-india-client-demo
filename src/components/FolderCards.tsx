import React, { useState } from "react"
import { motion, type Transition } from "framer-motion"

export interface FolderCardItem {
  id?: string | number
  number: string
  title: string
  description: string
  bgImage?: string
  characterImage: string
  folderColor: string
  borderColor: string
  textColor?: string
  subTextColor?: string
  href?: string
  stamp?: string
}

const OBJECT =
  "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis"

export const RELIABILITY_FOLDER_CARDS: FolderCardItem[] = [
  {
    id: "01",
    number: "01",
    title: "Real-Time Workforce Monitoring",
    description: "A central Dedicated Operation System (DOS) tracks attendance, rosters and performance at every milestone.",
    folderColor: "#D8F5E4",
    borderColor: "#B8EBCE",
    textColor: "#1F4D38",
    subTextColor: "rgba(31, 77, 56, 0.75)",
    bgImage: "/images/operations-command.jpg",
    characterImage: `${OBJECT}/Objects/Chart%20Increasing.png`,
    stamp: "✦ DOS ACTIVE · 0 OUTAGES",
  },
  {
    id: "02",
    number: "02",
    title: "Pan-India Network Coverage",
    description: "From Bengaluru to every major corridor, our sourcing and training network spans 30+ regional hubs.",
    folderColor: "#FFE8D6",
    borderColor: "#FFD4B8",
    textColor: "#5C3D2E",
    subTextColor: "rgba(92, 61, 46, 0.75)",
    bgImage: "/images/workplace-team.jpg",
    characterImage: `${OBJECT}/Travel%20and%20places/Globe%20Showing%20Asia-Australia.png`,
    stamp: "✦ PAN-INDIA · 30+ CITIES",
  },
  {
    id: "03",
    number: "03",
    title: "24/7 Client Support",
    description: "Real people, 365 days a year. Whether routine roster updates or urgent replacement, we own the outcome.",
    folderColor: "#E8DFFB",
    borderColor: "#D4C4F5",
    textColor: "#3B2F63",
    subTextColor: "rgba(59, 47, 99, 0.75)",
    bgImage: "/images/team-training.jpg",
    characterImage: `${OBJECT}/Objects/Telephone%20Receiver.png`,
    stamp: "✦ 365 DAYS · REAL PEOPLE",
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
  const textColor = card.textColor ?? "#09090b"
  const subTextColor = card.subTextColor ?? "rgba(9, 9, 11, 0.65)"
  const Component = card.href ? motion.a : motion.div
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div className="folder-card-wrapper relative isolate h-[420px] w-full max-w-[340px] shrink-0">
      <Component
        {...(card.href
          ? { href: card.href, target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="group relative block h-[420px] w-full cursor-pointer select-none overflow-hidden rounded-[32px] shadow-lg transform-gpu [backface-visibility:hidden] [contain:paint] [perspective:1000px]"
        style={{
          border: `10px solid ${card.borderColor}`,
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
            hover: { scale: 1.09 },
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
        </motion.div>

        {/* Floating pop-out character / 3D object */}
        <motion.div
          className="pointer-events-none absolute left-1/2 top-[120px] z-10 flex w-[230px] -translate-x-1/2 justify-center transform-gpu will-change-[transform]"
          variants={{
            initial: { y: 0, scale: 0.96 },
            hover: { y: -72, scale: 1.08 },
          }}
          transition={gpuSpringTransition}
        >
          <motion.div
            animate={{ y: [0, -6, 0], rotate: [0, 1.5, -1.5, 0] }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center justify-center"
          >
            {!imgFailed ? (
              <img
                src={card.characterImage}
                alt=""
                onError={() => setImgFailed(true)}
                decoding="async"
                loading="eager"
                className="pointer-events-none h-44 w-auto max-w-[180px] transform-gpu select-none object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.25)]"
              />
            ) : (
              <div
                className="flex h-36 w-36 items-center justify-center rounded-3xl"
                style={{
                  background: card.folderColor,
                  color: card.textColor,
                  boxShadow: "0 18px 24px rgba(0,0,0,0.2)",
                }}
              >
                <span style={{ fontSize: "2.5rem" }}>✦</span>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Sliding Folder Flap */}
        <motion.div
          className="pointer-events-none absolute inset-x-0 top-[80px] z-20 h-[380px] transform-gpu will-change-[transform]"
          variants={{
            initial: { y: 0 },
            hover: { y: 105 },
          }}
          transition={gpuSpringTransition}
        >
          <svg
            viewBox="0 0 280 380"
            fill="none"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full drop-shadow-[0_-10px_20px_rgba(0,0,0,0.15)]"
          >
            <path
              d="M 0,20 C 0,9 9,0 20,0 L 122,0 C 133,0 140,5.5 143.5,15 C 147,24.5 154,30 164,30 L 262,30 C 272,30 280,38 280,48 L 280,380 L 0,380 Z"
              fill={card.folderColor}
            />
          </svg>

          {/* Large Folder Number */}
          <div
            className="absolute left-6 top-4 font-mono text-[3.5rem] font-bold tabular-nums leading-none tracking-tighter select-none"
            style={{ color: textColor }}
          >
            {card.number}
          </div>

          {/* Top Arrow Icon */}
          <motion.div
            className="absolute right-6 top-[46px] flex h-6 w-6 transform-gpu items-center justify-center will-change-[transform]"
            variants={{
              initial: { x: 0, scale: 1 },
              hover: { x: 4, scale: 1.15 },
            }}
            transition={gpuSpringTransition}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke={textColor}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none h-5 w-5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Bottom Title & Description */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex flex-col gap-2 p-5 pb-[22px]"
          style={{ color: textColor }}
        >
          <h3
            className="select-none font-sans text-base font-semibold leading-snug tracking-tight"
            style={{ color: textColor }}
          >
            {card.title}
          </h3>
          <p
            className="select-none font-sans text-xs font-normal leading-relaxed opacity-85"
            style={{ color: subTextColor }}
          >
            {card.description}
          </p>
          {card.stamp && (
            <div style={{ marginTop: "0.25rem" }}>
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "2px 8px",
                  borderRadius: "9999px",
                  background: "rgba(255, 255, 255, 0.65)",
                  border: `1px solid ${card.borderColor}`,
                  color: textColor,
                }}
              >
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
