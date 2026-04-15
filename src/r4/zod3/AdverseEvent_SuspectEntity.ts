// Profile: http://hl7.org/fhir/StructureDefinition/AdverseEvent
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { AdverseEvent_SuspectEntity_Causality } from "./AdverseEvent_SuspectEntity_Causality";
import { AdverseEvent_SuspectEntity_CausalitySchemaInternal } from "./AdverseEvent_SuspectEntity_Causality";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Describes the entity that is suspected to have caused the adverse event. */
export interface AdverseEvent_SuspectEntity extends BackboneElement {
	/** Information on the possible cause of the event. */
	causality?: Array<AdverseEvent_SuspectEntity_Causality>;
	/** Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device. */
	instance: Reference;
}

const getAdverseEvent_SuspectEntity_CausalitySchema =
	(): z.ZodType<AdverseEvent_SuspectEntity_Causality> =>
		AdverseEvent_SuspectEntity_CausalitySchemaInternal as z.ZodType<AdverseEvent_SuspectEntity_Causality>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const AdverseEvent_SuspectEntitySchemaInternal =
	BackboneElementSchemaInternal.extend({
		causality: z
			.lazy(getAdverseEvent_SuspectEntity_CausalitySchema)
			.array()
			.optional(),
		instance: z.lazy(getReferenceSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.instance,
				"instance",
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Immunization",
					"http://hl7.org/fhir/StructureDefinition/Medication",
					"http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
					"http://hl7.org/fhir/StructureDefinition/MedicationStatement",
					"http://hl7.org/fhir/StructureDefinition/Procedure",
					"http://hl7.org/fhir/StructureDefinition/Substance",
				],
				[
					"Device",
					"Immunization",
					"Medication",
					"MedicationAdministration",
					"MedicationStatement",
					"Procedure",
					"Substance",
				],
				ctx,
			);
		});

export const AdverseEvent_SuspectEntitySchema =
	AdverseEvent_SuspectEntitySchemaInternal as z.ZodType<AdverseEvent_SuspectEntity>;
