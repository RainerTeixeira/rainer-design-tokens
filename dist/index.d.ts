var $schema$c = "http://json-schema.org/draft-07/schema#";
var $description$c = "Paleta de cores primitiva - Cores base, nunca mudam com tema";
var _comments$9 = {
	palette: "Cores fundamentais do sistema de design",
	white: "Branco puro",
	black: "Preto puro",
	transparent: "Transparente",
	gray: "Escala de cinzas neutros",
	blue: "Azul para elementos interativos e informativos",
	cyan: "Ciano para elementos tecnológicos e destaque",
	purple: "Roxo para destaque e elementos premium",
	pink: "Rosa para elementos vibrantes e chamativos",
	red: "Vermelho para alertas e erros",
	orange: "Laranja para avisos e atenção",
	yellow: "Amarelo para destaque e alertas leves",
	green: "Verde para sucesso e confirmações",
	emerald: "Verde esmeralda para elementos naturais"
};
var palette = {
	white: "#ffffff",
	black: "#000000",
	transparent: "transparent",
	gray: {
		"50": "#f9fafb",
		"100": "#f3f4f6",
		"200": "#e5e7eb",
		"300": "#d1d5db",
		"400": "#9ca3af",
		"500": "#6b7280",
		"600": "#4b5563",
		"700": "#374151",
		"800": "#1f2937",
		"900": "#111827"
	},
	blue: {
		"50": "#f0f9ff",
		"100": "#e0f2fe",
		"200": "#bae6fd",
		"300": "#7dd3fc",
		"400": "#38bdf8",
		"500": "#0ea5e9",
		"600": "#0284c7",
		"700": "#0369a1",
		"800": "#075985",
		"900": "#0c4a6e"
	},
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
		"700": "#7c3aed",
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
		"800": "#9d174d",
		"900": "#831843"
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
	yellow: {
		"50": "#fefce8",
		"100": "#fef9c3",
		"200": "#fef08a",
		"300": "#fde047",
		"400": "#facc15",
		"500": "#eab308",
		"600": "#ca8a04",
		"700": "#a16207",
		"800": "#854d0e",
		"900": "#713f12"
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
	}
};
var _notes$9 = {
	palette: "Todas as cores seguem padrão de escala 50-900 onde 50 é mais claro e 900 é mais escuro",
	gray: "Cinza neutro balanceado para textos e backgrounds",
	blue: "Azul céu usado para links, botões primários e elementos interativos",
	cyan: "Ciano vibrante para elementos tecnológicos, futuristas e destaque",
	purple: "Roxo vibrante para elementos premium e destaque visual",
	pink: "Rosa para elementos vibrantes, chamativos e femininos",
	red: "Vermelho para estados de erro, alertas críticos e ações destrutivas",
	orange: "Laranja para avisos, atenção e elementos de destaque secundário",
	yellow: "Amarelo para destaque leve, alertas informativos e atenção",
	green: "Verde para feedback positivo, sucesso e confirmações",
	emerald: "Verde esmeralda para elementos naturais, orgânicos e sucesso alternativo"
};
var colorPalette = {
	$schema: $schema$c,
	$description: $description$c,
	_comments: _comments$9,
	palette: palette,
	_notes: _notes$9
};

