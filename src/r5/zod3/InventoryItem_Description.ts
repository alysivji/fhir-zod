// Profile: http://hl7.org/fhir/StructureDefinition/InventoryItem
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** The descriptive characteristics of the inventory item. */
export interface InventoryItem_Description extends BackboneElement {
	/** Textual description of the item. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** The language for the item description, when an item must be described in different languages and those languages may be authoritative and not translations of a 'main' language. */
	language?:
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
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const InventoryItem_DescriptionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		language: z
			.enum([
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
			])
			.optional(),
		_language: z.lazy(getElementSchema).optional(),
	}).strict();

export const InventoryItem_DescriptionSchema =
	InventoryItem_DescriptionSchemaInternal as z.ZodType<InventoryItem_Description>;
