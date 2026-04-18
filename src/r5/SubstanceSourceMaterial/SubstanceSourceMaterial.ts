// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceSourceMaterial
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirString } from "../../shared/fhir-primitives";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { SubstanceSourceMaterial_FractionDescription } from "./SubstanceSourceMaterial_FractionDescription";
import { SubstanceSourceMaterial_FractionDescriptionSchemaInternal } from "./SubstanceSourceMaterial_FractionDescription";
import type { SubstanceSourceMaterial_Organism } from "./SubstanceSourceMaterial_Organism";
import { SubstanceSourceMaterial_OrganismSchemaInternal } from "./SubstanceSourceMaterial_Organism";
import type { SubstanceSourceMaterial_PartDescription } from "./SubstanceSourceMaterial_PartDescription";
import { SubstanceSourceMaterial_PartDescriptionSchemaInternal } from "./SubstanceSourceMaterial_PartDescription";

/** Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex. */
export interface SubstanceSourceMaterial extends DomainResource {
	/** The country where the plant material is harvested or the countries where the plasma is sourced from as laid down in accordance with the Plasma Master File. For “Plasma-derived substances” the attribute country of origin provides information about the countries used for the manufacturing of the Cryopoor plama or Crioprecipitate. */
	countryOfOrigin?: Array<CodeableConcept>;
	/** Stage of life for animals, plants, insects and microorganisms. This information shall be provided only when the substance is significantly different in these stages (e.g. foetal bovine serum). */
	developmentStage?: CodeableConcept;
	/** Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels. */
	fractionDescription?: Array<SubstanceSourceMaterial_FractionDescription>;
	/** The place/region where the plant is harvested or the places/regions where the animal source material has its habitat. */
	geographicalLocation?: Array<string | null>;
	/** Extensions for geographicalLocation */
	_geographicalLocation?: Array<Element | null>;
	/** This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf. */
	organism?: SubstanceSourceMaterial_Organism;
	/** The unique identifier associated with the source material parent organism shall be specified. */
	organismId?: Identifier;
	/** The organism accepted Scientific name shall be provided based on the organism taxonomy. */
	organismName?: string;
	/** Extensions for organismName */
	_organismName?: Element;
	/** The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID of the substance (fresh) of Ginkgo biloba L. or Ginkgo biloba L. (Whole plant). */
	parentSubstanceId?: Array<Identifier>;
	/** The parent substance of the Herbal Drug, or Herbal preparation. */
	parentSubstanceName?: Array<string | null>;
	/** Extensions for parentSubstanceName */
	_parentSubstanceName?: Array<Element | null>;
	/** To do. */
	partDescription?: Array<SubstanceSourceMaterial_PartDescription>;
	/** This is a SubstanceSourceMaterial resource. */
	resourceType: "SubstanceSourceMaterial";
	/** General high level classification of the source material specific to the origin of the material. */
	sourceMaterialClass?: CodeableConcept;
	/** The state of the source material when extracted. */
	sourceMaterialState?: CodeableConcept;
	/** The type of the source material shall be specified based on a controlled vocabulary. For vaccines, this subclause refers to the class of infectious agent. */
	sourceMaterialType?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getSubstanceSourceMaterial_FractionDescriptionSchema =
	(): z.ZodType<SubstanceSourceMaterial_FractionDescription> =>
		SubstanceSourceMaterial_FractionDescriptionSchemaInternal as z.ZodType<SubstanceSourceMaterial_FractionDescription>;
const getSubstanceSourceMaterial_OrganismSchema =
	(): z.ZodType<SubstanceSourceMaterial_Organism> =>
		SubstanceSourceMaterial_OrganismSchemaInternal as z.ZodType<SubstanceSourceMaterial_Organism>;
const getSubstanceSourceMaterial_PartDescriptionSchema =
	(): z.ZodType<SubstanceSourceMaterial_PartDescription> =>
		SubstanceSourceMaterial_PartDescriptionSchemaInternal as z.ZodType<SubstanceSourceMaterial_PartDescription>;

/** @internal */
export const SubstanceSourceMaterialSchemaInternal =
	DomainResourceSchemaInternal.extend({
		countryOfOrigin: z.lazy(getCodeableConceptSchema).array().optional(),
		developmentStage: z.lazy(getCodeableConceptSchema).optional(),
		fractionDescription: z
			.lazy(getSubstanceSourceMaterial_FractionDescriptionSchema)
			.array()
			.optional(),
		geographicalLocation: fhirString().nullable().array().optional(),
		_geographicalLocation: z
			.lazy(getElementSchema)
			.nullable()
			.array()
			.optional(),
		organism: z.lazy(getSubstanceSourceMaterial_OrganismSchema).optional(),
		organismId: z.lazy(getIdentifierSchema).optional(),
		organismName: fhirString().optional(),
		_organismName: z.lazy(getElementSchema).optional(),
		parentSubstanceId: z.lazy(getIdentifierSchema).array().optional(),
		parentSubstanceName: fhirString().nullable().array().optional(),
		_parentSubstanceName: z
			.lazy(getElementSchema)
			.nullable()
			.array()
			.optional(),
		partDescription: z
			.lazy(getSubstanceSourceMaterial_PartDescriptionSchema)
			.array()
			.optional(),
		resourceType: z.literal("SubstanceSourceMaterial"),
		sourceMaterialClass: z.lazy(getCodeableConceptSchema).optional(),
		sourceMaterialState: z.lazy(getCodeableConceptSchema).optional(),
		sourceMaterialType: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.geographicalLocation,
				record._geographicalLocation,
				"geographicalLocation",
				"_geographicalLocation",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.parentSubstanceName,
				record._parentSubstanceName,
				"parentSubstanceName",
				"_parentSubstanceName",
				ctx,
			);
		});

export const SubstanceSourceMaterialSchema =
	SubstanceSourceMaterialSchemaInternal as z.ZodType<SubstanceSourceMaterial>;
