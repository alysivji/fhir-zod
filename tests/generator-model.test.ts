import { describe, expect, it } from "vitest";
import {
	choiceSuffixForType,
	definitionNameToFhirPath,
	fhirPathToDefinitionName,
	inferChoiceMetadata,
	isPrimitiveType,
	type NormalizedDefinition,
	type NormalizedProperty,
	normalizeDefinitionName,
	normalizeTargetProfiles,
	normalizeValue,
	pascalCase,
	primitiveRuntimeKind,
	schemaExportName,
	schemaInternalName,
	sortDefinitions,
	sortProperties,
	uncapitalize,
} from "../src/generator/model.ts";

function property(jsonName: string): NormalizedProperty {
	return {
		binding: null,
		choiceGroup: null,
		choiceVariant: null,
		description: null,
		enumValues: null,
		fhirPath: `Patient.${jsonName}`,
		invariants: [],
		isArray: false,
		jsonName,
		max: "1",
		min: 0,
		primitiveType: null,
		required: false,
		targetProfiles: [],
		typeRef: "string",
	};
}

function definition(name: string): NormalizedDefinition {
	return {
		baseName: null,
		description: null,
		kind: "resource",
		name,
		notes: [],
		properties: [],
		resourceTypeLiteral: name,
		sourceMetadata: {
			profileUrl: null,
			releaseLabel: null,
			version: null,
		},
	};
}

describe("generator model helpers", () => {
	it("sorts definitions and primitive companion properties deterministically", () => {
		expect(
			sortDefinitions([definition("Patient"), definition("Account")]),
		).toEqual([definition("Account"), definition("Patient")]);

		expect(
			sortProperties([
				property("_profile"),
				property("status"),
				property("profile"),
				property("_alias"),
				property("alias"),
			]).map((item) => item.jsonName),
		).toEqual(["alias", "_alias", "profile", "_profile", "status"]);
	});

	it("classifies primitive types and runtime kinds", () => {
		expect(isPrimitiveType("boolean")).toBe(true);
		expect(isPrimitiveType("Reference")).toBe(false);
		expect(isPrimitiveType(null)).toBe(false);
		expect(primitiveRuntimeKind("boolean")).toBe("boolean");
		expect(primitiveRuntimeKind("integer64")).toBe("string");
		expect(primitiveRuntimeKind("decimal")).toBe("number");
		expect(primitiveRuntimeKind("Reference")).toBeNull();
	});

	it("infers choice metadata for primitive suffixes and ignores underscore companions", () => {
		expect(
			inferChoiceMetadata("valueDateTime", ["valueString", "status"]),
		).toEqual({
			choiceGroup: "value[x]",
			choiceVariant: "dateTime",
		});
		expect(inferChoiceMetadata("_valueDateTime", ["valueString"])).toBeNull();
		expect(inferChoiceMetadata("valueUnknown", ["valueString"])).toBeNull();
		expect(inferChoiceMetadata("valueString", ["status"])).toBeNull();
	});

	it("normalizes names, paths, profiles, and simple casing", () => {
		expect(choiceSuffixForType("dateTime")).toBe("DateTime");
		expect(choiceSuffixForType("custom-type")).toBe("Custom-type");
		expect(definitionNameToFhirPath("Patient_Contact_Address")).toBe(
			"Patient.contact.address",
		);
		expect(fhirPathToDefinitionName("Observation.value[x]")).toBe(
			"Observation_Value",
		);
		expect(normalizeDefinitionName("Patient.schema.json")).toBe("Patient");
		expect(schemaExportName("Patient")).toBe("PatientSchema");
		expect(schemaInternalName("Patient")).toBe("PatientSchemaInternal");
		expect(normalizeTargetProfiles(undefined)).toEqual([]);
		expect(normalizeTargetProfiles("Patient")).toEqual(["Patient"]);
		expect(normalizeTargetProfiles(["Observation", "Patient"])).toEqual([
			"Observation",
			"Patient",
		]);
		expect(normalizeValue(undefined)).toBeNull();
		expect(normalizeValue("x")).toBe("x");
		expect(pascalCase("patient")).toBe("Patient");
		expect(uncapitalize("Patient")).toBe("patient");
	});
});
