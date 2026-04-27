import { defineConfig } from "vitepress";

export default defineConfig({
	title: "fhir-zod",
	description:
		"FHIR types and Zod validation for TypeScript — install, import, validate. No generators, no servers, no HL7 toolchain required.",
	cleanUrls: true,
	head: [
		[
			"script",
			{ id: "default-light-appearance" },
			`if (!localStorage.getItem('vitepress-theme-appearance')) localStorage.setItem('vitepress-theme-appearance', 'light')`,
		],
	],
	themeConfig: {
		footer: {
			message: 'Built with <a href="https://vitepress.dev/">VitePress</a>.',
		},
		search: {
			provider: "local",
		},
		nav: [
			{ text: "Introduction", link: "/" },
			{ text: "Getting Started", link: "/getting-started" },
			{ text: "FHIR Versions", link: "/versions/" },
		],
		sidebar: [
			{
				text: "Introduction",
				items: [
					{ text: "Overview", link: "/" },
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
					{ text: "Contributor Notes", link: "/contributor-notes" },
				],
			},
		],
	},
});
