import path from "node:path";
import { defineConfig } from "vitepress";
import { generateOgImage } from "./og-image";

// Collect page metadata during transformPageData so buildEnd can generate images
const ogPages = new Map<string, { title: string; description: string; slug: string }>();

const SITE_URL = "https://fhir-zod.vercel.app";
const DEFAULT_DESCRIPTION =
	"FHIR types and Zod validation for TypeScript — install, import, validate. No generators, no servers, no HL7 toolchain required.";

function pageSlug(relativePath: string): string {
	return relativePath.replace(/\.md$/, "").replace(/\//g, "-") || "index";
}

export default defineConfig({
	title: "fhir-zod",
	description: DEFAULT_DESCRIPTION,
	cleanUrls: true,
	sitemap: {
		hostname: SITE_URL,
	},
	transformPageData(pageData) {
		const slug = pageSlug(pageData.relativePath);
		const isHome = pageData.relativePath === "index.md";
		ogPages.set(pageData.relativePath, {
			title: isHome ? "fhir-zod" : pageData.title || "fhir-zod",
			description: isHome
				? DEFAULT_DESCRIPTION
				: String(pageData.description || pageData.frontmatter?.description || DEFAULT_DESCRIPTION),
			slug,
		});
	},
	transformHead(context) {
		const { title, description, slug } = ogPages.get(context.pageData.relativePath) ?? {
			title: context.pageData.title || "fhir-zod",
			description: DEFAULT_DESCRIPTION,
			slug: pageSlug(context.pageData.relativePath),
		};
		const ogImage = `${SITE_URL}/og/${slug}.png`;
		const pageUrl = context.pageData.relativePath === "index.md" ? SITE_URL : `${SITE_URL}/${slug}`;
		return [
			["meta", { property: "og:title", content: title }],
			["meta", { property: "og:description", content: description }],
			["meta", { property: "og:url", content: pageUrl }],
			["meta", { property: "og:type", content: "website" }],
			["meta", { property: "og:image", content: ogImage }],
			["meta", { name: "twitter:card", content: "summary_large_image" }],
			["meta", { name: "twitter:image", content: ogImage }],
		];
	},
	async buildEnd(siteConfig) {
		const ogDir = path.join(siteConfig.outDir, "og");
		await Promise.all(
			Array.from(ogPages.values()).map(({ title, description, slug }) =>
				generateOgImage(title, description, path.join(ogDir, `${slug}.png`)),
			),
		);
	},
	head: [
		[
			"script",
			{ id: "default-light-appearance" },
			`if (!localStorage.getItem('vitepress-theme-appearance')) localStorage.setItem('vitepress-theme-appearance', 'light')`,
		],
		...(process.env.VERCEL_ENV === "production"
			? ([
					[
						"script",
						{ async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-739MGZ48PY" },
					],
					[
						"script",
						{ id: "ga4-init" },
						`if (!localStorage.getItem('ga-exclude')) {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-739MGZ48PY');
}`,
					],
				] as any)
			: []),
	],
	themeConfig: {
		footer: {
			message: 'Built with <a href="https://vitepress.dev/">VitePress</a>.',
		},
		search: {
			provider: "local",
		},
		nav: [
			{ text: "Getting Started", link: "/getting-started" },
			{ text: "FHIR Versions", link: "/versions/" },
			{ text: "GitHub", link: "https://github.com/alysivji/fhir-zod" },
		],
		sidebar: [
			{
				items: [
					{ text: "Introduction", link: "/" },
					{ text: "Getting Started", link: "/getting-started" },
					{ text: "Why fhir-zod", link: "/why-fhir-zod" },
					{
						text: "FHIR Versions",
						link: "/versions/",
						items: [
							{ text: "R5", link: "/versions/r5" },
							{ text: "R4B", link: "/versions/r4b" },
							{ text: "R4", link: "/versions/r4" },
							{ text: "STU3", link: "/versions/stu3" },
						],
					},
					{ text: "API Conventions", link: "/api-conventions" },
					{ text: "Validation Scope", link: "/validation-scope" },
					{ text: "For AI Agents", link: "/for-agents" },
				],
			},
		],
	},
});
