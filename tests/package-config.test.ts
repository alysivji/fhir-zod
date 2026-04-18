import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import tsdownConfig from "../tsdown.config.ts";

type PackageJson = {
	exports: Record<string, unknown>;
	sideEffects: unknown;
};

describe("package and build config", () => {
	it("exports the root package and supported version subpaths", () => {
		const packageJson = JSON.parse(
			readFileSync(resolve("package.json"), "utf8"),
		) as PackageJson;

		expect(Object.keys(packageJson.exports).sort()).toEqual([
			".",
			"./r4",
			"./r4/*",
			"./r4b",
			"./r4b/*",
			"./r5",
			"./r5/*",
			"./stu3",
			"./stu3/*",
		]);
		expect(packageJson.sideEffects).toBe(false);
	});

	it("builds each public entrypoint as unbundled ESM with declarations", () => {
		expect(tsdownConfig).toMatchObject({
			dts: true,
			entry: expect.objectContaining({
				index: "src/index.ts",
				"r4/index": "src/r4/index.ts",
				"r4/Patient/index": "src/r4/Patient/index.ts",
				"r4b/index": "src/r4b/index.ts",
				"r4b/Patient/index": "src/r4b/Patient/index.ts",
				"r5/index": "src/r5/index.ts",
				"r5/Patient/index": "src/r5/Patient/index.ts",
				"stu3/index": "src/stu3/index.ts",
				"stu3/Patient/index": "src/stu3/Patient/index.ts",
			}),
			format: "esm",
			outDir: "dist",
			unbundle: true,
		});
	});
});
