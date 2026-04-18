// Source: https://hl7.org/fhir/STU3/datatypes.html#Signature
// Profile: http://hl7.org/fhir/StructureDefinition/Signature
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import {
  fhirBase64Binary,
  fhirCode,
  fhirInstant,
  fhirString,
  fhirUri,
} from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Base StructureDefinition for Signature Type */
export interface Signature extends Element {
  /** The base64 encoding of the Signature content. When signature is not recorded electronically this element would be empty. */
  blob?: string;
  /** Extensions for blob */
  _blob?: Element;
  /** A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jwt for JWT, and image/* for a graphical image of a signature, etc. */
  contentType?: string;
  /** Extensions for contentType */
  _contentType?: Element;
  /** A reference to an application-usable description of the identity that is represented by the signature. */
  onBehalfOfReference?: Reference;
  /** A reference to an application-usable description of the identity that is represented by the signature. */
  onBehalfOfUri?: string;
  /** Extensions for onBehalfOfUri */
  _onBehalfOfUri?: Element;
  /** An indication of the reason that the entity signed this document. This may be explicitly included as part of the signature information and can be used when determining accountability for various actions concerning the document. */
  type: Array<Coding>;
  /** When the digital signature was signed. */
  when: string;
  /** Extensions for when */
  _when?: Element;
  /** A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key). */
  whoReference?: Reference;
  /** A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key). */
  whoUri?: string;
  /** Extensions for whoUri */
  _whoUri?: Element;
}

const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const SignatureSchemaInternal = z
  .object({
    blob: fhirBase64Binary().optional(),
    _blob: z.lazy(getElementSchema).optional(),
    contentType: fhirCode().optional(),
    _contentType: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirString().optional(),
    _id: z.lazy(getElementSchema).optional(),
    onBehalfOfReference: z.lazy(getReferenceSchema).optional(),
    onBehalfOfUri: fhirUri().optional(),
    _onBehalfOfUri: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodingSchema).array(),
    when: fhirInstant(),
    _when: z.lazy(getElementSchema).optional(),
    whoReference: z.lazy(getReferenceSchema).optional(),
    whoUri: fhirUri().optional(),
    _whoUri: z.lazy(getElementSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const onBehalfOf_x_Present = [
      "onBehalfOfReference",
      "onBehalfOfUri",
    ].filter((field) => record[field] !== undefined);
    if (onBehalfOf_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of onBehalfOfReference, onBehalfOfUri may be present for onBehalfOf[x]",
        path: [onBehalfOf_x_Present[0]],
      });
    }
    const who_x_Present = ["whoReference", "whoUri"].filter(
      (field) => record[field] !== undefined,
    );
    if (who_x_Present.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "One of whoReference, whoUri must be present for who[x]",
        path: ["whoReference"],
      });
    }
    if (who_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Only one of whoReference, whoUri may be present for who[x]",
        path: [who_x_Present[0]],
      });
    }
    validateReferenceTarget(
      record.onBehalfOfReference,
      "onBehalfOfReference",
      [
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      ["Device", "Organization", "Patient", "Practitioner", "RelatedPerson"],
      ctx,
    );
    validateReferenceTarget(
      record.whoReference,
      "whoReference",
      [
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      ["Device", "Organization", "Patient", "Practitioner", "RelatedPerson"],
      ctx,
    );
  });

export const SignatureSchema = SignatureSchemaInternal as z.ZodType<Signature>;
