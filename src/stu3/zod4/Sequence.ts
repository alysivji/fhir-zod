// Profile: http://hl7.org/fhir/StructureDefinition/Sequence
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { fhirCode, fhirString } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { Sequence_Quality } from "./Sequence_Quality";
import { Sequence_QualitySchemaInternal } from "./Sequence_Quality";
import type { Sequence_ReferenceSeq } from "./Sequence_ReferenceSeq";
import { Sequence_ReferenceSeqSchemaInternal } from "./Sequence_ReferenceSeq";
import type { Sequence_Repository } from "./Sequence_Repository";
import { Sequence_RepositorySchemaInternal } from "./Sequence_Repository";
import type { Sequence_Variant } from "./Sequence_Variant";
import { Sequence_VariantSchemaInternal } from "./Sequence_Variant";

/** Base StructureDefinition for Sequence Resource */
export interface Sequence extends DomainResource {
	/** Whether the sequence is numbered starting at 0 (0-based numbering or coordinates, inclusive start, exclusive end) or starting at 1 (1-based numbering, inclusive start and inclusive end). */
	coordinateSystem: number;
	/** Extensions for coordinateSystem */
	_coordinateSystem?: Element;
	/** The method for sequencing, for example, chip information. */
	device?: Reference;
	/** A unique identifier for this particular sequence instance. This is a FHIR-defined id. */
	identifier?: Array<Identifier>;
	/** Sequence that was observed. It is the result marked by referenceSeq along with variant records on referenceSeq. This shall starts from referenceSeq.windowStart and end by referenceSeq.windowEnd. */
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
	quality?: Array<Sequence_Quality>;
	/** The number of copies of the seqeunce of interest. (RNASeq). */
	quantity?: Quantity;
	/** Coverage (read depth or depth) is the average number of reads representing a given nucleotide in the reconstructed sequence. */
	readCoverage?: number;
	/** Extensions for readCoverage */
	_readCoverage?: Element;
	/** A sequence that is used as a reference to describe variants that are present in a sequence analyzed. */
	referenceSeq?: Sequence_ReferenceSeq;
	/** Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq. */
	repository?: Array<Sequence_Repository>;
	/** This is a Sequence resource. */
	resourceType: "Sequence";
	/** Specimen used for sequencing. */
	specimen?: Reference;
	/** Amino Acid Sequence/ DNA Sequence / RNA Sequence. */
	type?: string;
	/** Extensions for type */
	_type?: Element;
	/** The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string. */
	variant?: Array<Sequence_Variant>;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getSequence_QualitySchema = (): z.ZodType<Sequence_Quality> =>
	Sequence_QualitySchemaInternal as z.ZodType<Sequence_Quality>;
const getSequence_ReferenceSeqSchema = (): z.ZodType<Sequence_ReferenceSeq> =>
	Sequence_ReferenceSeqSchemaInternal as z.ZodType<Sequence_ReferenceSeq>;
const getSequence_RepositorySchema = (): z.ZodType<Sequence_Repository> =>
	Sequence_RepositorySchemaInternal as z.ZodType<Sequence_Repository>;
const getSequence_VariantSchema = (): z.ZodType<Sequence_Variant> =>
	Sequence_VariantSchemaInternal as z.ZodType<Sequence_Variant>;

/** @internal */
export const SequenceSchemaInternal = DomainResourceSchemaInternal.extend({
	coordinateSystem: z.number().int(),
	_coordinateSystem: z.lazy(getElementSchema).optional(),
	device: z.lazy(getReferenceSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	observedSeq: fhirString().optional(),
	_observedSeq: z.lazy(getElementSchema).optional(),
	patient: z.lazy(getReferenceSchema).optional(),
	performer: z.lazy(getReferenceSchema).optional(),
	pointer: z.lazy(getReferenceSchema).array().optional(),
	quality: z.lazy(getSequence_QualitySchema).array().optional(),
	quantity: z.lazy(getQuantitySchema).optional(),
	readCoverage: z.number().int().optional(),
	_readCoverage: z.lazy(getElementSchema).optional(),
	referenceSeq: z.lazy(getSequence_ReferenceSeqSchema).optional(),
	repository: z.lazy(getSequence_RepositorySchema).array().optional(),
	resourceType: z.literal("Sequence"),
	specimen: z.lazy(getReferenceSchema).optional(),
	type: fhirCode().optional(),
	_type: z.lazy(getElementSchema).optional(),
	variant: z.lazy(getSequence_VariantSchema).array().optional(),
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
			["http://hl7.org/fhir/StructureDefinition/Sequence"],
			["Sequence"],
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

export const SequenceSchema = SequenceSchemaInternal as z.ZodType<Sequence>;
