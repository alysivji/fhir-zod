// Profile: http://hl7.org/fhir/StructureDefinition/Bundle
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import {
	fhirInstant,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Additional information about how this entry should be processed as part of a transaction. */
export interface Bundle_Entry_Request extends BackboneElement {
	/** Only perform the operation if the Etag value matches. For more information, see the API section ["Managing Resource Contention"](http.html#concurrency). */
	ifMatch?: string;
	/** Extensions for ifMatch */
	_ifMatch?: Element;
	/** Only perform the operation if the last updated date matches. See the API documentation for ["Conditional Read"](http.html#cread). */
	ifModifiedSince?: string;
	/** Extensions for ifModifiedSince */
	_ifModifiedSince?: Element;
	/** Instruct the server not to perform the create if a specified resource already exists. For further information, see the API documentation for ["Conditional Create"](http.html#ccreate). This is just the query portion of the URL - what follows the "?" (not including the "?"). */
	ifNoneExist?: string;
	/** Extensions for ifNoneExist */
	_ifNoneExist?: Element;
	/** If the ETag values match, return a 304 Not Modified status. See the API documentation for ["Conditional Read"](http.html#cread). */
	ifNoneMatch?: string;
	/** Extensions for ifNoneMatch */
	_ifNoneMatch?: Element;
	/** The HTTP verb for this entry in either a change history, or a transaction/ transaction response. */
	method: "DELETE" | "GET" | "POST" | "PUT";
	/** Extensions for method */
	_method?: Element;
	/** The URL for this entry, relative to the root (the address to which the request is posted). */
	url: string;
	/** Extensions for url */
	_url?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Bundle_Entry_RequestSchemaInternal =
	BackboneElementSchemaInternal.extend({
		ifMatch: fhirString().optional(),
		_ifMatch: z.lazy(getElementSchema).optional(),
		ifModifiedSince: fhirInstant().optional(),
		_ifModifiedSince: z.lazy(getElementSchema).optional(),
		ifNoneExist: fhirString().optional(),
		_ifNoneExist: z.lazy(getElementSchema).optional(),
		ifNoneMatch: fhirString().optional(),
		_ifNoneMatch: z.lazy(getElementSchema).optional(),
		method: z.enum(["DELETE", "GET", "POST", "PUT"]),
		_method: z.lazy(getElementSchema).optional(),
		url: fhirUri(),
		_url: z.lazy(getElementSchema).optional(),
	}).strict();

export const Bundle_Entry_RequestSchema =
	Bundle_Entry_RequestSchemaInternal as z.ZodType<Bundle_Entry_Request>;
