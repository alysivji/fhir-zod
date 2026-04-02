// Profile: http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Identifies a specific implementation instance that is described by the terminology capability statement - i.e. a particular installation, rather than the capabilities of a software program. */
export interface TerminologyCapabilities_Implementation
	extends BackboneElement {
	/** Information about the specific installation that this terminology capability statement relates to. */
	description: string;
	/** Extensions for description */
	_description?: Element;
	/** An absolute base URL for the implementation. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const TerminologyCapabilities_ImplementationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: z.string().regex(/[ \r\n\t\S]+/),
		_description: z.lazy(getElementSchema).optional(),
		url: z.string().regex(/\S*/).optional(),
		_url: z.lazy(getElementSchema).optional(),
	}).strict();

export const TerminologyCapabilities_ImplementationSchema =
	TerminologyCapabilities_ImplementationSchemaInternal as z.ZodType<TerminologyCapabilities_Implementation>;
