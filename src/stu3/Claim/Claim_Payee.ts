// Profile: http://hl7.org/fhir/StructureDefinition/Claim
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** The party to be reimbursed for the services. */
export interface Claim_Payee extends BackboneElement {
	/** Party to be reimbursed: Subscriber, provider, other. */
	party?: Reference;
	/** organization | patient | practitioner | relatedperson. */
	resourceType?: Coding;
	/** Type of Party to be reimbursed: Subscriber, provider, other. */
	type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Claim_PayeeSchemaInternal = BackboneElementSchemaInternal.extend({
	party: z.lazy(getReferenceSchema).optional(),
	resourceType: z.lazy(getCodingSchema).optional(),
	type: z.lazy(getCodeableConceptSchema),
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

export const Claim_PayeeSchema =
	Claim_PayeeSchemaInternal as z.ZodType<Claim_Payee>;
