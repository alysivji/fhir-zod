// Profile: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Definition of an operation or a named query together with its parameters and their meaning and type. */
export interface CapabilityStatement_Rest_Operation extends BackboneElement {
	/** Where the formal definition can be found. */
	definition: Reference;
	/** The name of the operation or query. For an operation, this is the name  prefixed with $ and used in the URL. For a query, this is the name used in the _query parameter when the query is called. */
	name: string;
	/** Extensions for name */
	_name?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const CapabilityStatement_Rest_OperationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		definition: z.lazy(getReferenceSchema),
		name: fhirString(),
		_name: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.definition,
				"definition",
				["http://hl7.org/fhir/StructureDefinition/OperationDefinition"],
				["OperationDefinition"],
				ctx,
			);
		});

export const CapabilityStatement_Rest_OperationSchema =
	CapabilityStatement_Rest_OperationSchemaInternal as z.ZodType<CapabilityStatement_Rest_Operation>;
