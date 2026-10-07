/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // Template 1: Emerald Editorial Luxury
        "serif-editorial": ['"Playfair Display"', "Georgia", "serif"],
        "sans-editorial": [
          '"Instrument Sans"',
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        "mono-editorial": [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
        // Template 2: Enterprise Tech & Career Orbit
        "sans-tech": ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        "serif-tech": ['"Cormorant Garamond"', "Georgia", "serif"],
      },
      colors: {
        // Template 1
        emerald: {
          950: "#061A14",
          900: "#123B30",
          800: "#095C36",
          neon: "#00E575",
          mint: "#A7F3D0",
        },
        paper: {
          warm: "#FAF8F5",
          sand: "#E8E2D8",
        },
        // Template 2
        hirou: {
          green: "#005952",
          dark: "#003E38",
          gray: "#F3F5F3",
          hero: "#E8F0EB",
          slate: "#E4E9E6",
        },
        copper: {
          accent: "#B06741",
        },
      },
    },
  },
}
