// Profile: http://hl7.org/fhir/StructureDefinition/VerificationResult
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { Signature } from "./Signature";
import { SignatureSchemaInternal } from "./Signature";

/** Information about the entity validating information. */
export interface VerificationResult_Validator extends BackboneElement {
	/** Signed assertion by the validator that they have validated the information. */
	attestationSignature?: Signature;
	/** A digital identity certificate associated with the validator. */
	identityCertificate?: string;
	/** Extensions for identityCertificate */
	_identityCertificate?: Element;
	/** Reference to the organization validating information. */
	organization: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getSignatureSchema = (): z.ZodType<Signature> =>
	SignatureSchemaInternal as z.ZodType<Signature>;

/** @internal */
export const VerificationResult_ValidatorSchemaInternal =
	BackboneElementSchemaInternal.extend({
		attestationSignature: z.lazy(getSignatureSchema).optional(),
		identityCertificate: fhirString().optional(),
		_identityCertificate: z.lazy(getElementSchema).optional(),
		organization: z.lazy(getReferenceSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.organization,
				"organization",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
		});

export const VerificationResult_ValidatorSchema =
	VerificationResult_ValidatorSchemaInternal as z.ZodType<VerificationResult_Validator>;
