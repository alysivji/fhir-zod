// Profile: http://hl7.org/fhir/StructureDefinition/MessageDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirCanonical } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Indicates what types of messages may be sent as an application-level response to this message. */
export interface MessageDefinition_AllowedResponse extends BackboneElement {
	/** A reference to the message definition that must be adhered to by this supported response. */
	message: string;
	/** Extensions for message */
	_message?: Element;
	/** Provides a description of the circumstances in which this response should be used (as opposed to one of the alternative responses). */
	situation?: string;
	/** Extensions for situation */
	_situation?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const MessageDefinition_AllowedResponseSchemaInternal =
	BackboneElementSchemaInternal.extend({
		message: fhirCanonical(),
		_message: z.lazy(getElementSchema).optional(),
		situation: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_situation: z.lazy(getElementSchema).optional(),
	}).strict();

export const MessageDefinition_AllowedResponseSchema =
	MessageDefinition_AllowedResponseSchemaInternal as z.ZodType<MessageDefinition_AllowedResponse>;
