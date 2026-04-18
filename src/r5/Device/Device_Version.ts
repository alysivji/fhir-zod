// Profile: http://hl7.org/fhir/StructureDefinition/Device
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../../shared/fhir-primitives";
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
  /** The hardware or software module of the device to which the version applies. */
  component?: Identifier;
  /** The date the version was installed on the device. */
  installDate?: string;
  /** Extensions for installDate */
  _installDate?: Element;
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
    installDate: fhirDateTime().optional(),
    _installDate: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
    value: fhirString(),
    _value: z.lazy(getElementSchema).optional(),
  }).strict();

export const Device_VersionSchema =
  Device_VersionSchemaInternal as z.ZodType<Device_Version>;
