// Profile: http://hl7.org/fhir/StructureDefinition/Binary
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { fhirBase64Binary, fhirCode } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { Resource } from "./Resource";
import { ResourceSchemaInternal } from "./Resource";

/** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
export interface Binary extends Resource {
	/** MimeType of the binary content represented as a standard MimeType (BCP 13). */
	contentType: string;
	/** Extensions for contentType */
	_contentType?: Element;
	/** The actual content, base64 encoded. */
	data?: string;
	/** Extensions for data */
	_data?: Element;
	/** This is a Binary resource. */
	resourceType: "Binary";
	/** This element identifies another resource that can be used as a proxy of the security sensitivity to use when deciding and enforcing access control rules for the Binary resource. Given that the Binary resource contains very few elements that can be used to determine the sensitivity of the data and relationships to individuals, the referenced resource stands in as a proxy equivalent for this purpose. This referenced resource may be related to the Binary (e.g. DocumentReference), or may be some non-related Resource purely as a security proxy. E.g. to identify that the binary resource relates to a patient, and access should only be granted to applications that have access to the patient. */
	securityContext?: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const BinarySchemaInternal = ResourceSchemaInternal.extend({
	contentType: fhirCode(),
	_contentType: z.lazy(getElementSchema).optional(),
	data: fhirBase64Binary().optional(),
	_data: z.lazy(getElementSchema).optional(),
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
