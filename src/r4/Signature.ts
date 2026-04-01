// Profile: http://hl7.org/fhir/StructureDefinition/Signature
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

import * as z from "zod";
import { fhirId, fhirInstant } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import { Coding } from "./Coding";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Reference } from "./Reference";

const getCodingSchema = (): z.ZodType<unknown> => Coding;
const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;
const getReferenceSchema = (): z.ZodType<unknown> => Reference;

export const Signature = z
	.object({
		_data: z.lazy(getElementSchema).optional().describe("Extensions for data"),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_sigFormat: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for sigFormat"),
		_targetFormat: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for targetFormat"),
		_when: z.lazy(getElementSchema).optional().describe("Extensions for when"),
		data: z
			.string()
			.regex(/(\s*([0-9a-zA-Z+/=]){4}\s*)+/)
			.optional()
			.describe(
				"The base64 encoding of the Signature content. When signature is not recorded electronically this element would be empty.",
			),
		extension: z
			.lazy(getExtensionSchema)
			.array()
			.optional()
			.describe(
				"May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
			),
		id: fhirId()
			.optional()
			.describe(
				"Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
			),
		onBehalfOf: z
			.lazy(getReferenceSchema)
			.optional()
			.describe(
				"A reference to an application-usable description of the identity that is represented by the signature.",
			),
		sigFormat: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional()
			.describe(
				"A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for a graphical image of a signature, etc.",
			),
		targetFormat: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional()
			.describe(
				"A mime type that indicates the technical format of the target resources signed by the signature.",
			),
		type: z
			.lazy(getCodingSchema)
			.array()
			.describe(
				"An indication of the reason that the entity signed this document. This may be explicitly included as part of the signature information and can be used when determining accountability for various actions concerning the document.",
			),
		when: fhirInstant().describe("When the digital signature was signed."),
		who: z
			.lazy(getReferenceSchema)
			.describe(
				"A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key).",
			),
	})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.onBehalfOf,
			"onBehalfOf",
			[
				"http://hl7.org/fhir/StructureDefinition/Device",
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			[
				"Device",
				"Organization",
				"Patient",
				"Practitioner",
				"PractitionerRole",
				"RelatedPerson",
			],
			ctx,
		);
		validateReferenceTarget(
			record.who,
			"who",
			[
				"http://hl7.org/fhir/StructureDefinition/Device",
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			[
				"Device",
				"Organization",
				"Patient",
				"Practitioner",
				"PractitionerRole",
				"RelatedPerson",
			],
			ctx,
		);
	});

export type Signature = z.output<typeof Signature>;
