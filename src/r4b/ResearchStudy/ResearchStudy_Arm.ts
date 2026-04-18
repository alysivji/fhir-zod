// Source: https://hl7.org/fhir/R4B/researchstudy-definitions.html#ResearchStudy.arm
// Profile: http://hl7.org/fhir/StructureDefinition/ResearchStudy
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up. */
export interface ResearchStudy_Arm extends BackboneElement {
  /** A succinct description of the path through the study that would be followed by a subject adhering to this arm. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Unique, human-readable label for this arm of the study. */
  name: string;
  /** Extensions for name */
  _name?: Element;
  /** Categorization of study arm, e.g. experimental, active comparator, placebo comparater. */
  type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ResearchStudy_ArmSchemaInternal =
  BackboneElementSchemaInternal.extend({
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    name: fhirString(),
    _name: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const ResearchStudy_ArmSchema =
  ResearchStudy_ArmSchemaInternal as z.ZodType<ResearchStudy_Arm>;
