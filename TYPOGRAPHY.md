# Influence India — Complete Typography & Font Specification

> **Client & Partner Reference Document**  
> Comprehensive typography guide covering both approved design systems (**Template 1: Emerald Editorial Luxury** and **Template 2: Enterprise Tech & Career Orbit**).

---

## 📦 Quick Google Fonts Embed Code

Add this single `<link>` snippet into the `<head>` of any new website project to load all required fonts for both templates:

```html
<!-- Google Fonts Preconnect & Stylesheet -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&display=swap"
  rel="stylesheet"
/>
```

Or via CSS `@import`:
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&display=swap');
```

---

# 🌿 System 1: Emerald & Editorial Luxury (Arena Style)

**Design Aesthetic**: Prestigious, Editorial, Classic Roman Serif + High-Precision Sans.  
**Best For**: Luxury corporate branding, executive presentations, prestigious workforce partner presentations.

### Font Stacks
| Purpose | Font Family | Fallbacks |
|---|---|---|
| **Headings & Serif Display** | `'Playfair Display'` | `Georgia, 'Times New Roman', serif` |
| **Body & Clean UI** | `'Instrument Sans'` | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` |
| **Eyebrows, Badges & Numbers** | `ui-monospace` | `SFMono-Regular, Menlo, Monaco, Consolas, monospace` |
| **Masthead Nameplate** | Roman Serif Classical | `'Playfair Display', Georgia, serif` |

---

### Detailed Typography Scale (Template 1)

| UI Role | Font Family | Weight | Font Size | Line Height | Letter Spacing | Tailwind Class / CSS |
|---|---|---|---|---|---|---|
| **Hero Display (H1)** | `Playfair Display` | 600 SemiBold | `clamp(2.75rem, 6vw, 4.75rem)` (44px - 76px) | `1.06` | `-0.03em` | `font-serif text-5xl sm:text-7xl font-semibold tracking-tight` |
| **Section Title (H2)** | `Playfair Display` | 500 Medium / 600 | `clamp(2rem, 4vw, 3.25rem)` (32px - 52px) | `1.12` | `-0.02em` | `font-serif text-3xl sm:text-5xl font-medium tracking-tight` |
| **Card / Feature Title (H3)** | `Playfair Display` | 500 Medium | `1.25rem - 1.5rem` (20px - 24px) | `1.25` | `-0.01em` | `font-serif text-xl sm:text-2xl font-medium` |
| **Lead / Subheading** | `Instrument Sans` | 400 Regular | `1.125rem - 1.25rem` (18px - 20px) | `1.55` | `-0.01em` | `font-sans text-lg text-ink-muted leading-relaxed` |
| **Body Text** | `Instrument Sans` | 400 Regular | `1rem` (16px) | `1.6` | `0` | `font-sans text-base leading-relaxed` |
| **Caption / Fine Print** | `Instrument Sans` | 400 Regular | `0.8125rem` (13px) | `1.5` | `+0.01em` | `font-sans text-xs text-ink-faint` |
| **Eyebrow / Category Tag** | `Monospace` | 600 SemiBold | `0.75rem` (12px) | `1.2` | `+0.2em` (UPPERCASE) | `font-mono text-xs uppercase tracking-[0.2em]` |
| **Brand Nameplate** | `Playfair Display` | 500 Medium | `1.15rem` (18px) | `1.0` | `+0.18em` (UPPERCASE) | `font-serif text-lg tracking-[0.18em] uppercase` |

---

### Template 1 Color Pairings with Typography
- **Headings on Dark Emerald**: `#FFFFFF` / Mint mist `#A7F3D0` on `#061A14` or `#123B30`
- **Headings on Warm Paper**: Deep Charcoal `#111A16` on `#FAF8F5`
- **Body Text**: Charcoal Muted `#4B5B53`
- **Eyebrow Badges**: Neon Green `#00E575` on dark, Core Emerald `#123B30` on light

---

# ⚡ System 2: Enterprise Tech & Career Orbit (Tech Style)

**Design Aesthetic**: High-Tech, Architectural, Engineered 1px Grid, Swiss Modernism.  
**Best For**: Enterprise SaaS, operational logistics, data-driven platforms, technical workforce management.

### Font Stacks
| Purpose | Font Family | Fallbacks |
|---|---|---|
| **Headings & Primary Text** | `'Inter'` | `ui-sans-serif, system-ui, -apple-system, sans-serif` |
| **Editorial Touch & Brand Wordmark** | `'Cormorant Garamond'` | `Georgia, serif` |
| **Technical Counters & Badges** | `Inter` (Tabular) | `ui-monospace, monospace` |

---

### Detailed Typography Scale (Template 2)

