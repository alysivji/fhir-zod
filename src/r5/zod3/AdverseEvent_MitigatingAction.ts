// Profile: http://hl7.org/fhir/StructureDefinition/AdverseEvent
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The ameliorating action taken after the adverse event occured in order to reduce the extent of harm. */
export interface AdverseEvent_MitigatingAction extends BackboneElement {
	/** The ameliorating action taken after the adverse event occured in order to reduce the extent of harm. */
	itemCodeableConcept?: CodeableConcept;
	/** The ameliorating action taken after the adverse event occured in order to reduce the extent of harm. */
	itemReference?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const AdverseEvent_MitigatingActionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		itemCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		itemReference: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const item_x_Present = ["itemCodeableConcept", "itemReference"].filter(
				(field) => record[field] !== undefined,
			);
			if (item_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of itemCodeableConcept, itemReference must be present for item[x]",
					path: ["itemCodeableConcept"],
				});
			}
			if (item_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of itemCodeableConcept, itemReference may be present for item[x]",
					path: [item_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.itemReference,
				"itemReference",
				[
					"http://hl7.org/fhir/StructureDefinition/DocumentReference",
					"http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
					"http://hl7.org/fhir/StructureDefinition/MedicationRequest",
					"http://hl7.org/fhir/StructureDefinition/Procedure",
				],
				[
					"DocumentReference",
					"MedicationAdministration",
					"MedicationRequest",
					"Procedure",
				],
				ctx,
			);
		});

export const AdverseEvent_MitigatingActionSchema =
	AdverseEvent_MitigatingActionSchemaInternal as z.ZodType<AdverseEvent_MitigatingAction>;
