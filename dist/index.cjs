"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var index_exports = {};
__export(index_exports, {
  BACKGROUND: () => BACKGROUND,
  GRADIENTS: () => GRADIENTS,
  GRADIENT_DIRECTIONS: () => GRADIENT_DIRECTIONS,
  darkTheme: () => darkTheme,
  darkThemeColors: () => darkThemeColors,
  getContrast: () => getContrast,
  getContrastInfo: () => getContrastInfo,
  getLuminance: () => getLuminance,
  hexToRgb: () => hexToRgb,
  lightTheme: () => lightTheme,
  lightThemeColors: () => lightThemeColors,
  meetsWCAGAA: () => meetsWCAGAA,
  meetsWCAGAAA: () => meetsWCAGAAA,
  radiusTokens: () => radiusTokens,
  shadowTokens: () => shadowTokens,
  spacingTokens: () => spacingTokens,
  themes: () => themes_default,
  tokens: () => tokens_default,
  typographyTokens: () => typographyTokens,
  validateContrast: () => validateContrast
});
module.exports = __toCommonJS(index_exports);

// tokens/colors/light.json
var light_default = {
  $schema: "https://json.schemastore.org/theme.json",
  $description: "Light theme color palette - Modern and professional design with WCAG AA compliance",
  colors: {
    primary: {
      base: "#0891b2",
      hover: "#0e7490",
      active: "#155e75",
      disabled: "#d4d4d4",
      focus: "#0891b2",
      background: "#ecfeff",
      backgroundHover: "#cffafe",
      backgroundActive: "#a5f3fc",
      border: "#0891b2",
      borderHover: "#0e7490",
      borderFocus: "#06b6d4",
      text: "#ffffff",
      textHover: "#ffffff",
      textDisabled: "#a3a3a3"
    },
    secondary: {
      base: "#9333ea",
      hover: "#7e22ce",
      active: "#6b21a8",
      disabled: "#d4d4d4",
      focus: "#9333ea",
      background: "#faf5ff",
      backgroundHover: "#f3e8ff",
      backgroundActive: "#e9d5ff",
      border: "#9333ea",
      borderHover: "#7e22ce",
      borderFocus: "#a855f7",
      text: "#ffffff",
      textHover: "#ffffff",
      textDisabled: "#a3a3a3"
    },
    accent: {
      base: "#db2777",
      hover: "#be185d",
      active: "#9f1239",
      disabled: "#d4d4d4",
      focus: "#db2777",
      background: "#fdf2f8",
      backgroundHover: "#fce7f3",
      backgroundActive: "#fbcfe8",
      border: "#db2777",
      borderHover: "#be185d",
      borderFocus: "#ec4899",
      text: "#ffffff",
      textHover: "#ffffff",
      textDisabled: "#a3a3a3"
    },
    background: {
      primary: "#ffffff",
      secondary: "#fafafa",
      tertiary: "#f5f5f5",
      inverse: "#0a0a0f",
      overlay: "rgba(0, 0, 0, 0.5)",
      muted: "#f9fafb"
    },
    surface: {
      primary: "#ffffff",
      secondary: "#fafafa",
      tertiary: "#f5f5f5",
      elevated: "#ffffff",
      overlay: "rgba(0, 0, 0, 0.5)",
      hover: "#f9fafb",
      active: "#f3f4f6"
    },
    text: {
      primary: "#171717",
      secondary: "#404040",
      tertiary: "#737373",
      inverse: "#ffffff",
      disabled: "#a3a3a3",
      link: "#0891b2",
      linkHover: "#0e7490",
      linkActive: "#155e75",
      linkVisited: "#7e22ce",
      onPrimary: "#ffffff",
      onSecondary: "#ffffff",
      onAccent: "#ffffff",
      onBackground: "#171717",
      onSurface: "#171717"
    },
    border: {
      primary: "#e5e5e5",
      secondary: "#d4d4d4",
      tertiary: "#a3a3a3",
      focus: "#0891b2",
      focusRing: "#06b6d4",
      inverse: "#404040",
      hover: "#d4d4d4",
      active: "#a3a3a3",
      disabled: "#e5e5e5"
    },
    status: {
      success: {
        base: "#22c55e",
        hover: "#16a34a",
        active: "#15803d",
        background: "#f0fdf4",
        backgroundHover: "#dcfce7",
        border: "#86efac",
        text: "#ffffff",
        textOnBackground: "#166534"
      },
      warning: {
        base: "#f59e0b",
        hover: "#d97706",
        active: "#b45309",
        background: "#fffbeb",
        backgroundHover: "#fef3c7",
        border: "#fcd34d",
        text: "#ffffff",
        textOnBackground: "#92400e"
      },
      error: {
        base: "#ef4444",
        hover: "#dc2626",
        active: "#b91c1c",
        background: "#fef2f2",
        backgroundHover: "#fee2e2",
        border: "#fca5a5",
        text: "#ffffff",
        textOnBackground: "#991b1b"
      },
      info: {
        base: "#3b82f6",
        hover: "#2563eb",
        active: "#1d4ed8",
        background: "#eff6ff",
        backgroundHover: "#dbeafe",
        border: "#93c5fd",
        text: "#ffffff",
        textOnBackground: "#1e40af"
      }
    },
    interactive: {
      default: "#0891b2",
      hover: "#0e7490",
      active: "#155e75",
      disabled: "#d4d4d4",
      disabledText: "#a3a3a3",
      focus: "#0891b2",
      focusRing: "#06b6d4"
    }
  }
};

