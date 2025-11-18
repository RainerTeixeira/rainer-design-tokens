var colors$1 = {
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
		"default": "#0891b2",
		hover: "#0e7490",
		active: "#155e75",
		disabled: "#d4d4d4",
		disabledText: "#a3a3a3",
		focus: "#0891b2",
		focusRing: "#06b6d4"
	},
	primitive: {
		cyan: {
			"50": "#ecfeff",
			"100": "#cffafe",
			"200": "#a5f3fc",
			"300": "#67e8f9",
			"400": "#22d3ee",
			"500": "#06b6d4",
			"600": "#0891b2",
			"700": "#0e7490",
			"800": "#155e75",
			"900": "#164e63"
		},
		purple: {
			"50": "#faf5ff",
			"100": "#f3e8ff",
			"200": "#e9d5ff",
			"300": "#d8b4fe",
			"400": "#c084fc",
			"500": "#a855f7",
			"600": "#9333ea",
			"700": "#7e22ce",
			"800": "#6b21a8",
			"900": "#581c87"
		},
		pink: {
			"50": "#fdf2f8",
			"100": "#fce7f3",
			"200": "#fbcfe8",
			"300": "#f9a8d4",
			"400": "#f472b6",
			"500": "#ec4899",
			"600": "#db2777",
			"700": "#be185d",
			"800": "#9f1239",
			"900": "#831843"
		},
		blue: {
			"50": "#eff6ff",
			"100": "#dbeafe",
			"200": "#bfdbfe",
			"300": "#93c5fd",
			"400": "#60a5fa",
			"500": "#3b82f6",
			"600": "#2563eb",
			"700": "#1d4ed8",
			"800": "#1e40af",
			"900": "#1e3a8a"
		},
		green: {
			"50": "#f0fdf4",
			"100": "#dcfce7",
			"200": "#bbf7d0",
			"300": "#86efac",
			"400": "#4ade80",
			"500": "#22c55e",
			"600": "#16a34a",
			"700": "#15803d",
			"800": "#166534",
			"900": "#14532d"
		},
		orange: {
			"50": "#fff7ed",
			"100": "#ffedd5",
			"200": "#fed7aa",
			"300": "#fdba74",
			"400": "#fb923c",
			"500": "#f97316",
			"600": "#ea580c",
			"700": "#c2410c",
			"800": "#9a3412",
			"900": "#7c2d12"
		},
		red: {
			"50": "#fef2f2",
			"100": "#fee2e2",
			"200": "#fecaca",
			"300": "#fca5a5",
			"400": "#f87171",
			"500": "#ef4444",
			"600": "#dc2626",
			"700": "#b91c1c",
			"800": "#991b1b",
			"900": "#7f1d1d"
		},
		amber: {
			"50": "#fffbeb",
			"100": "#fef3c7",
			"200": "#fde68a",
			"300": "#fcd34d",
			"400": "#fbbf24",
			"500": "#f59e0b",
			"600": "#d97706",
			"700": "#b45309",
			"800": "#92400e",
			"900": "#78350f"
		},
		emerald: {
			"50": "#ecfdf5",
			"100": "#d1fae5",
			"200": "#a7f3d0",
			"300": "#6ee7b7",
			"400": "#34d399",
			"500": "#10b981",
			"600": "#059669",
			"700": "#047857",
			"800": "#065f46",
			"900": "#064e3b"
		},
		neutral: {
			"50": "#fafafa",
			"100": "#f5f5f5",
			"200": "#e5e5e5",
			"300": "#d4d4d4",
			"400": "#a3a3a3",
			"500": "#737373",
			"600": "#525252",
			"700": "#404040",
			"800": "#262626",
			"900": "#171717",
			"950": "#0a0a0f"
		}
	}
};
var lightColors = {
	colors: colors$1
};

var colors = {
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
		"default": "#00e6ff",
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
	},
	primitive: {
		cyan: {
			"50": "rgba(0, 230, 255, 0.1)",
			"100": "rgba(0, 230, 255, 0.15)",
			"200": "rgba(0, 230, 255, 0.2)",
			"300": "#4dffff",
			"400": "#1affff",
			"500": "#00e6ff",
			"600": "#00b8cc",
			"700": "#008a99",
			"800": "#005c66",
			"900": "#003d44"
		},
		purple: {
			"50": "rgba(125, 0, 255, 0.1)",
			"100": "rgba(125, 0, 255, 0.15)",
			"200": "rgba(125, 0, 255, 0.2)",
			"300": "#ab4dff",
			"400": "#941aff",
			"500": "#7d00ff",
			"600": "#6400cc",
			"700": "#4b0099",
			"800": "#320066",
			"900": "#190033"
		},
		pink: {
			"50": "rgba(255, 0, 255, 0.1)",
			"100": "rgba(255, 0, 255, 0.15)",
			"200": "rgba(255, 0, 255, 0.2)",
			"300": "#ff4dff",
			"400": "#ff1aff",
			"500": "#ff00ff",
			"600": "#cc00cc",
			"700": "#990099",
			"800": "#660066",
			"900": "#330033"
		},
		blue: {
			"50": "rgba(0, 125, 255, 0.1)",
			"100": "rgba(0, 125, 255, 0.15)",
			"200": "rgba(0, 125, 255, 0.2)",
			"300": "#80c7ff",
			"400": "#4dabff",
			"500": "#007dff",
			"600": "#0064cc",
			"700": "#004b99",
			"800": "#003266",
			"900": "#001933"
		},
		green: {
			"50": "rgba(0, 255, 0, 0.1)",
			"100": "rgba(0, 255, 0, 0.15)",
			"200": "rgba(0, 255, 0, 0.2)",
			"300": "#80ff80",
			"400": "#4dff4d",
			"500": "#00ff00",
			"600": "#00cc00",
			"700": "#009900",
			"800": "#006600",
			"900": "#003300"
		},
		orange: {
			"50": "rgba(255, 125, 0, 0.1)",
			"100": "rgba(255, 125, 0, 0.15)",
			"200": "rgba(255, 125, 0, 0.2)",
			"300": "#ffc880",
			"400": "#ffab4d",
			"500": "#ff7d00",
			"600": "#cc6400",
			"700": "#994b00",
			"800": "#663200",
			"900": "#331900"
		},
		red: {
			"50": "rgba(239, 68, 68, 0.1)",
			"100": "rgba(239, 68, 68, 0.15)",
			"200": "rgba(239, 68, 68, 0.2)",
			"300": "#fecaca",
			"400": "#fca5a5",
			"500": "#f87171",
			"600": "#c55a5a",
			"700": "#924343",
			"800": "#5f2c2c",
			"900": "#2c1515"
		},
		amber: {
			"50": "rgba(255, 125, 0, 0.1)",
			"100": "rgba(255, 125, 0, 0.15)",
			"200": "rgba(255, 125, 0, 0.2)",
			"300": "#ffc880",
			"400": "#ffab4d",
			"500": "#ff7d00",
			"600": "#cc6400",
			"700": "#994b00",
			"800": "#663200",
			"900": "#331900"
		},
		emerald: {
			"50": "rgba(0, 255, 0, 0.1)",
			"100": "rgba(0, 255, 0, 0.15)",
			"200": "rgba(0, 255, 0, 0.2)",
			"300": "#80ff80",
			"400": "#4dff4d",
			"500": "#00ff00",
			"600": "#00cc00",
			"700": "#009900",
			"800": "#006600",
			"900": "#003300"
		},
		neutral: {
			"50": "#0f0f1a",
			"100": "#171717",
			"200": "#262626",
			"300": "#404040",
			"400": "#525252",
			"500": "#737373",
			"600": "#a3a3a3",
			"700": "#d4d4d4",
			"800": "#e5e5e5",
			"900": "#f5f5f5",
			"950": "#ffffff"
		}
	}
};
var darkColors = {
	colors: colors
};

var typography = {
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
};
var typography$1 = {
	typography: typography
};

var spacing = {
	"0": "0px",
	"1": "0.25rem",
	"2": "0.5rem",
	"3": "0.75rem",
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
	"96": "24rem",
	px: "1px",
	"0.5": "0.125rem",
	"1.5": "0.375rem",
	"2.5": "0.625rem",
	"3.5": "0.875rem"
};
var spacing$1 = {
	spacing: spacing
};

var radius = {
	none: "0px",
	sm: "0.125rem",
	base: "0.25rem",
	md: "0.375rem",
	lg: "0.5rem",
	xl: "0.75rem",
	"2xl": "1rem",
	"3xl": "1.5rem",
	full: "9999px"
};
var radius$1 = {
	radius: radius
};

var shadows = {
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
};
var shadows$1 = {
	shadows: shadows
};

/**
 * @fileoverview Tokens utilitários - Classes Tailwind CSS
 *
 * @description
 * Tokens utilitários que exportam classes Tailwind CSS prontas para uso.
 * Esses tokens são classes CSS que podem ser aplicadas diretamente nos componentes,
 * facilitando o desenvolvimento e garantindo consistência visual.
 *
 * @module tokens/utilities
 * @version 4.0.0
 * @author Rainer Teixeira
 * @since 1.0.0
 */
/**
 * Direções de gradiente como classes Tailwind CSS
 *
 * @description
 * Conjunto de constantes que representam as diferentes direções
 * de gradiente disponíveis no Tailwind CSS.
 *
 * @type {Object}
 * @property {string} TO_TOP - Gradiente de baixo para cima
 * @property {string} TO_BOTTOM - Gradiente de cima para baixo
 * @property {string} TO_LEFT - Gradiente da direita para esquerda
 * @property {string} TO_RIGHT - Gradiente da esquerda para direita
 * @property {string} TO_TL - Gradiente para cima-esquerda (top-left)
 * @property {string} TO_TR - Gradiente para cima-direita (top-right)
 * @property {string} TO_BL - Gradiente para baixo-esquerda (bottom-left)
 * @property {string} TO_BR - Gradiente para baixo-direita (bottom-right)
 *
 * @constant
 * @readonly
 *
 * @example
 * ```typescript
 * import { GRADIENT_DIRECTIONS } from 'rainer-design-tokens';
 *
 * // Aplicar gradiente de cima para baixo
 * <div className={GRADIENT_DIRECTIONS.TO_BOTTOM}>
 * ```
 */
