// Profile: http://hl7.org/fhir/StructureDefinition/Bundle
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { fhirInstant } from "../../shared/fhir-primitives-zod3";
import type { Bundle_Entry } from "./Bundle_Entry";
import { Bundle_EntrySchemaInternal } from "./Bundle_Entry";
import type { Bundle_Link } from "./Bundle_Link";
import { Bundle_LinkSchemaInternal } from "./Bundle_Link";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Resource } from "./Resource";
import { ResourceSchemaInternal } from "./Resource";
import type { Signature } from "./Signature";
import { SignatureSchemaInternal } from "./Signature";

/** A container for a collection of resources. */
export interface Bundle extends Resource {
	/** An entry in a bundle resource - will either contain a resource or information about a resource (transactions and history only). */
	entry?: Array<Bundle_Entry>;
	/** A persistent identifier for the bundle that won't change as a bundle is copied from server to server. */
	identifier?: Identifier;
	/** Captures issues and warnings that relate to the construction of the Bundle and the content within it. */
	issues?: Resource;
	/** A series of links that provide context to this bundle. */
	link?: Array<Bundle_Link>;
	/** This is a Bundle resource. */
	resourceType: "Bundle";
	/** Digital Signature - base64 encoded. XML-DSig or a JWS. */
	signature?: Signature;
	/** The date/time that the bundle was assembled - i.e. when the resources were placed in the bundle. */
	timestamp?: string;
	/** Extensions for timestamp */
	_timestamp?: Element;
	/** If a set of search matches, this is the (potentially estimated) total number of entries of type 'match' across all pages in the search.  It does not include search.mode = 'include' or 'outcome' entries and it does not provide a count of the number of entries in the Bundle. */
	total?: number;
	/** Extensions for total */
	_total?: Element;
	/** Indicates the purpose of this bundle - how it is intended to be used. */
	type:
		| "batch"
		| "batch-response"
		| "collection"
		| "document"
		| "history"
		| "message"
		| "searchset"
		| "subscription-notification"
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
const getSignatureSchema = (): z.ZodType<Signature> =>
	SignatureSchemaInternal as z.ZodType<Signature>;

/** @internal */
export const BundleSchemaInternal = ResourceSchemaInternal.extend({
	entry: z.lazy(getBundle_EntrySchema).array().optional(),
	identifier: z.lazy(getIdentifierSchema).optional(),
	issues: z.object({ resourceType: z.string() }).passthrough().optional(),
	link: z.lazy(getBundle_LinkSchema).array().optional(),
	resourceType: z.literal("Bundle"),
	signature: z.lazy(getSignatureSchema).optional(),
	timestamp: fhirInstant().optional(),
	_timestamp: z.lazy(getElementSchema).optional(),
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
		"subscription-notification",
		"transaction",
		"transaction-response",
	]),
	_type: z.lazy(getElementSchema).optional(),
}).strict();

export const BundleSchema = BundleSchemaInternal as z.ZodType<Bundle>;
