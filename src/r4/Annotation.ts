// Profile: http://hl7.org/fhir/StructureDefinition/Annotation
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import type { Reference } from "./Reference";
import { fhirDateTime, fhirId } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import { ElementSchemaInternal } from "./Element";
import { ExtensionSchemaInternal } from "./Extension";
import { ReferenceSchemaInternal } from "./Reference";

export interface Annotation extends Element {
	authorReference?: Reference;
	authorString?: string;
	_authorString?: Element;
	text: string;
	_text?: Element;
	time?: string;
	_time?: Element;
}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;
const getReferenceSchema = (): z.ZodType<Reference> => ReferenceSchemaInternal;

/** @internal */
export const AnnotationSchemaInternal = z
	.object({
		authorReference: z
			.lazy(getReferenceSchema)
			.optional()
			.describe("The individual responsible for making the annotation."),
		authorString: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe("The individual responsible for making the annotation."),
		_authorString: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for authorString"),
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
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		text: z.string().describe("The text of the annotation in markdown format."),
		_text: z.lazy(getElementSchema).optional().describe("Extensions for text"),
		time: fhirDateTime()
			.optional()
			.describe("Indicates when this particular annotation was made."),
		_time: z.lazy(getElementSchema).optional().describe("Extensions for time"),
	})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const author_x_Present = ["authorReference", "authorString"].filter(
			(field) => record[field] !== undefined,
		);
		if (author_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of authorReference, authorString may be present for author[x]",
				path: [author_x_Present[0]],
			});
		}
		validateReferenceTarget(
			record.authorReference,
			"authorReference",
			[
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			["Organization", "Patient", "Practitioner", "RelatedPerson"],
			ctx,
		);
	});

export const AnnotationSchema: z.ZodType<Annotation> = AnnotationSchemaInternal;
