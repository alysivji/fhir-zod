// Profile: http://hl7.org/fhir/StructureDefinition/Bundle
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A series of links that provide context to this bundle. */
export interface Bundle_Link extends BackboneElement {
	/** A name which details the functional use for this link - see [http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1). */
	relation: string;
	/** Extensions for relation */
	_relation?: Element;
	/** The reference details for the link. */
	url: string;
	/** Extensions for url */
	_url?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Bundle_LinkSchemaInternal = BackboneElementSchemaInternal.extend({
	relation: z.string().regex(/[ \r\n\t\S]+/),
	_relation: z.lazy(getElementSchema).optional(),
	url: z.string().regex(/\S*/),
	_url: z.lazy(getElementSchema).optional(),
}).strict();

export const Bundle_LinkSchema =
	Bundle_LinkSchemaInternal as z.ZodType<Bundle_Link>;
