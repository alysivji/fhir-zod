// Profile: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CapabilityStatement_Messaging_Endpoint } from "./CapabilityStatement_Messaging_Endpoint";
import { CapabilityStatement_Messaging_EndpointSchemaInternal } from "./CapabilityStatement_Messaging_Endpoint";
import type { CapabilityStatement_Messaging_Event } from "./CapabilityStatement_Messaging_Event";
import { CapabilityStatement_Messaging_EventSchemaInternal } from "./CapabilityStatement_Messaging_Event";
import type { CapabilityStatement_Messaging_SupportedMessage } from "./CapabilityStatement_Messaging_SupportedMessage";
import { CapabilityStatement_Messaging_SupportedMessageSchemaInternal } from "./CapabilityStatement_Messaging_SupportedMessage";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A description of the messaging capabilities of the solution. */
export interface CapabilityStatement_Messaging extends BackboneElement {
	/** Documentation about the system's messaging capabilities for this endpoint not otherwise documented by the capability statement.  For example, the process for becoming an authorized messaging exchange partner. */
	documentation?: string;
	/** Extensions for documentation */
	_documentation?: Element;
	/** An endpoint (network accessible address) to which messages and/or replies are to be sent. */
	endpoint?: Array<CapabilityStatement_Messaging_Endpoint>;
	/** A description of the solution's support for an event at this end-point. */
	event?: Array<CapabilityStatement_Messaging_Event>;
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
const getCapabilityStatement_Messaging_EventSchema =
	(): z.ZodType<CapabilityStatement_Messaging_Event> =>
		CapabilityStatement_Messaging_EventSchemaInternal as z.ZodType<CapabilityStatement_Messaging_Event>;
const getCapabilityStatement_Messaging_SupportedMessageSchema =
	(): z.ZodType<CapabilityStatement_Messaging_SupportedMessage> =>
		CapabilityStatement_Messaging_SupportedMessageSchemaInternal as z.ZodType<CapabilityStatement_Messaging_SupportedMessage>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const CapabilityStatement_MessagingSchemaInternal =
	BackboneElementSchemaInternal.extend({
		documentation: fhirString().optional(),
		_documentation: z.lazy(getElementSchema).optional(),
		endpoint: z
			.lazy(getCapabilityStatement_Messaging_EndpointSchema)
			.array()
			.optional(),
		event: z
			.lazy(getCapabilityStatement_Messaging_EventSchema)
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
