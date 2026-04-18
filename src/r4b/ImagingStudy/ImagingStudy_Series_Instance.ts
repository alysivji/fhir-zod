// Profile: http://hl7.org/fhir/StructureDefinition/ImagingStudy
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:00:58.420Z

import * as z from "zod";
import { fhirId, fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** A single SOP instance within the series, e.g. an image, or presentation state. */
export interface ImagingStudy_Series_Instance extends BackboneElement {
  /** The number of instance in the series. */
  number?: number;
  /** Extensions for number */
  _number?: Element;
  /** DICOM instance  type. */
  sopClass: Coding;
  /** The description of the instance. */
  title?: string;
  /** Extensions for title */
  _title?: Element;
  /** The DICOM SOP Instance UID for this image or other DICOM content. */
  uid: string;
  /** Extensions for uid */
  _uid?: Element;
}

const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ImagingStudy_Series_InstanceSchemaInternal =
  BackboneElementSchemaInternal.extend({
    number: z.number().int().nonnegative().optional(),
    _number: z.lazy(getElementSchema).optional(),
    sopClass: z.lazy(getCodingSchema),
    title: fhirString().optional(),
    _title: z.lazy(getElementSchema).optional(),
    uid: fhirId(),
    _uid: z.lazy(getElementSchema).optional(),
  }).strict();

export const ImagingStudy_Series_InstanceSchema =
  ImagingStudy_Series_InstanceSchemaInternal as z.ZodType<ImagingStudy_Series_Instance>;
