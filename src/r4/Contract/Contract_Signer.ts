// Profile: http://hl7.org/fhir/StructureDefinition/Contract
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Signature } from "../Signature";
import { SignatureSchemaInternal } from "../Signature";

/** Parties with legal standing in the Contract, including the principal parties, the grantor(s) and grantee(s), which are any person or organization bound by the contract, and any ancillary parties, which facilitate the execution of the contract such as a notary or witness. */
export interface Contract_Signer extends BackboneElement {
	/** Party which is a signator to this Contract. */
	party: Reference;
	/** Legally binding Contract DSIG signature contents in Base64. */
	signature: Array<Signature>;
	/** Role of this Contract signer, e.g. notary, grantee. */
	type: Coding;
}

const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getSignatureSchema = (): z.ZodType<Signature> =>
	SignatureSchemaInternal as z.ZodType<Signature>;

/** @internal */
export const Contract_SignerSchemaInternal =
	BackboneElementSchemaInternal.extend({
		party: z.lazy(getReferenceSchema),
		signature: z.lazy(getSignatureSchema).array(),
		type: z.lazy(getCodingSchema),
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
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				[
					"Organization",
					"Patient",
					"Practitioner",
					"PractitionerRole",
					"RelatedPerson",
				],
				ctx,
			);
		});

export const Contract_SignerSchema =
	Contract_SignerSchemaInternal as z.ZodType<Contract_Signer>;
