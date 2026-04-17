// Profile: http://hl7.org/fhir/StructureDefinition/EligibilityResponse
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";

/** Mutually exclusive with Services Provided (Item). */
export interface EligibilityResponse_Error extends BackboneElement {
  /** An error code,from a specified code system, which details why the eligibility check could not be performed. */
  code: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const EligibilityResponse_ErrorSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema),
  }).strict();

export const EligibilityResponse_ErrorSchema =
  EligibilityResponse_ErrorSchemaInternal as z.ZodType<EligibilityResponse_Error>;
