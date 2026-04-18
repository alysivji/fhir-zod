// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { MedicinalProductDefinition_Name_Part } from "./MedicinalProductDefinition_Name_Part";
import { MedicinalProductDefinition_Name_PartSchemaInternal } from "./MedicinalProductDefinition_Name_Part";
import type { MedicinalProductDefinition_Name_Usage } from "./MedicinalProductDefinition_Name_Usage";
import { MedicinalProductDefinition_Name_UsageSchemaInternal } from "./MedicinalProductDefinition_Name_Usage";

/** The product's name, including full name and possibly coded parts. */
export interface MedicinalProductDefinition_Name extends BackboneElement {
  /** Coding words or phrases of the name. */
  part?: Array<MedicinalProductDefinition_Name_Part>;
  /** The full product name. */
  productName: string;
  /** Extensions for productName */
  _productName?: Element;
  /** Type of product name, such as rINN, BAN, Proprietary, Non-Proprietary. */
  type?: CodeableConcept;
  /** Country and jurisdiction where the name applies, and associated language. */
  usage?: Array<MedicinalProductDefinition_Name_Usage>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getMedicinalProductDefinition_Name_PartSchema =
  (): z.ZodType<MedicinalProductDefinition_Name_Part> =>
    MedicinalProductDefinition_Name_PartSchemaInternal as z.ZodType<MedicinalProductDefinition_Name_Part>;
const getMedicinalProductDefinition_Name_UsageSchema =
  (): z.ZodType<MedicinalProductDefinition_Name_Usage> =>
    MedicinalProductDefinition_Name_UsageSchemaInternal as z.ZodType<MedicinalProductDefinition_Name_Usage>;

/** @internal */
export const MedicinalProductDefinition_NameSchemaInternal =
  BackboneElementSchemaInternal.extend({
    part: z
      .lazy(getMedicinalProductDefinition_Name_PartSchema)
      .array()
      .optional(),
    productName: fhirString(),
    _productName: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
    usage: z
      .lazy(getMedicinalProductDefinition_Name_UsageSchema)
      .array()
      .optional(),
  }).strict();

export const MedicinalProductDefinition_NameSchema =
  MedicinalProductDefinition_NameSchemaInternal as z.ZodType<MedicinalProductDefinition_Name>;
