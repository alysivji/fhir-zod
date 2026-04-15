// Profile: http://hl7.org/fhir/StructureDefinition/Endpoint
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirCode } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** The set of payloads that are provided/available at this endpoint. */
export interface Endpoint_Payload extends BackboneElement {
	/** The mime type to send the payload in - e.g. application/fhir+xml, application/fhir+json. If the mime type is not specified, then the sender could send any content (including no content depending on the connectionType). */
	mimeType?: Array<string | null>;
	/** Extensions for mimeType */
	_mimeType?: Array<Element | null>;
	/** The payload type describes the acceptable content that can be communicated on the endpoint. */
	type?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Endpoint_PayloadSchemaInternal =
	BackboneElementSchemaInternal.extend({
		mimeType: fhirCode().nullable().array().optional(),
		_mimeType: z.lazy(getElementSchema).nullable().array().optional(),
		type: z.lazy(getCodeableConceptSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.mimeType,
				record._mimeType,
				"mimeType",
				"_mimeType",
				ctx,
			);
		});

export const Endpoint_PayloadSchema =
	Endpoint_PayloadSchemaInternal as z.ZodType<Endpoint_Payload>;
