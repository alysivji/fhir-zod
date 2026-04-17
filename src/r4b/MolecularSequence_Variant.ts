// Profile: http://hl7.org/fhir/StructureDefinition/MolecularSequence
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-17T23:33:05.787Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string. */
export interface MolecularSequence_Variant extends BackboneElement {
  /** Extended CIGAR string for aligning the sequence with reference bases. See detailed documentation [here](http://support.illumina.com/help/SequencingAnalysisWorkflow/Content/Vault/Informatics/Sequencing_Analysis/CASAVA/swSEQ_mCA_ExtendedCIGARFormat.htm). */
  cigar?: string;
  /** Extensions for cigar */
  _cigar?: Element;
  /** End position of the variant on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position. */
  end?: number;
  /** Extensions for end */
  _end?: Element;
  /** An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)).  Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the observed  sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end. */
  observedAllele?: string;
  /** Extensions for observedAllele */
  _observedAllele?: Element;
  /** An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)). Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the reference sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end. */
  referenceAllele?: string;
  /** Extensions for referenceAllele */
  _referenceAllele?: Element;
  /** Start position of the variant on the  reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive. */
  start?: number;
  /** Extensions for start */
  _start?: Element;
  /** A pointer to an Observation containing variant information. */
  variantPointer?: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MolecularSequence_VariantSchemaInternal =
  BackboneElementSchemaInternal.extend({
    cigar: fhirString().optional(),
    _cigar: z.lazy(getElementSchema).optional(),
    end: z.number().int().optional(),
    _end: z.lazy(getElementSchema).optional(),
    observedAllele: fhirString().optional(),
    _observedAllele: z.lazy(getElementSchema).optional(),
    referenceAllele: fhirString().optional(),
    _referenceAllele: z.lazy(getElementSchema).optional(),
    start: z.number().int().optional(),
    _start: z.lazy(getElementSchema).optional(),
    variantPointer: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.variantPointer,
        "variantPointer",
        ["http://hl7.org/fhir/StructureDefinition/Observation"],
        ["Observation"],
        ctx,
      );
    });

export const MolecularSequence_VariantSchema =
  MolecularSequence_VariantSchemaInternal as z.ZodType<MolecularSequence_Variant>;
