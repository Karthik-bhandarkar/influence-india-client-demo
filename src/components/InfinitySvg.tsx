import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

export default function InfinitySvg({
  className = "",
}: {
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const pulseRef = useRef<SVGCircleElement>(null)
  const glowPathRef = useRef<SVGPathElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const path = pathRef.current
    const pulse = pulseRef.current
    const glowPath = glowPathRef.current
    if (!path || !pulse || !glowPath) return

    const pathLength = path.getTotalLength()

    // Setup dash array for flowing trail effect
    gsap.set(glowPath, {
      strokeDasharray: `${pathLength * 0.35} ${pathLength * 0.65}`,
      strokeDashoffset: 0,
    })

    // GSAP continuous animation of glowing stroke trail
    const trailTween = gsap.to(glowPath, {
      strokeDashoffset: -pathLength,
      duration: 5,
      ease: "none",
      repeat: -1,
    })

    // GSAP motion path animation for traveling particle
    const progressObj = { progress: 0 }
    const particleTween = gsap.to(progressObj, {
      progress: 1,
      duration: 5,
      ease: "none",
      repeat: -1,
      onUpdate: () => {
        const point = path.getPointAtLength(progressObj.progress * pathLength)
        pulse.setAttribute("cx", point.x.toString())
        pulse.setAttribute("cy", point.y.toString())
      },
    })

    // Ambient breathing scale
    const breatheTween = gsap.to(path, {
      scale: 1.02,
      transformOrigin: "center center",
      duration: 2.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    })

    return () => {
      trailTween.kill()
      particleTween.kill()
      breatheTween.kill()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`infinity-svg-container ${
        isHovered ? "is-hovered" : ""
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title="Infinity: Continuous Career & Talent Flow"
    >
      <svg
        viewBox="0 0 300 200"
        width="100%"
        height="100%"
        className="infinity-svg"
        aria-hidden="true"
      >
        <defs>
          {/* Neon Glow Filter */}
          <filter
            id="infinity-glow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Electric Lime Gradient */}
          <linearGradient
            id="infinity-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#c4e650" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#25D366" stopOpacity="1" />
            <stop offset="100%" stopColor="#9ee333" stopOpacity="0.8" />
          </linearGradient>

          {/* Core Track Gradient */}
          <linearGradient id="infinity-track" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b4237" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#c4e650" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b4237" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Ambient Outer Track */}
        <path
          d="M 150 100 C 185 45, 260 45, 260 100 C 260 155, 185 155, 150 100 C 115 45, 40 45, 40 100 C 40 155, 115 155, 150 100 Z"
          fill="none"
          stroke="url(#infinity-track)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="infinity-track-back"
        />

        {/* Primary Precision Path */}
        <path
          ref={pathRef}
          d="M 150 100 C 185 45, 260 45, 260 100 C 260 155, 185 155, 150 100 C 115 45, 40 45, 40 100 C 40 155, 115 155, 150 100 Z"
          fill="none"
          stroke="#272e25"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Animated Glowing Trail */}
        <path
          ref={glowPathRef}
          d="M 150 100 C 185 45, 260 45, 260 100 C 260 155, 185 155, 150 100 C 115 45, 40 45, 40 100 C 40 155, 115 155, 150 100 Z"
          fill="none"
          stroke="url(#infinity-gradient)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#infinity-glow)"
          className="infinity-glow-trail"
        />

        {/* GSAP Traveling Energy Particle */}
        <circle
          ref={pulseRef}
          cx="150"
          cy="100"
          r="6"
          fill="#c4e650"
          filter="url(#infinity-glow)"
          className="infinity-energy-particle"
        />
        <circle
          cx="150"
          cy="100"
          r="2.5"
          fill="#ffffff"
          className="infinity-energy-core"
        />
      </svg>
    </div>
  )
}
