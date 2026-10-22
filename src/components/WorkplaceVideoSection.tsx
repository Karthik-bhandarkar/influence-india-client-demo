import { useState, useRef, useEffect } from "react"

export default function WorkplaceVideoSection({ onNavigate }: {
  onNavigate?: (target: string) => void
} = {}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`section landing-video-section editorial-reveal ${
        inView ? "is-revealed" : ""
      }`}
      aria-labelledby="video-showcase-title"
    >
      <div className="container">
        <div className="landing-video-header">
          <div className="section-label">
            <span className="label-dot" />
            <span className="section-number">02 /</span>
            <span>OPERATIONS IN MOTION</span>
          </div>
          <h2 id="video-showcase-title">
            See the on-ground workforce system{" "}
            <span className="text-lime">in everyday action.</span>
          </h2>
          <p className="landing-video-sub">
            From corporate floors to logistics corridors, our managed teams are
            sourced, certified, and supervised under one accountable operating
            standard.
          </p>
        </div>

        <div className="landing-video-frame-wrap">
          <div className="landing-video-frame">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/images/workplace-poster.jpg"
              className="landing-video-element"
            >
              <source src="/videos/workplace-loop.mp4" type="video/mp4" />
            </video>
            <div className="landing-video-overlay" />

            {/* Floating Top Telemetry Badge */}
            <div className="landing-video-badge-top">
              <span className="live-status-dot" aria-hidden="true" />
              <span>LIVE WORKSPACE TELEMETRY · 30+ CITIES</span>
            </div>

            {/* Corner Metrics Overlay */}
            <div className="landing-video-stats-overlay">
              <div className="video-stat-pill">
                <strong>99.2%</strong>
                <span>ROSTER ADHERENCE</span>
              </div>
              <div className="video-stat-pill">
                <strong>100%</strong>
                <span>VERIFIED PVC CHECKS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
