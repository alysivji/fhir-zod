// Profile: http://hl7.org/fhir/StructureDefinition/AdverseEvent
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The contributing factors suspected to have increased the probability or severity of the adverse event. */
export interface AdverseEvent_ContributingFactor extends BackboneElement {
	/** The item that is suspected to have increased the probability or severity of the adverse event. */
	itemCodeableConcept?: CodeableConcept;
	/** The item that is suspected to have increased the probability or severity of the adverse event. */
	itemReference?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const AdverseEvent_ContributingFactorSchemaInternal =
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
					"http://hl7.org/fhir/StructureDefinition/AllergyIntolerance",
					"http://hl7.org/fhir/StructureDefinition/Condition",
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/DeviceUsage",
					"http://hl7.org/fhir/StructureDefinition/DocumentReference",
					"http://hl7.org/fhir/StructureDefinition/FamilyMemberHistory",
					"http://hl7.org/fhir/StructureDefinition/Immunization",
					"http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
					"http://hl7.org/fhir/StructureDefinition/MedicationStatement",
					"http://hl7.org/fhir/StructureDefinition/Observation",
					"http://hl7.org/fhir/StructureDefinition/Procedure",
				],
				[
					"AllergyIntolerance",
					"Condition",
					"Device",
					"DeviceUsage",
					"DocumentReference",
					"FamilyMemberHistory",
					"Immunization",
					"MedicationAdministration",
					"MedicationStatement",
					"Observation",
					"Procedure",
				],
				ctx,
			);
		});

export const AdverseEvent_ContributingFactorSchema =
	AdverseEvent_ContributingFactorSchemaInternal as z.ZodType<AdverseEvent_ContributingFactor>;
