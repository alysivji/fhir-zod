// Profile: http://hl7.org/fhir/StructureDefinition/MessageDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

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
		message: z.string().regex(/\S*/),
		_message: z.lazy(getElementSchema).optional(),
		situation: z.string().optional(),
		_situation: z.lazy(getElementSchema).optional(),
	}).strict();

export const MessageDefinition_AllowedResponseSchema =
	MessageDefinition_AllowedResponseSchemaInternal as z.ZodType<MessageDefinition_AllowedResponse>;
