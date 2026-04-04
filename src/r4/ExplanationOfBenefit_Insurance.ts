// Profile: http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T20:28:54.953Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Financial instruments for reimbursement for the health care products and services specified on the claim. */
export interface ExplanationOfBenefit_Insurance extends BackboneElement {
	/** Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system. */
	coverage: Reference;
	/** A flag to indicate that this Coverage is to be used for adjudication of this claim when set to true. */
	focal: boolean;
	/** Extensions for focal */
	_focal?: Element;
	/** Reference numbers previously provided by the insurer to the provider to be quoted on subsequent claims containing services or products related to the prior authorization. */
	preAuthRef?: Array<string>;
	/** Extensions for preAuthRef */
	_preAuthRef?: Array<Element>;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ExplanationOfBenefit_InsuranceSchemaInternal =
	BackboneElementSchemaInternal.extend({
		coverage: z.lazy(getReferenceSchema),
		focal: z.boolean(),
		_focal: z.lazy(getElementSchema).optional(),
		preAuthRef: fhirString().array().optional(),
		_preAuthRef: z.lazy(getElementSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.coverage,
				"coverage",
				["http://hl7.org/fhir/StructureDefinition/Coverage"],
				["Coverage"],
				ctx,
			);
		});

export const ExplanationOfBenefit_InsuranceSchema =
	ExplanationOfBenefit_InsuranceSchemaInternal as z.ZodType<ExplanationOfBenefit_Insurance>;
