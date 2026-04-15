import { execFile } from "node:child_process";
import {
	existsSync,
	mkdtempSync,
	readFileSync,
	rmSync,
	writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { build } from "esbuild";
import { describe, expect, it } from "vitest";

const execFileAsync = promisify(execFile);
const repoRoot = fileURLToPath(new URL("..", import.meta.url));

describe("package tree shaking", () => {
	async function buildPackageFixture(): Promise<{
		distDir: string;
		packageRoot: string;
		rootPackageJson: {
			exports: unknown;
			name: string;
			sideEffects?: unknown;
			type?: string;
		};
	}> {
		const packageRoot = mkdtempSync(join(tmpdir(), "fhir-zod-tree-shaking-"));
		const distDir = join(packageRoot, "dist");
		const rootPackageJson = JSON.parse(
			readFileSync(join(repoRoot, "package.json"), "utf8"),
		) as {
			exports: unknown;
			name: string;
			sideEffects?: unknown;
			type?: string;
		};

		await execFileAsync(
			process.execPath,
			[
				join(repoRoot, "node_modules/tsdown/dist/run.mjs"),
				"--config",
				join(repoRoot, "tsdown.config.ts"),
				"--out-dir",
				distDir,
				"--logLevel",
				"error",
			],
			{
				cwd: repoRoot,
				maxBuffer: 1024 * 1024 * 20,
			},
		);

		writeFileSync(
			join(packageRoot, "package.json"),
			JSON.stringify({
				exports: rootPackageJson.exports,
				name: rootPackageJson.name,
				sideEffects: rootPackageJson.sideEffects,
				type: rootPackageJson.type,
			}),
		);

		return { distDir, packageRoot, rootPackageJson };
	}

	it("lets a consumer bundle one R4 schema without unrelated R4 resources", async () => {
		const { distDir, packageRoot, rootPackageJson } =
			await buildPackageFixture();
		try {
			expect(rootPackageJson.sideEffects).toBe(false);

			const r4Index = join(distDir, "r4/index.js");
			const r4Patient = join(distDir, "r4/Patient.js");
			const r4Observation = join(distDir, "r4/Observation.js");
			expect(existsSync(r4Index)).toBe(true);
			expect(existsSync(r4Patient)).toBe(true);
			expect(readFileSync(r4Observation, "utf8")).toContain(
				"ObservationSchemaInternal",
			);

			const result = await build({
				bundle: true,
				external: ["zod"],
				format: "esm",
				platform: "neutral",
				stdin: {
					contents: [
						'import { PatientSchema } from "fhir-zod/r4";',
						"console.log(PatientSchema);",
					].join("\n"),
					loader: "js",
					resolveDir: packageRoot,
				},
				treeShaking: true,
				tsconfigRaw: JSON.stringify({
					compilerOptions: {
						moduleResolution: "Bundler",
					},
				}),
				write: false,
			});

			const outputFile = result.outputFiles?.[0];
			expect(outputFile).toBeDefined();

			const bundledCode = outputFile?.text ?? "";
			expect(bundledCode).toContain("PatientSchemaInternal");
			expect(bundledCode).not.toContain("AccountSchemaInternal");
			expect(bundledCode).not.toContain("ObservationSchemaInternal");
		} finally {
			rmSync(packageRoot, { force: true, recursive: true });
		}
	}, 120_000);
});
