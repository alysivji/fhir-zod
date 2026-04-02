// Profile: http://hl7.org/fhir/StructureDefinition/Bundle
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:26:21.962Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Bundle_Entry_Request } from "./Bundle_Entry_Request";
import { Bundle_Entry_RequestSchemaInternal } from "./Bundle_Entry_Request";
import type { Bundle_Entry_Response } from "./Bundle_Entry_Response";
import { Bundle_Entry_ResponseSchemaInternal } from "./Bundle_Entry_Response";
import type { Bundle_Entry_Search } from "./Bundle_Entry_Search";
import { Bundle_Entry_SearchSchemaInternal } from "./Bundle_Entry_Search";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Resource } from "./Resource";

/** An entry in a bundle resource - will either contain a resource or information about a resource (transactions and history only). */
export interface Bundle_Entry extends BackboneElement {
	/**
	 * The Absolute URL for the resource.  The fullUrl SHALL NOT disagree with the id in the resource - i.e. if the fullUrl is not a urn:uuid, the URL shall be version-independent URL consistent with the Resource.id. The fullUrl is a version independent reference to the resource. The fullUrl element SHALL have a value except that:
	 * * fullUrl can be empty on a POST (although it does not need to when specifying a temporary id for reference in the bundle)
	 * * Results from operations might involve resources that are not identified.
	 */
	fullUrl?: string;
	/** Extensions for fullUrl */
	_fullUrl?: Element;
	/** A series of links that provide context to this entry. */
	link?: Array<unknown>;
	/** Additional information about how this entry should be processed as part of a transaction or batch.  For history, it shows how the entry was processed to create the version contained in the entry. */
	request?: Bundle_Entry_Request;
	/** The Resource for the entry. The purpose/meaning of the resource is determined by the Bundle.type. */
	resource?: Resource;
	/** Indicates the results of processing the corresponding 'request' entry in the batch or transaction being responded to or what the results of an operation where when returning history. */
	response?: Bundle_Entry_Response;
	/** Information about the search process that lead to the creation of this entry. */
	search?: Bundle_Entry_Search;
}

const getBundle_Entry_RequestSchema = (): z.ZodType<Bundle_Entry_Request> =>
	Bundle_Entry_RequestSchemaInternal as z.ZodType<Bundle_Entry_Request>;
const getBundle_Entry_ResponseSchema = (): z.ZodType<Bundle_Entry_Response> =>
	Bundle_Entry_ResponseSchemaInternal as z.ZodType<Bundle_Entry_Response>;
const getBundle_Entry_SearchSchema = (): z.ZodType<Bundle_Entry_Search> =>
	Bundle_Entry_SearchSchemaInternal as z.ZodType<Bundle_Entry_Search>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Bundle_EntrySchemaInternal = BackboneElementSchemaInternal.extend({
	fullUrl: z.string().regex(/\S*/).optional(),
	_fullUrl: z.lazy(getElementSchema).optional(),
	link: z.unknown().array().optional(),
	request: z.lazy(getBundle_Entry_RequestSchema).optional(),
	resource: z.object({ resourceType: z.string() }).passthrough().optional(),
	response: z.lazy(getBundle_Entry_ResponseSchema).optional(),
	search: z.lazy(getBundle_Entry_SearchSchema).optional(),
}).strict();

export const Bundle_EntrySchema =
	Bundle_EntrySchemaInternal as z.ZodType<Bundle_Entry>;
