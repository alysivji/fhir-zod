// Profile: http://hl7.org/fhir/StructureDefinition/Account
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Other associated accounts related to this account. */
export interface Account_RelatedAccount extends BackboneElement {
	/** Reference to an associated Account. */
	account: Reference;
	/** Relationship of the associated Account. */
	relationship?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Account_RelatedAccountSchemaInternal =
	BackboneElementSchemaInternal.extend({
		account: z.lazy(getReferenceSchema),
		relationship: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.account,
				"account",
				["http://hl7.org/fhir/StructureDefinition/Account"],
				["Account"],
				ctx,
			);
		});

export const Account_RelatedAccountSchema =
	Account_RelatedAccountSchemaInternal as z.ZodType<Account_RelatedAccount>;
