// Profile: http://hl7.org/fhir/StructureDefinition/Procedure
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
	fhirCanonical,
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Age } from "./Age";
import { AgeSchemaInternal } from "./Age";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
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
import type { Timing } from "./Timing";
import { TimingSchemaInternal } from "./Timing";

/** An action that is or was performed on or for a patient, practitioner, device, organization, or location. For example, this can be a physical intervention on a patient like an operation, or less invasive like long term services, counseling, or hypnotherapy.  This can be a quality or safety inspection for a location, organization, or device.  This can be an accreditation procedure on a practitioner for licensing. */
export interface Procedure extends DomainResource {
	/** A reference to a resource that contains details of the request for this procedure. */
	basedOn?: Array<Reference>;
	/** Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion. */
	bodySite?: Array<CodeableConcept>;
	/** A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure"). */
	category?: Array<CodeableConcept>;
	/** The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy"). */
	code?: CodeableConcept;
	/** Any complications that occurred during the procedure, or in the immediate post-performance period. These are generally tracked separately from the notes, which will typically describe the procedure itself rather than any 'post procedure' issues. */
	complication?: Array<CodeableReference>;
	/** The Encounter during which this Procedure was created or performed or to which the creation of this record is tightly associated. */
	encounter?: Reference;
	/** A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure. */
	focalDevice?: Array<Procedure_FocalDevice>;
	/** Who is the target of the procedure when it is not the subject of record only.  If focus is not present, then subject is the focus.  If focus is present and the subject is one of the targets of the procedure, include subject as a focus as well. If focus is present and the subject is not included in focus, it implies that the procedure was only targeted on the focus. For example, when a caregiver is given education for a patient, the caregiver would be the focus and the procedure record is associated with the subject (e.g. patient).  For example, use focus when recording the target of the education, training, or counseling is the parent or relative of a patient. */
	focus?: Reference;
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
	/** Estimated or actual date, date-time, period, or age when the procedure did occur or is occurring.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured. */
	occurrenceAge?: Age;
	/** Estimated or actual date, date-time, period, or age when the procedure did occur or is occurring.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured. */
	occurrenceDateTime?: string;
	/** Extensions for occurrenceDateTime */
	_occurrenceDateTime?: Element;
	/** Estimated or actual date, date-time, period, or age when the procedure did occur or is occurring.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured. */
	occurrencePeriod?: Period;
	/** Estimated or actual date, date-time, period, or age when the procedure did occur or is occurring.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured. */
	occurrenceRange?: Range;
	/** Estimated or actual date, date-time, period, or age when the procedure did occur or is occurring.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured. */
	occurrenceString?: string;
	/** Extensions for occurrenceString */
	_occurrenceString?: Element;
	/** Estimated or actual date, date-time, period, or age when the procedure did occur or is occurring.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured. */
	occurrenceTiming?: Timing;
	/** The outcome of the procedure - did it resolve the reasons for the procedure being performed? */
	outcome?: CodeableConcept;
	/** A larger event of which this particular procedure is a component or step. */
	partOf?: Array<Reference>;
	/** Indicates who or what performed the procedure and how they were involved. */
	performer?: Array<Procedure_Performer>;
	/** The coded reason or reference why the procedure was performed. This may be a coded entity of some type, be present as text, or be a reference to one of several resources that justify the procedure. */
	reason?: Array<CodeableReference>;
	/** The date the occurrence of the procedure was first captured in the record regardless of Procedure.status (potentially after the occurrence of the event). */
	recorded?: string;
	/** Extensions for recorded */
	_recorded?: Element;
	/** Individual who recorded the record and takes responsibility for its content. */
	recorder?: Reference;
	/** This could be a histology result, pathology report, surgical report, etc. */
	report?: Array<Reference>;
	/** Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report. */
	reportedBoolean?: boolean;
	/** Extensions for reportedBoolean */
	_reportedBoolean?: Element;
	/** Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report. */
	reportedReference?: Reference;
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
	/** On whom or on what the procedure was performed. This is usually an individual human, but can also be performed on animals, groups of humans or animals, organizations or practitioners (for licensing), locations or devices (for safety inspections or regulatory authorizations).  If the actual focus of the procedure is different from the subject, the focus element specifies the actual focus of the procedure. */
	subject: Reference;
	/** Other resources from the patient record that may be relevant to the procedure.  The information from these resources was either used to create the instance or is provided to help with its interpretation. This extension should not be used if more specific inline elements or extensions are available. */
	supportingInfo?: Array<Reference>;
	/** Identifies medications, devices and any other substance used as part of the procedure. */
	used?: Array<CodeableReference>;
}

