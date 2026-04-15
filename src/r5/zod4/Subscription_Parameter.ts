// Profile: http://hl7.org/fhir/StructureDefinition/Subscription
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Channel-dependent information to send as part of the notification (e.g., HTTP Headers). */
export interface Subscription_Parameter extends BackboneElement {
	/** Parameter name for information passed to the channel for notifications, for example in the case of a REST hook wanting to pass through an authorization header, the name would be Authorization. */
	name: string;
	/** Extensions for name */
	_name?: Element;
	/** Parameter value for information passed to the channel for notifications, for example in the case of a REST hook wanting to pass through an authorization header, the value would be `Bearer 0193...`. */
	value: string;
	/** Extensions for value */
	_value?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Subscription_ParameterSchemaInternal =
	BackboneElementSchemaInternal.extend({
		name: fhirString(),
		_name: z.lazy(getElementSchema).optional(),
		value: fhirString(),
		_value: z.lazy(getElementSchema).optional(),
	}).strict();

export const Subscription_ParameterSchema =
	Subscription_ParameterSchemaInternal as z.ZodType<Subscription_Parameter>;
