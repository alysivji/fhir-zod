// Profile: http://hl7.org/fhir/StructureDefinition/Permission
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Permission_Rule_Activity } from "./Permission_Rule_Activity";
import { Permission_Rule_ActivitySchemaInternal } from "./Permission_Rule_Activity";
import type { Permission_Rule_Data } from "./Permission_Rule_Data";
import { Permission_Rule_DataSchemaInternal } from "./Permission_Rule_Data";

/** A set of rules. */
export interface Permission_Rule extends BackboneElement {
	/** A description or definition of which activities are allowed to be done on the data. */
	activity?: Array<Permission_Rule_Activity>;
	/** A description or definition of which activities are allowed to be done on the data. */
	data?: Array<Permission_Rule_Data>;
	/** What limits apply to the use of the data. */
	limit?: Array<CodeableConcept>;
	/** deny | permit. */
	type?: "deny" | "permit";
	/** Extensions for type */
	_type?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getPermission_Rule_ActivitySchema =
	(): z.ZodType<Permission_Rule_Activity> =>
		Permission_Rule_ActivitySchemaInternal as z.ZodType<Permission_Rule_Activity>;
const getPermission_Rule_DataSchema = (): z.ZodType<Permission_Rule_Data> =>
	Permission_Rule_DataSchemaInternal as z.ZodType<Permission_Rule_Data>;

/** @internal */
export const Permission_RuleSchemaInternal =
	BackboneElementSchemaInternal.extend({
		activity: z.lazy(getPermission_Rule_ActivitySchema).array().optional(),
		data: z.lazy(getPermission_Rule_DataSchema).array().optional(),
		limit: z.lazy(getCodeableConceptSchema).array().optional(),
		type: z.enum(["deny", "permit"]).optional(),
		_type: z.lazy(getElementSchema).optional(),
	}).strict();

export const Permission_RuleSchema =
	Permission_RuleSchemaInternal as z.ZodType<Permission_Rule>;
