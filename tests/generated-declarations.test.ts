import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

describe("generated declarations", () => {
	it("emit a type-first public surface for generated versions", () => {
		const outDir = mkdtempSync(join(tmpdir(), "fhir-zod-dts-"));

		execFileSync(
			"npx",
			[
				"tsc",
				"--noEmit",
				"false",
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

		const r4bBundleDts = readFileSync(
			join(outDir, "src", "r4b", "Bundle.d.ts"),
			"utf8",
		);
		const r4bIndexDts = readFileSync(
			join(outDir, "src", "r4b", "index.d.ts"),
			"utf8",
		);
		const r4bPatientDts = readFileSync(
			join(outDir, "src", "r4b", "Patient.d.ts"),
			"utf8",
		);
		const r4bPatientContactDts = readFileSync(
			join(outDir, "src", "r4b", "Patient_Contact.d.ts"),
			"utf8",
		);
		const r4bQuantityDts = readFileSync(
			join(outDir, "src", "r4b", "Quantity.d.ts"),
			"utf8",
		);

		expect(r4bBundleDts).toContain("export interface Bundle extends Resource");
		expect(r4bBundleDts).toContain(
			"export declare const BundleSchema: z.ZodType<Bundle",
		);
		expect(r4bPatientDts).toContain(
			"export interface Patient extends DomainResource",
		);
		expect(r4bPatientDts).not.toContain("z.output<typeof");
		expect(r4bPatientContactDts).toContain(
			"export interface Patient_Contact extends BackboneElement",
		);
		expect(r4bQuantityDts).toContain(
			"export interface Quantity extends Element",
		);
		expect(r4bIndexDts).toContain('export type { Patient } from "./Patient";');
		expect(r4bIndexDts).toContain('export { PatientSchema } from "./Patient";');
	}, 30_000);
});