declare const GRADIENT_DIRECTIONS: {
    readonly TO_TOP: "bg-gradient-to-t";
    readonly TO_BOTTOM: "bg-gradient-to-b";
    readonly TO_LEFT: "bg-gradient-to-l";
    readonly TO_RIGHT: "bg-gradient-to-r";
    readonly TO_TL: "bg-gradient-to-tl";
    readonly TO_TR: "bg-gradient-to-tr";
    readonly TO_BL: "bg-gradient-to-bl";
    readonly TO_BR: "bg-gradient-to-br";
};
/**
 * Gradientes decorativos e utilitários como classes Tailwind CSS
 *
 * @description
 * Conjunto de gradientes pré-configurados para uso em diferentes
 * contextos da aplicação, incluindo texto, elementos decorativos e botões.
 *
 * @type {Object}
 * @property {string} TEXT_PRIMARY - Gradiente para texto com efeito de clip
 * @property {string} DECORATIVE_PRIMARY - Gradiente decorativo principal (cyan-purple-pink)
 * @property {string} DECORATIVE_CYAN_PURPLE - Gradiente decorativo cyan para purple
 * @property {string} DECORATIVE_GREEN_EMERALD - Gradiente decorativo green para emerald
 * @property {string} BUTTON_CYAN_BLUE - Gradiente para botões (cyan para blue)
 * @property {string} BUTTON_PURPLE_PINK - Gradiente para botões (purple para pink)
 *
 * @constant
 * @readonly
 *
 * @example
 * ```typescript
 * import { GRADIENTS } from 'rainer-design-tokens';
 *
 * // Aplicar gradiente em texto
 * <h1 className={GRADIENTS.TEXT_PRIMARY}>Título com Gradiente</h1>
 *
 * // Aplicar gradiente em botão
 * <button className={GRADIENTS.BUTTON_CYAN_BLUE}>Clique aqui</button>
 * ```
 */
declare const GRADIENTS: {
    readonly TEXT_PRIMARY: "bg-linear-to-r from-[var(--color-primary-base)] via-[var(--color-secondary-base)] to-[var(--color-accent-base)] bg-clip-text text-transparent";
    readonly DECORATIVE_PRIMARY: "bg-linear-to-br from-[var(--color-primary-base)] via-[var(--color-secondary-base)] to-[var(--color-accent-base)]";
    readonly DECORATIVE_CYAN_PURPLE: "bg-linear-to-r from-[var(--color-primary-base)] to-[var(--color-secondary-base)]";
    readonly DECORATIVE_GREEN_EMERALD: "bg-linear-to-br from-[var(--color-status-success)] to-[var(--color-accent-base)]";
    readonly BUTTON_CYAN_BLUE: "bg-linear-to-r from-[var(--color-primary-base)] to-[var(--color-primary-hover)]";
    readonly BUTTON_PURPLE_PINK: "bg-linear-to-r from-[var(--color-secondary-base)] to-[var(--color-accent-base)]";
};
/**
 * Backgrounds utilitários como classes Tailwind CSS
 *
 * @description
 * Conjunto de classes para backgrounds pré-configurados, incluindo
 * overlays, divisores e backgrounds de seção com efeitos de gradiente sutis.
 *
 * @type {Object}
 * @property {string} FULL - Background completo padrão
 * @property {string} GRADIENT_OVERLAY - Overlay de gradiente sutil
 * @property {string} PREMIUM_DIVIDER_CONTAINER - Container para divisor premium
 * @property {string} PREMIUM_DIVIDER_LINE - Linha do divisor premium
 * @property {string} SECTION_CYAN - Background de seção com gradiente cyan
 * @property {string} SECTION_CYAN_VIA - Background de seção cyan via (meio)
 * @property {string} SECTION_PURPLE_VIA - Background de seção purple via (meio)
 * @property {string} SECTION_PINK_VIA - Background de seção pink via (meio)
 *
 * @constant
 * @readonly
 *
 * @example
 * ```typescript
 * import { BACKGROUND } from 'rainer-design-tokens';
 *
 * // Aplicar background de seção
 * <section className={BACKGROUND.SECTION_CYAN}>
 *   Conteúdo da seção
 * </section>
 *
 * // Aplicar overlay de gradiente
 * <div className={BACKGROUND.GRADIENT_OVERLAY}>
 *   Conteúdo com overlay
 * </div>
 * ```
 */
declare const BACKGROUND: {
    readonly FULL: "bg-[var(--color-background-primary)]";
    readonly GRADIENT_OVERLAY: "bg-linear-to-br from-[var(--color-primary-base)]/10 via-[var(--color-secondary-base)]/10 to-[var(--color-accent-base)]/10";
    readonly PREMIUM_DIVIDER_CONTAINER: "bg-linear-to-b from-transparent via-[var(--color-primary-base)]/5 to-transparent";
    readonly PREMIUM_DIVIDER_LINE: "bg-linear-to-r from-transparent via-[var(--color-primary-base)]/50 to-transparent";
    readonly SECTION_CYAN: "bg-linear-to-br from-[var(--color-primary-base)]/5 via-[var(--color-primary-base)]/3 to-transparent";
    readonly SECTION_CYAN_VIA: "bg-linear-to-br from-transparent via-[var(--color-primary-base)]/5 to-transparent";
    readonly SECTION_PURPLE_VIA: "bg-linear-to-br from-transparent via-[var(--color-secondary-base)]/5 to-transparent";
    readonly SECTION_PINK_VIA: "bg-linear-to-br from-transparent via-[var(--color-accent-base)]/5 to-transparent";
};
/**
 * Tipo TypeScript para direções de gradiente
 *
 * @typedef {Object} GradientDirections
 * @description
 * Tipo que representa todas as direções de gradiente disponíveis.
 * Útil para type-checking e autocomplete em IDEs.
 */
type GradientDirections = typeof GRADIENT_DIRECTIONS;
/**
 * Tipo TypeScript para gradientes
 *
 * @typedef {Object} Gradients
 * @description
 * Tipo que representa todos os gradientes pré-configurados disponíveis.
 */
type Gradients = typeof GRADIENTS;
/**
 * Tipo TypeScript para backgrounds
 *
 * @typedef {Object} Background
 * @description
 * Tipo que representa todos os backgrounds utilitários disponíveis.
 */
type Background = typeof BACKGROUND;

/**
 * @fileoverview Utilitários de Acessibilidade - Verificação de Contraste WCAG
 *
 * @description
 * Utilitários para verificar e garantir conformidade com padrões WCAG AA/AAA
 * de contraste de cores. Essas funções são agnósticas e podem ser usadas em
 * qualquer ambiente (web, mobile, desktop).
 *
 * @module tokens/accessibility
 * @version 4.0.0
 * @author Rainer Teixeira
 * @since 1.0.0
 */
/**
 * Converte cor hexadecimal para RGB
 *
 * @param {string} hex - Cor em formato hexadecimal (#RRGGBB ou RRGGBB)
 * @returns {Object} Objeto com valores RGB { r, g, b }
 *
 * @example
 * ```typescript
 * const rgb = hexToRgb('#0891b2');
 * // { r: 8, g: 145, b: 178 }
 * ```
 */
declare function hexToRgb(hex: string): {
    r: number;
    g: number;
    b: number;
};
/**
 * Calcula a luminância relativa de uma cor RGB
 *
 * @param {number} r - Componente vermelho (0-255)
 * @param {number} g - Componente verde (0-255)
 * @param {number} b - Componente azul (0-255)
 * @returns {number} Luminância relativa (0-1)
 *
 * @description
 * Fórmula baseada na recomendação WCAG 2.1 para cálculo de luminância.
 *
 * @example
 * ```typescript
 * const luminance = getLuminance(8, 145, 178);
 * // 0.234
 * ```
 */
declare function getLuminance(r: number, g: number, b: number): number;
/**
 * Calcula o contraste entre duas cores
 *
 * @param {string} color1 - Primeira cor em hexadecimal
 * @param {string} color2 - Segunda cor em hexadecimal
 * @returns {number} Razão de contraste (1-21)
 *
 * @description
 * Retorna a razão de contraste entre duas cores conforme WCAG 2.1.
 * Valores mínimos recomendados:
 * - WCAG AA (normal): 4.5:1 para texto normal, 3:1 para texto grande
 * - WCAG AAA (melhor): 7:1 para texto normal, 4.5:1 para texto grande
 *
 * @example
 * ```typescript
 * const contrast = getContrast('#ffffff', '#000000');
 * // 21 (máximo contraste)
 *
 * const contrast2 = getContrast('#0891b2', '#ffffff');
 * // 3.2 (atende WCAG AA para texto grande)
 * ```
 */
declare function getContrast(color1: string, color2: string): number;
/**
 * Verifica se o contraste atende ao padrão WCAG AA
 *
 * @param {string} foreground - Cor do texto (hexadecimal)
 * @param {string} background - Cor de fundo (hexadecimal)
 * @param {boolean} [largeText=false] - Se o texto é grande (>=18pt ou >=14pt bold)
 * @returns {boolean} true se atende WCAG AA, false caso contrário
 *
 * @description
 * WCAG AA requer:
 * - Texto normal: contraste mínimo de 4.5:1
 * - Texto grande: contraste mínimo de 3:1
 *
 * @example
 * ```typescript
 * const meetsAA = meetsWCAGAA('#0891b2', '#ffffff', false);
 * // true (contraste 3.2:1, mas texto normal precisa 4.5:1)
 *
 * const meetsAALarge = meetsWCAGAA('#0891b2', '#ffffff', true);
 * // true (contraste 3.2:1, texto grande precisa 3:1)
 * ```
 */
declare function meetsWCAGAA(foreground: string, background: string, largeText?: boolean): boolean;
/**
 * Verifica se o contraste atende ao padrão WCAG AAA
 *
 * @param {string} foreground - Cor do texto (hexadecimal)
 * @param {string} background - Cor de fundo (hexadecimal)
 * @param {boolean} [largeText=false] - Se o texto é grande (>=18pt ou >=14pt bold)
 * @returns {boolean} true se atende WCAG AAA, false caso contrário
 *
 * @description
 * WCAG AAA requer:
 * - Texto normal: contraste mínimo de 7:1
 * - Texto grande: contraste mínimo de 4.5:1
 *
 * @example
 * ```typescript
 * const meetsAAA = meetsWCAGAAA('#000000', '#ffffff', false);
 * // true (contraste 21:1)
 * ```
 */
declare function meetsWCAGAAA(foreground: string, background: string, largeText?: boolean): boolean;
/**
 * Retorna informações completas de contraste entre duas cores
 *
 * @param {string} foreground - Cor do texto (hexadecimal)
 * @param {string} background - Cor de fundo (hexadecimal)
 * @returns {Object} Objeto com informações de contraste
 *
 * @example
 * ```typescript
 * const info = getContrastInfo('#0891b2', '#ffffff');
 * // {
 * //   contrast: 3.2,
 * //   meetsAA: false,
 * //   meetsAALarge: true,
 * //   meetsAAA: false,
 * //   meetsAAALarge: false,
 * //   level: 'AA Large'
 * // }
 * ```
 */
