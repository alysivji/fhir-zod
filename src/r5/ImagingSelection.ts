// Profile: http://hl7.org/fhir/StructureDefinition/ImagingSelection
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirId, fhirInstant } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
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
import type { ImagingSelection_Instance } from "./ImagingSelection_Instance";
import { ImagingSelection_InstanceSchemaInternal } from "./ImagingSelection_Instance";
import type { ImagingSelection_Performer } from "./ImagingSelection_Performer";
import { ImagingSelection_PerformerSchemaInternal } from "./ImagingSelection_Performer";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A selection of DICOM SOP instances and/or frames within a single Study and Series. This might include additional specifics such as an image region, an Observation UID or a Segmentation Number, allowing linkage to an Observation Resource or transferring this information along with the ImagingStudy Resource. */
export interface ImagingSelection extends DomainResource {
	/** A list of the diagnostic requests that resulted in this imaging selection being performed. */
	basedOn?: Array<Reference>;
	/** The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. */
	bodySite?: CodeableReference;
	/** Classifies the imaging selection. */
	category?: Array<CodeableConcept>;
	/** Reason for referencing the selected content. */
	code: CodeableConcept;
	/** The imaging study from which the imaging selection is made. */
	derivedFrom?: Array<Reference>;
	/** The network service providing retrieval access to the selected images, frames, etc. See implementation notes for information about using DICOM endpoints. */
	endpoint?: Array<Reference>;
	/** The actual focus of an observation when it is not the patient of record representing something or someone associated with the patient such as a spouse, parent, fetus, or donor. For example, fetus observations in a mother's record.  The focus of an observation could also be an existing condition,  an intervention, the subject's diet,  another observation of the subject,  or a body structure such as tumor or implanted device.   An example use case would be using the Observation resource to capture whether the mother is trained to change her child's tracheostomy tube. In this example, the child is the patient of record and the mother is the focus. */
	focus?: Array<Reference>;
	/** The Frame of Reference UID identifying the coordinate system that conveys spatial and/or temporal information for the selected images or frames. */
	frameOfReferenceUid?: string;
	/** Extensions for frameOfReferenceUid */
	_frameOfReferenceUid?: Element;
	/** A unique identifier assigned to this imaging selection. */
	identifier?: Array<Identifier>;
	/** Each imaging selection includes one or more selected DICOM SOP instances. */
	instance?: Array<ImagingSelection_Instance>;
	/** The date and time this imaging selection was created. */
	issued?: string;
	/** Extensions for issued */
	_issued?: Element;
	/** Selector of the instances – human or machine. */
	performer?: Array<ImagingSelection_Performer>;
	/** This is a ImagingSelection resource. */
	resourceType: "ImagingSelection";
	/** The Series Number for the DICOM Series from which the images were selected. */
	seriesNumber?: number;
	/** Extensions for seriesNumber */
	_seriesNumber?: Element;
	/** The Series Instance UID for the DICOM Series from which the images were selected. */
	seriesUid?: string;
	/** Extensions for seriesUid */
	_seriesUid?: Element;
	/** The current state of the ImagingSelection resource. This is not the status of any ImagingStudy, ServiceRequest, or Task resources associated with the ImagingSelection. */
	status: "available" | "entered-in-error" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** The Study Instance UID for the DICOM Study from which the images were selected. */
	studyUid?: string;
	/** Extensions for studyUid */
	_studyUid?: Element;
	/** The patient, or group of patients, location, device, organization, procedure or practitioner this imaging selection is about and into whose or what record the imaging selection is placed. */
	subject?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getImagingSelection_InstanceSchema =
	(): z.ZodType<ImagingSelection_Instance> =>
		ImagingSelection_InstanceSchemaInternal as z.ZodType<ImagingSelection_Instance>;
const getImagingSelection_PerformerSchema =
	(): z.ZodType<ImagingSelection_Performer> =>
		ImagingSelection_PerformerSchemaInternal as z.ZodType<ImagingSelection_Performer>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ImagingSelectionSchemaInternal =
	DomainResourceSchemaInternal.extend({
		basedOn: z.lazy(getReferenceSchema).array().optional(),
		bodySite: z.lazy(getCodeableReferenceSchema).optional(),
		category: z.lazy(getCodeableConceptSchema).array().optional(),
		code: z.lazy(getCodeableConceptSchema),
		derivedFrom: z.lazy(getReferenceSchema).array().optional(),
		endpoint: z.lazy(getReferenceSchema).array().optional(),
		focus: z.lazy(getReferenceSchema).array().optional(),
		frameOfReferenceUid: fhirId().optional(),
		_frameOfReferenceUid: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		instance: z.lazy(getImagingSelection_InstanceSchema).array().optional(),
		issued: fhirInstant().optional(),
		_issued: z.lazy(getElementSchema).optional(),
		performer: z.lazy(getImagingSelection_PerformerSchema).array().optional(),
		resourceType: z.literal("ImagingSelection"),
		seriesNumber: z.number().int().nonnegative().optional(),
		_seriesNumber: z.lazy(getElementSchema).optional(),
		seriesUid: fhirId().optional(),
		_seriesUid: z.lazy(getElementSchema).optional(),
		status: z.enum(["available", "entered-in-error", "unknown"]),
		_status: z.lazy(getElementSchema).optional(),
		studyUid: fhirId().optional(),
		_studyUid: z.lazy(getElementSchema).optional(),
		subject: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.basedOn,
				"basedOn",
				[
					"http://hl7.org/fhir/StructureDefinition/Appointment",
					"http://hl7.org/fhir/StructureDefinition/AppointmentResponse",
					"http://hl7.org/fhir/StructureDefinition/CarePlan",
					"http://hl7.org/fhir/StructureDefinition/ServiceRequest",
					"http://hl7.org/fhir/StructureDefinition/Task",
				],
				[
					"Appointment",
					"AppointmentResponse",
					"CarePlan",
					"ServiceRequest",
					"Task",
				],
				ctx,
			);
			validateReferenceTarget(
				record.derivedFrom,
				"derivedFrom",
				[
					"http://hl7.org/fhir/StructureDefinition/DocumentReference",
					"http://hl7.org/fhir/StructureDefinition/ImagingStudy",
				],
				["DocumentReference", "ImagingStudy"],
				ctx,
			);
			validateReferenceTarget(
				record.endpoint,
				"endpoint",
				["http://hl7.org/fhir/StructureDefinition/Endpoint"],
				["Endpoint"],
				ctx,
			);
			validateReferenceTarget(
				record.focus,
				"focus",
				["http://hl7.org/fhir/StructureDefinition/ImagingSelection"],
				["ImagingSelection"],
				ctx,
			);
			validateReferenceTarget(
				record.subject,
				"subject",
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Group",
					"http://hl7.org/fhir/StructureDefinition/Location",
					"http://hl7.org/fhir/StructureDefinition/Medication",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/Procedure",
					"http://hl7.org/fhir/StructureDefinition/Specimen",
					"http://hl7.org/fhir/StructureDefinition/Substance",
				],
				[
					"Device",
					"Group",
					"Location",
					"Medication",
					"Organization",
					"Patient",
					"Practitioner",
					"Procedure",
					"Specimen",
					"Substance",
				],
				ctx,
			);
		});

export const ImagingSelectionSchema =
	ImagingSelectionSchemaInternal as z.ZodType<ImagingSelection>;
