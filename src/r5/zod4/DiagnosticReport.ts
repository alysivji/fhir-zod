// Profile: http://hl7.org/fhir/StructureDefinition/DiagnosticReport
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { fhirDateTime, fhirInstant } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DiagnosticReport_Media } from "./DiagnosticReport_Media";
import { DiagnosticReport_MediaSchemaInternal } from "./DiagnosticReport_Media";
import type { DiagnosticReport_SupportingInfo } from "./DiagnosticReport_SupportingInfo";
import { DiagnosticReport_SupportingInfoSchemaInternal } from "./DiagnosticReport_SupportingInfo";
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

/** The findings and interpretation of diagnostic tests performed on patients, groups of patients, products, substances, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports. The report also includes non-clinical context such as batch analysis and stability reporting of products and substances. */
export interface DiagnosticReport extends DomainResource {
	/** Details concerning a service requested. */
	basedOn?: Array<Reference>;
	/** A code that classifies the clinical discipline, department or diagnostic service that created the report (e.g. cardiology, biochemistry, hematology, MRI). This is used for searching, sorting and display purposes. */
	category?: Array<CodeableConcept>;
	/** A code or name that describes this diagnostic report. */
	code: CodeableConcept;
	/** Reference to a Composition resource instance that provides structure for organizing the contents of the DiagnosticReport. */
	composition?: Reference;
	/** Concise and clinically contextualized summary conclusion (interpretation/impression) of the diagnostic report. */
	conclusion?: string;
	/** Extensions for conclusion */
	_conclusion?: Element;
	/** One or more codes that represent the summary conclusion (interpretation/impression) of the diagnostic report. */
	conclusionCode?: Array<CodeableConcept>;
	/** The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself. */
	effectiveDateTime?: string;
	/** Extensions for effectiveDateTime */
	_effectiveDateTime?: Element;
	/** The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself. */
	effectivePeriod?: Period;
	/** The healthcare event  (e.g. a patient and healthcare provider interaction) which this DiagnosticReport is about. */
	encounter?: Reference;
	/** Identifiers assigned to this report by the performer or other systems. */
	identifier?: Array<Identifier>;
	/** The date and time that this version of the report was made available to providers, typically after the report was reviewed and verified. */
	issued?: string;
	/** Extensions for issued */
	_issued?: Element;
	/** A list of key images or data associated with this report. The images or data are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest). */
	media?: Array<DiagnosticReport_Media>;
	/** Comments about the diagnostic report. */
	note?: Array<Annotation>;
	/** The diagnostic service that is responsible for issuing the report. */
	performer?: Array<Reference>;
	/** Rich text representation of the entire result as issued by the diagnostic service. Multiple formats are allowed but they SHALL be semantically equivalent. */
	presentedForm?: Array<Attachment>;
	/** This is a DiagnosticReport resource. */
	resourceType: "DiagnosticReport";
	/** [Observations](observation.html)  that are part of this diagnostic report. */
	result?: Array<Reference>;
	/** The practitioner or organization that is responsible for the report's conclusions and interpretations. */
	resultsInterpreter?: Array<Reference>;
	/** Details about the specimens on which this diagnostic report is based. */
	specimen?: Array<Reference>;
	/** The status of the diagnostic report. */
	status:
		| "amended"
		| "appended"
		| "cancelled"
		| "corrected"
		| "entered-in-error"
		| "final"
		| "modified"
		| "partial"
		| "preliminary"
		| "registered"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** One or more links to full details of any study performed during the diagnostic investigation. An ImagingStudy might comprise a set of radiologic images obtained via a procedure that are analyzed as a group. Typically, this is imaging performed by DICOM enabled modalities, but this is not required. A fully enabled PACS viewer can use this information to provide views of the source images. A GenomicStudy might comprise one or more analyses, each serving a specific purpose. These analyses may vary in method (e.g., karyotyping, CNV, or SNV detection), performer, software, devices used, or regions targeted. */
	study?: Array<Reference>;
	/** The subject of the report. Usually, but not always, this is a patient. However, diagnostic services also perform analyses on specimens collected from a variety of other sources. */
	subject?: Reference;
	/** This backbone element contains supporting information that was used in the creation of the report not included in the results already included in the report. */
	supportingInfo?: Array<DiagnosticReport_SupportingInfo>;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDiagnosticReport_MediaSchema = (): z.ZodType<DiagnosticReport_Media> =>
	DiagnosticReport_MediaSchemaInternal as z.ZodType<DiagnosticReport_Media>;
const getDiagnosticReport_SupportingInfoSchema =
	(): z.ZodType<DiagnosticReport_SupportingInfo> =>
		DiagnosticReport_SupportingInfoSchemaInternal as z.ZodType<DiagnosticReport_SupportingInfo>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DiagnosticReportSchemaInternal =
	DomainResourceSchemaInternal.extend({
		basedOn: z.lazy(getReferenceSchema).array().optional(),
		category: z.lazy(getCodeableConceptSchema).array().optional(),
		code: z.lazy(getCodeableConceptSchema),
		composition: z.lazy(getReferenceSchema).optional(),
		conclusion: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_conclusion: z.lazy(getElementSchema).optional(),
		conclusionCode: z.lazy(getCodeableConceptSchema).array().optional(),
		effectiveDateTime: fhirDateTime().optional(),
		_effectiveDateTime: z.lazy(getElementSchema).optional(),
		effectivePeriod: z.lazy(getPeriodSchema).optional(),
		encounter: z.lazy(getReferenceSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		issued: fhirInstant().optional(),
		_issued: z.lazy(getElementSchema).optional(),
		media: z.lazy(getDiagnosticReport_MediaSchema).array().optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		performer: z.lazy(getReferenceSchema).array().optional(),
		presentedForm: z.lazy(getAttachmentSchema).array().optional(),
		resourceType: z.literal("DiagnosticReport"),
		result: z.lazy(getReferenceSchema).array().optional(),
		resultsInterpreter: z.lazy(getReferenceSchema).array().optional(),
		specimen: z.lazy(getReferenceSchema).array().optional(),
		status: z.enum([
			"amended",
			"appended",
			"cancelled",
			"corrected",
			"entered-in-error",
			"final",
			"modified",
			"partial",
			"preliminary",
			"registered",
			"unknown",
		]),
		_status: z.lazy(getElementSchema).optional(),
		study: z.lazy(getReferenceSchema).array().optional(),
		subject: z.lazy(getReferenceSchema).optional(),
		supportingInfo: z
			.lazy(getDiagnosticReport_SupportingInfoSchema)
			.array()
			.optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const effective_x_Present = [
				"effectiveDateTime",
				"effectivePeriod",
			].filter((field) => record[field] !== undefined);
			if (effective_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of effectiveDateTime, effectivePeriod may be present for effective[x]",
					path: [effective_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.basedOn,
				"basedOn",
				[
					"http://hl7.org/fhir/StructureDefinition/CarePlan",
					"http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation",
					"http://hl7.org/fhir/StructureDefinition/MedicationRequest",
					"http://hl7.org/fhir/StructureDefinition/NutritionOrder",
					"http://hl7.org/fhir/StructureDefinition/ServiceRequest",
				],
				[
					"CarePlan",
					"ImmunizationRecommendation",
					"MedicationRequest",
					"NutritionOrder",
					"ServiceRequest",
				],
				ctx,
			);
			validateReferenceTarget(
				record.composition,
				"composition",
				["http://hl7.org/fhir/StructureDefinition/Composition"],
				["Composition"],
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
				record.performer,
				"performer",
				[
					"http://hl7.org/fhir/StructureDefinition/CareTeam",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				],
				["CareTeam", "Organization", "Practitioner", "PractitionerRole"],
				ctx,
			);
			validateReferenceTarget(
				record.result,
				"result",
				["http://hl7.org/fhir/StructureDefinition/Observation"],
				["Observation"],
				ctx,
			);
			validateReferenceTarget(
				record.resultsInterpreter,
				"resultsInterpreter",
				[
					"http://hl7.org/fhir/StructureDefinition/CareTeam",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				],
				["CareTeam", "Organization", "Practitioner", "PractitionerRole"],
				ctx,
			);
			validateReferenceTarget(
				record.specimen,
				"specimen",
				["http://hl7.org/fhir/StructureDefinition/Specimen"],
				["Specimen"],
				ctx,
			);
			validateReferenceTarget(
				record.study,
				"study",
				[
					"http://hl7.org/fhir/StructureDefinition/GenomicStudy",
					"http://hl7.org/fhir/StructureDefinition/ImagingStudy",
				],
				["GenomicStudy", "ImagingStudy"],
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
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/Substance",
				],
				[
					"BiologicallyDerivedProduct",
					"Device",
					"Group",
					"Location",
					"Medication",
					"Organization",
					"Patient",
					"Practitioner",
					"Substance",
				],
				ctx,
			);
		});

export const DiagnosticReportSchema =
	DiagnosticReportSchemaInternal as z.ZodType<DiagnosticReport>;
