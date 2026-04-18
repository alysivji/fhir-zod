// Source: https://hl7.org/fhir/R4/datatypes.html#Signature
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import {
  fhirBase64Binary,
  fhirCode,
  fhirInstant,
  fhirString,
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

/** Base StructureDefinition for Signature Type: A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities. */
export interface Signature extends Element {
  /** The base64 encoding of the Signature content. When signature is not recorded electronically this element would be empty. */
  data?: string;
  /** Extensions for data */
  _data?: Element;
  /** A reference to an application-usable description of the identity that is represented by the signature. */
  onBehalfOf?: Reference;
  /** A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for a graphical image of a signature, etc. */
  sigFormat?: string;
  /** Extensions for sigFormat */
  _sigFormat?: Element;
  /** A mime type that indicates the technical format of the target resources signed by the signature. */
  targetFormat?: string;
  /** Extensions for targetFormat */
  _targetFormat?: Element;
  /** An indication of the reason that the entity signed this document. This may be explicitly included as part of the signature information and can be used when determining accountability for various actions concerning the document. */
  type: Array<Coding>;
  /** When the digital signature was signed. */
  when: string;
  /** Extensions for when */
  _when?: Element;
  /** A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key). */
  who: Reference;
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
    data: fhirBase64Binary().optional(),
    _data: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirString().optional(),
    _id: z.lazy(getElementSchema).optional(),
    onBehalfOf: z.lazy(getReferenceSchema).optional(),
    sigFormat: fhirCode().optional(),
    _sigFormat: z.lazy(getElementSchema).optional(),
    targetFormat: fhirCode().optional(),
    _targetFormat: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodingSchema).array(),
    when: fhirInstant(),
    _when: z.lazy(getElementSchema).optional(),
    who: z.lazy(getReferenceSchema),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.onBehalfOf,
      "onBehalfOf",
      [
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      [
        "Device",
        "Organization",
        "Patient",
        "Practitioner",
        "PractitionerRole",
        "RelatedPerson",
      ],
      ctx,
    );
    validateReferenceTarget(
      record.who,
      "who",
      [
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      [
        "Device",
        "Organization",
        "Patient",
        "Practitioner",
        "PractitionerRole",
        "RelatedPerson",
      ],
      ctx,
    );
  });

export const SignatureSchema = SignatureSchemaInternal as z.ZodType<Signature>;
