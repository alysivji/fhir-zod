// Profile: http://hl7.org/fhir/StructureDefinition/Claim
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Financial instrument by which payment information for health care. */
export interface Claim_Insurance extends BackboneElement {
	/** The contract number of a business agreement which describes the terms and conditions. */
	businessArrangement?: string;
	/** Extensions for businessArrangement */
	_businessArrangement?: Element;
	/** The Coverages adjudication details. */
	claimResponse?: Reference;
	/** Reference to the program or plan identification, underwriter or payor. */
	coverage: Reference;
	/** A flag to indicate that this Coverage is the focus for adjudication. The Coverage against which the claim is to be adjudicated. */
	focal: boolean;
	/** Extensions for focal */
	_focal?: Element;
	/** A list of references from the Insurer to which these services pertain. */
	preAuthRef?: Array<string | null>;
	/** Extensions for preAuthRef */
	_preAuthRef?: Array<Element | null>;
	/** Sequence of coverage which serves to provide a link and convey coordination of benefit order. */
	sequence: number;
	/** Extensions for sequence */
	_sequence?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Claim_InsuranceSchemaInternal =
	BackboneElementSchemaInternal.extend({
		businessArrangement: fhirString().optional(),
		_businessArrangement: z.lazy(getElementSchema).optional(),
		claimResponse: z.lazy(getReferenceSchema).optional(),
		coverage: z.lazy(getReferenceSchema),
		focal: z.boolean(),
		_focal: z.lazy(getElementSchema).optional(),
		preAuthRef: fhirString().nullable().array().optional(),
		_preAuthRef: z.lazy(getElementSchema).nullable().array().optional(),
		sequence: z.number().int().positive(),
		_sequence: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.preAuthRef,
				record._preAuthRef,
				"preAuthRef",
				"_preAuthRef",
				ctx,
			);
			validateReferenceTarget(
				record.claimResponse,
				"claimResponse",
				["http://hl7.org/fhir/StructureDefinition/ClaimResponse"],
				["ClaimResponse"],
				ctx,
			);
			validateReferenceTarget(
				record.coverage,
				"coverage",
				["http://hl7.org/fhir/StructureDefinition/Coverage"],
				["Coverage"],
				ctx,
			);
		});

export const Claim_InsuranceSchema =
	Claim_InsuranceSchemaInternal as z.ZodType<Claim_Insurance>;
