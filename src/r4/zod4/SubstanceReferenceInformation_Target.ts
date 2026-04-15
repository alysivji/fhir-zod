// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceReferenceInformation
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
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
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Todo. */
export interface SubstanceReferenceInformation_Target extends BackboneElement {
	/** Todo. */
	amountQuantity?: Quantity;
	/** Todo. */
	amountRange?: Range;
	/** Todo. */
	amountString?: string;
	/** Extensions for amountString */
	_amountString?: Element;
	/** Todo. */
	amountType?: CodeableConcept;
	/** Todo. */
	interaction?: CodeableConcept;
	/** Todo. */
	organism?: CodeableConcept;
	/** Todo. */
	organismType?: CodeableConcept;
	/** Todo. */
	source?: Array<Reference>;
	/** Todo. */
	target?: Identifier;
	/** Todo. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const SubstanceReferenceInformation_TargetSchemaInternal =
	BackboneElementSchemaInternal.extend({
		amountQuantity: z.lazy(getQuantitySchema).optional(),
		amountRange: z.lazy(getRangeSchema).optional(),
		amountString: fhirString().optional(),
		_amountString: z.lazy(getElementSchema).optional(),
		amountType: z.lazy(getCodeableConceptSchema).optional(),
		interaction: z.lazy(getCodeableConceptSchema).optional(),
		organism: z.lazy(getCodeableConceptSchema).optional(),
		organismType: z.lazy(getCodeableConceptSchema).optional(),
		source: z.lazy(getReferenceSchema).array().optional(),
		target: z.lazy(getIdentifierSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const amount_x_Present = [
				"amountQuantity",
				"amountRange",
				"amountString",
			].filter((field) => record[field] !== undefined);
			if (amount_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of amountQuantity, amountRange, amountString may be present for amount[x]",
					path: [amount_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.source,
				"source",
				["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
				["DocumentReference"],
				ctx,
			);
		});

export const SubstanceReferenceInformation_TargetSchema =
	SubstanceReferenceInformation_TargetSchemaInternal as z.ZodType<SubstanceReferenceInformation_Target>;
