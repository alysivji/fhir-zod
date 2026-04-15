// Profile: http://hl7.org/fhir/StructureDefinition/Address
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T00:02:13.224Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirId, fhirString } from "../shared/fhir-primitives";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Period } from "./Period";
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
	line?: Array<string | null>;
	/** Extensions for line */
	_line?: Array<Element | null>;
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

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const AddressSchemaInternal = z
	.object({
		city: fhirString().optional(),
		_city: z.lazy(getElementSchema).optional(),
		country: fhirString().optional(),
		_country: z.lazy(getElementSchema).optional(),
		district: fhirString().optional(),
		_district: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		line: fhirString().nullable().array().optional(),
		_line: z.lazy(getElementSchema).nullable().array().optional(),
		period: z.lazy(getPeriodSchema).optional(),
		postalCode: fhirString().optional(),
		_postalCode: z.lazy(getElementSchema).optional(),
		state: fhirString().optional(),
		_state: z.lazy(getElementSchema).optional(),
		text: fhirString().optional(),
		_text: z.lazy(getElementSchema).optional(),
		type: z.enum(["both", "physical", "postal"]).optional(),
		_type: z.lazy(getElementSchema).optional(),
		use: z.enum(["billing", "home", "old", "temp", "work"]).optional(),
		_use: z.lazy(getElementSchema).optional(),
	})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validatePrimitiveArrayPair(record.line, record._line, "line", "_line", ctx);
	});

export const AddressSchema = AddressSchemaInternal as z.ZodType<Address>;
