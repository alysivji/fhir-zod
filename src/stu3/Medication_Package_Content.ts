// Profile: http://hl7.org/fhir/StructureDefinition/Medication
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A set of components that go to make up the described item. */
export interface Medication_Package_Content extends BackboneElement {
	/** The amount of the product that is in the package. */
	amount?: Quantity;
	/** Identifies one of the items in the package. */
	itemCodeableConcept?: CodeableConcept;
	/** Identifies one of the items in the package. */
	itemReference?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Medication_Package_ContentSchemaInternal =
	BackboneElementSchemaInternal.extend({
		amount: z.lazy(getQuantitySchema).optional(),
		itemCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		itemReference: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const item_x_Present = ["itemCodeableConcept", "itemReference"].filter(
				(field) => record[field] !== undefined,
			);
			if (item_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of itemCodeableConcept, itemReference must be present for item[x]",
					path: ["itemCodeableConcept"],
				});
			}
			if (item_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of itemCodeableConcept, itemReference may be present for item[x]",
					path: [item_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.itemReference,
				"itemReference",
				["http://hl7.org/fhir/StructureDefinition/Medication"],
				["Medication"],
				ctx,
			);
		});

export const Medication_Package_ContentSchema =
	Medication_Package_ContentSchemaInternal as z.ZodType<Medication_Package_Content>;
