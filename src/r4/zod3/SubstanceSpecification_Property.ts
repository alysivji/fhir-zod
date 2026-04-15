// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceSpecification
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

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
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** General specifications for this substance, including how it is related to other substances. */
export interface SubstanceSpecification_Property extends BackboneElement {
	/** Quantitative value for this property. */
	amountQuantity?: Quantity;
	/** Quantitative value for this property. */
	amountString?: string;
	/** Extensions for amountString */
	_amountString?: Element;
	/** A category for this property, e.g. Physical, Chemical, Enzymatic. */
	category?: CodeableConcept;
	/** Property type e.g. viscosity, pH, isoelectric point. */
	code?: CodeableConcept;
	/** A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol). */
	definingSubstanceCodeableConcept?: CodeableConcept;
	/** A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol). */
	definingSubstanceReference?: Reference;
	/** Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1). */
	parameters?: string;
	/** Extensions for parameters */
	_parameters?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const SubstanceSpecification_PropertySchemaInternal =
	BackboneElementSchemaInternal.extend({
		amountQuantity: z.lazy(getQuantitySchema).optional(),
		amountString: fhirString().optional(),
		_amountString: z.lazy(getElementSchema).optional(),
		category: z.lazy(getCodeableConceptSchema).optional(),
		code: z.lazy(getCodeableConceptSchema).optional(),
		definingSubstanceCodeableConcept: z
			.lazy(getCodeableConceptSchema)
			.optional(),
		definingSubstanceReference: z.lazy(getReferenceSchema).optional(),
		parameters: fhirString().optional(),
		_parameters: z.lazy(getElementSchema).optional(),
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
			const definingSubstance_x_Present = [
				"definingSubstanceCodeableConcept",
				"definingSubstanceReference",
			].filter((field) => record[field] !== undefined);
			if (definingSubstance_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of definingSubstanceCodeableConcept, definingSubstanceReference may be present for definingSubstance[x]",
					path: [definingSubstance_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.definingSubstanceReference,
				"definingSubstanceReference",
				[
					"http://hl7.org/fhir/StructureDefinition/Substance",
					"http://hl7.org/fhir/StructureDefinition/SubstanceSpecification",
				],
				["Substance", "SubstanceSpecification"],
				ctx,
			);
		});

export const SubstanceSpecification_PropertySchema =
	SubstanceSpecification_PropertySchemaInternal as z.ZodType<SubstanceSpecification_Property>;
