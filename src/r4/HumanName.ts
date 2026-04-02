// Profile: http://hl7.org/fhir/StructureDefinition/HumanName
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

/** Base StructureDefinition for HumanName Type: A human's name with the ability to identify parts and usage. */
export interface HumanName extends Element {
	/** The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father. */
	family?: string;
	/** Extensions for family */
	_family?: Element;
	/** Given name. */
	given?: Array<string>;
	/** Extensions for given */
	_given?: Element;
	/** Indicates the period of time when this name was valid for the named person. */
	period?: Period;
	/** Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name. */
	prefix?: Array<string>;
	/** Extensions for prefix */
	_prefix?: Element;
	/** Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name. */
	suffix?: Array<string>;
	/** Extensions for suffix */
	_suffix?: Element;
	/** Specifies the entire name as it should be displayed e.g. on an application UI. This may be provided instead of or as well as the specific parts. */
	text?: string;
	/** Extensions for text */
	_text?: Element;
	/** Identifies the purpose for this name. */
	use?:
		| "anonymous"
		| "maiden"
		| "nickname"
		| "official"
		| "old"
		| "temp"
		| "usual";
	/** Extensions for use */
	_use?: Element;
}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;
const getPeriodSchema = (): z.ZodType<Period> => PeriodSchemaInternal;

/** @internal */
export const HumanNameSchemaInternal = z
	.object({
		extension: z.lazy(getExtensionSchema).array().optional(),
		family: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_family: z.lazy(getElementSchema).optional(),
		given: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.array()
			.optional(),
		_given: z.lazy(getElementSchema).optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		period: z.lazy(getPeriodSchema).optional(),
		prefix: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.array()
			.optional(),
		_prefix: z.lazy(getElementSchema).optional(),
		suffix: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.array()
			.optional(),
		_suffix: z.lazy(getElementSchema).optional(),
		text: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_text: z.lazy(getElementSchema).optional(),
		use: z
			.enum([
				"anonymous",
				"maiden",
				"nickname",
				"official",
				"old",
				"temp",
				"usual",
			])
			.optional(),
		_use: z.lazy(getElementSchema).optional(),
	})
	.strict();

export const HumanNameSchema: z.ZodType<HumanName> = HumanNameSchemaInternal;
