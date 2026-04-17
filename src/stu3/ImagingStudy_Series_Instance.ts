// Profile: http://hl7.org/fhir/StructureDefinition/ImagingStudy
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirOid, fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A single SOP instance within the series, e.g. an image, or presentation state. */
export interface ImagingStudy_Series_Instance extends BackboneElement {
  /** The number of instance in the series. */
  number?: number;
  /** Extensions for number */
  _number?: Element;
  /** DICOM instance  type. */
  sopClass: string;
  /** Extensions for sopClass */
  _sopClass?: Element;
  /** The description of the instance. */
  title?: string;
  /** Extensions for title */
  _title?: Element;
  /** Formal identifier for this image or other content. */
  uid: string;
  /** Extensions for uid */
  _uid?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ImagingStudy_Series_InstanceSchemaInternal =
  BackboneElementSchemaInternal.extend({
    number: z.number().int().nonnegative().optional(),
    _number: z.lazy(getElementSchema).optional(),
    sopClass: fhirOid(),
    _sopClass: z.lazy(getElementSchema).optional(),
    title: fhirString().optional(),
    _title: z.lazy(getElementSchema).optional(),
    uid: fhirOid(),
    _uid: z.lazy(getElementSchema).optional(),
  }).strict();

export const ImagingStudy_Series_InstanceSchema =
  ImagingStudy_Series_InstanceSchemaInternal as z.ZodType<ImagingStudy_Series_Instance>;
