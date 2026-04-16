import type { z } from "zod";
import type { PatchCase } from "./schema-contracts.ts";
import {
	choiceContract,
	primitiveArrayContract,
	referenceContract,
	requiredFieldContract,
	runSchemaContract,
} from "./schema-contracts.ts";

type SchemaSet = {
	AccountSchema: z.ZodTypeAny;
	BundleSchema: z.ZodTypeAny;
	ElementDefinitionSchema: z.ZodTypeAny;
	EncounterSchema: z.ZodTypeAny;
	ExtensionSchema: z.ZodTypeAny;
	MetaSchema: z.ZodTypeAny;
	ObservationSchema: z.ZodTypeAny;
	Parameters_ParameterSchema: z.ZodTypeAny;
	QuantitySchema: z.ZodTypeAny;
};

type VersionContractOptions = {
	accountStatusRequired: boolean;
	encounterClassRequired: boolean;
	encounterReferenceField: "context" | "encounter";
	encounterStatus: string;
	focusAcceptsResourceTarget: boolean;
	label: string;
	referenceTypeSupported: boolean;
};

export function runVersionSchemaContracts(
	schemas: SchemaSet,
	options: VersionContractOptions,
): void {
	runChoiceContracts(schemas, options.label);
	runPrimitiveArrayContracts(schemas, options.label);
	runReferenceContracts(schemas, options);
	runInheritanceContracts(schemas, options.label);
	runRequiredFieldContracts(schemas, options);
	runEnumBindingContracts(schemas, options);
}

function runChoiceContracts(schemas: SchemaSet, label: string): void {
	choiceContract({
		name: `${label} Observation.effective[x]`,
		schema: schemas.ObservationSchema,
		base: minimalObservation,
		valid: [
			{
				name: "effectiveDateTime",
				patch: { effectiveDateTime: "2020-01-01T00:00:00Z" },
			},
			{
				name: "effectivePeriod",
				patch: { effectivePeriod: { start: "2020-01-01" } },
			},
			{
				name: "primitive metadata companion",
				patch: {
					effectiveDateTime: "2020-01-01T00:00:00Z",
					_effectiveDateTime: { id: "effective-metadata" },
				},
			},
		],
		invalid: [
			{
				name: "two variants",
				patch: {
					effectiveDateTime: "2020-01-01T00:00:00Z",
					effectivePeriod: { start: "2020-01-01" },
				},
				messageIncludes: "effective[x]",
			},
		],
	});

	choiceContract({
		name: `${label} Observation.value[x]`,
		schema: schemas.ObservationSchema,
		base: minimalObservation,
		valid: [
			{
				name: "valueString",
				patch: { valueString: "positive" },
			},
			{
				name: "valueQuantity",
				patch: { valueQuantity: { value: 1, unit: "mg" } },
			},
			{
				name: "primitive metadata companion",
				patch: {
					valueString: "positive",
					_valueString: { id: "value-metadata" },
				},
			},
		],
		invalid: [
			{
				name: "two variants",
				patch: {
					valueString: "positive",
					valueBoolean: true,
				},
				messageIncludes: "value[x]",
			},
		],
	});

	choiceContract({
		name: `${label} Extension.value[x]`,
		schema: schemas.ExtensionSchema,
		base: minimalExtension,
		valid: [
			{
				name: "valueString",
				patch: { valueString: "hello" },
			},
			{
				name: "primitive metadata companion",
				patch: {
					valueString: "hello",
					_valueString: { id: "value-metadata" },
				},
			},
		],
		invalid: [
			{
				name: "two variants",
				patch: {
					valueString: "hello",
					valueBoolean: true,
				},
				messageIncludes: "value[x]",
			},
		],
	});

	choiceContract({
		name: `${label} Parameters_Parameter.value[x]`,
		schema: schemas.Parameters_ParameterSchema,
		base: minimalParameter,
		valid: [
			{
				name: "valueString",
				patch: { valueString: "hello" },
			},
			{
				name: "primitive metadata companion",
				patch: {
					valueString: "hello",
					_valueString: { id: "value-metadata" },
				},
			},
		],
		invalid: [
			{
				name: "two variants",
				patch: {
					valueString: "hello",
					valueBoolean: true,
				},
				messageIncludes: "value[x]",
			},
		],
	});
}

