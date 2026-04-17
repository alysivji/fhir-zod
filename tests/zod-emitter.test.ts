import { existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
	buildRuntimeSchemas,
	writeNormalizedZodDefinitions,
} from "../src/generator/emit/zod.ts";
import type { NormalizedDefinition } from "../src/generator/model.ts";
import { buildStructureDefinitionsFromSpec } from "../src/generator/sources/structuredefinition.ts";
import { R4Release } from "../src/generator/versions.ts";
import { createSyntheticSpecPackage } from "./helpers/synthetic-spec-package.ts";

function buildSyntheticSchemaInput(): {
	definitions: Map<string, NormalizedDefinition>;
	primitivePatterns: Map<string, string>;
} {
	const spec = createSyntheticSpecPackage();

	return buildStructureDefinitionsFromSpec({
		packageRoot: spec.packageRoot,
		release: new R4Release(),
		scopeNames: [
			"Element",
			"BackboneElement",
			"Resource",
			"DomainResource",
			"CodeableConcept",
			"Reference",
			"Patient",
			"Observation",
		],
	});
}

describe("Zod emitter", () => {
	it("emits schema files, public models, choices, references, and inheritance", () => {
		const { definitions, primitivePatterns } = buildSyntheticSchemaInput();
		const outputDir = mkdtempSync(join(tmpdir(), "fhir-zod-emitter-"));
		const stalePath = join(outputDir, "Stale.ts");
		writeFileSync(stalePath, "export const stale = true;\n", "utf8");

		const files = writeNormalizedZodDefinitions({
			definitions,
			enableFhirResourceValidation: true,
			generatedAt: "2026-04-16T00:00:00.000Z",
			outputDir,
			primitivePatterns,
			prune: true,
		});

		expect(files.map((file) => file.split("/").at(-1)).sort()).toEqual(
			expect.arrayContaining([
				"BackboneElement.ts",
				"CodeableConcept.ts",
				"DomainResource.ts",
				"Element.ts",
				"_fhirResourceSchema.ts",
				"Observation.ts",
				"Patient.ts",
				"Patient_Contact.ts",
				"Reference.ts",
				"Resource.ts",
				"index.ts",
			]),
		);
		expect(existsSync(stalePath)).toBe(false);

		const index = readFileSync(join(outputDir, "index.ts"), "utf8");
		const fhirResource = readFileSync(
			join(outputDir, "_fhirResourceSchema.ts"),
			"utf8",
		);
		const domainResource = readFileSync(
			join(outputDir, "DomainResource.ts"),
			"utf8",
		);
		const patient = readFileSync(join(outputDir, "Patient.ts"), "utf8");
		const observation = readFileSync(join(outputDir, "Observation.ts"), "utf8");
		const contact = readFileSync(join(outputDir, "Patient_Contact.ts"), "utf8");

		expect(index).toContain('export type { Patient } from "./Patient";');
		expect(index).toContain('export { PatientSchema } from "./Patient";');
		expect(index).toContain(
			'import type { FhirResource as FhirResourceType } from "./_fhirResourceSchema";',
		);
		expect(index).toContain("export type FhirResource = FhirResourceType;");
		expect(index).toContain("_registerFhirResourceSchemas");
		expect(fhirResource).toContain("export type FhirResource =");
		expect(fhirResource).toContain("export const FhirResourceSchemaInternal");
		expect(fhirResource).not.toContain(["Nested", "Resource"].join(""));
		expect(domainResource).toContain("contained?: Array<FhirResource>;");
		expect(domainResource).toContain("z.lazy(getFhirResourceSchema)");
		expect(patient).toContain(
			"export interface Patient extends DomainResource",
		);
		expect(patient).toContain("export const PatientSchemaInternal");
		expect(patient).toContain("export const PatientSchema =");
		expect(patient).toContain("name?: Array<string | null>;");
		expect(patient).toContain("_name?: Array<Element | null>;");
		expect(patient).toContain("validatePrimitiveArrayPair");
		expect(patient).toContain("validateReferenceTarget");
		expect(patient).toContain(
			'"http://hl7.org/fhir/StructureDefinition/Organization"',
		);
		expect(patient).toContain(
			'"http://hl7.org/fhir/StructureDefinition/Patient"',
		);
		expect(patient).toContain('"Organization"');

		expect(observation).toContain("valueString?: string;");
		expect(observation).toContain("_valueString?: Element;");
		expect(observation).toContain("valueCodeableConcept?: CodeableConcept;");
		expect(observation).toContain("valueReference?: Reference;");
		expect(observation).toContain("Only one of valueCodeableConcept");
		expect(observation).toContain("validateReferenceTarget");
		expect(observation).toContain('"Encounter"');

		expect(contact).toContain(
			"export interface Patient_Contact extends BackboneElement",
		);
		expect(contact).toContain("BackboneElementSchemaInternal.extend");
	});

	it("falls back to flattened schemas when runtime inheritance would cycle", () => {
		const { definitions, primitivePatterns } = buildSyntheticSchemaInput();
		const outputDir = mkdtempSync(join(tmpdir(), "fhir-zod-emitter-cycle-"));
		const patient = definitions.get("Patient");
		const domainResource = definitions.get("DomainResource");

		if (!patient || !domainResource) {
			throw new Error(
				"Synthetic definitions did not include Patient base graph.",
			);
		}

		definitions.set("DomainResource", {
			...domainResource,
			properties: [
				...domainResource.properties,
				{
					binding: null,
					choiceGroup: null,
					choiceVariant: null,
					description: "Cycle back to Patient",
					enumValues: null,
					fhirPath: "DomainResource.containedPatient",
					invariants: [],
					isArray: false,
					jsonName: "containedPatient",
					max: "1",
					min: 0,
					primitiveType: null,
					required: false,
					targetProfiles: [],
					typeRef: "Patient",
				},
			],
		});

		writeNormalizedZodDefinitions({
			definitions,
			generatedAt: "2026-04-16T00:00:00.000Z",
			outputDir,
			primitivePatterns,
			prune: true,
		});

		const patientContent = readFileSync(join(outputDir, "Patient.ts"), "utf8");
		expect(patientContent).toContain(
			"export interface Patient extends DomainResource",
		);
		expect(patientContent).toContain("export const PatientSchemaInternal = z");
		expect(patientContent).not.toContain(
			"PatientSchemaInternal = DomainResourceSchemaInternal.extend",
		);
	});

	it("builds runtime schemas that enforce schema semantics", () => {
		const { definitions, primitivePatterns } = buildSyntheticSchemaInput();
		const schemas = buildRuntimeSchemas(definitions, primitivePatterns);

		expect(
			schemas.Patient.safeParse({
				managingOrganization: {
					reference: "Organization/example",
				},
				name: ["ALICE"],
				resourceType: "Patient",
				status: "inline-code",
			}).success,
		).toBe(true);
		expect(
			schemas.Patient.safeParse({
				managingOrganization: {
					reference: "Device/example",
				},
				resourceType: "Patient",
				status: "inline-code",
			}).success,
		).toBe(false);
		expect(
			schemas.Observation.safeParse({
				resourceType: "Observation",
				status: "system-child",
				valueCodeableConcept: {},
				valueString: "abc",
			}).success,
		).toBe(false);
		expect(
			schemas.Patient.safeParse({
				resourceType: "Patient",
				status: "not-allowed",
			}).success,
		).toBe(false);
	});
});
