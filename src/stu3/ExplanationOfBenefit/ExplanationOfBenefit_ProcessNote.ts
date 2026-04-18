// Profile: http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:00:56.233Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Note text. */
export interface ExplanationOfBenefit_ProcessNote extends BackboneElement {
  /** The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. "en" for English, or "en-US" for American English versus "en-EN" for England English. */
  language?: CodeableConcept;
  /** An integer associated with each note which may be referred to from each service line item. */
  number?: number;
  /** Extensions for number */
  _number?: Element;
  /** The note text. */
  text?: string;
  /** Extensions for text */
  _text?: Element;
  /** The note purpose: Print/Display. */
  type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ExplanationOfBenefit_ProcessNoteSchemaInternal =
  BackboneElementSchemaInternal.extend({
    language: z.lazy(getCodeableConceptSchema).optional(),
    number: z.number().int().positive().optional(),
    _number: z.lazy(getElementSchema).optional(),
    text: fhirString().optional(),
    _text: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const ExplanationOfBenefit_ProcessNoteSchema =
  ExplanationOfBenefit_ProcessNoteSchemaInternal as z.ZodType<ExplanationOfBenefit_ProcessNote>;
