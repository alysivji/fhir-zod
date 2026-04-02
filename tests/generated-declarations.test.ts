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

		const patientDts = readFileSync(
			join(outDir, "src", "r4", "Patient.d.ts"),
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
		const indexDts = readFileSync(
			join(outDir, "src", "r4", "index.d.ts"),
			"utf8",
		);

		expect(patientDts).toContain("export interface Patient extends DomainResource");
		expect(patientDts).toContain(
			"export declare const PatientSchema: z.ZodType<Patient",
		);
		expect(patientDts).not.toContain("z.output<typeof");
		expect(patientContactDts).toContain(
			"export interface Patient_Contact extends BackboneElement",
		);
		expect(quantityDts).toContain("export interface Quantity extends Element");
		expect(indexDts).toContain('export type { Patient } from "./Patient";');
		expect(indexDts).toContain('export { PatientSchema } from "./Patient";');
	});
});
