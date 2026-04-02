// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProduct
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";

/** Country where the name applies. */
export interface MedicinalProduct_Name_CountryLanguage extends BackboneElement {
	/** Country code for where this name applies. */
	country: CodeableConcept;
	/** Jurisdiction code for where this name applies. */
	jurisdiction?: CodeableConcept;
	/** Language code for this name. */
	language: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const MedicinalProduct_Name_CountryLanguageSchemaInternal =
	BackboneElementSchemaInternal.extend({
		country: z.lazy(getCodeableConceptSchema),
		jurisdiction: z.lazy(getCodeableConceptSchema).optional(),
		language: z.lazy(getCodeableConceptSchema),
	}).strict();

export const MedicinalProduct_Name_CountryLanguageSchema =
	MedicinalProduct_Name_CountryLanguageSchemaInternal as z.ZodType<MedicinalProduct_Name_CountryLanguage>;
