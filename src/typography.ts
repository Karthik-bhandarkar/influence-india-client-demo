/**
 * Influence India — Complete Typography & Font Specification Module
 *
 * Covers both approved design systems:
 * - Template 1: Emerald Editorial Luxury (Arena Style)
 * - Template 2: Enterprise Tech & Career Orbit (Tech Style)
 */

export const TYPOGRAPHY_SYSTEMS = {
  template1: {
    name: "Emerald Editorial Luxury",

    style: "Arena Style",

    aesthetic:
      "Prestigious, Editorial, Classic Roman Serif + High-Precision Sans",

    bestFor:
      "Luxury corporate branding, executive presentations, prestigious workforce partner presentations",

    fonts: {
      displaySerif: "'Playfair Display', Georgia, 'Times New Roman', serif",

      cleanSans:
        "'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",

      mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",

      masthead: "'Playfair Display', Georgia, serif",
    },

    colors: {
      primaryEmerald: "#123B30",

      darkEmerald: "#061A14",

      emerald800: "#095C36",

      neonAccent: "#00E575",

      mintMist: "#A7F3D0",

      warmPaper: "#FAF8F5",

      sandBorder: "#E8E2D8",

      bodyMuted: "#4B5B53",

      deepCharcoal: "#111A16",
    },

    scaleClasses: {
      heroDisplay:
        "font-serif text-5xl sm:text-7xl font-semibold tracking-tight",

      sectionTitle:
        "font-serif text-3xl sm:text-5xl font-medium tracking-tight",

      cardTitle: "font-serif text-xl sm:text-2xl font-medium",

      lead: "font-sans text-lg text-ink-muted leading-relaxed",

      body: "font-sans text-base leading-relaxed",

      caption: "font-sans text-xs text-ink-faint",

      eyebrow: "font-mono text-xs uppercase tracking-[0.2em]",

      nameplate: "font-serif text-lg tracking-[0.18em] uppercase",
    },
  },

  template2: {
    name: "Enterprise Tech & Career Orbit",

    style: "Tech Style",

    aesthetic: "High-Tech, Architectural, Engineered 1px Grid, Swiss Modernism",

    bestFor:
      "Enterprise SaaS, operational logistics, data-driven platforms, technical workforce management",

    fonts: {
      primarySans:
        "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif",

      editorialSerif: "'Cormorant Garamond', Georgia, serif",

      tabularMono: "'Inter', ui-monospace, monospace",
    },

    colors: {
      hirouGreen: "#005952",

      darkGreenInk: "#003E38",

      honestBrown: "#B06741",

      hirouGrayCanvas: "#F3F5F3",

      heroBaseline: "#E8F0EB",

      slateBorder: "#E4E9E6",

      warmGrayMuted: "#7C6F6D",

      steelGrayStructural: "#848485",

      techBorder: "rgba(0, 89, 82, 0.12)",
    },

    scaleClasses: {
      heroTitle:
        "font-sans text-4xl sm:text-6xl font-semibold tracking-[-0.035em]",

      sectionTitle:
        "font-sans text-3xl sm:text-4xl font-semibold tracking-[-0.025em]",

      editorialH2:
        "font-serif text-4xl sm:text-6xl font-light tracking-[-0.02em]",

      subheading: "font-sans text-lg text-ink-muted leading-relaxed",

      body: "font-sans text-[15px] leading-relaxed text-[#003E38]",

      stat: "font-sans text-4xl sm:text-5xl font-bold tracking-tighter tabular-nums",

      chip: "font-sans text-[10px] font-semibold uppercase tracking-[0.42em]",
    },
  },
} as const

export default TYPOGRAPHY_SYSTEMS
