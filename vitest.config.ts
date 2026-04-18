import { fileURLToPath } from "node:url";
import { configDefaults, defineConfig } from "vitest/config";

const isCi = process.env.CI === "true";
const generatedVersions = ["r4", "r4b", "r5", "stu3"] as const;

function aliasesForGeneratedVersion(
	version: (typeof generatedVersions)[number],
) {
	return [
		{
			find: new RegExp(`^fhir-zod/${version}/(.+)$`),
			replacement: `${fileURLToPath(
				new URL(`./src/${version}/`, import.meta.url),
			)}$1/index.ts`,
		},
		{
			find: `fhir-zod/${version}`,
			replacement: fileURLToPath(
				new URL(`./src/${version}/index.ts`, import.meta.url),
			),
		},
	];
}

export default defineConfig({
	resolve: {
		alias: [
			...generatedVersions.flatMap(aliasesForGeneratedVersion),
			{
				find: /^fhir-zod$/,
				replacement: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
			},
		],
	},
	test: {
		exclude: [...configDefaults.exclude, ".context/**"],
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
		// CI runs declaration emit, package bundling, and generated schema suites in
		// the same Vitest invocation. Capping workers avoids starving Vitest's RPC
		// channel on smaller runners while keeping local runs fully parallel.
		maxWorkers: isCi ? 2 : undefined,
		minWorkers: isCi ? 1 : undefined,
		outputFile: {
			junit: "./test-results/vitest.junit.xml",
		},
		reporters: process.env.CI ? ["default", "junit"] : ["default"],
	},
});
