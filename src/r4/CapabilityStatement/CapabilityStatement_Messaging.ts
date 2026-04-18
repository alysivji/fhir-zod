// Profile: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { CapabilityStatement_Messaging_Endpoint } from "./CapabilityStatement_Messaging_Endpoint";
import { CapabilityStatement_Messaging_EndpointSchemaInternal } from "./CapabilityStatement_Messaging_Endpoint";
import type { CapabilityStatement_Messaging_SupportedMessage } from "./CapabilityStatement_Messaging_SupportedMessage";
import { CapabilityStatement_Messaging_SupportedMessageSchemaInternal } from "./CapabilityStatement_Messaging_SupportedMessage";

/** A description of the messaging capabilities of the solution. */
export interface CapabilityStatement_Messaging extends BackboneElement {
	/** Documentation about the system's messaging capabilities for this endpoint not otherwise documented by the capability statement.  For example, the process for becoming an authorized messaging exchange partner. */
	documentation?: string;
	/** Extensions for documentation */
	_documentation?: Element;
	/** An endpoint (network accessible address) to which messages and/or replies are to be sent. */
	endpoint?: Array<CapabilityStatement_Messaging_Endpoint>;
	/** Length if the receiver's reliable messaging cache in minutes (if a receiver) or how long the cache length on the receiver should be (if a sender). */
	reliableCache?: number;
	/** Extensions for reliableCache */
	_reliableCache?: Element;
	/** References to message definitions for messages this system can send or receive. */
	supportedMessage?: Array<CapabilityStatement_Messaging_SupportedMessage>;
}

const getCapabilityStatement_Messaging_EndpointSchema =
	(): z.ZodType<CapabilityStatement_Messaging_Endpoint> =>
		CapabilityStatement_Messaging_EndpointSchemaInternal as z.ZodType<CapabilityStatement_Messaging_Endpoint>;
const getCapabilityStatement_Messaging_SupportedMessageSchema =
	(): z.ZodType<CapabilityStatement_Messaging_SupportedMessage> =>
		CapabilityStatement_Messaging_SupportedMessageSchemaInternal as z.ZodType<CapabilityStatement_Messaging_SupportedMessage>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const CapabilityStatement_MessagingSchemaInternal =
	BackboneElementSchemaInternal.extend({
		documentation: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_documentation: z.lazy(getElementSchema).optional(),
		endpoint: z
			.lazy(getCapabilityStatement_Messaging_EndpointSchema)
			.array()
			.optional(),
		reliableCache: z.number().int().nonnegative().optional(),
		_reliableCache: z.lazy(getElementSchema).optional(),
		supportedMessage: z
			.lazy(getCapabilityStatement_Messaging_SupportedMessageSchema)
			.array()
			.optional(),
	}).strict();

export const CapabilityStatement_MessagingSchema =
	CapabilityStatement_MessagingSchemaInternal as z.ZodType<CapabilityStatement_Messaging>;
