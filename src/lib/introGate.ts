/**
 * Influence India Services - Intro Persistence Gate
 * 
 * Strict specifications from implementation brief:
 * 1. Default inactivity threshold: 3 hours (3 * 60 * 60 * 1000 = 10,800,000 ms)
 * 2. Cookie name: 'iis_last_activity_at' (stores Unix timestamp in ms)
 *    - path=/; SameSite=Lax; Secure in HTTPS; max-age=30 days (2,592,000s)
 * 3. LocalStorage fallback with identical key 'iis_last_activity_at'
 * 4. On app entry: Read previous timestamp first:
 *    - If no usable timestamp -> first visit -> return true (show intro)
 *    - If now - previous timestamp >= 3 hours -> return true (show intro)
 *    - If now - previous timestamp < 3 hours -> return false (skip intro)
 * 5. On decision:
 *    - If showing intro: write current timestamp IMMEDIATELY before starting animation
 *      (prevents replay on immediate refresh or network retry)
 *    - If skipping intro: update timestamp so new visit starts fresh 3-hour inactivity window
 * 6. Throttled activity updates:
 *    - While user is actively browsing, update timestamp (throttled to at most once every 60s)
 * 7. Background tab returns:
 *    - When returning to a tab after 3+ hours away (visibilitychange -> 'visible'),
 *      evaluate gate and trigger intro if >= 3 hours inactive.
 * 8. Reduced motion:
 *    - Immediately skip intro if user prefers reduced motion.
 */

export const INACTIVITY_THRESHOLD_MS = 3 * 60 * 60 * 1000; // 3 hours in ms
export const COOKIE_NAME = "iis_last_activity_at";
export const COOKIE_MAX_AGE_SEC = 30 * 24 * 60 * 60; // 30 days in seconds
export const STORAGE_KEY = "iis_last_activity_at";
export const THROTTLE_ACTIVITY_MS = 60 * 1000; // 1 minute throttle interval

export function getSavedActivityTimestamp(): number | null {
  if (typeof window === "undefined") return null;

  let cookieTs: number | null = null;
  let lsTs: number | null = null;

  // 1. First-party functional cookie
  try {
    const cookies = document.cookie.split(";").map((c) => c.trim());
    const cookie = cookies.find((c) => c.startsWith(`${COOKIE_NAME}=`));
    if (cookie) {
      const val = cookie.substring(COOKIE_NAME.length + 1);
      const parsed = parseInt(val, 10);
      if (!isNaN(parsed) && parsed > 0) {
        cookieTs = parsed;
      }
    }
  } catch (e) {}

  // 2. LocalStorage fallback
  try {
    const lsVal = localStorage.getItem(STORAGE_KEY);
    if (lsVal) {
      const parsed = parseInt(lsVal, 10);
      if (!isNaN(parsed) && parsed > 0) {
        lsTs = parsed;
      }
    }
  } catch (e) {}

  // Unify: pick the most recent recorded activity to resolve any competing timestamps
  if (cookieTs !== null && lsTs !== null) {
    return Math.max(cookieTs, lsTs);
  }
  return cookieTs ?? lsTs ?? null;
}

/**
 * Writes the last-activity timestamp to cookie and localStorage
 */
export function recordActivityTimestamp(ts: number = Date.now()): void {
  if (typeof window === "undefined") return;

  const isSecure = window.location.protocol === "https:";
  const secureFlag = isSecure ? "; Secure" : "";

  try {
    document.cookie = `${COOKIE_NAME}=${ts}; max-age=${COOKIE_MAX_AGE_SEC}; path=/; SameSite=Lax${secureFlag}`;
  } catch (e) {}

  try {
    localStorage.setItem(STORAGE_KEY, ts.toString());
  } catch (e) {}
}

/**
 * Determines whether the intro should play.
 * Follows the 3-hour inactivity rule and accessibility (reduced motion).
 */
export function shouldPlayIntro(
  inactivityThresholdMs: number = INACTIVITY_THRESHOLD_MS,
  forcePlay = false
): boolean {
  if (typeof window === "undefined") return false;
  if (forcePlay) return true;

  // Respect reduced-motion preference
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return false;
  }

  const prevTs = getSavedActivityTimestamp();
  const now = Date.now();

  // First visit (no usable timestamp exists)
  if (prevTs === null) {
    return true;
  }

  // 3+ hours elapsed since last activity
  return now - prevTs >= inactivityThresholdMs;
}
