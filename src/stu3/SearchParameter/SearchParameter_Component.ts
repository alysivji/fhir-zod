// Profile: http://hl7.org/fhir/StructureDefinition/SearchParameter
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Used to define the parts of a composite search parameter. */
export interface SearchParameter_Component extends BackboneElement {
	/** The definition of the search parameter that describes this part. */
	definition: Reference;
	/** A sub-expression that defines how to extract values for this component from the output of the main SearchParameter.expression. */
	expression: string;
	/** Extensions for expression */
	_expression?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const SearchParameter_ComponentSchemaInternal =
	BackboneElementSchemaInternal.extend({
		definition: z.lazy(getReferenceSchema),
		expression: fhirString(),
		_expression: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.definition,
				"definition",
				["http://hl7.org/fhir/StructureDefinition/SearchParameter"],
				["SearchParameter"],
				ctx,
			);
		});

export const SearchParameter_ComponentSchema =
	SearchParameter_ComponentSchemaInternal as z.ZodType<SearchParameter_Component>;
