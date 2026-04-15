// Profile: http://hl7.org/fhir/StructureDefinition/CoverageEligibilityResponse
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";

/** Errors encountered during the processing of the request. */
export interface CoverageEligibilityResponse_Error extends BackboneElement {
	/** An error code,from a specified code system, which details why the eligibility check could not be performed. */
	code: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const CoverageEligibilityResponse_ErrorSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema),
	}).strict();

export const CoverageEligibilityResponse_ErrorSchema =
	CoverageEligibilityResponse_ErrorSchemaInternal as z.ZodType<CoverageEligibilityResponse_Error>;
