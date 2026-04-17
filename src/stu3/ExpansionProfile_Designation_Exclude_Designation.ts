// Profile: http://hl7.org/fhir/StructureDefinition/ExpansionProfile
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirCode } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A data group for each designation to be excluded. */
export interface ExpansionProfile_Designation_Exclude_Designation
  extends BackboneElement {
  /** The language this designation is defined for. */
  language?: string;
  /** Extensions for language */
  _language?: Element;
  /** Which kinds of designation to exclude from the expansion. */
  use?: Coding;
}

const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ExpansionProfile_Designation_Exclude_DesignationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    use: z.lazy(getCodingSchema).optional(),
  }).strict();

export const ExpansionProfile_Designation_Exclude_DesignationSchema =
  ExpansionProfile_Designation_Exclude_DesignationSchemaInternal as z.ZodType<ExpansionProfile_Designation_Exclude_Designation>;