// tokens/colors/dark.json
var dark_default = {
  $schema: "https://json.schemastore.org/theme.json",
  $description: "Dark theme color palette - Cyberpunk neon style with WCAG AA compliance",
  colors: {
    primary: {
      base: "#00e6ff",
      hover: "#1affff",
      active: "#4dffff",
      disabled: "#404040",
      focus: "#00e6ff",
      background: "rgba(0, 230, 255, 0.1)",
      backgroundHover: "rgba(0, 230, 255, 0.15)",
      backgroundActive: "rgba(0, 230, 255, 0.2)",
      border: "#00e6ff",
      borderHover: "#1affff",
      borderFocus: "#4dffff",
      text: "#0a0a0f",
      textHover: "#0a0a0f",
      textDisabled: "#525252"
    },
    secondary: {
      base: "#7d00ff",
      hover: "#941aff",
      active: "#ab4dff",
      disabled: "#404040",
      focus: "#7d00ff",
      background: "rgba(125, 0, 255, 0.1)",
      backgroundHover: "rgba(125, 0, 255, 0.15)",
      backgroundActive: "rgba(125, 0, 255, 0.2)",
      border: "#7d00ff",
      borderHover: "#941aff",
      borderFocus: "#ab4dff",
      text: "#ffffff",
      textHover: "#ffffff",
      textDisabled: "#525252"
    },
    accent: {
      base: "#ff00ff",
      hover: "#ff1aff",
      active: "#ff4dff",
      disabled: "#404040",
      focus: "#ff00ff",
      background: "rgba(255, 0, 255, 0.1)",
      backgroundHover: "rgba(255, 0, 255, 0.15)",
      backgroundActive: "rgba(255, 0, 255, 0.2)",
      border: "#ff00ff",
      borderHover: "#ff1aff",
      borderFocus: "#ff4dff",
      text: "#0a0a0f",
      textHover: "#0a0a0f",
      textDisabled: "#525252"
    },
    background: {
      primary: "#0a0a0f",
      secondary: "#0f0f1a",
      tertiary: "#171717",
      inverse: "#ffffff",
      overlay: "rgba(0, 0, 0, 0.8)",
      muted: "#0f0f1a"
    },
    surface: {
      primary: "#171717",
      secondary: "#262626",
      tertiary: "#404040",
      elevated: "#262626",
      overlay: "rgba(0, 0, 0, 0.8)",
      glass: "rgba(15, 15, 26, 0.7)",
      glassHover: "rgba(15, 15, 26, 0.85)",
      hover: "#262626",
      active: "#404040"
    },
    text: {
      primary: "#b3ffff",
      secondary: "#4dffff",
      tertiary: "#00e6ff",
      inverse: "#0a0a0f",
      disabled: "#525252",
      link: "#1affff",
      linkHover: "#4dffff",
      linkActive: "#80ffff",
      linkVisited: "#941aff",
      onPrimary: "#0a0a0f",
      onSecondary: "#ffffff",
      onAccent: "#0a0a0f",
      onBackground: "#b3ffff",
      onSurface: "#b3ffff",
      glow: "#00e6ff",
      neonCyan: "#00e6ff",
      neonPink: "#ff00ff",
      neonPurple: "#7d00ff",
      neonGreen: "#00ff00"
    },
    border: {
      primary: "#262626",
      secondary: "#404040",
      tertiary: "#525252",
      focus: "#00e6ff",
      focusRing: "#1affff",
      inverse: "#e5e5e5",
      neon: "#00e6ff",
      neonGlow: "rgba(0, 230, 255, 0.3)",
      hover: "#404040",
      active: "#525252",
      disabled: "#262626"
    },
    status: {
      success: {
        base: "#00ff00",
        hover: "#4dff4d",
        active: "#80ff80",
        background: "rgba(0, 255, 0, 0.1)",
        backgroundHover: "rgba(0, 255, 0, 0.15)",
        border: "#4dff4d",
        text: "#0a0a0f",
        textOnBackground: "#4dff4d"
      },
      warning: {
        base: "#ff7d00",
        hover: "#ffab4d",
        active: "#ffc880",
        background: "rgba(255, 125, 0, 0.1)",
        backgroundHover: "rgba(255, 125, 0, 0.15)",
        border: "#ffab4d",
        text: "#0a0a0f",
        textOnBackground: "#ffab4d"
      },
      error: {
        base: "#f87171",
        hover: "#fca5a5",
        active: "#fecaca",
        background: "rgba(239, 68, 68, 0.1)",
        backgroundHover: "rgba(239, 68, 68, 0.15)",
        border: "#fca5a5",
        text: "#ffffff",
        textOnBackground: "#fca5a5"
      },
      info: {
        base: "#007dff",
        hover: "#4dabff",
        active: "#80c7ff",
        background: "rgba(0, 125, 255, 0.1)",
        backgroundHover: "rgba(0, 125, 255, 0.15)",
        border: "#4dabff",
        text: "#ffffff",
        textOnBackground: "#4dabff"
      }
    },
    interactive: {
      default: "#00e6ff",
      hover: "#1affff",
      active: "#4dffff",
      disabled: "#404040",
      disabledText: "#525252",
      focus: "#00e6ff",
      focusRing: "#1affff"
    },
    effects: {
      glowCyan: "0 0 20px rgba(0, 230, 255, 0.5), 0 0 40px rgba(0, 230, 255, 0.3)",
      glowPink: "0 0 20px rgba(255, 0, 255, 0.5), 0 0 40px rgba(255, 0, 255, 0.3)",
      glowPurple: "0 0 20px rgba(125, 0, 255, 0.5), 0 0 40px rgba(125, 0, 255, 0.3)",
      glowGreen: "0 0 20px rgba(0, 255, 0, 0.5), 0 0 40px rgba(0, 255, 0, 0.3)",
      shadowSm: "0 1px 2px 0 rgba(0, 0, 0, 0.5)",
      shadowMd: "0 4px 6px -1px rgba(0, 0, 0, 0.5)",
      shadowLg: "0 10px 15px -3px rgba(0, 0, 0, 0.5)"
    },
    gradients: {
      primary: "linear-gradient(135deg, #00e6ff 0%, #7d00ff 100%)",
      secondary: "linear-gradient(135deg, #ff00ff 0%, #00e6ff 100%)",
      accent: "linear-gradient(135deg, #ff7d00 0%, #ff00ff 100%)",
      background: "linear-gradient(180deg, #0a0a0f 0%, #0f0f1a 100%)"
    }
  }
};

