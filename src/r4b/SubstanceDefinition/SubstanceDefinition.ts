// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
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
import type { SubstanceDefinition_Code } from "./SubstanceDefinition_Code";
import { SubstanceDefinition_CodeSchemaInternal } from "./SubstanceDefinition_Code";
import type { SubstanceDefinition_Moiety } from "./SubstanceDefinition_Moiety";
import { SubstanceDefinition_MoietySchemaInternal } from "./SubstanceDefinition_Moiety";
import type { SubstanceDefinition_MolecularWeight } from "./SubstanceDefinition_MolecularWeight";
import { SubstanceDefinition_MolecularWeightSchemaInternal } from "./SubstanceDefinition_MolecularWeight";
import type { SubstanceDefinition_Name } from "./SubstanceDefinition_Name";
import { SubstanceDefinition_NameSchemaInternal } from "./SubstanceDefinition_Name";
import type { SubstanceDefinition_Property } from "./SubstanceDefinition_Property";
import { SubstanceDefinition_PropertySchemaInternal } from "./SubstanceDefinition_Property";
import type { SubstanceDefinition_Relationship } from "./SubstanceDefinition_Relationship";
import { SubstanceDefinition_RelationshipSchemaInternal } from "./SubstanceDefinition_Relationship";
import type { SubstanceDefinition_SourceMaterial } from "./SubstanceDefinition_SourceMaterial";
import { SubstanceDefinition_SourceMaterialSchemaInternal } from "./SubstanceDefinition_SourceMaterial";
import type { SubstanceDefinition_Structure } from "./SubstanceDefinition_Structure";
import { SubstanceDefinition_StructureSchemaInternal } from "./SubstanceDefinition_Structure";

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface SubstanceDefinition extends DomainResource {
	/** A high level categorization, e.g. polymer or nucleic acid, or food, chemical, biological, or a lower level such as the general types of polymer (linear or branch chain) or type of impurity (process related or contaminant). */
	classification?: Array<CodeableConcept>;
	/** Codes associated with the substance. */
	code?: Array<SubstanceDefinition_Code>;
	/** Textual description of the substance. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** If the substance applies to human or veterinary use. */
	domain?: CodeableConcept;
	/** The quality standard, established benchmark, to which substance complies (e.g. USP/NF, Ph. Eur, JP, BP, Company Standard). */
	grade?: Array<CodeableConcept>;
	/** Identifier by which this substance is known. */
	identifier?: Array<Identifier>;
	/** Supporting literature. */
	informationSource?: Array<Reference>;
	/** The entity that creates, makes, produces or fabricates the substance. This is a set of potential manufacturers but is not necessarily comprehensive. */
	manufacturer?: Array<Reference>;
	/** Moiety, for structural modifications. */
	moiety?: Array<SubstanceDefinition_Moiety>;
	/** The molecular weight or weight range (for proteins, polymers or nucleic acids). */
	molecularWeight?: Array<SubstanceDefinition_MolecularWeight>;
	/** Names applicable to this substance. */
	name?: Array<SubstanceDefinition_Name>;
	/** Textual comment about the substance's catalogue or registry record. */
	note?: Array<Annotation>;
	/** General specifications for this substance. */
	property?: Array<SubstanceDefinition_Property>;
	/** A link between this substance and another, with details of the relationship. */
	relationship?: Array<SubstanceDefinition_Relationship>;
	/** This is a SubstanceDefinition resource. */
	resourceType: "SubstanceDefinition";
	/** Material or taxonomic/anatomical source for the substance. */
	sourceMaterial?: SubstanceDefinition_SourceMaterial;
	/** Status of substance within the catalogue e.g. active, retired. */
	status?: CodeableConcept;
	/** Structural information. */
	structure?: SubstanceDefinition_Structure;
	/** An entity that is the source for the substance. It may be different from the manufacturer. Supplier is synonymous to a distributor. */
	supplier?: Array<Reference>;
	/** A business level version identifier of the substance. */
	version?: string;
	/** Extensions for version */
	_version?: Element;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getSubstanceDefinition_CodeSchema =
	(): z.ZodType<SubstanceDefinition_Code> =>
		SubstanceDefinition_CodeSchemaInternal as z.ZodType<SubstanceDefinition_Code>;
const getSubstanceDefinition_MoietySchema =
	(): z.ZodType<SubstanceDefinition_Moiety> =>
		SubstanceDefinition_MoietySchemaInternal as z.ZodType<SubstanceDefinition_Moiety>;
const getSubstanceDefinition_MolecularWeightSchema =
	(): z.ZodType<SubstanceDefinition_MolecularWeight> =>
		SubstanceDefinition_MolecularWeightSchemaInternal as z.ZodType<SubstanceDefinition_MolecularWeight>;
const getSubstanceDefinition_NameSchema =
	(): z.ZodType<SubstanceDefinition_Name> =>
		SubstanceDefinition_NameSchemaInternal as z.ZodType<SubstanceDefinition_Name>;
const getSubstanceDefinition_PropertySchema =
	(): z.ZodType<SubstanceDefinition_Property> =>
		SubstanceDefinition_PropertySchemaInternal as z.ZodType<SubstanceDefinition_Property>;
const getSubstanceDefinition_RelationshipSchema =
	(): z.ZodType<SubstanceDefinition_Relationship> =>
		SubstanceDefinition_RelationshipSchemaInternal as z.ZodType<SubstanceDefinition_Relationship>;
const getSubstanceDefinition_SourceMaterialSchema =
	(): z.ZodType<SubstanceDefinition_SourceMaterial> =>
		SubstanceDefinition_SourceMaterialSchemaInternal as z.ZodType<SubstanceDefinition_SourceMaterial>;
const getSubstanceDefinition_StructureSchema =
	(): z.ZodType<SubstanceDefinition_Structure> =>
		SubstanceDefinition_StructureSchemaInternal as z.ZodType<SubstanceDefinition_Structure>;

/** @internal */
export const SubstanceDefinitionSchemaInternal =
	DomainResourceSchemaInternal.extend({
		classification: z.lazy(getCodeableConceptSchema).array().optional(),
		code: z.lazy(getSubstanceDefinition_CodeSchema).array().optional(),
		description: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		domain: z.lazy(getCodeableConceptSchema).optional(),
		grade: z.lazy(getCodeableConceptSchema).array().optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		informationSource: z.lazy(getReferenceSchema).array().optional(),
		manufacturer: z.lazy(getReferenceSchema).array().optional(),
		moiety: z.lazy(getSubstanceDefinition_MoietySchema).array().optional(),
		molecularWeight: z
			.lazy(getSubstanceDefinition_MolecularWeightSchema)
			.array()
			.optional(),
		name: z.lazy(getSubstanceDefinition_NameSchema).array().optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		property: z.lazy(getSubstanceDefinition_PropertySchema).array().optional(),
		relationship: z
			.lazy(getSubstanceDefinition_RelationshipSchema)
			.array()
			.optional(),
		resourceType: z.literal("SubstanceDefinition"),
		sourceMaterial: z
			.lazy(getSubstanceDefinition_SourceMaterialSchema)
			.optional(),
		status: z.lazy(getCodeableConceptSchema).optional(),
		structure: z.lazy(getSubstanceDefinition_StructureSchema).optional(),
		supplier: z.lazy(getReferenceSchema).array().optional(),
		version: fhirString().optional(),
		_version: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.informationSource,
				"informationSource",
				["http://hl7.org/fhir/StructureDefinition/Citation"],
				["Citation"],
				ctx,
			);
			validateReferenceTarget(
				record.manufacturer,
				"manufacturer",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
			validateReferenceTarget(
				record.supplier,
				"supplier",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
		});

export const SubstanceDefinitionSchema =
	SubstanceDefinitionSchemaInternal as z.ZodType<SubstanceDefinition>;