var $schema$b = "http://json-schema.org/draft-07/schema#";
var $description$b = "Tokens de espaçamento - Escala consistente baseada em grid de 8pt";
var _comments$8 = {
	spacing: "Escala de espaçamento consistente para todo o sistema"
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
var _notes$8 = {
	"0": "Zero espaçamento",
	"1": "4px - Espaçamento muito pequeno",
	"2": "8px - Espaçamento base (1 unidade do grid)",
	"3": "12px - Espaçamento médio pequeno",
	"4": "16px - Espaçamento médio padrão",
	"5": "20px - Espaçamento médio grande",
	"6": "24px - Espaçamento grande pequeno",
	"7": "28px - Espaçamento grande",
	"8": "32px - Espaçamento grande padrão",
	"9": "36px - Espaçamento grande médio",
	"10": "40px - Espaçamento grande",
	"11": "44px - Espaçamento muito grande pequeno",
	"12": "48px - Espaçamento muito grande",
	"14": "56px - Espaçamento extra grande pequeno",
	"16": "64px - Espaçamento extra grande",
	"20": "80px - Espaçamento enorme pequeno",
	"24": "96px - Espaçamento enorme",
	"28": "112px - Espaçamento gigante pequeno",
	"32": "128px - Espaçamento gigante",
	"36": "144px - Espaçamento gigante médio",
	"40": "160px - Espaçamento gigante grande",
	"44": "176px - Espaçamento massivo pequeno",
	"48": "192px - Espaçamento massivo",
	"52": "208px - Espaçamento colossal pequeno",
	"56": "224px - Espaçamento colossal",
	"60": "240px - Espaçamento colossal médio",
	"64": "256px - Espaçamento colossal grande",
	"72": "288px - Espaçamento máximo pequeno",
	"80": "320px - Espaçamento máximo",
	"96": "384px - Espaçamento máximo absoluto",
	px: "1 pixel para bordas finas",
	"0.5": "2px - Espaçamento mínimo",
	"1.5": "6px - Espaçamento pequeno",
	"2.5": "10px - Espaçamento pequeno médio",
	"3.5": "14px - Espaçamento médio"
};
var spacingScale = {
	$schema: $schema$b,
	$description: $description$b,
	_comments: _comments$8,
	spacing: spacing,
	_notes: _notes$8
};

var $schema$a = "http://json-schema.org/draft-07/schema#";
var $description$a = "Primitivas de tipografia - Font families, tamanhos, pesos e espaçamento";
var _comments$7 = {
	fontFamily: "Famílias de fontes como valores crus",
	fontSize: "Tamanhos de fonte seguindo escala modular",
	fontWeight: "Pesos numéricos de fonte",
	lineHeight: "Valores de altura de linha",
	letterSpacing: "Valores de espaçamento entre letras"
};
var typography$1 = {
	fontFamily: {
		sans: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
		serif: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
		mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
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
		"100": "100",
		"200": "200",
		"300": "300",
		"400": "400",
		"500": "500",
		"600": "600",
		"700": "700",
		"800": "800",
		"900": "900"
	},
	lineHeight: {
		"1": "1",
		"2": "2",
		"1.25": "1.25",
		"1.375": "1.375",
		"1.5": "1.5",
		"1.625": "1.625"
	},
	letterSpacing: {
		"0": "0em",
		"-0.05": "-0.05em",
		"-0.025": "-0.025em",
		"0.025": "0.025em",
		"0.05": "0.05em",
		"0.1": "0.1em"
	}
};
var _notes$7 = {
	fontFamily: {
		sans: "Stack sem serifa para máxima compatibilidade",
		serif: "Fonte serif tradicional",
		mono: "Fonte monoespaçada para código"
	},
	fontSize: {
		xs: "0.75rem - 12px",
		sm: "0.875rem - 14px",
		base: "1rem - 16px",
		lg: "1.125rem - 18px",
		xl: "1.25rem - 20px",
		"2xl": "1.5rem - 24px",
		"3xl": "1.875rem - 30px",
		"4xl": "2.25rem - 36px",
		"5xl": "3rem - 48px",
		"6xl": "3.75rem - 60px",
		"7xl": "4.5rem - 72px",
		"8xl": "6rem - 96px",
		"9xl": "8rem - 128px"
	},
	fontWeight: {
		"100": "Peso 100 - mais leve",
		"200": "Peso 200 - muito leve",
		"300": "Peso 300 - leve",
		"400": "Peso 400 - normal/regular",
		"500": "Peso 500 - médio",
		"600": "Peso 600 - semi-negrito",
		"700": "Peso 700 - negrito",
		"800": "Peso 800 - extra-negrito",
		"900": "Peso 900 - preto"
	},
	lineHeight: {
		"1": "1 - Sem espaçamento extra",
		"2": "2 - Muito espaçado",
		"1.25": "1.25 - Texto compacto",
		"1.375": "1.375 - Ligeiramente apertado",
		"1.5": "1.5 - Legibilidade padrão",
		"1.625": "1.625 - Leitura confortável"
	},
	letterSpacing: {
		"0": "0em - Espaçamento normal",
		"-0.05": "-0.05em - Texto condensado",
		"-0.025": "-0.025em - Ligeiramente condensado",
		"0.025": "0.025em - Ligeiramente expandido",
		"0.05": "0.05em - Texto expandido",
		"0.1": "0.1em - Muito expandido"
	}
};
var typographyBase = {
	$schema: $schema$a,
	$description: $description$a,
	_comments: _comments$7,
	typography: typography$1,
	_notes: _notes$7
};

var $schema$9 = "http://json-schema.org/draft-07/schema#";
var $description$9 = "Escala de sombras - Valores de elevação e profundidade visual";
var _comments$6 = {
	shadows: "Escala completa de sombras em diferentes níveis de intensidade"
};
var shadows = {
	xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
	sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
	base: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
	md: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
	lg: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
	xl: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
	"2xl": "0 50px 100px -20px rgba(0, 0, 0, 0.3)",
	inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
	glow: {
		cyan: "0 0 20px rgba(0, 230, 255, 0.5), 0 0 40px rgba(0, 230, 255, 0.3)",
		pink: "0 0 20px rgba(255, 0, 255, 0.5), 0 0 40px rgba(255, 0, 255, 0.3)",
		purple: "0 0 20px rgba(125, 0, 255, 0.5), 0 0 40px rgba(125, 0, 255, 0.3)",
		green: "0 0 20px rgba(0, 255, 0, 0.5), 0 0 40px rgba(0, 255, 0, 0.3)"
	}
};
var _notes$6 = {
	xs: "Sombra sutil para elementos pequenos (badges, tags)",
	sm: "Sombra leve para botões, inputs e elementos interativos",
	base: "Sombra padrão para cards, dropdowns básicos",
	md: "Sombra média para modais, popovers, elementos destacados",
	lg: "Sombra grande para modais grandes, sidebars, menus",
	xl: "Sombra extra grande para elementos flutuantes importantes",
	"2xl": "Sombra máxima para destaque visual (overlays, hero sections)",
	inner: "Sombra interna para inputs focados, botões pressionados",
	glow: {
		cyan: "Brilho ciano para elementos tecnológicos, futuristas",
		pink: "Brilho rosa para elementos vibrantes, chamativos",
		purple: "Brilho roxo para elementos mágicos/premium",
		green: "Brilho verde para elementos de sucesso, status ativo"
	}
};
var elevationTokens = {
	$schema: $schema$9,
	$description: $description$9,
	_comments: _comments$6,
	shadows: shadows,
	_notes: _notes$6
};

var $schema$8 = "http://json-schema.org/draft-07/schema#";
var $description$8 = "Motion tokens - Durations, easings, and transitions for animations";
var _comments$5 = {
	duration: "Animation durations in milliseconds",
	easing: "Easing curves for different types of movement",
	delay: "Delays before starting animations"
};
var motion = {
	duration: {
		instant: "0ms",
		fast: "100ms",
		normal: "200ms",
		slow: "300ms",
		slower: "500ms",
		slowest: "800ms"
	},
	easing: {
		linear: "linear",
		easeIn: "cubic-bezier(0.4, 0, 1, 1)",
		easeOut: "cubic-bezier(0, 0, 0.2, 1)",
		easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
		easeInQuad: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
		easeOutQuad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
		easeInOutQuad: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
		easeInCubic: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
		easeOutCubic: "cubic-bezier(0.215, 0.61, 0.355, 1)",
		easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1)",
		spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
	},
	delay: {
		none: "0ms",
		short: "50ms",
		medium: "100ms",
		long: "200ms"
	}
};
var _notes$5 = {
	duration: {
		instant: "Instant transition without animation",
		fast: "Fast animation for immediate feedback",
		normal: "Standard duration for common animations",
		slow: "Slow animation for smooth transitions",
		slower: "Very slow animation for heavy elements",
		slowest: "Slowest animation for maximum emphasis"
	},
	easing: {
		linear: "Constant movement without acceleration",
		easeIn: "Slow start, accelerates at the end",
		easeOut: "Fast start, decelerates at the end",
		easeInOut: "Smooth start and end with acceleration in the middle",
		spring: "Spring effect with natural bounce"
	},
	delay: {
		none: "No delay, immediate animation",
		short: "Short delay for quick feedback",
		medium: "Medium delay for sequences",
		long: "Long delay for emphasis"
	}
};
var motionTokens = {
	$schema: $schema$8,
	$description: $description$8,
	_comments: _comments$5,
	motion: motion,
	_notes: _notes$5
};

