// Profile: http://hl7.org/fhir/StructureDefinition/MessageHeader
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { fhirString, fhirUri } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The destination application which the message is intended for. */
export interface MessageHeader_Destination extends BackboneElement {
	/** Indicates where the message should be routed to. */
	endpoint: string;
	/** Extensions for endpoint */
	_endpoint?: Element;
	/** Human-readable name for the target system. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** Identifies the target end system in situations where the initial message transmission is to an intermediary system. */
	target?: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MessageHeader_DestinationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		endpoint: fhirUri(),
		_endpoint: z.lazy(getElementSchema).optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		target: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.target,
				"target",
				["http://hl7.org/fhir/StructureDefinition/Device"],
				["Device"],
				ctx,
			);
		});

export const MessageHeader_DestinationSchema =
	MessageHeader_DestinationSchemaInternal as z.ZodType<MessageHeader_Destination>;
