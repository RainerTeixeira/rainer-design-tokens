var $schema$d = "http://json-schema.org/draft-07/schema#";
var $description$d = "Paleta de cores primitiva — conjunto base de cores do design system que não sofre alteração entre temas (fixa e estável)";
var _meta = {
	version: "1.0.0",
	source: "Tailwind-like scale adapted to product design language",
	lastUpdated: "2026-01-17"
};
var _comments$9 = {
	palette: "Cores fundamentais do sistema de design, organizadas em escalas tonais contínuas de 50 (mais claro) a 900 (mais escuro)",
	white: "Branco puro, utilizado para fundos neutros, estados vazios e alto contraste em temas claros",
	black: "Preto puro, utilizado para texto de altíssimo contraste, overlays e elementos estruturais em temas escuros",
	transparent: "Cor totalmente transparente, usada para superfícies e estados que não devem alterar o fundo",
	gray: "Escala de cinzas neutros, base para textos, ícones, bordas e superfícies estruturais",
	blue: "Azul para elementos interativos, estados informativos e ações principais (links, CTAs primários)",
	cyan: "Ciano tecnológico, usado para destaques futuristas, elementos de status e identidade digital",
	purple: "Roxo para elementos premium, planos avançados, branding sofisticado e destaques especiais",
	pink: "Rosa vibrante para elementos chamativos, promocionais, marketing e comunicações de alto impacto",
	red: "Vermelho para erros, alertas críticos, estados destrutivos e mensagens de bloqueio",
	orange: "Laranja para avisos, atenção moderada, estados de risco e indicadores intermediários",
	yellow: "Amarelo para destaques leves, alertas informativos, tooltips e mensagens de aviso suave",
	green: "Verde para sucesso padrão, confirmações, estados concluídos e feedback positivo geral",
	emerald: "Verde esmeralda para elementos naturais, sustentáveis, orgânicos e variações de sucesso alternativo"
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
	palette: "Todas as escalas seguem o padrão 50–900, onde 50 representa o tom mais claro (mais próximo do branco) e 900 o tom mais escuro (mais próximo do preto). Utilize 500 como ponto de partida para cor de marca ou cor base e ajuste para mais claro/escuro conforme o contexto.",
	gray: "Cinza neutro balanceado, ideal para textos (400–800), ícones, bordas (200–400) e superfícies de fundo (50–200) sem interferir na hierarquia de cor.",
	blue: "Azul céu voltado para elementos interativos: links, botões primários, ícones de ação e estados informativos. Tons 400–600 para estados padrão, 700–800 para hover/ativo e 100–200 para fundos sutis.",
	cyan: "Ciano vibrante com caráter tecnológico, indicado para realces futuristas, indicadores de status especial, elementos de identidade digital e temas cyberpunk/neon.",
	purple: "Roxo vibrante usado para planos premium, paywalls, destaques de upgrade, badges de nível e elementos que comunicam exclusividade.",
	pink: "Rosa intenso aplicado em campanhas promocionais, comunicações de marketing, componentes festivos e elementos que exigem alto nível de atenção visual.",
	red: "Vermelho reservado para estados de erro, alertas críticos, confirmações destrutivas e mensagens de bloqueio. Utilize tons claros (50–200) para fundos de alerta e tons médios/escuros (400–700) para textos e ícones.",
	orange: "Laranja para avisos importantes, estados de risco moderado, mensagens de atenção e passos intermediários em fluxos de alerta. Complementa o vermelho sem competir com erros críticos.",
	yellow: "Amarelo para destaque leve, mensagens informativas, tooltips, rótulos de atenção e estados de aviso não críticos. Ideal em combinação com ícones escuros para garantir legibilidade.",
	green: "Verde para feedback positivo geral: sucesso de ações, estados concluídos, confirmações e indicadores de saúde do sistema. Tons 400–600 para estados principais, 50–200 para fundos suaves de sucesso.",
	emerald: "Verde esmeralda associado a temas naturais, ecossustentáveis, orgânicos e variações de sucesso com caráter mais sofisticado, podendo ser usado em diferenciação de planos ou métricas de impacto positivo."
};
var colorPalette = {
	$schema: $schema$d,
	$description: $description$d,
	_meta: _meta,
	_comments: _comments$9,
	palette: palette,
	_notes: _notes$9
};

var $schema$c = "http://json-schema.org/draft-07/schema#";
var $description$c = "Tokens de espaçamento - Escala consistente baseada em grid de 8pt";
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
	$schema: $schema$c,
	$description: $description$c,
	_comments: _comments$8,
	spacing: spacing,
	_notes: _notes$8
};

