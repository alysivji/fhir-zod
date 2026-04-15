// Profile: http://hl7.org/fhir/StructureDefinition/MolecularSequence
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { MolecularSequence_Relative_Edit } from "./MolecularSequence_Relative_Edit";
import { MolecularSequence_Relative_EditSchemaInternal } from "./MolecularSequence_Relative_Edit";
import type { MolecularSequence_Relative_StartingSequence } from "./MolecularSequence_Relative_StartingSequence";
import { MolecularSequence_Relative_StartingSequenceSchemaInternal } from "./MolecularSequence_Relative_StartingSequence";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";

/** A sequence defined relative to another sequence. */
export interface MolecularSequence_Relative extends BackboneElement {
	/** These are different ways of identifying nucleotides or amino acids within a sequence. Different databases and file types may use different systems. For detail definitions, see https://loinc.org/92822-6/ for more detail. */
	coordinateSystem: CodeableConcept;
	/** Changes in sequence from the starting sequence. */
	edit?: Array<MolecularSequence_Relative_Edit>;
	/** Indicates the order in which the sequence should be considered when putting multiple 'relative' elements together. */
	ordinalPosition?: number;
	/** Extensions for ordinalPosition */
	_ordinalPosition?: Element;
	/** Indicates the nucleotide range in the composed sequence when multiple 'relative' elements are used together. */
	sequenceRange?: Range;
	/** A sequence that is used as a starting sequence to describe variants that are present in a sequence analyzed. */
	startingSequence?: MolecularSequence_Relative_StartingSequence;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getMolecularSequence_Relative_EditSchema =
	(): z.ZodType<MolecularSequence_Relative_Edit> =>
		MolecularSequence_Relative_EditSchemaInternal as z.ZodType<MolecularSequence_Relative_Edit>;
const getMolecularSequence_Relative_StartingSequenceSchema =
	(): z.ZodType<MolecularSequence_Relative_StartingSequence> =>
		MolecularSequence_Relative_StartingSequenceSchemaInternal as z.ZodType<MolecularSequence_Relative_StartingSequence>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;

/** @internal */
export const MolecularSequence_RelativeSchemaInternal =
	BackboneElementSchemaInternal.extend({
		coordinateSystem: z.lazy(getCodeableConceptSchema),
		edit: z.lazy(getMolecularSequence_Relative_EditSchema).array().optional(),
		ordinalPosition: z.number().int().optional(),
		_ordinalPosition: z.lazy(getElementSchema).optional(),
		sequenceRange: z.lazy(getRangeSchema).optional(),
		startingSequence: z
			.lazy(getMolecularSequence_Relative_StartingSequenceSchema)
			.optional(),
	}).strict();

export const MolecularSequence_RelativeSchema =
	MolecularSequence_RelativeSchemaInternal as z.ZodType<MolecularSequence_Relative>;
