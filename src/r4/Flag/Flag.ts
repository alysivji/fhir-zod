// Profile: http://hl7.org/fhir/StructureDefinition/Flag
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Prospective warnings of potential issues when providing care to the patient. */
export interface Flag extends DomainResource {
	/** The person, organization or device that created the flag. */
	author?: Reference;
	/** Allows a flag to be divided into different categories like clinical, administrative etc. Intended to be used as a means of filtering which flags are displayed to particular user or in a given context. */
	category?: Array<CodeableConcept>;
	/** The coded value or textual component of the flag to display to the user. */
	code: CodeableConcept;
	/** This alert is only relevant during the encounter. */
	encounter?: Reference;
	/** Business identifiers assigned to this flag by the performer or other systems which remain constant as the resource is updated and propagates from server to server. */
	identifier?: Array<Identifier>;
	/** The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified. */
	period?: Period;
	/** This is a Flag resource. */
	resourceType: "Flag";
	/** Supports basic workflow. */
	status: "active" | "entered-in-error" | "inactive";
	/** Extensions for status */
	_status?: Element;
	/** The patient, location, group, organization, or practitioner etc. this is about record this flag is associated with. */
	subject: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const FlagSchemaInternal = DomainResourceSchemaInternal.extend({
	author: z.lazy(getReferenceSchema).optional(),
	category: z.lazy(getCodeableConceptSchema).array().optional(),
	code: z.lazy(getCodeableConceptSchema),
	encounter: z.lazy(getReferenceSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	period: z.lazy(getPeriodSchema).optional(),
	resourceType: z.literal("Flag"),
	status: z.enum(["active", "entered-in-error", "inactive"]),
	_status: z.lazy(getElementSchema).optional(),
	subject: z.lazy(getReferenceSchema),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.author,
			"author",
			[
				"http://hl7.org/fhir/StructureDefinition/Device",
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
			],
			["Device", "Organization", "Patient", "Practitioner", "PractitionerRole"],
			ctx,
		);
		validateReferenceTarget(
			record.encounter,
			"encounter",
			["http://hl7.org/fhir/StructureDefinition/Encounter"],
			["Encounter"],
			ctx,
		);
		validateReferenceTarget(
			record.subject,
			"subject",
			[
				"http://hl7.org/fhir/StructureDefinition/Group",
				"http://hl7.org/fhir/StructureDefinition/Location",
				"http://hl7.org/fhir/StructureDefinition/Medication",
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/PlanDefinition",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/Procedure",
			],
			[
				"Group",
				"Location",
				"Medication",
				"Organization",
				"Patient",
				"PlanDefinition",
				"Practitioner",
				"Procedure",
			],
			ctx,
		);
	});

export const FlagSchema = FlagSchemaInternal as z.ZodType<Flag>;
