// Source: https://hl7.org/fhir/R5/datatypes.html#Attachment
// Profile: http://hl7.org/fhir/StructureDefinition/Attachment
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import {
  fhirBase64Binary,
  fhirCode,
  fhirDateTime,
  fhirId,
  fhirInteger64,
  fhirString,
  fhirUrl,
} from "../shared/fhir-primitives";
import type { DataType } from "./DataType";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** Attachment Type: For referring to data content defined in other formats. */
export interface Attachment extends DataType {
  /** Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate. */
  contentType?: string;
  /** Extensions for contentType */
  _contentType?: Element;
  /** The date that the attachment was first created. */
  creation?: string;
  /** Extensions for creation */
  _creation?: Element;
  /** The actual data of the attachment - a sequence of bytes, base64 encoded. */
  data?: string;
  /** Extensions for data */
  _data?: Element;
  /** The duration of the recording in seconds - for audio and video. */
  duration?: number;
  /** Extensions for duration */
  _duration?: Element;
  /** The number of frames in a photo. This is used with a multi-page fax, or an imaging acquisition context that takes multiple slices in a single image, or an animated gif. If there is more than one frame, this SHALL have a value in order to alert interface software that a multi-frame capable rendering widget is required. */
  frames?: number;
  /** Extensions for frames */
  _frames?: Element;
  /** The calculated hash of the data using SHA-1. Represented using base64. */
  hash?: string;
  /** Extensions for hash */
  _hash?: Element;
  /** Height of the image in pixels (photo/video). */
  height?: number;
  /** Extensions for height */
  _height?: Element;
  /** The human language of the content. The value can be any valid value according to BCP 47. */
  language?: string;
  /** Extensions for language */
  _language?: Element;
  /** The number of pages when printed. */
  pages?: number;
  /** Extensions for pages */
  _pages?: Element;
  /** The number of bytes of data that make up this attachment (before base64 encoding, if that is done). */
  size?: string;
  /** Extensions for size */
  _size?: Element;
  /** A label or set of text to display in place of the data. */
  title?: string;
  /** Extensions for title */
  _title?: Element;
  /** A location where the data can be accessed. */
  url?: string;
  /** Extensions for url */
  _url?: Element;
  /** Width of the image in pixels (photo/video). */
  width?: number;
  /** Extensions for width */
  _width?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;

/** @internal */
export const AttachmentSchemaInternal = z
  .object({
    contentType: fhirCode().optional(),
    _contentType: z.lazy(getElementSchema).optional(),
    creation: fhirDateTime().optional(),
    _creation: z.lazy(getElementSchema).optional(),
    data: fhirBase64Binary().optional(),
    _data: z.lazy(getElementSchema).optional(),
    duration: z.number().optional(),
    _duration: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    frames: z.number().int().positive().optional(),
    _frames: z.lazy(getElementSchema).optional(),
    hash: fhirBase64Binary().optional(),
    _hash: z.lazy(getElementSchema).optional(),
    height: z.number().int().positive().optional(),
    _height: z.lazy(getElementSchema).optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    pages: z.number().int().positive().optional(),
    _pages: z.lazy(getElementSchema).optional(),
    size: fhirInteger64().optional(),
    _size: z.lazy(getElementSchema).optional(),
    title: fhirString().optional(),
    _title: z.lazy(getElementSchema).optional(),
    url: fhirUrl().optional(),
    _url: z.lazy(getElementSchema).optional(),
    width: z.number().int().positive().optional(),
    _width: z.lazy(getElementSchema).optional(),
  })
  .strict();

export const AttachmentSchema =
  AttachmentSchemaInternal as z.ZodType<Attachment>;
