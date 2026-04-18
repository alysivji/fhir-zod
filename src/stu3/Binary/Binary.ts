// Profile: http://hl7.org/fhir/StructureDefinition/Binary
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:04:01.401Z

import * as z from "zod";
import {
  fhirBase64Binary,
  fhirCode,
  fhirId,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Resource } from "../Resource";

/** Base StructureDefinition for Binary Resource */
export interface Binary extends Resource {
  /** The actual content, base64 encoded. */
  content: string;
  /** Extensions for content */
  _content?: Element;
  /** MimeType of the binary content represented as a standard MimeType (BCP 13). */
  contentType: string;
  /** Extensions for contentType */
  _contentType?: Element;
  /** This is a Binary resource. */
  resourceType: "Binary";
  /** Treat this binary as if it was this other resource for access control purposes. */
  securityContext?: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const BinarySchemaInternal = z
  .object({
    content: fhirBase64Binary(),
    _content: z.lazy(getElementSchema).optional(),
    contentType: fhirCode(),
    _contentType: z.lazy(getElementSchema).optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    resourceType: z.literal("Binary"),
    securityContext: z.lazy(getReferenceSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.securityContext,
      "securityContext",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
  });

export const BinarySchema = BinarySchemaInternal as z.ZodType<Binary>;
