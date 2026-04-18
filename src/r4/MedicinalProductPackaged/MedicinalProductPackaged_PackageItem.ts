// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductPackaged
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { ProdCharacteristic } from "../ProdCharacteristic";
import { ProdCharacteristicSchemaInternal } from "../ProdCharacteristic";
import type { ProductShelfLife } from "../ProductShelfLife";
import { ProductShelfLifeSchemaInternal } from "../ProductShelfLife";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** A packaging item, as a contained for medicine, possibly with other packaging items within. */
export interface MedicinalProductPackaged_PackageItem extends BackboneElement {
	/** A possible alternate material for the packaging. */
	alternateMaterial?: Array<CodeableConcept>;
	/** A device accompanying a medicinal product. */
	device?: Array<Reference>;
	/** Including possibly Data Carrier Identifier. */
	identifier?: Array<Identifier>;
	/** The manufactured item as contained in the packaged medicinal product. */
	manufacturedItem?: Array<Reference>;
	/** Manufacturer of this Package Item. */
	manufacturer?: Array<Reference>;
	/** Material type of the package item. */
	material?: Array<CodeableConcept>;
	/** Other codeable characteristics. */
	otherCharacteristics?: Array<CodeableConcept>;
	/** Allows containers within containers. */
	packageItem?: Array<unknown>;
	/** Dimensions, color etc. */
	physicalCharacteristics?: ProdCharacteristic;
	/** The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1. */
	quantity: Quantity;
	/** Shelf Life and storage information. */
	shelfLifeStorage?: Array<ProductShelfLife>;
	/** The physical type of the container of the medicine. */
	type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getProdCharacteristicSchema = (): z.ZodType<ProdCharacteristic> =>
	ProdCharacteristicSchemaInternal as z.ZodType<ProdCharacteristic>;
const getProductShelfLifeSchema = (): z.ZodType<ProductShelfLife> =>
	ProductShelfLifeSchemaInternal as z.ZodType<ProductShelfLife>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicinalProductPackaged_PackageItemSchemaInternal =
	BackboneElementSchemaInternal.extend({
		alternateMaterial: z.lazy(getCodeableConceptSchema).array().optional(),
		device: z.lazy(getReferenceSchema).array().optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		manufacturedItem: z.lazy(getReferenceSchema).array().optional(),
		manufacturer: z.lazy(getReferenceSchema).array().optional(),
		material: z.lazy(getCodeableConceptSchema).array().optional(),
		otherCharacteristics: z.lazy(getCodeableConceptSchema).array().optional(),
		packageItem: z.unknown().array().optional(),
		physicalCharacteristics: z.lazy(getProdCharacteristicSchema).optional(),
		quantity: z.lazy(getQuantitySchema),
		shelfLifeStorage: z.lazy(getProductShelfLifeSchema).array().optional(),
		type: z.lazy(getCodeableConceptSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.device,
				"device",
				["http://hl7.org/fhir/StructureDefinition/DeviceDefinition"],
				["DeviceDefinition"],
				ctx,
			);
			validateReferenceTarget(
				record.manufacturedItem,
				"manufacturedItem",
				[
					"http://hl7.org/fhir/StructureDefinition/MedicinalProductManufactured",
				],
				["MedicinalProductManufactured"],
				ctx,
			);
			validateReferenceTarget(
				record.manufacturer,
				"manufacturer",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
		});

export const MedicinalProductPackaged_PackageItemSchema =
	MedicinalProductPackaged_PackageItemSchemaInternal as z.ZodType<MedicinalProductPackaged_PackageItem>;