function runPrimitiveArrayContracts(schemas: SchemaSet, label: string): void {
	primitiveArrayContract({
		name: `${label} Meta.profile/_profile`,
		schema: schemas.MetaSchema,
		base: minimalMeta,
		valid: [
			{
				name: "equal value and metadata arrays",
				patch: {
					profile: ["http://example.test/fhir/StructureDefinition/a"],
					_profile: [primitiveMetadata()],
				},
			},
			{
				name: "metadata array longer than value array with content",
				patch: {
					profile: ["http://example.test/fhir/StructureDefinition/a"],
					_profile: [null, primitiveMetadata()],
				},
			},
			{
				name: "value array longer than metadata array with non-null values",
				patch: {
					profile: [
						"http://example.test/fhir/StructureDefinition/a",
						"http://example.test/fhir/StructureDefinition/b",
					],
					_profile: [null],
				},
			},
		],
		invalid: [
			{
				name: "metadata-only empty object",
				patch: { _profile: [{}] },
				messageIncludes:
					"profile[0] has neither a primitive value nor _profile[0] metadata",
				path: ["_profile", 0],
			},
			{
				name: "null value with empty metadata",
				patch: {
					profile: [null],
					_profile: [{}],
				},
				messageIncludes:
					"profile[0] has neither a primitive value nor _profile[0] metadata",
				path: ["profile", 0],
			},
		],
	});

	primitiveArrayContract({
		name: `${label} ElementDefinition.alias/_alias`,
		schema: schemas.ElementDefinitionSchema,
		base: minimalElementDefinition,
		valid: [
			{
				name: "alias value only",
				patch: { alias: ["official name"] },
			},
			{
				name: "metadata array longer than alias array with content",
				patch: {
					alias: ["official name"],
					_alias: [null, primitiveMetadata()],
				},
			},
			{
				name: "alias array longer than metadata array with non-null values",
				patch: {
					alias: ["official name", "display name"],
					_alias: [null],
				},
			},
		],
		invalid: [
			{
				name: "metadata-only empty object",
				patch: { _alias: [{}] },
				messageIncludes:
					"alias[0] has neither a primitive value nor _alias[0] metadata",
				path: ["_alias", 0],
			},
			{
				name: "null alias with empty metadata",
				patch: {
					alias: [null],
					_alias: [{}],
				},
				messageIncludes:
					"alias[0] has neither a primitive value nor _alias[0] metadata",
				path: ["alias", 0],
			},
		],
	});
}

