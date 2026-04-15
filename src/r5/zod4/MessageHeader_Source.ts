// Profile: http://hl7.org/fhir/StructureDefinition/MessageHeader
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { fhirString, fhirUrl } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { ContactPoint } from "./ContactPoint";
import { ContactPointSchemaInternal } from "./ContactPoint";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The source application from which this message originated. */
export interface MessageHeader_Source extends BackboneElement {
	/** An e-mail, phone, website or other contact point to use to resolve issues with message communications. */
	contact?: ContactPoint;
	/** Identifies the routing target to send acknowledgements to. */
	endpointReference?: Reference;
	/** Identifies the routing target to send acknowledgements to. */
	endpointUrl?: string;
	/** Extensions for endpointUrl */
	_endpointUrl?: Element;
	/** Human-readable name for the source system. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** May include configuration or other information useful in debugging. */
	software?: string;
	/** Extensions for software */
	_software?: Element;
	/** Can convey versions of multiple systems in situations where a message passes through multiple hands. */
	version?: string;
	/** Extensions for version */
	_version?: Element;
}

const getContactPointSchema = (): z.ZodType<ContactPoint> =>
	ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MessageHeader_SourceSchemaInternal =
	BackboneElementSchemaInternal.extend({
		contact: z.lazy(getContactPointSchema).optional(),
		endpointReference: z.lazy(getReferenceSchema).optional(),
		endpointUrl: fhirUrl().optional(),
		_endpointUrl: z.lazy(getElementSchema).optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		software: fhirString().optional(),
		_software: z.lazy(getElementSchema).optional(),
		version: fhirString().optional(),
		_version: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const endpoint_x_Present = ["endpointReference", "endpointUrl"].filter(
				(field) => record[field] !== undefined,
			);
			if (endpoint_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of endpointReference, endpointUrl may be present for endpoint[x]",
					path: [endpoint_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.endpointReference,
				"endpointReference",
				["http://hl7.org/fhir/StructureDefinition/Endpoint"],
				["Endpoint"],
				ctx,
			);
		});

export const MessageHeader_SourceSchema =
	MessageHeader_SourceSchemaInternal as z.ZodType<MessageHeader_Source>;