| UI Role | Font Family | Weight | Font Size | Line Height | Letter Spacing | Tailwind Class / CSS |
|---|---|---|---|---|---|---|
| **Hero Title (H1)** | `Inter` | 600 SemiBold | `clamp(2.5rem, 5.5vw, 4.25rem)` (40px - 68px) | `1.08` | `-0.035em` | `font-sans text-4xl sm:text-6xl font-semibold tracking-[-0.035em]` |
| **Section Title (H2)** | `Inter` | 600 SemiBold | `clamp(1.85rem, 3.5vw, 2.75rem)` (30px - 44px) | `1.15` | `-0.025em` | `font-sans text-3xl sm:text-4xl font-semibold tracking-[-0.025em]` |
| **Editorial H2 (Alternate)** | `Cormorant Garamond` | 400 Light | `clamp(2.5rem, 5vw, 4rem)` (40px - 64px) | `1.02` | `-0.02em` | `font-serif text-4xl sm:text-6xl font-light tracking-[-0.02em]` |
| **Subheading / Overview** | `Inter` | 400 Regular | `1.125rem` (18px) | `1.6` | `-0.01em` | `font-sans text-lg text-ink-muted leading-relaxed` |
| **Body Text** | `Inter` | 400 Regular | `0.9375rem` (15px) | `1.6` | `0` | `font-sans text-[15px] leading-relaxed text-[#003E38]` |
| **Technical Metric Stat** | `Inter` | 700 Bold | `2.5rem - 3.5rem` (40px - 56px) | `1.0` | `-0.04em` | `font-sans text-4xl sm:text-5xl font-bold tracking-tighter tabular-nums` |
| **Technical Chip Eyebrow** | `Inter` | 600 SemiBold | `0.625rem` (10px) | `1.2` | `+0.42em` (UPPERCASE) | `font-sans text-[10px] font-semibold uppercase tracking-[0.42em]` |

---

### Template 2 Color Pairings with Typography
- **Primary Ink Text**: Pantone Dark Green `#003E38` (High WCAG AA contrast)
- **Secondary Muted Text**: Pantone Warm Gray 8C `#7C6F6D`
- **Faint / Structural Text**: Pantone Steel Gray `#848485`
- **Copper Accent Highlights**: Pantone Honest Brown `#B06741`
- **Canvas Base**: Section 1 Baseline `#E8F0EB`, Main Tech Canvas `#F3F5F3`

---

## 💻 Ready-to-Copy CSS Variables Snippet

You can drop these CSS variables directly into the `:root` of your new project's stylesheet:

```css
:root {
  /* ========================================================
     TEMPLATE 1: EMERALD EDITORIAL LUXURY
     ======================================================== */
  --font-editorial-serif: 'Playfair Display', Georgia, serif;
  --font-editorial-sans: 'Instrument Sans', -apple-system, sans-serif;
  --font-editorial-mono: ui-monospace, SFMono-Regular, monospace;

  --color-emerald-primary: #123B30;
  --color-emerald-dark: #061A14;
  --color-emerald-neon: #00E575;
  --color-paper-warm: #FAF8F5;
  --color-sand-border: #E8E2D8;

  /* ========================================================
     TEMPLATE 2: ENTERPRISE TECH & CAREER ORBIT
     ======================================================== */
  --font-tech-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-tech-serif: 'Cormorant Garamond', Georgia, serif;

  --color-hirou-green: #005952;
  --color-dark-green-ink: #003E38;
  --color-honest-brown: #B06741;
  --color-hirou-gray-canvas: #F3F5F3;
  --color-hero-baseline: #E8F0EB;
  --color-tech-border: rgba(0, 89, 82, 0.12);
}
```

---

## 📝 Tailwind CSS Configuration Snippet

Add this to your `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // Template 1
        'serif-editorial': ['"Playfair Display"', 'Georgia', 'serif'],
        'sans-editorial': ['"Instrument Sans"', 'sans-serif'],
        'mono-editorial': ['ui-monospace', 'SFMono-Regular', 'monospace'],
        // Template 2
        'sans-tech': ['"Inter"', 'sans-serif'],
        'serif-tech': ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      colors: {
        // Template 1
        emerald: {
          950: '#061A14',
          900: '#123B30',
          800: '#095C36',
          neon: '#00E575',
          mint: '#A7F3D0',
        },
        paper: {
          warm: '#FAF8F5',
          sand: '#E8E2D8',
        },
        // Template 2
        hirou: {
          green: '#005952',
          dark: '#003E38',
          gray: '#F3F5F3',
          hero: '#E8F0EB',
          slate: '#E4E9E6',
        },
        copper: {
          accent: '#B06741',
        },
      },
    },
  },
};
```