// tokens/typography.json
var typography_default = {
  $schema: "https://json.schemastore.org/theme.json",
  $description: "Typography tokens - Complete typographic scale with semantic hierarchy (H1-H6, subtitles, body, captions)",
  typography: {
    fontFamily: {
      sans: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
      serif: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
      mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
      display: "var(--font-orbitron, ui-sans-serif)",
      body: "var(--font-inter, ui-sans-serif)",
      code: "var(--font-rajdhani, ui-monospace)"
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem"
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900"
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2"
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em"
    },
    headings: {
      h1: {
        fontFamily: "var(--font-display, ui-sans-serif)",
        fontSize: "clamp(2.25rem, 5vw + 1rem, 4.5rem)",
        fontSizeMobile: "2.25rem",
        fontSizeTablet: "3rem",
        fontSizeDesktop: "4.5rem",
        fontWeight: "900",
        lineHeight: "1.1",
        letterSpacing: "-0.02em",
        marginBottom: "1rem"
      },
      h2: {
        fontFamily: "var(--font-display, ui-sans-serif)",
        fontSize: "clamp(1.875rem, 4vw + 0.75rem, 3.75rem)",
        fontSizeMobile: "1.875rem",
        fontSizeTablet: "2.5rem",
        fontSizeDesktop: "3.75rem",
        fontWeight: "800",
        lineHeight: "1.15",
        letterSpacing: "-0.015em",
        marginBottom: "0.875rem"
      },
      h3: {
        fontFamily: "var(--font-display, ui-sans-serif)",
        fontSize: "clamp(1.5rem, 3vw + 0.5rem, 3rem)",
        fontSizeMobile: "1.5rem",
        fontSizeTablet: "2rem",
        fontSizeDesktop: "3rem",
        fontWeight: "700",
        lineHeight: "1.2",
        letterSpacing: "-0.01em",
        marginBottom: "0.75rem"
      },
      h4: {
        fontFamily: "var(--font-body, ui-sans-serif)",
        fontSize: "clamp(1.25rem, 2.5vw + 0.5rem, 2.25rem)",
        fontSizeMobile: "1.25rem",
        fontSizeTablet: "1.75rem",
        fontSizeDesktop: "2.25rem",
        fontWeight: "700",
        lineHeight: "1.25",
        letterSpacing: "0em",
        marginBottom: "0.625rem"
      },
      h5: {
        fontFamily: "var(--font-body, ui-sans-serif)",
        fontSize: "clamp(1.125rem, 2vw + 0.25rem, 1.875rem)",
        fontSizeMobile: "1.125rem",
        fontSizeTablet: "1.5rem",
        fontSizeDesktop: "1.875rem",
        fontWeight: "600",
        lineHeight: "1.3",
        letterSpacing: "0em",
        marginBottom: "0.5rem"
      },
      h6: {
        fontFamily: "var(--font-body, ui-sans-serif)",
        fontSize: "clamp(1rem, 1.5vw + 0.25rem, 1.5rem)",
        fontSizeMobile: "1rem",
        fontSizeTablet: "1.25rem",
        fontSizeDesktop: "1.5rem",
        fontWeight: "600",
        lineHeight: "1.35",
        letterSpacing: "0.01em",
        marginBottom: "0.5rem"
      }
    },
    subtitle: {
      large: {
        fontFamily: "var(--font-body, ui-sans-serif)",
        fontSize: "clamp(1.25rem, 2vw + 0.5rem, 2rem)",
        fontSizeMobile: "1.25rem",
        fontSizeTablet: "1.5rem",
        fontSizeDesktop: "2rem",
        fontWeight: "500",
        lineHeight: "1.4",
        letterSpacing: "0em",
        marginBottom: "0.5rem"
      },
      medium: {
        fontFamily: "var(--font-body, ui-sans-serif)",
        fontSize: "clamp(1.125rem, 1.5vw + 0.25rem, 1.5rem)",
        fontSizeMobile: "1.125rem",
        fontSizeTablet: "1.25rem",
        fontSizeDesktop: "1.5rem",
        fontWeight: "500",
        lineHeight: "1.4",
        letterSpacing: "0em",
        marginBottom: "0.5rem"
      },
      small: {
        fontFamily: "var(--font-body, ui-sans-serif)",
        fontSize: "1rem",
        fontWeight: "500",
        lineHeight: "1.4",
        letterSpacing: "0em",
        marginBottom: "0.375rem"
      }
    },
    body: {
      large: {
        fontFamily: "var(--font-body, ui-sans-serif)",
        fontSize: "1.125rem",
        fontWeight: "400",
        lineHeight: "1.625",
        letterSpacing: "0em"
      },
      medium: {
        fontFamily: "var(--font-body, ui-sans-serif)",
        fontSize: "1rem",
        fontWeight: "400",
        lineHeight: "1.5",
        letterSpacing: "0em"
      },
      small: {
        fontFamily: "var(--font-body, ui-sans-serif)",
        fontSize: "0.875rem",
        fontWeight: "400",
        lineHeight: "1.5",
        letterSpacing: "0em"
      }
    },
    caption: {
      large: {
        fontFamily: "var(--font-body, ui-sans-serif)",
        fontSize: "0.875rem",
        fontWeight: "400",
        lineHeight: "1.4",
        letterSpacing: "0.01em"
      },
      medium: {
        fontFamily: "var(--font-body, ui-sans-serif)",
        fontSize: "0.75rem",
        fontWeight: "400",
        lineHeight: "1.4",
        letterSpacing: "0.01em"
      },
      small: {
        fontFamily: "var(--font-body, ui-sans-serif)",
        fontSize: "0.625rem",
        fontWeight: "400",
        lineHeight: "1.3",
        letterSpacing: "0.02em"
      }
    },
    button: {
      large: {
        fontFamily: "var(--font-body, ui-sans-serif)",
        fontSize: "1.125rem",
        fontWeight: "600",
        lineHeight: "1.5",
        letterSpacing: "0.01em"
      },
      medium: {
        fontFamily: "var(--font-body, ui-sans-serif)",
        fontSize: "1rem",
        fontWeight: "600",
        lineHeight: "1.5",
        letterSpacing: "0.01em"
      },
      small: {
        fontFamily: "var(--font-body, ui-sans-serif)",
        fontSize: "0.875rem",
        fontWeight: "600",
        lineHeight: "1.4",
        letterSpacing: "0.01em"
      }
    },
    label: {
      large: {
        fontFamily: "var(--font-body, ui-sans-serif)",
        fontSize: "0.875rem",
        fontWeight: "600",
        lineHeight: "1.4",
        letterSpacing: "0.01em"
      },
      medium: {
        fontFamily: "var(--font-body, ui-sans-serif)",
        fontSize: "0.75rem",
        fontWeight: "600",
        lineHeight: "1.4",
        letterSpacing: "0.01em"
      },
      small: {
        fontFamily: "var(--font-body, ui-sans-serif)",
        fontSize: "0.625rem",
        fontWeight: "600",
        lineHeight: "1.3",
        letterSpacing: "0.02em"
      }
    },
    code: {
      inline: {
        fontFamily: "var(--font-code, ui-monospace)",
        fontSize: "0.875em",
        fontWeight: "400",
        lineHeight: "1.5",
        letterSpacing: "0em"
      },
      block: {
        fontFamily: "var(--font-code, ui-monospace)",
        fontSize: "0.875rem",
        fontWeight: "400",
        lineHeight: "1.6",
        letterSpacing: "0em"
      }
    }
  }
};

