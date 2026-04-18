// Profile: http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { PackagedProductDefinition_Package_ContainedItem } from "./PackagedProductDefinition_Package_ContainedItem";
import { PackagedProductDefinition_Package_ContainedItemSchemaInternal } from "./PackagedProductDefinition_Package_ContainedItem";
import type { PackagedProductDefinition_Package_Property } from "./PackagedProductDefinition_Package_Property";
import { PackagedProductDefinition_Package_PropertySchemaInternal } from "./PackagedProductDefinition_Package_Property";
import type { PackagedProductDefinition_Package_ShelfLifeStorage } from "./PackagedProductDefinition_Package_ShelfLifeStorage";
import { PackagedProductDefinition_Package_ShelfLifeStorageSchemaInternal } from "./PackagedProductDefinition_Package_ShelfLifeStorage";

/** A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap (which is not a device or a medication manufactured item). */
export interface PackagedProductDefinition_Package extends BackboneElement {
	/** A possible alternate material for this part of the packaging, that is allowed to be used instead of the usual material (e.g. different types of plastic for a blister sleeve). */
	alternateMaterial?: Array<CodeableConcept>;
	/** The item(s) within the packaging. */
	containedItem?: Array<PackagedProductDefinition_Package_ContainedItem>;
	/** An identifier that is specific to this particular part of the packaging. Including possibly Data Carrier Identifier (a GS1 barcode). */
	identifier?: Array<Identifier>;
	/** Manufacturer of this package Item. When there are multiple it means these are all possible manufacturers. */
	manufacturer?: Array<Reference>;
	/** Material type of the package item. */
	material?: Array<CodeableConcept>;
	/** Allows containers (and parts of containers) parwithin containers, still a single packaged product.  See also PackagedProductDefinition.package.containedItem.item(PackagedProductDefinition). */
	package?: Array<unknown>;
	/** General characteristics of this item. */
	property?: Array<PackagedProductDefinition_Package_Property>;
	/** The quantity of this level of packaging in the package that contains it. If specified, the outermost level is always 1. */
	quantity?: number;
	/** Extensions for quantity */
	_quantity?: Element;
	/** Shelf Life and storage information. */
	shelfLifeStorage?: Array<PackagedProductDefinition_Package_ShelfLifeStorage>;
	/** The physical type of the container of the items. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPackagedProductDefinition_Package_ContainedItemSchema =
	(): z.ZodType<PackagedProductDefinition_Package_ContainedItem> =>
		PackagedProductDefinition_Package_ContainedItemSchemaInternal as z.ZodType<PackagedProductDefinition_Package_ContainedItem>;
const getPackagedProductDefinition_Package_PropertySchema =
	(): z.ZodType<PackagedProductDefinition_Package_Property> =>
		PackagedProductDefinition_Package_PropertySchemaInternal as z.ZodType<PackagedProductDefinition_Package_Property>;
const getPackagedProductDefinition_Package_ShelfLifeStorageSchema =
	(): z.ZodType<PackagedProductDefinition_Package_ShelfLifeStorage> =>
		PackagedProductDefinition_Package_ShelfLifeStorageSchemaInternal as z.ZodType<PackagedProductDefinition_Package_ShelfLifeStorage>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const PackagedProductDefinition_PackageSchemaInternal =
	BackboneElementSchemaInternal.extend({
		alternateMaterial: z.lazy(getCodeableConceptSchema).array().optional(),
		containedItem: z
			.lazy(getPackagedProductDefinition_Package_ContainedItemSchema)
			.array()
			.optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		manufacturer: z.lazy(getReferenceSchema).array().optional(),
		material: z.lazy(getCodeableConceptSchema).array().optional(),
		package: z.unknown().array().optional(),
		property: z
			.lazy(getPackagedProductDefinition_Package_PropertySchema)
			.array()
			.optional(),
		quantity: z.number().int().optional(),
		_quantity: z.lazy(getElementSchema).optional(),
		shelfLifeStorage: z
			.lazy(getPackagedProductDefinition_Package_ShelfLifeStorageSchema)
			.array()
			.optional(),
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

export const PackagedProductDefinition_PackageSchema =
	PackagedProductDefinition_PackageSchemaInternal as z.ZodType<PackagedProductDefinition_Package>;