var $schema$7 = "https://json.schemastore.org/theme.json";
var $description$7 = "Border radius tokens - Generated from spacing scale";
var $generated$2 = "2026-01-11T23:36:56.438Z";
var $source$2 = "primitives/spacing-scale.json";
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
var radiusScale = {
	$schema: $schema$7,
	$description: $description$7,
	$generated: $generated$2,
	$source: $source$2,
	radius: radius
};

var $schema$6 = "https://json.schemastore.org/theme.json";
var $description$6 = "Responsive breakpoints - Mobile-first approach";
var $generated$1 = "2026-01-11T23:36:56.444Z";
var $source$1 = "industry standards + spacing.json reference";
var $spacingReference = {
	baseUnit: "0.25rem",
	note: "Breakpoints follow industry standards, spacing used for reference"
};
var breakpoints = {
	xs: "0px",
	sm: "640px",
	md: "768px",
	lg: "1024px",
	xl: "1280px",
	"2xl": "1536px",
	"3xl": "1920px"
};
var breakpoints_default = {
	$schema: $schema$6,
	$description: $description$6,
	$generated: $generated$1,
	$source: $source$1,
	$spacingReference: $spacingReference,
	breakpoints: breakpoints
};

var $schema$5 = "https://json.schemastore.org/theme.json";
var $description$5 = "Z-index layer system - Organized stacking context";
var $generated = "2026-01-11T23:36:56.447Z";
var $source = "design system layer standards";
var zIndex = {
	base: 0,
	content: 100,
	overlay: 200,
	dropdown: 300,
	modal: 400,
	tooltip: 500,
	notification: 600,
	max: 9999
};
var zIndexLayers = {
	$schema: $schema$5,
	$description: $description$5,
	$generated: $generated,
	$source: $source,
	zIndex: zIndex
};

var $schema$4 = "http://json-schema.org/draft-07/schema#";
var $description$4 = "Border tokens - Width and style definitions";
var _comments$4 = {
	width: "Border thickness for different visual emphasis levels",
	style: "Line styles for different design purposes"
};
var border = {
	width: {
		none: "0px",
		thin: "1px",
		base: "2px",
		thick: "4px"
	},
	style: {
		solid: "solid",
		dashed: "dashed",
		dotted: "dotted",
		double: "double"
	}
};
var _notes$4 = {
	width: {
		none: "Completely removes the border",
		thin: "For subtle dividers and discrete outlines (e.g., separators)",
		base: "Standard outline for most components (e.g., cards, inputs)",
		thick: "For maximum emphasis (e.g., primary buttons, critical alerts)"
	},
	style: {
		solid: "Standard style for most use cases",
		dashed: "For interactive elements or drop areas (e.g., upload)",
		dotted: "To indicate focused states or decorative elements",
		double: "For special visual effects or emphasis"
	}
};
var borderTokens = {
	$schema: $schema$4,
	$description: $description$4,
	_comments: _comments$4,
	border: border,
	_notes: _notes$4
};

