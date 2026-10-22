import { useEffect, useRef, useState, useId, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  INACTIVITY_THRESHOLD_MS,
  THROTTLE_ACTIVITY_MS,
  STORAGE_KEY,
  shouldPlayIntro,
  recordActivityTimestamp,
  getSavedActivityTimestamp,
} from "../lib/introGate";

interface IISLogoLiquidIntroProps {
  /** Optional callback fired when intro finishes and unmounts */
  onComplete?: () => void;
  /** Force play even if inactivity window is still active (useful for testing) */
  forcePlay?: boolean;
  /** Inactivity threshold in milliseconds (defaults to 3 hours) */
  inactivityThresholdMs?: number;
}

const FILL_DURATION_MS = 2000;    // Exactly 2 seconds liquid fill
const NAME_DELAY_MS = 80;         // Short stagger for company name
const TAGLINE_DELAY_MS = 220;     // Stagger for tagline
const HOLD_LOCKUP_MS = 750;       // Brief hold showing full brand lockup
const FADE_DURATION_MS = 450;     // Smooth fade-out into the homepage

/**
 * IISLogoLiquidIntro
 * 
 * Strict specifications from implementation brief:
 * - 3-hour inactivity persistence gate via functional cookie 'iis_last_activity_at'
 * - Timestamp recorded immediately upon deciding to show intro (prevents refresh loop)
 * - Throttled user activity sliding window during active usage
 * - Background tab (visibilitychange) evaluation
 * - Bottom-to-top 2000 ms liquid-fill SVG wave animation
 * - Staggered company name & tagline (#686868)
 * - Responsive UI tuned for mobile (360px+), tablet, laptop, and desktop
 * - Keyboard 'Escape' and skip button for instant frictionless dismissal
 * - Smooth fade out preserving deep link / requested route
 */
