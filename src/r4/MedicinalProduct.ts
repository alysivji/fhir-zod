// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProduct
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T20:28:54.953Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { MarketingStatus } from "./MarketingStatus";
import { MarketingStatusSchemaInternal } from "./MarketingStatus";
import type { MedicinalProduct_ManufacturingBusinessOperation } from "./MedicinalProduct_ManufacturingBusinessOperation";
import { MedicinalProduct_ManufacturingBusinessOperationSchemaInternal } from "./MedicinalProduct_ManufacturingBusinessOperation";
import type { MedicinalProduct_Name } from "./MedicinalProduct_Name";
import { MedicinalProduct_NameSchemaInternal } from "./MedicinalProduct_Name";
import type { MedicinalProduct_SpecialDesignation } from "./MedicinalProduct_SpecialDesignation";
import { MedicinalProduct_SpecialDesignationSchemaInternal } from "./MedicinalProduct_SpecialDesignation";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
export interface MedicinalProduct extends DomainResource {
	/** Whether the Medicinal Product is subject to additional monitoring for regulatory reasons. */
	additionalMonitoringIndicator?: CodeableConcept;
	/** Supporting documentation, typically for regulatory submission. */
	attachedDocument?: Array<Reference>;
	/** Clinical trials or studies that this product is involved in. */
	clinicalTrial?: Array<Reference>;
	/** The dose form for a single part product, or combined form of a multiple part product. */
	combinedPharmaceuticalDoseForm?: CodeableConcept;
	/** A product specific contact, person (in a role), or an organization. */
	contact?: Array<Reference>;
	/** Reference to another product, e.g. for linking authorised to investigational product. */
	crossReference?: Array<Identifier>;
	/** If this medicine applies to human or veterinary uses. */
	domain?: Coding;
	/** Business identifier for this product. Could be an MPID. */
	identifier?: Array<Identifier>;
	/** The legal status of supply of the medicinal product as classified by the regulator. */
	legalStatusOfSupply?: CodeableConcept;
	/** An operation applied to the product, for manufacturing or adminsitrative purpose. */
	manufacturingBusinessOperation?: Array<MedicinalProduct_ManufacturingBusinessOperation>;
	/** Marketing status of the medicinal product, in contrast to marketing authorizaton. */
	marketingStatus?: Array<MarketingStatus>;
	/** A master file for to the medicinal product (e.g. Pharmacovigilance System Master File). */
	masterFile?: Array<Reference>;
	/** The product's name, including full name and possibly coded parts. */
	name: Array<MedicinalProduct_Name>;
	/** Package representation for the product. */
	packagedMedicinalProduct?: Array<Reference>;
	/** If authorised for use in children. */
	paediatricUseIndicator?: CodeableConcept;
	/** Pharmaceutical aspects of product. */
	pharmaceuticalProduct?: Array<Reference>;
	/** Allows the product to be classified by various systems. */
	productClassification?: Array<CodeableConcept>;
	/** This is a MedicinalProduct resource. */
	resourceType: "MedicinalProduct";
	/** Indicates if the medicinal product has an orphan designation for the treatment of a rare disease. */
	specialDesignation?: Array<MedicinalProduct_SpecialDesignation>;
	/** Whether the Medicinal Product is subject to special measures for regulatory reasons. */
	specialMeasures?: Array<string>;
	/** Extensions for specialMeasures */
	_specialMeasures?: Array<Element>;
	/** Regulatory type, e.g. Investigational or Authorized. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMarketingStatusSchema = (): z.ZodType<MarketingStatus> =>
	MarketingStatusSchemaInternal as z.ZodType<MarketingStatus>;
const getMedicinalProduct_ManufacturingBusinessOperationSchema =
	(): z.ZodType<MedicinalProduct_ManufacturingBusinessOperation> =>
		MedicinalProduct_ManufacturingBusinessOperationSchemaInternal as z.ZodType<MedicinalProduct_ManufacturingBusinessOperation>;
const getMedicinalProduct_NameSchema = (): z.ZodType<MedicinalProduct_Name> =>
	MedicinalProduct_NameSchemaInternal as z.ZodType<MedicinalProduct_Name>;
const getMedicinalProduct_SpecialDesignationSchema =
	(): z.ZodType<MedicinalProduct_SpecialDesignation> =>
		MedicinalProduct_SpecialDesignationSchemaInternal as z.ZodType<MedicinalProduct_SpecialDesignation>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicinalProductSchemaInternal =
	DomainResourceSchemaInternal.extend({
		additionalMonitoringIndicator: z.lazy(getCodeableConceptSchema).optional(),
		attachedDocument: z.lazy(getReferenceSchema).array().optional(),
		clinicalTrial: z.lazy(getReferenceSchema).array().optional(),
		combinedPharmaceuticalDoseForm: z.lazy(getCodeableConceptSchema).optional(),
		contact: z.lazy(getReferenceSchema).array().optional(),
		crossReference: z.lazy(getIdentifierSchema).array().optional(),
		domain: z.lazy(getCodingSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		legalStatusOfSupply: z.lazy(getCodeableConceptSchema).optional(),
		manufacturingBusinessOperation: z
			.lazy(getMedicinalProduct_ManufacturingBusinessOperationSchema)
			.array()
			.optional(),
		marketingStatus: z.lazy(getMarketingStatusSchema).array().optional(),
		masterFile: z.lazy(getReferenceSchema).array().optional(),
		name: z.lazy(getMedicinalProduct_NameSchema).array(),
		packagedMedicinalProduct: z.lazy(getReferenceSchema).array().optional(),
		paediatricUseIndicator: z.lazy(getCodeableConceptSchema).optional(),
		pharmaceuticalProduct: z.lazy(getReferenceSchema).array().optional(),
		productClassification: z.lazy(getCodeableConceptSchema).array().optional(),
		resourceType: z.literal("MedicinalProduct"),
		specialDesignation: z
			.lazy(getMedicinalProduct_SpecialDesignationSchema)
			.array()
			.optional(),
		specialMeasures: fhirString().array().optional(),
		_specialMeasures: z.lazy(getElementSchema).array().optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.attachedDocument,
				"attachedDocument",
				["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
				["DocumentReference"],
				ctx,
			);
			validateReferenceTarget(
				record.clinicalTrial,
				"clinicalTrial",
				["http://hl7.org/fhir/StructureDefinition/ResearchStudy"],
				["ResearchStudy"],
				ctx,
			);
			validateReferenceTarget(
				record.contact,
				"contact",
				[
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				],
				["Organization", "PractitionerRole"],
				ctx,
			);
			validateReferenceTarget(
				record.masterFile,
				"masterFile",
				["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
				["DocumentReference"],
				ctx,
			);
			validateReferenceTarget(
				record.packagedMedicinalProduct,
				"packagedMedicinalProduct",
				["http://hl7.org/fhir/StructureDefinition/MedicinalProductPackaged"],
				["MedicinalProductPackaged"],
				ctx,
			);
			validateReferenceTarget(
				record.pharmaceuticalProduct,
				"pharmaceuticalProduct",
				[
					"http://hl7.org/fhir/StructureDefinition/MedicinalProductPharmaceutical",
				],
				["MedicinalProductPharmaceutical"],
				ctx,
			);
		});

export const MedicinalProductSchema =
	MedicinalProductSchemaInternal as z.ZodType<MedicinalProduct>;
