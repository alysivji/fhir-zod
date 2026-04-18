import { describe, expect, it } from "vitest";
import type {
	NormalizedDefinition,
	NormalizedProperty,
} from "../src/generator/model.ts";
import { buildStructureDefinitionsFromSpec } from "../src/generator/sources/structuredefinition.ts";
import { R4Release } from "../src/generator/versions.ts";
import { createSyntheticSpecPackage } from "./helpers/synthetic-spec-package.ts";

function buildSyntheticDefinitions(scopeNames: string[]) {
	const spec = createSyntheticSpecPackage();

	return buildStructureDefinitionsFromSpec({
		packageRoot: spec.packageRoot,
		release: new R4Release(),
		scopeNames,
	});
}

function requireDefinition(
	definitions: Map<string, NormalizedDefinition>,
	name: string,
): NormalizedDefinition {
	const definition = definitions.get(name);

	if (!definition) {
		throw new Error(`Expected ${name} to be normalized.`);
	}

	return definition;
}

function requireProperty(
	definition: NormalizedDefinition,
	jsonName: string,
): NormalizedProperty {
	const property = definition.properties.find(
		(candidate) => candidate.jsonName === jsonName,
	);

	if (!property) {
		throw new Error(`Expected ${definition.name}.${jsonName} property.`);
	}

	return property;
}

describe("StructureDefinition source normalizer", () => {
	it("builds root schema model inputs and expands schema dependencies", () => {
		const { definitions } = buildSyntheticDefinitions(["Patient"]);
		const patient = requireDefinition(definitions, "Patient");

		expect(patient).toMatchObject({
			baseName: "DomainResource",
			kind: "resource",
			resourceTypeLiteral: "Patient",
			sourceMetadata: {
				releaseLabel: "R4",
				sourceUrl: "https://hl7.org/fhir/R4/patient.html",
				version: "4.0.1-patient",
			},
		});
		expect(requireProperty(patient, "resourceType")).toMatchObject({
			jsonName: "resourceType",
			required: true,
			typeRef: null,
		});

		expect([...definitions.keys()].sort()).toEqual(
			expect.arrayContaining([
				"BackboneElement",
				"CodeableConcept",
				"DomainResource",
				"Patient",
				"Patient_Contact",
				"Reference",
				"Resource",
			]),
		);

		const contact = requireDefinition(definitions, "Patient_Contact");
		expect(contact).toMatchObject({
			baseName: "BackboneElement",
			description: "A contact",
			kind: "backbone",
			resourceTypeLiteral: null,
			sourceMetadata: {
				sourceUrl:
					"https://hl7.org/fhir/R4/patient-definitions.html#Patient.contact",
			},
		});
		expect(requireProperty(contact, "name")).toMatchObject({
			jsonName: "name",
			primitiveType: "string",
			required: true,
		});
		expect(requireProperty(contact, "relationship")).toMatchObject({
			isArray: true,
			jsonName: "relationship",
			typeRef: "CodeableConcept",
		});
	});

	it("models primitive companions and primitive regex metadata", () => {
		const { definitions, primitivePatterns } = buildSyntheticDefinitions([
			"Patient",
		]);
		const patient = requireDefinition(definitions, "Patient");

		expect(primitivePatterns.get("string")).toBe("[A-Z]+");
		expect(requireProperty(patient, "id")).toMatchObject({
			jsonName: "id",
			primitiveType: "id",
		});
		expect(requireProperty(patient, "_id")).toMatchObject({
			jsonName: "_id",
			isArray: false,
			typeRef: "Element",
		});
		expect(requireProperty(patient, "name")).toMatchObject({
			isArray: true,
			jsonName: "name",
			primitiveType: "string",
		});
		expect(requireProperty(patient, "_name")).toMatchObject({
			isArray: true,
			jsonName: "_name",
			typeRef: "Element",
		});
	});

	it("normalizes choices and constrained references", () => {
		const { definitions } = buildSyntheticDefinitions(["Observation"]);
		const observation = requireDefinition(definitions, "Observation");

		expect(requireProperty(observation, "valueString")).toMatchObject({
			choiceGroup: "value[x]",
			choiceVariant: "string",
			primitiveType: "string",
		});
		expect(requireProperty(observation, "_valueString")).toMatchObject({
			choiceGroup: "value[x]",
			choiceVariant: "string",
			typeRef: "Element",
		});
		expect(requireProperty(observation, "valueCodeableConcept")).toMatchObject({
			choiceGroup: "value[x]",
			choiceVariant: "CodeableConcept",
			typeRef: "CodeableConcept",
		});
		expect(requireProperty(observation, "valueReference")).toMatchObject({
			choiceGroup: "value[x]",
			choiceVariant: "Reference",
			targetProfiles: [
				"http://hl7.org/fhir/StructureDefinition/Encounter",
				"http://hl7.org/fhir/StructureDefinition/Patient",
			],
			typeRef: "Reference",
		});
		expect(
			observation.properties.filter(
				(property) => property.jsonName === "valueReference",
			),
		).toHaveLength(1);
	});

	it("preserves constrained reference target profiles on normal fields", () => {
		const { definitions } = buildSyntheticDefinitions(["Patient"]);
		const patient = requireDefinition(definitions, "Patient");

		expect(requireProperty(patient, "managingOrganization")).toMatchObject({
			targetProfiles: [
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
			],
			typeRef: "Reference",
		});
	});

	it("extracts required code enums from ValueSets and CodeSystems", () => {
		const { definitions } = buildSyntheticDefinitions([
			"Patient",
			"Observation",
		]);
		const patientStatus = requireProperty(
			requireDefinition(definitions, "Patient"),
			"status",
		);
		const observationStatus = requireProperty(
			requireDefinition(definitions, "Observation"),
			"status",
		);

		expect(patientStatus.enumValues).toEqual([
			"expanded-code",
			"imported-code",
			"inline-code",
			"nested-expanded-code",
			"system-child",
			"system-code",
			"system-parent",
		]);
		expect(observationStatus.enumValues).toEqual(patientStatus.enumValues);
		expect(
			requireProperty(requireDefinition(definitions, "Patient"), "language")
				.enumValues,
		).toBeNull();
	});

	it("preserves sorted invariants and fallback values", () => {
		const { definitions } = buildSyntheticDefinitions(["Observation"]);
		const status = requireProperty(
			requireDefinition(definitions, "Observation"),
			"status",
		);

		expect(status.invariants).toEqual([
			{
				expression: null,
				human: "",
				key: "obs-1",
				severity: "",
			},
			{
				expression: "status.exists()",
				human: "status exists",
				key: "obs-2",
				severity: "error",
			},
		]);
	});

	it("skips missing schema inputs safely", () => {
		const { definitions } = buildSyntheticDefinitions([
			"Missing",
			"Missing_Child",
			"Patient_Missing",
		]);

		expect(definitions.size).toBe(0);
	});
});
