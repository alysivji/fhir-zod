// Profile: http://hl7.org/fhir/StructureDefinition/InventoryItem
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** The item name(s) - the brand name, or common name, functional name, generic name. */
export interface InventoryItem_Name extends BackboneElement {
	/** The language that the item name is expressed in. */
	language:
		| "ar"
		| "bg"
		| "bg-BG"
		| "bn"
		| "bs"
		| "bs-BA"
		| "cs"
		| "cs-CZ"
		| "da"
		| "da-DK"
		| "de"
		| "de-AT"
		| "de-CH"
		| "de-DE"
		| "el"
		| "el-GR"
		| "en"
		| "en-AU"
		| "en-CA"
		| "en-GB"
		| "en-IN"
		| "en-NZ"
		| "en-SG"
		| "en-US"
		| "es"
		| "es-AR"
		| "es-ES"
		| "es-UY"
		| "et"
		| "et-EE"
		| "fi"
		| "fi-FI"
		| "fr"
		| "fr-BE"
		| "fr-CA"
		| "fr-CH"
		| "fr-FR"
		| "fy"
		| "fy-NL"
		| "hi"
		| "hr"
		| "hr-HR"
		| "is"
		| "is-IS"
		| "it"
		| "it-CH"
		| "it-IT"
		| "ja"
		| "ko"
		| "lt"
		| "lt-LT"
		| "lv"
		| "lv-LV"
		| "nl"
		| "nl-BE"
		| "nl-NL"
		| "no"
		| "no-NO"
		| "pa"
		| "pl"
		| "pl-PL"
		| "pt"
		| "pt-BR"
		| "pt-PT"
		| "ro"
		| "ro-RO"
		| "ru"
		| "ru-RU"
		| "sk"
		| "sk-SK"
		| "sl"
		| "sl-SI"
		| "sr"
		| "sr-RS"
		| "sv"
		| "sv-SE"
		| "te"
		| "zh"
		| "zh-CN"
		| "zh-HK"
		| "zh-SG"
		| "zh-TW";
	/** Extensions for language */
	_language?: Element;
	/** The name or designation that the item is given. */
	name: string;
	/** Extensions for name */
	_name?: Element;
	/** The type of name e.g. 'brand-name', 'functional-name', 'common-name'. */
	nameType: Coding;
}

const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const InventoryItem_NameSchemaInternal =
	BackboneElementSchemaInternal.extend({
		language: z.enum([
			"ar",
			"bg",
			"bg-BG",
			"bn",
			"bs",
			"bs-BA",
			"cs",
			"cs-CZ",
			"da",
			"da-DK",
			"de",
			"de-AT",
			"de-CH",
			"de-DE",
			"el",
			"el-GR",
			"en",
			"en-AU",
			"en-CA",
			"en-GB",
			"en-IN",
			"en-NZ",
			"en-SG",
			"en-US",
			"es",
			"es-AR",
			"es-ES",
			"es-UY",
			"et",
			"et-EE",
			"fi",
			"fi-FI",
			"fr",
			"fr-BE",
			"fr-CA",
			"fr-CH",
			"fr-FR",
			"fy",
			"fy-NL",
			"hi",
			"hr",
			"hr-HR",
			"is",
			"is-IS",
			"it",
			"it-CH",
			"it-IT",
			"ja",
			"ko",
			"lt",
			"lt-LT",
			"lv",
			"lv-LV",
			"nl",
			"nl-BE",
			"nl-NL",
			"no",
			"no-NO",
			"pa",
			"pl",
			"pl-PL",
			"pt",
			"pt-BR",
			"pt-PT",
			"ro",
			"ro-RO",
			"ru",
			"ru-RU",
			"sk",
			"sk-SK",
			"sl",
			"sl-SI",
			"sr",
			"sr-RS",
			"sv",
			"sv-SE",
			"te",
			"zh",
			"zh-CN",
			"zh-HK",
			"zh-SG",
			"zh-TW",
		]),
		_language: z.lazy(getElementSchema).optional(),
		name: fhirString(),
		_name: z.lazy(getElementSchema).optional(),
		nameType: z.lazy(getCodingSchema),
	}).strict();

export const InventoryItem_NameSchema =
	InventoryItem_NameSchemaInternal as z.ZodType<InventoryItem_Name>;