var $schema$b = "http://json-schema.org/draft-07/schema#";
var $description$b = "Primitivas de tipografia - Font families, tamanhos, pesos e espaçamento";
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
	$schema: $schema$b,
	$description: $description$b,
	_comments: _comments$7,
	typography: typography$1,
	_notes: _notes$7
};

var $schema$a = "http://json-schema.org/draft-07/schema#";
var $description$a = "Escala de sombras - Valores de elevação e profundidade visual consistentes para superfícies e estados interativos";
var $generated$3 = "2026-01-17T14:01:57.500Z";
var $source$3 = "primitives/spacing-scale.json";
var _comments$6 = {
	shadows: "Escala completa de sombras em diferentes níveis de intensidade, alinhada à hierarquia de elevação do sistema"
};
var shadows = {
	xs: "0 1px 2px 0 rgba(15, 23, 42, 0.05)",
	sm: "0 1px 3px 0 rgba(15, 23, 42, 0.08), 0 1px 2px -1px rgba(15, 23, 42, 0.06)",
	base: "0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.06)",
	md: "0 10px 15px -3px rgba(15, 23, 42, 0.10), 0 4px 6px -4px rgba(15, 23, 42, 0.08)",
	lg: "0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.10)",
	xl: "0 25px 50px -12px rgba(15, 23, 42, 0.25)",
	"2xl": "0 50px 100px -20px rgba(15, 23, 42, 0.30)",
	inner: "inset 0 2px 4px 0 rgba(15, 23, 42, 0.06)",
	glow: {
		cyan: "0 0 20px rgba(6, 182, 212, 0.55), 0 0 40px rgba(6, 182, 212, 0.35)",
		pink: "0 0 20px rgba(236, 72, 153, 0.55), 0 0 40px rgba(236, 72, 153, 0.35)",
		purple: "0 0 20px rgba(139, 92, 246, 0.55), 0 0 40px rgba(139, 92, 246, 0.35)",
		green: "0 0 20px rgba(34, 197, 94, 0.55), 0 0 40px rgba(34, 197, 94, 0.35)"
	}
};
var _notes$6 = {
	xs: "Sombra sutil para separação mínima de superfícies muito leves (badges, tags, chips) - referência: elevação mínima",
	sm: "Sombra leve para botões, inputs e elementos interativos em superfícies claras - ideal para hover suave",
	base: "Sombra padrão para cards, dropdowns básicos e painéis flutuantes de baixa ênfase",
	md: "Sombra média para modais pequenos, popovers e elementos de destaque moderado",
	lg: "Sombra grande para modais grandes, sidebars, drawers e menus principais",
	xl: "Sombra extra grande para elementos flutuantes importantes, como overlays contextuais",
	"2xl": "Sombra máxima para destaque visual intenso (overlays principais, hero sections flutuantes)",
	inner: "Sombra interna para inputs focados, botões pressionados, estados ativos e superfícies recuadas",
	glow: {
		cyan: "Brilho ciano para elementos tecnológicos, indicadores de status e ações primárias futuristas",
		pink: "Brilho rosa para elementos vibrantes, promocionais e de alto destaque visual",
		purple: "Brilho roxo para elementos premium, mágicos ou relacionados a planos avançados",
		green: "Brilho verde para elementos de sucesso, status ativo, confirmações e estados positivos persistentes"
	}
};
var elevationTokens = {
	$schema: $schema$a,
	$description: $description$a,
	$generated: $generated$3,
	$source: $source$3,
	_comments: _comments$6,
	shadows: shadows,
	_notes: _notes$6
};

