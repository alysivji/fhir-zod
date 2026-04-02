// Profile: http://hl7.org/fhir/StructureDefinition/Address
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T04:00:24.609Z

import * as z from "zod";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import type { Period } from "./Period";
import { fhirId } from "../shared/fhir-primitives";
import { ElementSchemaInternal } from "./Element";
import { ExtensionSchemaInternal } from "./Extension";
import { PeriodSchemaInternal } from "./Period";

/** Base StructureDefinition for Address Type: An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world. */
export interface Address extends Element {
	/** The name of the city, town, suburb, village or other community or delivery center. */
	city?: string;
	/** Extensions for city */
	_city?: Element;
	/** Country - a nation as commonly understood or generally accepted. */
	country?: string;
	/** Extensions for country */
	_country?: Element;
	/** The name of the administrative area (county). */
	district?: string;
	/** Extensions for district */
	_district?: Element;
	/** This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information. */
	line?: Array<string>;
	/** Extensions for line */
	_line?: Element;
	/** Time period when address was/is in use. */
	period?: Period;
	/** A postal code designating a region defined by the postal service. */
	postalCode?: string;
	/** Extensions for postalCode */
	_postalCode?: Element;
	/** Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes). */
	state?: string;
	/** Extensions for state */
	_state?: Element;
	/** Specifies the entire address as it should be displayed e.g. on a postal label. This may be provided instead of or as well as the specific parts. */
	text?: string;
	/** Extensions for text */
	_text?: Element;
	/** Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both. */
	type?: "both" | "physical" | "postal";
	/** Extensions for type */
	_type?: Element;
	/** The purpose of this address. */
	use?: "billing" | "home" | "old" | "temp" | "work";
	/** Extensions for use */
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
			.optional(),
		_city: z.lazy(getElementSchema).optional(),
		country: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_country: z.lazy(getElementSchema).optional(),
		district: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_district: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		line: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.array()
			.optional(),
		_line: z.lazy(getElementSchema).optional(),
		period: z.lazy(getPeriodSchema).optional(),
		postalCode: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_postalCode: z.lazy(getElementSchema).optional(),
		state: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_state: z.lazy(getElementSchema).optional(),
		text: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_text: z.lazy(getElementSchema).optional(),
		type: z.enum(["both", "physical", "postal"]).optional(),
		_type: z.lazy(getElementSchema).optional(),
		use: z.enum(["billing", "home", "old", "temp", "work"]).optional(),
		_use: z.lazy(getElementSchema).optional(),
	})
	.strict();

export const AddressSchema: z.ZodType<Address> = AddressSchemaInternal;
