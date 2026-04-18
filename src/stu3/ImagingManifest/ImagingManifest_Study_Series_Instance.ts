// Source: https://hl7.org/fhir/STU3/imagingmanifest-definitions.html#ImagingManifest.study.series.instance
// Profile: http://hl7.org/fhir/StructureDefinition/ImagingManifest
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import { fhirOid } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Identity and locating information of the selected DICOM SOP instances. */
export interface ImagingManifest_Study_Series_Instance extends BackboneElement {
  /** SOP class UID of the selected instance. */
  sopClass: string;
  /** Extensions for sopClass */
  _sopClass?: Element;
  /** SOP Instance UID of the selected instance. */
  uid: string;
  /** Extensions for uid */
  _uid?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ImagingManifest_Study_Series_InstanceSchemaInternal =
  BackboneElementSchemaInternal.extend({
    sopClass: fhirOid(),
    _sopClass: z.lazy(getElementSchema).optional(),
    uid: fhirOid(),
    _uid: z.lazy(getElementSchema).optional(),
  }).strict();

export const ImagingManifest_Study_Series_InstanceSchema =
  ImagingManifest_Study_Series_InstanceSchemaInternal as z.ZodType<ImagingManifest_Study_Series_Instance>;
