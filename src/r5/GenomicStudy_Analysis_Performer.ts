// Profile: http://hl7.org/fhir/StructureDefinition/GenomicStudy
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

/** Performer for the analysis event. */
export interface GenomicStudy_Analysis_Performer extends BackboneElement {
	/** The organization, healthcare professional, or others who participated in performing this analysis. */
	actor?: Reference;
	/** Role of the actor for this analysis. */
	role?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const GenomicStudy_Analysis_PerformerSchemaInternal =
	BackboneElementSchemaInternal.extend({
		actor: z.lazy(getReferenceSchema).optional(),
		role: z.lazy(getCodeableConceptSchema).optional(),
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
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				],
				["Device", "Organization", "Practitioner", "PractitionerRole"],
				ctx,
			);
		});

export const GenomicStudy_Analysis_PerformerSchema =
	GenomicStudy_Analysis_PerformerSchemaInternal as z.ZodType<GenomicStudy_Analysis_Performer>;
