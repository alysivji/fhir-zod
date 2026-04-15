import { defineConfig } from "tsdown";

export default defineConfig({
	entry: {
		index: "src/index.ts",
		"r4/index": "src/r4/index.ts",
		"r4/zod3/index": "src/r4/zod3/index.ts",
		"r4/zod4/index": "src/r4/zod4/index.ts",
		"r4b/index": "src/r4b/index.ts",
		"r4b/zod3/index": "src/r4b/zod3/index.ts",
		"r4b/zod4/index": "src/r4b/zod4/index.ts",
		"r5/index": "src/r5/index.ts",
		"r5/zod3/index": "src/r5/zod3/index.ts",
		"r5/zod4/index": "src/r5/zod4/index.ts",
		"stu3/index": "src/stu3/index.ts",
		"stu3/zod3/index": "src/stu3/zod3/index.ts",
		"stu3/zod4/index": "src/stu3/zod4/index.ts",
	},
	dts: true,
	format: "esm",
	outDir: "dist",
	sourcemap: true,
	unbundle: true,
});
