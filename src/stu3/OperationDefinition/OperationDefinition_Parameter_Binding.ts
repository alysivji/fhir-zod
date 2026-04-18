// Profile: http://hl7.org/fhir/StructureDefinition/OperationDefinition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { fhirUri } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Binds to a value set if this parameter is coded (code, Coding, CodeableConcept). */
export interface OperationDefinition_Parameter_Binding extends BackboneElement {
	/** Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances. */
	strength: "example" | "extensible" | "preferred" | "required";
	/** Extensions for strength */
	_strength?: Element;
	/** Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used. */
	valueSetReference?: Reference;
	/** Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used. */
	valueSetUri?: string;
	/** Extensions for valueSetUri */
	_valueSetUri?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const OperationDefinition_Parameter_BindingSchemaInternal =
	BackboneElementSchemaInternal.extend({
		strength: z.enum(["example", "extensible", "preferred", "required"]),
		_strength: z.lazy(getElementSchema).optional(),
		valueSetReference: z.lazy(getReferenceSchema).optional(),
		valueSetUri: fhirUri().optional(),
		_valueSetUri: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const valueSet_x_Present = ["valueSetReference", "valueSetUri"].filter(
				(field) => record[field] !== undefined,
			);
			if (valueSet_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of valueSetReference, valueSetUri must be present for valueSet[x]",
					path: ["valueSetReference"],
				});
			}
			if (valueSet_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of valueSetReference, valueSetUri may be present for valueSet[x]",
					path: [valueSet_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.valueSetReference,
				"valueSetReference",
				["http://hl7.org/fhir/StructureDefinition/ValueSet"],
				["ValueSet"],
				ctx,
			);
		});

export const OperationDefinition_Parameter_BindingSchema =
	OperationDefinition_Parameter_BindingSchemaInternal as z.ZodType<OperationDefinition_Parameter_Binding>;