var $schema$9 = "http://json-schema.org/draft-07/schema#";
var $description$9 = "Tokens de motion - Durações, curvas de easing e delays para animações e transições";
var _comments$5 = {
	duration: "Durações de animação em milissegundos para diferentes velocidades de interação",
	easing: "Curvas de easing para diferentes comportamentos de movimento (entrada, saída, ênfase)",
	delay: "Delays antes de iniciar animações, úteis para sequenciamento e orquestração"
};
var motion = {
	duration: {
		instant: "0ms",
		ultraFast: "75ms",
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
		easeOutBack: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
		easeInBack: "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
		easeInOutBack: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
		spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
	},
	delay: {
		none: "0ms",
		short: "50ms",
		medium: "100ms",
		long: "200ms",
		longer: "300ms"
	}
};
var _notes$5 = {
	duration: {
		instant: "Transição instantânea sem animação perceptível (use para mudanças de estado não visuais)",
		ultraFast: "Feedback ultra-rápido para micro interações (ex.: hovers sutis em interfaces densas)",
		fast: "Animação rápida para feedback imediato (ex.: clique em botão, pequenas mudanças de estado)",
		normal: "Duração padrão para transições comuns de UI (ex.: dropdowns, toasts)",
		slow: "Animação lenta para transições suaves de conteúdo (ex.: modais, drawers)",
		slower: "Animação bem lenta para elementos pesados ou grandes (ex.: transições de página)",
		slowest: "Animação mais lenta para máximo destaque ou momentos de storytelling (ex.: hero sections)"
	},
	easing: {
		linear: "Movimento constante sem aceleração; ideal para movimento contínuo e em loop (ex.: loaders)",
		easeIn: "Início lento e final mais rápido; bom para elementos entrando na tela a partir de fora do canvas",
		easeOut: "Início rápido e parada suave; ideal para elementos saindo ou encaixando em posição",
		easeInOut: "Início e fim suaves com aceleração no meio; padrão para a maioria das transições",
		easeInQuad: "Ease-in quadrático para aceleração um pouco mais marcada no final",
		easeOutQuad: "Ease-out quadrático para desaceleração um pouco mais marcada no final",
		easeInOutQuad: "Ease-in-out quadrático com easing mais forte que o easeInOut padrão",
		easeInCubic: "Ease-in cúbico para aceleração forte; use com moderação para entradas dramáticas",
		easeOutCubic: "Ease-out cúbico para desaceleração forte; bom para movimento com sensação de peso",
		easeInOutCubic: "Ease-in-out cúbico para transições muito suaves e polidas",
		easeOutBack: "Ultrapassa levemente o destino antes de estabilizar; ideal para feedback divertido e de ênfase",
		easeInBack: "Começa movendo um pouco para trás e depois acelera; adequado para entradas expressivas",
		easeInOutBack: "Estilo back tanto na entrada quanto na saída; personalidade forte, use em motion de marca",
		spring: "Movimento tipo mola com bounce natural; ótimo para scale, toggles e interações mais lúdicas"
	},
	delay: {
		none: "Sem delay; use quando resposta imediata é crítica para a percepção de performance",
		short: "Delay curto para sequenciamento sutil entre elementos relacionados (ex.: itens de lista em stagger)",
		medium: "Delay médio para sequências perceptíveis e direcionamento de atenção",
		long: "Delay longo para animações orquestradas e fluxos de UI mais narrativos",
		longer: "Delay extra longo para coreografias de motion complexas; use com moderação"
	}
};
var motionTokens = {
	$schema: $schema$9,
	$description: $description$9,
	_comments: _comments$5,
	motion: motion,
	_notes: _notes$5
};

var $schema$8 = "https://json.schemastore.org/theme.json";
var $description$8 = "Border radius tokens - Generated from spacing scale";
var $generated$2 = "2026-02-06T02:23:54.476Z";
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
	$schema: $schema$8,
	$description: $description$8,
	$generated: $generated$2,
	$source: $source$2,
	radius: radius
};

var $schema$7 = "https://json.schemastore.org/theme.json";
var $description$7 = "Responsive breakpoints - Mobile-first approach";
var $generated$1 = "2026-02-06T02:23:54.481Z";
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
	$schema: $schema$7,
	$description: $description$7,
	$generated: $generated$1,
	$source: $source$1,
	$spacingReference: $spacingReference,
	breakpoints: breakpoints
};

var $schema$6 = "https://json.schemastore.org/theme.json";
var $description$6 = "Z-index layer system - Organized stacking context";
var $generated = "2026-02-06T02:23:54.486Z";
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
	$schema: $schema$6,
	$description: $description$6,
	$generated: $generated,
	$source: $source,
	zIndex: zIndex
};

var $schema$5 = "http://json-schema.org/draft-07/schema#";
var $description$5 = "Tokens de borda - Escala de espessuras e estilos de linha para composição de componentes";
var _comments$4 = {
	border: "Tokens primitivos de borda usados como base para tokens semânticos",
	width: "Espessuras de borda em pixels, organizadas por nível de ênfase visual",
	style: "Estilos de linha para diferentes funções e padrões de comunicação visual"
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
		none: "Remove completamente a borda, usado quando o contorno visual não é necessário",
		thin: "Borda sutil para divisores, linhas de separação e contornos discretos",
		base: "Espessura padrão para a maioria dos componentes (ex.: cards, inputs, containers)",
		thick: "Espessura reforçada para estados de destaque ou alta prioridade (ex.: alerts críticos, foco intenso)"
	},
	style: {
		solid: "Estilo padrão e mais legível, indicado para a maioria dos casos de uso",
		dashed: "Indicado para zonas interativas, estados de placeholder ou áreas de drop (ex.: upload)",
		dotted: "Adequado para detalhes decorativos ou estados auxiliares de foco/realce",
		double: "Usado com moderação para efeitos especiais, molduras e ênfases de alto destaque"
	}
};
var borderTokens = {
	$schema: $schema$5,
	$description: $description$5,
	_comments: _comments$4,
	border: border,
	_notes: _notes$4
};

