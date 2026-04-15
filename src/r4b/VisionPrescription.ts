// Profile: http://hl7.org/fhir/StructureDefinition/VisionPrescription
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { fhirDateTime } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { VisionPrescription_LensSpecification } from "./VisionPrescription_LensSpecification";
import { VisionPrescription_LensSpecificationSchemaInternal } from "./VisionPrescription_LensSpecification";

/** An authorization for the provision of glasses and/or contact lenses to a patient. */
export interface VisionPrescription extends DomainResource {
	/** The date this resource was created. */
	created: string;
	/** Extensions for created */
	_created?: Element;
	/** The date (and perhaps time) when the prescription was written. */
	dateWritten: string;
	/** Extensions for dateWritten */
	_dateWritten?: Element;
	/** A reference to a resource that identifies the particular occurrence of contact between patient and health care provider during which the prescription was issued. */
	encounter?: Reference;
	/** A unique identifier assigned to this vision prescription. */
	identifier?: Array<Identifier>;
	/** Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals. */
	lensSpecification: Array<VisionPrescription_LensSpecification>;
	/** A resource reference to the person to whom the vision prescription applies. */
	patient: Reference;
	/** The healthcare professional responsible for authorizing the prescription. */
	prescriber: Reference;
	/** This is a VisionPrescription resource. */
	resourceType: "VisionPrescription";
	/** The status of the resource instance. */
	status: "active" | "cancelled" | "draft" | "entered-in-error";
	/** Extensions for status */
	_status?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getVisionPrescription_LensSpecificationSchema =
	(): z.ZodType<VisionPrescription_LensSpecification> =>
		VisionPrescription_LensSpecificationSchemaInternal as z.ZodType<VisionPrescription_LensSpecification>;

/** @internal */
export const VisionPrescriptionSchemaInternal =
	DomainResourceSchemaInternal.extend({
		created: fhirDateTime(),
		_created: z.lazy(getElementSchema).optional(),
		dateWritten: fhirDateTime(),
		_dateWritten: z.lazy(getElementSchema).optional(),
		encounter: z.lazy(getReferenceSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		lensSpecification: z
			.lazy(getVisionPrescription_LensSpecificationSchema)
			.array(),
		patient: z.lazy(getReferenceSchema),
		prescriber: z.lazy(getReferenceSchema),
		resourceType: z.literal("VisionPrescription"),
		status: z.enum(["active", "cancelled", "draft", "entered-in-error"]),
		_status: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.encounter,
				"encounter",
				["http://hl7.org/fhir/StructureDefinition/Encounter"],
				["Encounter"],
				ctx,
			);
			validateReferenceTarget(
				record.patient,
				"patient",
				["http://hl7.org/fhir/StructureDefinition/Patient"],
				["Patient"],
				ctx,
			);
			validateReferenceTarget(
				record.prescriber,
				"prescriber",
				[
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				],
				["Practitioner", "PractitionerRole"],
				ctx,
			);
		});

export const VisionPrescriptionSchema =
	VisionPrescriptionSchemaInternal as z.ZodType<VisionPrescription>;
