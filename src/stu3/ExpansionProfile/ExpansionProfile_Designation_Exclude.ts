// Profile: http://hl7.org/fhir/StructureDefinition/ExpansionProfile
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:00:56.233Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { ExpansionProfile_Designation_Exclude_Designation } from "./ExpansionProfile_Designation_Exclude_Designation";
import { ExpansionProfile_Designation_Exclude_DesignationSchemaInternal } from "./ExpansionProfile_Designation_Exclude_Designation";

/** Designations to be excluded. */
export interface ExpansionProfile_Designation_Exclude extends BackboneElement {
  /** A data group for each designation to be excluded. */
  designation?: Array<ExpansionProfile_Designation_Exclude_Designation>;
}

const getExpansionProfile_Designation_Exclude_DesignationSchema =
  (): z.ZodType<ExpansionProfile_Designation_Exclude_Designation> =>
    ExpansionProfile_Designation_Exclude_DesignationSchemaInternal as z.ZodType<ExpansionProfile_Designation_Exclude_Designation>;

/** @internal */
export const ExpansionProfile_Designation_ExcludeSchemaInternal =
  BackboneElementSchemaInternal.extend({
    designation: z
      .lazy(getExpansionProfile_Designation_Exclude_DesignationSchema)
      .array()
      .optional(),
  }).strict();

export const ExpansionProfile_Designation_ExcludeSchema =
  ExpansionProfile_Designation_ExcludeSchemaInternal as z.ZodType<ExpansionProfile_Designation_Exclude>;
