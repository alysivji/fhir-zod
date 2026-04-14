// Profile: http://hl7.org/fhir/StructureDefinition/ManufacturedItemDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { ManufacturedItemDefinition_Component } from "./ManufacturedItemDefinition_Component";
import { ManufacturedItemDefinition_ComponentSchemaInternal } from "./ManufacturedItemDefinition_Component";
import type { ManufacturedItemDefinition_Property } from "./ManufacturedItemDefinition_Property";
import { ManufacturedItemDefinition_PropertySchemaInternal } from "./ManufacturedItemDefinition_Property";
import type { MarketingStatus } from "./MarketingStatus";
import { MarketingStatusSchemaInternal } from "./MarketingStatus";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The definition and characteristics of a medicinal manufactured item, such as a tablet or capsule, as contained in a packaged medicinal product. */
export interface ManufacturedItemDefinition extends DomainResource {
	/** Physical parts of the manufactured item, that it is intrisically made from. This is distinct from the ingredients that are part of its chemical makeup. */
	component?: Array<ManufacturedItemDefinition_Component>;
	/** Unique identifier. */
	identifier?: Array<Identifier>;
	/** The ingredients of this manufactured item. This is only needed if the ingredients are not specified by incoming references from the Ingredient resource. */
	ingredient?: Array<CodeableConcept>;
	/** Dose form as manufactured and before any transformation into the pharmaceutical product. */
	manufacturedDoseForm: CodeableConcept;
	/** Manufacturer of the item, one of several possible. */
	manufacturer?: Array<Reference>;
	/** Allows specifying that an item is on the market for sale, or that it is not available, and the dates and locations associated. */
	marketingStatus?: Array<MarketingStatus>;
	/** A descriptive name applied to this item. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** General characteristics of this item. */
	property?: Array<ManufacturedItemDefinition_Property>;
	/** This is a ManufacturedItemDefinition resource. */
	resourceType: "ManufacturedItemDefinition";
	/** The status of this item. Enables tracking the life-cycle of the content. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** The “real-world” units in which the quantity of the manufactured item is described. */
	unitOfPresentation?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getManufacturedItemDefinition_ComponentSchema =
	(): z.ZodType<ManufacturedItemDefinition_Component> =>
		ManufacturedItemDefinition_ComponentSchemaInternal as z.ZodType<ManufacturedItemDefinition_Component>;
const getManufacturedItemDefinition_PropertySchema =
	(): z.ZodType<ManufacturedItemDefinition_Property> =>
		ManufacturedItemDefinition_PropertySchemaInternal as z.ZodType<ManufacturedItemDefinition_Property>;
const getMarketingStatusSchema = (): z.ZodType<MarketingStatus> =>
	MarketingStatusSchemaInternal as z.ZodType<MarketingStatus>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ManufacturedItemDefinitionSchemaInternal =
	DomainResourceSchemaInternal.extend({
		component: z
			.lazy(getManufacturedItemDefinition_ComponentSchema)
			.array()
			.optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		ingredient: z.lazy(getCodeableConceptSchema).array().optional(),
		manufacturedDoseForm: z.lazy(getCodeableConceptSchema),
		manufacturer: z.lazy(getReferenceSchema).array().optional(),
		marketingStatus: z.lazy(getMarketingStatusSchema).array().optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		property: z
			.lazy(getManufacturedItemDefinition_PropertySchema)
			.array()
			.optional(),
		resourceType: z.literal("ManufacturedItemDefinition"),
		status: z.enum(["active", "draft", "retired", "unknown"]),
		_status: z.lazy(getElementSchema).optional(),
		unitOfPresentation: z.lazy(getCodeableConceptSchema).optional(),
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

export const ManufacturedItemDefinitionSchema =
	ManufacturedItemDefinitionSchemaInternal as z.ZodType<ManufacturedItemDefinition>;
