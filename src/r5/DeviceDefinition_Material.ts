// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A substance used to create the material(s) of which the device is made. */
export interface DeviceDefinition_Material extends BackboneElement {
  /** Whether the substance is a known or suspected allergen. */
  allergenicIndicator?: boolean;
  /** Extensions for allergenicIndicator */
  _allergenicIndicator?: Element;
  /** Indicates an alternative material of the device. */
  alternate?: boolean;
  /** Extensions for alternate */
  _alternate?: Element;
  /** A substance that the device contains, may contain, or is made of - for example latex - to be used to determine patient compatibility. This is not intended to represent the composition of the device, only the clinically relevant materials. */
  substance: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const DeviceDefinition_MaterialSchemaInternal =
  BackboneElementSchemaInternal.extend({
    allergenicIndicator: z.boolean().optional(),
    _allergenicIndicator: z.lazy(getElementSchema).optional(),
    alternate: z.boolean().optional(),
    _alternate: z.lazy(getElementSchema).optional(),
    substance: z.lazy(getCodeableConceptSchema),
  }).strict();

export const DeviceDefinition_MaterialSchema =
  DeviceDefinition_MaterialSchemaInternal as z.ZodType<DeviceDefinition_Material>;