// tokens/spacing.json
var spacing_default = {
  $schema: "https://json.schemastore.org/theme.json",
  $description: "Spacing tokens - Consistent spacing scale based on 8pt grid",
  spacing: {
    "0": "0px",
    px: "1px",
    "0.5": "0.125rem",
    "1": "0.25rem",
    "1.5": "0.375rem",
    "2": "0.5rem",
    "2.5": "0.625rem",
    "3": "0.75rem",
    "3.5": "0.875rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
    "11": "2.75rem",
    "12": "3rem",
    "14": "3.5rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "28": "7rem",
    "32": "8rem",
    "36": "9rem",
    "40": "10rem",
    "44": "11rem",
    "48": "12rem",
    "52": "13rem",
    "56": "14rem",
    "60": "15rem",
    "64": "16rem",
    "72": "18rem",
    "80": "20rem",
    "96": "24rem"
  }
};

// tokens/radius.json
var radius_default = {
  $schema: "https://json.schemastore.org/theme.json",
  $description: "Border radius tokens - Consistent corner rounding",
  radius: {
    none: "0px",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px"
  }
};

// tokens/shadows.json
var shadows_default = {
  $schema: "https://json.schemastore.org/theme.json",
  $description: "Shadow tokens - Elevation and depth",
  shadows: {
    light: {
      xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
      base: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
      md: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
      lg: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      xl: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)"
    },
    dark: {
      xs: "0 1px 2px 0 rgba(0, 0, 0, 0.5)",
      sm: "0 1px 3px 0 rgba(0, 0, 0, 0.5), 0 1px 2px -1px rgba(0, 0, 0, 0.5)",
      base: "0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -2px rgba(0, 0, 0, 0.5)",
      md: "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -4px rgba(0, 0, 0, 0.5)",
      lg: "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)",
      xl: "0 25px 50px -12px rgba(0, 0, 0, 0.75)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.75)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.5)",
      glow: {
        cyan: "0 0 20px rgba(0, 230, 255, 0.5), 0 0 40px rgba(0, 230, 255, 0.3)",
        pink: "0 0 20px rgba(255, 0, 255, 0.5), 0 0 40px rgba(255, 0, 255, 0.3)",
        purple: "0 0 20px rgba(125, 0, 255, 0.5), 0 0 40px rgba(125, 0, 255, 0.3)",
        green: "0 0 20px rgba(0, 255, 0, 0.5), 0 0 40px rgba(0, 255, 0, 0.3)"
      }
    }
  }
};

