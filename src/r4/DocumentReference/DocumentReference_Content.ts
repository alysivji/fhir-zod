// Source: https://hl7.org/fhir/R4/documentreference-definitions.html#DocumentReference.content
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import type { Attachment } from "../Attachment";
import { AttachmentSchemaInternal } from "../Attachment";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";

/** The document and format referenced. There may be multiple content element repetitions, each with a different format. */
export interface DocumentReference_Content extends BackboneElement {
  /** The document or URL of the document along with critical metadata to prove content has integrity. */
  attachment: Attachment;
  /** An identifier of the document encoding, structure, and template that the document conforms to beyond the base format indicated in the mimeType. */
  format?: Coding;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
  AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;

/** @internal */
export const DocumentReference_ContentSchemaInternal =
  BackboneElementSchemaInternal.extend({
    attachment: z.lazy(getAttachmentSchema),
    format: z.lazy(getCodingSchema).optional(),
  }).strict();

export const DocumentReference_ContentSchema =
  DocumentReference_ContentSchemaInternal as z.ZodType<DocumentReference_Content>;
