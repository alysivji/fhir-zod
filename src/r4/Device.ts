// Profile: http://hl7.org/fhir/StructureDefinition/Device
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import { fhirDateTime } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { ContactPoint } from "./ContactPoint";
import { ContactPointSchemaInternal } from "./ContactPoint";
import type { Device_DeviceName } from "./Device_DeviceName";
import { Device_DeviceNameSchemaInternal } from "./Device_DeviceName";
import type { Device_Property } from "./Device_Property";
import { Device_PropertySchemaInternal } from "./Device_Property";
import type { Device_Specialization } from "./Device_Specialization";
import { Device_SpecializationSchemaInternal } from "./Device_Specialization";
import type { Device_UdiCarrier } from "./Device_UdiCarrier";
import { Device_UdiCarrierSchemaInternal } from "./Device_UdiCarrier";
import type { Device_Version } from "./Device_Version";
import { Device_VersionSchemaInternal } from "./Device_Version";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
export interface Device extends DomainResource {
	/** Contact details for an organization or a particular human that is responsible for the device. */
	contact?: Array<ContactPoint>;
	/** The reference to the definition for the device. */
	definition?: Reference;
	/** This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition. */
	deviceName?: Array<Device_DeviceName>;
	/** The distinct identification string as required by regulation for a human cell, tissue, or cellular and tissue-based product. */
	distinctIdentifier?: string;
	/** Extensions for distinctIdentifier */
	_distinctIdentifier?: Element;
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
	/** The model number for the device. */
	modelNumber?: string;
	/** Extensions for modelNumber */
	_modelNumber?: Element;
	/** Descriptive information, usage information or implantation information that is not captured in an existing element. */
	note?: Array<Annotation>;
	/** An organization that is responsible for the provision and ongoing maintenance of the device. */
	owner?: Reference;
	/** The parent device. */
	parent?: Reference;
	/** The part number of the device. */
	partNumber?: string;
	/** Extensions for partNumber */
	_partNumber?: Element;
	/** Patient information, If the device is affixed to a person. */
	patient?: Reference;
	/** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties. */
	property?: Array<Device_Property>;
	/** This is a Device resource. */
	resourceType: "Device";
	/** Provides additional safety characteristics about a medical device.  For example devices containing latex. */
	safety?: Array<CodeableConcept>;
	/** The serial number assigned by the organization when the device was manufactured. */
	serialNumber?: string;
	/** Extensions for serialNumber */
	_serialNumber?: Element;
	/** The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication. */
	specialization?: Array<Device_Specialization>;
	/** Status of the Device availability. */
	status?: "active" | "entered-in-error" | "inactive" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** Reason for the dtatus of the Device availability. */
	statusReason?: Array<CodeableConcept>;
	/** The kind or type of device. */
	type?: CodeableConcept;
	/** Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold. */
	udiCarrier?: Array<Device_UdiCarrier>;
	/** A network address on which the device may be contacted directly. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
	/** The actual design of the device or software version running on the device. */
	version?: Array<Device_Version>;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
	ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getDevice_DeviceNameSchema = (): z.ZodType<Device_DeviceName> =>
	Device_DeviceNameSchemaInternal as z.ZodType<Device_DeviceName>;
const getDevice_PropertySchema = (): z.ZodType<Device_Property> =>
	Device_PropertySchemaInternal as z.ZodType<Device_Property>;
const getDevice_SpecializationSchema = (): z.ZodType<Device_Specialization> =>
	Device_SpecializationSchemaInternal as z.ZodType<Device_Specialization>;
const getDevice_UdiCarrierSchema = (): z.ZodType<Device_UdiCarrier> =>
	Device_UdiCarrierSchemaInternal as z.ZodType<Device_UdiCarrier>;
const getDevice_VersionSchema = (): z.ZodType<Device_Version> =>
	Device_VersionSchemaInternal as z.ZodType<Device_Version>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DeviceSchemaInternal = DomainResourceSchemaInternal.extend({
	contact: z.lazy(getContactPointSchema).array().optional(),
	definition: z.lazy(getReferenceSchema).optional(),
	deviceName: z.lazy(getDevice_DeviceNameSchema).array().optional(),
	distinctIdentifier: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	_distinctIdentifier: z.lazy(getElementSchema).optional(),
	expirationDate: fhirDateTime().optional(),
	_expirationDate: z.lazy(getElementSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	location: z.lazy(getReferenceSchema).optional(),
	lotNumber: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	_lotNumber: z.lazy(getElementSchema).optional(),
	manufactureDate: fhirDateTime().optional(),
	_manufactureDate: z.lazy(getElementSchema).optional(),
	manufacturer: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	_manufacturer: z.lazy(getElementSchema).optional(),
	modelNumber: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	_modelNumber: z.lazy(getElementSchema).optional(),
	note: z.lazy(getAnnotationSchema).array().optional(),
	owner: z.lazy(getReferenceSchema).optional(),
	parent: z.lazy(getReferenceSchema).optional(),
	partNumber: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	_partNumber: z.lazy(getElementSchema).optional(),
	patient: z.lazy(getReferenceSchema).optional(),
	property: z.lazy(getDevice_PropertySchema).array().optional(),
	resourceType: z.literal("Device"),
	safety: z.lazy(getCodeableConceptSchema).array().optional(),
	serialNumber: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	_serialNumber: z.lazy(getElementSchema).optional(),
	specialization: z.lazy(getDevice_SpecializationSchema).array().optional(),
	status: z
		.enum(["active", "entered-in-error", "inactive", "unknown"])
		.optional(),
	_status: z.lazy(getElementSchema).optional(),
	statusReason: z.lazy(getCodeableConceptSchema).array().optional(),
	type: z.lazy(getCodeableConceptSchema).optional(),
	udiCarrier: z.lazy(getDevice_UdiCarrierSchema).array().optional(),
	url: z.string().regex(/\S*/).optional(),
	_url: z.lazy(getElementSchema).optional(),
	version: z.lazy(getDevice_VersionSchema).array().optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.definition,
			"definition",
			["http://hl7.org/fhir/StructureDefinition/DeviceDefinition"],
			["DeviceDefinition"],
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
			record.owner,
			"owner",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
		validateReferenceTarget(
			record.parent,
			"parent",
			["http://hl7.org/fhir/StructureDefinition/Device"],
			["Device"],
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
