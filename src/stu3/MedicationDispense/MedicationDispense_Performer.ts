// Profile: http://hl7.org/fhir/StructureDefinition/MedicationDispense
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Indicates who or what performed the event.  It should be assumed that the performer is the dispenser of the medication. */
export interface MedicationDispense_Performer extends BackboneElement {
	/** The device, practitioner, etc. who performed the action.  It should be assumed that the actor is the dispenser of the medication. */
	actor: Reference;
	/** The organization the device or practitioner was acting on behalf of. */
	onBehalfOf?: Reference;
}

const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicationDispense_PerformerSchemaInternal =
	BackboneElementSchemaInternal.extend({
		actor: z.lazy(getReferenceSchema),
		onBehalfOf: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.actor,
				"actor",
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				["Device", "Organization", "Patient", "Practitioner", "RelatedPerson"],
				ctx,
			);
			validateReferenceTarget(
				record.onBehalfOf,
				"onBehalfOf",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
		});

export const MedicationDispense_PerformerSchema =
	MedicationDispense_PerformerSchemaInternal as z.ZodType<MedicationDispense_Performer>;
