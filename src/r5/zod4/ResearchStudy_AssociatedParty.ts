// Profile: http://hl7.org/fhir/StructureDefinition/ResearchStudy
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Sponsors, collaborators, and other parties. */
export interface ResearchStudy_AssociatedParty extends BackboneElement {
	/** A categorization other than role for the associated party. */
	classifier?: Array<CodeableConcept>;
	/** Name of associated party. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** Individual or organization associated with study (use practitionerRole to specify their organisation). */
	party?: Reference;
	/** Identifies the start date and the end date of the associated party in the role. */
	period?: Array<Period>;
	/** Type of association. */
	role: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ResearchStudy_AssociatedPartySchemaInternal =
	BackboneElementSchemaInternal.extend({
		classifier: z.lazy(getCodeableConceptSchema).array().optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		party: z.lazy(getReferenceSchema).optional(),
		period: z.lazy(getPeriodSchema).array().optional(),
		role: z.lazy(getCodeableConceptSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.party,
				"party",
				[
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				],
				["Organization", "Practitioner", "PractitionerRole"],
				ctx,
			);
		});

export const ResearchStudy_AssociatedPartySchema =
	ResearchStudy_AssociatedPartySchemaInternal as z.ZodType<ResearchStudy_AssociatedParty>;
