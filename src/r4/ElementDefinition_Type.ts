// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

export interface ElementDefinition_Type extends Element {
	aggregation?: Array<"bundled" | "contained" | "referenced">;
	_aggregation?: Element;
	code: string;
	_code?: Element;
	profile?: Array<string>;
	_profile?: Element;
	targetProfile?: Array<string>;
	_targetProfile?: Element;
	versioning?: "either" | "independent" | "specific";
	_versioning?: Element;
}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;

/** @internal */
export const ElementDefinition_TypeSchemaInternal =
	ElementSchemaInternal.extend({
		aggregation: z
			.enum(["bundled", "contained", "referenced"])
			.array()
			.optional()
			.describe(
				"If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.",
			),
		_aggregation: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for aggregation"),
		code: z
			.string()
			.regex(/\S*/)
			.describe(
				'URL of Data type or Resource that is a(or the) type used for this element. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. "string" is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only allowed in logical models.',
			),
		_code: z.lazy(getElementSchema).optional().describe("Extensions for code"),
		profile: z
			.string()
			.regex(/\S*/)
			.array()
			.optional()
			.describe(
				"Identifies a profile structure or implementation Guide that applies to the datatype this element refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the type SHALL conform to at least one profile defined in the implementation guide.",
			),
		_profile: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for profile"),
		targetProfile: z
			.string()
			.regex(/\S*/)
			.array()
			.optional()
			.describe(
				'Used when the type is "Reference" or "canonical", and identifies a profile structure or implementation Guide that applies to the target of the reference this element refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the target resource SHALL conform to at least one profile defined in the implementation guide.',
			),
		_targetProfile: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for targetProfile"),
		versioning: z
			.enum(["either", "independent", "specific"])
			.optional()
			.describe(
				"Whether this reference needs to be version specific or version independent, or whether either can be used.",
			),
		_versioning: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for versioning"),
	}).strict();

export const ElementDefinition_TypeSchema: z.ZodType<ElementDefinition_Type> =
	ElementDefinition_TypeSchemaInternal;