// tokens/utilities.ts
var GRADIENT_DIRECTIONS = {
  TO_TOP: "bg-gradient-to-t",
  TO_BOTTOM: "bg-gradient-to-b",
  TO_LEFT: "bg-gradient-to-l",
  TO_RIGHT: "bg-gradient-to-r",
  TO_TL: "bg-gradient-to-tl",
  TO_TR: "bg-gradient-to-tr",
  TO_BL: "bg-gradient-to-bl",
  TO_BR: "bg-gradient-to-br"
};
var GRADIENTS = {
  // Gradientes de texto
  TEXT_PRIMARY: "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",
  // Gradientes decorativos
  DECORATIVE_PRIMARY: "bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500",
  DECORATIVE_CYAN_PURPLE: "bg-gradient-to-r from-cyan-500 to-purple-500",
  DECORATIVE_GREEN_EMERALD: "bg-gradient-to-br from-green-500 to-emerald-500",
  // Gradientes de botões
  BUTTON_CYAN_BLUE: "bg-gradient-to-r from-cyan-500 to-blue-500",
  BUTTON_PURPLE_PINK: "bg-gradient-to-r from-purple-500 to-pink-500"
};
var BACKGROUND = {
  // Background completo
  FULL: "bg-background",
  // Overlay de gradiente
  GRADIENT_OVERLAY: "bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10",
  // Divisores premium
  PREMIUM_DIVIDER_CONTAINER: "bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent",
  PREMIUM_DIVIDER_LINE: "bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent",
  // Backgrounds de seção
  SECTION_CYAN: "bg-gradient-to-br from-cyan-500/5 via-cyan-500/3 to-transparent",
  SECTION_CYAN_VIA: "bg-gradient-to-br from-transparent via-cyan-500/5 to-transparent",
  SECTION_PURPLE_VIA: "bg-gradient-to-br from-transparent via-purple-500/5 to-transparent",
  SECTION_PINK_VIA: "bg-gradient-to-br from-transparent via-pink-500/5 to-transparent"
};

