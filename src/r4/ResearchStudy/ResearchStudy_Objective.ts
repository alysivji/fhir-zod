// Profile: http://hl7.org/fhir/StructureDefinition/ResearchStudy
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study. */
export interface ResearchStudy_Objective extends BackboneElement {
  /** Unique, human-readable label for this objective of the study. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** The kind of study objective. */
  type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ResearchStudy_ObjectiveSchemaInternal =
  BackboneElementSchemaInternal.extend({
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const ResearchStudy_ObjectiveSchema =
  ResearchStudy_ObjectiveSchemaInternal as z.ZodType<ResearchStudy_Objective>;
