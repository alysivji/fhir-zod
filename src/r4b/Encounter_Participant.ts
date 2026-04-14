// Profile: http://hl7.org/fhir/StructureDefinition/Encounter
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The list of people responsible for providing the service. */
export interface Encounter_Participant extends BackboneElement {
	/** Persons involved in the encounter other than the patient. */
	individual?: Reference;
	/** The period of time that the specified participant participated in the encounter. These can overlap or be sub-sets of the overall encounter's period. */
	period?: Period;
	/** Role of participant in encounter. */
	type?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Encounter_ParticipantSchemaInternal =
	BackboneElementSchemaInternal.extend({
		individual: z.lazy(getReferenceSchema).optional(),
		period: z.lazy(getPeriodSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.individual,
				"individual",
				[
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				["Practitioner", "PractitionerRole", "RelatedPerson"],
				ctx,
			);
		});

export const Encounter_ParticipantSchema =
	Encounter_ParticipantSchemaInternal as z.ZodType<Encounter_Participant>;
