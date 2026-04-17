// Profile: http://hl7.org/fhir/StructureDefinition/DocumentReference
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { DocumentReference_Content_Profile } from "./DocumentReference_Content_Profile";
import { DocumentReference_Content_ProfileSchemaInternal } from "./DocumentReference_Content_Profile";

/** The document and format referenced.  If there are multiple content element repetitions, these must all represent the same document in different format, or attachment metadata. */
export interface DocumentReference_Content extends BackboneElement {
  /** The document or URL of the document along with critical metadata to prove content has integrity. */
  attachment: Attachment;
  /** An identifier of the document constraints, encoding, structure, and template that the document conforms to beyond the base format indicated in the mimeType. */
  profile?: Array<DocumentReference_Content_Profile>;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
  AttachmentSchemaInternal as z.ZodType<Attachment>;
const getDocumentReference_Content_ProfileSchema =
  (): z.ZodType<DocumentReference_Content_Profile> =>
    DocumentReference_Content_ProfileSchemaInternal as z.ZodType<DocumentReference_Content_Profile>;

/** @internal */
export const DocumentReference_ContentSchemaInternal =
  BackboneElementSchemaInternal.extend({
    attachment: z.lazy(getAttachmentSchema),
    profile: z
      .lazy(getDocumentReference_Content_ProfileSchema)
      .array()
      .optional(),
  }).strict();

export const DocumentReference_ContentSchema =
  DocumentReference_ContentSchemaInternal as z.ZodType<DocumentReference_Content>;
