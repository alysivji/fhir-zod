// Profile: http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { PackagedProductDefinition_Packaging_ContainedItem } from "./PackagedProductDefinition_Packaging_ContainedItem";
import { PackagedProductDefinition_Packaging_ContainedItemSchemaInternal } from "./PackagedProductDefinition_Packaging_ContainedItem";
import type { PackagedProductDefinition_Packaging_Property } from "./PackagedProductDefinition_Packaging_Property";
import { PackagedProductDefinition_Packaging_PropertySchemaInternal } from "./PackagedProductDefinition_Packaging_Property";
import type { ProductShelfLife } from "./ProductShelfLife";
import { ProductShelfLifeSchemaInternal } from "./ProductShelfLife";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap (which is not a device or a medication manufactured item). */
export interface PackagedProductDefinition_Packaging extends BackboneElement {
	/** A possible alternate material for this part of the packaging, that is allowed to be used instead of the usual material (e.g. different types of plastic for a blister sleeve). */
	alternateMaterial?: Array<CodeableConcept>;
	/** Is this a part of the packaging (e.g. a cap or bottle stopper), rather than the packaging itself (e.g. a bottle or vial). The latter type are designed be a container, but the former are not. */
	componentPart?: boolean;
	/** Extensions for componentPart */
	_componentPart?: Element;
	/** The item(s) within the packaging. */
	containedItem?: Array<PackagedProductDefinition_Packaging_ContainedItem>;
	/** A business identifier that is specific to this particular part of the packaging, often assigned by the manufacturer. Including possibly Data Carrier Identifier (a GS1 barcode). */
	identifier?: Array<Identifier>;
	/** Manufacturer of this packaging item. When there are multiple values each one is a potential manufacturer of this packaging item. */
	manufacturer?: Array<Reference>;
	/** Material type of the package item. */
	material?: Array<CodeableConcept>;
	/** Allows containers (and parts of containers) within containers, still as a part of a single packaged product. See also PackagedProductDefinition.packaging.containedItem.item(PackagedProductDefinition). */
	packaging?: Array<unknown>;
	/** General characteristics of this item. */
	property?: Array<PackagedProductDefinition_Packaging_Property>;
	/** The quantity of packaging items contained at this layer of the package. This does not relate to the number of contained items but relates solely to the number of packaging items. When looking at the outermost layer it is always 1. If there are two boxes within, at the next layer it would be 2. */
	quantity?: number;
	/** Extensions for quantity */
	_quantity?: Element;
	/** Shelf Life and storage information. */
	shelfLifeStorage?: Array<ProductShelfLife>;
	/** The physical type of the container of the items. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPackagedProductDefinition_Packaging_ContainedItemSchema =
	(): z.ZodType<PackagedProductDefinition_Packaging_ContainedItem> =>
		PackagedProductDefinition_Packaging_ContainedItemSchemaInternal as z.ZodType<PackagedProductDefinition_Packaging_ContainedItem>;
const getPackagedProductDefinition_Packaging_PropertySchema =
	(): z.ZodType<PackagedProductDefinition_Packaging_Property> =>
		PackagedProductDefinition_Packaging_PropertySchemaInternal as z.ZodType<PackagedProductDefinition_Packaging_Property>;
const getProductShelfLifeSchema = (): z.ZodType<ProductShelfLife> =>
	ProductShelfLifeSchemaInternal as z.ZodType<ProductShelfLife>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const PackagedProductDefinition_PackagingSchemaInternal =
	BackboneElementSchemaInternal.extend({
		alternateMaterial: z.lazy(getCodeableConceptSchema).array().optional(),
		componentPart: z.boolean().optional(),
		_componentPart: z.lazy(getElementSchema).optional(),
		containedItem: z
			.lazy(getPackagedProductDefinition_Packaging_ContainedItemSchema)
			.array()
			.optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		manufacturer: z.lazy(getReferenceSchema).array().optional(),
		material: z.lazy(getCodeableConceptSchema).array().optional(),
		packaging: z.unknown().array().optional(),
		property: z
			.lazy(getPackagedProductDefinition_Packaging_PropertySchema)
			.array()
			.optional(),
		quantity: z.number().int().optional(),
		_quantity: z.lazy(getElementSchema).optional(),
		shelfLifeStorage: z.lazy(getProductShelfLifeSchema).array().optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.manufacturer,
				"manufacturer",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
		});

export const PackagedProductDefinition_PackagingSchema =
	PackagedProductDefinition_PackagingSchemaInternal as z.ZodType<PackagedProductDefinition_Packaging>;
