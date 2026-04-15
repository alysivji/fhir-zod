// Profile: http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirCanonical } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { ClinicalUseDefinition_Contraindication } from "./ClinicalUseDefinition_Contraindication";
import { ClinicalUseDefinition_ContraindicationSchemaInternal } from "./ClinicalUseDefinition_Contraindication";
import type { ClinicalUseDefinition_Indication } from "./ClinicalUseDefinition_Indication";
import { ClinicalUseDefinition_IndicationSchemaInternal } from "./ClinicalUseDefinition_Indication";
import type { ClinicalUseDefinition_Interaction } from "./ClinicalUseDefinition_Interaction";
import { ClinicalUseDefinition_InteractionSchemaInternal } from "./ClinicalUseDefinition_Interaction";
import type { ClinicalUseDefinition_UndesirableEffect } from "./ClinicalUseDefinition_UndesirableEffect";
import { ClinicalUseDefinition_UndesirableEffectSchemaInternal } from "./ClinicalUseDefinition_UndesirableEffect";
import type { ClinicalUseDefinition_Warning } from "./ClinicalUseDefinition_Warning";
import { ClinicalUseDefinition_WarningSchemaInternal } from "./ClinicalUseDefinition_Warning";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure. */
export interface ClinicalUseDefinition extends DomainResource {
	/** A categorisation of the issue, primarily for dividing warnings into subject heading areas such as "Pregnancy and Lactation", "Overdose", "Effects on Ability to Drive and Use Machines". */
	category?: Array<CodeableConcept>;
	/** Specifics for when this is a contraindication. */
	contraindication?: ClinicalUseDefinition_Contraindication;
	/** Business identifier for this issue. */
	identifier?: Array<Identifier>;
	/** Specifics for when this is an indication. */
	indication?: ClinicalUseDefinition_Indication;
	/** Specifics for when this is an interaction. */
	interaction?: ClinicalUseDefinition_Interaction;
	/** Logic used by the clinical use definition. */
	library?: Array<string | null>;
	/** Extensions for library */
	_library?: Array<Element | null>;
	/** The population group to which this applies. */
	population?: Array<Reference>;
	/** This is a ClinicalUseDefinition resource. */
	resourceType: "ClinicalUseDefinition";
	/** Whether this is a current issue or one that has been retired etc. */
	status?: CodeableConcept;
	/** The medication, product, substance, device, procedure etc. for which this is an indication. */
	subject?: Array<Reference>;
	/** indication | contraindication | interaction | undesirable-effect | warning. */
	type:
		| "contraindication"
		| "indication"
		| "interaction"
		| "undesirable-effect"
		| "warning";
	/** Extensions for type */
	_type?: Element;
	/** Describe the possible undesirable effects (negative outcomes) from the use of the medicinal product as treatment. */
	undesirableEffect?: ClinicalUseDefinition_UndesirableEffect;
	/** A critical piece of information about environmental, health or physical risks or hazards that serve as caution to the user. For example 'Do not operate heavy machinery', 'May cause drowsiness', or 'Get medical advice/attention if you feel unwell'. */
	warning?: ClinicalUseDefinition_Warning;
}

const getClinicalUseDefinition_ContraindicationSchema =
	(): z.ZodType<ClinicalUseDefinition_Contraindication> =>
		ClinicalUseDefinition_ContraindicationSchemaInternal as z.ZodType<ClinicalUseDefinition_Contraindication>;
const getClinicalUseDefinition_IndicationSchema =
	(): z.ZodType<ClinicalUseDefinition_Indication> =>
		ClinicalUseDefinition_IndicationSchemaInternal as z.ZodType<ClinicalUseDefinition_Indication>;
const getClinicalUseDefinition_InteractionSchema =
	(): z.ZodType<ClinicalUseDefinition_Interaction> =>
		ClinicalUseDefinition_InteractionSchemaInternal as z.ZodType<ClinicalUseDefinition_Interaction>;
const getClinicalUseDefinition_UndesirableEffectSchema =
	(): z.ZodType<ClinicalUseDefinition_UndesirableEffect> =>
		ClinicalUseDefinition_UndesirableEffectSchemaInternal as z.ZodType<ClinicalUseDefinition_UndesirableEffect>;
const getClinicalUseDefinition_WarningSchema =
	(): z.ZodType<ClinicalUseDefinition_Warning> =>
		ClinicalUseDefinition_WarningSchemaInternal as z.ZodType<ClinicalUseDefinition_Warning>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ClinicalUseDefinitionSchemaInternal =
	DomainResourceSchemaInternal.extend({
		category: z.lazy(getCodeableConceptSchema).array().optional(),
		contraindication: z
			.lazy(getClinicalUseDefinition_ContraindicationSchema)
			.optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		indication: z.lazy(getClinicalUseDefinition_IndicationSchema).optional(),
		interaction: z.lazy(getClinicalUseDefinition_InteractionSchema).optional(),
		library: fhirCanonical().nullable().array().optional(),
		_library: z.lazy(getElementSchema).nullable().array().optional(),
		population: z.lazy(getReferenceSchema).array().optional(),
		resourceType: z.literal("ClinicalUseDefinition"),
		status: z.lazy(getCodeableConceptSchema).optional(),
		subject: z.lazy(getReferenceSchema).array().optional(),
		type: z.enum([
			"contraindication",
			"indication",
			"interaction",
			"undesirable-effect",
			"warning",
		]),
		_type: z.lazy(getElementSchema).optional(),
		undesirableEffect: z
			.lazy(getClinicalUseDefinition_UndesirableEffectSchema)
			.optional(),
		warning: z.lazy(getClinicalUseDefinition_WarningSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.library,
				record._library,
				"library",
				"_library",
				ctx,
			);
			validateReferenceTarget(
				record.population,
				"population",
				["http://hl7.org/fhir/StructureDefinition/Group"],
				["Group"],
				ctx,
			);
			validateReferenceTarget(
				record.subject,
				"subject",
				[
					"http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
					"http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct",
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/DeviceDefinition",
					"http://hl7.org/fhir/StructureDefinition/Medication",
					"http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition",
					"http://hl7.org/fhir/StructureDefinition/NutritionProduct",
					"http://hl7.org/fhir/StructureDefinition/PlanDefinition",
					"http://hl7.org/fhir/StructureDefinition/Substance",
				],
				[
					"ActivityDefinition",
					"BiologicallyDerivedProduct",
					"Device",
					"DeviceDefinition",
					"Medication",
					"MedicinalProductDefinition",
					"NutritionProduct",
					"PlanDefinition",
					"Substance",
				],
				ctx,
			);
		});

export const ClinicalUseDefinitionSchema =
	ClinicalUseDefinitionSchemaInternal as z.ZodType<ClinicalUseDefinition>;
