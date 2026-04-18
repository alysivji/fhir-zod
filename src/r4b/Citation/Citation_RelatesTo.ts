// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:00:58.420Z

import * as z from "zod";
import { fhirUri } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Attachment } from "../Attachment";
import { AttachmentSchemaInternal } from "../Attachment";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Artifact related to the Citation Resource. */
export interface Citation_RelatesTo extends BackboneElement {
  /** How the Citation resource relates to the target artifact. */
  relationshipType: CodeableConcept;
  /** The article or artifact that the Citation Resource is related to. */
  targetAttachment?: Attachment;
  /** The clasification of the related artifact. */
  targetClassifier?: Array<CodeableConcept>;
  /** The article or artifact that the Citation Resource is related to. */
  targetIdentifier?: Identifier;
  /** The article or artifact that the Citation Resource is related to. */
  targetReference?: Reference;
  /** The article or artifact that the Citation Resource is related to. */
  targetUri?: string;
  /** Extensions for targetUri */
  _targetUri?: Element;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
  AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Citation_RelatesToSchemaInternal =
  BackboneElementSchemaInternal.extend({
    relationshipType: z.lazy(getCodeableConceptSchema),
    targetAttachment: z.lazy(getAttachmentSchema).optional(),
    targetClassifier: z.lazy(getCodeableConceptSchema).array().optional(),
    targetIdentifier: z.lazy(getIdentifierSchema).optional(),
    targetReference: z.lazy(getReferenceSchema).optional(),
    targetUri: fhirUri().optional(),
    _targetUri: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const target_x_Present = [
        "targetAttachment",
        "targetIdentifier",
        "targetReference",
        "targetUri",
      ].filter((field) => record[field] !== undefined);
      if (target_x_Present.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "One of targetAttachment, targetIdentifier, targetReference, targetUri must be present for target[x]",
          path: ["targetAttachment"],
        });
      }
      if (target_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of targetAttachment, targetIdentifier, targetReference, targetUri may be present for target[x]",
          path: [target_x_Present[0]],
        });
      }
      validateReferenceTarget(
        record.targetReference,
        "targetReference",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
    });

export const Citation_RelatesToSchema =
  Citation_RelatesToSchemaInternal as z.ZodType<Citation_RelatesTo>;
