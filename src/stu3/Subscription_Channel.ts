// Profile: http://hl7.org/fhir/StructureDefinition/Subscription
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirString, fhirUri } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Details where to send notifications when resources are received that meet the criteria. */
export interface Subscription_Channel extends BackboneElement {
	/** The uri that describes the actual end-point to send messages to. */
	endpoint?: string;
	/** Extensions for endpoint */
	_endpoint?: Element;
	/** Additional headers / information to send as part of the notification. */
	header?: Array<string | null>;
	/** Extensions for header */
	_header?: Array<Element | null>;
	/** The mime type to send the payload in - either application/fhir+xml, or application/fhir+json. If the payload is not present, then there is no payload in the notification, just a notification. */
	payload?: string;
	/** Extensions for payload */
	_payload?: Element;
	/** The type of channel to send notifications on. */
	type: "email" | "message" | "rest-hook" | "sms" | "websocket";
	/** Extensions for type */
	_type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Subscription_ChannelSchemaInternal =
	BackboneElementSchemaInternal.extend({
		endpoint: fhirUri().optional(),
		_endpoint: z.lazy(getElementSchema).optional(),
		header: fhirString().nullable().array().optional(),
		_header: z.lazy(getElementSchema).nullable().array().optional(),
		payload: fhirString().optional(),
		_payload: z.lazy(getElementSchema).optional(),
		type: z.enum(["email", "message", "rest-hook", "sms", "websocket"]),
		_type: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.header,
				record._header,
				"header",
				"_header",
				ctx,
			);
		});

export const Subscription_ChannelSchema =
	Subscription_ChannelSchemaInternal as z.ZodType<Subscription_Channel>;
