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

	it("leaves the bundle empty when only importing types from fhir-zod/r4", async () => {
		const { distDir, packageRoot, rootPackageJson } =
			await buildPackageFixture();
		try {
			expect(rootPackageJson.sideEffects).toBe(false);

			const r4Index = join(distDir, "r4/index.js");
			const r4Patient = join(distDir, "r4/Patient/Patient.js");
			const r4Observation = join(distDir, "r4/Observation/Observation.js");
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
						'import type { Patient } from "fhir-zod/r4/Patient";',
						"const accept = (_p: Patient) => undefined;",
						"accept({ resourceType: 'Patient' });",
					].join("\n"),
					loader: "ts",
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
			expect(bundledCode).not.toContain("PatientSchemaInternal");
			expect(bundledCode).not.toContain("AccountSchemaInternal");
			expect(bundledCode).not.toContain("ObservationSchemaInternal");
		} finally {
			rmSync(packageRoot, { force: true, recursive: true });
		}
	}, 120_000);

	it("does not pull concrete resources when importing a datatype from the version entry point", async () => {
		const { packageRoot } = await buildPackageFixture();
		try {
			const result = await build({
				bundle: true,
				external: ["zod"],
				format: "esm",
				platform: "neutral",
				stdin: {
					contents: [
						'import { CodingSchema } from "fhir-zod/r4";',
						"console.log(CodingSchema);",
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

			const bundledCode = result.outputFiles?.[0]?.text ?? "";
			expect(bundledCode).toContain("CodingSchemaInternal");
			expect(bundledCode).not.toContain("PatientSchemaInternal");
			expect(bundledCode).not.toContain("ObservationSchemaInternal");
			expect(bundledCode).not.toContain("AccountSchemaInternal");
			expect(bundledCode).not.toContain("FhirResourceSchemaInternal");
		} finally {
			rmSync(packageRoot, { force: true, recursive: true });
		}
	}, 120_000);

	it("includes the full resource dispatcher for Patient contained-resource validation", async () => {
		const { packageRoot } = await buildPackageFixture();
		try {
			const result = await build({
				bundle: true,
				external: ["zod"],
				format: "esm",
				platform: "neutral",
				stdin: {
					contents: [
						'import { PatientSchema } from "fhir-zod/r4/Patient";',
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

			const bundledCode = result.outputFiles?.[0]?.text ?? "";
			expect(bundledCode).toContain("PatientSchemaInternal");
			expect(bundledCode).toContain("ObservationSchemaInternal");
			expect(bundledCode).toContain("AccountSchemaInternal");
			expect(bundledCode).toContain("FhirResourceSchemaInternal");
			expect(bundledCode).toContain("resourceSchemas");
			expect(bundledCode).not.toContain("_registerFhirResourceSchemas");
		} finally {
			rmSync(packageRoot, { force: true, recursive: true });
		}
	}, 120_000);

	it("includes the full resource dispatcher for Bundle entry resource validation", async () => {
		const { packageRoot } = await buildPackageFixture();
		try {
			const result = await build({
				bundle: true,
				external: ["zod"],
				format: "esm",
				platform: "neutral",
				stdin: {
					contents: [
						'import { BundleSchema } from "fhir-zod/r4/Bundle";',
						"console.log(BundleSchema);",
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

			const bundledCode = result.outputFiles?.[0]?.text ?? "";
			expect(bundledCode).toContain("BundleSchemaInternal");
			expect(bundledCode).toContain("PatientSchemaInternal");
			expect(bundledCode).toContain("ObservationSchemaInternal");
			expect(bundledCode).toContain("AccountSchemaInternal");
			expect(bundledCode).toContain("FhirResourceSchemaInternal");
			expect(bundledCode).toContain("resourceSchemas");
			expect(bundledCode).not.toContain("_registerFhirResourceSchemas");
		} finally {
			rmSync(packageRoot, { force: true, recursive: true });
		}
	}, 120_000);
});