function runReferenceContracts(
	schemas: SchemaSet,
	options: VersionContractOptions,
): void {
	const validReferenceCases: PatchCase[] = [
		{
			name: "relative allowed reference",
			patch: {
				[options.encounterReferenceField]: { reference: "Encounter/example" },
			},
		},
		{
			name: "absolute allowed FHIR URL",
			patch: {
				[options.encounterReferenceField]: {
					reference: "https://example.test/fhir/Encounter/example",
				},
			},
		},
		{
			name: "history URL",
			patch: {
				[options.encounterReferenceField]: {
					reference: "Encounter/example/_history/1",
				},
			},
		},
		{
			name: "internal reference without type",
			patch: { [options.encounterReferenceField]: { reference: "#enc1" } },
		},
		{
			name: "URN reference without type",
			patch: {
				[options.encounterReferenceField]: {
					reference: "urn:uuid:12345678-1234-1234-1234-123456789abc",
				},
			},
		},
	];

	const invalidReferenceCases: PatchCase[] = [
		{
			name: "disallowed relative reference",
			patch: {
				[options.encounterReferenceField]: { reference: "Patient/example" },
			},
			messageIncludes: `Expected ${options.encounterReferenceField} to reference one of:`,
			path: [options.encounterReferenceField, "reference"],
		},
	];

	if (options.referenceTypeSupported) {
		validReferenceCases.push(
			{
				name: "internal reference with allowed canonical type",
				patch: {
					[options.encounterReferenceField]: {
						reference: "#enc1",
						type: "http://hl7.org/fhir/StructureDefinition/Encounter",
					},
				},
			},
			{
				name: "bare allowed type without reference",
				patch: { [options.encounterReferenceField]: { type: "Encounter" } },
			},
			{
				name: "canonical allowed type without reference",
				patch: {
					[options.encounterReferenceField]: {
						type: "http://hl7.org/fhir/StructureDefinition/Encounter",
					},
				},
			},
		);

		invalidReferenceCases.push(
			{
				name: "internal reference with disallowed canonical type",
				patch: {
					[options.encounterReferenceField]: {
						reference: "#enc1",
						type: "http://hl7.org/fhir/StructureDefinition/Patient",
					},
				},
				messageIncludes: `Expected ${options.encounterReferenceField}.type to be one of:`,
				path: [options.encounterReferenceField, "type"],
			},
			{
				name: "reference/type mismatch",
				patch: {
					[options.encounterReferenceField]: {
						reference: "Encounter/example",
						type: "Patient",
					},
				},
				messageIncludes: `Reference.type and reference disagree for ${options.encounterReferenceField}`,
				path: [options.encounterReferenceField, "reference"],
			},
		);
	}

	referenceContract({
		name: `${options.label} Observation.${options.encounterReferenceField} constrained reference`,
		schema: schemas.ObservationSchema,
		base: minimalObservation,
		valid: validReferenceCases,
		invalid: invalidReferenceCases,
	});

	if (options.focusAcceptsResourceTarget) {
		referenceContract({
			name: `${options.label} Observation.focus Resource target short-circuit`,
			schema: schemas.ObservationSchema,
			base: minimalObservation,
			valid: [
				{
					name: "Patient focus",
					patch: { focus: [{ reference: "Patient/example" }] },
				},
				{
					name: "Organization focus",
					patch: { focus: [{ reference: "Organization/example" }] },
				},
				{
					name: "unrecognized type accepted because target is Resource",
					patch: {
						focus: [
							{
								reference: "Patient/example",
								type: "http://example.test/StructureDefinition/NotFHIR",
							},
						],
					},
				},
			],
		});
	}
}

function runInheritanceContracts(schemas: SchemaSet, label: string): void {
	runSchemaContract({
		name: `${label} Observation inherits DomainResource fields`,
		schema: schemas.ObservationSchema,
		base: minimalObservation,
		valid: [
			{
				name: "text and extension",
				patch: {
					text: {
						status: "generated",
						div: '<div xmlns="http://www.w3.org/1999/xhtml">Example</div>',
					},
					extension: [
						{
							url: "http://example.test/fhir/StructureDefinition/observation-note",
							valueString: "base extension",
						},
					],
				},
			},
		],
		invalid: [
			{
				name: "unknown field",
				patch: { unexpectedBaseField: true },
				messageIncludes: "Unrecognized key",
			},
		],
	});

	runSchemaContract({
		name: `${label} Bundle inherits Resource fields`,
		schema: schemas.BundleSchema,
		base: minimalBundle,
		valid: [
			{
				name: "id, meta, and language",
				patch: {
					id: "bundle-1",
					meta: {
						profile: [
							"http://example.test/fhir/StructureDefinition/bundle-profile",
						],
					},
					language: "en",
				},
			},
		],
		invalid: [
			{
				name: "unknown field",
				patch: { unexpected: true },
				messageIncludes: "Unrecognized key",
			},
		],
	});

	runSchemaContract({
		name: `${label} Quantity inherits Element fields`,
		schema: schemas.QuantitySchema,
		base: minimalQuantity,
		valid: [
			{
				name: "id, extension, and own fields",
				patch: {
					id: "quantity-1",
					extension: [
						{
							url: "http://example.test/fhir/StructureDefinition/quantity-note",
							valueString: "metadata",
						},
					],
					value: 1.23,
					unit: "mg",
				},
			},
		],
		invalid: [
			{
				name: "unknown field",
				patch: { unexpected: true },
				messageIncludes: "Unrecognized key",
			},
		],
	});
}

