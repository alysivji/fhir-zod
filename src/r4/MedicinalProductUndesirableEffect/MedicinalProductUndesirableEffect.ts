// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductUndesirableEffect
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Population } from "../Population";
import { PopulationSchemaInternal } from "../Population";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Describe the undesirable effects of the medicinal product. */
export interface MedicinalProductUndesirableEffect extends DomainResource {
	/** Classification of the effect. */
	classification?: CodeableConcept;
	/** The frequency of occurrence of the effect. */
	frequencyOfOccurrence?: CodeableConcept;
	/** The population group to which this applies. */
	population?: Array<Population>;
	/** This is a MedicinalProductUndesirableEffect resource. */
	resourceType: "MedicinalProductUndesirableEffect";
	/** The medication for which this is an indication. */
	subject?: Array<Reference>;
	/** The symptom, condition or undesirable effect. */
	symptomConditionEffect?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getPopulationSchema = (): z.ZodType<Population> =>
	PopulationSchemaInternal as z.ZodType<Population>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicinalProductUndesirableEffectSchemaInternal =
	DomainResourceSchemaInternal.extend({
		classification: z.lazy(getCodeableConceptSchema).optional(),
		frequencyOfOccurrence: z.lazy(getCodeableConceptSchema).optional(),
		population: z.lazy(getPopulationSchema).array().optional(),
		resourceType: z.literal("MedicinalProductUndesirableEffect"),
		subject: z.lazy(getReferenceSchema).array().optional(),
		symptomConditionEffect: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.subject,
				"subject",
				[
					"http://hl7.org/fhir/StructureDefinition/Medication",
					"http://hl7.org/fhir/StructureDefinition/MedicinalProduct",
				],
				["Medication", "MedicinalProduct"],
				ctx,
			);
		});

export const MedicinalProductUndesirableEffectSchema =
	MedicinalProductUndesirableEffectSchemaInternal as z.ZodType<MedicinalProductUndesirableEffect>;
