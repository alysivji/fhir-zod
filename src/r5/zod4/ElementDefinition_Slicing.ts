// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { ElementDefinition_Slicing_Discriminator } from "./ElementDefinition_Slicing_Discriminator";
import { ElementDefinition_Slicing_DiscriminatorSchemaInternal } from "./ElementDefinition_Slicing_Discriminator";

/** Indicates that the element is sliced into a set of alternative definitions (i.e. in a structure definition, there are multiple different constraints on a single element in the base resource). Slicing can be used in any resource that has cardinality ..* on the base resource, or any resource with a choice of types. The set of slices is any elements that come after this in the element sequence that have the same path, until a shorter path occurs (the shorter path terminates the set). */
export interface ElementDefinition_Slicing extends Element {
	/** A human-readable text description of how the slicing works. If there is no discriminator, this is required to be present to provide whatever information is possible about how the slices can be differentiated. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Designates which child elements are used to discriminate between the slices when processing an instance. If one or more discriminators are provided, the value of the child elements in the instance data SHALL completely distinguish which slice the element in the resource matches based on the allowed values for those elements in each of the slices. */
	discriminator?: Array<ElementDefinition_Slicing_Discriminator>;
	/** If the matching elements have to occur in the same order as defined in the profile. */
	ordered?: boolean;
	/** Extensions for ordered */
	_ordered?: Element;
	/** Whether additional slices are allowed or not. When the slices are ordered, profile authors can also say that additional slices are only allowed at the end. */
	rules: "closed" | "open" | "openAtEnd";
	/** Extensions for rules */
	_rules?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getElementDefinition_Slicing_DiscriminatorSchema =
	(): z.ZodType<ElementDefinition_Slicing_Discriminator> =>
		ElementDefinition_Slicing_DiscriminatorSchemaInternal as z.ZodType<ElementDefinition_Slicing_Discriminator>;

/** @internal */
export const ElementDefinition_SlicingSchemaInternal =
	ElementSchemaInternal.extend({
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		discriminator: z
			.lazy(getElementDefinition_Slicing_DiscriminatorSchema)
			.array()
			.optional(),
		ordered: z.boolean().optional(),
		_ordered: z.lazy(getElementSchema).optional(),
		rules: z.enum(["closed", "open", "openAtEnd"]),
		_rules: z.lazy(getElementSchema).optional(),
	}).strict();

export const ElementDefinition_SlicingSchema =
	ElementDefinition_SlicingSchemaInternal as z.ZodType<ElementDefinition_Slicing>;
