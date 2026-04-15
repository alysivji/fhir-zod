// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductPackaged
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { MarketingStatus } from "./MarketingStatus";
import { MarketingStatusSchemaInternal } from "./MarketingStatus";
import type { MedicinalProductPackaged_BatchIdentifier } from "./MedicinalProductPackaged_BatchIdentifier";
import { MedicinalProductPackaged_BatchIdentifierSchemaInternal } from "./MedicinalProductPackaged_BatchIdentifier";
import type { MedicinalProductPackaged_PackageItem } from "./MedicinalProductPackaged_PackageItem";
import { MedicinalProductPackaged_PackageItemSchemaInternal } from "./MedicinalProductPackaged_PackageItem";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A medicinal product in a container or package. */
export interface MedicinalProductPackaged extends DomainResource {
	/** Batch numbering. */
	batchIdentifier?: Array<MedicinalProductPackaged_BatchIdentifier>;
	/** Textual description. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Unique identifier. */
	identifier?: Array<Identifier>;
	/** The legal status of supply of the medicinal product as classified by the regulator. */
	legalStatusOfSupply?: CodeableConcept;
	/** Manufacturer of this Package Item. */
	manufacturer?: Array<Reference>;
	/** Manufacturer of this Package Item. */
	marketingAuthorization?: Reference;
	/** Marketing information. */
	marketingStatus?: Array<MarketingStatus>;
	/** A packaging item, as a contained for medicine, possibly with other packaging items within. */
	packageItem: Array<MedicinalProductPackaged_PackageItem>;
	/** This is a MedicinalProductPackaged resource. */
	resourceType: "MedicinalProductPackaged";
	/** The product with this is a pack for. */
	subject?: Array<Reference>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMarketingStatusSchema = (): z.ZodType<MarketingStatus> =>
	MarketingStatusSchemaInternal as z.ZodType<MarketingStatus>;
const getMedicinalProductPackaged_BatchIdentifierSchema =
	(): z.ZodType<MedicinalProductPackaged_BatchIdentifier> =>
		MedicinalProductPackaged_BatchIdentifierSchemaInternal as z.ZodType<MedicinalProductPackaged_BatchIdentifier>;
const getMedicinalProductPackaged_PackageItemSchema =
	(): z.ZodType<MedicinalProductPackaged_PackageItem> =>
		MedicinalProductPackaged_PackageItemSchemaInternal as z.ZodType<MedicinalProductPackaged_PackageItem>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicinalProductPackagedSchemaInternal =
	DomainResourceSchemaInternal.extend({
		batchIdentifier: z
			.lazy(getMedicinalProductPackaged_BatchIdentifierSchema)
			.array()
			.optional(),
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		legalStatusOfSupply: z.lazy(getCodeableConceptSchema).optional(),
		manufacturer: z.lazy(getReferenceSchema).array().optional(),
		marketingAuthorization: z.lazy(getReferenceSchema).optional(),
		marketingStatus: z.lazy(getMarketingStatusSchema).array().optional(),
		packageItem: z.lazy(getMedicinalProductPackaged_PackageItemSchema).array(),
		resourceType: z.literal("MedicinalProductPackaged"),
		subject: z.lazy(getReferenceSchema).array().optional(),
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
			validateReferenceTarget(
				record.marketingAuthorization,
				"marketingAuthorization",
				[
					"http://hl7.org/fhir/StructureDefinition/MedicinalProductAuthorization",
				],
				["MedicinalProductAuthorization"],
				ctx,
			);
			validateReferenceTarget(
				record.subject,
				"subject",
				["http://hl7.org/fhir/StructureDefinition/MedicinalProduct"],
				["MedicinalProduct"],
				ctx,
			);
		});

export const MedicinalProductPackagedSchema =
	MedicinalProductPackagedSchemaInternal as z.ZodType<MedicinalProductPackaged>;
