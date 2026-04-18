// Profile: http://hl7.org/fhir/StructureDefinition/MolecularSequence
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Changes in sequence from the starting sequence. */
export interface MolecularSequence_Relative_Edit extends BackboneElement {
	/** End position of the edit on the starting sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position. */
	end?: number;
	/** Extensions for end */
	_end?: Element;
	/** Allele in the starting sequence. Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the starting sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end. */
	replacedSequence?: string;
	/** Extensions for replacedSequence */
	_replacedSequence?: Element;
	/** Allele that was observed. Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the observed sequence. When the sequence type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end. */
	replacementSequence?: string;
	/** Extensions for replacementSequence */
	_replacementSequence?: Element;
	/** Start position of the edit on the starting sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive. */
	start?: number;
	/** Extensions for start */
	_start?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const MolecularSequence_Relative_EditSchemaInternal =
	BackboneElementSchemaInternal.extend({
		end: z.number().int().optional(),
		_end: z.lazy(getElementSchema).optional(),
		replacedSequence: fhirString().optional(),
		_replacedSequence: z.lazy(getElementSchema).optional(),
		replacementSequence: fhirString().optional(),
		_replacementSequence: z.lazy(getElementSchema).optional(),
		start: z.number().int().optional(),
		_start: z.lazy(getElementSchema).optional(),
	}).strict();

export const MolecularSequence_Relative_EditSchema =
	MolecularSequence_Relative_EditSchemaInternal as z.ZodType<MolecularSequence_Relative_Edit>;
