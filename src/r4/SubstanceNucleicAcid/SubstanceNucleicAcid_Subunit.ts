// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceNucleicAcid
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { Attachment } from "../Attachment";
import { AttachmentSchemaInternal } from "../Attachment";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { SubstanceNucleicAcid_Subunit_Linkage } from "./SubstanceNucleicAcid_Subunit_Linkage";
import { SubstanceNucleicAcid_Subunit_LinkageSchemaInternal } from "./SubstanceNucleicAcid_Subunit_Linkage";
import type { SubstanceNucleicAcid_Subunit_Sugar } from "./SubstanceNucleicAcid_Subunit_Sugar";
import { SubstanceNucleicAcid_Subunit_SugarSchemaInternal } from "./SubstanceNucleicAcid_Subunit_Sugar";

/** Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times. */
export interface SubstanceNucleicAcid_Subunit extends BackboneElement {
	/** The nucleotide present at the 5’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the first position in the sequence. A separate representation would be redundant. */
	fivePrime?: CodeableConcept;
	/** The length of the sequence shall be captured. */
	length?: number;
	/** Extensions for length */
	_length?: Element;
	/** The linkages between sugar residues will also be captured. */
	linkage?: Array<SubstanceNucleicAcid_Subunit_Linkage>;
	/** Actual nucleotide sequence notation from 5' to 3' end using standard single letter codes. In addition to the base sequence, sugar and type of phosphate or non-phosphate linkage should also be captured. */
	sequence?: string;
	/** Extensions for sequence */
	_sequence?: Element;
	/** (TBC). */
	sequenceAttachment?: Attachment;
	/** Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts. */
	subunit?: number;
	/** Extensions for subunit */
	_subunit?: Element;
	/** 5.3.6.8.1 Sugar ID (Mandatory). */
	sugar?: Array<SubstanceNucleicAcid_Subunit_Sugar>;
	/** The nucleotide present at the 3’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the last position in the sequence. A separate representation would be redundant. */
	threePrime?: CodeableConcept;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getSubstanceNucleicAcid_Subunit_LinkageSchema =
	(): z.ZodType<SubstanceNucleicAcid_Subunit_Linkage> =>
		SubstanceNucleicAcid_Subunit_LinkageSchemaInternal as z.ZodType<SubstanceNucleicAcid_Subunit_Linkage>;
const getSubstanceNucleicAcid_Subunit_SugarSchema =
	(): z.ZodType<SubstanceNucleicAcid_Subunit_Sugar> =>
		SubstanceNucleicAcid_Subunit_SugarSchemaInternal as z.ZodType<SubstanceNucleicAcid_Subunit_Sugar>;

/** @internal */
export const SubstanceNucleicAcid_SubunitSchemaInternal =
	BackboneElementSchemaInternal.extend({
		fivePrime: z.lazy(getCodeableConceptSchema).optional(),
		length: z.number().int().optional(),
		_length: z.lazy(getElementSchema).optional(),
		linkage: z
			.lazy(getSubstanceNucleicAcid_Subunit_LinkageSchema)
			.array()
			.optional(),
		sequence: fhirString().optional(),
		_sequence: z.lazy(getElementSchema).optional(),
		sequenceAttachment: z.lazy(getAttachmentSchema).optional(),
		subunit: z.number().int().optional(),
		_subunit: z.lazy(getElementSchema).optional(),
		sugar: z
			.lazy(getSubstanceNucleicAcid_Subunit_SugarSchema)
			.array()
			.optional(),
		threePrime: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const SubstanceNucleicAcid_SubunitSchema =
	SubstanceNucleicAcid_SubunitSchemaInternal as z.ZodType<SubstanceNucleicAcid_Subunit>;
