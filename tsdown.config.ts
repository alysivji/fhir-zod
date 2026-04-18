import { existsSync, readdirSync } from "node:fs";
import { defineConfig } from "tsdown";

const generatedVersions = ["r4", "r4b", "r5", "stu3"] as const;

function folderEntriesForVersion(version: (typeof generatedVersions)[number]) {
	return Object.fromEntries(
		readdirSync(`src/${version}`, { withFileTypes: true })
			.filter(
				(d) =>
					d.isDirectory() && existsSync(`src/${version}/${d.name}/index.ts`),
			)
			.map((d) => [
				`${version}/${d.name}/index`,
				`src/${version}/${d.name}/index.ts`,
			]),
	);
}

const generatedEntries = Object.fromEntries(
	generatedVersions.flatMap((version) => [
		[`${version}/index`, `src/${version}/index.ts`],
		...Object.entries(folderEntriesForVersion(version)),
	]),
);

export default defineConfig({
	entry: {
		index: "src/index.ts",
		...generatedEntries,
	},
	dts: true,
	format: "esm",
	outDir: "dist",
	sourcemap: true,
	unbundle: true,
});
