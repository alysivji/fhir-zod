// Profile: http://hl7.org/fhir/StructureDefinition/Binary
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { fhirBase64Binary, fhirCode } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { Resource } from "./Resource";
import { ResourceSchemaInternal } from "./Resource";

/** Base StructureDefinition for Binary Resource */
export interface Binary extends Resource {
	/** The actual content, base64 encoded. */
	content: string;
	/** Extensions for content */
	_content?: Element;
	/** MimeType of the binary content represented as a standard MimeType (BCP 13). */
	contentType: string;
	/** Extensions for contentType */
	_contentType?: Element;
	/** This is a Binary resource. */
	resourceType: "Binary";
	/** Treat this binary as if it was this other resource for access control purposes. */
	securityContext?: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const BinarySchemaInternal = ResourceSchemaInternal.extend({
	content: fhirBase64Binary(),
	_content: z.lazy(getElementSchema).optional(),
	contentType: fhirCode(),
	_contentType: z.lazy(getElementSchema).optional(),
	resourceType: z.literal("Binary"),
	securityContext: z.lazy(getReferenceSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.securityContext,
			"securityContext",
			["http://hl7.org/fhir/StructureDefinition/Resource"],
			["Resource"],
			ctx,
		);
	});

export const BinarySchema = BinarySchemaInternal as z.ZodType<Binary>;