var $schema$3 = "http://json-schema.org/draft-07/schema#";
var $description$3 = "Tokens de opacidade - Níveis de transparência";
var _comments$3 = {
	opacity: "Escala de valores de opacidade de 0 a 1"
};
var opacity = {
	"0": 0,
	"10": 0.1,
	"20": 0.2,
	"30": 0.3,
	"40": 0.4,
	"50": 0.5,
	"60": 0.6,
	"70": 0.7,
	"80": 0.8,
	"90": 0.9,
	"100": 1
};
var _notes$3 = {
	"0": "Completamente transparente",
	"10": "Transparência muito leve (10%)",
	"20": "Transparência leve (20%)",
	"30": "Transparência baixa (30%)",
	"40": "Transparência moderada (40%)",
	"50": "Transparência média (50%) - equilíbrio",
	"60": "Transparência acima da média (60%)",
	"70": "Transparência alta (70%)",
	"80": "Transparência muito alta (80%)",
	"90": "Transparência quase total (90%)",
	"100": "Completamente opaco"
};
var opacityScale = {
	$schema: $schema$3,
	$description: $description$3,
	_comments: _comments$3,
	opacity: opacity,
	_notes: _notes$3
};

var $schema$2 = "http://json-schema.org/draft-07/schema#";
var $description$2 = "Tokens de layout - Sistema de grid, container e espaçamento";
var _comments$2 = {
	container: "Larguras máximas de containers em diferentes tamanhos",
	gutter: "Escala de espaçamento entre elementos do grid",
	column: "Configuração básica do sistema de colunas",
	safeArea: "Margens mínimas para diferentes contextos"
};
var layout = {
	container: {
		xs: "20rem",
		sm: "40rem",
		md: "48rem",
		lg: "64rem",
		xl: "80rem",
		"2xl": "96rem"
	},
	gutter: {
		xs: "0.5rem",
		sm: "1rem",
		md: "1.5rem",
		lg: "2rem",
		xl: "3rem"
	},
	column: {
		count: 12,
		gap: "1rem"
	},
	safeArea: {
		xs: "1rem",
		sm: "1.5rem",
		md: "2rem",
		lg: "2.5rem",
		xl: "3rem"
	}
};
var _notes$2 = {
	container: {
		xs: "320px - Container mínimo para mobile muito pequeno",
		sm: "640px - Container para mobile landscape",
		md: "768px - Container para tablets em portrait",
		lg: "1024px - Container para tablets landscape",
		xl: "1280px - Container padrão para desktop",
		"2xl": "1536px - Container amplo para telas grandes"
	},
	gutter: {
		xs: "0.5rem - Espaçamento compacto para layouts densos",
		sm: "1rem - Espaçamento básico para maioria dos layouts",
		md: "1.5rem - Espaçamento confortável para desktop",
		lg: "2rem - Espaçamento generoso para hero sections",
		xl: "3rem - Espaçamento máximo para destaques"
	},
	column: {
		count: "12 - Número padrão de colunas para flexibilidade",
		gap: "1rem - Espaço padrão entre colunas do grid"
	},
	safeArea: {
		xs: "1rem - Margem segura para mobile",
		sm: "1.5rem - Margem confortável para tablets pequenos",
		md: "2rem - Margem padrão para tablets",
		lg: "2.5rem - Margem para laptops",
		xl: "3rem - Margem generosa para desktop"
	}
};
var layoutUnits = {
	$schema: $schema$2,
	$description: $description$2,
	_comments: _comments$2,
	layout: layout,
	_notes: _notes$2
};

var $schema$1 = "http://json-schema.org/draft-07/schema#";
var $description$1 = "Tamanhos de ícones padronizados - Dimensões padronizadas para várias densidades e contextos";
var _comments$1 = {
	iconSize: "Escala completa de tamanhos de ícone em unidades relativas (rem)"
};
var iconSize = {
	"2xs": "0.75rem",
	xs: "1rem",
	sm: "1.25rem",
	base: "1.5rem",
	md: "1.75rem",
	lg: "2rem",
	xl: "2.5rem",
	"2xl": "3rem",
	"3xl": "4rem",
	"4xl": "5rem",
	"5xl": "6rem",
	full: "100%"
};
var _notes$1 = {
	"2xs": "12px - Para interfaces super densas (tabelas complexas, grids)",
	xs: "16px - Para elementos compactos (tags, breadcrumbs)",
	sm: "20px - Para navegação secundária e listas",
	base: "24px - Tamanho padrão para maioria dos ícones UI",
	md: "28px - Para elementos com destaque moderado",
	lg: "32px - Para ícones principais e CTAs",
	xl: "40px - Para seções de cabeçalho e destaques",
	"2xl": "48px - Para elementos de marketing e hero sections",
	"3xl": "64px - Para destaques visuais em landing pages",
	"4xl": "80px - Para elementos decorativos grandes",
	"5xl": "96px - Para banners e páginas de destaque máximo",
	full: "100% - Para ícones responsivos que preenchem containers"
};
var iconScale = {
	$schema: $schema$1,
	$description: $description$1,
	_comments: _comments$1,
	iconSize: iconSize,
	_notes: _notes$1
};

