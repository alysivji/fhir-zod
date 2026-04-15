// Profile: http://hl7.org/fhir/StructureDefinition/OperationDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import { fhirCanonical } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Binds to a value set if this parameter is coded (code, Coding, CodeableConcept). */
export interface OperationDefinition_Parameter_Binding extends BackboneElement {
	/** Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances. */
	strength: "example" | "extensible" | "preferred" | "required";
	/** Extensions for strength */
	_strength?: Element;
	/** Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used. */
	valueSet: string;
	/** Extensions for valueSet */
	_valueSet?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const OperationDefinition_Parameter_BindingSchemaInternal =
	BackboneElementSchemaInternal.extend({
		strength: z.enum(["example", "extensible", "preferred", "required"]),
		_strength: z.lazy(getElementSchema).optional(),
		valueSet: fhirCanonical(),
		_valueSet: z.lazy(getElementSchema).optional(),
	}).strict();

export const OperationDefinition_Parameter_BindingSchema =
	OperationDefinition_Parameter_BindingSchemaInternal as z.ZodType<OperationDefinition_Parameter_Binding>;
