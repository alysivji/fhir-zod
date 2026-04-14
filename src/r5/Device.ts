// Profile: http://hl7.org/fhir/StructureDefinition/Device
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirDateTime, fhirString, fhirUri } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { ContactPoint } from "./ContactPoint";
import { ContactPointSchemaInternal } from "./ContactPoint";
import type { Count } from "./Count";
import { CountSchemaInternal } from "./Count";
import type { Device_ConformsTo } from "./Device_ConformsTo";
import { Device_ConformsToSchemaInternal } from "./Device_ConformsTo";
import type { Device_Name } from "./Device_Name";
import { Device_NameSchemaInternal } from "./Device_Name";
import type { Device_Property } from "./Device_Property";
import { Device_PropertySchemaInternal } from "./Device_Property";
import type { Device_UdiCarrier } from "./Device_UdiCarrier";
import { Device_UdiCarrierSchemaInternal } from "./Device_UdiCarrier";
import type { Device_Version } from "./Device_Version";
import { Device_VersionSchemaInternal } from "./Device_Version";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Duration } from "./Duration";
import { DurationSchemaInternal } from "./Duration";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** This resource describes the properties (regulated, has real time clock, etc.), adminstrative (manufacturer name, model number, serial number, firmware, etc.), and type (knee replacement, blood pressure cuff, MRI, etc.) of a physical unit (these values do not change much within a given module, for example the serail number, manufacturer name, and model number). An actual unit may consist of several modules in a distinct hierarchy and these are represented by multiple Device resources and bound through the 'parent' element. */
export interface Device extends DomainResource {
	/** The availability of the device. */
	availabilityStatus?: CodeableConcept;
	/** An identifier that supports traceability to the event during which material in this product from one or more biological entities was obtained or pooled. */
	biologicalSourceEvent?: Identifier;
	/** Devices may be associated with one or more categories. */
	category?: Array<CodeableConcept>;
	/** Identifies the standards, specifications, or formal guidances for the capabilities supported by the device. The device may be certified as conformant to these specifications e.g., communication, performance, process, measurement, or specialization standards. */
	conformsTo?: Array<Device_ConformsTo>;
	/** Contact details for an organization or a particular human that is responsible for the device. */
	contact?: Array<ContactPoint>;
	/** The series of occurrences that repeats during the operation of the device. */
	cycle?: Count;
	/** The reference to the definition for the device. */
	definition?: CodeableReference;
	/** The name used to display by default when the device is referenced. Based on intent of use by the resource creator, this may reflect one of the names in Device.name, or may be another simple name. */
	displayName?: string;
	/** Extensions for displayName */
	_displayName?: Element;
	/** A measurement of time during the device's operation (e.g., days, hours, mins, etc.). */
	duration?: Duration;
	/** Technical endpoints providing access to services provided by the device defined at this resource. */
	endpoint?: Array<Reference>;
	/** The date and time beyond which this device is no longer valid or should not be used (if applicable). */
	expirationDate?: string;
	/** Extensions for expirationDate */
	_expirationDate?: Element;
	/** The linked device acting as a communication controller, data collector, translator, or concentrator for the current device (e.g., mobile phone application that relays a blood pressure device's data). */
	gateway?: Array<CodeableReference>;
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
	/** A name of the manufacturer or entity legally responsible for the device. */
	manufacturer?: string;
	/** Extensions for manufacturer */
	_manufacturer?: Element;
	/** The designated condition for performing a task with the device. */
	mode?: CodeableConcept;
	/** The manufacturer's model number for the device. */
	modelNumber?: string;
	/** Extensions for modelNumber */
	_modelNumber?: Element;
	/** This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition. */
	name?: Array<Device_Name>;
	/** Descriptive information, usage information or implantation information that is not captured in an existing element. */
	note?: Array<Annotation>;
	/** An organization that is responsible for the provision and ongoing maintenance of the device. */
	owner?: Reference;
	/** The higher level or encompassing device that this device is a logical part of. */
	parent?: Reference;
	/** The part number or catalog number of the device. */
	partNumber?: string;
	/** Extensions for partNumber */
	_partNumber?: Element;
	/** Static or essentially fixed characteristics or features of the device (e.g., time or timing attributes, resolution, accuracy, intended use or instructions for use, and physical attributes) that are not otherwise captured in more specific attributes. */
	property?: Array<Device_Property>;
	/** This is a Device resource. */
	resourceType: "Device";
	/** Provides additional safety characteristics about a medical device.  For example devices containing latex. */
	safety?: Array<CodeableConcept>;
	/** The serial number assigned by the organization when the device was manufactured. */
	serialNumber?: string;
	/** Extensions for serialNumber */
	_serialNumber?: Element;
	/** The Device record status. This is not the status of the device like availability. */
	status?: "active" | "entered-in-error" | "inactive";
	/** Extensions for status */
	_status?: Element;
	/** The kind or type of device. A device instance may have more than one type - in which case those are the types that apply to the specific instance of the device. */
	type?: Array<CodeableConcept>;
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
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
	ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getCountSchema = (): z.ZodType<Count> =>
	CountSchemaInternal as z.ZodType<Count>;
const getDevice_ConformsToSchema = (): z.ZodType<Device_ConformsTo> =>
	Device_ConformsToSchemaInternal as z.ZodType<Device_ConformsTo>;
const getDevice_NameSchema = (): z.ZodType<Device_Name> =>
	Device_NameSchemaInternal as z.ZodType<Device_Name>;
const getDevice_PropertySchema = (): z.ZodType<Device_Property> =>
	Device_PropertySchemaInternal as z.ZodType<Device_Property>;
const getDevice_UdiCarrierSchema = (): z.ZodType<Device_UdiCarrier> =>
	Device_UdiCarrierSchemaInternal as z.ZodType<Device_UdiCarrier>;
const getDevice_VersionSchema = (): z.ZodType<Device_Version> =>
	Device_VersionSchemaInternal as z.ZodType<Device_Version>;
const getDurationSchema = (): z.ZodType<Duration> =>
	DurationSchemaInternal as z.ZodType<Duration>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DeviceSchemaInternal = DomainResourceSchemaInternal.extend({
	availabilityStatus: z.lazy(getCodeableConceptSchema).optional(),
	biologicalSourceEvent: z.lazy(getIdentifierSchema).optional(),
	category: z.lazy(getCodeableConceptSchema).array().optional(),
	conformsTo: z.lazy(getDevice_ConformsToSchema).array().optional(),
	contact: z.lazy(getContactPointSchema).array().optional(),
	cycle: z.lazy(getCountSchema).optional(),
	definition: z.lazy(getCodeableReferenceSchema).optional(),
	displayName: fhirString().optional(),
	_displayName: z.lazy(getElementSchema).optional(),
	duration: z.lazy(getDurationSchema).optional(),
	endpoint: z.lazy(getReferenceSchema).array().optional(),
	expirationDate: fhirDateTime().optional(),
	_expirationDate: z.lazy(getElementSchema).optional(),
	gateway: z.lazy(getCodeableReferenceSchema).array().optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	location: z.lazy(getReferenceSchema).optional(),
	lotNumber: fhirString().optional(),
	_lotNumber: z.lazy(getElementSchema).optional(),
	manufactureDate: fhirDateTime().optional(),
	_manufactureDate: z.lazy(getElementSchema).optional(),
	manufacturer: fhirString().optional(),
	_manufacturer: z.lazy(getElementSchema).optional(),
	mode: z.lazy(getCodeableConceptSchema).optional(),
	modelNumber: fhirString().optional(),
	_modelNumber: z.lazy(getElementSchema).optional(),
	name: z.lazy(getDevice_NameSchema).array().optional(),
	note: z.lazy(getAnnotationSchema).array().optional(),
	owner: z.lazy(getReferenceSchema).optional(),
	parent: z.lazy(getReferenceSchema).optional(),
	partNumber: fhirString().optional(),
	_partNumber: z.lazy(getElementSchema).optional(),
	property: z.lazy(getDevice_PropertySchema).array().optional(),
	resourceType: z.literal("Device"),
	safety: z.lazy(getCodeableConceptSchema).array().optional(),
	serialNumber: fhirString().optional(),
	_serialNumber: z.lazy(getElementSchema).optional(),
	status: z.enum(["active", "entered-in-error", "inactive"]).optional(),
	_status: z.lazy(getElementSchema).optional(),
	type: z.lazy(getCodeableConceptSchema).array().optional(),
	udiCarrier: z.lazy(getDevice_UdiCarrierSchema).array().optional(),
	url: fhirUri().optional(),
	_url: z.lazy(getElementSchema).optional(),
	version: z.lazy(getDevice_VersionSchema).array().optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.endpoint,
			"endpoint",
			["http://hl7.org/fhir/StructureDefinition/Endpoint"],
			["Endpoint"],
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
	});

export const DeviceSchema = DeviceSchemaInternal as z.ZodType<Device>;