var $schema$4 = "http://json-schema.org/draft-07/schema#";
var $description$4 = "Tokens de opacidade - Níveis de transparência";
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
	$schema: $schema$4,
	$description: $description$4,
	_comments: _comments$3,
	opacity: opacity,
	_notes: _notes$3
};

var $schema$3 = "http://json-schema.org/draft-07/schema#";
var $description$3 = "Tokens de layout - Sistema de grid, container e espaçamento";
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
	$schema: $schema$3,
	$description: $description$3,
	_comments: _comments$2,
	layout: layout,
	_notes: _notes$2
};

var $schema$2 = "http://json-schema.org/draft-07/schema#";
var $description$2 = "Tamanhos de ícones padronizados - Dimensões padronizadas para várias densidades e contextos";
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
	$schema: $schema$2,
	$description: $description$2,
	_comments: _comments$1,
	iconSize: iconSize,
	_notes: _notes$1
};

var $schema$1 = "http://json-schema.org/draft-07/schema#";
var $description$1 = "Gradientes - Tokens de gradiente para elementos visuais, alinhados à paleta primitiva";
var _comments = {
	gradients: "Gradientes pré-definidos para uso consistente na aplicação",
	text: "Gradientes para efeitos em textos e tipografia",
	background: "Gradientes para backgrounds e superfícies",
	cyberpunk: "Gradientes neon e cyberpunk para tema escuro",
	neon: "Gradientes com efeitos de brilho neon",
	status: "Gradientes para indicadores de status",
	categories: "Gradientes para categorias de componentes",
	tokens: "Sempre que possível, usar referências à paleta primitiva via {palette.*}"
};
var gradients = {
	text: {
		primary: "linear-gradient(135deg, {palette.cyan.400} 0%, {palette.violet.500} 100%)",
		secondary: "linear-gradient(135deg, {palette.rose.400} 0%, {palette.cyan.400} 100%)",
		accent: "linear-gradient(135deg, {palette.orange.400} 0%, {palette.rose.500} 100%)",
		cyberpunk: "linear-gradient(135deg, {palette.cyan.400} 0%, {palette.fuchsia.500} 50%, {palette.emerald.400} 100%)",
		neon: "linear-gradient(135deg, {palette.cyan.300} 0%, {palette.violet.500} 100%)"
	},
	background: {
		hero: "linear-gradient(135deg, {palette.cyan.500} 0%, {palette.blue.600} 40%, {palette.violet.600} 100%)",
		subtle: "linear-gradient(135deg, {palette.gray.50} 0%, {palette.gray.100} 100%)",
		cyberpunk: "linear-gradient(135deg, {palette.gray.950} 0%, {palette.slate.900} 50%, {palette.gray.900} 100%)",
		neon: "linear-gradient(135deg, {palette.slate.900} 0%, {palette.gray.950} 50%, {palette.slate.800} 100%)",
		glass: "linear-gradient(135deg, rgba(34, 211, 238, 0.10) 0%, rgba(139, 92, 246, 0.10) 100%)"
	},
	cyberpunk: {
		primary: "linear-gradient(135deg, {palette.cyan.600} 0%, {palette.violet.600} 100%)",
		secondary: "linear-gradient(135deg, {palette.rose.500} 0%, {palette.emerald.500} 100%)",
		accent: "linear-gradient(135deg, {palette.emerald.400} 0%, {palette.amber.400} 100%)",
		neon: "linear-gradient(135deg, {palette.cyan.400} 0%, {palette.fuchsia.500} 50%, {palette.lime.400} 100%)",
		glow: "linear-gradient(135deg, rgba(34, 211, 238, 0.80) 0%, rgba(139, 92, 246, 0.80) 100%)"
	},
	neon: {
		cyan: "linear-gradient(135deg, {palette.cyan.300} 0%, {palette.cyan.500} 100%)",
		purple: "linear-gradient(135deg, {palette.fuchsia.400} 0%, {palette.violet.600} 100%)",
		green: "linear-gradient(135deg, {palette.emerald.400} 0%, {palette.emerald.600} 100%)",
		pink: "linear-gradient(135deg, {palette.rose.400} 0%, {palette.rose.600} 100%)",
		yellow: "linear-gradient(135deg, {palette.amber.300} 0%, {palette.amber.500} 100%)"
	},
	status: {
		success: "linear-gradient(135deg, {palette.emerald.400} 0%, {palette.emerald.600} 100%)",
		warning: "linear-gradient(135deg, {palette.amber.400} 0%, {palette.orange.500} 100%)",
		error: "linear-gradient(135deg, {palette.rose.500} 0%, {palette.red.600} 100%)",
		info: "linear-gradient(135deg, {palette.cyan.400} 0%, {palette.blue.500} 100%)"
	},
	categories: {
		ui: "linear-gradient(135deg, {palette.blue.500}, {palette.cyan.500})",
		forms: "linear-gradient(135deg, {palette.emerald.500}, {palette.green.500})",
		layout: "linear-gradient(135deg, {palette.violet.500}, {palette.rose.500})",
		navigation: "linear-gradient(135deg, {palette.orange.500}, {palette.red.500})",
		feedback: "linear-gradient(135deg, {palette.amber.400}, {palette.orange.500})",
		overlays: "linear-gradient(135deg, {palette.indigo.500}, {palette.violet.500})",
		dataDisplay: "linear-gradient(135deg, {palette.cyan.400}, {palette.blue.500})",
		effects: "linear-gradient(135deg, {palette.rose.500}, {palette.rose.600})",
		social: "linear-gradient(135deg, {palette.teal.400}, {palette.cyan.500})",
		dashboard: "linear-gradient(135deg, {palette.violet.500}, {palette.purple.500})",
		utilities: "linear-gradient(135deg, {palette.gray.500}, {palette.slate.600})",
		providers: "linear-gradient(135deg, {palette.emerald.500}, {palette.teal.500})"
	}
};
var _notes = {
	text: {
		primary: "Gradiente ciano-roxo para textos principais com destaque, baseado em {palette.cyan.400} e {palette.violet.500}",
		secondary: "Gradiente rosa-ciano para textos secundários, usando {palette.rose.400} e {palette.cyan.400}",
		accent: "Gradiente laranja-rosa para acentos e ênfases, em {palette.orange.400} e {palette.rose.500}",
		cyberpunk: "Gradiente ciano-magenta-verde para temas cyberpunk, combinando cyan, fuchsia e emerald",
		neon: "Gradiente ciano-roxo com brilho neon intenso para títulos e chamadas de ação"
	},
	background: {
		hero: "Gradiente ciano-azul-roxo para seções herói e banners principais",
		subtle: "Gradiente sutil em tons de cinza claro para backgrounds discretos",
		cyberpunk: "Gradiente escuro com tons cyberpunk (gray/slate) para temas noturnos",
		neon: "Gradiente neon escuro para efeitos de iluminação em superfícies",
		glass: "Gradiente transparente com efeito glassmorphism para cards e overlays"
	},
	cyberpunk: {
		primary: "Gradiente ciano-magenta principal do tema cyberpunk, alinhado à paleta neon",
		secondary: "Gradiente magenta-verde secundário para elementos de suporte",
		accent: "Gradiente verde-amarelo para destaques e indicadores",
		neon: "Gradiente tricolor neon completo com alto contraste",
		glow: "Gradiente com transparência para efeitos de brilho e bordas iluminadas"
	},
	neon: {
		cyan: "Gradiente neon ciano para elementos tecnológicos e de info",
		purple: "Gradiente neon roxo para elementos premium e de destaque",
		green: "Gradiente neon verde para elementos de sucesso e confirmação",
		pink: "Gradiente neon rosa para elementos vibrantes e promocionais",
		yellow: "Gradiente neon amarelo/amber para alertas e atenção"
	},
	status: {
		success: "Gradiente verde para estados de sucesso (emerald)",
		warning: "Gradiente amber/laranja para estados de alerta",
		error: "Gradiente vermelho/rose para estados de erro",
		info: "Gradiente azul-ciano para estados informativos"
	},
	categories: {
		ui: "Gradiente azul-ciano para componentes de interface",
		forms: "Gradiente verde-esmeralda para formulários",
		layout: "Gradiente roxo-rosa para componentes de layout",
		navigation: "Gradiente laranja-vermelho para navegação",
		feedback: "Gradiente amarelo-laranja para feedback e toasts",
		overlays: "Gradiente índigo-roxo para componentes sobrepostos (modais, popovers)",
		dataDisplay: "Gradiente ciano-azul para visualização de dados",
		effects: "Gradiente rosa intenso para efeitos visuais e decorativos",
		social: "Gradiente teal-ciano para componentes sociais e integrações",
		dashboard: "Gradiente roxo-violeta para dashboards e painéis analíticos",
		utilities: "Gradiente cinza-slate para utilitários e elementos neutros",
		providers: "Gradiente esmeralda-teal para provedores e integrações externas"
	}
};
var gradientTokens = {
	$schema: $schema$1,
	$description: $description$1,
	_comments: _comments,
	gradients: gradients,
	_notes: _notes
};