declare function getContrastInfo(foreground: string, background: string): {
    contrast: number;
    meetsAA: boolean;
    meetsAALarge: boolean;
    meetsAAA: boolean;
    meetsAAALarge: boolean;
    level: 'Fail' | 'AA Large' | 'AA' | 'AAA Large' | 'AAA';
};
/**
 * Valida se uma combinação de cores atende aos padrões de acessibilidade
 *
 * @param {string} foreground - Cor do texto (hexadecimal)
 * @param {string} background - Cor de fundo (hexadecimal)
 * @param {Object} options - Opções de validação
 * @param {boolean} [options.requireAAA=false] - Se deve requerer WCAG AAA
 * @param {boolean} [options.largeText=false] - Se o texto é grande
 * @returns {Object} Resultado da validação
 *
 * @example
 * ```typescript
 * const validation = validateContrast('#0891b2', '#ffffff', {
 *   largeText: true
 * });
 * // {
 * //   valid: true,
 * //   level: 'AA Large',
 * //   contrast: 3.2,
 * //   message: 'Contraste válido para texto grande (WCAG AA)'
 * // }
 * ```
 */
declare function validateContrast(foreground: string, background: string, options?: {
    requireAAA?: boolean;
    largeText?: boolean;
}): {
    valid: boolean;
    level: string;
    contrast: number;
    message: string;
};

/**
 * @fileoverview Ponto de entrada dos tokens de design
 *
 * @description
 * Tokens de design tecnologicamente agnósticos que definem a linguagem visual
 * do Rainer Design System. Estes tokens podem ser utilizados em qualquer
 * framework ou tecnologia, garantindo consistência visual.
 *
 * @module tokens
 * @version 4.0.0
 * @author Rainer Teixeira
 * @since 1.0.0
 */

/**
 * Todos os tokens de design organizados por categoria
 *
 * @description
 * Objeto principal contendo todos os tokens de design do sistema,
 * organizados em categorias lógicas para fácil acesso e manutenção.
 *
 * @type {Object}
 * @property {Object} colors - Tokens de cores para temas claro e escuro
 * @property {Object} colors.light - Cores do tema claro
 * @property {Object} colors.dark - Cores do tema escuro
 * @property {Object} typography - Tokens de tipografia (fontes, tamanhos, pesos, etc.)
 * @property {Object} spacing - Tokens de espaçamento (margens, paddings)
 * @property {Object} radius - Tokens de raio de borda
 * @property {Object} shadows - Tokens de sombras para ambos os temas
 *
 * @constant
 * @readonly
 *
 * @example
 * ```typescript
 * import { tokens } from 'rainer-design-tokens';
 *
 * // Acessar cor primária do tema claro
 * const primaryColor = tokens.colors.light.brand.primary;
 *
 * // Acessar espaçamento padrão
 * const spacing = tokens.spacing.md;
 * ```
 */
