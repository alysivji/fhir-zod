// Profile: http://hl7.org/fhir/StructureDefinition/DocumentManifest
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:00:56.233Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Attachment } from "../Attachment";
import { AttachmentSchemaInternal } from "../Attachment";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** The list of Documents included in the manifest. */
export interface DocumentManifest_Content extends BackboneElement {
  /** The list of references to document content, or Attachment that consist of the parts of this document manifest. Usually, these would be document references, but direct references to Media or Attachments are also allowed. */
  pAttachment?: Attachment;
  /** The list of references to document content, or Attachment that consist of the parts of this document manifest. Usually, these would be document references, but direct references to Media or Attachments are also allowed. */
  pReference?: Reference;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
  AttachmentSchemaInternal as z.ZodType<Attachment>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DocumentManifest_ContentSchemaInternal =
  BackboneElementSchemaInternal.extend({
    pAttachment: z.lazy(getAttachmentSchema).optional(),
    pReference: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const p_x_Present = ["pAttachment", "pReference"].filter(
        (field) => record[field] !== undefined,
      );
      if (p_x_Present.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "One of pAttachment, pReference must be present for p[x]",
          path: ["pAttachment"],
        });
      }
      if (p_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of pAttachment, pReference may be present for p[x]",
          path: [p_x_Present[0]],
        });
      }
      validateReferenceTarget(
        record.pReference,
        "pReference",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
    });

export const DocumentManifest_ContentSchema =
  DocumentManifest_ContentSchemaInternal as z.ZodType<DocumentManifest_Content>;
