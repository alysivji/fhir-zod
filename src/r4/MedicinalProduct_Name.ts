// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProduct
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { MedicinalProduct_Name_CountryLanguage } from "./MedicinalProduct_Name_CountryLanguage";
import { MedicinalProduct_Name_CountryLanguageSchemaInternal } from "./MedicinalProduct_Name_CountryLanguage";
import type { MedicinalProduct_Name_NamePart } from "./MedicinalProduct_Name_NamePart";
import { MedicinalProduct_Name_NamePartSchemaInternal } from "./MedicinalProduct_Name_NamePart";

/** The product's name, including full name and possibly coded parts. */
export interface MedicinalProduct_Name extends BackboneElement {
  /** Country where the name applies. */
  countryLanguage?: Array<MedicinalProduct_Name_CountryLanguage>;
  /** Coding words or phrases of the name. */
  namePart?: Array<MedicinalProduct_Name_NamePart>;
  /** The full product name. */
  productName: string;
  /** Extensions for productName */
  _productName?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getMedicinalProduct_Name_CountryLanguageSchema =
  (): z.ZodType<MedicinalProduct_Name_CountryLanguage> =>
    MedicinalProduct_Name_CountryLanguageSchemaInternal as z.ZodType<MedicinalProduct_Name_CountryLanguage>;
const getMedicinalProduct_Name_NamePartSchema =
  (): z.ZodType<MedicinalProduct_Name_NamePart> =>
    MedicinalProduct_Name_NamePartSchemaInternal as z.ZodType<MedicinalProduct_Name_NamePart>;

/** @internal */
export const MedicinalProduct_NameSchemaInternal =
  BackboneElementSchemaInternal.extend({
    countryLanguage: z
      .lazy(getMedicinalProduct_Name_CountryLanguageSchema)
      .array()
      .optional(),
    namePart: z
      .lazy(getMedicinalProduct_Name_NamePartSchema)
      .array()
      .optional(),
    productName: fhirString(),
    _productName: z.lazy(getElementSchema).optional(),
  }).strict();

export const MedicinalProduct_NameSchema =
  MedicinalProduct_NameSchemaInternal as z.ZodType<MedicinalProduct_Name>;
