// Profile: http://hl7.org/fhir/StructureDefinition/Contract
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

/** List of Legal expressions or representations of this Contract. */
export interface Contract_Legal extends BackboneElement {
  /** Contract legal text in human renderable form. */
  contentAttachment?: Attachment;
  /** Contract legal text in human renderable form. */
  contentReference?: Reference;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
  AttachmentSchemaInternal as z.ZodType<Attachment>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Contract_LegalSchemaInternal =
  BackboneElementSchemaInternal.extend({
    contentAttachment: z.lazy(getAttachmentSchema).optional(),
    contentReference: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const content_x_Present = [
        "contentAttachment",
        "contentReference",
      ].filter((field) => record[field] !== undefined);
      if (content_x_Present.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "One of contentAttachment, contentReference must be present for content[x]",
          path: ["contentAttachment"],
        });
      }
      if (content_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of contentAttachment, contentReference may be present for content[x]",
          path: [content_x_Present[0]],
        });
      }
      validateReferenceTarget(
        record.contentReference,
        "contentReference",
        [
          "http://hl7.org/fhir/StructureDefinition/Composition",
          "http://hl7.org/fhir/StructureDefinition/DocumentReference",
          "http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
        ],
        ["Composition", "DocumentReference", "QuestionnaireResponse"],
        ctx,
      );
    });

export const Contract_LegalSchema =
  Contract_LegalSchemaInternal as z.ZodType<Contract_Legal>;
