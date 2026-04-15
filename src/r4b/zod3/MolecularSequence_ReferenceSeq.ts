// Profile: http://hl7.org/fhir/StructureDefinition/MolecularSequence
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A sequence that is used as a reference to describe variants that are present in a sequence analyzed. */
export interface MolecularSequence_ReferenceSeq extends BackboneElement {
	/** Structural unit composed of a nucleic acid molecule which controls its own replication through the interaction of specific proteins at one or more origins of replication ([SO:0000340](http://www.sequenceontology.org/browser/current_svn/term/SO:0000340)). */
	chromosome?: CodeableConcept;
	/** The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37'.  Version number must be included if a versioned release of a primary build was used. */
	genomeBuild?: string;
	/** Extensions for genomeBuild */
	_genomeBuild?: Element;
	/** A relative reference to a DNA strand based on gene orientation. The strand that contains the open reading frame of the gene is the "sense" strand, and the opposite complementary strand is the "antisense" strand. */
	orientation?: "antisense" | "sense";
	/** Extensions for orientation */
	_orientation?: Element;
	/** Reference identifier of reference sequence submitted to NCBI. It must match the type in the MolecularSequence.type field. For example, the prefix, “NG_” identifies reference sequence for genes, “NM_” for messenger RNA transcripts, and “NP_” for amino acid sequences. */
	referenceSeqId?: CodeableConcept;
	/** A pointer to another MolecularSequence entity as reference sequence. */
	referenceSeqPointer?: Reference;
	/** A string like "ACGT". */
	referenceSeqString?: string;
	/** Extensions for referenceSeqString */
	_referenceSeqString?: Element;
	/** An absolute reference to a strand. The Watson strand is the strand whose 5'-end is on the short arm of the chromosome, and the Crick strand as the one whose 5'-end is on the long arm. */
	strand?: "crick" | "watson";
	/** Extensions for strand */
	_strand?: Element;
	/** End position of the window on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position. */
	windowEnd?: number;
	/** Extensions for windowEnd */
	_windowEnd?: Element;
	/** Start position of the window on the reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive. */
	windowStart?: number;
	/** Extensions for windowStart */
	_windowStart?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MolecularSequence_ReferenceSeqSchemaInternal =
	BackboneElementSchemaInternal.extend({
		chromosome: z.lazy(getCodeableConceptSchema).optional(),
		genomeBuild: fhirString().optional(),
		_genomeBuild: z.lazy(getElementSchema).optional(),
		orientation: z.enum(["antisense", "sense"]).optional(),
		_orientation: z.lazy(getElementSchema).optional(),
		referenceSeqId: z.lazy(getCodeableConceptSchema).optional(),
		referenceSeqPointer: z.lazy(getReferenceSchema).optional(),
		referenceSeqString: fhirString().optional(),
		_referenceSeqString: z.lazy(getElementSchema).optional(),
		strand: z.enum(["crick", "watson"]).optional(),
		_strand: z.lazy(getElementSchema).optional(),
		windowEnd: z.number().int().optional(),
		_windowEnd: z.lazy(getElementSchema).optional(),
		windowStart: z.number().int().optional(),
		_windowStart: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.referenceSeqPointer,
				"referenceSeqPointer",
				["http://hl7.org/fhir/StructureDefinition/MolecularSequence"],
				["MolecularSequence"],
				ctx,
			);
		});

export const MolecularSequence_ReferenceSeqSchema =
	MolecularSequence_ReferenceSeqSchemaInternal as z.ZodType<MolecularSequence_ReferenceSeq>;
