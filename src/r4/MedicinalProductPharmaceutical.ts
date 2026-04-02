// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductPharmaceutical
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { MedicinalProductPharmaceutical_Characteristics } from "./MedicinalProductPharmaceutical_Characteristics";
import { MedicinalProductPharmaceutical_CharacteristicsSchemaInternal } from "./MedicinalProductPharmaceutical_Characteristics";
import type { MedicinalProductPharmaceutical_RouteOfAdministration } from "./MedicinalProductPharmaceutical_RouteOfAdministration";
import { MedicinalProductPharmaceutical_RouteOfAdministrationSchemaInternal } from "./MedicinalProductPharmaceutical_RouteOfAdministration";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A pharmaceutical product described in terms of its composition and dose form. */
export interface MedicinalProductPharmaceutical extends DomainResource {
	/** The administrable dose form, after necessary reconstitution. */
	administrableDoseForm: CodeableConcept;
	/** Characteristics e.g. a products onset of action. */
	characteristics?: Array<MedicinalProductPharmaceutical_Characteristics>;
	/** Accompanying device. */
	device?: Array<Reference>;
	/** An identifier for the pharmaceutical medicinal product. */
	identifier?: Array<Identifier>;
	/** Ingredient. */
	ingredient?: Array<Reference>;
	/** This is a MedicinalProductPharmaceutical resource. */
	resourceType: "MedicinalProductPharmaceutical";
	/** The path by which the pharmaceutical product is taken into or makes contact with the body. */
	routeOfAdministration: Array<MedicinalProductPharmaceutical_RouteOfAdministration>;
	/** Todo. */
	unitOfPresentation?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMedicinalProductPharmaceutical_CharacteristicsSchema =
	(): z.ZodType<MedicinalProductPharmaceutical_Characteristics> =>
		MedicinalProductPharmaceutical_CharacteristicsSchemaInternal as z.ZodType<MedicinalProductPharmaceutical_Characteristics>;
const getMedicinalProductPharmaceutical_RouteOfAdministrationSchema =
	(): z.ZodType<MedicinalProductPharmaceutical_RouteOfAdministration> =>
		MedicinalProductPharmaceutical_RouteOfAdministrationSchemaInternal as z.ZodType<MedicinalProductPharmaceutical_RouteOfAdministration>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicinalProductPharmaceuticalSchemaInternal =
	DomainResourceSchemaInternal.extend({
		administrableDoseForm: z.lazy(getCodeableConceptSchema),
		characteristics: z
			.lazy(getMedicinalProductPharmaceutical_CharacteristicsSchema)
			.array()
			.optional(),
		device: z.lazy(getReferenceSchema).array().optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		ingredient: z.lazy(getReferenceSchema).array().optional(),
		resourceType: z.literal("MedicinalProductPharmaceutical"),
		routeOfAdministration: z
			.lazy(getMedicinalProductPharmaceutical_RouteOfAdministrationSchema)
			.array(),
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
				record.ingredient,
				"ingredient",
				["http://hl7.org/fhir/StructureDefinition/MedicinalProductIngredient"],
				["MedicinalProductIngredient"],
				ctx,
			);
		});

export const MedicinalProductPharmaceuticalSchema =
	MedicinalProductPharmaceuticalSchemaInternal as z.ZodType<MedicinalProductPharmaceutical>;
