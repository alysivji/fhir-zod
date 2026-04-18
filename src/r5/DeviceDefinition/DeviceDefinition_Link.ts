// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";

/** An associated device, attached to, used with, communicating with or linking a previous or new device model to the focal device. */
export interface DeviceDefinition_Link extends BackboneElement {
  /** A reference to the linked device. */
  relatedDevice: CodeableReference;
  /** The type indicates the relationship of the related device to the device instance. */
  relation: Coding;
}

const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;

/** @internal */
export const DeviceDefinition_LinkSchemaInternal =
  BackboneElementSchemaInternal.extend({
    relatedDevice: z.lazy(getCodeableReferenceSchema),
    relation: z.lazy(getCodingSchema),
  }).strict();

export const DeviceDefinition_LinkSchema =
  DeviceDefinition_LinkSchemaInternal as z.ZodType<DeviceDefinition_Link>;
