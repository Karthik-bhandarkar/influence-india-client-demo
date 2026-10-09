import { useState, useRef, useEffect } from "react"

export default function LandingVideoSection({ onNavigate }: {
  onNavigate?: (target: string) => void
} = {}) {
  const [isPlaying, setIsPlaying] = useState(true)

  const [isMuted, setIsMuted] = useState(true)

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

  function togglePlay() {
    const vid = videoRef.current

    if (!vid) return

    if (vid.paused) {
      vid.play()

      setIsPlaying(true)
    } else {
      vid.pause()

      setIsPlaying(false)
    }
  }

  function toggleMute() {
    const vid = videoRef.current

    if (!vid) return

    vid.muted = !vid.muted

    setIsMuted(vid.muted)
  }

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
              poster="/images/operations-command.jpg"
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

            {/* Controls Bar */}
            <div className="landing-video-controls">
              <button
                type="button"
                className="video-ctrl-btn"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                )}
                <span>{isPlaying ? "PAUSE" : "PLAY"}</span>
              </button>

              <button
                type="button"
                className="video-ctrl-btn"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
                <span>{isMuted ? "UNMUTE" : "MUTED"}</span>
              </button>
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
