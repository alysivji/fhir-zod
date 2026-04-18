import { existsSync, readdirSync } from "node:fs";
import { defineConfig } from "tsdown";

const r4FolderEntries = Object.fromEntries(
	readdirSync("src/r4", { withFileTypes: true })
		.filter((d) => d.isDirectory() && existsSync(`src/r4/${d.name}/index.ts`))
		.map((d) => [`r4/${d.name}/index`, `src/r4/${d.name}/index.ts`]),
);

export default defineConfig({
	entry: {
		index: "src/index.ts",
		"r4/index": "src/r4/index.ts",
		...r4FolderEntries,
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
