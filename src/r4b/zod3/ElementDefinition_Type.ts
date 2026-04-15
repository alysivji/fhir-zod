// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirCanonical, fhirUri } from "../../shared/fhir-primitives-zod3";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** The data type or resource that the value of this element is permitted to be. */
export interface ElementDefinition_Type extends Element {
	/** If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle. */
	aggregation?: Array<"bundled" | "contained" | "referenced" | null>;
	/** Extensions for aggregation */
	_aggregation?: Array<Element | null>;
	/** URL of Data type or Resource that is a(or the) type used for this element. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. "string" is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only allowed in logical models. */
	code: string;
	/** Extensions for code */
	_code?: Element;
	/** Identifies a profile structure or implementation Guide that applies to the datatype this element refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the type SHALL conform to at least one profile defined in the implementation guide. */
	profile?: Array<string | null>;
	/** Extensions for profile */
	_profile?: Array<Element | null>;
	/** Used when the type is "Reference" or "canonical", and identifies a profile structure or implementation Guide that applies to the target of the reference this element refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the target resource SHALL conform to at least one profile defined in the implementation guide. */
	targetProfile?: Array<string | null>;
	/** Extensions for targetProfile */
	_targetProfile?: Array<Element | null>;
	/** Whether this reference needs to be version specific or version independent, or whether either can be used. */
	versioning?: "either" | "independent" | "specific";
	/** Extensions for versioning */
	_versioning?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ElementDefinition_TypeSchemaInternal =
	ElementSchemaInternal.extend({
		aggregation: z
			.enum(["bundled", "contained", "referenced"])
			.nullable()
			.array()
			.optional(),
		_aggregation: z.lazy(getElementSchema).nullable().array().optional(),
		code: fhirUri(),
		_code: z.lazy(getElementSchema).optional(),
		profile: fhirCanonical().nullable().array().optional(),
		_profile: z.lazy(getElementSchema).nullable().array().optional(),
		targetProfile: fhirCanonical().nullable().array().optional(),
		_targetProfile: z.lazy(getElementSchema).nullable().array().optional(),
		versioning: z.enum(["either", "independent", "specific"]).optional(),
		_versioning: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.aggregation,
				record._aggregation,
				"aggregation",
				"_aggregation",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.profile,
				record._profile,
				"profile",
				"_profile",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.targetProfile,
				record._targetProfile,
				"targetProfile",
				"_targetProfile",
				ctx,
			);
		});

export const ElementDefinition_TypeSchema =
	ElementDefinition_TypeSchemaInternal as z.ZodType<ElementDefinition_Type>;
