// Profile: http://hl7.org/fhir/StructureDefinition/Consent
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirDateTime } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Whether a treatment instruction (e.g. artificial respiration: yes or no) was verified with the patient, his/her family or another authorized person. */
export interface Consent_Verification extends BackboneElement {
	/** Date(s) verification was collected. */
	verificationDate?: Array<string | null>;
	/** Extensions for verificationDate */
	_verificationDate?: Array<Element | null>;
	/** Extensible list of verification type starting with verification and re-validation. */
	verificationType?: CodeableConcept;
	/** Has the instruction been verified. */
	verified: boolean;
	/** Extensions for verified */
	_verified?: Element;
	/** The person who conducted the verification/validation of the Grantor decision. */
	verifiedBy?: Reference;
	/** Who verified the instruction (Patient, Relative or other Authorized Person). */
	verifiedWith?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Consent_VerificationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		verificationDate: fhirDateTime().nullable().array().optional(),
		_verificationDate: z.lazy(getElementSchema).nullable().array().optional(),
		verificationType: z.lazy(getCodeableConceptSchema).optional(),
		verified: z.boolean(),
		_verified: z.lazy(getElementSchema).optional(),
		verifiedBy: z.lazy(getReferenceSchema).optional(),
		verifiedWith: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.verificationDate,
				record._verificationDate,
				"verificationDate",
				"_verificationDate",
				ctx,
			);
			validateReferenceTarget(
				record.verifiedBy,
				"verifiedBy",
				[
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				],
				["Organization", "Practitioner", "PractitionerRole"],
				ctx,
			);
			validateReferenceTarget(
				record.verifiedWith,
				"verifiedWith",
				[
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				["Patient", "RelatedPerson"],
				ctx,
			);
		});

export const Consent_VerificationSchema =
	Consent_VerificationSchemaInternal as z.ZodType<Consent_Verification>;
