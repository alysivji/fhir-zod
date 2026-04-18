// Profile: http://hl7.org/fhir/StructureDefinition/Evidence
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:00:58.420Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Evidence variable such as population, exposure, or outcome. */
export interface Evidence_VariableDefinition extends BackboneElement {
  /** A text description or summary of the variable. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Indication of quality of match between intended variable to actual variable. */
  directnessMatch?: CodeableConcept;
  /** Definition of the intended variable related to the Evidence. */
  intended?: Reference;
  /** Footnotes and/or explanatory notes. */
  note?: Array<Annotation>;
  /** Definition of the actual variable related to the statistic(s). */
  observed?: Reference;
  /** population | subpopulation | exposure | referenceExposure | measuredVariable | confounder. */
  variableRole: CodeableConcept;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Evidence_VariableDefinitionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    description: z
      .string()
      .regex(/[ \r\n\t\S]+/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    directnessMatch: z.lazy(getCodeableConceptSchema).optional(),
    intended: z.lazy(getReferenceSchema).optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    observed: z.lazy(getReferenceSchema).optional(),
    variableRole: z.lazy(getCodeableConceptSchema),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.intended,
        "intended",
        [
          "http://hl7.org/fhir/StructureDefinition/EvidenceVariable",
          "http://hl7.org/fhir/StructureDefinition/Group",
        ],
        ["EvidenceVariable", "Group"],
        ctx,
      );
      validateReferenceTarget(
        record.observed,
        "observed",
        [
          "http://hl7.org/fhir/StructureDefinition/EvidenceVariable",
          "http://hl7.org/fhir/StructureDefinition/Group",
        ],
        ["EvidenceVariable", "Group"],
        ctx,
      );
    });

export const Evidence_VariableDefinitionSchema =
  Evidence_VariableDefinitionSchemaInternal as z.ZodType<Evidence_VariableDefinition>;
