import { existsSync, readdirSync } from "node:fs";
import { defineConfig } from "tsdown";

const r4FolderEntries = Object.fromEntries(
	readdirSync("src/r4", { withFileTypes: true })
		.filter((d) => d.isDirectory() && existsSync(`src/r4/${d.name}/index.ts`))
		.map((d) => [`r4/${d.name}/index`, `src/r4/${d.name}/index.ts`]),
);

const r4bFolderEntries = Object.fromEntries(
	readdirSync("src/r4b", { withFileTypes: true })
		.filter((d) => d.isDirectory() && existsSync(`src/r4b/${d.name}/index.ts`))
		.map((d) => [`r4b/${d.name}/index`, `src/r4b/${d.name}/index.ts`]),
);

const r5FolderEntries = Object.fromEntries(
	readdirSync("src/r5", { withFileTypes: true })
		.filter((d) => d.isDirectory() && existsSync(`src/r5/${d.name}/index.ts`))
		.map((d) => [`r5/${d.name}/index`, `src/r5/${d.name}/index.ts`]),
);

const stu3FolderEntries = Object.fromEntries(
	readdirSync("src/stu3", { withFileTypes: true })
		.filter((d) => d.isDirectory() && existsSync(`src/stu3/${d.name}/index.ts`))
		.map((d) => [`stu3/${d.name}/index`, `src/stu3/${d.name}/index.ts`]),
);

export default defineConfig({
	entry: {
		index: "src/index.ts",
		"r4/index": "src/r4/index.ts",
		...r4FolderEntries,
		"r4b/index": "src/r4b/index.ts",
		...r4bFolderEntries,
		"r5/index": "src/r5/index.ts",
		...r5FolderEntries,
		"stu3/index": "src/stu3/index.ts",
		...stu3FolderEntries,
	},
	dts: true,
	format: "esm",
	outDir: "dist",
	sourcemap: true,
	unbundle: true,
});
