// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:26:21.962Z

import * as z from "zod";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** The data type or resource that the value of this element is permitted to be. */
export interface ElementDefinition_Type extends Element {
	/** If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle. */
	aggregation?: Array<"bundled" | "contained" | "referenced">;
	/** Extensions for aggregation */
	_aggregation?: Array<Element>;
	/** URL of Data type or Resource that is a(or the) type used for this element. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. "string" is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only allowed in logical models. */
	code: string;
	/** Extensions for code */
	_code?: Element;
	/** Identifies a profile structure or implementation Guide that applies to the datatype this element refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the type SHALL conform to at least one profile defined in the implementation guide. */
	profile?: Array<string>;
	/** Extensions for profile */
	_profile?: Array<Element>;
	/** Used when the type is "Reference" or "canonical", and identifies a profile structure or implementation Guide that applies to the target of the reference this element refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the target resource SHALL conform to at least one profile defined in the implementation guide. */
	targetProfile?: Array<string>;
	/** Extensions for targetProfile */
	_targetProfile?: Array<Element>;
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
			.array()
			.optional(),
		_aggregation: z.lazy(getElementSchema).array().optional(),
		code: z.string().regex(/\S*/),
		_code: z.lazy(getElementSchema).optional(),
		profile: z.string().regex(/\S*/).array().optional(),
		_profile: z.lazy(getElementSchema).array().optional(),
		targetProfile: z.string().regex(/\S*/).array().optional(),
		_targetProfile: z.lazy(getElementSchema).array().optional(),
		versioning: z.enum(["either", "independent", "specific"]).optional(),
		_versioning: z.lazy(getElementSchema).optional(),
	}).strict();

export const ElementDefinition_TypeSchema =
	ElementDefinition_TypeSchemaInternal as z.ZodType<ElementDefinition_Type>;
