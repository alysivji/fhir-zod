// Profile: http://hl7.org/fhir/StructureDefinition/CoverageEligibilityRequest
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

/** Financial instruments for reimbursement for the health care products and services. */
export interface CoverageEligibilityRequest_Insurance extends BackboneElement {
	/** A business agreement number established between the provider and the insurer for special business processing purposes. */
	businessArrangement?: string;
	/** Extensions for businessArrangement */
	_businessArrangement?: Element;
	/** Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system. */
	coverage: Reference;
	/** A flag to indicate that this Coverage is to be used for evaluation of this request when set to true. */
	focal?: boolean;
	/** Extensions for focal */
	_focal?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const CoverageEligibilityRequest_InsuranceSchemaInternal =
	BackboneElementSchemaInternal.extend({
		businessArrangement: fhirString().optional(),
		_businessArrangement: z.lazy(getElementSchema).optional(),
		coverage: z.lazy(getReferenceSchema),
		focal: z.boolean().optional(),
		_focal: z.lazy(getElementSchema).optional(),
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

export const CoverageEligibilityRequest_InsuranceSchema =
	CoverageEligibilityRequest_InsuranceSchemaInternal as z.ZodType<CoverageEligibilityRequest_Insurance>;
