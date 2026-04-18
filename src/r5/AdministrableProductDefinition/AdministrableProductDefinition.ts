// Profile: http://hl7.org/fhir/StructureDefinition/AdministrableProductDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { AdministrableProductDefinition_Property } from "./AdministrableProductDefinition_Property";
import { AdministrableProductDefinition_PropertySchemaInternal } from "./AdministrableProductDefinition_Property";
import type { AdministrableProductDefinition_RouteOfAdministration } from "./AdministrableProductDefinition_RouteOfAdministration";
import { AdministrableProductDefinition_RouteOfAdministrationSchemaInternal } from "./AdministrableProductDefinition_RouteOfAdministration";

/** A medicinal product in the final form which is suitable for administering to a patient (after any mixing of multiple components, dissolution etc. has been performed). */
export interface AdministrableProductDefinition extends DomainResource {
	/** The dose form of the final product after necessary reconstitution or processing. Contrasts to the manufactured dose form (see ManufacturedItemDefinition). If the manufactured form was 'powder for solution for injection', the administrable dose form could be 'solution for injection' (once mixed with another item having manufactured form 'solvent for solution for injection'). */
	administrableDoseForm?: CodeableConcept;
	/** A general description of the product, when in its final form, suitable for administration e.g. effervescent blue liquid, to be swallowed. Intended to be used when the other structured properties of this resource are insufficient or cannot be supported. It is not intended to duplicate information already carried elswehere. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** A device that is integral to the medicinal product, in effect being considered as an "ingredient" of the medicinal product. This is not intended for devices that are just co-packaged. */
	device?: Reference;
	/** References a product from which one or more of the constituent parts of that product can be prepared and used as described by this administrable product.  If this administrable product describes the administration of a crushed tablet, the 'formOf' would be the product representing a distribution containing tablets and possibly also a cream.  This is distinct from the 'producedFrom' which refers to the specific components of the product that are used in this preparation, rather than the product as a whole. */
	formOf?: Array<Reference>;
	/** An identifier for the administrable product. */
	identifier?: Array<Identifier>;
	/** The ingredients of this administrable medicinal product. This is only needed if the ingredients are not specified either using ManufacturedItemDefiniton (via AdministrableProductDefinition.producedFrom) to state which component items are used to make this, or using by incoming references from the Ingredient resource, to state in detail which substances exist within this. This element allows a basic coded ingredient to be used. */
	ingredient?: Array<CodeableConcept>;
	/** Indicates the specific manufactured items that are part of the 'formOf' product that are used in the preparation of this specific administrable form.  In some cases, an administrable form might use all of the items from the overall product (or there might only be one item), while in other cases, an administrable form might use only a subset of the items available in the overall product.  For example, an administrable form might involve combining a liquid and a powder available as part of an overall product, but not involve applying the also supplied cream. */
	producedFrom?: Array<Reference>;
	/** Characteristics e.g. a product's onset of action. */
	property?: Array<AdministrableProductDefinition_Property>;
	/** This is a AdministrableProductDefinition resource. */
	resourceType: "AdministrableProductDefinition";
	/** The path by which the product is taken into or makes contact with the body. In some regions this is referred to as the licenced or approved route. RouteOfAdministration cannot be used when the 'formOf' product already uses MedicinalProductDefinition.route (and vice versa). */
	routeOfAdministration: Array<AdministrableProductDefinition_RouteOfAdministration>;
	/** The status of this administrable product. Enables tracking the life-cycle of the content. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** The presentation type in which this item is given to a patient. e.g. for a spray - 'puff' (as in 'contains 100 mcg per puff'), or for a liquid - 'vial' (as in 'contains 5 ml per vial'). */
	unitOfPresentation?: CodeableConcept;
}

const getAdministrableProductDefinition_PropertySchema =
	(): z.ZodType<AdministrableProductDefinition_Property> =>
		AdministrableProductDefinition_PropertySchemaInternal as z.ZodType<AdministrableProductDefinition_Property>;
const getAdministrableProductDefinition_RouteOfAdministrationSchema =
	(): z.ZodType<AdministrableProductDefinition_RouteOfAdministration> =>
		AdministrableProductDefinition_RouteOfAdministrationSchemaInternal as z.ZodType<AdministrableProductDefinition_RouteOfAdministration>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const AdministrableProductDefinitionSchemaInternal =
	DomainResourceSchemaInternal.extend({
		administrableDoseForm: z.lazy(getCodeableConceptSchema).optional(),
		description: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		device: z.lazy(getReferenceSchema).optional(),
		formOf: z.lazy(getReferenceSchema).array().optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		ingredient: z.lazy(getCodeableConceptSchema).array().optional(),
		producedFrom: z.lazy(getReferenceSchema).array().optional(),
		property: z
			.lazy(getAdministrableProductDefinition_PropertySchema)
			.array()
			.optional(),
		resourceType: z.literal("AdministrableProductDefinition"),
		routeOfAdministration: z
			.lazy(getAdministrableProductDefinition_RouteOfAdministrationSchema)
			.array(),
		status: z.enum(["active", "draft", "retired", "unknown"]),
		_status: z.lazy(getElementSchema).optional(),
		unitOfPresentation: z.lazy(getCodeableConceptSchema).optional(),
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
				record.formOf,
				"formOf",
				["http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition"],
				["MedicinalProductDefinition"],
				ctx,
			);
			validateReferenceTarget(
				record.producedFrom,
				"producedFrom",
				["http://hl7.org/fhir/StructureDefinition/ManufacturedItemDefinition"],
				["ManufacturedItemDefinition"],
				ctx,
			);
		});

export const AdministrableProductDefinitionSchema =
	AdministrableProductDefinitionSchemaInternal as z.ZodType<AdministrableProductDefinition>;
