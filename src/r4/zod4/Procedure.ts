// Profile: http://hl7.org/fhir/StructureDefinition/Procedure
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
	fhirCanonical,
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Age } from "./Age";
import { AgeSchemaInternal } from "./Age";
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
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
export interface Procedure extends DomainResource {
	/** Individual who is making the procedure statement. */
	asserter?: Reference;
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
	/** The Encounter during which this Procedure was created or performed or to which the creation of this record is tightly associated. */
	encounter?: Reference;
	/** A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure. */
	focalDevice?: Array<Procedure_FocalDevice>;
	/** If the procedure required specific follow up - e.g. removal of sutures. The follow up may be represented as a simple note or could potentially be more complex, in which case the CarePlan resource can be used. */
	followUp?: Array<CodeableConcept>;
	/** Business identifiers assigned to this procedure by the performer or other systems which remain constant as the resource is updated and is propagated from server to server. */
	identifier?: Array<Identifier>;
	/** The URL pointing to a FHIR-defined protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure. */
	instantiatesCanonical?: Array<string | null>;
	/** Extensions for instantiatesCanonical */
	_instantiatesCanonical?: Array<Element | null>;
	/** The URL pointing to an externally maintained protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure. */
	instantiatesUri?: Array<string | null>;
	/** Extensions for instantiatesUri */
	_instantiatesUri?: Array<Element | null>;
	/** The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant. */
	location?: Reference;
	/** Any other notes and comments about the procedure. */
	note?: Array<Annotation>;
	/** The outcome of the procedure - did it resolve the reasons for the procedure being performed? */
	outcome?: CodeableConcept;
	/** A larger event of which this particular procedure is a component or step. */
	partOf?: Array<Reference>;
	/** Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured. */
	performedAge?: Age;
	/** Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured. */
	performedDateTime?: string;
	/** Extensions for performedDateTime */
	_performedDateTime?: Element;
	/** Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured. */
	performedPeriod?: Period;
	/** Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured. */
	performedRange?: Range;
	/** Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured. */
	performedString?: string;
	/** Extensions for performedString */
	_performedString?: Element;
	/** Limited to "real" people rather than equipment. */
	performer?: Array<Procedure_Performer>;
	/** The coded reason why the procedure was performed. This may be a coded entity of some type, or may simply be present as text. */
	reasonCode?: Array<CodeableConcept>;
	/** The justification of why the procedure was performed. */
	reasonReference?: Array<Reference>;
	/** Individual who recorded the record and takes responsibility for its content. */
	recorder?: Reference;
	/** This could be a histology result, pathology report, surgical report, etc. */
	report?: Array<Reference>;
	/** This is a Procedure resource. */
	resourceType: "Procedure";
	/** A code specifying the state of the procedure. Generally, this will be the in-progress or completed state. */
	status:
		| "completed"
		| "entered-in-error"
		| "in-progress"
		| "not-done"
		| "on-hold"
		| "preparation"
		| "stopped"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** Captures the reason for the current state of the procedure. */
	statusReason?: CodeableConcept;
	/** The person, animal or group on which the procedure was performed. */
	subject: Reference;
	/** Identifies coded items that were used as part of the procedure. */
	usedCode?: Array<CodeableConcept>;
	/** Identifies medications, devices and any other substance used as part of the procedure. */
	usedReference?: Array<Reference>;
}

