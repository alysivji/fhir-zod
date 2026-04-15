// Profile: http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The members of the team who provided the overall service as well as their role and whether responsible and qualifications. */
export interface ExplanationOfBenefit_CareTeam extends BackboneElement {
	/** The members of the team who provided the overall service. */
	provider: Reference;
	/** The qualification which is applicable for this service. */
	qualification?: CodeableConcept;
	/** The practitioner who is billing and responsible for the claimed services rendered to the patient. */
	responsible?: boolean;
	/** Extensions for responsible */
	_responsible?: Element;
	/** The lead, assisting or supervising practitioner and their discipline if a multidisiplinary team. */
	role?: CodeableConcept;
	/** Sequence of careteam which serves to order and provide a link. */
	sequence: number;
	/** Extensions for sequence */
	_sequence?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ExplanationOfBenefit_CareTeamSchemaInternal =
	BackboneElementSchemaInternal.extend({
		provider: z.lazy(getReferenceSchema),
		qualification: z.lazy(getCodeableConceptSchema).optional(),
		responsible: z.boolean().optional(),
		_responsible: z.lazy(getElementSchema).optional(),
		role: z.lazy(getCodeableConceptSchema).optional(),
		sequence: z.number().int().positive(),
		_sequence: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.provider,
				"provider",
				["http://hl7.org/fhir/StructureDefinition/Practitioner"],
				["Practitioner"],
				ctx,
			);
		});

export const ExplanationOfBenefit_CareTeamSchema =
	ExplanationOfBenefit_CareTeamSchemaInternal as z.ZodType<ExplanationOfBenefit_CareTeam>;
