// Profile: http://hl7.org/fhir/StructureDefinition/Device
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import {
  fhirBase64Binary,
  fhirString,
  fhirUri,
} from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** [Unique device identifier (UDI)](device.html#5.11.3.2.2) assigned to device label or package. */
export interface Device_Udi extends BackboneElement {
  /** The full UDI carrier of the Automatic Identification and Data Capture (AIDC) technology representation of the barcode string as printed on the packaging of the device - E.g a barcode or RFID.   Because of limitations on character sets in XML and the need to round-trip JSON data through XML, AIDC Formats *SHALL* be base64 encoded. */
  carrierAIDC?: string;
  /** Extensions for carrierAIDC */
  _carrierAIDC?: Element;
  /** The full UDI carrier as the human readable form (HRF) representation of the barcode string as printed on the packaging of the device. */
  carrierHRF?: string;
  /** Extensions for carrierHRF */
  _carrierHRF?: Element;
  /** The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device. */
  deviceIdentifier?: string;
  /** Extensions for deviceIdentifier */
  _deviceIdentifier?: Element;
  /** A coded entry to indicate how the data was entered. */
  entryType?:
    | "barcode"
    | "card"
    | "manual"
    | "rfid"
    | "self-reported"
    | "unknown";
  /** Extensions for entryType */
  _entryType?: Element;
  /**
   * Organization that is charged with issuing UDIs for devices.  For example, the US FDA issuers include :
   * 1) GS1:
   * http://hl7.org/fhir/NamingSystem/gs1-di,
   * 2) HIBCC:
   * http://hl7.org/fhir/NamingSystem/hibcc-dI,
   * 3) ICCBBA for blood containers:
   * http://hl7.org/fhir/NamingSystem/iccbba-blood-di,
   * 4) ICCBA for other devices:
   * http://hl7.org/fhir/NamingSystem/iccbba-other-di.
   */
  issuer?: string;
  /** Extensions for issuer */
  _issuer?: Element;
  /** The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace. with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi. */
  jurisdiction?: string;
  /** Extensions for jurisdiction */
  _jurisdiction?: Element;
  /** Name of device as used in labeling or catalog. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Device_UdiSchemaInternal = BackboneElementSchemaInternal.extend({
  carrierAIDC: fhirBase64Binary().optional(),
  _carrierAIDC: z.lazy(getElementSchema).optional(),
  carrierHRF: fhirString().optional(),
  _carrierHRF: z.lazy(getElementSchema).optional(),
  deviceIdentifier: fhirString().optional(),
  _deviceIdentifier: z.lazy(getElementSchema).optional(),
  entryType: z
    .enum(["barcode", "card", "manual", "rfid", "self-reported", "unknown"])
    .optional(),
  _entryType: z.lazy(getElementSchema).optional(),
  issuer: fhirUri().optional(),
  _issuer: z.lazy(getElementSchema).optional(),
  jurisdiction: fhirUri().optional(),
  _jurisdiction: z.lazy(getElementSchema).optional(),
  name: fhirString().optional(),
  _name: z.lazy(getElementSchema).optional(),
}).strict();

export const Device_UdiSchema =
  Device_UdiSchemaInternal as z.ZodType<Device_Udi>;
