// Profile: http://hl7.org/fhir/StructureDefinition/Address
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Period } from "./Period";

const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;
const getPeriodSchema = (): z.ZodType<unknown> => Period;

export const Address = z
	.object({
		_city: z.lazy(getElementSchema).optional().describe("Extensions for city"),
		_country: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for country"),
		_district: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for district"),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_line: z.lazy(getElementSchema).optional().describe("Extensions for line"),
		_postalCode: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for postalCode"),
		_state: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for state"),
		_text: z.lazy(getElementSchema).optional().describe("Extensions for text"),
		_type: z.lazy(getElementSchema).optional().describe("Extensions for type"),
		_use: z.lazy(getElementSchema).optional().describe("Extensions for use"),
		city: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"The name of the city, town, suburb, village or other community or delivery center.",
			),
		country: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"Country - a nation as commonly understood or generally accepted.",
			),
		district: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe("The name of the administrative area (county)."),
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
		line: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.array()
			.optional()
			.describe(
				"This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.",
			),
		period: z
			.lazy(getPeriodSchema)
			.optional()
			.describe("Time period when address was/is in use."),
		postalCode: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"A postal code designating a region defined by the postal service.",
			),
		state: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes).",
			),
		text: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"Specifies the entire address as it should be displayed e.g. on a postal label. This may be provided instead of or as well as the specific parts.",
			),
		type: z
			.enum(["both", "physical", "postal"])
			.optional()
			.describe(
				"Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.",
			),
		use: z
			.enum(["billing", "home", "old", "temp", "work"])
			.optional()
			.describe("The purpose of this address."),
	})
	.strict();

export type Address = z.output<typeof Address>;
