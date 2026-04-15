// Profile: http://hl7.org/fhir/StructureDefinition/DiagnosticReport
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

/** A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest). */
export interface DiagnosticReport_Image extends BackboneElement {
	/** A comment about the image. Typically, this is used to provide an explanation for why the image is included, or to draw the viewer's attention to important features. */
	comment?: string;
	/** Extensions for comment */
	_comment?: Element;
	/** Reference to the image source. */
	link: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DiagnosticReport_ImageSchemaInternal =
	BackboneElementSchemaInternal.extend({
		comment: fhirString().optional(),
		_comment: z.lazy(getElementSchema).optional(),
		link: z.lazy(getReferenceSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.link,
				"link",
				["http://hl7.org/fhir/StructureDefinition/Media"],
				["Media"],
				ctx,
			);
		});

export const DiagnosticReport_ImageSchema =
	DiagnosticReport_ImageSchemaInternal as z.ZodType<DiagnosticReport_Image>;