export function IISLogoLiquidIntro({
  onComplete,
  forcePlay = false,
  inactivityThresholdMs = INACTIVITY_THRESHOLD_MS,
}: IISLogoLiquidIntroProps) {
  const clipId = useId().replace(/:/g, "_") + "_liquid_clip";

  // Gate evaluation on app entry
  const [shouldRun, setShouldRun] = useState(() => {
    const play = shouldPlayIntro(inactivityThresholdMs, forcePlay);
    // Write timestamp immediately when deciding to show or skip:
    // "When deciding to show the intro, write the current timestamp before starting the animation,
    // not only after completion. This prevents the animation from replaying if the visitor
    // immediately refreshes because of a network issue or partial load."
    // "When skipping the intro, update the timestamp so the new visit starts a fresh inactivity window."
    recordActivityTimestamp(Date.now());
    return play;
  });

  const [isVisible, setIsVisible] = useState(shouldRun);
  const [progress, setProgress] = useState(0); // 0.0 to 1.0
  const [wavePath, setWavePath] = useState("M 0 1.05 L 1 1.05 L 1 1.05 L 0 1.05 Z");
  const [showCompanyName, setShowCompanyName] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showSkipHint, setShowSkipHint] = useState(false);
  const rafRef = useRef<number | null>(null);
  const finishedRef = useRef(false);

  const completeIntro = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;

    // Refresh last-activity timestamp on completion
    recordActivityTimestamp(Date.now());
    setIsVisible(false);

    // Restore body scroll
    document.body.style.overflow = "";

    setTimeout(() => {
      onComplete?.();
    }, FADE_DURATION_MS);
  }, [onComplete]);

  // Setup background tab visibility listener and throttled active user tracking
  useEffect(() => {
    let lastThrottledActivity = Date.now();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        const prevTs = getSavedActivityTimestamp();
        const now = Date.now();
        if (prevTs && now - prevTs >= inactivityThresholdMs) {
          // 3+ hours have elapsed while tab was in background.
          // Gracefully protect visitor: do NOT interrupt if user is in an active form or reading workflow
          const activeEl = document.activeElement;
          const isInputFocused =
            activeEl &&
            (activeEl.tagName === "INPUT" ||
              activeEl.tagName === "TEXTAREA" ||
              activeEl.tagName === "SELECT" ||
              activeEl.getAttribute("contenteditable") === "true");

          const hasDirtyFormInput = Array.from(
            document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
              "input:not([type=hidden]):not([type=submit]):not([type=button]), textarea"
            )
          ).some((el) => el.value && el.value.trim().length > 0);

          const isFormPageOrScrolled =
            window.location.hash === "#contact" || window.scrollY > 200;

          if (isInputFocused || hasDirtyFormInput || isFormPageOrScrolled) {
            // Do not interrupt active visitor workflow; slide window forward
            recordActivityTimestamp(now);
            lastThrottledActivity = now;
            return;
          }

          recordActivityTimestamp(now);
          finishedRef.current = false;
          setProgress(0);
          setShowCompanyName(false);
          setShowTagline(false);
          setShowSkipHint(false);
          setShouldRun(true);
          setIsVisible(true);
        } else {
          // Slide activity window forward
          recordActivityTimestamp(now);
          lastThrottledActivity = now;
        }
      }
    };

    const handleUserActivity = () => {
      const now = Date.now();
      if (now - lastThrottledActivity > THROTTLE_ACTIVITY_MS) {
        lastThrottledActivity = now;
        recordActivityTimestamp(now);
      }
    };

    // Cross-tab synchronization: keep activity consistent across tabs without polling
    const handleStorageEvent = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        const parsed = parseInt(e.newValue, 10);
        if (!isNaN(parsed) && parsed > 0) {
          lastThrottledActivity = parsed;
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pointerdown", handleUserActivity, { passive: true });
    window.addEventListener("keydown", handleUserActivity, { passive: true });
    window.addEventListener("touchstart", handleUserActivity, { passive: true });
    window.addEventListener("scroll", handleUserActivity, { passive: true });
    window.addEventListener("storage", handleStorageEvent);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pointerdown", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
      window.removeEventListener("touchstart", handleUserActivity);
      window.removeEventListener("scroll", handleUserActivity);
      window.removeEventListener("storage", handleStorageEvent);
    };
  }, [inactivityThresholdMs]);

  // Animation lifecycle
  useEffect(() => {
    if (!shouldRun) {
      onComplete?.();
      return;
    }

    document.body.style.overflow = "hidden";

    // Show subtle skip hint after 600ms
    const skipTimer = setTimeout(() => {
      setShowSkipHint(true);
    }, 600);

    const startTime = performance.now();

    const frame = (now: number) => {
      const elapsed = now - startTime;
      const p = Math.min(1, Math.max(0, elapsed / FILL_DURATION_MS));
      setProgress(p);

      // Water level Y in normalized coordinates [0.0 = top, 1.0 = bottom]
      const waterY = 1.03 - p * 1.06;

      // Gentle wave parameters: dampens to 0 at completion for clean edges
      const waveAmp = p >= 0.98 ? 0 : Math.sin(p * Math.PI) * 0.018;
      const phase = (elapsed / 280) * Math.PI * 2;

      // Multi-point cubic wave curve
      const y0 = Math.min(1.05, Math.max(-0.05, waterY + Math.sin(phase) * waveAmp));
      const y1 = Math.min(1.05, Math.max(-0.05, waterY + Math.sin(phase + Math.PI * 0.6) * waveAmp));
      const y2 = Math.min(1.05, Math.max(-0.05, waterY + Math.sin(phase + Math.PI * 1.2) * waveAmp));
      const y3 = Math.min(1.05, Math.max(-0.05, waterY + Math.sin(phase + Math.PI * 1.8) * waveAmp));
      const y4 = Math.min(1.05, Math.max(-0.05, waterY + Math.sin(phase + Math.PI * 2.4) * waveAmp));

      const pathD = `M 0 ${y0.toFixed(4)} Q 0.125 ${(y0 + (y1 - y0) * 0.5 - waveAmp * 0.5).toFixed(4)}, 0.25 ${y1.toFixed(4)} T 0.5 ${y2.toFixed(4)} T 0.75 ${y3.toFixed(4)} T 1.0 ${y4.toFixed(4)} L 1.0 1.08 L 0.0 1.08 Z`;
      setWavePath(pathD);

      if (p < 1) {
        rafRef.current = requestAnimationFrame(frame);
      } else {
        // Step 1: Logo fill completes at exactly 2000 ms
        setTimeout(() => {
          setShowCompanyName(true);
        }, NAME_DELAY_MS);

        // Step 2: Tagline reveals beneath
        setTimeout(() => {
          setShowTagline(true);
        }, NAME_DELAY_MS + TAGLINE_DELAY_MS);

        // Step 3: Complete & dissolve into homepage
        setTimeout(() => {
          completeIntro();
        }, NAME_DELAY_MS + TAGLINE_DELAY_MS + HOLD_LOCKUP_MS);
      }
    };

    rafRef.current = requestAnimationFrame(frame);

    // Keyboard 'Escape' listener for instant skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        completeIntro();
      }
    };
    // Failsafe watchdog timer: guarantees a visitor is never trapped if RAF or browser is throttled
    const watchdogTimer = setTimeout(() => {
      if (!finishedRef.current) {
        completeIntro();
      }
    }, FILL_DURATION_MS + NAME_DELAY_MS + TAGLINE_DELAY_MS + HOLD_LOCKUP_MS + 1000);

    return () => {
      clearTimeout(skipTimer);
      clearTimeout(watchdogTimer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [shouldRun, completeIntro, onComplete]);

  if (!shouldRun) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="iis-liquid-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_DURATION_MS / 1000, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#FAF8F5] px-4 sm:px-6 select-none overflow-hidden touch-none"
          style={{ willChange: "opacity" }}
          aria-label="Influence India Services loading introduction"
          role="dialog"
          aria-modal="true"
        >
          {/* Subtle Skip button for accessible / power-user UX */}
          {showSkipHint && (
            <motion.button
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={completeIntro}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3 py-1.5 rounded-full border border-black/10 bg-white/70 backdrop-blur-sm text-[11px] sm:text-xs font-mono font-medium text-[#4B5B53] hover:text-[#111A16] hover:bg-white/95 transition-all shadow-sm flex items-center gap-1.5 cursor-pointer z-10"
              title="Skip intro animation"
            >
              <span>Skip</span>
              <span className="hidden sm:inline text-[9px] text-[#686868] opacity-70">(Esc)</span>
            </motion.button>
          )}

          {/* Hidden SVG defs for liquid wave clip-path */}
          <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
            <defs>
              <clipPath id={clipId} clipPathUnits="objectBoundingBox">
                <path d={wavePath} />
              </clipPath>
            </defs>
          </svg>

          {/* Centered composition tuned for phone, tablet, laptop, and desktop */}
          <div className="flex flex-col items-center justify-center text-center max-w-[90vw]">
            {/* Logo container:
                - Phone: 150px
                - Tablet: 220px
                - Laptop / Desktop: 290px
                Strictly keeps 1600 / 1081 aspect ratio
            */}
            <div className="relative w-[150px] xs:w-[170px] sm:w-[230px] md:w-[290px] aspect-[1600/1081] flex items-center justify-center transition-all duration-300">
              {/* Layer A - Outline */}
              <img
                src="/images/influence-india-logo-outline.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
                style={{
                  opacity: progress >= 1 ? 0 : 0.85,
                  transition: "opacity 0.25s ease-out",
                }}
              />

              {/* Layer B - Master Colored Artwork with Layer C liquid wave mask */}
              <div
                className="absolute inset-0 w-full h-full pointer-events-none select-none"
                style={{
                  clipPath: progress >= 1 ? "none" : `url(#${clipId})`,
                  WebkitClipPath: progress >= 1 ? "none" : `url(#${clipId})`,
                }}
              >
                <img
                  src="/images/influence-india-logo.png"
                  alt="Influence India Services"
                  className="w-full h-full object-contain pointer-events-none"
                  loading="eager"
                />
              </div>
            </div>

            {/* Typography Lockup */}
            <div className="mt-4 sm:mt-6 flex flex-col items-center justify-center min-h-[50px] sm:min-h-[60px]">
              {/* Company Name */}
              <motion.div
                initial={{ opacity: 0, y: 7 }}
                animate={showCompanyName ? { opacity: 1, y: 0 } : { opacity: 0, y: 7 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="text-[11px] sm:text-[13px] md:text-[14px] font-sans font-semibold tracking-[0.22em] sm:tracking-[0.28em] text-[#123B30] uppercase"
              >
                INFLUENCE INDIA SERVICES
              </motion.div>

              {/* Tagline in specified #686868 */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={showTagline ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="mt-1 sm:mt-1.5 text-[11.5px] sm:text-[13px] md:text-[14px] font-sans font-normal tracking-normal text-[#686868]"
              >
                One system. Every step of the career.
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IISLogoLiquidIntro;


