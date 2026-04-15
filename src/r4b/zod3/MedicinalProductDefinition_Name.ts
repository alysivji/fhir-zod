// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { MedicinalProductDefinition_Name_CountryLanguage } from "./MedicinalProductDefinition_Name_CountryLanguage";
import { MedicinalProductDefinition_Name_CountryLanguageSchemaInternal } from "./MedicinalProductDefinition_Name_CountryLanguage";
import type { MedicinalProductDefinition_Name_NamePart } from "./MedicinalProductDefinition_Name_NamePart";
import { MedicinalProductDefinition_Name_NamePartSchemaInternal } from "./MedicinalProductDefinition_Name_NamePart";

/** The product's name, including full name and possibly coded parts. */
export interface MedicinalProductDefinition_Name extends BackboneElement {
	/** Country and jurisdiction where the name applies, and associated language. */
	countryLanguage?: Array<MedicinalProductDefinition_Name_CountryLanguage>;
	/** Coding words or phrases of the name. */
	namePart?: Array<MedicinalProductDefinition_Name_NamePart>;
	/** The full product name. */
	productName: string;
	/** Extensions for productName */
	_productName?: Element;
	/** Type of product name, such as rINN, BAN, Proprietary, Non-Proprietary. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getMedicinalProductDefinition_Name_CountryLanguageSchema =
	(): z.ZodType<MedicinalProductDefinition_Name_CountryLanguage> =>
		MedicinalProductDefinition_Name_CountryLanguageSchemaInternal as z.ZodType<MedicinalProductDefinition_Name_CountryLanguage>;
const getMedicinalProductDefinition_Name_NamePartSchema =
	(): z.ZodType<MedicinalProductDefinition_Name_NamePart> =>
		MedicinalProductDefinition_Name_NamePartSchemaInternal as z.ZodType<MedicinalProductDefinition_Name_NamePart>;

/** @internal */
export const MedicinalProductDefinition_NameSchemaInternal =
	BackboneElementSchemaInternal.extend({
		countryLanguage: z
			.lazy(getMedicinalProductDefinition_Name_CountryLanguageSchema)
			.array()
			.optional(),
		namePart: z
			.lazy(getMedicinalProductDefinition_Name_NamePartSchema)
			.array()
			.optional(),
		productName: fhirString(),
		_productName: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const MedicinalProductDefinition_NameSchema =
	MedicinalProductDefinition_NameSchemaInternal as z.ZodType<MedicinalProductDefinition_Name>;
