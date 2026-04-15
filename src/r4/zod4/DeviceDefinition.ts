// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirString, fhirUri } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { ContactPoint } from "./ContactPoint";
import { ContactPointSchemaInternal } from "./ContactPoint";
import type { DeviceDefinition_Capability } from "./DeviceDefinition_Capability";
import { DeviceDefinition_CapabilitySchemaInternal } from "./DeviceDefinition_Capability";
import type { DeviceDefinition_DeviceName } from "./DeviceDefinition_DeviceName";
import { DeviceDefinition_DeviceNameSchemaInternal } from "./DeviceDefinition_DeviceName";
import type { DeviceDefinition_Material } from "./DeviceDefinition_Material";
import { DeviceDefinition_MaterialSchemaInternal } from "./DeviceDefinition_Material";
import type { DeviceDefinition_Property } from "./DeviceDefinition_Property";
import { DeviceDefinition_PropertySchemaInternal } from "./DeviceDefinition_Property";
import type { DeviceDefinition_Specialization } from "./DeviceDefinition_Specialization";
import { DeviceDefinition_SpecializationSchemaInternal } from "./DeviceDefinition_Specialization";
import type { DeviceDefinition_UdiDeviceIdentifier } from "./DeviceDefinition_UdiDeviceIdentifier";
import { DeviceDefinition_UdiDeviceIdentifierSchemaInternal } from "./DeviceDefinition_UdiDeviceIdentifier";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { ProdCharacteristic } from "./ProdCharacteristic";
import { ProdCharacteristicSchemaInternal } from "./ProdCharacteristic";
import type { ProductShelfLife } from "./ProductShelfLife";
import { ProductShelfLifeSchemaInternal } from "./ProductShelfLife";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface DeviceDefinition extends DomainResource {
	/** Device capabilities. */
	capability?: Array<DeviceDefinition_Capability>;
	/** Contact details for an organization or a particular human that is responsible for the device. */
	contact?: Array<ContactPoint>;
	/** A name given to the device to identify it. */
	deviceName?: Array<DeviceDefinition_DeviceName>;
	/** Unique instance identifiers assigned to a device by the software, manufacturers, other organizations or owners. For example: handle ID. */
	identifier?: Array<Identifier>;
	/** Language code for the human-readable text strings produced by the device (all supported). */
	languageCode?: Array<CodeableConcept>;
	/** A name of the manufacturer. */
	manufacturerReference?: Reference;
	/** A name of the manufacturer. */
	manufacturerString?: string;
	/** Extensions for manufacturerString */
	_manufacturerString?: Element;
	/** A substance used to create the material(s) of which the device is made. */
	material?: Array<DeviceDefinition_Material>;
	/** The model number for the device. */
	modelNumber?: string;
	/** Extensions for modelNumber */
	_modelNumber?: Element;
	/** Descriptive information, usage information or implantation information that is not captured in an existing element. */
	note?: Array<Annotation>;
	/** Access to on-line information about the device. */
	onlineInformation?: string;
	/** Extensions for onlineInformation */
	_onlineInformation?: Element;
	/** An organization that is responsible for the provision and ongoing maintenance of the device. */
	owner?: Reference;
	/** The parent device it can be part of. */
	parentDevice?: Reference;
	/** Dimensions, color etc. */
	physicalCharacteristics?: ProdCharacteristic;
	/** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties. */
	property?: Array<DeviceDefinition_Property>;
	/** The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product). */
	quantity?: Quantity;
	/** This is a DeviceDefinition resource. */
	resourceType: "DeviceDefinition";
	/** Safety characteristics of the device. */
	safety?: Array<CodeableConcept>;
	/** Shelf Life and storage information. */
	shelfLifeStorage?: Array<ProductShelfLife>;
	/** The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication. */
	specialization?: Array<DeviceDefinition_Specialization>;
	/** What kind of device or device system this is. */
	type?: CodeableConcept;
	/** Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold. */
	udiDeviceIdentifier?: Array<DeviceDefinition_UdiDeviceIdentifier>;
	/** A network address on which the device may be contacted directly. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
	/** The available versions of the device, e.g., software versions. */
	version?: Array<string | null>;
	/** Extensions for version */
	_version?: Array<Element | null>;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
	ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getDeviceDefinition_CapabilitySchema =
	(): z.ZodType<DeviceDefinition_Capability> =>
		DeviceDefinition_CapabilitySchemaInternal as z.ZodType<DeviceDefinition_Capability>;
const getDeviceDefinition_DeviceNameSchema =
	(): z.ZodType<DeviceDefinition_DeviceName> =>
		DeviceDefinition_DeviceNameSchemaInternal as z.ZodType<DeviceDefinition_DeviceName>;
const getDeviceDefinition_MaterialSchema =
	(): z.ZodType<DeviceDefinition_Material> =>
		DeviceDefinition_MaterialSchemaInternal as z.ZodType<DeviceDefinition_Material>;
const getDeviceDefinition_PropertySchema =
	(): z.ZodType<DeviceDefinition_Property> =>
		DeviceDefinition_PropertySchemaInternal as z.ZodType<DeviceDefinition_Property>;
const getDeviceDefinition_SpecializationSchema =
	(): z.ZodType<DeviceDefinition_Specialization> =>
		DeviceDefinition_SpecializationSchemaInternal as z.ZodType<DeviceDefinition_Specialization>;
const getDeviceDefinition_UdiDeviceIdentifierSchema =
	(): z.ZodType<DeviceDefinition_UdiDeviceIdentifier> =>
		DeviceDefinition_UdiDeviceIdentifierSchemaInternal as z.ZodType<DeviceDefinition_UdiDeviceIdentifier>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getProdCharacteristicSchema = (): z.ZodType<ProdCharacteristic> =>
	ProdCharacteristicSchemaInternal as z.ZodType<ProdCharacteristic>;
const getProductShelfLifeSchema = (): z.ZodType<ProductShelfLife> =>
	ProductShelfLifeSchemaInternal as z.ZodType<ProductShelfLife>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DeviceDefinitionSchemaInternal =
	DomainResourceSchemaInternal.extend({
		capability: z.lazy(getDeviceDefinition_CapabilitySchema).array().optional(),
		contact: z.lazy(getContactPointSchema).array().optional(),
		deviceName: z.lazy(getDeviceDefinition_DeviceNameSchema).array().optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		languageCode: z.lazy(getCodeableConceptSchema).array().optional(),
		manufacturerReference: z.lazy(getReferenceSchema).optional(),
		manufacturerString: fhirString().optional(),
		_manufacturerString: z.lazy(getElementSchema).optional(),
		material: z.lazy(getDeviceDefinition_MaterialSchema).array().optional(),
		modelNumber: fhirString().optional(),
		_modelNumber: z.lazy(getElementSchema).optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		onlineInformation: fhirUri().optional(),
		_onlineInformation: z.lazy(getElementSchema).optional(),
		owner: z.lazy(getReferenceSchema).optional(),
		parentDevice: z.lazy(getReferenceSchema).optional(),
		physicalCharacteristics: z.lazy(getProdCharacteristicSchema).optional(),
		property: z.lazy(getDeviceDefinition_PropertySchema).array().optional(),
		quantity: z.lazy(getQuantitySchema).optional(),
		resourceType: z.literal("DeviceDefinition"),
		safety: z.lazy(getCodeableConceptSchema).array().optional(),
		shelfLifeStorage: z.lazy(getProductShelfLifeSchema).array().optional(),
		specialization: z
			.lazy(getDeviceDefinition_SpecializationSchema)
			.array()
			.optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
		udiDeviceIdentifier: z
			.lazy(getDeviceDefinition_UdiDeviceIdentifierSchema)
			.array()
			.optional(),
		url: fhirUri().optional(),
		_url: z.lazy(getElementSchema).optional(),
		version: fhirString().nullable().array().optional(),
		_version: z.lazy(getElementSchema).nullable().array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const manufacturer_x_Present = [
				"manufacturerReference",
				"manufacturerString",
			].filter((field) => record[field] !== undefined);
			if (manufacturer_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of manufacturerReference, manufacturerString may be present for manufacturer[x]",
					path: [manufacturer_x_Present[0]],
				});
			}
			validatePrimitiveArrayPair(
				record.version,
				record._version,
				"version",
				"_version",
				ctx,
			);
			validateReferenceTarget(
				record.manufacturerReference,
				"manufacturerReference",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
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
				record.parentDevice,
				"parentDevice",
				["http://hl7.org/fhir/StructureDefinition/DeviceDefinition"],
				["DeviceDefinition"],
				ctx,
			);
		});

export const DeviceDefinitionSchema =
	DeviceDefinitionSchemaInternal as z.ZodType<DeviceDefinition>;