function runRequiredFieldContracts(
	schemas: SchemaSet,
	options: VersionContractOptions,
): void {
	requiredFieldContract({
		name: `${options.label} Observation required fields`,
		schema: schemas.ObservationSchema,
		base: minimalObservation,
		invalid: [
			{
				name: "missing status",
				omit: ["status"],
				path: ["status"],
			},
			{
				name: "missing code",
				omit: ["code"],
				path: ["code"],
			},
		],
	});

	const missingEncounterFields = [
		{
			name: "missing status",
			omit: ["status"],
			path: ["status"],
		},
	];

	if (options.encounterClassRequired) {
		missingEncounterFields.push({
			name: "missing class",
			omit: ["class"],
			path: ["class"],
		});
	}

	requiredFieldContract({
		name: `${options.label} Encounter required fields`,
		schema: schemas.EncounterSchema,
		base: () => minimalEncounter(options),
		invalid: missingEncounterFields,
	});

	if (options.accountStatusRequired) {
		requiredFieldContract({
			name: `${options.label} Account required fields`,
			schema: schemas.AccountSchema,
			base: minimalAccount,
			invalid: [
				{
					name: "missing status",
					omit: ["status"],
					path: ["status"],
				},
			],
		});
	}

	runSchemaContract({
		name: `${options.label} Encounter required backbone child`,
		schema: schemas.EncounterSchema,
		base: () => minimalEncounter(options),
		invalid: [
			{
				name: "missing location reference",
				patch: {
					location: [
						{
							status: "active",
						},
					],
				},
				pathEndsWith: ["location", 0, "location"],
			},
		],
	});
}

function runEnumBindingContracts(
	schemas: SchemaSet,
	options: VersionContractOptions,
): void {
	runSchemaContract({
		name: `${options.label} Required enum bindings`,
		schema: schemas.ObservationSchema,
		base: minimalObservation,
		invalid: [
			{
				name: "Observation invalid status",
				patch: { status: "not-a-status" },
				path: ["status"],
			},
		],
	});

	runSchemaContract({
		name: `${options.label} Encounter required enum bindings`,
		schema: schemas.EncounterSchema,
		base: () => minimalEncounter(options),
		invalid: [
			{
				name: "Encounter invalid status",
				patch: { status: "not-a-status" },
				path: ["status"],
			},
		],
	});

	runSchemaContract({
		name: `${options.label} Account enum bindings`,
		schema: schemas.AccountSchema,
		base: minimalAccount,
		invalid: [
			{
				name: "Account invalid status",
				patch: { status: "not-a-status" },
				path: ["status"],
			},
		],
	});

	runSchemaContract({
		name: `${options.label} Bundle required enum bindings`,
		schema: schemas.BundleSchema,
		base: minimalBundle,
		invalid: [
			{
				name: "Bundle invalid type",
				patch: { type: "not-a-bundle-type" },
				path: ["type"],
			},
		],
	});
}

function minimalObservation(): Record<string, unknown> {
	return {
		resourceType: "Observation",
		status: "final",
		code: { text: "Example observation" },
	};
}

function minimalExtension(): Record<string, unknown> {
	return {
		url: "http://example.test/fhir/StructureDefinition/example-extension",
	};
}

function minimalParameter(): Record<string, unknown> {
	return {
		name: "example",
	};
}

function minimalMeta(): Record<string, unknown> {
	return {};
}

function minimalElementDefinition(): Record<string, unknown> {
	return {
		path: "Patient.name",
	};
}

function minimalEncounter(
	options: VersionContractOptions,
): Record<string, unknown> {
	const encounter: Record<string, unknown> = {
		resourceType: "Encounter",
		status: options.encounterStatus,
	};

	if (options.encounterClassRequired) {
		encounter.class = { code: "AMB" };
	}

	return encounter;
}

function minimalAccount(): Record<string, unknown> {
	return {
		resourceType: "Account",
		status: "active",
	};
}

function minimalBundle(): Record<string, unknown> {
	return {
		resourceType: "Bundle",
		type: "collection",
	};
}

function minimalQuantity(): Record<string, unknown> {
	return {};
}

function primitiveMetadata(): Record<string, unknown> {
	return {
		extension: [
			{
				url: "http://example.test/fhir/StructureDefinition/primitive-note",
				valueString: "metadata only",
			},
		],
	};
}
