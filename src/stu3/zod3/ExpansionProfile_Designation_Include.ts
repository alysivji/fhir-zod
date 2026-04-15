// Profile: http://hl7.org/fhir/StructureDefinition/ExpansionProfile
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { ExpansionProfile_Designation_Include_Designation } from "./ExpansionProfile_Designation_Include_Designation";
import { ExpansionProfile_Designation_Include_DesignationSchemaInternal } from "./ExpansionProfile_Designation_Include_Designation";

/** Designations to be included. */
export interface ExpansionProfile_Designation_Include extends BackboneElement {
	/** A data group for each designation to be included. */
	designation?: Array<ExpansionProfile_Designation_Include_Designation>;
}

const getExpansionProfile_Designation_Include_DesignationSchema =
	(): z.ZodType<ExpansionProfile_Designation_Include_Designation> =>
		ExpansionProfile_Designation_Include_DesignationSchemaInternal as z.ZodType<ExpansionProfile_Designation_Include_Designation>;

/** @internal */
export const ExpansionProfile_Designation_IncludeSchemaInternal =
	BackboneElementSchemaInternal.extend({
		designation: z
			.lazy(getExpansionProfile_Designation_Include_DesignationSchema)
			.array()
			.optional(),
	}).strict();

export const ExpansionProfile_Designation_IncludeSchema =
	ExpansionProfile_Designation_IncludeSchemaInternal as z.ZodType<ExpansionProfile_Designation_Include>;
