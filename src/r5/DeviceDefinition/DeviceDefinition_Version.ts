// Source: https://hl7.org/fhir/R5/devicedefinition-definitions.html#DeviceDefinition.version
// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

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

/** The version of the device or software. */
export interface DeviceDefinition_Version extends BackboneElement {
  /** The hardware or software module of the device to which the version applies. */
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
export const DeviceDefinition_VersionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    component: z.lazy(getIdentifierSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
    value: fhirString(),
    _value: z.lazy(getElementSchema).optional(),
  }).strict();

export const DeviceDefinition_VersionSchema =
  DeviceDefinition_VersionSchemaInternal as z.ZodType<DeviceDefinition_Version>;
