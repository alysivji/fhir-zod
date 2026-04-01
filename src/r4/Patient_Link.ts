// Profile: http://hl7.org/fhir/StructureDefinition/Patient
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Reference } from "./Reference";

const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;
const getReferenceSchema = (): z.ZodType<unknown> => Reference;

export const Patient_Link = z
	.object({
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_type: z.lazy(getElementSchema).optional().describe("Extensions for type"),
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
		modifierExtension: z
			.lazy(getExtensionSchema)
			.array()
			.optional()
			.describe(
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
			),
		other: z
			.lazy(getReferenceSchema)
			.describe("The other patient resource that the link refers to."),
		type: z
			.enum(["refer", "replaced-by", "replaces", "seealso"])
			.describe(
				"The type of link between this patient resource and another patient resource.",
			),
	})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.other,
			"other",
			[
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			["Patient", "RelatedPerson"],
			ctx,
		);
	});

export type Patient_Link = z.output<typeof Patient_Link>;
