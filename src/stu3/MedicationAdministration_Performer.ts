// Profile: http://hl7.org/fhir/StructureDefinition/MedicationAdministration
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The individual who was responsible for giving the medication to the patient. */
export interface MedicationAdministration_Performer extends BackboneElement {
	/** The device, practitioner, etc. who performed the action. */
	actor: Reference;
	/** The organization the device or practitioner was acting on behalf of. */
	onBehalfOf?: Reference;
}

const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicationAdministration_PerformerSchemaInternal =
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
				["http://hl7.org/fhir/StructureDefinition/Practitioner"],
				["Practitioner"],
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

export const MedicationAdministration_PerformerSchema =
	MedicationAdministration_PerformerSchemaInternal as z.ZodType<MedicationAdministration_Performer>;
