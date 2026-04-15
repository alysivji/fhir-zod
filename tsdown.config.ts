import { defineConfig } from "tsdown";

export default defineConfig({
	entry: {
		index: "src/index.ts",
		"r4/index": "src/r4/index.ts",
		"r4b/index": "src/r4b/index.ts",
		"r5/index": "src/r5/index.ts",
		"stu3/index": "src/stu3/index.ts",
	},
	dts: true,
	format: "esm",
	outDir: "dist",
	sourcemap: true,
	unbundle: true,
});
