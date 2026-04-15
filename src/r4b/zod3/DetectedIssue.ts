// Profile: http://hl7.org/fhir/StructureDefinition/DetectedIssue
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import {
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives-zod3";
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

/** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
export interface DetectedIssue extends DomainResource {
	/** Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review. */
	author?: Reference;
	/** Identifies the general type of issue identified. */
	code?: CodeableConcept;
	/** A textual explanation of the detected issue. */
	detail?: string;
	/** Extensions for detail */
	_detail?: Element;
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
	/** Indicates the patient whose record the detected issue is associated with. */
	patient?: Reference;
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
		| "preliminary"
		| "registered"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
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
	code: z.lazy(getCodeableConceptSchema).optional(),
	detail: fhirString().optional(),
	_detail: z.lazy(getElementSchema).optional(),
	evidence: z.lazy(getDetectedIssue_EvidenceSchema).array().optional(),
	identifiedDateTime: fhirDateTime().optional(),
	_identifiedDateTime: z.lazy(getElementSchema).optional(),
	identifiedPeriod: z.lazy(getPeriodSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	implicated: z.lazy(getReferenceSchema).array().optional(),
	mitigation: z.lazy(getDetectedIssue_MitigationSchema).array().optional(),
	patient: z.lazy(getReferenceSchema).optional(),
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
		"preliminary",
		"registered",
		"unknown",
	]),
	_status: z.lazy(getElementSchema).optional(),
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
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
			],
			["Device", "Practitioner", "PractitionerRole"],
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
			record.patient,
			"patient",
			["http://hl7.org/fhir/StructureDefinition/Patient"],
			["Patient"],
			ctx,
		);
	});

export const DetectedIssueSchema =
	DetectedIssueSchemaInternal as z.ZodType<DetectedIssue>;
