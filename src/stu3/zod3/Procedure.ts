// Profile: http://hl7.org/fhir/StructureDefinition/Procedure
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { fhirDateTime } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Procedure_FocalDevice } from "./Procedure_FocalDevice";
import { Procedure_FocalDeviceSchemaInternal } from "./Procedure_FocalDevice";
import type { Procedure_Performer } from "./Procedure_Performer";
import { Procedure_PerformerSchemaInternal } from "./Procedure_Performer";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Base StructureDefinition for Procedure Resource */
export interface Procedure extends DomainResource {
	/** A reference to a resource that contains details of the request for this procedure. */
	basedOn?: Array<Reference>;
	/** Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion. */
	bodySite?: Array<CodeableConcept>;
	/** A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure"). */
	category?: CodeableConcept;
	/** The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy"). */
	code?: CodeableConcept;
	/** Any complications that occurred during the procedure, or in the immediate post-performance period. These are generally tracked separately from the notes, which will typically describe the procedure itself rather than any 'post procedure' issues. */
	complication?: Array<CodeableConcept>;
	/** Any complications that occurred during the procedure, or in the immediate post-performance period. */
	complicationDetail?: Array<Reference>;
	/** The encounter during which the procedure was performed. */
	context?: Reference;
	/** A protocol, guideline, orderset or other definition that was adhered to in whole or in part by this procedure. */
	definition?: Array<Reference>;
	/** A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure. */
	focalDevice?: Array<Procedure_FocalDevice>;
	/** If the procedure required specific follow up - e.g. removal of sutures. The followup may be represented as a simple note, or could potentially be more complex in which case the CarePlan resource can be used. */
	followUp?: Array<CodeableConcept>;
	/** This records identifiers associated with this procedure that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation). */
	identifier?: Array<Identifier>;
	/** The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant. */
	location?: Reference;
	/** Set this to true if the record is saying that the procedure was NOT performed. */
	notDone?: boolean;
	/** Extensions for notDone */
	_notDone?: Element;
	/** A code indicating why the procedure was not performed. */
	notDoneReason?: CodeableConcept;
	/** Any other notes about the procedure.  E.g. the operative notes. */
	note?: Array<Annotation>;
	/** The outcome of the procedure - did it resolve reasons for the procedure being performed? */
	outcome?: CodeableConcept;
	/** A larger event of which this particular procedure is a component or step. */
	partOf?: Array<Reference>;
	/** The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured. */
	performedDateTime?: string;
	/** Extensions for performedDateTime */
	_performedDateTime?: Element;
	/** The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured. */
	performedPeriod?: Period;
	/** Limited to 'real' people rather than equipment. */
	performer?: Array<Procedure_Performer>;
	/** The coded reason why the procedure was performed. This may be coded entity of some type, or may simply be present as text. */
	reasonCode?: Array<CodeableConcept>;
	/** The condition that is the reason why the procedure was performed. */
	reasonReference?: Array<Reference>;
	/** This could be a histology result, pathology report, surgical report, etc.. */
	report?: Array<Reference>;
	/** This is a Procedure resource. */
	resourceType: "Procedure";
	/** A code specifying the state of the procedure. Generally this will be in-progress or completed state. */
	status:
		| "aborted"
		| "completed"
		| "entered-in-error"
		| "in-progress"
		| "preparation"
		| "suspended"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** The person, animal or group on which the procedure was performed. */
	subject: Reference;
	/** Identifies coded items that were used as part of the procedure. */
	usedCode?: Array<CodeableConcept>;
	/** Identifies medications, devices and any other substance used as part of the procedure. */
	usedReference?: Array<Reference>;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getProcedure_FocalDeviceSchema = (): z.ZodType<Procedure_FocalDevice> =>
	Procedure_FocalDeviceSchemaInternal as z.ZodType<Procedure_FocalDevice>;
const getProcedure_PerformerSchema = (): z.ZodType<Procedure_Performer> =>
	Procedure_PerformerSchemaInternal as z.ZodType<Procedure_Performer>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ProcedureSchemaInternal = DomainResourceSchemaInternal.extend({
	basedOn: z.lazy(getReferenceSchema).array().optional(),
	bodySite: z.lazy(getCodeableConceptSchema).array().optional(),
	category: z.lazy(getCodeableConceptSchema).optional(),
	code: z.lazy(getCodeableConceptSchema).optional(),
	complication: z.lazy(getCodeableConceptSchema).array().optional(),
	complicationDetail: z.lazy(getReferenceSchema).array().optional(),
	context: z.lazy(getReferenceSchema).optional(),
	definition: z.lazy(getReferenceSchema).array().optional(),
	focalDevice: z.lazy(getProcedure_FocalDeviceSchema).array().optional(),
	followUp: z.lazy(getCodeableConceptSchema).array().optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	location: z.lazy(getReferenceSchema).optional(),
	notDone: z.boolean().optional(),
	_notDone: z.lazy(getElementSchema).optional(),
	notDoneReason: z.lazy(getCodeableConceptSchema).optional(),
	note: z.lazy(getAnnotationSchema).array().optional(),
	outcome: z.lazy(getCodeableConceptSchema).optional(),
	partOf: z.lazy(getReferenceSchema).array().optional(),
	performedDateTime: fhirDateTime().optional(),
	_performedDateTime: z.lazy(getElementSchema).optional(),
	performedPeriod: z.lazy(getPeriodSchema).optional(),
	performer: z.lazy(getProcedure_PerformerSchema).array().optional(),
	reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
	reasonReference: z.lazy(getReferenceSchema).array().optional(),
	report: z.lazy(getReferenceSchema).array().optional(),
	resourceType: z.literal("Procedure"),
	status: z.enum([
		"aborted",
		"completed",
		"entered-in-error",
		"in-progress",
		"preparation",
		"suspended",
		"unknown",
	]),
	_status: z.lazy(getElementSchema).optional(),
	subject: z.lazy(getReferenceSchema),
	usedCode: z.lazy(getCodeableConceptSchema).array().optional(),
	usedReference: z.lazy(getReferenceSchema).array().optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const performed_x_Present = ["performedDateTime", "performedPeriod"].filter(
			(field) => record[field] !== undefined,
		);
		if (performed_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of performedDateTime, performedPeriod may be present for performed[x]",
				path: [performed_x_Present[0]],
			});
		}
		validateReferenceTarget(
			record.basedOn,
			"basedOn",
			[
				"http://hl7.org/fhir/StructureDefinition/CarePlan",
				"http://hl7.org/fhir/StructureDefinition/ProcedureRequest",
				"http://hl7.org/fhir/StructureDefinition/ReferralRequest",
			],
			["CarePlan", "ProcedureRequest", "ReferralRequest"],
			ctx,
		);
		validateReferenceTarget(
			record.complicationDetail,
			"complicationDetail",
			["http://hl7.org/fhir/StructureDefinition/Condition"],
			["Condition"],
			ctx,
		);
		validateReferenceTarget(
			record.context,
			"context",
			[
				"http://hl7.org/fhir/StructureDefinition/Encounter",
				"http://hl7.org/fhir/StructureDefinition/EpisodeOfCare",
			],
			["Encounter", "EpisodeOfCare"],
			ctx,
		);
		validateReferenceTarget(
			record.definition,
			"definition",
			[
				"http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
				"http://hl7.org/fhir/StructureDefinition/HealthcareService",
				"http://hl7.org/fhir/StructureDefinition/PlanDefinition",
			],
			["ActivityDefinition", "HealthcareService", "PlanDefinition"],
			ctx,
		);
		validateReferenceTarget(
			record.location,
			"location",
			["http://hl7.org/fhir/StructureDefinition/Location"],
			["Location"],
			ctx,
		);
		validateReferenceTarget(
			record.partOf,
			"partOf",
			[
				"http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
				"http://hl7.org/fhir/StructureDefinition/Observation",
				"http://hl7.org/fhir/StructureDefinition/Procedure",
			],
			["MedicationAdministration", "Observation", "Procedure"],
			ctx,
		);
		validateReferenceTarget(
			record.reasonReference,
			"reasonReference",
			[
				"http://hl7.org/fhir/StructureDefinition/Condition",
				"http://hl7.org/fhir/StructureDefinition/Observation",
			],
			["Condition", "Observation"],
			ctx,
		);
		validateReferenceTarget(
			record.report,
			"report",
			["http://hl7.org/fhir/StructureDefinition/DiagnosticReport"],
			["DiagnosticReport"],
			ctx,
		);
		validateReferenceTarget(
			record.subject,
			"subject",
			[
				"http://hl7.org/fhir/StructureDefinition/Group",
				"http://hl7.org/fhir/StructureDefinition/Patient",
			],
			["Group", "Patient"],
			ctx,
		);
		validateReferenceTarget(
			record.usedReference,
			"usedReference",
			[
				"http://hl7.org/fhir/StructureDefinition/Device",
				"http://hl7.org/fhir/StructureDefinition/Medication",
				"http://hl7.org/fhir/StructureDefinition/Substance",
			],
			["Device", "Medication", "Substance"],
			ctx,
		);
	});

export const ProcedureSchema = ProcedureSchemaInternal as z.ZodType<Procedure>;
