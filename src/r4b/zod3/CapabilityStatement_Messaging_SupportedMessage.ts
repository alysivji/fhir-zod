// Profile: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import { fhirCanonical } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** References to message definitions for messages this system can send or receive. */
export interface CapabilityStatement_Messaging_SupportedMessage
	extends BackboneElement {
	/** Points to a message definition that identifies the messaging event, message structure, allowed responses, etc. */
	definition: string;
	/** Extensions for definition */
	_definition?: Element;
	/** The mode of this event declaration - whether application is sender or receiver. */
	mode: "receiver" | "sender";
	/** Extensions for mode */
	_mode?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const CapabilityStatement_Messaging_SupportedMessageSchemaInternal =
	BackboneElementSchemaInternal.extend({
		definition: fhirCanonical(),
		_definition: z.lazy(getElementSchema).optional(),
		mode: z.enum(["receiver", "sender"]),
		_mode: z.lazy(getElementSchema).optional(),
	}).strict();

export const CapabilityStatement_Messaging_SupportedMessageSchema =
	CapabilityStatement_Messaging_SupportedMessageSchemaInternal as z.ZodType<CapabilityStatement_Messaging_SupportedMessage>;
