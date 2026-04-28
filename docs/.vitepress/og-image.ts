import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL = "https://fhir-zod.vercel.app";
const BRAND = "#d95f27";
const BG = "#151515";
const TEXT_PRIMARY = "#f2eee8";
const TEXT_SECONDARY = "#aa9d90";
const TEXT_DIM = "#524540";

// Fonts from @fontsource/inter — loaded once, shared across all pages
let fontCache: { name: string; data: Buffer; weight: 400 | 700; style: "normal" }[] | null = null;

function loadFonts() {
	if (fontCache) return fontCache;
	const base = path.join(__dirname, "../../node_modules/@fontsource/inter/files");
	const regular = fs.readFileSync(path.join(base, "inter-latin-400-normal.woff"));
	const bold = fs.readFileSync(path.join(base, "inter-latin-700-normal.woff"));
	fontCache = [
		{ name: "Inter", data: regular, weight: 400, style: "normal" },
		{ name: "Inter", data: bold, weight: 700, style: "normal" },
	];
	return fontCache;
}

function div(style: Record<string, unknown>, ...children: unknown[]) {
	return { type: "div", props: { style: { display: "flex", ...style }, children } };
}

function text(content: string, style: Record<string, unknown>) {
	return { type: "div", props: { style: { display: "flex", ...style }, children: content } };
}

function ogTemplate(title: string, description?: string) {
	const titleSize = title.length > 40 ? 54 : title.length > 28 ? 64 : 76;

	return div(
		{ width: 1200, height: 630, backgroundColor: BG },
		// Left accent stripe
		div({ width: 6, height: 630, backgroundColor: BRAND, flexShrink: 0 }),
		// Main content
		div(
			{
				flexDirection: "column",
				flex: 1,
				padding: "60px 80px 60px 74px",
				justifyContent: "space-between",
			},
			// Top: label + title + optional description
			div(
				{ flexDirection: "column" },
				text("fhir-zod", { color: BRAND, fontSize: 22, fontWeight: 400, marginBottom: 28 }),
				text(title, {
					color: TEXT_PRIMARY,
					fontSize: titleSize,
					fontWeight: 700,
					lineHeight: 1.1,
					marginBottom: description ? 24 : 0,
				}),
				...(description
					? [text(description, { color: TEXT_SECONDARY, fontSize: 26, fontWeight: 400, lineHeight: 1.5 })]
					: []),
			),
			// Bottom: URL
			text(SITE_URL.replace("https://", ""), { color: TEXT_DIM, fontSize: 20, fontWeight: 400 }),
		),
	);
}

export async function generateOgImage(
	title: string,
	description: string | undefined,
	outputPath: string,
): Promise<void> {
	// Lazy-import so these heavy deps don't affect non-build VitePress usage
	const [{ default: satori }, { Resvg }] = await Promise.all([
		import("satori"),
		import("@resvg/resvg-js"),
	]);

	const fonts = loadFonts();
	const svg = await satori(ogTemplate(title, description), {
		width: 1200,
		height: 630,
		fonts,
	});

	const resvg = new Resvg(svg);
	const png = resvg.render().asPng();

	fs.mkdirSync(path.dirname(outputPath), { recursive: true });
	fs.writeFileSync(outputPath, png);
}
