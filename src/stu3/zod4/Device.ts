// Profile: http://hl7.org/fhir/StructureDefinition/Device
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import {
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { ContactPoint } from "./ContactPoint";
import { ContactPointSchemaInternal } from "./ContactPoint";
import type { Device_Udi } from "./Device_Udi";
import { Device_UdiSchemaInternal } from "./Device_Udi";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Base StructureDefinition for Device Resource */
export interface Device extends DomainResource {
	/** Contact details for an organization or a particular human that is responsible for the device. */
	contact?: Array<ContactPoint>;
	/** The date and time beyond which this device is no longer valid or should not be used (if applicable). */
	expirationDate?: string;
	/** Extensions for expirationDate */
	_expirationDate?: Element;
	/** Unique instance identifiers assigned to a device by manufacturers other organizations or owners. */
	identifier?: Array<Identifier>;
	/** The place where the device can be found. */
	location?: Reference;
	/** Lot number assigned by the manufacturer. */
	lotNumber?: string;
	/** Extensions for lotNumber */
	_lotNumber?: Element;
	/** The date and time when the device was manufactured. */
	manufactureDate?: string;
	/** Extensions for manufactureDate */
	_manufactureDate?: Element;
	/** A name of the manufacturer. */
	manufacturer?: string;
	/** Extensions for manufacturer */
	_manufacturer?: Element;
	/** The "model" is an identifier assigned by the manufacturer to identify the product by its type. This number is shared by the all devices sold as the same type. */
	model?: string;
	/** Extensions for model */
	_model?: Element;
	/** Descriptive information, usage information or implantation information that is not captured in an existing element. */
	note?: Array<Annotation>;
	/** An organization that is responsible for the provision and ongoing maintenance of the device. */
	owner?: Reference;
	/** Patient information, If the device is affixed to a person. */
	patient?: Reference;
	/** This is a Device resource. */
	resourceType: "Device";
	/** Provides additional safety characteristics about a medical device.  For example devices containing latex. */
	safety?: Array<CodeableConcept>;
	/** Status of the Device availability. */
	status?: "active" | "entered-in-error" | "inactive" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** Code or identifier to identify a kind of device. */
	type?: CodeableConcept;
	/** [Unique device identifier (UDI)](device.html#5.11.3.2.2) assigned to device label or package. */
	udi?: Device_Udi;
	/** A network address on which the device may be contacted directly. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
	/** The version of the device, if the device has multiple releases under the same model, or if the device is software or carries firmware. */
	version?: string;
	/** Extensions for version */
	_version?: Element;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
	ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getDevice_UdiSchema = (): z.ZodType<Device_Udi> =>
	Device_UdiSchemaInternal as z.ZodType<Device_Udi>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DeviceSchemaInternal = DomainResourceSchemaInternal.extend({
	contact: z.lazy(getContactPointSchema).array().optional(),
	expirationDate: fhirDateTime().optional(),
	_expirationDate: z.lazy(getElementSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	location: z.lazy(getReferenceSchema).optional(),
	lotNumber: fhirString().optional(),
	_lotNumber: z.lazy(getElementSchema).optional(),
	manufactureDate: fhirDateTime().optional(),
	_manufactureDate: z.lazy(getElementSchema).optional(),
	manufacturer: fhirString().optional(),
	_manufacturer: z.lazy(getElementSchema).optional(),
	model: fhirString().optional(),
	_model: z.lazy(getElementSchema).optional(),
	note: z.lazy(getAnnotationSchema).array().optional(),
	owner: z.lazy(getReferenceSchema).optional(),
	patient: z.lazy(getReferenceSchema).optional(),
	resourceType: z.literal("Device"),
	safety: z.lazy(getCodeableConceptSchema).array().optional(),
	status: z
		.enum(["active", "entered-in-error", "inactive", "unknown"])
		.optional(),
	_status: z.lazy(getElementSchema).optional(),
	type: z.lazy(getCodeableConceptSchema).optional(),
	udi: z.lazy(getDevice_UdiSchema).optional(),
	url: fhirUri().optional(),
	_url: z.lazy(getElementSchema).optional(),
	version: fhirString().optional(),
	_version: z.lazy(getElementSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.location,
			"location",
			["http://hl7.org/fhir/StructureDefinition/Location"],
			["Location"],
			ctx,
		);
		validateReferenceTarget(
			record.owner,
			"owner",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
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

export const DeviceSchema = DeviceSchemaInternal as z.ZodType<Device>;
