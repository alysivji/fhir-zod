import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

describe("generated declarations", () => {
	it("emit a type-first public surface for R4", () => {
		const outDir = mkdtempSync(join(tmpdir(), "fhir-zod-dts-"));

		execFileSync(
			"npx",
			[
				"tsc",
				"--emitDeclarationOnly",
				"--declaration",
				"--declarationMap",
				"false",
				"--outDir",
				outDir,
			],
			{
				cwd: process.cwd(),
				stdio: "ignore",
			},
		);

		const accountDts = readFileSync(
			join(outDir, "src", "r4", "Account.d.ts"),
			"utf8",
		);
		const bundleDts = readFileSync(
			join(outDir, "src", "r4", "Bundle.d.ts"),
			"utf8",
		);
		const encounterDts = readFileSync(
			join(outDir, "src", "r4", "Encounter.d.ts"),
			"utf8",
		);
		const indexDts = readFileSync(
			join(outDir, "src", "r4", "index.d.ts"),
			"utf8",
		);
		const observationDts = readFileSync(
			join(outDir, "src", "r4", "Observation.d.ts"),
			"utf8",
		);
		const patientContactDts = readFileSync(
			join(outDir, "src", "r4", "Patient_Contact.d.ts"),
			"utf8",
		);
		const quantityDts = readFileSync(
			join(outDir, "src", "r4", "Quantity.d.ts"),
			"utf8",
		);

		expect(accountDts).toContain(
			"export interface Account extends DomainResource",
		);
		expect(bundleDts).toContain("export interface Bundle extends Resource");
		expect(bundleDts).toContain(
			"export declare const BundleSchema: z.ZodType<Bundle",
		);
		expect(encounterDts).toContain(
			"export declare const EncounterSchema: z.ZodType<Encounter",
		);
		expect(observationDts).toContain(
			"export interface Observation extends DomainResource",
		);
		expect(observationDts).not.toContain("z.output<typeof");
		expect(patientContactDts).toContain(
			"export interface Patient_Contact extends BackboneElement",
		);
		expect(quantityDts).toContain("export interface Quantity extends Element");
		expect(indexDts).toContain('export type { Account } from "./Account";');
		expect(indexDts).toContain('export { AccountSchema } from "./Account";');
		expect(indexDts).toContain(
			'export type { Observation } from "./Observation";',
		);
		expect(indexDts).toContain(
			'export { ObservationSchema } from "./Observation";',
		);
		expect(indexDts).toContain('export type { ValueSet } from "./ValueSet";');
		expect(indexDts).toContain('export { ValueSetSchema } from "./ValueSet";');
	}, 30_000);
});
