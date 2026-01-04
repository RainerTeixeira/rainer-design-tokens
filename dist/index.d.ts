var $schema$l = "http://json-schema.org/draft-07/schema#";
var $description$l = "Paleta de cores primitiva - Cores base, nunca mudam com tema";
var _comments$i = {
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
var _notes$i = {
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
	$schema: $schema$l,
	$description: $description$l,
	_comments: _comments$i,
	palette: palette,
	_notes: _notes$i
};

var $schema$k = "http://json-schema.org/draft-07/schema#";
var $description$k = "Tokens de espaçamento - Escala consistente baseada em grid de 8pt";
var _comments$h = {
	spacing: "Escala de espaçamento consistente para todo o sistema"
};
var spacing$1 = {
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
var _notes$h = {
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
	$schema: $schema$k,
	$description: $description$k,
	_comments: _comments$h,
	spacing: spacing$1,
	_notes: _notes$h
};

var $schema$j = "http://json-schema.org/draft-07/schema#";
var $description$j = "Primitivas de tipografia - Font families, tamanhos, pesos e espaçamento";
var _comments$g = {
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
var _notes$g = {
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
	$schema: $schema$j,
	$description: $description$j,
	_comments: _comments$g,
	typography: typography$1,
	_notes: _notes$g
};

var $schema$i = "http://json-schema.org/draft-07/schema#";
var $description$i = "Escala de sombras - Valores de elevação e profundidade visual";
var _comments$f = {
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
var _notes$f = {
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
	$schema: $schema$i,
	$description: $description$i,
	_comments: _comments$f,
	shadows: shadows,
	_notes: _notes$f
};

var $schema$h = "http://json-schema.org/draft-07/schema#";
var $description$h = "Motion tokens - Durations, easings, and transitions for animations";
var _comments$e = {
	duration: "Animation durations in milliseconds",
	easing: "Easing curves for different types of movement",
	delay: "Delays before starting animations"
};
var motion$1 = {
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
var _notes$e = {
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
	$schema: $schema$h,
	$description: $description$h,
	_comments: _comments$e,
	motion: motion$1,
	_notes: _notes$e
};

var $schema$g = "https://json.schemastore.org/theme.json";
var $description$g = "Border radius tokens - Generated from spacing scale";
var $generated$2 = "2026-01-04T16:45:19.808Z";
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
	$schema: $schema$g,
	$description: $description$g,
	$generated: $generated$2,
	$source: $source$2,
	radius: radius
};

var $schema$f = "https://json.schemastore.org/theme.json";
var $description$f = "Responsive breakpoints - Mobile-first approach";
var $generated$1 = "2026-01-04T16:45:19.812Z";
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
	$schema: $schema$f,
	$description: $description$f,
	$generated: $generated$1,
	$source: $source$1,
	$spacingReference: $spacingReference,
	breakpoints: breakpoints
};

var $schema$e = "https://json.schemastore.org/theme.json";
var $description$e = "Z-index layer system - Organized stacking context";
var $generated = "2026-01-04T16:45:19.814Z";
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
	$schema: $schema$e,
	$description: $description$e,
	$generated: $generated,
	$source: $source,
	zIndex: zIndex
};

var $schema$d = "http://json-schema.org/draft-07/schema#";
var $description$d = "Border tokens - Width and style definitions";
var _comments$d = {
	width: "Border thickness for different visual emphasis levels",
	style: "Line styles for different design purposes"
};
var border$1 = {
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
var _notes$d = {
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
	$schema: $schema$d,
	$description: $description$d,
	_comments: _comments$d,
	border: border$1,
	_notes: _notes$d
};

var $schema$c = "http://json-schema.org/draft-07/schema#";
var $description$c = "Tokens de opacidade - Níveis de transparência";
var _comments$c = {
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
var _notes$c = {
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
	$schema: $schema$c,
	$description: $description$c,
	_comments: _comments$c,
	opacity: opacity,
	_notes: _notes$c
};

var $schema$b = "http://json-schema.org/draft-07/schema#";
var $description$b = "Tokens de layout - Sistema de grid, container e espaçamento";
var _comments$b = {
	container: "Larguras máximas de containers em diferentes tamanhos",
	gutter: "Escala de espaçamento entre elementos do grid",
	column: "Configuração básica do sistema de colunas",
	safeArea: "Margens mínimas para diferentes contextos"
};
var layout$1 = {
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
var _notes$b = {
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
	$schema: $schema$b,
	$description: $description$b,
	_comments: _comments$b,
	layout: layout$1,
	_notes: _notes$b
};

var $schema$a = "http://json-schema.org/draft-07/schema#";
var $description$a = "Tamanhos de ícones padronizados - Dimensões padronizadas para várias densidades e contextos";
var _comments$a = {
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
var _notes$a = {
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
	$schema: $schema$a,
	$description: $description$a,
	_comments: _comments$a,
	iconSize: iconSize,
	_notes: _notes$a
};

var $schema$9 = "http://json-schema.org/draft-07/schema#";
var $description$9 = "Gradientes - Tokens de gradiente para elementos visuais";
var _comments$9 = {
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
var _notes$9 = {
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
	$schema: $schema$9,
	$description: $description$9,
	_comments: _comments$9,
	gradients: gradients,
	_notes: _notes$9
};

var $schema$8 = "http://json-schema.org/draft-07/schema#";
var $description$8 = "Tokens semânticos de cor - Cores organizadas por função e contexto de uso";
var _comments$8 = {
	color: "Cores organizadas por papel semântico no sistema de design",
	background: "Cores de fundo para diferentes níveis hierárquicos",
	text: "Cores de texto para diferentes níveis de importância",
	button: "Cores para estados de botões e ações",
	border: "Cores para bordas e divisores",
	status: "Cores para feedback de status e estados",
	interactive: "Cores para elementos interativos e links",
	surface: "Cores para superfícies e elevamentos"
};
var color$2 = {
	background: {
		primary: "{palette.white}",
		secondary: "{palette.gray.50}",
		tertiary: "{palette.gray.100}",
		disabled: "{palette.gray.100}",
		overlay: "rgba(0, 0, 0, 0.5)",
		inverse: "{palette.black}"
	},
	text: {
		primary: "{palette.gray.900}",
		secondary: "{palette.gray.600}",
		tertiary: "{palette.gray.400}",
		disabled: "{palette.gray.300}",
		inverse: "{palette.white}",
		onPrimary: "{palette.white}",
		onSecondary: "{palette.gray.900}",
		link: "{palette.blue.600}",
		linkHover: "{palette.blue.700}"
	},
	button: {
		primary: {
			"default": "{palette.blue.500}",
			hover: "{palette.blue.600}",
			active: "{palette.blue.700}",
			text: "{palette.white}"
		},
		secondary: {
			"default": "{palette.gray.200}",
			hover: "{palette.gray.300}",
			active: "{palette.gray.400}",
			text: "{palette.gray.900}"
		},
		tertiary: {
			"default": "{palette.transparent}",
			hover: "{palette.gray.100}",
			active: "{palette.gray.200}",
			text: "{palette.gray.900}"
		},
		danger: {
			"default": "{palette.red.500}",
			hover: "{palette.red.600}",
			active: "{palette.red.700}",
			text: "{palette.white}"
		},
		success: {
			"default": "{palette.green.500}",
			hover: "{palette.green.600}",
			active: "{palette.green.700}",
			text: "{palette.white}"
		}
	},
	border: {
		"default": "{palette.gray.200}",
		light: "{palette.gray.100}",
		medium: "{palette.gray.300}",
		dark: "{palette.gray.400}",
		focus: "{palette.blue.500}",
		error: "{palette.red.500}",
		success: "{palette.green.500}",
		warning: "{palette.red.400}"
	},
	status: {
		success: {
			"default": "{palette.green.500}",
			light: "{palette.green.50}",
			dark: "{palette.green.700}",
			text: "{palette.green.700}"
		},
		error: {
			"default": "{palette.red.500}",
			light: "{palette.red.50}",
			dark: "{palette.red.700}",
			text: "{palette.red.700}"
		},
		warning: {
			"default": "{palette.red.400}",
			light: "{palette.red.50}",
			dark: "{palette.red.600}",
			text: "{palette.red.800}"
		},
		info: {
			"default": "{palette.blue.500}",
			light: "{palette.blue.50}",
			dark: "{palette.blue.700}",
			text: "{palette.blue.700}"
		}
	},
	interactive: {
		link: {
			"default": "{palette.blue.600}",
			hover: "{palette.blue.700}",
			visited: "{palette.purple.600}",
			active: "{palette.blue.800}"
		},
		focus: {
			ring: "{palette.blue.500}",
			ringOffset: "{palette.white}"
		}
	},
	surface: {
		elevated: "{palette.white}",
		raised: "{palette.gray.50}",
		sunken: "{palette.gray.100}"
	},
	chart: {
		primary: "{palette.blue.500}",
		secondary: "{palette.green.500}",
		tertiary: "{palette.purple.500}",
		quaternary: "{palette.red.400}",
		quinary: "{palette.blue.300}",
		senary: "{palette.green.400}"
	}
};
var _notes$8 = {
	background: {
		primary: "Fundo principal da aplicação (geralmente branco em light mode) - referencia: palette.white",
		secondary: "Fundo secundário para seções alternadas - referencia: palette.gray.50",
		tertiary: "Fundo terciário para elementos aninhados - referencia: palette.gray.100",
		disabled: "Fundo para elementos desabilitados - referencia: palette.gray.100",
		overlay: "Fundo para overlays e modais - referencia: palette.black",
		inverse: "Fundo invertido para contrastes - referencia: palette.black"
	},
	text: {
		primary: "Texto principal com maior contraste - referencia: palette.gray.900",
		secondary: "Texto secundário com contraste médio - referencia: palette.gray.600",
		tertiary: "Texto terciário com contraste baixo - referencia: palette.gray.400",
		disabled: "Texto desabilitado com contraste mínimo - referencia: palette.gray.300",
		inverse: "Texto para fundos escuros - referencia: palette.white",
		onPrimary: "Texto sobre cor primária - referencia: palette.white",
		onSecondary: "Texto sobre cor secundária - referencia: palette.gray.900",
		link: "Cor padrão para links - referencia: palette.blue.600",
		linkHover: "Cor para links em hover - referencia: palette.blue.700"
	},
	button: {
		primary: "Botão principal de ação primária - referencia: palette.blue.*",
		secondary: "Botão secundário de ação alternativa - referencia: palette.gray.*",
		tertiary: "Botão terciário para ações menos importantes - referencia: palette.gray.*",
		danger: "Botão para ações destrutivas - referencia: palette.red.*",
		success: "Botão para ações de sucesso - referencia: palette.green.*"
	},
	border: {
		"default": "Borda padrão para componentes - referencia: palette.gray.200",
		light: "Borda sutil para divisores - referencia: palette.gray.100",
		medium: "Borda média para ênfase - referencia: palette.gray.300",
		dark: "Borda escura para forte contraste - referencia: palette.gray.400",
		focus: "Borda para estados de foco - referencia: palette.blue.500",
		error: "Borda para estados de erro - referencia: palette.red.500",
		success: "Borda para estados de sucesso - referencia: palette.green.500",
		warning: "Borda para estados de aviso - referencia: palette.red.400"
	},
	status: {
		success: "Cores para feedback de sucesso - referencia: palette.green.*",
		error: "Cores para feedback de erro - referencia: palette.red.*",
		warning: "Cores para avisos - referencia: palette.red.*",
		info: "Cores para informações - referencia: palette.blue.*"
	},
	interactive: {
		link: "Cores para links e navegação - referencia: palette.blue.*, palette.purple.*",
		focus: "Cores para indicadores de foco - referencia: palette.blue.*, palette.white"
	},
	surface: {
		elevated: "Superfície elevada (cards, modais) - referencia: palette.white",
		raised: "Superfície levemente elevada - referencia: palette.gray.50",
		sunken: "Superfície rebaixada (inputs focados) - referencia: palette.gray.100"
	},
	chart: {
		primary: "Cor principal para gráficos e visualizações - referencia: palette.blue.500",
		secondary: "Cor secundária para séries de dados - referencia: palette.green.500",
		tertiary: "Cor terciária para terceira série - referencia: palette.purple.500",
		quaternary: "Quarta cor para séries adicionais - referencia: palette.red.400",
		quinary: "Quinta cor para séries adicionais - referencia: palette.blue.300",
		senary: "Sexta cor para séries adicionais - referencia: palette.green.400"
	}
};
var colorRoles = {
	$schema: $schema$8,
	$description: $description$8,
	_comments: _comments$8,
	color: color$2,
	_notes: _notes$8
};

var $schema$7 = "http://json-schema.org/draft-07/schema#";
var $description$7 = "Tokens semânticos de espaçamento - Espaçamentos organizados por contexto e função";
var _comments$7 = {
	spacing: "Espaçamentos organizados por contexto de uso no sistema",
	component: "Espaçamentos internos de componentes",
	layout: "Espaçamentos para estrutura de layout",
	section: "Espaçamentos entre seções e grupos",
	stack: "Espaçamentos para elementos empilhados",
	inline: "Espaçamentos para elementos inline",
	inset: "Espaçamentos internos (padding-like)",
	gap: "Espaçamentos entre elementos relacionados"
};
var spacing = {
	component: {
		tight: "{spacing.1}",
		compact: "{spacing.2}",
		comfortable: "{spacing.3}",
		relaxed: "{spacing.4}",
		loose: "{spacing.6}"
	},
	layout: {
		xs: "{spacing.4}",
		sm: "{spacing.6}",
		md: "{spacing.8}",
		lg: "{spacing.12}",
		xl: "{spacing.16}",
		"2xl": "{spacing.24}"
	},
	section: {
		xs: "{spacing.8}",
		sm: "{spacing.12}",
		md: "{spacing.16}",
		lg: "{spacing.24}",
		xl: "{spacing.32}",
		"2xl": "{spacing.48}"
	},
	stack: {
		xs: "{spacing.1}",
		sm: "{spacing.2}",
		md: "{spacing.4}",
		lg: "{spacing.6}",
		xl: "{spacing.8}"
	},
	inline: {
		xs: "{spacing.1}",
		sm: "{spacing.2}",
		md: "{spacing.3}",
		lg: "{spacing.4}"
	},
	inset: {
		none: "{spacing.0}",
		xs: "{spacing.2}",
		sm: "{spacing.3}",
		md: "{spacing.4}",
		lg: "{spacing.6}",
		xl: "{spacing.8}",
		"2xl": "{spacing.12}"
	},
	gap: {
		none: "{spacing.0}",
		xs: "{spacing.1}",
		sm: "{spacing.2}",
		md: "{spacing.4}",
		lg: "{spacing.6}",
		xl: "{spacing.8}"
	},
	container: {
		padding: {
			xs: "{spacing.4}",
			sm: "{spacing.6}",
			md: "{spacing.8}",
			lg: "{spacing.12}",
			xl: "{spacing.16}"
		},
		margin: {
			xs: "{spacing.4}",
			sm: "{spacing.8}",
			md: "{spacing.12}",
			lg: "{spacing.16}",
			xl: "{spacing.24}"
		}
	}
};
var _notes$7 = {
	component: {
		tight: "Espaçamento mínimo dentro de componentes pequenos (badges, tags) - referencia: spacing.1",
		compact: "Espaçamento compacto para elementos densos (tabelas, listas) - referencia: spacing.2",
		comfortable: "Espaçamento confortável padrão para maioria dos componentes - referencia: spacing.3",
		relaxed: "Espaçamento relaxado para elementos importantes (cards, modais) - referencia: spacing.4",
		loose: "Espaçamento generoso para elementos de destaque - referencia: spacing.6"
	},
	layout: {
		xs: "Espaçamento mínimo entre elementos de layout - referencia: spacing.4",
		sm: "Espaçamento pequeno para layouts compactos - referencia: spacing.6",
		md: "Espaçamento médio padrão para layouts - referencia: spacing.8",
		lg: "Espaçamento grande para layouts espaçosos - referencia: spacing.12",
		xl: "Espaçamento extra grande para layouts amplos - referencia: spacing.16",
		"2xl": "Espaçamento máximo para layouts hero - referencia: spacing.24"
	},
	section: {
		xs: "Espaçamento mínimo entre seções - referencia: spacing.8",
		sm: "Espaçamento pequeno para seções relacionadas - referencia: spacing.12",
		md: "Espaçamento médio padrão entre seções - referencia: spacing.16",
		lg: "Espaçamento grande para separação clara de seções - referencia: spacing.24",
		xl: "Espaçamento extra grande para seções principais - referencia: spacing.32",
		"2xl": "Espaçamento máximo para seções hero - referencia: spacing.48"
	},
	stack: {
		xs: "Espaçamento mínimo entre elementos empilhados - referencia: spacing.1",
		sm: "Espaçamento pequeno para stacks compactos - referencia: spacing.2",
		md: "Espaçamento médio padrão para stacks - referencia: spacing.4",
		lg: "Espaçamento grande para stacks espaçosos - referencia: spacing.6",
		xl: "Espaçamento extra grande para stacks destacados - referencia: spacing.8"
	},
	inline: {
		xs: "Espaçamento mínimo entre elementos inline - referencia: spacing.1",
		sm: "Espaçamento pequeno para elementos inline - referencia: spacing.2",
		md: "Espaçamento médio padrão para elementos inline - referencia: spacing.3",
		lg: "Espaçamento grande para elementos inline destacados - referencia: spacing.4"
	},
	inset: {
		none: "Sem espaçamento interno - referencia: spacing.0",
		xs: "Padding muito pequeno - referencia: spacing.2",
		sm: "Padding pequeno - referencia: spacing.3",
		md: "Padding médio padrão - referencia: spacing.4",
		lg: "Padding grande - referencia: spacing.6",
		xl: "Padding extra grande - referencia: spacing.8",
		"2xl": "Padding máximo - referencia: spacing.12"
	},
	gap: {
		none: "Sem gap entre elementos - referencia: spacing.0",
		xs: "Gap muito pequeno (grids densos) - referencia: spacing.1",
		sm: "Gap pequeno (listas compactas) - referencia: spacing.2",
		md: "Gap médio padrão (grids padrão) - referencia: spacing.4",
		lg: "Gap grande (grids espaçosos) - referencia: spacing.6",
		xl: "Gap extra grande (grids destacados) - referencia: spacing.8"
	},
	container: {
		padding: "Padding interno de containers - referencia: spacing.*",
		margin: "Margem externa de containers - referencia: spacing.*"
	}
};
var spacingContext = {
	$schema: $schema$7,
	$description: $description$7,
	_comments: _comments$7,
	spacing: spacing,
	_notes: _notes$7
};

var $schema$6 = "http://json-schema.org/draft-07/schema#";
var $description$6 = "Tokens semânticos de tipografia - Tipografia organizada por função e hierarquia";
var _comments$6 = {
	typography: "Tipografia organizada por papel semântico e hierarquia",
	heading: "Estilos para títulos e cabeçalhos",
	body: "Estilos para texto corrido e conteúdo",
	caption: "Estilos para legendas e textos secundários",
	label: "Estilos para rótulos e labels",
	code: "Estilos para código e texto monoespaçado",
	button: "Estilos para textos de botões",
	link: "Estilos para links e textos interativos"
};
var typography = {
	heading: {
		h1: {
			fontSize: "{typography.fontSize.5xl}",
			fontWeight: "{typography.fontWeight.700}",
			lineHeight: "{typography.lineHeight.1.25}",
			letterSpacing: "{typography.letterSpacing.-0.025}",
			fontFamily: "{typography.fontFamily.sans}"
		},
		h2: {
			fontSize: "{typography.fontSize.4xl}",
			fontWeight: "{typography.fontWeight.700}",
			lineHeight: "{typography.lineHeight.1.25}",
			letterSpacing: "{typography.letterSpacing.-0.025}",
			fontFamily: "{typography.fontFamily.sans}"
		},
		h3: {
			fontSize: "{typography.fontSize.3xl}",
			fontWeight: "{typography.fontWeight.600}",
			lineHeight: "{typography.lineHeight.1.375}",
			letterSpacing: "{typography.letterSpacing.0}",
			fontFamily: "{typography.fontFamily.sans}"
		},
		h4: {
			fontSize: "{typography.fontSize.2xl}",
			fontWeight: "{typography.fontWeight.600}",
			lineHeight: "{typography.lineHeight.1.375}",
			letterSpacing: "{typography.letterSpacing.0}",
			fontFamily: "{typography.fontFamily.sans}"
		},
		h5: {
			fontSize: "{typography.fontSize.xl}",
			fontWeight: "{typography.fontWeight.600}",
			lineHeight: "{typography.lineHeight.1.5}",
			letterSpacing: "{typography.letterSpacing.0}",
			fontFamily: "{typography.fontFamily.sans}"
		},
		h6: {
			fontSize: "{typography.fontSize.lg}",
			fontWeight: "{typography.fontWeight.600}",
			lineHeight: "{typography.lineHeight.1.5}",
			letterSpacing: "{typography.letterSpacing.0}",
			fontFamily: "{typography.fontFamily.sans}"
		}
	},
	body: {
		large: {
			fontSize: "{typography.fontSize.lg}",
			fontWeight: "{typography.fontWeight.400}",
			lineHeight: "{typography.lineHeight.1.625}",
			letterSpacing: "{typography.letterSpacing.0}",
			fontFamily: "{typography.fontFamily.sans}"
		},
		base: {
			fontSize: "{typography.fontSize.base}",
			fontWeight: "{typography.fontWeight.400}",
			lineHeight: "{typography.lineHeight.1.5}",
			letterSpacing: "{typography.letterSpacing.0}",
			fontFamily: "{typography.fontFamily.sans}"
		},
		small: {
			fontSize: "{typography.fontSize.sm}",
			fontWeight: "{typography.fontWeight.400}",
			lineHeight: "{typography.lineHeight.1.5}",
			letterSpacing: "{typography.letterSpacing.0}",
			fontFamily: "{typography.fontFamily.sans}"
		}
	},
	caption: {
		large: {
			fontSize: "{typography.fontSize.sm}",
			fontWeight: "{typography.fontWeight.400}",
			lineHeight: "{typography.lineHeight.1.5}",
			letterSpacing: "0.025em",
			fontFamily: "{typography.fontFamily.sans}"
		},
		base: {
			fontSize: "{typography.fontSize.xs}",
			fontWeight: "{typography.fontWeight.400}",
			lineHeight: "{typography.lineHeight.1.5}",
			letterSpacing: "0.025em",
			fontFamily: "{typography.fontFamily.sans}"
		},
		small: {
			fontSize: "{typography.fontSize.xs}",
			fontWeight: "300",
			lineHeight: "{typography.lineHeight.1.375}",
			letterSpacing: "0.05em",
			fontFamily: "{typography.fontFamily.sans}"
		}
	},
	label: {
		large: {
			fontSize: "{typography.fontSize.base}",
			fontWeight: "{typography.fontWeight.500}",
			lineHeight: "{typography.lineHeight.1.5}",
			letterSpacing: "0.025em",
			fontFamily: "{typography.fontFamily.sans}"
		},
		base: {
			fontSize: "{typography.fontSize.sm}",
			fontWeight: "{typography.fontWeight.500}",
			lineHeight: "{typography.lineHeight.1.5}",
			letterSpacing: "0.025em",
			fontFamily: "{typography.fontFamily.sans}"
		},
		small: {
			fontSize: "{typography.fontSize.xs}",
			fontWeight: "{typography.fontWeight.500}",
			lineHeight: "{typography.lineHeight.1.375}",
			letterSpacing: "0.05em",
			fontFamily: "{typography.fontFamily.sans}"
		}
	},
	code: {
		inline: {
			fontSize: "{typography.fontSize.sm}",
			fontWeight: "{typography.fontWeight.400}",
			lineHeight: "{typography.lineHeight.1.5}",
			letterSpacing: "{typography.letterSpacing.0}",
			fontFamily: "{typography.fontFamily.mono}"
		},
		block: {
			fontSize: "{typography.fontSize.sm}",
			fontWeight: "{typography.fontWeight.400}",
			lineHeight: "{typography.lineHeight.1.625}",
			letterSpacing: "{typography.letterSpacing.0}",
			fontFamily: "{typography.fontFamily.mono}"
		}
	},
	button: {
		large: {
			fontSize: "{typography.fontSize.base}",
			fontWeight: "{typography.fontWeight.500}",
			lineHeight: "{typography.lineHeight.1.5}",
			letterSpacing: "0.025em",
			fontFamily: "{typography.fontFamily.sans}"
		},
		base: {
			fontSize: "{typography.fontSize.sm}",
			fontWeight: "{typography.fontWeight.500}",
			lineHeight: "{typography.lineHeight.1.5}",
			letterSpacing: "0.025em",
			fontFamily: "{typography.fontFamily.sans}"
		},
		small: {
			fontSize: "{typography.fontSize.xs}",
			fontWeight: "{typography.fontWeight.500}",
			lineHeight: "{typography.lineHeight.1.375}",
			letterSpacing: "0.05em",
			fontFamily: "{typography.fontFamily.sans}"
		}
	},
	link: {
		base: {
			fontSize: "inherit",
			fontWeight: "{typography.fontWeight.400}",
			lineHeight: "inherit",
			letterSpacing: "{typography.letterSpacing.0}",
			fontFamily: "{typography.fontFamily.sans}",
			textDecoration: "underline"
		},
		bold: {
			fontSize: "inherit",
			fontWeight: "{typography.fontWeight.600}",
			lineHeight: "inherit",
			letterSpacing: "{typography.letterSpacing.0}",
			fontFamily: "{typography.fontFamily.sans}",
			textDecoration: "underline"
		}
	}
};
var _notes$6 = {
	heading: {
		h1: "Título principal - maior hierarquia - referencia: typography.fontSize.5xl, fontWeight.700, lineHeight.1.25, letterSpacing.-0.025",
		h2: "Subtítulo principal - segunda hierarquia - referencia: typography.fontSize.4xl, fontWeight.700, lineHeight.1.25, letterSpacing.-0.025",
		h3: "Subtítulo de seção - terceira hierarquia - referencia: typography.fontSize.3xl, fontWeight.600, lineHeight.1.375",
		h4: "Subtítulo de subseção - quarta hierarquia - referencia: typography.fontSize.2xl, fontWeight.600, lineHeight.1.375",
		h5: "Subtítulo menor - quinta hierarquia - referencia: typography.fontSize.xl, fontWeight.600, lineHeight.1.5",
		h6: "Subtítulo mínimo - sexta hierarquia - referencia: typography.fontSize.lg, fontWeight.600, lineHeight.1.5"
	},
	body: {
		large: "Texto corpo grande para conteúdo importante - referencia: typography.fontSize.lg, fontWeight.400, lineHeight.1.625",
		base: "Texto corpo padrão para conteúdo principal - referencia: typography.fontSize.base, fontWeight.400, lineHeight.1.5",
		small: "Texto corpo pequeno para conteúdo compacto - referencia: typography.fontSize.sm, fontWeight.400, lineHeight.1.5"
	},
	caption: {
		large: "Legenda grande para contexto adicional - referencia: typography.fontSize.sm, fontWeight.400, letterSpacing.0.025",
		base: "Legenda padrão para informações secundárias - referencia: typography.fontSize.xs, fontWeight.400, letterSpacing.0.025",
		small: "Legenda pequena para metadados - referencia: typography.fontSize.xs, fontWeight.300, letterSpacing.0.05"
	},
	label: {
		large: "Label grande para campos importantes - referencia: typography.fontSize.base, fontWeight.500, letterSpacing.0.025",
		base: "Label padrão para campos comuns - referencia: typography.fontSize.sm, fontWeight.500, letterSpacing.0.025",
		small: "Label pequeno para campos compactos - referencia: typography.fontSize.xs, fontWeight.500, letterSpacing.0.05"
	},
	code: {
		inline: "Código inline dentro de parágrafos - referencia: typography.fontSize.sm, fontFamily.mono",
		block: "Blocos de código para exemplos - referencia: typography.fontSize.sm, fontFamily.mono, lineHeight.1.625"
	},
	button: {
		large: "Texto de botão grande - referencia: typography.fontSize.base, fontWeight.500, letterSpacing.0.025",
		base: "Texto de botão padrão - referencia: typography.fontSize.sm, fontWeight.500, letterSpacing.0.025",
		small: "Texto de botão pequeno - referencia: typography.fontSize.xs, fontWeight.500, letterSpacing.0.05"
	},
	link: {
		base: "Link padrão com decoração - referencia: typography.fontWeight.400",
		bold: "Link em negrito para destaque - referencia: typography.fontWeight.600"
	}
};
var typographyRoles = {
	$schema: $schema$6,
	$description: $description$6,
	_comments: _comments$6,
	typography: typography,
	_notes: _notes$6
};

var $schema$5 = "http://json-schema.org/draft-07/schema#";
var $description$5 = "Tokens semânticos de borda - Bordas organizadas por função e contexto";
var _comments$5 = {
	border: "Bordas organizadas por papel semântico no sistema",
	"default": "Bordas padrão para componentes normais",
	interactive: "Bordas para elementos interativos e estados",
	emphasis: "Bordas para destaque e ênfase",
	divider: "Bordas para divisores e separadores",
	outline: "Bordas para outlines e contornos",
	radius: "Arredondamentos organizados por contexto"
};
var border = {
	"default": {
		width: "{border.width.base}",
		style: "{border.style.solid}",
		color: "inherit"
	},
	interactive: {
		"default": {
			width: "{border.width.base}",
			style: "{border.style.solid}",
			color: "inherit"
		},
		hover: {
			width: "{border.width.base}",
			style: "{border.style.solid}",
			color: "inherit"
		},
		focus: {
			width: "{border.width.thick}",
			style: "{border.style.solid}",
			color: "inherit"
		},
		active: {
			width: "{border.width.thick}",
			style: "{border.style.solid}",
			color: "inherit"
		}
	},
	emphasis: {
		strong: {
			width: "{border.width.thick}",
			style: "{border.style.solid}",
			color: "inherit"
		},
		subtle: {
			width: "{border.width.thin}",
			style: "{border.style.solid}",
			color: "inherit"
		}
	},
	divider: {
		horizontal: {
			width: "{border.width.thin}",
			style: "{border.style.solid}",
			color: "inherit"
		},
		vertical: {
			width: "{border.width.thin}",
			style: "{border.style.solid}",
			color: "inherit"
		},
		subtle: {
			width: "{border.width.thin}",
			style: "{border.style.dashed}",
			color: "inherit"
		}
	},
	outline: {
		focus: {
			width: "{border.width.base}",
			style: "{border.style.solid}",
			color: "inherit",
			offset: "{spacing.2}"
		},
		error: {
			width: "{border.width.base}",
			style: "{border.style.solid}",
			color: "inherit"
		},
		success: {
			width: "{border.width.base}",
			style: "{border.style.solid}",
			color: "inherit"
		}
	},
	radius: {
		none: "{radius.none}",
		sm: "{radius.sm}",
		base: "{radius.base}",
		md: "{radius.md}",
		lg: "{radius.lg}",
		xl: "{radius.xl}",
		"2xl": "{radius.2xl}",
		full: "{radius.full}"
	},
	component: {
		input: {
			width: "{border.width.base}",
			style: "{border.style.solid}",
			radius: "{radius.base}",
			color: "inherit"
		},
		button: {
			width: "{border.width.none}",
			style: "{border.style.solid}",
			radius: "{radius.md}",
			color: "inherit"
		},
		card: {
			width: "{border.width.thin}",
			style: "{border.style.solid}",
			radius: "{radius.lg}",
			color: "inherit"
		},
		badge: {
			width: "{border.width.none}",
			style: "{border.style.solid}",
			radius: "{radius.full}",
			color: "inherit"
		},
		modal: {
			width: "{border.width.none}",
			style: "{border.style.solid}",
			radius: "{radius.xl}",
			color: "inherit"
		}
	}
};
var _notes$5 = {
	"default": "Borda padrão usada na maioria dos componentes - referencia: border.width.base, border.style.solid",
	interactive: {
		"default": "Borda padrão para elementos interativos - referencia: border.width.base",
		hover: "Borda para estado hover - referencia: border.width.base",
		focus: "Borda mais espessa para estado de foco - referencia: border.width.thick",
		active: "Borda mais espessa para estado ativo - referencia: border.width.thick"
	},
	emphasis: {
		strong: "Borda espessa para forte destaque - referencia: border.width.thick",
		subtle: "Borda fina para destaque sutil - referencia: border.width.thin"
	},
	divider: {
		horizontal: "Divisor horizontal (linhas separadoras) - referencia: border.width.thin, border.style.solid",
		vertical: "Divisor vertical (colunas separadoras) - referencia: border.width.thin, border.style.solid",
		subtle: "Divisor sutil com estilo tracejado - referencia: border.width.thin, border.style.dashed"
	},
	outline: {
		focus: "Outline para elementos com foco (acessibilidade) - referencia: border.width.base, spacing.2",
		error: "Outline para estados de erro - referencia: border.width.base",
		success: "Outline para estados de sucesso - referencia: border.width.base"
	},
	radius: {
		none: "Sem arredondamento - cantos retos - referencia: border.radius.none",
		sm: "Arredondamento pequeno para elementos pequenos - referencia: border.radius.sm",
		base: "Arredondamento padrão para maioria dos componentes - referencia: border.radius.base",
		md: "Arredondamento médio para cards - referencia: border.radius.md",
		lg: "Arredondamento grande para elementos maiores - referencia: border.radius.lg",
		xl: "Arredondamento extra grande para destaques - referencia: border.radius.xl",
		"2xl": "Arredondamento máximo para grande impacto - referencia: border.radius.2xl",
		full: "Arredondamento completo (círculos/pílulas) - referencia: border.radius.full"
	},
	component: {
		input: "Bordas para campos de entrada - referencia: border.width.base, border.radius.base",
		button: "Bordas para botões (geralmente nenhuma) - referencia: border.width.none, border.radius.md",
		card: "Bordas para cards e containers - referencia: border.width.thin, border.radius.lg",
		badge: "Bordas para badges e tags - referencia: border.width.none, border.radius.full",
		modal: "Bordas para modais e dialogs - referencia: border.width.none, border.radius.xl"
	}
};
var borderRoles = {
	$schema: $schema$5,
	$description: $description$5,
	_comments: _comments$5,
	border: border,
	_notes: _notes$5
};

var $schema$4 = "http://json-schema.org/draft-07/schema#";
var $description$4 = "Tokens semânticos de layout - Estrutura organizada por função e contexto";
var _comments$4 = {
	layout: "Estrutura de layout organizada semanticamente",
	container: "Containers organizados por tamanho e propósito",
	grid: "Sistema de grid organizado por contexto",
	spacing: "Espaçamentos de layout organizados semanticamente",
	safeArea: "Áreas seguras organizadas por contexto",
	zIndex: "Camadas Z-index organizadas por função"
};
var layout = {
	container: {
		xs: "{layout.container.xs}",
		sm: "{layout.container.sm}",
		md: "{layout.container.md}",
		lg: "{layout.container.lg}",
		xl: "{layout.container.xl}",
		"2xl": "{layout.container.2xl}",
		full: "100%"
	},
	grid: {
		columns: {
			count: 12,
			gap: {
				xs: "{layout.gutter.xs}",
				sm: "{layout.gutter.sm}",
				md: "{layout.gutter.md}",
				lg: "{layout.gutter.lg}",
				xl: "{layout.gutter.xl}"
			}
		},
		gutter: {
			xs: "{layout.gutter.xs}",
			sm: "{layout.gutter.sm}",
			md: "{layout.gutter.md}",
			lg: "{layout.gutter.lg}",
			xl: "{layout.gutter.xl}"
		}
	},
	spacing: {
		section: {
			xs: "{spacing.8}",
			sm: "{spacing.12}",
			md: "{spacing.16}",
			lg: "{spacing.24}",
			xl: "{spacing.32}"
		},
		container: {
			padding: {
				xs: "{spacing.4}",
				sm: "{spacing.6}",
				md: "{spacing.8}",
				lg: "{spacing.12}",
				xl: "{spacing.16}"
			},
			margin: {
				xs: "{spacing.4}",
				sm: "{spacing.8}",
				md: "{spacing.12}",
				lg: "{spacing.16}",
				xl: "{spacing.24}"
			}
		}
	},
	safeArea: {
		mobile: "{layout.safeArea.xs}",
		tablet: "{layout.safeArea.md}",
		desktop: "{layout.safeArea.lg}",
		wide: "{layout.safeArea.xl}",
		xs: "{layout.safeArea.xs}",
		sm: "{layout.safeArea.sm}",
		md: "{layout.safeArea.md}",
		lg: "{layout.safeArea.lg}",
		xl: "{layout.safeArea.xl}"
	},
	zIndex: {
		base: "{zIndex.0}",
		dropdown: "{zIndex.100}",
		sticky: "{zIndex.200}",
		fixed: "{zIndex.300}",
		overlay: "{zIndex.400}",
		modal: "{zIndex.500}",
		popover: "{zIndex.600}",
		tooltip: "{zIndex.700}",
		toast: "{zIndex.800}",
		max: "{zIndex.9999}"
	},
	breakpoint: {
		xs: "{breakpoints.xs}",
		sm: "{breakpoints.sm}",
		md: "{breakpoints.md}",
		lg: "{breakpoints.lg}",
		xl: "{breakpoints.xl}",
		"2xl": "{breakpoints.2xl}",
		"3xl": "{breakpoints.3xl}"
	}
};
var _notes$4 = {
	container: {
		xs: "Container mínimo para mobile muito pequeno (320px) - referencia: layout.container.xs",
		sm: "Container para mobile landscape (640px) - referencia: layout.container.sm",
		md: "Container para tablets (768px) - referencia: layout.container.md",
		lg: "Container para laptops (1024px) - referencia: layout.container.lg",
		xl: "Container padrão para desktop (1280px) - referencia: layout.container.xl",
		"2xl": "Container amplo para telas grandes (1536px) - referencia: layout.container.2xl",
		full: "Container que ocupa 100% da largura"
	},
	grid: {
		columns: "Configuração do sistema de colunas do grid - referencia: layout.column.count, layout.gutter.*",
		gutter: "Espaçamento entre elementos do grid - referencia: layout.gutter.*"
	},
	spacing: {
		section: "Espaçamento entre seções principais - referencia: spacing.8, spacing.12, spacing.16, spacing.24, spacing.32",
		container: "Espaçamento interno e externo de containers - referencia: spacing.*"
	},
	safeArea: {
		mobile: "Área segura para dispositivos móveis - referencia: layout.safeArea.xs",
		tablet: "Área segura para tablets - referencia: layout.safeArea.md",
		desktop: "Área segura para desktop - referencia: layout.safeArea.lg",
		wide: "Área segura para telas wide - referencia: layout.safeArea.xl"
	},
	zIndex: {
		base: "Nível base - elementos normais - referencia: zIndex.0",
		dropdown: "Nível para dropdowns e menus - referencia: zIndex.100",
		sticky: "Nível para elementos sticky - referencia: zIndex.200",
		fixed: "Nível para elementos fixed - referencia: zIndex.300",
		overlay: "Nível para overlays e backdrops - referencia: zIndex.400",
		modal: "Nível para modais e dialogs - referencia: zIndex.500",
		popover: "Nível para popovers - referencia: zIndex.600",
		tooltip: "Nível para tooltips - referencia: zIndex.700",
		toast: "Nível para toasts e notificações - referencia: zIndex.800",
		max: "Nível máximo absoluto - referencia: zIndex.9999"
	},
	breakpoint: {
		xs: "Breakpoint extra small (0px) - mobile - referencia: breakpoints.breakpoints.xs",
		sm: "Breakpoint small (640px) - mobile landscape - referencia: breakpoints.breakpoints.sm",
		md: "Breakpoint medium (768px) - tablet - referencia: breakpoints.breakpoints.md",
		lg: "Breakpoint large (1024px) - laptop - referencia: breakpoints.breakpoints.lg",
		xl: "Breakpoint extra large (1280px) - desktop - referencia: breakpoints.breakpoints.xl",
		"2xl": "Breakpoint 2x large (1536px) - desktop grande - referencia: breakpoints.breakpoints.2xl",
		"3xl": "Breakpoint 3x large (1920px) - wide screen - referencia: breakpoints.breakpoints.3xl"
	}
};
var layoutStructure = {
	$schema: $schema$4,
	$description: $description$4,
	_comments: _comments$4,
	layout: layout,
	_notes: _notes$4
};

var $schema$3 = "http://json-schema.org/draft-07/schema#";
var $description$3 = "Tokens de elevação semântica - Sombras organizadas por função e contexto";
var _comments$3 = {
	elevation: "Sombras organizadas por função semântica no design",
	surface: "Sombras para níveis de elevação da superfície",
	component: "Sombras para tipos específicos de componentes",
	interactive: "Sombras para elementos interativos e estados",
	overlay: "Sombras para sobreposições e elementos flutuantes"
};
var elevation = {
	surface: {
		none: "none",
		xs: "{shadows.xs}",
		sm: "{shadows.sm}",
		base: "{shadows.base}",
		md: "{shadows.md}",
		lg: "{shadows.lg}",
		xl: "{shadows.xl}",
		"2xl": "{shadows.2xl}"
	},
	component: {
		button: {
			"default": "{shadows.sm}",
			hover: "{shadows.base}",
			active: "{shadows.inner}",
			disabled: "none"
		},
		input: {
			"default": "none",
			focus: "{elevation.interactive.focus}",
			error: "0 0 0 3px rgba(239, 68, 68, 0.1)"
		},
		card: {
			"default": "{shadows.base}",
			hover: "{shadows.md}",
			elevated: "{shadows.lg}"
		},
		dropdown: {
			"default": "{shadows.md}",
			menu: "{shadows.md}"
		},
		modal: {
			overlay: "{shadows.xl}",
			dialog: "{shadows.2xl}"
		},
		tooltip: {
			"default": "{shadows.base}"
		}
	},
	interactive: {
		hover: "{shadows.base}",
		focus: "0 0 0 3px rgba(14, 165, 233, 0.1)",
		active: "{shadows.inner}",
		drag: "{shadows.md}"
	},
	overlay: {
		backdrop: "{shadows.xl}",
		sheet: "{shadows.lg}",
		popover: "{shadows.md}"
	}
};
var _notes$3 = {
	surface: {
		none: "Sem elevação - superfície plana",
		xs: "Elevação mínima para separação sutil - referência: {shadows.xs}",
		sm: "Elevação pequena para botões e inputs - referência: {shadows.sm}",
		base: "Elevação padrão para cards - referência: {shadows.base}",
		md: "Elevação média para dropdowns e popovers - referência: {shadows.md}",
		lg: "Elevação grande para modais e sidebars - referência: {shadows.lg}",
		xl: "Elevação extra grande para elementos flutuantes - referência: {shadows.xl}",
		"2xl": "Elevação máxima para seções de herói - referência: {shadows.2xl}"
	},
	component: {
		button: {
			"default": "Sombra padrão para botões - referência: {shadows.sm}",
			hover: "Sombra para estado hover de botões - referência: {shadows.base}",
			active: "Sombra interna para botões pressionados - referência: {shadows.inner}",
			disabled: "Sem sombra para botões desabilitados"
		},
		input: {
			"default": "Sem sombra para inputs padrão",
			focus: "Sombra para foco em inputs - referência: {elevation.interactive.focus}",
			error: "Sombra vermelha para inputs com erro"
		},
		card: {
			"default": "Sombra padrão para cards - referência: {shadows.base}",
			hover: "Sombra para cards em hover - referência: {shadows.md}",
			elevated: "Sombra para cards destacados - referência: {shadows.lg}"
		},
		dropdown: {
			"default": "Sombra para dropdowns - referência: {shadows.md}",
			menu: "Sombra para menus dropdown - referência: {shadows.md}"
		},
		modal: {
			overlay: "Sombra para overlay de modal - referência: {shadows.xl}",
			dialog: "Sombra para diálogo de modal - referência: {shadows.2xl}"
		},
		tooltip: {
			"default": "Sombra para tooltips - referência: {shadows.base}"
		}
	},
	interactive: {
		hover: "Sombra para estados hover - referência: {shadows.base}",
		focus: "Sombra para anéis de foco em elementos interativos",
		active: "Sombra interna para elementos ativos - referência: {shadows.inner}",
		drag: "Sombra para elementos sendo arrastados - referência: {shadows.md}"
	},
	overlay: {
		backdrop: "Sombra para backdrops - referência: {shadows.xl}",
		sheet: "Sombra para bottom sheets - referência: {shadows.lg}",
		popover: "Sombra para popovers - referência: {shadows.md}"
	}
};
var elevationRoles = {
	$schema: $schema$3,
	$description: $description$3,
	_comments: _comments$3,
	elevation: elevation,
	_notes: _notes$3
};

var $schema$2 = "http://json-schema.org/draft-07/schema#";
var $description$2 = "Semantic motion tokens - Animations organized by function and context";
var _comments$2 = {
	motion: "Animations organized by semantic role in the design system",
	transition: "Transitions for state changes",
	interaction: "Animations for user interactions",
	feedback: "Animations for user feedback",
	navigation: "Animations for navigation and routing"
};
var motion = {
	transition: {
		"default": {
			duration: "{motion.duration.normal}",
			easing: "{motion.easing.easeInOut}",
			delay: "{motion.delay.none}"
		},
		fast: {
			duration: "{motion.duration.fast}",
			easing: "{motion.easing.easeInOut}",
			delay: "{motion.delay.none}"
		},
		slow: {
			duration: "{motion.duration.slow}",
			easing: "{motion.easing.easeInOut}",
			delay: "{motion.delay.none}"
		},
		instant: {
			duration: "{motion.duration.instant}",
			easing: "{motion.easing.linear}",
			delay: "{motion.delay.none}"
		}
	},
	interaction: {
		hover: {
			duration: "{motion.duration.fast}",
			easing: "{motion.easing.easeOut}",
			delay: "{motion.delay.none}"
		},
		focus: {
			duration: "{motion.duration.normal}",
			easing: "{motion.easing.easeOut}",
			delay: "{motion.delay.none}"
		},
		active: {
			duration: "{motion.duration.fast}",
			easing: "{motion.easing.easeIn}",
			delay: "{motion.delay.none}"
		},
		tap: {
			duration: "{motion.duration.fast}",
			easing: "{motion.easing.easeIn}",
			delay: "{motion.delay.none}"
		}
	},
	feedback: {
		success: {
			duration: "{motion.duration.slow}",
			easing: "{motion.easing.spring}",
			delay: "{motion.delay.none}"
		},
		error: {
			duration: "{motion.duration.normal}",
			easing: "{motion.easing.easeIn}",
			delay: "{motion.delay.none}"
		},
		loading: {
			duration: "1000ms",
			easing: "{motion.easing.linear}",
			delay: "{motion.delay.none}"
		},
		notification: {
			duration: "{motion.duration.slow}",
			easing: "{motion.easing.easeOut}",
			delay: "{motion.delay.short}"
		}
	},
	navigation: {
		page: {
			duration: "{motion.duration.slow}",
			easing: "{motion.easing.easeInOut}",
			delay: "{motion.delay.none}"
		},
		drawer: {
			duration: "{motion.duration.slow}",
			easing: "{motion.easing.easeOut}",
			delay: "{motion.delay.none}"
		},
		modal: {
			duration: "{motion.duration.normal}",
			easing: "{motion.easing.easeInOut}",
			delay: "{motion.delay.none}"
		},
		collapse: {
			duration: "{motion.duration.normal}",
			easing: "{motion.easing.easeInOut}",
			delay: "{motion.delay.none}"
		}
	},
	component: {
		fade: {
			duration: "{motion.duration.normal}",
			easing: "{motion.easing.easeInOut}",
			delay: "{motion.delay.none}"
		},
		slide: {
			duration: "{motion.duration.slow}",
			easing: "{motion.easing.easeInOut}",
			delay: "{motion.delay.none}"
		},
		scale: {
			duration: "{motion.duration.normal}",
			easing: "{motion.easing.spring}",
			delay: "{motion.delay.none}"
		},
		rotate: {
			duration: "{motion.duration.slower}",
			easing: "{motion.easing.linear}",
			delay: "{motion.delay.none}"
		}
	}
};
var _notes$2 = {
	transition: {
		"default": "Standard transition for most state changes - reference: motion.duration.normal, motion.easing.easeInOut",
		fast: "Fast transition for quick feedback - reference: motion.duration.fast, motion.easing.easeInOut",
		slow: "Slow transition for smooth animations - reference: motion.duration.slow, motion.easing.easeInOut",
		instant: "Instant transition without animation - reference: motion.duration.instant, motion.easing.linear"
	},
	interaction: {
		hover: "Hover state animation - reference: motion.duration.fast, motion.easing.easeOut",
		focus: "Focus state animation - reference: motion.duration.normal, motion.easing.easeOut",
		active: "Active/pressed state animation - reference: motion.duration.fast, motion.easing.easeIn",
		tap: "Tap/click animation - reference: motion.duration.fast, motion.easing.easeIn"
	},
	feedback: {
		success: "Success feedback animation - reference: motion.duration.slow, motion.easing.spring",
		error: "Error feedback animation - reference: motion.duration.normal, motion.easing.easeIn",
		loading: "Loading spinner animation - reference: custom duration, motion.easing.linear",
		notification: "Notification appearance - reference: motion.duration.slow, motion.easing.easeOut, motion.delay.short"
	},
	navigation: {
		page: "Page transition animation - reference: motion.duration.slow, motion.easing.easeInOut",
		drawer: "Drawer/sidebar animation - reference: motion.duration.slow, motion.easing.easeOut",
		modal: "Modal open/close animation - reference: motion.duration.normal, motion.easing.easeInOut",
		collapse: "Collapse/expand animation - reference: motion.duration.normal, motion.easing.easeInOut"
	},
	component: {
		fade: "Fade in/out animation - reference: motion.duration.normal, motion.easing.easeInOut",
		slide: "Slide animation - reference: motion.duration.slow, motion.easing.easeInOut",
		scale: "Scale animation - reference: motion.duration.normal, motion.easing.spring",
		rotate: "Rotate animation - reference: motion.duration.slower, motion.easing.linear"
	}
};
var motionRoles = {
	$schema: $schema$2,
	$description: $description$2,
	_comments: _comments$2,
	motion: motion,
	_notes: _notes$2
};

var $schema$1 = "http://json-schema.org/draft-07/schema#";
var $description$1 = "Light theme - Tema claro (valores padrão dos semânticos)";
var _comments$1 = {
	color: "Tema light usa os mesmos valores dos tokens semânticos (padrão)"
};
var color$1 = {
	background: {
		primary: "{palette.white}",
		secondary: "{palette.gray.50}",
		tertiary: "{palette.gray.100}",
		disabled: "{palette.gray.100}",
		overlay: "rgba(0, 0, 0, 0.5)",
		inverse: "{palette.black}"
	},
	text: {
		primary: "{palette.gray.900}",
		secondary: "{palette.gray.600}",
		tertiary: "{palette.gray.400}",
		disabled: "{palette.gray.300}",
		inverse: "{palette.white}",
		onPrimary: "{palette.white}",
		onSecondary: "{palette.gray.900}",
		link: "{palette.blue.600}",
		linkHover: "{palette.blue.700}"
	},
	button: {
		primary: {
			"default": "{palette.blue.500}",
			hover: "{palette.blue.600}",
			active: "{palette.blue.700}",
			text: "{palette.white}"
		},
		secondary: {
			"default": "{palette.gray.200}",
			hover: "{palette.gray.300}",
			active: "{palette.gray.400}",
			text: "{palette.gray.900}"
		},
		tertiary: {
			"default": "{palette.transparent}",
			hover: "{palette.gray.100}",
			active: "{palette.gray.200}",
			text: "{palette.gray.900}"
		},
		danger: {
			"default": "{palette.red.500}",
			hover: "{palette.red.600}",
			active: "{palette.red.700}",
			text: "{palette.white}"
		},
		success: {
			"default": "{palette.green.500}",
			hover: "{palette.green.600}",
			active: "{palette.green.700}",
			text: "{palette.white}"
		}
	},
	border: {
		"default": "{palette.gray.200}",
		light: "{palette.gray.100}",
		medium: "{palette.gray.300}",
		dark: "{palette.gray.400}",
		focus: "{palette.blue.500}",
		error: "{palette.red.500}",
		success: "{palette.green.500}",
		warning: "{palette.red.400}"
	},
	status: {
		success: {
			"default": "{palette.green.500}",
			light: "{palette.green.50}",
			dark: "{palette.green.700}",
			text: "{palette.green.700}"
		},
		error: {
			"default": "{palette.red.500}",
			light: "{palette.red.50}",
			dark: "{palette.red.700}",
			text: "{palette.red.700}"
		},
		warning: {
			"default": "{palette.red.400}",
			light: "{palette.red.50}",
			dark: "{palette.red.600}",
			text: "{palette.red.800}"
		},
		info: {
			"default": "{palette.blue.500}",
			light: "{palette.blue.50}",
			dark: "{palette.blue.700}",
			text: "{palette.blue.700}"
		}
	},
	interactive: {
		link: {
			"default": "{palette.blue.600}",
			hover: "{palette.blue.700}",
			visited: "{palette.purple.600}",
			active: "{palette.blue.800}"
		},
		focus: {
			ring: "{palette.blue.500}",
			ringOffset: "{palette.white}"
		}
	},
	surface: {
		elevated: "{palette.white}",
		raised: "{palette.gray.50}",
		sunken: "{palette.gray.100}"
	}
};
var _notes$1 = {
	background: {
		primary: "Fundo principal - referencia: palette.white",
		secondary: "Fundo secundário - referencia: palette.gray.50",
		tertiary: "Fundo terciário - referencia: palette.gray.100",
		disabled: "Fundo desabilitado - referencia: palette.gray.100",
		overlay: "Overlay com opacidade - referencia: palette.black com opacity",
		inverse: "Fundo invertido - referencia: palette.black"
	},
	text: {
		primary: "Texto principal - referencia: palette.gray.900",
		secondary: "Texto secundário - referencia: palette.gray.600",
		tertiary: "Texto terciário - referencia: palette.gray.400",
		disabled: "Texto desabilitado - referencia: palette.gray.300",
		inverse: "Texto invertido - referencia: palette.white",
		onPrimary: "Texto sobre primária - referencia: palette.white",
		onSecondary: "Texto sobre secundária - referencia: palette.gray.900",
		link: "Link padrão - referencia: palette.blue.600",
		linkHover: "Link hover - referencia: palette.blue.700"
	},
	button: {
		primary: "Botão primário - referencia: palette.blue.*",
		secondary: "Botão secundário - referencia: palette.gray.*",
		tertiary: "Botão terciário - referencia: palette.gray.*",
		danger: "Botão perigo - referencia: palette.red.*",
		success: "Botão sucesso - referencia: palette.green.*"
	},
	border: {
		"default": "Borda padrão - referencia: palette.gray.200",
		light: "Borda clara - referencia: palette.gray.100",
		medium: "Borda média - referencia: palette.gray.300",
		dark: "Borda escura - referencia: palette.gray.400",
		focus: "Borda foco - referencia: palette.blue.500",
		error: "Borda erro - referencia: palette.red.500",
		success: "Borda sucesso - referencia: palette.green.500",
		warning: "Borda aviso - referencia: palette.red.400"
	},
	status: {
		success: "Status sucesso - referencia: palette.green.*",
		error: "Status erro - referencia: palette.red.*",
		warning: "Status aviso - referencia: palette.red.*",
		info: "Status informação - referencia: palette.blue.*"
	},
	interactive: {
		link: "Links interativos - referencia: palette.blue.*, palette.purple.*",
		focus: "Foco - referencia: palette.blue.*, palette.white"
	},
	surface: {
		elevated: "Superfície elevada - referencia: palette.white",
		raised: "Superfície levantada - referencia: palette.gray.50",
		sunken: "Superfície rebaixada - referencia: palette.gray.100"
	}
};
var themeLight = {
	$schema: $schema$1,
	$description: $description$1,
	_comments: _comments$1,
	color: color$1,
	_notes: _notes$1
};

var $schema = "http://json-schema.org/draft-07/schema#";
var $description = "Dark theme - Override de tokens semânticos com valores escuros";
var _comments = {
	color: "Tema dark com valores específicos que sobrescrevem os semânticos"
};
var color = {
	background: {
		primary: "{palette.gray.900}",
		secondary: "{palette.gray.800}",
		tertiary: "{palette.gray.700}",
		disabled: "{palette.gray.700}",
		overlay: "rgba(0, 0, 0, 0.8)",
		inverse: "{palette.white}"
	},
	text: {
		primary: "{palette.gray.50}",
		secondary: "{palette.gray.300}",
		tertiary: "{palette.gray.400}",
		disabled: "{palette.gray.500}",
		inverse: "{palette.gray.900}",
		onPrimary: "{palette.white}",
		onSecondary: "{palette.gray.900}",
		link: "{palette.blue.400}",
		linkHover: "{palette.blue.300}"
	},
	button: {
		primary: {
			"default": "{palette.blue.500}",
			hover: "{palette.blue.400}",
			active: "{palette.blue.300}",
			text: "{palette.white}"
		},
		secondary: {
			"default": "{palette.gray.700}",
			hover: "{palette.gray.600}",
			active: "{palette.gray.500}",
			text: "{palette.gray.50}"
		},
		tertiary: {
			"default": "{palette.transparent}",
			hover: "{palette.gray.700}",
			active: "{palette.gray.600}",
			text: "{palette.gray.50}"
		},
		danger: {
			"default": "{palette.red.500}",
			hover: "{palette.red.400}",
			active: "{palette.red.300}",
			text: "{palette.white}"
		},
		success: {
			"default": "{palette.green.500}",
			hover: "{palette.green.400}",
			active: "{palette.green.300}",
			text: "{palette.white}"
		}
	},
	border: {
		"default": "{palette.gray.700}",
		light: "{palette.gray.600}",
		medium: "{palette.gray.500}",
		dark: "{palette.gray.400}",
		focus: "{palette.blue.400}",
		error: "{palette.red.400}",
		success: "{palette.green.400}",
		warning: "{palette.red.400}"
	},
	status: {
		success: {
			"default": "{palette.green.500}",
			light: "{palette.green.900}",
			dark: "{palette.green.300}",
			text: "{palette.green.300}"
		},
		error: {
			"default": "{palette.red.500}",
			light: "{palette.red.900}",
			dark: "{palette.red.300}",
			text: "{palette.red.300}"
		},
		warning: {
			"default": "{palette.red.400}",
			light: "{palette.red.900}",
			dark: "{palette.red.300}",
			text: "{palette.red.200}"
		},
		info: {
			"default": "{palette.blue.400}",
			light: "{palette.blue.900}",
			dark: "{palette.blue.300}",
			text: "{palette.blue.300}"
		}
	},
	interactive: {
		link: {
			"default": "{palette.blue.400}",
			hover: "{palette.blue.300}",
			visited: "{palette.purple.400}",
			active: "{palette.blue.200}"
		},
		focus: {
			ring: "{palette.blue.400}",
			ringOffset: "{palette.gray.900}"
		}
	},
	surface: {
		elevated: "{palette.gray.800}",
		raised: "{palette.gray.700}",
		sunken: "{palette.gray.600}"
	}
};
var _notes = {
	background: {
		primary: "Fundo principal escuro - referencia: palette.gray.900",
		secondary: "Fundo secundário - referencia: palette.gray.800",
		tertiary: "Fundo terciário - referencia: palette.gray.700",
		disabled: "Fundo desabilitado - referencia: palette.gray.700",
		overlay: "Overlay com opacidade alta - referencia: palette.black com opacity 0.8",
		inverse: "Fundo invertido claro - referencia: palette.white"
	},
	text: {
		primary: "Texto principal claro - referencia: palette.gray.50",
		secondary: "Texto secundário - referencia: palette.gray.300",
		tertiary: "Texto terciário - referencia: palette.gray.400",
		disabled: "Texto desabilitado - referencia: palette.gray.500",
		inverse: "Texto invertido escuro - referencia: palette.gray.900",
		onPrimary: "Texto sobre primária - referencia: palette.white",
		onSecondary: "Texto sobre secundária - referencia: palette.gray.900",
		link: "Link padrão claro - referencia: palette.blue.400",
		linkHover: "Link hover - referencia: palette.blue.300"
	},
	button: {
		primary: "Botão primário - referencia: palette.blue.500 com hover/active mais claros",
		secondary: "Botão secundário escuro - referencia: palette.gray.700/600/500",
		tertiary: "Botão terciário transparente - referencia: palette.gray.*",
		danger: "Botão perigo - referencia: palette.red.500/400/300",
		success: "Botão sucesso - referencia: palette.green.500/400/300"
	},
	border: {
		"default": "Borda padrão escura - referencia: palette.gray.700",
		light: "Borda clara - referencia: palette.gray.600",
		medium: "Borda média - referencia: palette.gray.500",
		dark: "Borda mais escura - referencia: palette.gray.400",
		focus: "Borda foco claro - referencia: palette.blue.400",
		error: "Borda erro - referencia: palette.red.400",
		success: "Borda sucesso - referencia: palette.green.400",
		warning: "Borda aviso - referencia: palette.red.400"
	},
	status: {
		success: "Status sucesso - referencia: palette.green.500/900/300",
		error: "Status erro - referencia: palette.red.500/900/300",
		warning: "Status aviso - referencia: palette.red.400/900/300",
		info: "Status informação - referencia: palette.blue.400/900/300"
	},
	interactive: {
		link: "Links interativos claros - referencia: palette.blue.400/300/200, palette.purple.400",
		focus: "Foco claro - referencia: palette.blue.400, palette.gray.900"
	},
	surface: {
		elevated: "Superfície elevada escura - referencia: palette.gray.800",
		raised: "Superfície levantada - referencia: palette.gray.700",
		sunken: "Superfície rebaixada - referencia: palette.gray.600"
	}
};
var themeDark = {
	$schema: $schema,
	$description: $description,
	_comments: _comments,
	color: color,
	_notes: _notes
};

declare const tokens: {
    primitives: {
        color: {
            white: string;
            black: string;
            transparent: string;
            gray: {
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
            yellow: {
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
        };
        spacing: {
            "0": string;
            "1": string;
            "2": string;
            "3": string;
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
            px: string;
            "0.5": string;
            "1.5": string;
            "2.5": string;
            "3.5": string;
        };
        typography: {
            fontFamily: {
                sans: string;
                serif: string;
                mono: string;
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
            lineHeight: {
                "1": string;
                "1.25": string;
                "1.375": string;
                "1.5": string;
                "1.625": string;
                "2": string;
            };
            letterSpacing: {
                "-0.05": string;
                "-0.025": string;
                "0": string;
                "0.025": string;
                "0.05": string;
                "0.1": string;
            };
        };
        shadows: {
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
        motion: {
            duration: {
                instant: string;
                fast: string;
                normal: string;
                slow: string;
                slower: string;
                slowest: string;
            };
            easing: {
                linear: string;
                easeIn: string;
                easeOut: string;
                easeInOut: string;
                easeInQuad: string;
                easeOutQuad: string;
                easeInOutQuad: string;
                easeInCubic: string;
                easeOutCubic: string;
                easeInOutCubic: string;
                spring: string;
            };
            delay: {
                none: string;
                short: string;
                medium: string;
                long: string;
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
            "3xl": string;
            full: string;
        };
        breakpoints: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            "2xl": string;
            "3xl": string;
        };
        zIndex: {
            base: number;
            content: number;
            overlay: number;
            dropdown: number;
            modal: number;
            tooltip: number;
            notification: number;
            max: number;
        };
        border: {
            width: {
                none: string;
                thin: string;
                base: string;
                thick: string;
            };
            style: {
                solid: string;
                dashed: string;
                dotted: string;
                double: string;
            };
        };
        opacity: {
            "0": number;
            "10": number;
            "20": number;
            "30": number;
            "40": number;
            "50": number;
            "60": number;
            "70": number;
            "80": number;
            "90": number;
            "100": number;
        };
        layout: {
            container: {
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
                "2xl": string;
            };
            gutter: {
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            column: {
                count: number;
                gap: string;
            };
            safeArea: {
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
        };
        iconSize: {
            "2xs": string;
            xs: string;
            sm: string;
            base: string;
            md: string;
            lg: string;
            xl: string;
            "2xl": string;
            "3xl": string;
            "4xl": string;
            "5xl": string;
            full: string;
        };
        gradients: {
            text: {
                primary: string;
                secondary: string;
                accent: string;
            };
            background: {
                hero: string;
                subtle: string;
            };
        };
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
        light: {
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
            };
        };
        dark: {
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
            };
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
        readonly colors: {
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
            };
        };
        readonly typography: {
            fontFamily: {
                sans: string;
                serif: string;
                mono: string;
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
            lineHeight: {
                "1": string;
                "1.25": string;
                "1.375": string;
                "1.5": string;
                "1.625": string;
                "2": string;
            };
            letterSpacing: {
                "-0.05": string;
                "-0.025": string;
                "0": string;
                "0.025": string;
                "0.05": string;
                "0.1": string;
            };
        };
        readonly spacing: {
            "0": string;
            "1": string;
            "2": string;
            "3": string;
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
            px: string;
            "0.5": string;
            "1.5": string;
            "2.5": string;
            "3.5": string;
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
    readonly dark: {
        readonly colors: {
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
            };
        };
        readonly typography: {
            fontFamily: {
                sans: string;
                serif: string;
                mono: string;
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
            lineHeight: {
                "1": string;
                "1.25": string;
                "1.375": string;
                "1.5": string;
                "1.625": string;
                "2": string;
            };
            letterSpacing: {
                "-0.05": string;
                "-0.025": string;
                "0": string;
                "0.025": string;
                "0.05": string;
                "0.1": string;
            };
        };
        readonly spacing: {
            "0": string;
            "1": string;
            "2": string;
            "3": string;
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
            px: string;
            "0.5": string;
            "1.5": string;
            "2.5": string;
            "3.5": string;
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
 * @version 2.6.0
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

/**
 * CSS Variables para temas dinâmicos
 *
 * @description
 * Importa o arquivo CSS com as variáveis de design para uso direto
 *
 * @example
 * ```typescript
 * import '@rainersoft/design-tokens/css-vars.css';
 * ```
 */
declare const cssVarsPath = "./src/css-vars.css";

export { borderTokens as borderPrimitive, borderRoles as borderSemantic, breakpoints_default as breakpointsPrimitive, colorPalette as colorPrimitive, colorRoles as colorSemantic, cssVarsPath, themeDark as darkTheme, elevationRoles as elevationSemantic, gradientTokens as gradientPrimitive, gradientTokens as gradientsPrimitive, iconScale as iconSizesPrimitive, layoutUnits as layoutPrimitive, layoutStructure as layoutSemantic, themeLight as lightTheme, motionTokens as motionPrimitive, motionRoles as motionSemantic, opacityScale as opacityPrimitive, radiusScale as radiusPrimitive, elevationTokens as shadowsPrimitive, spacingScale as spacingPrimitive, spacingContext as spacingSemantic, themes, tokens, typographyBase as typographyPrimitive, typographyRoles as typographySemantic, zIndexLayers as zIndexPrimitive };
