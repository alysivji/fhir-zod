// Source: https://hl7.org/fhir/R4/clinicalimpression-definitions.html#ClinicalImpression.finding
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Specific findings or diagnoses that were considered likely or relevant to ongoing treatment. */
export interface ClinicalImpression_Finding extends BackboneElement {
  /** Which investigations support finding or diagnosis. */
  basis?: string;
  /** Extensions for basis */
  _basis?: Element;
  /** Specific text or code for finding or diagnosis, which may include ruled-out or resolved conditions. */
  itemCodeableConcept?: CodeableConcept;
  /** Specific reference for finding or diagnosis, which may include ruled-out or resolved conditions. */
  itemReference?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ClinicalImpression_FindingSchemaInternal =
  BackboneElementSchemaInternal.extend({
    basis: fhirString().optional(),
    _basis: z.lazy(getElementSchema).optional(),
    itemCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    itemReference: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.itemReference,
        "itemReference",
        [
          "http://hl7.org/fhir/StructureDefinition/Condition",
          "http://hl7.org/fhir/StructureDefinition/Media",
          "http://hl7.org/fhir/StructureDefinition/Observation",
        ],
        ["Condition", "Media", "Observation"],
        ctx,
      );
    });

export const ClinicalImpression_FindingSchema =
  ClinicalImpression_FindingSchemaInternal as z.ZodType<ClinicalImpression_Finding>;
