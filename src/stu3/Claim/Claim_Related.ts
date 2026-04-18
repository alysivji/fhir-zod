// Profile: http://hl7.org/fhir/StructureDefinition/Claim
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:00:56.233Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Other claims which are related to this claim such as prior claim versions or for related services. */
export interface Claim_Related extends BackboneElement {
  /** Other claims which are related to this claim such as prior claim versions or for related services. */
  claim?: Reference;
  /** An alternate organizational reference to the case or file to which this particular claim pertains - eg Property/Casualy insurer claim # or Workers Compensation case # . */
  reference?: Identifier;
  /** For example prior or umbrella. */
  relationship?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Claim_RelatedSchemaInternal = BackboneElementSchemaInternal.extend(
  {
    claim: z.lazy(getReferenceSchema).optional(),
    reference: z.lazy(getIdentifierSchema).optional(),
    relationship: z.lazy(getCodeableConceptSchema).optional(),
  },
)
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.claim,
      "claim",
      ["http://hl7.org/fhir/StructureDefinition/Claim"],
      ["Claim"],
      ctx,
    );
  });

export const Claim_RelatedSchema =
  Claim_RelatedSchemaInternal as z.ZodType<Claim_Related>;
