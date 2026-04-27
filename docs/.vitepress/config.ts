import { defineConfig } from "vitepress";

export default defineConfig({
	title: "fhir-zod",
	description: "Spec-aligned TypeScript models and runtime validators for HL7 FHIR.",
	cleanUrls: true,
	head: [
		[
			"script",
			{ id: "default-light-appearance" },
			`if (!localStorage.getItem('vitepress-theme-appearance')) localStorage.setItem('vitepress-theme-appearance', 'light')`,
		],
	],
	themeConfig: {
		search: {
			provider: "local",
		},
		nav: [
			{ text: "Introduction", link: "/" },
			{ text: "Getting Started", link: "/getting-started" },
			{ text: "Supported Resources", link: "/supported-resources/" },
		],
		sidebar: [
			{
				text: "Introduction",
				items: [
					{ text: "Overview", link: "/" },
					{ text: "Getting Started", link: "/getting-started" },
					{ text: "Why fhir-zod", link: "/why-fhir-zod" },
					{ text: "FHIR Versions", link: "/versions" },
					{
						text: "Supported Resources",
						link: "/supported-resources/",
						items: [
							{ text: "R5", link: "/supported-resources/r5" },
							{ text: "R4B", link: "/supported-resources/r4b" },
							{ text: "R4", link: "/supported-resources/r4" },
							{ text: "STU3", link: "/supported-resources/stu3" },
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