declare const tokens: {
    readonly colors: {
        readonly light: {
            primary: {
                base: string;
                hover: string;
                active: string;
                disabled: string;
                focus: string;
                background: string;
                backgroundHover: string;
                backgroundActive: string;
                border: string;
                borderHover: string;
                borderFocus: string;
                text: string;
                textHover: string;
                textDisabled: string;
            };
            secondary: {
                base: string;
                hover: string;
                active: string;
                disabled: string;
                focus: string;
                background: string;
                backgroundHover: string;
                backgroundActive: string;
                border: string;
                borderHover: string;
                borderFocus: string;
                text: string;
                textHover: string;
                textDisabled: string;
            };
            accent: {
                base: string;
                hover: string;
                active: string;
                disabled: string;
                focus: string;
                background: string;
                backgroundHover: string;
                backgroundActive: string;
                border: string;
                borderHover: string;
                borderFocus: string;
                text: string;
                textHover: string;
                textDisabled: string;
            };
            background: {
                primary: string;
                secondary: string;
                tertiary: string;
                inverse: string;
                overlay: string;
                muted: string;
            };
            surface: {
                primary: string;
                secondary: string;
                tertiary: string;
                elevated: string;
                overlay: string;
                hover: string;
                active: string;
            };
            text: {
                primary: string;
                secondary: string;
                tertiary: string;
                inverse: string;
                disabled: string;
                link: string;
                linkHover: string;
                linkActive: string;
                linkVisited: string;
                onPrimary: string;
                onSecondary: string;
                onAccent: string;
                onBackground: string;
                onSurface: string;
            };
            border: {
                primary: string;
                secondary: string;
                tertiary: string;
                focus: string;
                focusRing: string;
                inverse: string;
                hover: string;
                active: string;
                disabled: string;
            };
            status: {
                success: {
                    base: string;
                    hover: string;
                    active: string;
                    background: string;
                    backgroundHover: string;
                    border: string;
                    text: string;
                    textOnBackground: string;
                };
                warning: {
                    base: string;
                    hover: string;
                    active: string;
                    background: string;
                    backgroundHover: string;
                    border: string;
                    text: string;
                    textOnBackground: string;
                };
                error: {
                    base: string;
                    hover: string;
                    active: string;
                    background: string;
                    backgroundHover: string;
                    border: string;
                    text: string;
                    textOnBackground: string;
                };
                info: {
                    base: string;
                    hover: string;
                    active: string;
                    background: string;
                    backgroundHover: string;
                    border: string;
                    text: string;
                    textOnBackground: string;
                };
            };
            interactive: {
                default: string;
                hover: string;
                active: string;
                disabled: string;
                disabledText: string;
                focus: string;
                focusRing: string;
            };
            primitive: {
                cyan: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                purple: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                pink: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                blue: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                green: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                orange: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                red: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                amber: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                emerald: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                neutral: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                    "950": string;
                };
            };
        };
        readonly dark: {
            primary: {
                base: string;
                hover: string;
                active: string;
                disabled: string;
                focus: string;
                background: string;
                backgroundHover: string;
                backgroundActive: string;
                border: string;
                borderHover: string;
                borderFocus: string;
                text: string;
                textHover: string;
                textDisabled: string;
            };
            secondary: {
                base: string;
                hover: string;
                active: string;
                disabled: string;
                focus: string;
                background: string;
                backgroundHover: string;
                backgroundActive: string;
                border: string;
                borderHover: string;
                borderFocus: string;
                text: string;
                textHover: string;
                textDisabled: string;
            };
            accent: {
                base: string;
                hover: string;
                active: string;
                disabled: string;
                focus: string;
                background: string;
                backgroundHover: string;
                backgroundActive: string;
                border: string;
                borderHover: string;
                borderFocus: string;
                text: string;
                textHover: string;
                textDisabled: string;
            };
            background: {
                primary: string;
                secondary: string;
                tertiary: string;
                inverse: string;
                overlay: string;
                muted: string;
            };
            surface: {
                primary: string;
                secondary: string;
                tertiary: string;
                elevated: string;
                overlay: string;
                glass: string;
                glassHover: string;
                hover: string;
                active: string;
            };
            text: {
                primary: string;
                secondary: string;
                tertiary: string;
                inverse: string;
                disabled: string;
                link: string;
                linkHover: string;
                linkActive: string;
                linkVisited: string;
                onPrimary: string;
                onSecondary: string;
                onAccent: string;
                onBackground: string;
                onSurface: string;
                glow: string;
                neonCyan: string;
                neonPink: string;
                neonPurple: string;
                neonGreen: string;
            };
            border: {
                primary: string;
                secondary: string;
                tertiary: string;
                focus: string;
                focusRing: string;
                inverse: string;
                neon: string;
                neonGlow: string;
                hover: string;
                active: string;
                disabled: string;
            };
            status: {
                success: {
                    base: string;
                    hover: string;
                    active: string;
                    background: string;
                    backgroundHover: string;
                    border: string;
                    text: string;
                    textOnBackground: string;
                };
                warning: {
                    base: string;
                    hover: string;
                    active: string;
                    background: string;
                    backgroundHover: string;
                    border: string;
                    text: string;
                    textOnBackground: string;
                };
                error: {
                    base: string;
                    hover: string;
                    active: string;
                    background: string;
                    backgroundHover: string;
                    border: string;
                    text: string;
                    textOnBackground: string;
                };
                info: {
                    base: string;
                    hover: string;
                    active: string;
                    background: string;
                    backgroundHover: string;
                    border: string;
                    text: string;
                    textOnBackground: string;
                };
            };
            interactive: {
                default: string;
                hover: string;
                active: string;
                disabled: string;
                disabledText: string;
                focus: string;
                focusRing: string;
            };
            effects: {
                glowCyan: string;
                glowPink: string;
                glowPurple: string;
                glowGreen: string;
                shadowSm: string;
                shadowMd: string;
                shadowLg: string;
            };
            gradients: {
                primary: string;
                secondary: string;
                accent: string;
                background: string;
            };
            primitive: {
                cyan: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                purple: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                pink: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                blue: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                green: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                orange: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                red: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                amber: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                emerald: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                neutral: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                    "950": string;
                };
            };
        };
    };
    readonly typography: {
        fontFamily: {
            sans: string;
            serif: string;
            mono: string;
            display: string;
            body: string;
            code: string;
        };
        fontSize: {
            xs: string;
            sm: string;
            base: string;
            lg: string;
            xl: string;
            "2xl": string;
            "3xl": string;
            "4xl": string;
            "5xl": string;
            "6xl": string;
            "7xl": string;
            "8xl": string;
            "9xl": string;
        };
        fontWeight: {
            thin: string;
            extralight: string;
            light: string;
            normal: string;
            medium: string;
            semibold: string;
            bold: string;
            extrabold: string;
            black: string;
        };
        lineHeight: {
            none: string;
            tight: string;
            snug: string;
            normal: string;
            relaxed: string;
            loose: string;
        };
        letterSpacing: {
            tighter: string;
            tight: string;
            normal: string;
            wide: string;
            wider: string;
            widest: string;
        };
        headings: {
            h1: {
                fontFamily: string;
                fontSize: string;
                fontSizeMobile: string;
                fontSizeTablet: string;
                fontSizeDesktop: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
            h2: {
                fontFamily: string;
                fontSize: string;
                fontSizeMobile: string;
                fontSizeTablet: string;
                fontSizeDesktop: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
            h3: {
                fontFamily: string;
                fontSize: string;
                fontSizeMobile: string;
                fontSizeTablet: string;
                fontSizeDesktop: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
            h4: {
                fontFamily: string;
                fontSize: string;
                fontSizeMobile: string;
                fontSizeTablet: string;
                fontSizeDesktop: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
            h5: {
                fontFamily: string;
                fontSize: string;
                fontSizeMobile: string;
                fontSizeTablet: string;
                fontSizeDesktop: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
            h6: {
                fontFamily: string;
                fontSize: string;
                fontSizeMobile: string;
                fontSizeTablet: string;
                fontSizeDesktop: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
        };
        subtitle: {
            large: {
                fontFamily: string;
                fontSize: string;
                fontSizeMobile: string;
                fontSizeTablet: string;
                fontSizeDesktop: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
            medium: {
                fontFamily: string;
                fontSize: string;
                fontSizeMobile: string;
                fontSizeTablet: string;
                fontSizeDesktop: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
            small: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
        };
        body: {
            large: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            medium: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            small: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
        };
        caption: {
            large: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            medium: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            small: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
        };
        button: {
            large: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            medium: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            small: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
        };
        label: {
            large: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            medium: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            small: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
        };
        code: {
            inline: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            block: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
        };
    };
    readonly spacing: {
        "0": string;
        px: string;
        "0.5": string;
        "1": string;
        "1.5": string;
        "2": string;
        "2.5": string;
        "3": string;
        "3.5": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "14": string;
        "16": string;
        "20": string;
        "24": string;
        "28": string;
        "32": string;
        "36": string;
        "40": string;
        "44": string;
        "48": string;
        "52": string;
        "56": string;
        "60": string;
        "64": string;
        "72": string;
        "80": string;
        "96": string;
    };
    readonly radius: {
        none: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        full: string;
    };
    readonly shadows: {
        light: {
            xs: string;
            sm: string;
            base: string;
            md: string;
            lg: string;
            xl: string;
            "2xl": string;
            inner: string;
        };
        dark: {
            xs: string;
            sm: string;
            base: string;
            md: string;
            lg: string;
            xl: string;
            "2xl": string;
            inner: string;
            glow: {
                cyan: string;
                pink: string;
                purple: string;
                green: string;
            };
        };
    };
};
/**
 * Cores do tema claro
 *
 * @description
 * Exporta apenas as cores do tema claro para uso direto.
 *
 * @type {Object}
 * @constant
 * @readonly
 *
 * @example
 * ```typescript
 * import { lightThemeColors } from 'rainer-design-tokens';
 *
 * const primaryColor = lightThemeColors.brand.primary;
 * ```
 */
declare const lightThemeColors: {
    primary: {
        base: string;
        hover: string;
        active: string;
        disabled: string;
        focus: string;
        background: string;
        backgroundHover: string;
        backgroundActive: string;
        border: string;
        borderHover: string;
        borderFocus: string;
        text: string;
        textHover: string;
        textDisabled: string;
    };
    secondary: {
        base: string;
        hover: string;
        active: string;
        disabled: string;
        focus: string;
        background: string;
        backgroundHover: string;
        backgroundActive: string;
        border: string;
        borderHover: string;
        borderFocus: string;
        text: string;
        textHover: string;
        textDisabled: string;
    };
    accent: {
        base: string;
        hover: string;
        active: string;
        disabled: string;
        focus: string;
        background: string;
        backgroundHover: string;
        backgroundActive: string;
        border: string;
        borderHover: string;
        borderFocus: string;
        text: string;
        textHover: string;
        textDisabled: string;
    };
    background: {
        primary: string;
        secondary: string;
        tertiary: string;
        inverse: string;
        overlay: string;
        muted: string;
    };
    surface: {
        primary: string;
        secondary: string;
        tertiary: string;
        elevated: string;
        overlay: string;
        hover: string;
        active: string;
    };
    text: {
        primary: string;
        secondary: string;
        tertiary: string;
        inverse: string;
        disabled: string;
        link: string;
        linkHover: string;
        linkActive: string;
        linkVisited: string;
        onPrimary: string;
        onSecondary: string;
        onAccent: string;
        onBackground: string;
        onSurface: string;
    };
    border: {
        primary: string;
        secondary: string;
        tertiary: string;
        focus: string;
        focusRing: string;
        inverse: string;
        hover: string;
        active: string;
        disabled: string;
    };
    status: {
        success: {
            base: string;
            hover: string;
            active: string;
            background: string;
            backgroundHover: string;
            border: string;
            text: string;
            textOnBackground: string;
        };
        warning: {
            base: string;
            hover: string;
            active: string;
            background: string;
            backgroundHover: string;
            border: string;
            text: string;
            textOnBackground: string;
        };
        error: {
            base: string;
            hover: string;
            active: string;
            background: string;
            backgroundHover: string;
            border: string;
            text: string;
            textOnBackground: string;
        };
        info: {
            base: string;
            hover: string;
            active: string;
            background: string;
            backgroundHover: string;
            border: string;
            text: string;
            textOnBackground: string;
        };
    };
    interactive: {
        default: string;
        hover: string;
        active: string;
        disabled: string;
        disabledText: string;
        focus: string;
        focusRing: string;
    };
    primitive: {
        cyan: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        purple: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        pink: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        blue: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        green: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        orange: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        red: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        amber: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        emerald: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        neutral: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
            "950": string;
        };
    };
};
/**
 * Cores do tema escuro
 *
 * @description
 * Exporta apenas as cores do tema escuro (estilo cyberpunk) para uso direto.
 *
 * @type {Object}
 * @constant
 * @readonly
 *
 * @example
 * ```typescript
 * import { darkThemeColors } from 'rainer-design-tokens';
 *
 * const neonColor = darkThemeColors.accent.cyan;
 * ```
 */
declare const darkThemeColors: {
    primary: {
        base: string;
        hover: string;
        active: string;
        disabled: string;
        focus: string;
        background: string;
        backgroundHover: string;
        backgroundActive: string;
        border: string;
        borderHover: string;
        borderFocus: string;
        text: string;
        textHover: string;
        textDisabled: string;
    };
    secondary: {
        base: string;
        hover: string;
        active: string;
        disabled: string;
        focus: string;
        background: string;
        backgroundHover: string;
        backgroundActive: string;
        border: string;
        borderHover: string;
        borderFocus: string;
        text: string;
        textHover: string;
        textDisabled: string;
    };
    accent: {
        base: string;
        hover: string;
        active: string;
        disabled: string;
        focus: string;
        background: string;
        backgroundHover: string;
        backgroundActive: string;
        border: string;
        borderHover: string;
        borderFocus: string;
        text: string;
        textHover: string;
        textDisabled: string;
    };
    background: {
        primary: string;
        secondary: string;
        tertiary: string;
        inverse: string;
        overlay: string;
        muted: string;
    };
    surface: {
        primary: string;
        secondary: string;
        tertiary: string;
        elevated: string;
        overlay: string;
        glass: string;
        glassHover: string;
        hover: string;
        active: string;
    };
    text: {
        primary: string;
        secondary: string;
        tertiary: string;
        inverse: string;
        disabled: string;
        link: string;
        linkHover: string;
        linkActive: string;
        linkVisited: string;
        onPrimary: string;
        onSecondary: string;
        onAccent: string;
        onBackground: string;
        onSurface: string;
        glow: string;
        neonCyan: string;
        neonPink: string;
        neonPurple: string;
        neonGreen: string;
    };
    border: {
        primary: string;
        secondary: string;
        tertiary: string;
        focus: string;
        focusRing: string;
        inverse: string;
        neon: string;
        neonGlow: string;
        hover: string;
        active: string;
        disabled: string;
    };
    status: {
        success: {
            base: string;
            hover: string;
            active: string;
            background: string;
            backgroundHover: string;
            border: string;
            text: string;
            textOnBackground: string;
        };
        warning: {
            base: string;
            hover: string;
            active: string;
            background: string;
            backgroundHover: string;
            border: string;
            text: string;
            textOnBackground: string;
        };
        error: {
            base: string;
            hover: string;
            active: string;
            background: string;
            backgroundHover: string;
            border: string;
            text: string;
            textOnBackground: string;
        };
        info: {
            base: string;
            hover: string;
            active: string;
            background: string;
            backgroundHover: string;
            border: string;
            text: string;
            textOnBackground: string;
        };
    };
    interactive: {
        default: string;
        hover: string;
        active: string;
        disabled: string;
        disabledText: string;
        focus: string;
        focusRing: string;
    };
    effects: {
        glowCyan: string;
        glowPink: string;
        glowPurple: string;
        glowGreen: string;
        shadowSm: string;
        shadowMd: string;
        shadowLg: string;
    };
    gradients: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
    };
    primitive: {
        cyan: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        purple: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        pink: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        blue: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        green: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        orange: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        red: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        amber: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        emerald: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        neutral: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
            "950": string;
        };
    };
};
/**
 * Tokens de tipografia
 *
 * @description
 * Exporta todos os tokens relacionados à tipografia, incluindo
 * famílias de fontes, tamanhos, pesos, alturas de linha e espaçamento entre letras.
 *
 * @type {Object}
 * @constant
 * @readonly
 *
 * @example
 * ```typescript
 * import { typographyTokens } from 'rainer-design-tokens';
 *
 * const fontSize = typographyTokens.fontSize.lg;
 * const fontFamily = typographyTokens.fontFamily.sans;
 * ```
 */
declare const typographyTokens: {
    fontFamily: {
        sans: string;
        serif: string;
        mono: string;
        display: string;
        body: string;
        code: string;
    };
    fontSize: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
        "5xl": string;
        "6xl": string;
        "7xl": string;
        "8xl": string;
        "9xl": string;
    };
    fontWeight: {
        thin: string;
        extralight: string;
        light: string;
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
        extrabold: string;
        black: string;
    };
    lineHeight: {
        none: string;
        tight: string;
        snug: string;
        normal: string;
        relaxed: string;
        loose: string;
    };
    letterSpacing: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
        wider: string;
        widest: string;
    };
    headings: {
        h1: {
            fontFamily: string;
            fontSize: string;
            fontSizeMobile: string;
            fontSizeTablet: string;
            fontSizeDesktop: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            marginBottom: string;
        };
        h2: {
            fontFamily: string;
            fontSize: string;
            fontSizeMobile: string;
            fontSizeTablet: string;
            fontSizeDesktop: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            marginBottom: string;
        };
        h3: {
            fontFamily: string;
            fontSize: string;
            fontSizeMobile: string;
            fontSizeTablet: string;
            fontSizeDesktop: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            marginBottom: string;
        };
        h4: {
            fontFamily: string;
            fontSize: string;
            fontSizeMobile: string;
            fontSizeTablet: string;
            fontSizeDesktop: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            marginBottom: string;
        };
        h5: {
            fontFamily: string;
            fontSize: string;
            fontSizeMobile: string;
            fontSizeTablet: string;
            fontSizeDesktop: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            marginBottom: string;
        };
        h6: {
            fontFamily: string;
            fontSize: string;
            fontSizeMobile: string;
            fontSizeTablet: string;
            fontSizeDesktop: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            marginBottom: string;
        };
    };
    subtitle: {
        large: {
            fontFamily: string;
            fontSize: string;
            fontSizeMobile: string;
            fontSizeTablet: string;
            fontSizeDesktop: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            marginBottom: string;
        };
        medium: {
            fontFamily: string;
            fontSize: string;
            fontSizeMobile: string;
            fontSizeTablet: string;
            fontSizeDesktop: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            marginBottom: string;
        };
        small: {
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            marginBottom: string;
        };
    };
    body: {
        large: {
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
        medium: {
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
        small: {
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
    };
    caption: {
        large: {
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
        medium: {
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
        small: {
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
    };
    button: {
        large: {
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
        medium: {
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
        small: {
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
    };
    label: {
        large: {
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
        medium: {
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
        small: {
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
    };
    code: {
        inline: {
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
        block: {
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
    };
};
/**
 * Tokens de espaçamento
 *
 * @description
 * Exporta todos os tokens de espaçamento padronizados do sistema.
 * Utilizados para margens, paddings e gaps consistentes.
 *
 * @type {Object}
 * @constant
 * @readonly
 *
 * @example
 * ```typescript
 * import { spacingTokens } from 'rainer-design-tokens';
 *
 * const margin = spacingTokens.md;
 * const padding = spacingTokens.lg;
 * ```
 */
declare const spacingTokens: {
    "0": string;
    px: string;
    "0.5": string;
    "1": string;
    "1.5": string;
    "2": string;
    "2.5": string;
    "3": string;
    "3.5": string;
    "4": string;
    "5": string;
    "6": string;
    "7": string;
    "8": string;
    "9": string;
    "10": string;
    "11": string;
    "12": string;
    "14": string;
    "16": string;
    "20": string;
    "24": string;
    "28": string;
    "32": string;
    "36": string;
    "40": string;
    "44": string;
    "48": string;
    "52": string;
    "56": string;
    "60": string;
    "64": string;
    "72": string;
    "80": string;
    "96": string;
};
/**
 * Tokens de raio de borda
 *
 * @description
 * Exporta todos os tokens de raio de borda (border-radius) padronizados.
 *
 * @type {Object}
 * @constant
 * @readonly
 *
 * @example
 * ```typescript
 * import { radiusTokens } from 'rainer-design-tokens';
 *
 * const borderRadius = radiusTokens.md;
 * ```
 */
declare const radiusTokens: {
    none: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    full: string;
};
/**
 * Tokens de sombras
 *
 * @description
 * Exporta todos os tokens de sombras, incluindo sombras para tema claro
 * e efeitos de brilho (glow) para tema escuro.
 *
 * @type {Object}
 * @constant
 * @readonly
 *
 * @example
 * ```typescript
 * import { shadowTokens } from 'rainer-design-tokens';
 *
 * const shadow = shadowTokens.light.md;
 * const glow = shadowTokens.dark.glow.cyan;
 * ```
 */
declare const shadowTokens: {
    light: {
        xs: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        inner: string;
    };
    dark: {
        xs: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        inner: string;
        glow: {
            cyan: string;
            pink: string;
            purple: string;
            green: string;
        };
    };
};
/**
 * Tipo TypeScript para todos os tokens
 *
 * @typedef {Object} Tokens
 * @description
 * Tipo que representa a estrutura completa de todos os tokens de design.
 * Útil para type-checking e autocomplete em IDEs.
 */
type Tokens = typeof tokens;
/**
 * Tipo TypeScript para cores do tema claro
 *
 * @typedef {Object} LightColors
 * @description
 * Tipo que representa todas as cores disponíveis no tema claro.
 */
type LightColors = typeof lightColors.colors;
/**
 * Tipo TypeScript para cores do tema escuro
 *
 * @typedef {Object} DarkColors
 * @description
 * Tipo que representa todas as cores disponíveis no tema escuro (cyberpunk).
 */
type DarkColors = typeof darkColors.colors;
/**
 * Tipo TypeScript para tokens de tipografia
 *
 * @typedef {Object} Typography
 * @description
 * Tipo que representa todos os tokens de tipografia.
 */
type Typography = typeof typography$1.typography;
/**
 * Tipo TypeScript para tokens de espaçamento
 *
 * @typedef {Object} Spacing
 * @description
 * Tipo que representa todos os tokens de espaçamento.
 */
type Spacing = typeof spacing$1.spacing;
/**
 * Tipo TypeScript para tokens de raio de borda
 *
 * @typedef {Object} Radius
 * @description
 * Tipo que representa todos os tokens de raio de borda.
 */
type Radius = typeof radius$1.radius;
/**
 * Tipo TypeScript para tokens de sombras
 *
 * @typedef {Object} Shadows
 * @description
 * Tipo que representa todos os tokens de sombras.
 */
type Shadows = typeof shadows$1.shadows;

/**
 * @fileoverview Tema Claro - Rainer Design System
 *
 * @description
 * Agrupa os design tokens em um tema claro profissional e limpo,
 * adequado para uso diurno. Este tema oferece uma experiência visual
 * clara e moderna, ideal para aplicações que requerem legibilidade
 * e profissionalismo.
 *
 * @module themes/light
 * @version 4.0.0
 * @author Rainer Teixeira
 * @since 1.0.0
 */
/**
 * Objeto contendo os tokens para o tema claro
 *
 * @description
 * Tema completo que agrupa todos os tokens de design necessários
 * para uma aplicação com tema claro. Inclui cores, tipografia,
 * espaçamento, raios de borda e sombras.
 *
 * @type {Object}
 * @property {Object} colors - Tokens de cores para o tema claro
 * @property {Object} typography - Tokens de tipografia (fontes, tamanhos, pesos, etc.)
 * @property {Object} spacing - Tokens de espaçamento (margens, paddings)
 * @property {Object} radius - Tokens de raio de borda
 * @property {Object} shadows - Tokens de sombras para o tema claro
 *
 * @constant
 * @readonly
 *
 * @example
 * ```typescript
 * import { lightTheme } from 'rainer-design-tokens';
 *
 * // Acessar cores do tema claro
 * const primaryColor = lightTheme.colors.brand.primary;
 *
 * // Acessar tipografia
 * const fontSize = lightTheme.typography.fontSize.lg;
 *
 * // Aplicar em componente
 * <div style={{
 *   backgroundColor: lightTheme.colors.background.primary,
 *   padding: lightTheme.spacing.md
 * }}>
 *   Conteúdo
 * </div>
 * ```
 */
declare const lightTheme: {
    readonly colors: {
        primary: {
            base: string;
            hover: string;
            active: string;
            disabled: string;
            focus: string;
            background: string;
            backgroundHover: string;
            backgroundActive: string;
            border: string;
            borderHover: string;
            borderFocus: string;
            text: string;
            textHover: string;
            textDisabled: string;
        };
        secondary: {
            base: string;
            hover: string;
            active: string;
            disabled: string;
            focus: string;
            background: string;
            backgroundHover: string;
            backgroundActive: string;
            border: string;
            borderHover: string;
            borderFocus: string;
            text: string;
            textHover: string;
            textDisabled: string;
        };
        accent: {
            base: string;
            hover: string;
            active: string;
            disabled: string;
            focus: string;
            background: string;
            backgroundHover: string;
            backgroundActive: string;
            border: string;
            borderHover: string;
            borderFocus: string;
            text: string;
            textHover: string;
            textDisabled: string;
        };
        background: {
            primary: string;
            secondary: string;
            tertiary: string;
            inverse: string;
            overlay: string;
            muted: string;
        };
        surface: {
            primary: string;
            secondary: string;
            tertiary: string;
            elevated: string;
            overlay: string;
            hover: string;
            active: string;
        };
        text: {
            primary: string;
            secondary: string;
            tertiary: string;
            inverse: string;
            disabled: string;
            link: string;
            linkHover: string;
            linkActive: string;
            linkVisited: string;
            onPrimary: string;
            onSecondary: string;
            onAccent: string;
            onBackground: string;
            onSurface: string;
        };
        border: {
            primary: string;
            secondary: string;
            tertiary: string;
            focus: string;
            focusRing: string;
            inverse: string;
            hover: string;
            active: string;
            disabled: string;
        };
        status: {
            success: {
                base: string;
                hover: string;
                active: string;
                background: string;
                backgroundHover: string;
                border: string;
                text: string;
                textOnBackground: string;
            };
            warning: {
                base: string;
                hover: string;
                active: string;
                background: string;
                backgroundHover: string;
                border: string;
                text: string;
                textOnBackground: string;
            };
            error: {
                base: string;
                hover: string;
                active: string;
                background: string;
                backgroundHover: string;
                border: string;
                text: string;
                textOnBackground: string;
            };
            info: {
                base: string;
                hover: string;
                active: string;
                background: string;
                backgroundHover: string;
                border: string;
                text: string;
                textOnBackground: string;
            };
        };
        interactive: {
            default: string;
            hover: string;
            active: string;
            disabled: string;
            disabledText: string;
            focus: string;
            focusRing: string;
        };
        primitive: {
            cyan: {
                "50": string;
                "100": string;
                "200": string;
                "300": string;
                "400": string;
                "500": string;
                "600": string;
                "700": string;
                "800": string;
                "900": string;
            };
            purple: {
                "50": string;
                "100": string;
                "200": string;
                "300": string;
                "400": string;
                "500": string;
                "600": string;
                "700": string;
                "800": string;
                "900": string;
            };
            pink: {
                "50": string;
                "100": string;
                "200": string;
                "300": string;
                "400": string;
                "500": string;
                "600": string;
                "700": string;
                "800": string;
                "900": string;
            };
            blue: {
                "50": string;
                "100": string;
                "200": string;
                "300": string;
                "400": string;
                "500": string;
                "600": string;
                "700": string;
                "800": string;
                "900": string;
            };
            green: {
                "50": string;
                "100": string;
                "200": string;
                "300": string;
                "400": string;
                "500": string;
                "600": string;
                "700": string;
                "800": string;
                "900": string;
            };
            orange: {
                "50": string;
                "100": string;
                "200": string;
                "300": string;
                "400": string;
                "500": string;
                "600": string;
                "700": string;
                "800": string;
                "900": string;
            };
            red: {
                "50": string;
                "100": string;
                "200": string;
                "300": string;
                "400": string;
                "500": string;
                "600": string;
                "700": string;
                "800": string;
                "900": string;
            };
            amber: {
                "50": string;
                "100": string;
                "200": string;
                "300": string;
                "400": string;
                "500": string;
                "600": string;
                "700": string;
                "800": string;
                "900": string;
            };
            emerald: {
                "50": string;
                "100": string;
                "200": string;
                "300": string;
                "400": string;
                "500": string;
                "600": string;
                "700": string;
                "800": string;
                "900": string;
            };
            neutral: {
                "50": string;
                "100": string;
                "200": string;
                "300": string;
                "400": string;
                "500": string;
                "600": string;
                "700": string;
                "800": string;
                "900": string;
                "950": string;
            };
        };
    };
    readonly typography: {
        fontFamily: {
            sans: string;
            serif: string;
            mono: string;
            display: string;
            body: string;
            code: string;
        };
        fontSize: {
            xs: string;
            sm: string;
            base: string;
            lg: string;
            xl: string;
            "2xl": string;
            "3xl": string;
            "4xl": string;
            "5xl": string;
            "6xl": string;
            "7xl": string;
            "8xl": string;
            "9xl": string;
        };
        fontWeight: {
            thin: string;
            extralight: string;
            light: string;
            normal: string;
            medium: string;
            semibold: string;
            bold: string;
            extrabold: string;
            black: string;
        };
        lineHeight: {
            none: string;
            tight: string;
            snug: string;
            normal: string;
            relaxed: string;
            loose: string;
        };
        letterSpacing: {
            tighter: string;
            tight: string;
            normal: string;
            wide: string;
            wider: string;
            widest: string;
        };
        headings: {
            h1: {
                fontFamily: string;
                fontSize: string;
                fontSizeMobile: string;
                fontSizeTablet: string;
                fontSizeDesktop: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
            h2: {
                fontFamily: string;
                fontSize: string;
                fontSizeMobile: string;
                fontSizeTablet: string;
                fontSizeDesktop: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
            h3: {
                fontFamily: string;
                fontSize: string;
                fontSizeMobile: string;
                fontSizeTablet: string;
                fontSizeDesktop: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
            h4: {
                fontFamily: string;
                fontSize: string;
                fontSizeMobile: string;
                fontSizeTablet: string;
                fontSizeDesktop: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
            h5: {
                fontFamily: string;
                fontSize: string;
                fontSizeMobile: string;
                fontSizeTablet: string;
                fontSizeDesktop: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
            h6: {
                fontFamily: string;
                fontSize: string;
                fontSizeMobile: string;
                fontSizeTablet: string;
                fontSizeDesktop: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
        };
        subtitle: {
            large: {
                fontFamily: string;
                fontSize: string;
                fontSizeMobile: string;
                fontSizeTablet: string;
                fontSizeDesktop: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
            medium: {
                fontFamily: string;
                fontSize: string;
                fontSizeMobile: string;
                fontSizeTablet: string;
                fontSizeDesktop: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
            small: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
        };
        body: {
            large: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            medium: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            small: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
        };
        caption: {
            large: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            medium: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            small: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
        };
        button: {
            large: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            medium: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            small: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
        };
        label: {
            large: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            medium: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            small: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
        };
        code: {
            inline: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            block: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
        };
    };
    readonly spacing: {
        "0": string;
        px: string;
        "0.5": string;
        "1": string;
        "1.5": string;
        "2": string;
        "2.5": string;
        "3": string;
        "3.5": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "14": string;
        "16": string;
        "20": string;
        "24": string;
        "28": string;
        "32": string;
        "36": string;
        "40": string;
        "44": string;
        "48": string;
        "52": string;
        "56": string;
        "60": string;
        "64": string;
        "72": string;
        "80": string;
        "96": string;
    };
    readonly radius: {
        none: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        full: string;
    };
    readonly shadows: {
        xs: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        inner: string;
    };
};
/**
 * Tipo TypeScript do tema claro
 *
 * @typedef {Object} LightTheme
 * @description
 * Tipo que representa a estrutura completa do tema claro.
 * Útil para type-checking e autocomplete em IDEs.
 *
 * @property {Object} colors - Cores do tema claro
 * @property {Object} typography - Tokens de tipografia
 * @property {Object} spacing - Tokens de espaçamento
 * @property {Object} radius - Tokens de raio de borda
 * @property {Object} shadows - Sombras do tema claro
 */
type LightTheme = typeof lightTheme;

/**
 * @fileoverview Tema Escuro - Edição Cyberpunk
 *
 * @description
 * Combina tokens de design em um tema escuro inspirado no estilo cyberpunk.
 * Possui cores neon vibrantes e efeitos de brilho (glow) para uso noturno.
 * Este tema oferece uma experiência visual única e moderna, ideal para
 * aplicações que buscam um visual futurista e impactante.
 *
 * @module themes/dark
 * @version 4.0.0
 * @author Rainer Teixeira
 * @since 1.0.0
 */
/**
 * Objeto contendo os tokens para o tema escuro
 *
 * @description
 * Tema completo que agrupa todos os tokens de design necessários
 * para uma aplicação com tema escuro cyberpunk. Inclui cores neon,
 * tipografia, espaçamento, raios de borda e sombras com efeitos de brilho.
 *
 * @type {Object}
 * @property {Object} colors - Tokens de cores para o tema escuro (cyberpunk)
 * @property {Object} typography - Tokens de tipografia (fontes, tamanhos, pesos, etc.)
 * @property {Object} spacing - Tokens de espaçamento (margens, paddings)
 * @property {Object} radius - Tokens de raio de borda
 * @property {Object} shadows - Tokens de sombras com efeitos de brilho para o tema escuro
 *
 * @constant
 * @readonly
 *
 * @example
 * ```typescript
 * import { darkTheme } from 'rainer-design-tokens';
 *
 * // Acessar cores neon do tema escuro
 * const neonCyan = darkTheme.colors.accent.cyan;
 *
 * // Acessar efeitos de brilho
 * const glowShadow = darkTheme.shadows.glow.cyan;
 *
 * // Aplicar em componente
 * <div style={{
 *   backgroundColor: darkTheme.colors.background.primary,
 *   boxShadow: darkTheme.shadows.glow.purple,
 *   padding: darkTheme.spacing.md
 * }}>
 *   Conteúdo Cyberpunk
 * </div>
 * ```
 */
declare const darkTheme: {
    readonly colors: {
        primary: {
            base: string;
            hover: string;
            active: string;
            disabled: string;
            focus: string;
            background: string;
            backgroundHover: string;
            backgroundActive: string;
            border: string;
            borderHover: string;
            borderFocus: string;
            text: string;
            textHover: string;
            textDisabled: string;
        };
        secondary: {
            base: string;
            hover: string;
            active: string;
            disabled: string;
            focus: string;
            background: string;
            backgroundHover: string;
            backgroundActive: string;
            border: string;
            borderHover: string;
            borderFocus: string;
            text: string;
            textHover: string;
            textDisabled: string;
        };
        accent: {
            base: string;
            hover: string;
            active: string;
            disabled: string;
            focus: string;
            background: string;
            backgroundHover: string;
            backgroundActive: string;
            border: string;
            borderHover: string;
            borderFocus: string;
            text: string;
            textHover: string;
            textDisabled: string;
        };
        background: {
            primary: string;
            secondary: string;
            tertiary: string;
            inverse: string;
            overlay: string;
            muted: string;
        };
        surface: {
            primary: string;
            secondary: string;
            tertiary: string;
            elevated: string;
            overlay: string;
            glass: string;
            glassHover: string;
            hover: string;
            active: string;
        };
        text: {
            primary: string;
            secondary: string;
            tertiary: string;
            inverse: string;
            disabled: string;
            link: string;
            linkHover: string;
            linkActive: string;
            linkVisited: string;
            onPrimary: string;
            onSecondary: string;
            onAccent: string;
            onBackground: string;
            onSurface: string;
            glow: string;
            neonCyan: string;
            neonPink: string;
            neonPurple: string;
            neonGreen: string;
        };
        border: {
            primary: string;
            secondary: string;
            tertiary: string;
            focus: string;
            focusRing: string;
            inverse: string;
            neon: string;
            neonGlow: string;
            hover: string;
            active: string;
            disabled: string;
        };
        status: {
            success: {
                base: string;
                hover: string;
                active: string;
                background: string;
                backgroundHover: string;
                border: string;
                text: string;
                textOnBackground: string;
            };
            warning: {
                base: string;
                hover: string;
                active: string;
                background: string;
                backgroundHover: string;
                border: string;
                text: string;
                textOnBackground: string;
            };
            error: {
                base: string;
                hover: string;
                active: string;
                background: string;
                backgroundHover: string;
                border: string;
                text: string;
                textOnBackground: string;
            };
            info: {
                base: string;
                hover: string;
                active: string;
                background: string;
                backgroundHover: string;
                border: string;
                text: string;
                textOnBackground: string;
            };
        };
        interactive: {
            default: string;
            hover: string;
            active: string;
            disabled: string;
            disabledText: string;
            focus: string;
            focusRing: string;
        };
        effects: {
            glowCyan: string;
            glowPink: string;
            glowPurple: string;
            glowGreen: string;
            shadowSm: string;
            shadowMd: string;
            shadowLg: string;
        };
        gradients: {
            primary: string;
            secondary: string;
            accent: string;
            background: string;
        };
        primitive: {
            cyan: {
                "50": string;
                "100": string;
                "200": string;
                "300": string;
                "400": string;
                "500": string;
                "600": string;
                "700": string;
                "800": string;
                "900": string;
            };
            purple: {
                "50": string;
                "100": string;
                "200": string;
                "300": string;
                "400": string;
                "500": string;
                "600": string;
                "700": string;
                "800": string;
                "900": string;
            };
            pink: {
                "50": string;
                "100": string;
                "200": string;
                "300": string;
                "400": string;
                "500": string;
                "600": string;
                "700": string;
                "800": string;
                "900": string;
            };
            blue: {
                "50": string;
                "100": string;
                "200": string;
                "300": string;
                "400": string;
                "500": string;
                "600": string;
                "700": string;
                "800": string;
                "900": string;
            };
            green: {
                "50": string;
                "100": string;
                "200": string;
                "300": string;
                "400": string;
                "500": string;
                "600": string;
                "700": string;
                "800": string;
                "900": string;
            };
            orange: {
                "50": string;
                "100": string;
                "200": string;
                "300": string;
                "400": string;
                "500": string;
                "600": string;
                "700": string;
                "800": string;
                "900": string;
            };
            red: {
                "50": string;
                "100": string;
                "200": string;
                "300": string;
                "400": string;
                "500": string;
                "600": string;
                "700": string;
                "800": string;
                "900": string;
            };
            amber: {
                "50": string;
                "100": string;
                "200": string;
                "300": string;
                "400": string;
                "500": string;
                "600": string;
                "700": string;
                "800": string;
                "900": string;
            };
            emerald: {
                "50": string;
                "100": string;
                "200": string;
                "300": string;
                "400": string;
                "500": string;
                "600": string;
                "700": string;
                "800": string;
                "900": string;
            };
            neutral: {
                "50": string;
                "100": string;
                "200": string;
                "300": string;
                "400": string;
                "500": string;
                "600": string;
                "700": string;
                "800": string;
                "900": string;
                "950": string;
            };
        };
    };
    readonly typography: {
        fontFamily: {
            sans: string;
            serif: string;
            mono: string;
            display: string;
            body: string;
            code: string;
        };
        fontSize: {
            xs: string;
            sm: string;
            base: string;
            lg: string;
            xl: string;
            "2xl": string;
            "3xl": string;
            "4xl": string;
            "5xl": string;
            "6xl": string;
            "7xl": string;
            "8xl": string;
            "9xl": string;
        };
        fontWeight: {
            thin: string;
            extralight: string;
            light: string;
            normal: string;
            medium: string;
            semibold: string;
            bold: string;
            extrabold: string;
            black: string;
        };
        lineHeight: {
            none: string;
            tight: string;
            snug: string;
            normal: string;
            relaxed: string;
            loose: string;
        };
        letterSpacing: {
            tighter: string;
            tight: string;
            normal: string;
            wide: string;
            wider: string;
            widest: string;
        };
        headings: {
            h1: {
                fontFamily: string;
                fontSize: string;
                fontSizeMobile: string;
                fontSizeTablet: string;
                fontSizeDesktop: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
            h2: {
                fontFamily: string;
                fontSize: string;
                fontSizeMobile: string;
                fontSizeTablet: string;
                fontSizeDesktop: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
            h3: {
                fontFamily: string;
                fontSize: string;
                fontSizeMobile: string;
                fontSizeTablet: string;
                fontSizeDesktop: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
            h4: {
                fontFamily: string;
                fontSize: string;
                fontSizeMobile: string;
                fontSizeTablet: string;
                fontSizeDesktop: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
            h5: {
                fontFamily: string;
                fontSize: string;
                fontSizeMobile: string;
                fontSizeTablet: string;
                fontSizeDesktop: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
            h6: {
                fontFamily: string;
                fontSize: string;
                fontSizeMobile: string;
                fontSizeTablet: string;
                fontSizeDesktop: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
        };
        subtitle: {
            large: {
                fontFamily: string;
                fontSize: string;
                fontSizeMobile: string;
                fontSizeTablet: string;
                fontSizeDesktop: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
            medium: {
                fontFamily: string;
                fontSize: string;
                fontSizeMobile: string;
                fontSizeTablet: string;
                fontSizeDesktop: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
            small: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                marginBottom: string;
            };
        };
        body: {
            large: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            medium: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            small: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
        };
        caption: {
            large: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            medium: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            small: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
        };
        button: {
            large: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            medium: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            small: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
        };
        label: {
            large: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            medium: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            small: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
        };
        code: {
            inline: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            block: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
        };
    };
    readonly spacing: {
        "0": string;
        px: string;
        "0.5": string;
        "1": string;
        "1.5": string;
        "2": string;
        "2.5": string;
        "3": string;
        "3.5": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "14": string;
        "16": string;
        "20": string;
        "24": string;
        "28": string;
        "32": string;
        "36": string;
        "40": string;
        "44": string;
        "48": string;
        "52": string;
        "56": string;
        "60": string;
        "64": string;
        "72": string;
        "80": string;
        "96": string;
    };
    readonly radius: {
        none: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        full: string;
    };
    readonly shadows: {
        xs: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        inner: string;
        glow: {
            cyan: string;
            pink: string;
            purple: string;
            green: string;
        };
    };
};
/**
 * Tipo TypeScript do tema escuro
 *
 * @typedef {Object} DarkTheme
 * @description
 * Tipo que representa a estrutura completa do tema escuro.
 * Útil para type-checking e autocomplete em IDEs.
 *
 * @property {Object} colors - Cores do tema escuro (cyberpunk)
 * @property {Object} typography - Tokens de tipografia
 * @property {Object} spacing - Tokens de espaçamento
 * @property {Object} radius - Tokens de raio de borda
 * @property {Object} shadows - Sombras com efeitos de brilho do tema escuro
 */
type DarkTheme = typeof darkTheme;

/**
 * @fileoverview Ponto de entrada dos temas
 *
 * @description
 * Exporta os temas claro e escuro para fácil consumo.
 * Cada tema agrupa todos os tokens de design de forma organizada,
 * facilitando a aplicação de temas completos na aplicação.
 *
 * @module themes
 * @version 4.0.0
 * @author Rainer Teixeira
 * @since 1.0.0
 *
 * @example
 * ```typescript
 * import { themes, lightTheme, darkTheme } from '@rainersoft/design-tokens';
 *
 * // Usar tema completo
 * const currentTheme = themes.light;
 *
 * // Ou importar diretamente
 * const colors = lightTheme.colors;
 * ```
 */
/**
 * Exporta o tema claro e seu tipo
 *
 * @description
 * Tema claro profissional e limpo, adequado para uso diurno.
 *
 * @see {LightTheme} Para o tipo TypeScript do tema claro
 */

declare const themes: {
    readonly light: {
        readonly colors: {
            primary: {
                base: string;
                hover: string;
                active: string;
                disabled: string;
                focus: string;
                background: string;
                backgroundHover: string;
                backgroundActive: string;
                border: string;
                borderHover: string;
                borderFocus: string;
                text: string;
                textHover: string;
                textDisabled: string;
            };
            secondary: {
                base: string;
                hover: string;
                active: string;
                disabled: string;
                focus: string;
                background: string;
                backgroundHover: string;
                backgroundActive: string;
                border: string;
                borderHover: string;
                borderFocus: string;
                text: string;
                textHover: string;
                textDisabled: string;
            };
            accent: {
                base: string;
                hover: string;
                active: string;
                disabled: string;
                focus: string;
                background: string;
                backgroundHover: string;
                backgroundActive: string;
                border: string;
                borderHover: string;
                borderFocus: string;
                text: string;
                textHover: string;
                textDisabled: string;
            };
            background: {
                primary: string;
                secondary: string;
                tertiary: string;
                inverse: string;
                overlay: string;
                muted: string;
            };
            surface: {
                primary: string;
                secondary: string;
                tertiary: string;
                elevated: string;
                overlay: string;
                hover: string;
                active: string;
            };
            text: {
                primary: string;
                secondary: string;
                tertiary: string;
                inverse: string;
                disabled: string;
                link: string;
                linkHover: string;
                linkActive: string;
                linkVisited: string;
                onPrimary: string;
                onSecondary: string;
                onAccent: string;
                onBackground: string;
                onSurface: string;
            };
            border: {
                primary: string;
                secondary: string;
                tertiary: string;
                focus: string;
                focusRing: string;
                inverse: string;
                hover: string;
                active: string;
                disabled: string;
            };
            status: {
                success: {
                    base: string;
                    hover: string;
                    active: string;
                    background: string;
                    backgroundHover: string;
                    border: string;
                    text: string;
                    textOnBackground: string;
                };
                warning: {
                    base: string;
                    hover: string;
                    active: string;
                    background: string;
                    backgroundHover: string;
                    border: string;
                    text: string;
                    textOnBackground: string;
                };
                error: {
                    base: string;
                    hover: string;
                    active: string;
                    background: string;
                    backgroundHover: string;
                    border: string;
                    text: string;
                    textOnBackground: string;
                };
                info: {
                    base: string;
                    hover: string;
                    active: string;
                    background: string;
                    backgroundHover: string;
                    border: string;
                    text: string;
                    textOnBackground: string;
                };
            };
            interactive: {
                default: string;
                hover: string;
                active: string;
                disabled: string;
                disabledText: string;
                focus: string;
                focusRing: string;
            };
            primitive: {
                cyan: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                purple: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                pink: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                blue: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                green: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                orange: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                red: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                amber: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                emerald: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                neutral: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                    "950": string;
                };
            };
        };
        readonly typography: {
            fontFamily: {
                sans: string;
                serif: string;
                mono: string;
                display: string;
                body: string;
                code: string;
            };
            fontSize: {
                xs: string;
                sm: string;
                base: string;
                lg: string;
                xl: string;
                "2xl": string;
                "3xl": string;
                "4xl": string;
                "5xl": string;
                "6xl": string;
                "7xl": string;
                "8xl": string;
                "9xl": string;
            };
            fontWeight: {
                thin: string;
                extralight: string;
                light: string;
                normal: string;
                medium: string;
                semibold: string;
                bold: string;
                extrabold: string;
                black: string;
            };
            lineHeight: {
                none: string;
                tight: string;
                snug: string;
                normal: string;
                relaxed: string;
                loose: string;
            };
            letterSpacing: {
                tighter: string;
                tight: string;
                normal: string;
                wide: string;
                wider: string;
                widest: string;
            };
            headings: {
                h1: {
                    fontFamily: string;
                    fontSize: string;
                    fontSizeMobile: string;
                    fontSizeTablet: string;
                    fontSizeDesktop: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    marginBottom: string;
                };
                h2: {
                    fontFamily: string;
                    fontSize: string;
                    fontSizeMobile: string;
                    fontSizeTablet: string;
                    fontSizeDesktop: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    marginBottom: string;
                };
                h3: {
                    fontFamily: string;
                    fontSize: string;
                    fontSizeMobile: string;
                    fontSizeTablet: string;
                    fontSizeDesktop: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    marginBottom: string;
                };
                h4: {
                    fontFamily: string;
                    fontSize: string;
                    fontSizeMobile: string;
                    fontSizeTablet: string;
                    fontSizeDesktop: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    marginBottom: string;
                };
                h5: {
                    fontFamily: string;
                    fontSize: string;
                    fontSizeMobile: string;
                    fontSizeTablet: string;
                    fontSizeDesktop: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    marginBottom: string;
                };
                h6: {
                    fontFamily: string;
                    fontSize: string;
                    fontSizeMobile: string;
                    fontSizeTablet: string;
                    fontSizeDesktop: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    marginBottom: string;
                };
            };
            subtitle: {
                large: {
                    fontFamily: string;
                    fontSize: string;
                    fontSizeMobile: string;
                    fontSizeTablet: string;
                    fontSizeDesktop: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    marginBottom: string;
                };
                medium: {
                    fontFamily: string;
                    fontSize: string;
                    fontSizeMobile: string;
                    fontSizeTablet: string;
                    fontSizeDesktop: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    marginBottom: string;
                };
                small: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    marginBottom: string;
                };
            };
            body: {
                large: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                medium: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                small: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
            };
            caption: {
                large: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                medium: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                small: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
            };
            button: {
                large: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                medium: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                small: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
            };
            label: {
                large: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                medium: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                small: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
            };
            code: {
                inline: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                block: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
            };
        };
        readonly spacing: {
            "0": string;
            px: string;
            "0.5": string;
            "1": string;
            "1.5": string;
            "2": string;
            "2.5": string;
            "3": string;
            "3.5": string;
            "4": string;
            "5": string;
            "6": string;
            "7": string;
            "8": string;
            "9": string;
            "10": string;
            "11": string;
            "12": string;
            "14": string;
            "16": string;
            "20": string;
            "24": string;
            "28": string;
            "32": string;
            "36": string;
            "40": string;
            "44": string;
            "48": string;
            "52": string;
            "56": string;
            "60": string;
            "64": string;
            "72": string;
            "80": string;
            "96": string;
        };
        readonly radius: {
            none: string;
            sm: string;
            base: string;
            md: string;
            lg: string;
            xl: string;
            "2xl": string;
            "3xl": string;
            full: string;
        };
        readonly shadows: {
            xs: string;
            sm: string;
            base: string;
            md: string;
            lg: string;
            xl: string;
            "2xl": string;
            inner: string;
        };
    };
    readonly dark: {
        readonly colors: {
            primary: {
                base: string;
                hover: string;
                active: string;
                disabled: string;
                focus: string;
                background: string;
                backgroundHover: string;
                backgroundActive: string;
                border: string;
                borderHover: string;
                borderFocus: string;
                text: string;
                textHover: string;
                textDisabled: string;
            };
            secondary: {
                base: string;
                hover: string;
                active: string;
                disabled: string;
                focus: string;
                background: string;
                backgroundHover: string;
                backgroundActive: string;
                border: string;
                borderHover: string;
                borderFocus: string;
                text: string;
                textHover: string;
                textDisabled: string;
            };
            accent: {
                base: string;
                hover: string;
                active: string;
                disabled: string;
                focus: string;
                background: string;
                backgroundHover: string;
                backgroundActive: string;
                border: string;
                borderHover: string;
                borderFocus: string;
                text: string;
                textHover: string;
                textDisabled: string;
            };
            background: {
                primary: string;
                secondary: string;
                tertiary: string;
                inverse: string;
                overlay: string;
                muted: string;
            };
            surface: {
                primary: string;
                secondary: string;
                tertiary: string;
                elevated: string;
                overlay: string;
                glass: string;
                glassHover: string;
                hover: string;
                active: string;
            };
            text: {
                primary: string;
                secondary: string;
                tertiary: string;
                inverse: string;
                disabled: string;
                link: string;
                linkHover: string;
                linkActive: string;
                linkVisited: string;
                onPrimary: string;
                onSecondary: string;
                onAccent: string;
                onBackground: string;
                onSurface: string;
                glow: string;
                neonCyan: string;
                neonPink: string;
                neonPurple: string;
                neonGreen: string;
            };
            border: {
                primary: string;
                secondary: string;
                tertiary: string;
                focus: string;
                focusRing: string;
                inverse: string;
                neon: string;
                neonGlow: string;
                hover: string;
                active: string;
                disabled: string;
            };
            status: {
                success: {
                    base: string;
                    hover: string;
                    active: string;
                    background: string;
                    backgroundHover: string;
                    border: string;
                    text: string;
                    textOnBackground: string;
                };
                warning: {
                    base: string;
                    hover: string;
                    active: string;
                    background: string;
                    backgroundHover: string;
                    border: string;
                    text: string;
                    textOnBackground: string;
                };
                error: {
                    base: string;
                    hover: string;
                    active: string;
                    background: string;
                    backgroundHover: string;
                    border: string;
                    text: string;
                    textOnBackground: string;
                };
                info: {
                    base: string;
                    hover: string;
                    active: string;
                    background: string;
                    backgroundHover: string;
                    border: string;
                    text: string;
                    textOnBackground: string;
                };
            };
            interactive: {
                default: string;
                hover: string;
                active: string;
                disabled: string;
                disabledText: string;
                focus: string;
                focusRing: string;
            };
            effects: {
                glowCyan: string;
                glowPink: string;
                glowPurple: string;
                glowGreen: string;
                shadowSm: string;
                shadowMd: string;
                shadowLg: string;
            };
            gradients: {
                primary: string;
                secondary: string;
                accent: string;
                background: string;
            };
            primitive: {
                cyan: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                purple: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                pink: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                blue: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                green: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                orange: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                red: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                amber: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                emerald: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                };
                neutral: {
                    "50": string;
                    "100": string;
                    "200": string;
                    "300": string;
                    "400": string;
                    "500": string;
                    "600": string;
                    "700": string;
                    "800": string;
                    "900": string;
                    "950": string;
                };
            };
        };
        readonly typography: {
            fontFamily: {
                sans: string;
                serif: string;
                mono: string;
                display: string;
                body: string;
                code: string;
            };
            fontSize: {
                xs: string;
                sm: string;
                base: string;
                lg: string;
                xl: string;
                "2xl": string;
                "3xl": string;
                "4xl": string;
                "5xl": string;
                "6xl": string;
                "7xl": string;
                "8xl": string;
                "9xl": string;
            };
            fontWeight: {
                thin: string;
                extralight: string;
                light: string;
                normal: string;
                medium: string;
                semibold: string;
                bold: string;
                extrabold: string;
                black: string;
            };
            lineHeight: {
                none: string;
                tight: string;
                snug: string;
                normal: string;
                relaxed: string;
                loose: string;
            };
            letterSpacing: {
                tighter: string;
                tight: string;
                normal: string;
                wide: string;
                wider: string;
                widest: string;
            };
            headings: {
                h1: {
                    fontFamily: string;
                    fontSize: string;
                    fontSizeMobile: string;
                    fontSizeTablet: string;
                    fontSizeDesktop: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    marginBottom: string;
                };
                h2: {
                    fontFamily: string;
                    fontSize: string;
                    fontSizeMobile: string;
                    fontSizeTablet: string;
                    fontSizeDesktop: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    marginBottom: string;
                };
                h3: {
                    fontFamily: string;
                    fontSize: string;
                    fontSizeMobile: string;
                    fontSizeTablet: string;
                    fontSizeDesktop: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    marginBottom: string;
                };
                h4: {
                    fontFamily: string;
                    fontSize: string;
                    fontSizeMobile: string;
                    fontSizeTablet: string;
                    fontSizeDesktop: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    marginBottom: string;
                };
                h5: {
                    fontFamily: string;
                    fontSize: string;
                    fontSizeMobile: string;
                    fontSizeTablet: string;
                    fontSizeDesktop: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    marginBottom: string;
                };
                h6: {
                    fontFamily: string;
                    fontSize: string;
                    fontSizeMobile: string;
                    fontSizeTablet: string;
                    fontSizeDesktop: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    marginBottom: string;
                };
            };
            subtitle: {
                large: {
                    fontFamily: string;
                    fontSize: string;
                    fontSizeMobile: string;
                    fontSizeTablet: string;
                    fontSizeDesktop: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    marginBottom: string;
                };
                medium: {
                    fontFamily: string;
                    fontSize: string;
                    fontSizeMobile: string;
                    fontSizeTablet: string;
                    fontSizeDesktop: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    marginBottom: string;
                };
                small: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    marginBottom: string;
                };
            };
            body: {
                large: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                medium: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                small: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
            };
            caption: {
                large: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                medium: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                small: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
            };
            button: {
                large: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                medium: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                small: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
            };
            label: {
                large: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                medium: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                small: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
            };
            code: {
                inline: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
                block: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                };
            };
        };
        readonly spacing: {
            "0": string;
            px: string;
            "0.5": string;
            "1": string;
            "1.5": string;
            "2": string;
            "2.5": string;
            "3": string;
            "3.5": string;
            "4": string;
            "5": string;
            "6": string;
            "7": string;
            "8": string;
            "9": string;
            "10": string;
            "11": string;
            "12": string;
            "14": string;
            "16": string;
            "20": string;
            "24": string;
            "28": string;
            "32": string;
            "36": string;
            "40": string;
            "44": string;
            "48": string;
            "52": string;
            "56": string;
            "60": string;
            "64": string;
            "72": string;
            "80": string;
            "96": string;
        };
        readonly radius: {
            none: string;
            sm: string;
            base: string;
            md: string;
            lg: string;
            xl: string;
            "2xl": string;
            "3xl": string;
            full: string;
        };
        readonly shadows: {
            xs: string;
            sm: string;
            base: string;
            md: string;
            lg: string;
            xl: string;
            "2xl": string;
            inner: string;
            glow: {
                cyan: string;
                pink: string;
                purple: string;
                green: string;
            };
        };
    };
};
/**
 * Tipo TypeScript para todos os temas
 *
 * @typedef {Object} Themes
 * @description
 * Tipo que representa a estrutura completa de todos os temas disponíveis.
 * Útil para type-checking e autocomplete em IDEs.
 */
type Themes = typeof themes;

export { BACKGROUND, type Background, type DarkColors, type DarkTheme, GRADIENTS, GRADIENT_DIRECTIONS, type GradientDirections, type Gradients, type LightColors, type LightTheme, type Radius, type Shadows, type Spacing, type Themes, type Tokens, type Typography, darkTheme, darkThemeColors, getContrast, getContrastInfo, getLuminance, hexToRgb, lightTheme, lightThemeColors, meetsWCAGAA, meetsWCAGAAA, radiusTokens, shadowTokens, spacingTokens, themes, tokens, typographyTokens, validateContrast };
