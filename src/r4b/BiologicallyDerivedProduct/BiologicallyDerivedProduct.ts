// Profile: http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

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
import type { BiologicallyDerivedProduct_Collection } from "./BiologicallyDerivedProduct_Collection";
import { BiologicallyDerivedProduct_CollectionSchemaInternal } from "./BiologicallyDerivedProduct_Collection";
import type { BiologicallyDerivedProduct_Manipulation } from "./BiologicallyDerivedProduct_Manipulation";
import { BiologicallyDerivedProduct_ManipulationSchemaInternal } from "./BiologicallyDerivedProduct_Manipulation";
import type { BiologicallyDerivedProduct_Processing } from "./BiologicallyDerivedProduct_Processing";
import { BiologicallyDerivedProduct_ProcessingSchemaInternal } from "./BiologicallyDerivedProduct_Processing";
import type { BiologicallyDerivedProduct_Storage } from "./BiologicallyDerivedProduct_Storage";
import { BiologicallyDerivedProduct_StorageSchemaInternal } from "./BiologicallyDerivedProduct_Storage";

/**
 * A material substance originating from a biological entity intended to be transplanted or infused
 * into another (possibly the same) biological entity.
 */
export interface BiologicallyDerivedProduct extends DomainResource {
	/** How this product was collected. */
	collection?: BiologicallyDerivedProduct_Collection;
	/** This records identifiers associated with this biologically derived product instance that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation). */
	identifier?: Array<Identifier>;
	/** Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion. */
	manipulation?: BiologicallyDerivedProduct_Manipulation;
	/** Parent product (if any). */
	parent?: Array<Reference>;
	/** Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells. */
	processing?: Array<BiologicallyDerivedProduct_Processing>;
	/** Broad category of this product. */
	productCategory?: "biologicalAgent" | "cells" | "fluid" | "organ" | "tissue";
	/** Extensions for productCategory */
	_productCategory?: Element;
	/** A code that identifies the kind of this biologically derived product (SNOMED Ctcode). */
	productCode?: CodeableConcept;
	/** Number of discrete units within this product. */
	quantity?: number;
	/** Extensions for quantity */
	_quantity?: Element;
	/** Procedure request to obtain this biologically derived product. */
	request?: Array<Reference>;
	/** This is a BiologicallyDerivedProduct resource. */
	resourceType: "BiologicallyDerivedProduct";
	/** Whether the product is currently available. */
	status?: "available" | "unavailable";
	/** Extensions for status */
	_status?: Element;
	/** Product storage. */
	storage?: Array<BiologicallyDerivedProduct_Storage>;
}

const getBiologicallyDerivedProduct_CollectionSchema =
	(): z.ZodType<BiologicallyDerivedProduct_Collection> =>
		BiologicallyDerivedProduct_CollectionSchemaInternal as z.ZodType<BiologicallyDerivedProduct_Collection>;
const getBiologicallyDerivedProduct_ManipulationSchema =
	(): z.ZodType<BiologicallyDerivedProduct_Manipulation> =>
		BiologicallyDerivedProduct_ManipulationSchemaInternal as z.ZodType<BiologicallyDerivedProduct_Manipulation>;
const getBiologicallyDerivedProduct_ProcessingSchema =
	(): z.ZodType<BiologicallyDerivedProduct_Processing> =>
		BiologicallyDerivedProduct_ProcessingSchemaInternal as z.ZodType<BiologicallyDerivedProduct_Processing>;
const getBiologicallyDerivedProduct_StorageSchema =
	(): z.ZodType<BiologicallyDerivedProduct_Storage> =>
		BiologicallyDerivedProduct_StorageSchemaInternal as z.ZodType<BiologicallyDerivedProduct_Storage>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const BiologicallyDerivedProductSchemaInternal =
	DomainResourceSchemaInternal.extend({
		collection: z
			.lazy(getBiologicallyDerivedProduct_CollectionSchema)
			.optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		manipulation: z
			.lazy(getBiologicallyDerivedProduct_ManipulationSchema)
			.optional(),
		parent: z.lazy(getReferenceSchema).array().optional(),
		processing: z
			.lazy(getBiologicallyDerivedProduct_ProcessingSchema)
			.array()
			.optional(),
		productCategory: z
			.enum(["biologicalAgent", "cells", "fluid", "organ", "tissue"])
			.optional(),
		_productCategory: z.lazy(getElementSchema).optional(),
		productCode: z.lazy(getCodeableConceptSchema).optional(),
		quantity: z.number().int().optional(),
		_quantity: z.lazy(getElementSchema).optional(),
		request: z.lazy(getReferenceSchema).array().optional(),
		resourceType: z.literal("BiologicallyDerivedProduct"),
		status: z.enum(["available", "unavailable"]).optional(),
		_status: z.lazy(getElementSchema).optional(),
		storage: z
			.lazy(getBiologicallyDerivedProduct_StorageSchema)
			.array()
			.optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.parent,
				"parent",
				["http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct"],
				["BiologicallyDerivedProduct"],
				ctx,
			);
			validateReferenceTarget(
				record.request,
				"request",
				["http://hl7.org/fhir/StructureDefinition/ServiceRequest"],
				["ServiceRequest"],
				ctx,
			);
		});

export const BiologicallyDerivedProductSchema =
	BiologicallyDerivedProductSchemaInternal as z.ZodType<BiologicallyDerivedProduct>;
