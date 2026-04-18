import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

// Full-project declaration emit can run close to Vitest's default timeout on CI.
const DECLARATION_EMIT_TIMEOUT_MS = 120_000;

describe("generated declarations", () => {
	it(
		"emit a type-first public surface for generated versions",
		() => {
			const outDir = mkdtempSync(join(tmpdir(), "fhir-zod-dts-"));

			execFileSync(
				process.execPath,
				[
					"--max-old-space-size=8192",
					"./node_modules/typescript/bin/tsc",
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
				join(outDir, "src", "r4", "Account", "Account.d.ts"),
				"utf8",
			);
			const accountIndexDts = readFileSync(
				join(outDir, "src", "r4", "Account", "index.d.ts"),
				"utf8",
			);
			const bundleDts = readFileSync(
				join(outDir, "src", "r4", "Bundle", "Bundle.d.ts"),
				"utf8",
			);
			const encounterDts = readFileSync(
				join(outDir, "src", "r4", "Encounter", "Encounter.d.ts"),
				"utf8",
			);
			const indexDts = readFileSync(
				join(outDir, "src", "r4", "index.d.ts"),
				"utf8",
			);
			const observationDts = readFileSync(
				join(outDir, "src", "r4", "Observation", "Observation.d.ts"),
				"utf8",
			);
			const patientContactDts = readFileSync(
				join(outDir, "src", "r4", "Patient", "Patient_Contact.d.ts"),
				"utf8",
			);
			const patientIndexDts = readFileSync(
				join(outDir, "src", "r4", "Patient", "index.d.ts"),
				"utf8",
			);
			const quantityDts = readFileSync(
				join(outDir, "src", "r4", "Quantity.d.ts"),
				"utf8",
			);

			expect(accountDts).toContain(
				"export interface Account extends DomainResource",
			);
			expect(accountIndexDts).toContain(
				'export type { Account } from "./Account";',
			);
			expect(accountIndexDts).toContain(
				'export { AccountSchema } from "./Account";',
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
			expect(patientIndexDts).toContain(
				'export type { Patient } from "./Patient";',
			);
			expect(patientIndexDts).toContain(
				'export { PatientSchema } from "./Patient";',
			);
			expect(quantityDts).toContain(
				"export interface Quantity extends Element",
			);
			expect(indexDts).toContain('export type { Quantity } from "./Quantity";');
			expect(indexDts).not.toContain("export type { Account }");
			expect(indexDts).not.toContain("export { AccountSchema }");
			expect(indexDts).not.toContain("export type { Observation }");
			expect(indexDts).not.toContain("export { ObservationSchema }");
			expect(indexDts).not.toContain("export type { Patient } from");
			expect(indexDts).not.toContain("export { PatientSchema }");

			const r4bBundleDts = readFileSync(
				join(outDir, "src", "r4b", "Bundle", "Bundle.d.ts"),
				"utf8",
			);
			const r4bIndexDts = readFileSync(
				join(outDir, "src", "r4b", "index.d.ts"),
				"utf8",
			);
			const r4bPatientDts = readFileSync(
				join(outDir, "src", "r4b", "Patient", "Patient.d.ts"),
				"utf8",
			);
			const r4bPatientContactDts = readFileSync(
				join(outDir, "src", "r4b", "Patient", "Patient_Contact.d.ts"),
				"utf8",
			);
			const r4bPatientIndexDts = readFileSync(
				join(outDir, "src", "r4b", "Patient", "index.d.ts"),
				"utf8",
			);
			const r4bQuantityDts = readFileSync(
				join(outDir, "src", "r4b", "Quantity.d.ts"),
				"utf8",
			);
			const r4bTimingDts = readFileSync(
				join(outDir, "src", "r4b", "Timing.d.ts"),
				"utf8",
			);

			expect(r4bBundleDts).toContain(
				"export interface Bundle extends Resource",
			);
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
			expect(r4bTimingDts).toContain("event?: Array<string | null>;");
			expect(r4bTimingDts).toContain("_event?: Array<Element | null>;");
			expect(r4bPatientIndexDts).toContain(
				'export type { Patient } from "./Patient";',
			);
			expect(r4bPatientIndexDts).toContain(
				'export { PatientSchema } from "./Patient";',
			);
			expect(r4bIndexDts).not.toContain("export type { Patient } from");
			expect(r4bIndexDts).not.toContain("export { PatientSchema }");

			const stu3BundleDts = readFileSync(
				join(outDir, "src", "stu3", "Bundle", "Bundle.d.ts"),
				"utf8",
			);
			const stu3IndexDts = readFileSync(
				join(outDir, "src", "stu3", "index.d.ts"),
				"utf8",
			);
			const stu3PatientDts = readFileSync(
				join(outDir, "src", "stu3", "Patient", "Patient.d.ts"),
				"utf8",
			);
			const stu3PatientContactDts = readFileSync(
				join(outDir, "src", "stu3", "Patient", "Patient_Contact.d.ts"),
				"utf8",
			);
			const stu3PatientIndexDts = readFileSync(
				join(outDir, "src", "stu3", "Patient", "index.d.ts"),
				"utf8",
			);
			const stu3QuantityDts = readFileSync(
				join(outDir, "src", "stu3", "Quantity.d.ts"),
				"utf8",
			);

			expect(stu3BundleDts).toContain(
				"export interface Bundle extends Resource",
			);
			expect(stu3BundleDts).toContain(
				"export declare const BundleSchema: z.ZodType<Bundle",
			);
			expect(stu3PatientDts).toContain(
				"export interface Patient extends DomainResource",
			);
			expect(stu3PatientDts).not.toContain("z.output<typeof");
			expect(stu3PatientContactDts).toContain(
				"export interface Patient_Contact extends BackboneElement",
			);
			expect(stu3QuantityDts).toContain(
				"export interface Quantity extends Element",
			);
			expect(stu3PatientIndexDts).toContain(
				'export type { Patient } from "./Patient";',
			);
			expect(stu3PatientIndexDts).toContain(
				'export { PatientSchema } from "./Patient";',
			);
			expect(stu3IndexDts).not.toContain("export type { Patient } from");
			expect(stu3IndexDts).not.toContain("export { PatientSchema }");
		},
		DECLARATION_EMIT_TIMEOUT_MS,
	);
});
