// Profile: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T02:24:59.228Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Information about security implementation from an interface perspective - what a client needs to know. */
export interface CapabilityStatement_Rest_Security extends BackboneElement {
	/** Server adds CORS headers when responding to requests - this enables Javascript applications to use the server. */
	cors?: boolean;
	/** Extensions for cors */
	_cors?: Element;
	/** General description of how security works. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Types of security services that are supported/required by the system. */
	service?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const CapabilityStatement_Rest_SecuritySchemaInternal =
	BackboneElementSchemaInternal.extend({
		cors: z.boolean().optional(),
		_cors: z.lazy(getElementSchema).optional(),
		description: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		service: z.lazy(getCodeableConceptSchema).array().optional(),
	}).strict();

export const CapabilityStatement_Rest_SecuritySchema =
	CapabilityStatement_Rest_SecuritySchemaInternal as z.ZodType<CapabilityStatement_Rest_Security>;