var $schema = "http://json-schema.org/draft-07/schema#";
var $description = "Gradientes - Tokens de gradiente para elementos visuais";
var _comments = {
	gradients: "Gradientes pré-definidos para uso consistente na aplicação",
	text: "Gradientes para efeitos em textos e tipografia",
	background: "Gradientes para backgrounds e superfícies"
};
var gradients = {
	text: {
		primary: "linear-gradient(135deg, #00e6ff 0%, #7d00ff 100%)",
		secondary: "linear-gradient(135deg, #ff00ff 0%, #00e6ff 100%)",
		accent: "linear-gradient(135deg, #ff7d00 0%, #ff00ff 100%)"
	},
	background: {
		hero: "linear-gradient(135deg, #00e6ff 0%, #7d00ff 100%)",
		subtle: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)"
	}
};
var _notes = {
	text: {
		primary: "Gradiente ciano-roxo para textos principais com destaque",
		secondary: "Gradiente rosa-ciano para textos secundários",
		accent: "Gradiente laranja-rosa para acentos e ênfases"
	},
	background: {
		hero: "Gradiente ciano-roxo para seções herói e banners principais",
		subtle: "Gradiente sutil em tons de cinza para backgrounds discretos"
	}
};
var gradientTokens = {
	$schema: $schema,
	$description: $description,
	_comments: _comments,
	gradients: gradients,
	_notes: _notes
};

