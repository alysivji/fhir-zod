// Profile: http://hl7.org/fhir/StructureDefinition/Identifier
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Period } from "./Period";
import { Reference } from "./Reference";

const getCodeableConceptSchema = (): z.ZodType<unknown> => CodeableConcept;
const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;
const getPeriodSchema = (): z.ZodType<unknown> => Period;
const getReferenceSchema = (): z.ZodType<unknown> => Reference;

export const Identifier = z
	.object({
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_system: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for system"),
		_use: z.lazy(getElementSchema).optional().describe("Extensions for use"),
		_value: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for value"),
		assigner: z
			.lazy(getReferenceSchema)
			.optional()
			.describe("Organization that issued/manages the identifier."),
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
		period: z
			.lazy(getPeriodSchema)
			.optional()
			.describe("Time period during which identifier is/was valid for use."),
		system: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"Establishes the namespace for the value - that is, a URL that describes a set values that are unique.",
			),
		type: z
			.lazy(getCodeableConceptSchema)
			.optional()
			.describe(
				"A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.",
			),
		use: z
			.enum(["official", "old", "secondary", "temp", "usual"])
			.optional()
			.describe("The purpose of this identifier."),
		value: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"The portion of the identifier typically relevant to the user and which is unique within the context of the system.",
			),
	})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.assigner,
			"assigner",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
	});

export type Identifier = z.output<typeof Identifier>;
