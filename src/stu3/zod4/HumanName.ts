// Profile: http://hl7.org/fhir/StructureDefinition/HumanName
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";

/** Base StructureDefinition for HumanName Type */
export interface HumanName extends Element {
	/** The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father. */
	family?: string;
	/** Extensions for family */
	_family?: Element;
	/** Given name. */
	given?: Array<string | null>;
	/** Extensions for given */
	_given?: Array<Element | null>;
	/** Indicates the period of time when this name was valid for the named person. */
	period?: Period;
	/** Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name. */
	prefix?: Array<string | null>;
	/** Extensions for prefix */
	_prefix?: Array<Element | null>;
	/** Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name. */
	suffix?: Array<string | null>;
	/** Extensions for suffix */
	_suffix?: Array<Element | null>;
	/** A full text representation of the name. */
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
		given: fhirString().nullable().array().optional(),
		_given: z.lazy(getElementSchema).nullable().array().optional(),
		id: fhirString().optional(),
		_id: z.lazy(getElementSchema).optional(),
		period: z.lazy(getPeriodSchema).optional(),
		prefix: fhirString().nullable().array().optional(),
		_prefix: z.lazy(getElementSchema).nullable().array().optional(),
		suffix: fhirString().nullable().array().optional(),
		_suffix: z.lazy(getElementSchema).nullable().array().optional(),
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
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validatePrimitiveArrayPair(
			record.given,
			record._given,
			"given",
			"_given",
			ctx,
		);
		validatePrimitiveArrayPair(
			record.prefix,
			record._prefix,
			"prefix",
			"_prefix",
			ctx,
		);
		validatePrimitiveArrayPair(
			record.suffix,
			record._suffix,
			"suffix",
			"_suffix",
			ctx,
		);
	});

export const HumanNameSchema = HumanNameSchemaInternal as z.ZodType<HumanName>;