declare const colorPrimitive: any;
declare const spacingPrimitive: any;
declare const typographyPrimitive: any;
declare const shadowsPrimitive: any;
declare const motionPrimitive: any;
declare const radiusPrimitive: any;
declare const breakpointsPrimitive: any;
declare const zIndexPrimitive: any;
declare const borderPrimitive: any;
declare const opacityPrimitive: any;
declare const layoutPrimitive: any;
declare const iconSizesPrimitive: any;
declare const gradientPrimitive: any;
declare const lightTheme: any;
declare const darkTheme: any;
declare const tokens: {
    primitives: {
        color: any;
        spacing: any;
        typography: any;
        shadows: any;
        motion: any;
        radius: any;
        breakpoints: any;
        zIndex: any;
        border: any;
        opacity: any;
        layout: any;
        iconSize: any;
        gradients: any;
    };
    semantics: {
        color: {
            background: {
                primary: string;
                secondary: string;
                tertiary: string;
                disabled: string;
                overlay: string;
                inverse: string;
            };
            text: {
                primary: string;
                secondary: string;
                tertiary: string;
                disabled: string;
                inverse: string;
                onPrimary: string;
                onSecondary: string;
                link: string;
                linkHover: string;
            };
            button: {
                primary: {
                    default: string;
                    hover: string;
                    active: string;
                    text: string;
                };
                secondary: {
                    default: string;
                    hover: string;
                    active: string;
                    text: string;
                };
                tertiary: {
                    default: string;
                    hover: string;
                    active: string;
                    text: string;
                };
                danger: {
                    default: string;
                    hover: string;
                    active: string;
                    text: string;
                };
                success: {
                    default: string;
                    hover: string;
                    active: string;
                    text: string;
                };
            };
            border: {
                default: string;
                light: string;
                medium: string;
                dark: string;
                focus: string;
                error: string;
                success: string;
                warning: string;
            };
            status: {
                success: {
                    default: string;
                    light: string;
                    dark: string;
                    text: string;
                };
                error: {
                    default: string;
                    light: string;
                    dark: string;
                    text: string;
                };
                warning: {
                    default: string;
                    light: string;
                    dark: string;
                    text: string;
                };
                info: {
                    default: string;
                    light: string;
                    dark: string;
                    text: string;
                };
            };
            interactive: {
                link: {
                    default: string;
                    hover: string;
                    visited: string;
                    active: string;
                };
                focus: {
                    ring: string;
                    ringOffset: string;
                };
            };
            surface: {
                elevated: string;
                raised: string;
                sunken: string;
                "surface-0": string;
                "surface-1": string;
                "surface-2": string;
                "on-surface": string;
            };
            focus: {
                ring: string;
                outline: string;
            };
            disabled: {
                opacity: string;
                background: string;
                text: string;
            };
            chart: {
                primary: string;
                secondary: string;
                tertiary: string;
                quaternary: string;
                quinary: string;
                senary: string;
            };
        };
        spacing: {
            component: {
                tight: string;
                compact: string;
                comfortable: string;
                relaxed: string;
                loose: string;
            };
            layout: {
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
                "2xl": string;
            };
            section: {
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
                "2xl": string;
            };
            stack: {
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            inline: {
                xs: string;
                sm: string;
                md: string;
                lg: string;
            };
            inset: {
                none: string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
                "2xl": string;
            };
            gap: {
                none: string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            container: {
                padding: {
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
                margin: {
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
            };
        };
        typography: {
            heading: {
                h1: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                };
                h2: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                };
                h3: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                };
                h4: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                };
                h5: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                };
                h6: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                };
            };
            body: {
                large: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                };
                base: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                };
                small: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                };
            };
            caption: {
                large: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                };
                base: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                };
                small: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                };
            };
            label: {
                large: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                };
                base: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                };
                small: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                };
            };
            code: {
                inline: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                };
                block: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                };
            };
            button: {
                large: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                };
                base: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                };
                small: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                };
            };
            link: {
                base: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                    textDecoration: string;
                };
                bold: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    fontFamily: string;
                    textDecoration: string;
                };
            };
        };
        border: {
            default: {
                width: string;
                style: string;
                color: string;
            };
            interactive: {
                default: {
                    width: string;
                    style: string;
                    color: string;
                };
                hover: {
                    width: string;
                    style: string;
                    color: string;
                };
                focus: {
                    width: string;
                    style: string;
                    color: string;
                };
                active: {
                    width: string;
                    style: string;
                    color: string;
                };
            };
            emphasis: {
                strong: {
                    width: string;
                    style: string;
                    color: string;
                };
                subtle: {
                    width: string;
                    style: string;
                    color: string;
                };
            };
            divider: {
                horizontal: {
                    width: string;
                    style: string;
                    color: string;
                };
                vertical: {
                    width: string;
                    style: string;
                    color: string;
                };
                subtle: {
                    width: string;
                    style: string;
                    color: string;
                };
            };
            outline: {
                focus: {
                    width: string;
                    style: string;
                    color: string;
                    offset: string;
                };
                error: {
                    width: string;
                    style: string;
                    color: string;
                };
                success: {
                    width: string;
                    style: string;
                    color: string;
                };
            };
            radius: {
                none: string;
                sm: string;
                base: string;
                md: string;
                lg: string;
                xl: string;
                "2xl": string;
                full: string;
            };
            component: {
                input: {
                    width: string;
                    style: string;
                    radius: string;
                    color: string;
                };
                button: {
                    width: string;
                    style: string;
                    radius: string;
                    color: string;
                };
                card: {
                    width: string;
                    style: string;
                    radius: string;
                    color: string;
                };
                badge: {
                    width: string;
                    style: string;
                    radius: string;
                    color: string;
                };
                modal: {
                    width: string;
                    style: string;
                    radius: string;
                    color: string;
                };
            };
        };
        layout: {
            container: {
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
                "2xl": string;
                full: string;
            };
            grid: {
                columns: {
                    count: number;
                    gap: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                    };
                };
                gutter: {
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
            };
            spacing: {
                section: {
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
                container: {
                    padding: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                    };
                    margin: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                    };
                };
            };
            safeArea: {
                mobile: string;
                tablet: string;
                desktop: string;
                wide: string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            zIndex: {
                base: string;
                dropdown: string;
                sticky: string;
                fixed: string;
                overlay: string;
                modal: string;
                popover: string;
                tooltip: string;
                toast: string;
                max: string;
            };
            breakpoint: {
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
                "2xl": string;
                "3xl": string;
            };
        };
        elevation: {
            surface: {
                none: string;
                xs: string;
                sm: string;
                base: string;
                md: string;
                lg: string;
                xl: string;
                "2xl": string;
            };
            component: {
                button: {
                    default: string;
                    hover: string;
                    active: string;
                    disabled: string;
                };
                input: {
                    default: string;
                    focus: string;
                    error: string;
                };
                card: {
                    default: string;
                    hover: string;
                    elevated: string;
                };
                dropdown: {
                    default: string;
                    menu: string;
                };
                modal: {
                    overlay: string;
                    dialog: string;
                };
                tooltip: {
                    default: string;
                };
            };
            interactive: {
                hover: string;
                focus: string;
                active: string;
                drag: string;
            };
            overlay: {
                backdrop: string;
                sheet: string;
                popover: string;
            };
        };
        motion: {
            transition: {
                default: {
                    duration: string;
                    easing: string;
                    delay: string;
                };
                fast: {
                    duration: string;
                    easing: string;
                    delay: string;
                };
                slow: {
                    duration: string;
                    easing: string;
                    delay: string;
                };
                instant: {
                    duration: string;
                    easing: string;
                    delay: string;
                };
            };
            interaction: {
                hover: {
                    duration: string;
                    easing: string;
                    delay: string;
                };
                focus: {
                    duration: string;
                    easing: string;
                    delay: string;
                };
                active: {
                    duration: string;
                    easing: string;
                    delay: string;
                };
                tap: {
                    duration: string;
                    easing: string;
                    delay: string;
                };
            };
            feedback: {
                success: {
                    duration: string;
                    easing: string;
                    delay: string;
                };
                error: {
                    duration: string;
                    easing: string;
                    delay: string;
                };
                loading: {
                    duration: string;
                    easing: string;
                    delay: string;
                };
                notification: {
                    duration: string;
                    easing: string;
                    delay: string;
                };
            };
            navigation: {
                page: {
                    duration: string;
                    easing: string;
                    delay: string;
                };
                drawer: {
                    duration: string;
                    easing: string;
                    delay: string;
                };
                modal: {
                    duration: string;
                    easing: string;
                    delay: string;
                };
                collapse: {
                    duration: string;
                    easing: string;
                    delay: string;
                };
            };
            component: {
                fade: {
                    duration: string;
                    easing: string;
                    delay: string;
                };
                slide: {
                    duration: string;
                    easing: string;
                    delay: string;
                };
                scale: {
                    duration: string;
                    easing: string;
                    delay: string;
                };
                rotate: {
                    duration: string;
                    easing: string;
                    delay: string;
                };
            };
        };
    };
    themes: {
        light: any;
        dark: any;
    };
};

