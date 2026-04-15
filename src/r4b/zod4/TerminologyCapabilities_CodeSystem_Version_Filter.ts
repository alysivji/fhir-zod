// Profile: http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirCode } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Filter Properties supported. */
export interface TerminologyCapabilities_CodeSystem_Version_Filter
	extends BackboneElement {
	/** Code of the property supported. */
	code: string;
	/** Extensions for code */
	_code?: Element;
	/** Operations supported for the property. */
	op: Array<string | null>;
	/** Extensions for op */
	_op?: Array<Element | null>;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const TerminologyCapabilities_CodeSystem_Version_FilterSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: fhirCode(),
		_code: z.lazy(getElementSchema).optional(),
		op: fhirCode().nullable().array(),
		_op: z.lazy(getElementSchema).nullable().array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(record.op, record._op, "op", "_op", ctx);
		});

export const TerminologyCapabilities_CodeSystem_Version_FilterSchema =
	TerminologyCapabilities_CodeSystem_Version_FilterSchemaInternal as z.ZodType<TerminologyCapabilities_CodeSystem_Version_Filter>;
