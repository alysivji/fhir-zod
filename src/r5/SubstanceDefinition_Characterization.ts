// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** General specifications for this substance. */
export interface SubstanceDefinition_Characterization extends BackboneElement {
  /** The description or justification in support of the interpretation of the data file. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** The data produced by the analytical instrument or a pictorial representation of that data. Examples: a JCAMP, JDX, or ADX file, or a chromatogram or spectrum analysis. */
  file?: Array<Attachment>;
  /** Describes the nature of the chemical entity and explains, for instance, whether this is a base or a salt form. */
  form?: CodeableConcept;
  /** The method used to elucidate the characterization of the drug substance. Example: HPLC. */
  technique?: CodeableConcept;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
  AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const SubstanceDefinition_CharacterizationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    file: z.lazy(getAttachmentSchema).array().optional(),
    form: z.lazy(getCodeableConceptSchema).optional(),
    technique: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const SubstanceDefinition_CharacterizationSchema =
  SubstanceDefinition_CharacterizationSchemaInternal as z.ZodType<SubstanceDefinition_Characterization>;
