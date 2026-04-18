// Profile: http://hl7.org/fhir/StructureDefinition/Bundle
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:04:01.401Z

import * as z from "zod";
import { fhirCode, fhirId, fhirUri } from "../../shared/fhir-primitives";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Resource } from "../Resource";
import type { Signature } from "../Signature";
import { SignatureSchemaInternal } from "../Signature";
import type { Bundle_Entry } from "./Bundle_Entry";
import { Bundle_EntrySchemaInternal } from "./Bundle_Entry";
import type { Bundle_Link } from "./Bundle_Link";
import { Bundle_LinkSchemaInternal } from "./Bundle_Link";

/** Base StructureDefinition for Bundle Resource */
export interface Bundle extends Resource {
  /** An entry in a bundle resource - will either contain a resource, or information about a resource (transactions and history only). */
  entry?: Array<Bundle_Entry>;
  /** A persistent identifier for the batch that won't change as a batch is copied from server to server. */
  identifier?: Identifier;
  /** A series of links that provide context to this bundle. */
  link?: Array<Bundle_Link>;
  /** This is a Bundle resource. */
  resourceType: "Bundle";
  /** Digital Signature - base64 encoded. XML-DSIg or a JWT. */
  signature?: Signature;
  /** If a set of search matches, this is the total number of matches for the search (as opposed to the number of results in this bundle). */
  total?: number;
  /** Extensions for total */
  _total?: Element;
  /** Indicates the purpose of this bundle - how it was intended to be used. */
  type:
    | "batch"
    | "batch-response"
    | "collection"
    | "document"
    | "history"
    | "message"
    | "searchset"
    | "transaction"
    | "transaction-response";
  /** Extensions for type */
  _type?: Element;
}

const getBundle_EntrySchema = (): z.ZodType<Bundle_Entry> =>
  Bundle_EntrySchemaInternal as z.ZodType<Bundle_Entry>;
const getBundle_LinkSchema = (): z.ZodType<Bundle_Link> =>
  Bundle_LinkSchemaInternal as z.ZodType<Bundle_Link>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getSignatureSchema = (): z.ZodType<Signature> =>
  SignatureSchemaInternal as z.ZodType<Signature>;

/** @internal */
export const BundleSchemaInternal = z
  .object({
    entry: z.lazy(getBundle_EntrySchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    link: z.lazy(getBundle_LinkSchema).array().optional(),
    meta: z.lazy(getMetaSchema).optional(),
    resourceType: z.literal("Bundle"),
    signature: z.lazy(getSignatureSchema).optional(),
    total: z.number().int().nonnegative().optional(),
    _total: z.lazy(getElementSchema).optional(),
    type: z.enum([
      "batch",
      "batch-response",
      "collection",
      "document",
      "history",
      "message",
      "searchset",
      "transaction",
      "transaction-response",
    ]),
    _type: z.lazy(getElementSchema).optional(),
  })
  .strict();

export const BundleSchema = BundleSchemaInternal as z.ZodType<Bundle>;
