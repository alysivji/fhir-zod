import { ElementDefinitionSchema, MetaSchema } from "fhir-zod/r4";
import {
	minimalElementDefinition,
	minimalMeta,
	primitiveMetadata,
} from "./helpers/r4-contract-fixtures.ts";
import { primitiveArrayContract } from "./helpers/schema-contracts.ts";

primitiveArrayContract({
	name: "Meta.profile/_profile",
	schema: MetaSchema,
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
	name: "ElementDefinition.alias/_alias",
	schema: ElementDefinitionSchema,
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
