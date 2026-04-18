// Source: https://hl7.org/fhir/R4/substancereferenceinformation-definitions.html#SubstanceReferenceInformation.gene
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Todo. */
export interface SubstanceReferenceInformation_Gene extends BackboneElement {
  /** Todo. */
  gene?: CodeableConcept;
  /** Todo. */
  geneSequenceOrigin?: CodeableConcept;
  /** Todo. */
  source?: Array<Reference>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const SubstanceReferenceInformation_GeneSchemaInternal =
  BackboneElementSchemaInternal.extend({
    gene: z.lazy(getCodeableConceptSchema).optional(),
    geneSequenceOrigin: z.lazy(getCodeableConceptSchema).optional(),
    source: z.lazy(getReferenceSchema).array().optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.source,
        "source",
        ["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
        ["DocumentReference"],
        ctx,
      );
    });

export const SubstanceReferenceInformation_GeneSchema =
  SubstanceReferenceInformation_GeneSchemaInternal as z.ZodType<SubstanceReferenceInformation_Gene>;
