// Profile: http://hl7.org/fhir/StructureDefinition/Sequence
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
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
export interface Sequence_ReferenceSeq extends BackboneElement {
	/** Structural unit composed of a nucleic acid molecule which controls its own replication through the interaction of specific proteins at one or more origins of replication ([SO:0000340](http://www.sequenceontology.org/browser/current_svn/term/SO:0000340)). */
	chromosome?: CodeableConcept;
	/** The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37'.  Version number must be included if a versioned release of a primary build was used. */
	genomeBuild?: string;
	/** Extensions for genomeBuild */
	_genomeBuild?: Element;
	/** Reference identifier of reference sequence submitted to NCBI. It must match the type in the Sequence.type field. For example, the prefix, “NG_” identifies reference sequence for genes, “NM_” for messenger RNA transcripts, and “NP_” for amino acid sequences. */
	referenceSeqId?: CodeableConcept;
	/** A Pointer to another Sequence entity as reference sequence. */
	referenceSeqPointer?: Reference;
	/** A string like "ACGT". */
	referenceSeqString?: string;
	/** Extensions for referenceSeqString */
	_referenceSeqString?: Element;
	/** Directionality of DNA sequence. Available values are "1" for the plus strand (5' to 3')/Watson/Sense/positive  and "-1" for the minus strand(3' to 5')/Crick/Antisense/negative. */
	strand?: number;
	/** Extensions for strand */
	_strand?: Element;
	/** End position of the window on the reference sequence. If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position. */
	windowEnd: number;
	/** Extensions for windowEnd */
	_windowEnd?: Element;
	/** Start position of the window on the reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive. */
	windowStart: number;
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
export const Sequence_ReferenceSeqSchemaInternal =
	BackboneElementSchemaInternal.extend({
		chromosome: z.lazy(getCodeableConceptSchema).optional(),
		genomeBuild: fhirString().optional(),
		_genomeBuild: z.lazy(getElementSchema).optional(),
		referenceSeqId: z.lazy(getCodeableConceptSchema).optional(),
		referenceSeqPointer: z.lazy(getReferenceSchema).optional(),
		referenceSeqString: fhirString().optional(),
		_referenceSeqString: z.lazy(getElementSchema).optional(),
		strand: z.number().int().optional(),
		_strand: z.lazy(getElementSchema).optional(),
		windowEnd: z.number().int(),
		_windowEnd: z.lazy(getElementSchema).optional(),
		windowStart: z.number().int(),
		_windowStart: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.referenceSeqPointer,
				"referenceSeqPointer",
				["http://hl7.org/fhir/StructureDefinition/Sequence"],
				["Sequence"],
				ctx,
			);
		});

export const Sequence_ReferenceSeqSchema =
	Sequence_ReferenceSeqSchemaInternal as z.ZodType<Sequence_ReferenceSeq>;
