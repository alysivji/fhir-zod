// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceSpecification
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
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
import type { SubstanceSpecification_Code } from "./SubstanceSpecification_Code";
import { SubstanceSpecification_CodeSchemaInternal } from "./SubstanceSpecification_Code";
import type { SubstanceSpecification_Moiety } from "./SubstanceSpecification_Moiety";
import { SubstanceSpecification_MoietySchemaInternal } from "./SubstanceSpecification_Moiety";
import type { SubstanceSpecification_Name } from "./SubstanceSpecification_Name";
import { SubstanceSpecification_NameSchemaInternal } from "./SubstanceSpecification_Name";
import type { SubstanceSpecification_Property } from "./SubstanceSpecification_Property";
import { SubstanceSpecification_PropertySchemaInternal } from "./SubstanceSpecification_Property";
import type { SubstanceSpecification_Relationship } from "./SubstanceSpecification_Relationship";
import { SubstanceSpecification_RelationshipSchemaInternal } from "./SubstanceSpecification_Relationship";
import type { SubstanceSpecification_Structure } from "./SubstanceSpecification_Structure";
import { SubstanceSpecification_StructureSchemaInternal } from "./SubstanceSpecification_Structure";

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface SubstanceSpecification extends DomainResource {
	/** Codes associated with the substance. */
	code?: Array<SubstanceSpecification_Code>;
	/** Textual comment about this record of a substance. */
	comment?: string;
	/** Extensions for comment */
	_comment?: Element;
	/** Textual description of the substance. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** If the substance applies to only human or veterinary use. */
	domain?: CodeableConcept;
	/** Identifier by which this substance is known. */
	identifier?: Identifier;
	/** Moiety, for structural modifications. */
	moiety?: Array<SubstanceSpecification_Moiety>;
	/** The molecular weight or weight range (for proteins, polymers or nucleic acids). */
	molecularWeight?: Array<unknown>;
	/** Names applicable to this substance. */
	name?: Array<SubstanceSpecification_Name>;
	/** Data items specific to nucleic acids. */
	nucleicAcid?: Reference;
	/** Data items specific to polymers. */
	polymer?: Reference;
	/** General specifications for this substance, including how it is related to other substances. */
	property?: Array<SubstanceSpecification_Property>;
	/** Data items specific to proteins. */
	protein?: Reference;
	/** General information detailing this substance. */
	referenceInformation?: Reference;
	/** A link between this substance and another, with details of the relationship. */
	relationship?: Array<SubstanceSpecification_Relationship>;
	/** This is a SubstanceSpecification resource. */
	resourceType: "SubstanceSpecification";
	/** Supporting literature. */
	source?: Array<Reference>;
	/** Material or taxonomic/anatomical source for the substance. */
	sourceMaterial?: Reference;
	/** Status of substance within the catalogue e.g. approved. */
	status?: CodeableConcept;
	/** Structural information. */
	structure?: SubstanceSpecification_Structure;
	/** High level categorization, e.g. polymer or nucleic acid. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getSubstanceSpecification_CodeSchema =
	(): z.ZodType<SubstanceSpecification_Code> =>
		SubstanceSpecification_CodeSchemaInternal as z.ZodType<SubstanceSpecification_Code>;
const getSubstanceSpecification_MoietySchema =
	(): z.ZodType<SubstanceSpecification_Moiety> =>
		SubstanceSpecification_MoietySchemaInternal as z.ZodType<SubstanceSpecification_Moiety>;
const getSubstanceSpecification_NameSchema =
	(): z.ZodType<SubstanceSpecification_Name> =>
		SubstanceSpecification_NameSchemaInternal as z.ZodType<SubstanceSpecification_Name>;
const getSubstanceSpecification_PropertySchema =
	(): z.ZodType<SubstanceSpecification_Property> =>
		SubstanceSpecification_PropertySchemaInternal as z.ZodType<SubstanceSpecification_Property>;
const getSubstanceSpecification_RelationshipSchema =
	(): z.ZodType<SubstanceSpecification_Relationship> =>
		SubstanceSpecification_RelationshipSchemaInternal as z.ZodType<SubstanceSpecification_Relationship>;
const getSubstanceSpecification_StructureSchema =
	(): z.ZodType<SubstanceSpecification_Structure> =>
		SubstanceSpecification_StructureSchemaInternal as z.ZodType<SubstanceSpecification_Structure>;

/** @internal */
export const SubstanceSpecificationSchemaInternal =
	DomainResourceSchemaInternal.extend({
		code: z.lazy(getSubstanceSpecification_CodeSchema).array().optional(),
		comment: fhirString().optional(),
		_comment: z.lazy(getElementSchema).optional(),
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		domain: z.lazy(getCodeableConceptSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).optional(),
		moiety: z.lazy(getSubstanceSpecification_MoietySchema).array().optional(),
		molecularWeight: z.unknown().array().optional(),
		name: z.lazy(getSubstanceSpecification_NameSchema).array().optional(),
		nucleicAcid: z.lazy(getReferenceSchema).optional(),
		polymer: z.lazy(getReferenceSchema).optional(),
		property: z
			.lazy(getSubstanceSpecification_PropertySchema)
			.array()
			.optional(),
		protein: z.lazy(getReferenceSchema).optional(),
		referenceInformation: z.lazy(getReferenceSchema).optional(),
		relationship: z
			.lazy(getSubstanceSpecification_RelationshipSchema)
			.array()
			.optional(),
		resourceType: z.literal("SubstanceSpecification"),
		source: z.lazy(getReferenceSchema).array().optional(),
		sourceMaterial: z.lazy(getReferenceSchema).optional(),
		status: z.lazy(getCodeableConceptSchema).optional(),
		structure: z.lazy(getSubstanceSpecification_StructureSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.nucleicAcid,
				"nucleicAcid",
				["http://hl7.org/fhir/StructureDefinition/SubstanceNucleicAcid"],
				["SubstanceNucleicAcid"],
				ctx,
			);
			validateReferenceTarget(
				record.polymer,
				"polymer",
				["http://hl7.org/fhir/StructureDefinition/SubstancePolymer"],
				["SubstancePolymer"],
				ctx,
			);
			validateReferenceTarget(
				record.protein,
				"protein",
				["http://hl7.org/fhir/StructureDefinition/SubstanceProtein"],
				["SubstanceProtein"],
				ctx,
			);
			validateReferenceTarget(
				record.referenceInformation,
				"referenceInformation",
				[
					"http://hl7.org/fhir/StructureDefinition/SubstanceReferenceInformation",
				],
				["SubstanceReferenceInformation"],
				ctx,
			);
			validateReferenceTarget(
				record.source,
				"source",
				["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
				["DocumentReference"],
				ctx,
			);
			validateReferenceTarget(
				record.sourceMaterial,
				"sourceMaterial",
				["http://hl7.org/fhir/StructureDefinition/SubstanceSourceMaterial"],
				["SubstanceSourceMaterial"],
				ctx,
			);
		});

export const SubstanceSpecificationSchema =
	SubstanceSpecificationSchemaInternal as z.ZodType<SubstanceSpecification>;
