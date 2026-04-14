// Profile: http://hl7.org/fhir/StructureDefinition/Practitioner
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The official qualifications, certifications, accreditations, training, licenses (and other types of educations/skills/capabilities) that authorize or otherwise pertain to the provision of care by the practitioner.For example, a medical license issued by a medical board of licensure authorizing the practitioner to practice medicine within a certain locality. */
export interface Practitioner_Qualification extends BackboneElement {
	/** Coded representation of the qualification. */
	code: CodeableConcept;
	/** An identifier that applies to this person's qualification. */
	identifier?: Array<Identifier>;
	/** Organization that regulates and issues the qualification. */
	issuer?: Reference;
	/** Period during which the qualification is valid. */
	period?: Period;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Practitioner_QualificationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		issuer: z.lazy(getReferenceSchema).optional(),
		period: z.lazy(getPeriodSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.issuer,
				"issuer",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
		});

export const Practitioner_QualificationSchema =
	Practitioner_QualificationSchemaInternal as z.ZodType<Practitioner_Qualification>;