const getAgeSchema = (): z.ZodType<Age> => AgeSchemaInternal as z.ZodType<Age>;
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
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ProcedureSchemaInternal = DomainResourceSchemaInternal.extend({
	asserter: z.lazy(getReferenceSchema).optional(),
	basedOn: z.lazy(getReferenceSchema).array().optional(),
	bodySite: z.lazy(getCodeableConceptSchema).array().optional(),
	category: z.lazy(getCodeableConceptSchema).optional(),
	code: z.lazy(getCodeableConceptSchema).optional(),
	complication: z.lazy(getCodeableConceptSchema).array().optional(),
	complicationDetail: z.lazy(getReferenceSchema).array().optional(),
	encounter: z.lazy(getReferenceSchema).optional(),
	focalDevice: z.lazy(getProcedure_FocalDeviceSchema).array().optional(),
	followUp: z.lazy(getCodeableConceptSchema).array().optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	instantiatesCanonical: fhirCanonical().nullable().array().optional(),
	_instantiatesCanonical: z
		.lazy(getElementSchema)
		.nullable()
		.array()
		.optional(),
	instantiatesUri: fhirUri().nullable().array().optional(),
	_instantiatesUri: z.lazy(getElementSchema).nullable().array().optional(),
	location: z.lazy(getReferenceSchema).optional(),
	note: z.lazy(getAnnotationSchema).array().optional(),
	outcome: z.lazy(getCodeableConceptSchema).optional(),
	partOf: z.lazy(getReferenceSchema).array().optional(),
	performedAge: z.lazy(getAgeSchema).optional(),
	performedDateTime: fhirDateTime().optional(),
	_performedDateTime: z.lazy(getElementSchema).optional(),
	performedPeriod: z.lazy(getPeriodSchema).optional(),
	performedRange: z.lazy(getRangeSchema).optional(),
	performedString: fhirString().optional(),
	_performedString: z.lazy(getElementSchema).optional(),
	performer: z.lazy(getProcedure_PerformerSchema).array().optional(),
	reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
	reasonReference: z.lazy(getReferenceSchema).array().optional(),
	recorder: z.lazy(getReferenceSchema).optional(),
	report: z.lazy(getReferenceSchema).array().optional(),
	resourceType: z.literal("Procedure"),
	status: z.enum([
		"completed",
		"entered-in-error",
		"in-progress",
		"not-done",
		"on-hold",
		"preparation",
		"stopped",
		"unknown",
	]),
	_status: z.lazy(getElementSchema).optional(),
	statusReason: z.lazy(getCodeableConceptSchema).optional(),
	subject: z.lazy(getReferenceSchema),
	usedCode: z.lazy(getCodeableConceptSchema).array().optional(),
	usedReference: z.lazy(getReferenceSchema).array().optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const performed_x_Present = [
			"performedAge",
			"performedDateTime",
			"performedPeriod",
			"performedRange",
			"performedString",
		].filter((field) => record[field] !== undefined);
		if (performed_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of performedAge, performedDateTime, performedPeriod, performedRange, performedString may be present for performed[x]",
				path: [performed_x_Present[0]],
			});
		}
		validatePrimitiveArrayPair(
			record.instantiatesCanonical,
			record._instantiatesCanonical,
			"instantiatesCanonical",
			"_instantiatesCanonical",
			ctx,
		);
		validatePrimitiveArrayPair(
			record.instantiatesUri,
			record._instantiatesUri,
			"instantiatesUri",
			"_instantiatesUri",
			ctx,
		);
		validateReferenceTarget(
			record.asserter,
			"asserter",
			[
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			["Patient", "Practitioner", "PractitionerRole", "RelatedPerson"],
			ctx,
		);
		validateReferenceTarget(
			record.basedOn,
			"basedOn",
			[
				"http://hl7.org/fhir/StructureDefinition/CarePlan",
				"http://hl7.org/fhir/StructureDefinition/ServiceRequest",
			],
			["CarePlan", "ServiceRequest"],
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
			record.encounter,
			"encounter",
			["http://hl7.org/fhir/StructureDefinition/Encounter"],
			["Encounter"],
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
				"http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
				"http://hl7.org/fhir/StructureDefinition/DocumentReference",
				"http://hl7.org/fhir/StructureDefinition/Observation",
				"http://hl7.org/fhir/StructureDefinition/Procedure",
			],
			[
				"Condition",
				"DiagnosticReport",
				"DocumentReference",
				"Observation",
				"Procedure",
			],
			ctx,
		);
		validateReferenceTarget(
			record.recorder,
			"recorder",
			[
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			["Patient", "Practitioner", "PractitionerRole", "RelatedPerson"],
			ctx,
		);
		validateReferenceTarget(
			record.report,
			"report",
			[
				"http://hl7.org/fhir/StructureDefinition/Composition",
				"http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
				"http://hl7.org/fhir/StructureDefinition/DocumentReference",
			],
			["Composition", "DiagnosticReport", "DocumentReference"],
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