// tokens/accessibility.ts
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    throw new Error(`Invalid hex color: ${hex}`);
  }
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  };
}
function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map((val) => {
    const v = val / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}
function getContrast(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}
function meetsWCAGAA(foreground, background, largeText = false) {
  const contrast = getContrast(foreground, background);
  return largeText ? contrast >= 3 : contrast >= 4.5;
}
function meetsWCAGAAA(foreground, background, largeText = false) {
  const contrast = getContrast(foreground, background);
  return largeText ? contrast >= 4.5 : contrast >= 7;
}
function getContrastInfo(foreground, background) {
  const contrast = getContrast(foreground, background);
  const meetsAA = contrast >= 4.5;
  const meetsAALarge = contrast >= 3;
  const meetsAAA = contrast >= 7;
  const meetsAAALarge = contrast >= 4.5;
  let level = "Fail";
  if (meetsAAA) {
    level = "AAA";
  } else if (meetsAAALarge) {
    level = "AAA Large";
  } else if (meetsAA) {
    level = "AA";
  } else if (meetsAALarge) {
    level = "AA Large";
  }
  return {
    contrast,
    meetsAA,
    meetsAALarge,
    meetsAAA,
    meetsAAALarge,
    level
  };
}
function validateContrast(foreground, background, options = {}) {
  const { requireAAA = false, largeText = false } = options;
  const info = getContrastInfo(foreground, background);
  let valid = false;
  let message = "";
  if (requireAAA) {
    valid = largeText ? info.meetsAAALarge : info.meetsAAA;
    message = valid ? `Contraste v\xE1lido (WCAG AAA${largeText ? " - Texto Grande" : ""})` : `Contraste insuficiente para WCAG AAA${largeText ? " - Texto Grande" : ""}. Requerido: ${largeText ? "4.5:1" : "7:1"}, atual: ${info.contrast.toFixed(2)}:1`;
  } else {
    valid = largeText ? info.meetsAALarge : info.meetsAA;
    message = valid ? `Contraste v\xE1lido (WCAG AA${largeText ? " - Texto Grande" : ""})` : `Contraste insuficiente para WCAG AA${largeText ? " - Texto Grande" : ""}. Requerido: ${largeText ? "3:1" : "4.5:1"}, atual: ${info.contrast.toFixed(2)}:1`;
  }
  return {
    valid,
    level: info.level,
    contrast: info.contrast,
    message
  };
}

// tokens/index.ts
var tokens = {
  colors: {
    light: light_default.colors,
    dark: dark_default.colors
  },
  typography: typography_default.typography,
  spacing: spacing_default.spacing,
  radius: radius_default.radius,
  shadows: shadows_default.shadows
};
var lightThemeColors = light_default.colors;
var darkThemeColors = dark_default.colors;
var typographyTokens = typography_default.typography;
var spacingTokens = spacing_default.spacing;
var radiusTokens = radius_default.radius;
var shadowTokens = shadows_default.shadows;
var tokens_default = tokens;

// themes/light.ts
var lightTheme = {
  colors: tokens.colors.light,
  typography: tokens.typography,
  spacing: tokens.spacing,
  radius: tokens.radius,
  shadows: tokens.shadows.light
};

// themes/dark.ts
var darkTheme = {
  colors: tokens.colors.dark,
  typography: tokens.typography,
  spacing: tokens.spacing,
  radius: tokens.radius,
  shadows: tokens.shadows.dark
};

// themes/index.ts
var themes = {
  light: lightTheme,
  dark: darkTheme
};
var themes_default = themes;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BACKGROUND,
  GRADIENTS,
  GRADIENT_DIRECTIONS,
  darkTheme,
  darkThemeColors,
  getContrast,
  getContrastInfo,
  getLuminance,
  hexToRgb,
  lightTheme,
  lightThemeColors,
  meetsWCAGAA,
  meetsWCAGAAA,
  radiusTokens,
  shadowTokens,
  spacingTokens,
  themes,
  tokens,
  typographyTokens,
  validateContrast
});
/**
 * @fileoverview Ponto de entrada principal da biblioteca @rainersoft/design-tokens
 * 
 * @description
 * Biblioteca enterprise-grade de design tokens para sistemas de design modernos.
 * Tecnologicamente agnóstica, escalável e pronta para produção.
 * 
 * Esta biblioteca fornece tokens de design estruturados que podem ser utilizados
 * em qualquer framework ou tecnologia, garantindo consistência visual em toda
 * a aplicação.
 * 
 * @module @rainersoft/design-tokens
 * @version 4.0.0
 * @author Rainer Teixeira
 * @license MIT
 * @since 1.0.0
 * 
 * @example
 * ```typescript
 * import { tokens, themes, lightTheme, darkTheme } from '@rainersoft/design-tokens';
 * 
 * // Usar tokens diretamente
 * const primaryColor = tokens.colors.light.brand.primary;
 * 
 * // Usar temas completos
 * const theme = lightTheme;
 * ```
 */
//# sourceMappingURL=index.cjs.map