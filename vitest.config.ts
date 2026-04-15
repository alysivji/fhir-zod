import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
	resolve: {
		alias: [
			{
				find: "fhir-zod/r4",
				replacement: fileURLToPath(
					new URL("./src/r4/index.ts", import.meta.url),
				),
			},
			{
				find: "fhir-zod/r4b",
				replacement: fileURLToPath(
					new URL("./src/r4b/index.ts", import.meta.url),
				),
			},
			{
				find: "fhir-zod/r5",
				replacement: fileURLToPath(
					new URL("./src/r5/index.ts", import.meta.url),
				),
			},
			{
				find: "fhir-zod/stu3",
				replacement: fileURLToPath(
					new URL("./src/stu3/index.ts", import.meta.url),
				),
			},
			{
				find: /^fhir-zod$/,
				replacement: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
			},
		],
	},
	test: {
		coverage: {
			exclude: [
				"scripts/list-*-targets.ts",
				"src/generator/{index,r4,r4b,r5,stu3}.ts",
				"src/generator/sources/structuredefinition-{r4,r4b,r5,stu3}.ts",
				"src/generator/targets/*.ts",
			],
			include: [
				"src/generator/**/*.ts",
				"src/shared/**/*.ts",
				"scripts/**/*.ts",
			],
			reporter: ["text", "lcov", "json-summary"],
		},
		environment: "node",
		outputFile: {
			junit: "./test-results/vitest.junit.xml",
		},
		reporters: process.env.CI ? ["default", "junit"] : ["default"],
	},
});
