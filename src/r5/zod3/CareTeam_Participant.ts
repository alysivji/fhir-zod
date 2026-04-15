// Profile: http://hl7.org/fhir/StructureDefinition/CareTeam
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { Timing } from "./Timing";
import { TimingSchemaInternal } from "./Timing";

/** Identifies all people and organizations who are expected to be involved in the care team. */
export interface CareTeam_Participant extends BackboneElement {
	/** When the member is generally available within this care team. */
	coveragePeriod?: Period;
	/** When the member is generally available within this care team. */
	coverageTiming?: Timing;
	/** The specific person or organization who is participating/expected to participate in the care team. */
	member?: Reference;
	/** The organization of the practitioner. */
	onBehalfOf?: Reference;
	/** Indicates specific responsibility of an individual within the care team, such as "Primary care physician", "Trained social worker counselor", "Caregiver", etc. */
	role?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const CareTeam_ParticipantSchemaInternal =
	BackboneElementSchemaInternal.extend({
		coveragePeriod: z.lazy(getPeriodSchema).optional(),
		coverageTiming: z.lazy(getTimingSchema).optional(),
		member: z.lazy(getReferenceSchema).optional(),
		onBehalfOf: z.lazy(getReferenceSchema).optional(),
		role: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const coverage_x_Present = ["coveragePeriod", "coverageTiming"].filter(
				(field) => record[field] !== undefined,
			);
			if (coverage_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of coveragePeriod, coverageTiming may be present for coverage[x]",
					path: [coverage_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.member,
				"member",
				[
					"http://hl7.org/fhir/StructureDefinition/CareTeam",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				[
					"CareTeam",
					"Organization",
					"Patient",
					"Practitioner",
					"PractitionerRole",
					"RelatedPerson",
				],
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

export const CareTeam_ParticipantSchema =
	CareTeam_ParticipantSchemaInternal as z.ZodType<CareTeam_Participant>;
