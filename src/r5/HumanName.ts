// Profile: http://hl7.org/fhir/StructureDefinition/HumanName
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-05T15:32:44.350Z

import * as z from "zod";
import { fhirId, fhirString } from "../shared/fhir-primitives";
import type { DataType } from "./DataType";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";

/** HumanName Type: A name, normally of a human, that can be used for other living entities (e.g. animals but not organizations) that have been assigned names by a human and may need the use of name parts or the need for usage information. */
export interface HumanName extends DataType {
	/** The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father. */
	family?: string;
	/** Extensions for family */
	_family?: Element;
	/** Given name. */
	given?: Array<string>;
	/** Extensions for given */
	_given?: Array<Element>;
	/** Indicates the period of time when this name was valid for the named person. */
	period?: Period;
	/** Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name. */
	prefix?: Array<string>;
	/** Extensions for prefix */
	_prefix?: Array<Element>;
	/** Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name. */
	suffix?: Array<string>;
	/** Extensions for suffix */
	_suffix?: Array<Element>;
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

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const HumanNameSchemaInternal = z
	.object({
		extension: z.lazy(getExtensionSchema).array().optional(),
		family: fhirString().optional(),
		_family: z.lazy(getElementSchema).optional(),
		given: fhirString().array().optional(),
		_given: z.lazy(getElementSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		period: z.lazy(getPeriodSchema).optional(),
		prefix: fhirString().array().optional(),
		_prefix: z.lazy(getElementSchema).array().optional(),
		suffix: fhirString().array().optional(),
		_suffix: z.lazy(getElementSchema).array().optional(),
		text: fhirString().optional(),
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

export const HumanNameSchema = HumanNameSchemaInternal as z.ZodType<HumanName>;
