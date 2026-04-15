// Profile: http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T01:26:20.392Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The party to be reimbursed for the services. */
export interface ExplanationOfBenefit_Payee extends BackboneElement {
	/** Party to be reimbursed: Subscriber, provider, other. */
	party?: Reference;
	/** organization | patient | practitioner | relatedperson. */
	resourceType?: CodeableConcept;
	/** Type of Party to be reimbursed: Subscriber, provider, other. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ExplanationOfBenefit_PayeeSchemaInternal =
	BackboneElementSchemaInternal.extend({
		party: z.lazy(getReferenceSchema).optional(),
		resourceType: z.lazy(getCodeableConceptSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.party,
				"party",
				[
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				["Organization", "Patient", "Practitioner", "RelatedPerson"],
				ctx,
			);
		});

export const ExplanationOfBenefit_PayeeSchema =
	ExplanationOfBenefit_PayeeSchemaInternal as z.ZodType<ExplanationOfBenefit_Payee>;
