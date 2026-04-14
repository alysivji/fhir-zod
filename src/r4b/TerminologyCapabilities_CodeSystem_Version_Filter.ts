// Profile: http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { fhirCode } from "../shared/fhir-primitives";
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
	op: Array<string>;
	/** Extensions for op */
	_op?: Array<Element>;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const TerminologyCapabilities_CodeSystem_Version_FilterSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: fhirCode(),
		_code: z.lazy(getElementSchema).optional(),
		op: fhirCode().array(),
		_op: z.lazy(getElementSchema).array().optional(),
	}).strict();

export const TerminologyCapabilities_CodeSystem_Version_FilterSchema =
	TerminologyCapabilities_CodeSystem_Version_FilterSchemaInternal as z.ZodType<TerminologyCapabilities_CodeSystem_Version_Filter>;
