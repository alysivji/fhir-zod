// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** Moiety, for structural modifications. */
export interface SubstanceDefinition_Moiety extends BackboneElement {
	/** Quantitative value for this moiety. */
	amountQuantity?: Quantity;
	/** Quantitative value for this moiety. */
	amountString?: string;
	/** Extensions for amountString */
	_amountString?: Element;
	/** Identifier by which this moiety substance is known. */
	identifier?: Identifier;
	/** The measurement type of the quantitative value. In capturing the actual relative amounts of substances or molecular fragments it may be necessary to indicate whether the amount refers to, for example, a mole ratio or weight ratio. */
	measurementType?: CodeableConcept;
	/** Molecular formula for this moiety of this substance, typically using the Hill system. */
	molecularFormula?: string;
	/** Extensions for molecularFormula */
	_molecularFormula?: Element;
	/** Textual name for this moiety substance. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** Optical activity type. */
	opticalActivity?: CodeableConcept;
	/** Role that the moiety is playing. */
	role?: CodeableConcept;
	/** Stereochemistry type. */
	stereochemistry?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const SubstanceDefinition_MoietySchemaInternal =
	BackboneElementSchemaInternal.extend({
		amountQuantity: z.lazy(getQuantitySchema).optional(),
		amountString: fhirString().optional(),
		_amountString: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).optional(),
		measurementType: z.lazy(getCodeableConceptSchema).optional(),
		molecularFormula: fhirString().optional(),
		_molecularFormula: z.lazy(getElementSchema).optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		opticalActivity: z.lazy(getCodeableConceptSchema).optional(),
		role: z.lazy(getCodeableConceptSchema).optional(),
		stereochemistry: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const amount_x_Present = ["amountQuantity", "amountString"].filter(
				(field) => record[field] !== undefined,
			);
			if (amount_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of amountQuantity, amountString may be present for amount[x]",
					path: [amount_x_Present[0]],
				});
			}
		});

export const SubstanceDefinition_MoietySchema =
	SubstanceDefinition_MoietySchemaInternal as z.ZodType<SubstanceDefinition_Moiety>;
