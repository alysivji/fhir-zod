// Profile: http://hl7.org/fhir/StructureDefinition/MessageHeader
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-04T22:42:43.846Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Information about the message that this message is a response to.  Only present if this message is a response. */
export interface MessageHeader_Response extends BackboneElement {
	/** Code that identifies the type of response to the message - whether it was successful or not, and whether it should be resent or not. */
	code: "fatal-error" | "ok" | "transient-error";
	/** Extensions for code */
	_code?: Element;
	/** Full details of any issues found in the message. */
	details?: Reference;
	/** The MessageHeader.id of the message to which this message is a response. */
	identifier: string;
	/** Extensions for identifier */
	_identifier?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MessageHeader_ResponseSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.enum(["fatal-error", "ok", "transient-error"]),
		_code: z.lazy(getElementSchema).optional(),
		details: z.lazy(getReferenceSchema).optional(),
		identifier: fhirId(),
		_identifier: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.details,
				"details",
				["http://hl7.org/fhir/StructureDefinition/OperationOutcome"],
				["OperationOutcome"],
				ctx,
			);
		});

export const MessageHeader_ResponseSchema =
	MessageHeader_ResponseSchemaInternal as z.ZodType<MessageHeader_Response>;