declare const colorSemantic: {
    background: {
        primary: string;
        secondary: string;
        tertiary: string;
        disabled: string;
        overlay: string;
        inverse: string;
    };
    text: {
        primary: string;
        secondary: string;
        tertiary: string;
        disabled: string;
        inverse: string;
        onPrimary: string;
        onSecondary: string;
        link: string;
        linkHover: string;
    };
    button: {
        primary: {
            default: string;
            hover: string;
            active: string;
            text: string;
        };
        secondary: {
            default: string;
            hover: string;
            active: string;
            text: string;
        };
        tertiary: {
            default: string;
            hover: string;
            active: string;
            text: string;
        };
        danger: {
            default: string;
            hover: string;
            active: string;
            text: string;
        };
        success: {
            default: string;
            hover: string;
            active: string;
            text: string;
        };
    };
    border: {
        default: string;
        light: string;
        medium: string;
        dark: string;
        focus: string;
        error: string;
        success: string;
        warning: string;
    };
    status: {
        success: {
            default: string;
            light: string;
            dark: string;
            text: string;
        };
        error: {
            default: string;
            light: string;
            dark: string;
            text: string;
        };
        warning: {
            default: string;
            light: string;
            dark: string;
            text: string;
        };
        info: {
            default: string;
            light: string;
            dark: string;
            text: string;
        };
    };
    interactive: {
        link: {
            default: string;
            hover: string;
            visited: string;
            active: string;
        };
        focus: {
            ring: string;
            ringOffset: string;
        };
    };
    surface: {
        elevated: string;
        raised: string;
        sunken: string;
        "surface-0": string;
        "surface-1": string;
        "surface-2": string;
        "on-surface": string;
    };
    focus: {
        ring: string;
        outline: string;
    };
    disabled: {
        opacity: string;
        background: string;
        text: string;
    };
    chart: {
        primary: string;
        secondary: string;
        tertiary: string;
        quaternary: string;
        quinary: string;
        senary: string;
    };
};
declare const spacingSemantic: {
    component: {
        tight: string;
        compact: string;
        comfortable: string;
        relaxed: string;
        loose: string;
    };
    layout: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
    };
    section: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
    };
    stack: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    inline: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    inset: {
        none: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
    };
    gap: {
        none: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    container: {
        padding: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        margin: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    };
};
declare const typographySemantic: {
    heading: {
        h1: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            fontFamily: string;
        };
        h2: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            fontFamily: string;
        };
        h3: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            fontFamily: string;
        };
        h4: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            fontFamily: string;
        };
        h5: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            fontFamily: string;
        };
        h6: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            fontFamily: string;
        };
    };
    body: {
        large: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            fontFamily: string;
        };
        base: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            fontFamily: string;
        };
        small: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            fontFamily: string;
        };
    };
    caption: {
        large: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            fontFamily: string;
        };
        base: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            fontFamily: string;
        };
        small: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            fontFamily: string;
        };
    };
    label: {
        large: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            fontFamily: string;
        };
        base: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            fontFamily: string;
        };
        small: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            fontFamily: string;
        };
    };
    code: {
        inline: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            fontFamily: string;
        };
        block: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            fontFamily: string;
        };
    };
    button: {
        large: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            fontFamily: string;
        };
        base: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            fontFamily: string;
        };
        small: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            fontFamily: string;
        };
    };
    link: {
        base: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            fontFamily: string;
            textDecoration: string;
        };
        bold: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            fontFamily: string;
            textDecoration: string;
        };
    };
};
declare const borderSemantic: {
    default: {
        width: string;
        style: string;
        color: string;
    };
    interactive: {
        default: {
            width: string;
            style: string;
            color: string;
        };
        hover: {
            width: string;
            style: string;
            color: string;
        };
        focus: {
            width: string;
            style: string;
            color: string;
        };
        active: {
            width: string;
            style: string;
            color: string;
        };
    };
    emphasis: {
        strong: {
            width: string;
            style: string;
            color: string;
        };
        subtle: {
            width: string;
            style: string;
            color: string;
        };
    };
    divider: {
        horizontal: {
            width: string;
            style: string;
            color: string;
        };
        vertical: {
            width: string;
            style: string;
            color: string;
        };
        subtle: {
            width: string;
            style: string;
            color: string;
        };
    };
    outline: {
        focus: {
            width: string;
            style: string;
            color: string;
            offset: string;
        };
        error: {
            width: string;
            style: string;
            color: string;
        };
        success: {
            width: string;
            style: string;
            color: string;
        };
    };
    radius: {
        none: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        full: string;
    };
    component: {
        input: {
            width: string;
            style: string;
            radius: string;
            color: string;
        };
        button: {
            width: string;
            style: string;
            radius: string;
            color: string;
        };
        card: {
            width: string;
            style: string;
            radius: string;
            color: string;
        };
        badge: {
            width: string;
            style: string;
            radius: string;
            color: string;
        };
        modal: {
            width: string;
            style: string;
            radius: string;
            color: string;
        };
    };
};
declare const layoutSemantic: {
    container: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        full: string;
    };
    grid: {
        columns: {
            count: number;
            gap: {
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
        };
        gutter: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    };
    spacing: {
        section: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        container: {
            padding: {
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            margin: {
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
        };
    };
    safeArea: {
        mobile: string;
        tablet: string;
        desktop: string;
        wide: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    zIndex: {
        base: string;
        dropdown: string;
        sticky: string;
        fixed: string;
        overlay: string;
        modal: string;
        popover: string;
        tooltip: string;
        toast: string;
        max: string;
    };
    breakpoint: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
    };
};
declare const elevationSemantic: {
    surface: {
        none: string;
        xs: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
    };
    component: {
        button: {
            default: string;
            hover: string;
            active: string;
            disabled: string;
        };
        input: {
            default: string;
            focus: string;
            error: string;
        };
        card: {
            default: string;
            hover: string;
            elevated: string;
        };
        dropdown: {
            default: string;
            menu: string;
        };
        modal: {
            overlay: string;
            dialog: string;
        };
        tooltip: {
            default: string;
        };
    };
    interactive: {
        hover: string;
        focus: string;
        active: string;
        drag: string;
    };
    overlay: {
        backdrop: string;
        sheet: string;
        popover: string;
    };
};
declare const motionSemantic: {
    transition: {
        default: {
            duration: string;
            easing: string;
            delay: string;
        };
        fast: {
            duration: string;
            easing: string;
            delay: string;
        };
        slow: {
            duration: string;
            easing: string;
            delay: string;
        };
        instant: {
            duration: string;
            easing: string;
            delay: string;
        };
    };
    interaction: {
        hover: {
            duration: string;
            easing: string;
            delay: string;
        };
        focus: {
            duration: string;
            easing: string;
            delay: string;
        };
        active: {
            duration: string;
            easing: string;
            delay: string;
        };
        tap: {
            duration: string;
            easing: string;
            delay: string;
        };
    };
    feedback: {
        success: {
            duration: string;
            easing: string;
            delay: string;
        };
        error: {
            duration: string;
            easing: string;
            delay: string;
        };
        loading: {
            duration: string;
            easing: string;
            delay: string;
        };
        notification: {
            duration: string;
            easing: string;
            delay: string;
        };
    };
    navigation: {
        page: {
            duration: string;
            easing: string;
            delay: string;
        };
        drawer: {
            duration: string;
            easing: string;
            delay: string;
        };
        modal: {
            duration: string;
            easing: string;
            delay: string;
        };
        collapse: {
            duration: string;
            easing: string;
            delay: string;
        };
    };
    component: {
        fade: {
            duration: string;
            easing: string;
            delay: string;
        };
        slide: {
            duration: string;
            easing: string;
            delay: string;
        };
        scale: {
            duration: string;
            easing: string;
            delay: string;
        };
        rotate: {
            duration: string;
            easing: string;
            delay: string;
        };
    };
};

/**
 * @fileoverview Ponto de entrada dos temas
 *
 * @description
 * Exporta os temas claro e escuro para fácil consumo.
 * Cada tema agrupa todos os tokens de design de forma organizada,
 * facilitando a aplicação de temas completos na aplicação.
 *
 * @module themes
 * @version 2.0.0
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
        readonly colors: any;
        readonly typography: any;
        readonly spacing: any;
        readonly radius: any;
        readonly shadows: any;
    };
    readonly dark: {
        readonly colors: any;
        readonly typography: any;
        readonly spacing: any;
        readonly radius: any;
        readonly shadows: any;
    };
};

declare const GRADIENT_DIRECTIONS: {
    readonly TO_BOTTOM: "to-bottom";
    readonly TO_TOP: "to-top";
    readonly TO_RIGHT: "to-right";
    readonly TO_LEFT: "to-left";
    readonly TO_BR: "to-br";
    readonly TO_BL: "to-bl";
    readonly TO_TR: "to-tr";
    readonly TO_TL: "to-tl";
};
declare const BACKGROUND: {
    readonly PRIMARY: "bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500";
    readonly SECONDARY: "bg-gradient-to-br from-purple-500 via-pink-500 to-red-500";
    readonly DARK: "bg-gradient-to-br from-slate-900 to-slate-800";
    readonly LIGHT: "bg-gradient-to-br from-white to-gray-100";
    readonly GRADIENT_OVERLAY: "bg-gradient-to-b from-cyan-900/20 via-purple-900/10 to-transparent";
    readonly PREMIUM_DIVIDER_LINE: "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500";
};
declare const MOTION: {
    readonly TRANSITION: {
        readonly DEFAULT: "transition-all duration-200 ease-in-out";
        readonly COLOR: "transition-colors duration-200 ease-in-out";
    };
};
declare const validateContrast: (_foreground: string, _background: string) => {
    valid: boolean;
    contrast: number;
    message: string;
};
declare const colors: any;
declare const typography: any;
declare const cssVarsPath = "./src/css-vars.css";

export { BACKGROUND, gradientPrimitive as GRADIENTS, GRADIENT_DIRECTIONS, MOTION, shadowsPrimitive as SHADOWS, borderPrimitive, borderSemantic, breakpointsPrimitive, colorPrimitive, colorSemantic, colors, cssVarsPath, darkTheme, elevationSemantic, gradientPrimitive, iconSizesPrimitive, layoutPrimitive, layoutSemantic, lightTheme, motionPrimitive, motionSemantic, motionPrimitive as motionTokens, opacityPrimitive, radiusPrimitive, borderTokens as rawBorderPrimitive, breakpoints_default as rawBreakpointsPrimitive, colorPalette as rawColorPrimitive, gradientTokens as rawGradientPrimitive, iconScale as rawIconSizesPrimitive, layoutUnits as rawLayoutPrimitive, motionTokens as rawMotionPrimitive, opacityScale as rawOpacityPrimitive, radiusScale as rawRadiusPrimitive, elevationTokens as rawShadowsPrimitive, spacingScale as rawSpacingPrimitive, typographyBase as rawTypographyPrimitive, zIndexLayers as rawZIndexPrimitive, shadowsPrimitive, spacingPrimitive, spacingSemantic, themes, tokens, typography, typographyPrimitive, typographySemantic, validateContrast, zIndexPrimitive };
