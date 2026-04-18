// Profile: http://hl7.org/fhir/StructureDefinition/Binary
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:04:05.932Z

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

/** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
export interface Binary extends Resource {
  /** MimeType of the binary content represented as a standard MimeType (BCP 13). */
  contentType: string;
  /** Extensions for contentType */
  _contentType?: Element;
  /** The actual content, base64 encoded. */
  data?: string;
  /** Extensions for data */
  _data?: Element;
  /** This is a Binary resource. */
  resourceType: "Binary";
  /** This element identifies another resource that can be used as a proxy of the security sensitivity to use when deciding and enforcing access control rules for the Binary resource. Given that the Binary resource contains very few elements that can be used to determine the sensitivity of the data and relationships to individuals, the referenced resource stands in as a proxy equivalent for this purpose. This referenced resource may be related to the Binary (e.g. DocumentReference), or may be some non-related Resource purely as a security proxy. E.g. to identify that the binary resource relates to a patient, and access should only be granted to applications that have access to the patient. */
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
    contentType: fhirCode(),
    _contentType: z.lazy(getElementSchema).optional(),
    data: fhirBase64Binary().optional(),
    _data: z.lazy(getElementSchema).optional(),
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
