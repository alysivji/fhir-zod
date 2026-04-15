// Profile: http://hl7.org/fhir/StructureDefinition/Account
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { fhirDateTime } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** When using an account for billing a specific Encounter the set of diagnoses that are relevant for billing are stored here on the account where they are able to be sequenced appropriately prior to processing to produce claim(s). */
export interface Account_Diagnosis extends BackboneElement {
	/** The diagnosis relevant to the account. */
	condition: CodeableReference;
	/** Ranking of the diagnosis (for each type). */
	dateOfDiagnosis?: string;
	/** Extensions for dateOfDiagnosis */
	_dateOfDiagnosis?: Element;
	/** Was the Diagnosis present on Admission in the related Encounter. */
	onAdmission?: boolean;
	/** Extensions for onAdmission */
	_onAdmission?: Element;
	/** The package code can be used to group diagnoses that may be priced or delivered as a single product. Such as DRGs. */
	packageCode?: Array<CodeableConcept>;
	/** Ranking of the diagnosis (for each type). */
	sequence?: number;
	/** Extensions for sequence */
	_sequence?: Element;
	/** Type that this diagnosis has relevant to the account (e.g. admission, billing, discharge …). */
	type?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Account_DiagnosisSchemaInternal =
	BackboneElementSchemaInternal.extend({
		condition: z.lazy(getCodeableReferenceSchema),
		dateOfDiagnosis: fhirDateTime().optional(),
		_dateOfDiagnosis: z.lazy(getElementSchema).optional(),
		onAdmission: z.boolean().optional(),
		_onAdmission: z.lazy(getElementSchema).optional(),
		packageCode: z.lazy(getCodeableConceptSchema).array().optional(),
		sequence: z.number().int().positive().optional(),
		_sequence: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).array().optional(),
	}).strict();

export const Account_DiagnosisSchema =
	Account_DiagnosisSchemaInternal as z.ZodType<Account_Diagnosis>;
