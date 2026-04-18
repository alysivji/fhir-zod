// Profile: http://hl7.org/fhir/StructureDefinition/Procedure
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure. */
export interface Procedure_FocalDevice extends BackboneElement {
	/** The kind of change that happened to the device during the procedure. */
	action?: CodeableConcept;
	/** The device that was manipulated (changed) during the procedure. */
	manipulated: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Procedure_FocalDeviceSchemaInternal =
	BackboneElementSchemaInternal.extend({
		action: z.lazy(getCodeableConceptSchema).optional(),
		manipulated: z.lazy(getReferenceSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.manipulated,
				"manipulated",
				["http://hl7.org/fhir/StructureDefinition/Device"],
				["Device"],
				ctx,
			);
		});

export const Procedure_FocalDeviceSchema =
	Procedure_FocalDeviceSchemaInternal as z.ZodType<Procedure_FocalDevice>;
