// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Ratio } from "./Ratio";
import { RatioSchemaInternal } from "./Ratio";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A link between this substance and another, with details of the relationship. */
export interface SubstanceDefinition_Relationship extends BackboneElement {
	/** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other. */
	amountQuantity?: Quantity;
	/** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other. */
	amountRatio?: Ratio;
	/** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other. */
	amountString?: string;
	/** Extensions for amountString */
	_amountString?: Element;
	/** An operator for the amount, for example "average", "approximately", "less than". */
	comparator?: CodeableConcept;
	/** For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships. */
	isDefining?: boolean;
	/** Extensions for isDefining */
	_isDefining?: Element;
	/** For use when the numeric has an uncertain range. */
	ratioHighLimitAmount?: Ratio;
	/** Supporting literature. */
	source?: Array<Reference>;
	/** A pointer to another substance, as a resource or just a representational code. */
	substanceDefinitionCodeableConcept?: CodeableConcept;
	/** A pointer to another substance, as a resource or just a representational code. */
	substanceDefinitionReference?: Reference;
	/** For example "salt to parent", "active moiety", "starting material", "polymorph", "impurity of". */
	type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRatioSchema = (): z.ZodType<Ratio> =>
	RatioSchemaInternal as z.ZodType<Ratio>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const SubstanceDefinition_RelationshipSchemaInternal =
	BackboneElementSchemaInternal.extend({
		amountQuantity: z.lazy(getQuantitySchema).optional(),
		amountRatio: z.lazy(getRatioSchema).optional(),
		amountString: fhirString().optional(),
		_amountString: z.lazy(getElementSchema).optional(),
		comparator: z.lazy(getCodeableConceptSchema).optional(),
		isDefining: z.boolean().optional(),
		_isDefining: z.lazy(getElementSchema).optional(),
		ratioHighLimitAmount: z.lazy(getRatioSchema).optional(),
		source: z.lazy(getReferenceSchema).array().optional(),
		substanceDefinitionCodeableConcept: z
			.lazy(getCodeableConceptSchema)
			.optional(),
		substanceDefinitionReference: z.lazy(getReferenceSchema).optional(),
		type: z.lazy(getCodeableConceptSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const amount_x_Present = [
				"amountQuantity",
				"amountRatio",
				"amountString",
			].filter((field) => record[field] !== undefined);
			if (amount_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of amountQuantity, amountRatio, amountString may be present for amount[x]",
					path: [amount_x_Present[0]],
				});
			}
			const substanceDefinition_x_Present = [
				"substanceDefinitionCodeableConcept",
				"substanceDefinitionReference",
			].filter((field) => record[field] !== undefined);
			if (substanceDefinition_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of substanceDefinitionCodeableConcept, substanceDefinitionReference may be present for substanceDefinition[x]",
					path: [substanceDefinition_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.source,
				"source",
				["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
				["DocumentReference"],
				ctx,
			);
			validateReferenceTarget(
				record.substanceDefinitionReference,
				"substanceDefinitionReference",
				["http://hl7.org/fhir/StructureDefinition/SubstanceDefinition"],
				["SubstanceDefinition"],
				ctx,
			);
		});

export const SubstanceDefinition_RelationshipSchema =
	SubstanceDefinition_RelationshipSchemaInternal as z.ZodType<SubstanceDefinition_Relationship>;
