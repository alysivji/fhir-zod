// Profile: http://hl7.org/fhir/StructureDefinition/DetectedIssue
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { fhirDateTime, fhirUri } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DetectedIssue_Evidence } from "./DetectedIssue_Evidence";
import { DetectedIssue_EvidenceSchemaInternal } from "./DetectedIssue_Evidence";
import type { DetectedIssue_Mitigation } from "./DetectedIssue_Mitigation";
import { DetectedIssue_MitigationSchemaInternal } from "./DetectedIssue_Mitigation";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, gaps in care, etc. */
export interface DetectedIssue extends DomainResource {
	/** Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review. */
	author?: Reference;
	/** A code that classifies the general type of detected issue. */
	category?: Array<CodeableConcept>;
	/** Identifies the specific type of issue identified. */
	code?: CodeableConcept;
	/** A textual explanation of the detected issue. */
	detail?: string;
	/** Extensions for detail */
	_detail?: Element;
	/** The encounter during which this issue was detected. */
	encounter?: Reference;
	/** Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport. */
	evidence?: Array<DetectedIssue_Evidence>;
	/** The date or period when the detected issue was initially identified. */
	identifiedDateTime?: string;
	/** Extensions for identifiedDateTime */
	_identifiedDateTime?: Element;
	/** The date or period when the detected issue was initially identified. */
	identifiedPeriod?: Period;
	/** Business identifier associated with the detected issue record. */
	identifier?: Array<Identifier>;
	/** Indicates the resource representing the current activity or proposed activity that is potentially problematic. */
	implicated?: Array<Reference>;
	/** Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action. */
	mitigation?: Array<DetectedIssue_Mitigation>;
	/** The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified. */
	reference?: string;
	/** Extensions for reference */
	_reference?: Element;
	/** This is a DetectedIssue resource. */
	resourceType: "DetectedIssue";
	/** Indicates the degree of importance associated with the identified issue based on the potential impact on the patient. */
	severity?: "high" | "low" | "moderate";
	/** Extensions for severity */
	_severity?: Element;
	/** Indicates the status of the detected issue. */
	status:
		| "amended"
		| "cancelled"
		| "corrected"
		| "entered-in-error"
		| "final"
		| "mitigated"
		| "preliminary"
		| "registered"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** Indicates the subject whose record the detected issue is associated with. */
	subject?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDetectedIssue_EvidenceSchema = (): z.ZodType<DetectedIssue_Evidence> =>
	DetectedIssue_EvidenceSchemaInternal as z.ZodType<DetectedIssue_Evidence>;
const getDetectedIssue_MitigationSchema =
	(): z.ZodType<DetectedIssue_Mitigation> =>
		DetectedIssue_MitigationSchemaInternal as z.ZodType<DetectedIssue_Mitigation>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DetectedIssueSchemaInternal = DomainResourceSchemaInternal.extend({
	author: z.lazy(getReferenceSchema).optional(),
	category: z.lazy(getCodeableConceptSchema).array().optional(),
	code: z.lazy(getCodeableConceptSchema).optional(),
	detail: z
		.string()
		.regex(/^[\s\S]+$/)
		.optional(),
	_detail: z.lazy(getElementSchema).optional(),
	encounter: z.lazy(getReferenceSchema).optional(),
	evidence: z.lazy(getDetectedIssue_EvidenceSchema).array().optional(),
	identifiedDateTime: fhirDateTime().optional(),
	_identifiedDateTime: z.lazy(getElementSchema).optional(),
	identifiedPeriod: z.lazy(getPeriodSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	implicated: z.lazy(getReferenceSchema).array().optional(),
	mitigation: z.lazy(getDetectedIssue_MitigationSchema).array().optional(),
	reference: fhirUri().optional(),
	_reference: z.lazy(getElementSchema).optional(),
	resourceType: z.literal("DetectedIssue"),
	severity: z.enum(["high", "low", "moderate"]).optional(),
	_severity: z.lazy(getElementSchema).optional(),
	status: z.enum([
		"amended",
		"cancelled",
		"corrected",
		"entered-in-error",
		"final",
		"mitigated",
		"preliminary",
		"registered",
		"unknown",
	]),
	_status: z.lazy(getElementSchema).optional(),
	subject: z.lazy(getReferenceSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const identified_x_Present = [
			"identifiedDateTime",
			"identifiedPeriod",
		].filter((field) => record[field] !== undefined);
		if (identified_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of identifiedDateTime, identifiedPeriod may be present for identified[x]",
				path: [identified_x_Present[0]],
			});
		}
		validateReferenceTarget(
			record.author,
			"author",
			[
				"http://hl7.org/fhir/StructureDefinition/Device",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			[
				"Device",
				"Patient",
				"Practitioner",
				"PractitionerRole",
				"RelatedPerson",
			],
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
			record.implicated,
			"implicated",
			["http://hl7.org/fhir/StructureDefinition/Resource"],
			["Resource"],
			ctx,
		);
		validateReferenceTarget(
			record.subject,
			"subject",
			[
				"http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct",
				"http://hl7.org/fhir/StructureDefinition/Device",
				"http://hl7.org/fhir/StructureDefinition/Group",
				"http://hl7.org/fhir/StructureDefinition/Location",
				"http://hl7.org/fhir/StructureDefinition/Medication",
				"http://hl7.org/fhir/StructureDefinition/NutritionProduct",
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/Procedure",
				"http://hl7.org/fhir/StructureDefinition/Substance",
			],
			[
				"BiologicallyDerivedProduct",
				"Device",
				"Group",
				"Location",
				"Medication",
				"NutritionProduct",
				"Organization",
				"Patient",
				"Practitioner",
				"Procedure",
				"Substance",
			],
			ctx,
		);
	});

export const DetectedIssueSchema =
	DetectedIssueSchemaInternal as z.ZodType<DetectedIssue>;
