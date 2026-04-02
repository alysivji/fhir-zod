// Profile: http://hl7.org/fhir/StructureDefinition/Address
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import type { Period } from "./Period";
import { fhirId } from "../shared/fhir-primitives";
import { ElementSchemaInternal } from "./Element";
import { ExtensionSchemaInternal } from "./Extension";
import { PeriodSchemaInternal } from "./Period";

export interface Address extends Element {
	city?: string;
	_city?: Element;
	country?: string;
	_country?: Element;
	district?: string;
	_district?: Element;
	line?: Array<string>;
	_line?: Element;
	period?: Period;
	postalCode?: string;
	_postalCode?: Element;
	state?: string;
	_state?: Element;
	text?: string;
	_text?: Element;
	type?: "both" | "physical" | "postal";
	_type?: Element;
	use?: "billing" | "home" | "old" | "temp" | "work";
	_use?: Element;
}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;
const getPeriodSchema = (): z.ZodType<Period> => PeriodSchemaInternal;

/** @internal */
export const AddressSchemaInternal = z
	.object({
		city: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"The name of the city, town, suburb, village or other community or delivery center.",
			),
		_city: z.lazy(getElementSchema).optional().describe("Extensions for city"),
		country: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"Country - a nation as commonly understood or generally accepted.",
			),
		_country: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for country"),
		district: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe("The name of the administrative area (county)."),
		_district: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for district"),
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
		line: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.array()
			.optional()
			.describe(
				"This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.",
			),
		_line: z.lazy(getElementSchema).optional().describe("Extensions for line"),
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
		_postalCode: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for postalCode"),
		state: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes).",
			),
		_state: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for state"),
		text: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"Specifies the entire address as it should be displayed e.g. on a postal label. This may be provided instead of or as well as the specific parts.",
			),
		_text: z.lazy(getElementSchema).optional().describe("Extensions for text"),
		type: z
			.enum(["both", "physical", "postal"])
			.optional()
			.describe(
				"Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.",
			),
		_type: z.lazy(getElementSchema).optional().describe("Extensions for type"),
		use: z
			.enum(["billing", "home", "old", "temp", "work"])
			.optional()
			.describe("The purpose of this address."),
		_use: z.lazy(getElementSchema).optional().describe("Extensions for use"),
	})
	.strict();

export const AddressSchema: z.ZodType<Address> = AddressSchemaInternal;