const getAgeSchema = (): z.ZodType<Age> => AgeSchemaInternal as z.ZodType<Age>;
const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
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
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const ProcedureSchemaInternal = DomainResourceSchemaInternal.extend({
	basedOn: z.lazy(getReferenceSchema).array().optional(),
	bodySite: z.lazy(getCodeableConceptSchema).array().optional(),
	category: z.lazy(getCodeableConceptSchema).array().optional(),
	code: z.lazy(getCodeableConceptSchema).optional(),
	complication: z.lazy(getCodeableReferenceSchema).array().optional(),
	encounter: z.lazy(getReferenceSchema).optional(),
	focalDevice: z.lazy(getProcedure_FocalDeviceSchema).array().optional(),
	focus: z.lazy(getReferenceSchema).optional(),
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
	occurrenceAge: z.lazy(getAgeSchema).optional(),
	occurrenceDateTime: fhirDateTime().optional(),
	_occurrenceDateTime: z.lazy(getElementSchema).optional(),
	occurrencePeriod: z.lazy(getPeriodSchema).optional(),
	occurrenceRange: z.lazy(getRangeSchema).optional(),
	occurrenceString: fhirString().optional(),
	_occurrenceString: z.lazy(getElementSchema).optional(),
	occurrenceTiming: z.lazy(getTimingSchema).optional(),
	outcome: z.lazy(getCodeableConceptSchema).optional(),
	partOf: z.lazy(getReferenceSchema).array().optional(),
	performer: z.lazy(getProcedure_PerformerSchema).array().optional(),
	reason: z.lazy(getCodeableReferenceSchema).array().optional(),
	recorded: fhirDateTime().optional(),
	_recorded: z.lazy(getElementSchema).optional(),
	recorder: z.lazy(getReferenceSchema).optional(),
	report: z.lazy(getReferenceSchema).array().optional(),
	reportedBoolean: z.boolean().optional(),
	_reportedBoolean: z.lazy(getElementSchema).optional(),
	reportedReference: z.lazy(getReferenceSchema).optional(),
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
	supportingInfo: z.lazy(getReferenceSchema).array().optional(),
	used: z.lazy(getCodeableReferenceSchema).array().optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const occurrence_x_Present = [
			"occurrenceAge",
			"occurrenceDateTime",
			"occurrencePeriod",
			"occurrenceRange",
			"occurrenceString",
			"occurrenceTiming",
		].filter((field) => record[field] !== undefined);
		if (occurrence_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of occurrenceAge, occurrenceDateTime, occurrencePeriod, occurrenceRange, occurrenceString, occurrenceTiming may be present for occurrence[x]",
				path: [occurrence_x_Present[0]],
			});
		}
		const reported_x_Present = ["reportedBoolean", "reportedReference"].filter(
			(field) => record[field] !== undefined,
		);
		if (reported_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of reportedBoolean, reportedReference may be present for reported[x]",
				path: [reported_x_Present[0]],
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
			record.encounter,
			"encounter",
			["http://hl7.org/fhir/StructureDefinition/Encounter"],
			["Encounter"],
			ctx,
		);
		validateReferenceTarget(
			record.focus,
			"focus",
			[
				"http://hl7.org/fhir/StructureDefinition/CareTeam",
				"http://hl7.org/fhir/StructureDefinition/Group",
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				"http://hl7.org/fhir/StructureDefinition/Specimen",
			],
			[
				"CareTeam",
				"Group",
				"Organization",
				"Patient",
				"Practitioner",
				"PractitionerRole",
				"RelatedPerson",
				"Specimen",
			],
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
			record.reportedReference,
			"reportedReference",
			[
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			[
				"Organization",
				"Patient",
				"Practitioner",
				"PractitionerRole",
				"RelatedPerson",
			],
			ctx,
		);
		validateReferenceTarget(
			record.subject,
			"subject",
			[
				"http://hl7.org/fhir/StructureDefinition/Device",
				"http://hl7.org/fhir/StructureDefinition/Group",
				"http://hl7.org/fhir/StructureDefinition/Location",
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
			],
			[
				"Device",
				"Group",
				"Location",
				"Organization",
				"Patient",
				"Practitioner",
			],
			ctx,
		);
		validateReferenceTarget(
			record.supportingInfo,
			"supportingInfo",
			["http://hl7.org/fhir/StructureDefinition/Resource"],
			["Resource"],
			ctx,
		);
	});

export const ProcedureSchema = ProcedureSchemaInternal as z.ZodType<Procedure>;
