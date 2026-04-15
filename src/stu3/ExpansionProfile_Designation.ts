// Profile: http://hl7.org/fhir/StructureDefinition/ExpansionProfile
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { ExpansionProfile_Designation_Exclude } from "./ExpansionProfile_Designation_Exclude";
import { ExpansionProfile_Designation_ExcludeSchemaInternal } from "./ExpansionProfile_Designation_Exclude";
import type { ExpansionProfile_Designation_Include } from "./ExpansionProfile_Designation_Include";
import { ExpansionProfile_Designation_IncludeSchemaInternal } from "./ExpansionProfile_Designation_Include";

/** A set of criteria that provide the constraints imposed on the value set expansion by including or excluding designations. */
export interface ExpansionProfile_Designation extends BackboneElement {
	/** Designations to be excluded. */
	exclude?: ExpansionProfile_Designation_Exclude;
	/** Designations to be included. */
	include?: ExpansionProfile_Designation_Include;
}

const getExpansionProfile_Designation_ExcludeSchema =
	(): z.ZodType<ExpansionProfile_Designation_Exclude> =>
		ExpansionProfile_Designation_ExcludeSchemaInternal as z.ZodType<ExpansionProfile_Designation_Exclude>;
const getExpansionProfile_Designation_IncludeSchema =
	(): z.ZodType<ExpansionProfile_Designation_Include> =>
		ExpansionProfile_Designation_IncludeSchemaInternal as z.ZodType<ExpansionProfile_Designation_Include>;

/** @internal */
export const ExpansionProfile_DesignationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		exclude: z.lazy(getExpansionProfile_Designation_ExcludeSchema).optional(),
		include: z.lazy(getExpansionProfile_Designation_IncludeSchema).optional(),
	}).strict();

export const ExpansionProfile_DesignationSchema =
	ExpansionProfile_DesignationSchemaInternal as z.ZodType<ExpansionProfile_Designation>;
