import { defineConfig } from "vitepress";

export default defineConfig({
	title: "fhir-zod",
	description: "Spec-aligned TypeScript models and runtime validators for HL7 FHIR.",
	themeConfig: {
		search: {
			provider: "local",
		},
		nav: [
			{ text: "Introduction", link: "/" },
			{ text: "Getting Started", link: "/getting-started" },
			{ text: "Supported Resources", link: "/supported-resources" },
		],
		sidebar: [
			{
				text: "Introduction",
				items: [
					{ text: "Overview", link: "/" },
					{ text: "Getting Started", link: "/getting-started" },
					{ text: "Why fhir-zod", link: "/why-fhir-zod" },
					{ text: "FHIR Versions", link: "/versions" },
					{ text: "Supported Resources", link: "/supported-resources" },
					{ text: "API Conventions", link: "/api-conventions" },
					{ text: "Validation Scope", link: "/validation-scope" },
					{ text: "Contributor Notes", link: "/contributor-notes" },
				],
			},
		],
	},
});