var $schema = "http://json-schema.org/draft-07/schema#";
var $description = "Direções de gradiente para uso com Tailwind ou CSS utilities";
var gradientDirections = {
	toTop: "to-t",
	toRight: "to-r",
	toBottom: "to-b",
	toLeft: "to-l",
	toTopRight: "to-tr",
	toTopLeft: "to-tl",
	toBottomRight: "to-br",
	toBottomLeft: "to-bl"
};
var gradientDirections_default = {
	$schema: $schema,
	$description: $description,
	gradientDirections: gradientDirections
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
declare const gradientDirectionsPrimitive: any;
declare const lightTheme$1: any;
declare const darkTheme$1: any;
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
        gradientDirections: any;
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
        layoutClasses: any;
        motionClasses: any;
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
declare const layoutClassesSemantic: any;
declare const motionClassesSemantic: any;

/**
 * Tipos agnósticos para Design Tokens
 *
 * Interface genérica que pode ser implementada por qualquer design system.
 *
 * @module @rainersoft/ui/types/tokens
 * @author Rainer Teixeira
 */
interface ColorScale {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    950?: string;
    [key: string]: string | undefined;
}
interface ColorPalette {
    [colorName: string]: ColorScale | string;
}
interface BorderToken {
    width?: string;
    style?: string;
    color?: string;
    [key: string]: string | undefined;
}
type BorderValue = string | BorderToken | {
    [key: string]: BorderValue;
};
interface SemanticColors {
    text?: {
        primary?: string;
        secondary?: string;
        tertiary?: string;
        disabled?: string;
        inverse?: string;
        link?: string;
        linkHover?: string;
        [key: string]: string | undefined;
    };
    background?: {
        primary?: string;
        secondary?: string;
        tertiary?: string;
        disabled?: string;
        overlay?: string;
        inverse?: string;
        muted?: string;
        [key: string]: string | undefined;
    };
    border?: {
        default?: BorderValue;
        light?: BorderValue;
        medium?: BorderValue;
        dark?: BorderValue;
        focus?: BorderValue;
        error?: BorderValue;
        success?: BorderValue;
        warning?: BorderValue;
        [key: string]: BorderValue | undefined;
    };
    button?: {
        primary?: {
            default?: string;
            hover?: string;
            active?: string;
            disabled?: string;
            text?: string;
        };
        secondary?: {
            default?: string;
            hover?: string;
            active?: string;
            disabled?: string;
            text?: string;
        };
        [key: string]: Record<string, string | undefined> | undefined;
    };
    status?: {
        success?: {
            base?: string;
            text?: string;
            background?: string;
        };
        error?: {
            base?: string;
            text?: string;
            background?: string;
        };
        warning?: {
            base?: string;
            text?: string;
            background?: string;
        };
        info?: {
            base?: string;
            text?: string;
            background?: string;
        };
        [key: string]: Record<string, string | undefined> | undefined;
    };
    surface?: {
        primary?: string;
        elevated?: string;
        raised?: string;
        sunken?: string;
        [key: string]: string | undefined;
    };
    [key: string]: Record<string, unknown> | undefined;
}
interface SpacingScale {
    0?: string;
    px?: string;
    0.5?: string;
    1?: string;
    1.5?: string;
    2?: string;
    2.5?: string;
    3?: string;
    3.5?: string;
    4?: string;
    5?: string;
    6?: string;
    7?: string;
    8?: string;
    9?: string;
    10?: string;
    11?: string;
    12?: string;
    14?: string;
    16?: string;
    20?: string;
    24?: string;
    28?: string;
    32?: string;
    36?: string;
    40?: string;
    44?: string;
    48?: string;
    52?: string;
    56?: string;
    60?: string;
    64?: string;
    72?: string;
    80?: string;
    96?: string;
    [key: string]: string | undefined;
}
interface RadiusScale {
    none?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    '2xl'?: string;
    '3xl'?: string;
    full?: string;
    [key: string]: string | undefined;
}
interface ShadowScale {
    none?: string;
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    '2xl'?: string;
    inner?: string;
    [key: string]: string | undefined;
}
interface TypographyTokens {
    fontFamily?: {
        sans?: string | string[];
        serif?: string | string[];
        mono?: string | string[];
        [key: string]: string | string[] | undefined;
    };
    fontSize?: {
        xs?: string | [string, string];
        sm?: string | [string, string];
        base?: string | [string, string];
        lg?: string | [string, string];
        xl?: string | [string, string];
        '2xl'?: string | [string, string];
        '3xl'?: string | [string, string];
        '4xl'?: string | [string, string];
        '5xl'?: string | [string, string];
        [key: string]: string | [string, string] | undefined;
    };
    fontWeight?: {
        thin?: string;
        extralight?: string;
        light?: string;
        normal?: string;
        medium?: string;
        semibold?: string;
        bold?: string;
        extrabold?: string;
        black?: string;
        [key: string]: string | undefined;
    };
    lineHeight?: {
        none?: string;
        tight?: string;
        snug?: string;
        normal?: string;
        relaxed?: string;
        loose?: string;
        [key: string]: string | undefined;
    };
    letterSpacing?: {
        tighter?: string;
        tight?: string;
        normal?: string;
        wide?: string;
        wider?: string;
        widest?: string;
        [key: string]: string | undefined;
    };
}
interface MotionTokens {
    duration?: {
        instant?: string;
        fast?: string;
        normal?: string;
        slow?: string;
        slower?: string;
        [key: string]: string | undefined;
    };
    easing?: {
        linear?: string;
        easeIn?: string;
        easeOut?: string;
        easeInOut?: string;
        bounce?: string;
        [key: string]: string | undefined;
    };
    delay?: {
        none?: string;
        short?: string;
        medium?: string;
        long?: string;
        [key: string]: string | undefined;
    };
}
interface BreakpointTokens {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    '2xl'?: string;
    [key: string]: string | undefined;
}
interface ZIndexTokens {
    hide?: number;
    auto?: string;
    base?: number;
    docked?: number;
    dropdown?: number;
    sticky?: number;
    banner?: number;
    overlay?: number;
    modal?: number;
    popover?: number;
    skipLink?: number;
    toast?: number;
    tooltip?: number;
    [key: string]: number | string | undefined;
}
interface GradientTokens {
    text?: {
        primary?: string;
        secondary?: string;
        accent?: string;
        cyberpunk?: string;
        neon?: string;
        [key: string]: string | undefined;
    };
    background?: {
        hero?: string;
        subtle?: string;
        cyberpunk?: string;
        neon?: string;
        glass?: string;
        [key: string]: string | undefined;
    };
    cyberpunk?: {
        primary?: string;
        secondary?: string;
        accent?: string;
        neon?: string;
        glow?: string;
        [key: string]: string | undefined;
    };
    neon?: {
        cyan?: string;
        purple?: string;
        green?: string;
        pink?: string;
        yellow?: string;
        [key: string]: string | undefined;
    };
    status?: {
        success?: string;
        warning?: string;
        error?: string;
        info?: string;
        [key: string]: string | undefined;
    };
    [key: string]: Record<string, string | undefined> | undefined;
}
interface DesignTokens {
    primitives?: {
        colors?: ColorPalette;
        spacing?: SpacingScale;
        radius?: RadiusScale;
        shadows?: ShadowScale;
        typography?: TypographyTokens;
        motion?: MotionTokens;
        breakpoints?: BreakpointTokens;
        zIndex?: ZIndexTokens;
        gradients?: GradientTokens;
        [key: string]: unknown;
    };
    semantics?: SemanticColors;
    themes?: {
        light?: SemanticColors;
        dark?: SemanticColors;
        [themeName: string]: SemanticColors | undefined;
    };
    [key: string]: unknown;
}
interface TokensContextValue {
    tokens: DesignTokens;
    getColor: (path: string, fallback?: string) => string;
    getSpacing: (key: string, fallback?: string) => string;
    getRadius: (key: string, fallback?: string) => string;
    getShadow: (key: string, fallback?: string) => string;
    getMotion: (type: 'duration' | 'easing' | 'delay', key: string, fallback?: string) => string;
    getGradient: (path: string, fallback?: string) => string;
}

/**
 * Tipos agnósticos para Temas
 *
 * Interface genérica para configuração de temas.
 *
 * @module @rainersoft/ui/types/theme
 * @author Rainer Teixeira
 */
type ThemeMode = 'light' | 'dark' | 'system';
interface ThemeColors {
    primary?: string;
    primaryForeground?: string;
    secondary?: string;
    secondaryForeground?: string;
    accent?: string;
    accentForeground?: string;
    background?: string;
    foreground?: string;
    muted?: string;
    mutedForeground?: string;
    card?: string;
    cardForeground?: string;
    popover?: string;
    popoverForeground?: string;
    border?: string;
    input?: string;
    ring?: string;
    destructive?: string;
    destructiveForeground?: string;
    success?: string;
    successForeground?: string;
    warning?: string;
    warningForeground?: string;
    info?: string;
    infoForeground?: string;
    [key: string]: string | undefined;
}
interface ThemeConfig {
    mode?: ThemeMode;
    colors?: ThemeColors;
    darkColors?: ThemeColors;
    cssVarsPrefix?: string;
    defaultTheme?: ThemeMode;
    storageKey?: string;
    attribute?: string;
    enableSystem?: boolean;
    disableTransitionOnChange?: boolean;
}
interface ThemeContextValue {
    theme: ThemeMode;
    setTheme: (theme: ThemeMode) => void;
    toggleTheme: () => void;
    resolvedTheme: 'light' | 'dark';
    colors: ThemeColors;
    isDark: boolean;
    isLight: boolean;
}
declare const DEFAULT_LIGHT_COLORS: ThemeColors;
declare const DEFAULT_DARK_COLORS: ThemeColors;

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
 * @version 2.0.0
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
 * import { lightTheme } from '@rainersoft/design-tokens';
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
    readonly colors: any;
    readonly typography: any;
    readonly spacing: any;
    readonly radius: any;
    readonly shadows: any;
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
 * @version 2.0.0
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
 * import { darkTheme } from '@rainersoft/design-tokens';
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
    readonly colors: any;
    readonly typography: any;
    readonly spacing: any;
    readonly radius: any;
    readonly shadows: any;
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
/**
 * Tipo TypeScript para todos os temas
 *
 * @typedef {Object} Themes
 * @description
 * Tipo que representa a estrutura completa de todos os temas disponíveis.
 * Útil para type-checking e autocomplete em IDEs.
 */
type Themes = typeof themes;

/**
 * @fileoverview Ponto de entrada principal do Rainer Design System
 *
 * @description
 * Exporta todos os tokens, temas e utilidades do sistema de design.
 * Organizado em categorias para fácil consumo e autocomplete.
 *
 * @module index
 * @version 3.0.0
 * @author Rainer Teixeira
 * @since 1.0.0
 */

type GradientDirection = 'to-bottom' | 'to-top' | 'to-right' | 'to-left' | 'to-br' | 'to-bl' | 'to-tr' | 'to-tl';
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
type BackgroundKey = keyof typeof BACKGROUND;
declare const MOTION: {
    readonly TRANSITION: {
        readonly DEFAULT: "transition-all duration-200 ease-in-out";
        readonly COLOR: "transition-colors duration-200 ease-in-out";
    };
};
type MotionTransitionKey = keyof typeof MOTION.TRANSITION;
interface ContrastResult {
    valid: boolean;
    contrast: number;
    message: string;
}
declare const validateContrast: (_foreground: string, _background: string) => ContrastResult;
declare const colors: any;
declare const typography: any;
declare const cssVarsPath = "./src/css-vars.css";

export { BACKGROUND, type BackgroundKey, type BreakpointTokens, type ColorPalette, type ColorScale, type ContrastResult, DEFAULT_DARK_COLORS, DEFAULT_LIGHT_COLORS, type DarkTheme, type DesignTokens, gradientPrimitive as GRADIENTS, GRADIENT_DIRECTIONS, type GradientDirection, type GradientTokens, type LightTheme, MOTION, type MotionTokens, type MotionTransitionKey, type RadiusScale, shadowsPrimitive as SHADOWS, type SemanticColors, type ShadowScale, type SpacingScale, type ThemeColors, type ThemeConfig, type ThemeContextValue, type ThemeMode, type Themes, type TokensContextValue, type TypographyTokens, type ZIndexTokens, borderPrimitive, borderSemantic, breakpointsPrimitive, colorPrimitive, colorSemantic, colors, cssVarsPath, darkTheme$1 as darkTheme, elevationSemantic, gradientDirectionsPrimitive, gradientPrimitive, iconSizesPrimitive, layoutClassesSemantic, layoutPrimitive, layoutSemantic, lightTheme$1 as lightTheme, motionClassesSemantic, motionPrimitive, motionSemantic, motionPrimitive as motionTokens, opacityPrimitive, radiusPrimitive, borderTokens as rawBorderPrimitive, breakpoints_default as rawBreakpointsPrimitive, colorPalette as rawColorPrimitive, gradientDirections_default as rawGradientDirectionsPrimitive, gradientTokens as rawGradientPrimitive, iconScale as rawIconSizesPrimitive, layoutUnits as rawLayoutPrimitive, motionTokens as rawMotionPrimitive, opacityScale as rawOpacityPrimitive, radiusScale as rawRadiusPrimitive, elevationTokens as rawShadowsPrimitive, spacingScale as rawSpacingPrimitive, typographyBase as rawTypographyPrimitive, zIndexLayers as rawZIndexPrimitive, shadowsPrimitive, spacingPrimitive, spacingSemantic, themes, tokens, typography, typographyPrimitive, typographySemantic, validateContrast, zIndexPrimitive };
