// Profile: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirCanonical } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A document definition. */
export interface CapabilityStatement_Document extends BackboneElement {
	/** A description of how the application supports or uses the specified document profile.  For example, when documents are created, what action is taken with consumed documents, etc. */
	documentation?: string;
	/** Extensions for documentation */
	_documentation?: Element;
	/** Mode of this document declaration - whether an application is a producer or consumer. */
	mode: "consumer" | "producer";
	/** Extensions for mode */
	_mode?: Element;
	/** A profile on the document Bundle that constrains which resources are present, and their contents. */
	profile: string;
	/** Extensions for profile */
	_profile?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const CapabilityStatement_DocumentSchemaInternal =
	BackboneElementSchemaInternal.extend({
		documentation: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_documentation: z.lazy(getElementSchema).optional(),
		mode: z.enum(["consumer", "producer"]),
		_mode: z.lazy(getElementSchema).optional(),
		profile: fhirCanonical(),
		_profile: z.lazy(getElementSchema).optional(),
	}).strict();

export const CapabilityStatement_DocumentSchema =
	CapabilityStatement_DocumentSchemaInternal as z.ZodType<CapabilityStatement_Document>;
