// Profile: http://hl7.org/fhir/StructureDefinition/MolecularSequence
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { MolecularSequence_Quality } from "./MolecularSequence_Quality";
import { MolecularSequence_QualitySchemaInternal } from "./MolecularSequence_Quality";
import type { MolecularSequence_ReferenceSeq } from "./MolecularSequence_ReferenceSeq";
import { MolecularSequence_ReferenceSeqSchemaInternal } from "./MolecularSequence_ReferenceSeq";
import type { MolecularSequence_Repository } from "./MolecularSequence_Repository";
import { MolecularSequence_RepositorySchemaInternal } from "./MolecularSequence_Repository";
import type { MolecularSequence_StructureVariant } from "./MolecularSequence_StructureVariant";
import { MolecularSequence_StructureVariantSchemaInternal } from "./MolecularSequence_StructureVariant";
import type { MolecularSequence_Variant } from "./MolecularSequence_Variant";
import { MolecularSequence_VariantSchemaInternal } from "./MolecularSequence_Variant";

/** Raw data describing a biological sequence. */
export interface MolecularSequence extends DomainResource {
	/** Whether the sequence is numbered starting at 0 (0-based numbering or coordinates, inclusive start, exclusive end) or starting at 1 (1-based numbering, inclusive start and inclusive end). */
	coordinateSystem: number;
	/** Extensions for coordinateSystem */
	_coordinateSystem?: Element;
	/** The method for sequencing, for example, chip information. */
	device?: Reference;
	/** A unique identifier for this particular sequence instance. This is a FHIR-defined id. */
	identifier?: Array<Identifier>;
	/** Sequence that was observed. It is the result marked by referenceSeq along with variant records on referenceSeq. This shall start from referenceSeq.windowStart and end by referenceSeq.windowEnd. */
	observedSeq?: string;
	/** Extensions for observedSeq */
	_observedSeq?: Element;
	/** The patient whose sequencing results are described by this resource. */
	patient?: Reference;
	/** The organization or lab that should be responsible for this result. */
	performer?: Reference;
	/** Pointer to next atomic sequence which at most contains one variant. */
	pointer?: Array<Reference>;
	/** An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)). */
	quality?: Array<MolecularSequence_Quality>;
	/** The number of copies of the sequence of interest. (RNASeq). */
	quantity?: Quantity;
	/** Coverage (read depth or depth) is the average number of reads representing a given nucleotide in the reconstructed sequence. */
	readCoverage?: number;
	/** Extensions for readCoverage */
	_readCoverage?: Element;
	/** A sequence that is used as a reference to describe variants that are present in a sequence analyzed. */
	referenceSeq?: MolecularSequence_ReferenceSeq;
	/** Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq. */
	repository?: Array<MolecularSequence_Repository>;
	/** This is a MolecularSequence resource. */
	resourceType: "MolecularSequence";
	/** Specimen used for sequencing. */
	specimen?: Reference;
	/** Information about chromosome structure variation. */
	structureVariant?: Array<MolecularSequence_StructureVariant>;
	/** Amino Acid Sequence/ DNA Sequence / RNA Sequence. */
	type?: "aa" | "dna" | "rna";
	/** Extensions for type */
	_type?: Element;
	/** The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string. */
	variant?: Array<MolecularSequence_Variant>;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMolecularSequence_QualitySchema =
	(): z.ZodType<MolecularSequence_Quality> =>
		MolecularSequence_QualitySchemaInternal as z.ZodType<MolecularSequence_Quality>;
const getMolecularSequence_ReferenceSeqSchema =
	(): z.ZodType<MolecularSequence_ReferenceSeq> =>
		MolecularSequence_ReferenceSeqSchemaInternal as z.ZodType<MolecularSequence_ReferenceSeq>;
const getMolecularSequence_RepositorySchema =
	(): z.ZodType<MolecularSequence_Repository> =>
		MolecularSequence_RepositorySchemaInternal as z.ZodType<MolecularSequence_Repository>;
const getMolecularSequence_StructureVariantSchema =
	(): z.ZodType<MolecularSequence_StructureVariant> =>
		MolecularSequence_StructureVariantSchemaInternal as z.ZodType<MolecularSequence_StructureVariant>;
const getMolecularSequence_VariantSchema =
	(): z.ZodType<MolecularSequence_Variant> =>
		MolecularSequence_VariantSchemaInternal as z.ZodType<MolecularSequence_Variant>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MolecularSequenceSchemaInternal =
	DomainResourceSchemaInternal.extend({
		coordinateSystem: z.number().int(),
		_coordinateSystem: z.lazy(getElementSchema).optional(),
		device: z.lazy(getReferenceSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		observedSeq: fhirString().optional(),
		_observedSeq: z.lazy(getElementSchema).optional(),
		patient: z.lazy(getReferenceSchema).optional(),
		performer: z.lazy(getReferenceSchema).optional(),
		pointer: z.lazy(getReferenceSchema).array().optional(),
		quality: z.lazy(getMolecularSequence_QualitySchema).array().optional(),
		quantity: z.lazy(getQuantitySchema).optional(),
		readCoverage: z.number().int().optional(),
		_readCoverage: z.lazy(getElementSchema).optional(),
		referenceSeq: z.lazy(getMolecularSequence_ReferenceSeqSchema).optional(),
		repository: z
			.lazy(getMolecularSequence_RepositorySchema)
			.array()
			.optional(),
		resourceType: z.literal("MolecularSequence"),
		specimen: z.lazy(getReferenceSchema).optional(),
		structureVariant: z
			.lazy(getMolecularSequence_StructureVariantSchema)
			.array()
			.optional(),
		type: z.enum(["aa", "dna", "rna"]).optional(),
		_type: z.lazy(getElementSchema).optional(),
		variant: z.lazy(getMolecularSequence_VariantSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.device,
				"device",
				["http://hl7.org/fhir/StructureDefinition/Device"],
				["Device"],
				ctx,
			);
			validateReferenceTarget(
				record.patient,
				"patient",
				["http://hl7.org/fhir/StructureDefinition/Patient"],
				["Patient"],
				ctx,
			);
			validateReferenceTarget(
				record.performer,
				"performer",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
			validateReferenceTarget(
				record.pointer,
				"pointer",
				["http://hl7.org/fhir/StructureDefinition/MolecularSequence"],
				["MolecularSequence"],
				ctx,
			);
			validateReferenceTarget(
				record.specimen,
				"specimen",
				["http://hl7.org/fhir/StructureDefinition/Specimen"],
				["Specimen"],
				ctx,
			);
		});

export const MolecularSequenceSchema =
	MolecularSequenceSchemaInternal as z.ZodType<MolecularSequence>;
