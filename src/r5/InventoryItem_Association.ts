// Profile: http://hl7.org/fhir/StructureDefinition/InventoryItem
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Ratio } from "./Ratio";
import { RatioSchemaInternal } from "./Ratio";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Association with other items or products. */
export interface InventoryItem_Association extends BackboneElement {
	/** This attribute defined the type of association when establishing associations or relations between items, e.g. 'packaged within' or 'used with' or 'to be mixed with. */
	associationType: CodeableConcept;
	/** The quantity of the related product in this product - Numerator is the quantity of the related product. Denominator is the quantity of the present product. For example a value of 20 means that this product contains 20 units of the related product; a value of 1:20 means the inverse - that the contained product contains 20 units of the present product. */
	quantity: Ratio;
	/** The related item or product. */
	relatedItem: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getRatioSchema = (): z.ZodType<Ratio> =>
	RatioSchemaInternal as z.ZodType<Ratio>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const InventoryItem_AssociationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		associationType: z.lazy(getCodeableConceptSchema),
		quantity: z.lazy(getRatioSchema),
		relatedItem: z.lazy(getReferenceSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.relatedItem,
				"relatedItem",
				[
					"http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct",
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/DeviceDefinition",
					"http://hl7.org/fhir/StructureDefinition/InventoryItem",
					"http://hl7.org/fhir/StructureDefinition/Medication",
					"http://hl7.org/fhir/StructureDefinition/MedicationKnowledge",
					"http://hl7.org/fhir/StructureDefinition/NutritionProduct",
				],
				[
					"BiologicallyDerivedProduct",
					"Device",
					"DeviceDefinition",
					"InventoryItem",
					"Medication",
					"MedicationKnowledge",
					"NutritionProduct",
				],
				ctx,
			);
		});

export const InventoryItem_AssociationSchema =
	InventoryItem_AssociationSchemaInternal as z.ZodType<InventoryItem_Association>;
