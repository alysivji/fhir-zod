import { defineConfig } from "vitepress";

export default defineConfig({
	title: "fhir-zod",
	description: "Zod schemas for FHIR resources",
	themeConfig: {
		search: {
			provider: "local",
		},
		nav: [
			{ text: "Introduction", link: "/" },
			{ text: "Getting Started", link: "/getting-started" },
		],
		sidebar: [
			{
				text: "Introduction",
				items: [
					{ text: "Overview", link: "/" },
					{ text: "Getting Started", link: "/getting-started" },
					{ text: "FHIR Versions", link: "/versions" },
					{ text: "API Conventions", link: "/api-conventions" },
					{ text: "Validation Scope", link: "/validation-scope" },
				],
			},
		],
	},
});
