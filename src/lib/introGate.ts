/**
 * Influence India Services - Intro Persistence Gate
 * 
 * QUICK FIX: Play the IIS logo intro on every full page load.
 *
 * 1. The cookie-based and timestamp-based persistence gate is removed so the intro
 *    plays on every full website load and browser refresh.
 * 2. Stale 'iis_last_activity_at' values from previous visits are cleared and ignored.
 * 3. Timestamps are no longer written or tracked.
 * 4. Internal SPA navigation does not replay the intro.
 * 5. Respects accessibility (prefers-reduced-motion: reduce).
 */

export const COOKIE_NAME = "iis_last_activity_at";
export const STORAGE_KEY = "iis_last_activity_at";

/**
 * Clears any stale intro activity cookie or localStorage entry
 */
export function clearIntroActivityTimestamp(): void {
  if (typeof window === "undefined") return;
  try {
    document.cookie = `${COOKIE_NAME}=; max-age=0; path=/; SameSite=Lax`;
  } catch (e) {}
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {}
}

/**
 * Returns null: timestamps are no longer used to gate the intro.
 */
export function getSavedActivityTimestamp(): number | null {
  return null;
}

/**
 * No-op: Timestamps are no longer written so every full page load plays the intro.
 */
export function recordActivityTimestamp(_ts: number = Date.now()): void {
  // Persistence gate removed: do not write or update timestamps
}

/**
 * Determines whether the intro should play.
 * Plays on every full document load, while respecting prefers-reduced-motion.
 */
export function shouldPlayIntro(
  _inactivityThresholdMs?: number,
  forcePlay = false
): boolean {
  if (typeof window === "undefined") return false;
  if (forcePlay) return true;

  // Respect reduced-motion preference
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return false;
  }

  // Always play on full page load
  return true;
}

// Clean up any stale timestamps on module load
if (typeof window !== "undefined") {
  clearIntroActivityTimestamp();
}
