// Profile: http://hl7.org/fhir/StructureDefinition/Permission
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T00:02:33.197Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirDateTime } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Permission_Justification } from "./Permission_Justification";
import { Permission_JustificationSchemaInternal } from "./Permission_Justification";
import type { Permission_Rule } from "./Permission_Rule";
import { Permission_RuleSchemaInternal } from "./Permission_Rule";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Permission resource holds access rules for a given data and context. */
export interface Permission extends DomainResource {
	/** The person or entity that asserts the permission. */
	asserter?: Reference;
	/** Defines a procedure for arriving at an access decision given the set of rules. */
	combining:
		| "deny-overrides"
		| "deny-unless-permit"
		| "ordered-deny-overrides"
		| "ordered-permit-overrides"
		| "permit-overrides"
		| "permit-unless-deny";
	/** Extensions for combining */
	_combining?: Element;
	/** The date that permission was asserted. */
	date?: Array<string | null>;
	/** Extensions for date */
	_date?: Array<Element | null>;
	/** The asserted justification for using the data. */
	justification?: Permission_Justification;
	/** This is a Permission resource. */
	resourceType: "Permission";
	/** A set of rules. */
	rule?: Array<Permission_Rule>;
	/** Status. */
	status: "active" | "draft" | "entered-in-error" | "rejected";
	/** Extensions for status */
	_status?: Element;
	/** The period in which the permission is active. */
	validity?: Period;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getPermission_JustificationSchema =
	(): z.ZodType<Permission_Justification> =>
		Permission_JustificationSchemaInternal as z.ZodType<Permission_Justification>;
const getPermission_RuleSchema = (): z.ZodType<Permission_Rule> =>
	Permission_RuleSchemaInternal as z.ZodType<Permission_Rule>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const PermissionSchemaInternal = DomainResourceSchemaInternal.extend({
	asserter: z.lazy(getReferenceSchema).optional(),
	combining: z.enum([
		"deny-overrides",
		"deny-unless-permit",
		"ordered-deny-overrides",
		"ordered-permit-overrides",
		"permit-overrides",
		"permit-unless-deny",
	]),
	_combining: z.lazy(getElementSchema).optional(),
	date: fhirDateTime().nullable().array().optional(),
	_date: z.lazy(getElementSchema).nullable().array().optional(),
	justification: z.lazy(getPermission_JustificationSchema).optional(),
	resourceType: z.literal("Permission"),
	rule: z.lazy(getPermission_RuleSchema).array().optional(),
	status: z.enum(["active", "draft", "entered-in-error", "rejected"]),
	_status: z.lazy(getElementSchema).optional(),
	validity: z.lazy(getPeriodSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validatePrimitiveArrayPair(record.date, record._date, "date", "_date", ctx);
		validateReferenceTarget(
			record.asserter,
			"asserter",
			[
				"http://hl7.org/fhir/StructureDefinition/CareTeam",
				"http://hl7.org/fhir/StructureDefinition/HealthcareService",
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			[
				"CareTeam",
				"HealthcareService",
				"Organization",
				"Patient",
				"Practitioner",
				"PractitionerRole",
				"RelatedPerson",
			],
			ctx,
		);
	});

export const PermissionSchema =
	PermissionSchemaInternal as z.ZodType<Permission>;
