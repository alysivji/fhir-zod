// Source: https://hl7.org/fhir/R4B/device-definitions.html#Device.version
// Profile: http://hl7.org/fhir/StructureDefinition/Device
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";

/** The actual design of the device or software version running on the device. */
export interface Device_Version extends BackboneElement {
  /** A single component of the device version. */
  component?: Identifier;
  /** The type of the device version, e.g. manufacturer, approved, internal. */
  type?: CodeableConcept;
  /** The version text. */
  value: string;
  /** Extensions for value */
  _value?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;

/** @internal */
export const Device_VersionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    component: z.lazy(getIdentifierSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
    value: fhirString(),
    _value: z.lazy(getElementSchema).optional(),
  }).strict();

export const Device_VersionSchema =
  Device_VersionSchemaInternal as z.ZodType<Device_Version>;
