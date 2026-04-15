// Profile: http://hl7.org/fhir/StructureDefinition/SupplyDelivery
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

/** The item that is being delivered or has been supplied. */
export interface SupplyDelivery_SuppliedItem extends BackboneElement {
	/** Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list. */
	itemCodeableConcept?: CodeableConcept;
	/** Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list. */
	itemReference?: Reference;
	/** The amount of supply that has been dispensed. Includes unit of measure. */
	quantity?: Quantity;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const SupplyDelivery_SuppliedItemSchemaInternal =
	BackboneElementSchemaInternal.extend({
		itemCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		itemReference: z.lazy(getReferenceSchema).optional(),
		quantity: z.lazy(getQuantitySchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const item_x_Present = ["itemCodeableConcept", "itemReference"].filter(
				(field) => record[field] !== undefined,
			);
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
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Medication",
					"http://hl7.org/fhir/StructureDefinition/Substance",
				],
				["Device", "Medication", "Substance"],
				ctx,
			);
		});

export const SupplyDelivery_SuppliedItemSchema =
	SupplyDelivery_SuppliedItemSchemaInternal as z.ZodType<SupplyDelivery_SuppliedItem>;
