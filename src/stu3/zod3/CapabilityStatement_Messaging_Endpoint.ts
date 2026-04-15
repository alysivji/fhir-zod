// Profile: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { fhirUri } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** An endpoint (network accessible address) to which messages and/or replies are to be sent. */
export interface CapabilityStatement_Messaging_Endpoint
	extends BackboneElement {
	/** The network address of the end-point. For solutions that do not use network addresses for routing, it can be just an identifier. */
	address: string;
	/** Extensions for address */
	_address?: Element;
	/** A list of the messaging transport protocol(s) identifiers, supported by this endpoint. */
	protocol: Coding;
}

const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const CapabilityStatement_Messaging_EndpointSchemaInternal =
	BackboneElementSchemaInternal.extend({
		address: fhirUri(),
		_address: z.lazy(getElementSchema).optional(),
		protocol: z.lazy(getCodingSchema),
	}).strict();

export const CapabilityStatement_Messaging_EndpointSchema =
	CapabilityStatement_Messaging_EndpointSchemaInternal as z.ZodType<CapabilityStatement_Messaging_Endpoint>;
