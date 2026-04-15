// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirUri } from "../../shared/fhir-primitives-zod3";
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
	/** Identifies a profile structure or implementation Guide that SHALL hold for the datatype this element refers to. Can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide. */
	profile?: string;
	/** Extensions for profile */
	_profile?: Element;
	/** Identifies a profile structure or implementation Guide that SHALL hold for the target of the reference this element refers to. Can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide. */
	targetProfile?: string;
	/** Extensions for targetProfile */
	_targetProfile?: Element;
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
		profile: fhirUri().optional(),
		_profile: z.lazy(getElementSchema).optional(),
		targetProfile: fhirUri().optional(),
		_targetProfile: z.lazy(getElementSchema).optional(),
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
		});

export const ElementDefinition_TypeSchema =
	ElementDefinition_TypeSchemaInternal as z.ZodType<ElementDefinition_Type>;
