// Profile: http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-17T23:33:05.787Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A critical piece of information about environmental, health or physical risks or hazards that serve as caution to the user. For example 'Do not operate heavy machinery', 'May cause drowsiness', or 'Get medical advice/attention if you feel unwell'. */
export interface ClinicalUseDefinition_Warning extends BackboneElement {
  /** A coded or unformatted textual definition of this warning. */
  code?: CodeableConcept;
  /** A textual definition of this warning, with formatting. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ClinicalUseDefinition_WarningSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema).optional(),
    description: z
      .string()
      .regex(/[ \r\n\t\S]+/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
  }).strict();

export const ClinicalUseDefinition_WarningSchema =
  ClinicalUseDefinition_WarningSchemaInternal as z.ZodType<ClinicalUseDefinition_Warning>;
