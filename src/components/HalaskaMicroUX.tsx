import React, { useState } from "react";
import {
  StatusBadge,
  StatusDot,
  Badge,
  Tooltip,
  HoverCard,
  Button,
  ButtonGroup,
  SpringToggle,
  Sparkline,
  Toast,
  AlertBanner,
  Card,
  Sheet,
  AccentContext,
  ThemeProvider,
} from "../halaska-kit";

/**
 * HalaskaMicroUX — Curated Micro-Interactions & Tactile Details
 * -------------------------------------------------------------------
 * Seamlessly integrates Halaska UI's tactile micro-feedback into
 * Influence India's Luxury Emerald & Enterprise design system.
 */

export function LiveHubStatusBadge({ hubsCount = "30+" }: { hubsCount?: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#00E575]/25 bg-[#061A14]/90 px-3 py-1 backdrop-blur-md shadow-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00E575] opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00E575]" />
      </span>
      <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#A7F3D0]">
        {hubsCount} Active Hubs • Live Operations
      </span>
    </div>
  );
}

export function MetricHoverCard({
  value,
  label,
  details,
  trend = [88, 91, 94, 96, 98.4],
}: {
  value: string;
  label: string;
  details: string;
  trend?: number[];
}) {
  return (
    <div className="group relative inline-block">
      <div className="cursor-pointer transition-transform duration-200 group-hover:-translate-y-0.5">
        <span className="font-serif text-3xl font-medium tracking-tight text-[#123B30] sm:text-4xl">
          {value}
        </span>
        <span className="mt-1 block font-sans text-xs font-semibold text-[#111A16]">
          {label}
        </span>
      </div>

      {/* Tactile micro-popover on hover */}
      <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 z-30">
        <div className="w-56 rounded-xl border border-white/15 bg-[#061A14] p-3 text-white shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#00E575] uppercase">Verified SLA</span>
            <span className="font-mono text-[10px] text-white/50">99.4% peak</span>
          </div>
          <p className="mt-1 font-sans text-xs text-[#A3C2B3] leading-relaxed">{details}</p>
          <div className="mt-2 h-0.5 w-full bg-[#00E575]/30 rounded-full overflow-hidden">
            <div className="h-full bg-[#00E575] w-[98%]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function QuickEnquiryDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [selectedService, setSelectedService] = useState("Staffing");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="h-full w-full max-w-md bg-[#0A1A14] border-l border-white/10 p-6 sm:p-8 text-white shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00E575]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#A7F3D0]">
                Direct Enterprise Desk
              </span>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg border border-white/10 p-1.5 text-white/70 hover:bg-white/10 hover:text-white"
            >
              ✕
            </button>
          </div>

          <h3 className="mt-6 font-serif text-2xl font-medium text-white">
            Request Workforce Roster
          </h3>
          <p className="mt-2 font-sans text-sm text-[#A3C2B3]">
            Connect directly with an operational lead in your corridor. Fast-track turnaround within 4 hours.
          </p>

          {/* Service Picker */}
          <div className="mt-6">
            <label className="font-mono text-xs uppercase text-white/60">Select Pipeline</label>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {["Corporate Staffing", "Skill Academy", "GTP Certification", "Onsite Roster Ops"].map(
                (item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSelectedService(item)}
                    className={`rounded-lg border p-2.5 text-left text-xs font-medium transition ${
                      selectedService === item
                        ? "border-[#00E575] bg-[#00E575]/15 text-[#00E575]"
                        : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                    }`}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Quick Input Fields */}
          <div className="mt-6 space-y-4">
            <div>
              <label className="font-mono text-xs uppercase text-white/60">Company / Organization</label>
              <input
                type="text"
                placeholder="e.g. Apex Logistics"
                className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 focus:border-[#00E575] focus:outline-none"
              />
            </div>
            <div>
              <label className="font-mono text-xs uppercase text-white/60">Contact Email / Phone</label>
              <input
                type="text"
                placeholder="e.g. lead@company.com"
                className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 focus:border-[#00E575] focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-4">
          {submitted ? (
            <div className="rounded-lg bg-[#00E575]/20 border border-[#00E575] p-3 text-center font-mono text-xs text-[#00E575]">✓ Enquiry logged. A coordinator will ping your email shortly.
            </div>
          ) : (
            <button
              onClick={() => {
                setSubmitted(true);
                setTimeout(() => {
                  setSubmitted(false);
                  onClose();
                }, 2200);
              }}
              className="w-full rounded-xl bg-[#00E575] py-3 text-sm font-semibold text-black transition hover:bg-[#00C261] shadow-lg shadow-[#00E575]/20"
            >
              Dispatch Fast-Track Request
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * HalaskaKitShowcase — Interactive Demo Component for Template Studio
 */
export function HalaskaKitShowcase() {
  const [accent, setAccent] = useState("#00E575");
  const [toggleState, setToggleState] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <AccentContext.Provider value={accent}>
      <div className="bg-[#FAF8F5] p-8 sm:p-12 text-[#111A16] rounded-3xl">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#123B30] font-semibold">
              Tactile Micro-UX & Component Suite
            </span>
            <h3 className="mt-2 font-serif text-3xl sm:text-4xl font-medium text-[#111A16]">
              Halaska UI Micro-Interaction Layer
            </h3>
            <p className="mt-2 text-sm text-[#4B5B53] max-w-xl mx-auto">
              Elevates buttons, status pills, hovercards, and quick drawers with tactile spring physics — perfectly themed to our luxury emerald system.
            </p>
          </div>

          {/* Interactive Component Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Status Badges & Live Dots */}
            <div className="rounded-2xl border border-[#E8E2D8] bg-white p-6 shadow-sm">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#123B30] font-semibold">
                1. Status Badges & Live Indicators
              </h4>
              <p className="mt-1 text-xs text-[#7E8E85]">High-clarity indicators with pulsating beacons</p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <LiveHubStatusBadge hubsCount="30+" />
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-900/10 bg-emerald-50 px-2.5 py-1 text-xs font-mono text-[#123B30]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00E575]" />
                  99.4% Match SLA
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-1 text-xs font-mono text-neutral-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Roster Live
                </span>
              </div>
            </div>

            {/* 2. Tactile Hover Cards */}
            <div className="rounded-2xl border border-[#E8E2D8] bg-white p-6 shadow-sm">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#123B30] font-semibold">
                2. Telemetry Hover Cards
              </h4>
              <p className="mt-1 text-xs text-[#7E8E85]">Hover over any stat to see live telemetry insights</p>

              <div className="mt-4 flex items-center justify-around border-t border-[#E8E2D8] pt-4">
                <MetricHoverCard
                  value="< 4 hrs"
                  label="Surge Deployment"
                  details="Standby certified pool deployed via nearest hub lead with full background verification."
                />
                <MetricHoverCard
                  value="98.4%"
                  label="Retention SLA"
                  details="Real-time biometric attendance tracking backed by continuous onsite supervisory presence."
                />
              </div>
            </div>

            {/* 3. Interactive Spring Toggles & Buttons */}
            <div className="rounded-2xl border border-[#E8E2D8] bg-white p-6 shadow-sm">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#123B30] font-semibold">
                3. Tactile Spring Controls & Buttons
              </h4>
              <p className="mt-1 text-xs text-[#7E8E85]">Natural spring physics with micro feedback</p>

              <div className="mt-4 flex items-center justify-between border-t border-[#E8E2D8] pt-4">
                <span className="text-sm font-medium text-[#111A16]">Live Telemetry Stream</span>
                <button
                  type="button"
                  onClick={() => {
                    setToggleState(!toggleState);
                    showToast(toggleState ? "Telemetry paused" : "Telemetry streaming active");
                  }}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    toggleState ? "bg-[#123B30]" : "bg-neutral-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      toggleState ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => showToast("Pipeline synchronizing...")}
                  className="rounded-lg bg-[#123B30] px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-[#095C36] active:scale-95"
                >
                  Sync Pipeline
                </button>
                <button
                  onClick={() => setDrawerOpen(true)}
                  className="rounded-lg border border-[#123B30] px-3.5 py-1.5 text-xs font-semibold text-[#123B30] transition hover:bg-[#123B30]/5 active:scale-95"
                >
                  Open →</button>
              </div>
            </div>

            {/* 4. Action Drawer Preview */}
            <div className="rounded-2xl border border-[#E8E2D8] bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#123B30] font-semibold">
                  4. Slide-Out Quick Enquiry Drawer
                </h4>
                <p className="mt-1 text-xs text-[#7E8E85]">
                  Instant high-converting slideout without navigating away from the page
                </p>
              </div>

              <button
                onClick={() => setDrawerOpen(true)}
                className="mt-6 flex items-center justify-between rounded-xl bg-[#061A14] p-4 text-white hover:bg-[#123B30] transition shadow-md"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#00E575]" />
                  <span className="text-xs font-mono uppercase tracking-wider">Fast-Track Roster Desk</span>
                </div>
                <span className="text-xs text-[#00E575] font-mono">Open →</span>
              </button>
            </div>
          </div>

          {/* Toast Notification */}
          {toastMessage && (
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-full border border-white/10 bg-[#061A14] px-5 py-2.5 font-mono text-xs text-[#A7F3D0] shadow-2xl backdrop-blur-md animate-fade-in">
              {toastMessage}
            </div>
          )}

          {/* Slide-out Drawer */}
          <QuickEnquiryDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
        </div>
      </div>
    </AccentContext.Provider>
  );
}
