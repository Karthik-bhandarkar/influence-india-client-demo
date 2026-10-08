import React, { useEffect, useRef } from "react"

export interface FooterWordmarkProps {
  text?: string
  subtext?: string
  ariaLabel?: string
  className?: string
}

interface Particle {
  x: number
  y: number
  dx: number
  dy: number
  size: number
  phase: number
}

const PADDING = 100 // design px around the wordmark reserved for scatter
const DURATION = 1750 // ms
const SAMPLE_SCALE = 2.5

function hash(n: number) {
  const s = Math.sin(n * 127.1 + 311.7) * 43758.5453
  return s - Math.floor(s)
}

function buildParticles(
  text: string,
  width: number,
  height: number,
  font: string
): Particle[] {
  const sample = document.createElement("canvas")
  sample.width = Math.ceil(width * SAMPLE_SCALE)
  sample.height = Math.ceil(height * SAMPLE_SCALE)
  const ctx = sample.getContext("2d", { willReadFrequently: true })
  if (!ctx) return []

  ctx.fillStyle = "#ffffff"
  ctx.font = font
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"

  const lines = text.split("\n").map((s) => s.trim()).filter(Boolean)
  if (lines.length > 1) {
    const fontSize = parseFloat(font)
    const lineHeight = fontSize * 0.88
    const startY = sample.height / 2 - ((lines.length - 1) * lineHeight) / 2
    lines.forEach((line, i) => {
      ctx.fillText(line, sample.width / 2, startY + i * lineHeight)
    })
  } else {
    ctx.fillText(text, sample.width / 2, sample.height / 2)
  }

  const data = ctx.getImageData(0, 0, sample.width, sample.height).data
  const particles: Particle[] = []
  const step = Math.ceil(SAMPLE_SCALE * 1.2) // sample density
  let seed = 0

  for (let y = 0; y < sample.height; y += step) {
    for (let x = 0; x < sample.width; x += step) {
      if (data[(y * sample.width + x) * 4 + 3] < 128) continue
      seed += 1
      const angle = hash(seed) * Math.PI * 2
      const distance = 12 + hash(seed + 0.5) * 58
      particles.push({
        x: x / SAMPLE_SCALE,
        y: y / SAMPLE_SCALE,
        dx: Math.cos(angle) * distance,
        dy: Math.sin(angle) * distance * 0.8,
        size: 1.4 + hash(seed + 0.25) * 1.4,
        phase: hash(seed + 0.75) * Math.PI * 2,
      })
    }
  }
  return particles
}

export default function FooterWordmark({
  text = "INFLUENCE INDIA",
  subtext = "SERVICES · NATIONWIDE WORKFORCE SOLUTIONS",
  ariaLabel = "Influence India Wordmark",
  className = "",
}: FooterWordmarkProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isBurstingRef = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    const visual = visualRef.current
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!container || !visual || !canvas || !ctx) return

    let frame = 0
    let disposed = false
    let particles: Particle[] | null = null
    let offsetX = 0
    let offsetY = 0

    const reset = () => {
      frame = 0
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      canvas.style.opacity = "0"
      visual.style.opacity = "1"
      isBurstingRef.current = false
    }

    const prepare = async (): Promise<Particle[]> => {
      if (particles) return particles
      const rect = visual.getBoundingClientRect()
      const box = container.getBoundingClientRect()
      const width = Math.max(1, rect.width)
      const height = Math.max(1, rect.height)
      offsetX = rect.left - box.left
      offsetY = rect.top - box.top
      const dpr = Math.min(window.devicePixelRatio || 1, 2.5)
      canvas.width = Math.ceil((box.width + PADDING * 2) * dpr)
      canvas.height = Math.ceil((box.height + PADDING * 2) * dpr)

      const style = window.getComputedStyle(visual)
      const font = `${style.fontStyle} ${style.fontWeight} ${
        parseFloat(style.fontSize) * SAMPLE_SCALE
      }px ${style.fontFamily}`
      await document.fonts?.load?.(font).catch(() => undefined)

      particles = buildParticles(text, width, height, font)
      return particles
    }

    const triggerBurst = () => {
      if (isBurstingRef.current || frame || disposed) return
      isBurstingRef.current = true

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        visual.animate([{ opacity: 0.6 }, { opacity: 1 }], { duration: 200 })
        isBurstingRef.current = false
        return
      }

      void prepare().then((points) => {
        if (disposed || !points.length) {
          isBurstingRef.current = false
          return
        }
        const dpr = canvas.width / (canvas.clientWidth || 1)
        const width = canvas.width / dpr
        const height = canvas.height / dpr
        let start = 0

        const draw = (now: number) => {
          if (disposed) return
          start ||= now
          const progress = Math.min(1, (now - start) / DURATION)
          if (progress >= 1) {
            reset()
            return
          }

          const spread = Math.sin(Math.PI * progress) ** 1.6
          const fade = Math.min(1, progress / 0.06, (1 - progress) / 0.08)
          visual.style.opacity = String(1 - fade)
          canvas.style.opacity = String(fade)

          ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
          ctx.clearRect(0, 0, width, height)
          ctx.fillStyle = "#ffffff"

          for (const p of points) {
            const wobble = Math.sin(p.phase + progress * Math.PI * 2) * spread
            const x = PADDING + offsetX + p.x + p.dx * spread + wobble * 6
            const y =
              PADDING +
              offsetY +
              p.y +
              p.dy * spread +
              Math.cos(p.phase + progress * 5) * spread * 5
            const size = p.size * (1 - 0.2 * spread)
            ctx.fillRect(x - size / 2, y - size / 2, size, size)
          }
          frame = requestAnimationFrame(draw)
        }
        frame = requestAnimationFrame(draw)
      })
    }

    container.addEventListener("click", triggerBurst)

    return () => {
      disposed = true
      cancelAnimationFrame(frame)
      container.removeEventListener("click", triggerBurst)
      reset()
    }
  }, [text])

  return (
    <div
      ref={containerRef}
      className={`footer-grand-wordmark-container relative w-full overflow-visible py-8 text-center select-none cursor-pointer group ${className}`}
      aria-label={ariaLabel}
      title="Click to interact with Influence India"
    >
      {/* Background ambient radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[85%] rounded-full bg-emerald-500/[0.04] blur-3xl transition-opacity duration-500 group-hover:bg-emerald-400/[0.08]" />

      {/* Main Monumental Metallic Typography */}
      <div
        ref={visualRef}
        className="footer-grand-wordmark-text relative z-10 font-serif font-extrabold tracking-[-0.03em] uppercase leading-[0.88] transition-transform duration-300 ease-out group-hover:scale-[1.01]"
      >
        <span className="block">{text}</span>
      </div>

      {subtext && (
        <div className="relative z-10 mt-3 flex items-center justify-center gap-3">
          <span className="h-[1px] w-12 bg-white/15" />
          <span className="font-mono text-[9px] sm:text-[11px] font-bold tracking-[0.22em] text-white/50 uppercase">
            {subtext}
          </span>
          <span className="h-[1px] w-12 bg-white/15" />
        </div>
      )}

      {/* Particle Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-20 h-full w-full opacity-0"
        aria-hidden="true"
      />
    </div>
  )
}
