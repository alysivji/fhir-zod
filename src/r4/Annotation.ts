// Profile: http://hl7.org/fhir/StructureDefinition/Annotation
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T04:00:24.609Z

import * as z from "zod";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import type { Reference } from "./Reference";
import { fhirDateTime, fhirId } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import { ElementSchemaInternal } from "./Element";
import { ExtensionSchemaInternal } from "./Extension";
import { ReferenceSchemaInternal } from "./Reference";

/** Base StructureDefinition for Annotation Type: A  text note which also  contains information about who made the statement and when. */
export interface Annotation extends Element {
	/** The individual responsible for making the annotation. */
	authorReference?: Reference;
	/** The individual responsible for making the annotation. */
	authorString?: string;
	/** Extensions for authorString */
	_authorString?: Element;
	/** The text of the annotation in markdown format. */
	text: string;
	/** Extensions for text */
	_text?: Element;
	/** Indicates when this particular annotation was made. */
	time?: string;
	/** Extensions for time */
	_time?: Element;
}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;
const getReferenceSchema = (): z.ZodType<Reference> => ReferenceSchemaInternal;

/** @internal */
export const AnnotationSchemaInternal = z
	.object({
		authorReference: z.lazy(getReferenceSchema).optional(),
		authorString: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_authorString: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		text: z.string(),
		_text: z.lazy(getElementSchema).optional(),
		time: fhirDateTime().optional(),
		_time: z.lazy(getElementSchema).optional(),
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
