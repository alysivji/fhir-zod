// Profile: http://hl7.org/fhir/StructureDefinition/Device
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import {
	fhirBase64Binary,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold. */
export interface Device_UdiCarrier extends BackboneElement {
	/** The full UDI carrier of the Automatic Identification and Data Capture (AIDC) technology representation of the barcode string as printed on the packaging of the device - e.g., a barcode or RFID.   Because of limitations on character sets in XML and the need to round-trip JSON data through XML, AIDC Formats *SHALL* be base64 encoded. */
	carrierAIDC?: string;
	/** Extensions for carrierAIDC */
	_carrierAIDC?: Element;
	/** The full UDI carrier as the human readable form (HRF) representation of the barcode string as printed on the packaging of the device. */
	carrierHRF?: string;
	/** Extensions for carrierHRF */
	_carrierHRF?: Element;
	/** The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device. */
	deviceIdentifier: string;
	/** Extensions for deviceIdentifier */
	_deviceIdentifier?: Element;
	/** A coded entry to indicate how the data was entered. */
	entryType?:
		| "barcode"
		| "card"
		| "electronic-transmission"
		| "manual"
		| "rfid"
		| "self-reported"
		| "unknown";
	/** Extensions for entryType */
	_entryType?: Element;
	/**
	 * Organization that is charged with issuing UDIs for devices. For example, the US FDA issuers include:
	 * 1) GS1: http://hl7.org/fhir/NamingSystem/gs1-di,
	 * 2) HIBCC: http://hl7.org/fhir/NamingSystem/hibcc-diI,
	 * 3) ICCBBA for blood containers: http://hl7.org/fhir/NamingSystem/iccbba-blood-di,
	 * 4) ICCBA for other devices: http://hl7.org/fhir/NamingSystem/iccbba-other-di # Informationsstelle für Arzneispezialitäten (IFA GmbH) (EU only): http://hl7.org/fhir/NamingSystem/ifa-gmbh-di.
	 */
	issuer: string;
	/** Extensions for issuer */
	_issuer?: Element;
	/** The identity of the authoritative source for UDI generation within a jurisdiction. All UDIs are globally unique within a single namespace with the appropriate repository uri as the system. For example, UDIs of devices managed in the U.S. by the FDA, the value is http://hl7.org/fhir/NamingSystem/us-fda-udi or in the European Union by the European Commission http://hl7.org/fhir/NamingSystem/eu-ec-udi. */
	jurisdiction?: string;
	/** Extensions for jurisdiction */
	_jurisdiction?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Device_UdiCarrierSchemaInternal =
	BackboneElementSchemaInternal.extend({
		carrierAIDC: fhirBase64Binary().optional(),
		_carrierAIDC: z.lazy(getElementSchema).optional(),
		carrierHRF: fhirString().optional(),
		_carrierHRF: z.lazy(getElementSchema).optional(),
		deviceIdentifier: fhirString(),
		_deviceIdentifier: z.lazy(getElementSchema).optional(),
		entryType: z
			.enum([
				"barcode",
				"card",
				"electronic-transmission",
				"manual",
				"rfid",
				"self-reported",
				"unknown",
			])
			.optional(),
		_entryType: z.lazy(getElementSchema).optional(),
		issuer: fhirUri(),
		_issuer: z.lazy(getElementSchema).optional(),
		jurisdiction: fhirUri().optional(),
		_jurisdiction: z.lazy(getElementSchema).optional(),
	}).strict();

export const Device_UdiCarrierSchema =
	Device_UdiCarrierSchemaInternal as z.ZodType<Device_UdiCarrier>;
