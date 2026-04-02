// Profile: http://hl7.org/fhir/StructureDefinition/VerificationResult
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import { fhirDate } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { Signature } from "./Signature";
import { SignatureSchemaInternal } from "./Signature";

/** Information about the entity attesting to information. */
export interface VerificationResult_Attestation extends BackboneElement {
	/** The method by which attested information was submitted/retrieved (manual; API; Push). */
	communicationMethod?: CodeableConcept;
	/** The date the information was attested to. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** When the who is asserting on behalf of another (organization or individual). */
	onBehalfOf?: Reference;
	/** A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source. */
	proxyIdentityCertificate?: string;
	/** Extensions for proxyIdentityCertificate */
	_proxyIdentityCertificate?: Element;
	/** Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source. */
	proxySignature?: Signature;
	/** A digital identity certificate associated with the attestation source. */
	sourceIdentityCertificate?: string;
	/** Extensions for sourceIdentityCertificate */
	_sourceIdentityCertificate?: Element;
	/** Signed assertion by the attestation source that they have attested to the information. */
	sourceSignature?: Signature;
	/** The individual or organization attesting to information. */
	who?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getSignatureSchema = (): z.ZodType<Signature> =>
	SignatureSchemaInternal as z.ZodType<Signature>;

/** @internal */
export const VerificationResult_AttestationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		communicationMethod: z.lazy(getCodeableConceptSchema).optional(),
		date: fhirDate().optional(),
		_date: z.lazy(getElementSchema).optional(),
		onBehalfOf: z.lazy(getReferenceSchema).optional(),
		proxyIdentityCertificate: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_proxyIdentityCertificate: z.lazy(getElementSchema).optional(),
		proxySignature: z.lazy(getSignatureSchema).optional(),
		sourceIdentityCertificate: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_sourceIdentityCertificate: z.lazy(getElementSchema).optional(),
		sourceSignature: z.lazy(getSignatureSchema).optional(),
		who: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.onBehalfOf,
				"onBehalfOf",
				[
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				],
				["Organization", "Practitioner", "PractitionerRole"],
				ctx,
			);
			validateReferenceTarget(
				record.who,
				"who",
				[
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				],
				["Organization", "Practitioner", "PractitionerRole"],
				ctx,
			);
		});

export const VerificationResult_AttestationSchema =
	VerificationResult_AttestationSchemaInternal as z.ZodType<VerificationResult_Attestation>;
