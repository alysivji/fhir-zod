// Source: https://hl7.org/fhir/STU3/sequence-definitions.html#Sequence.quality
// Profile: http://hl7.org/fhir/StructureDefinition/Sequence
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";

/** An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)). */
export interface Sequence_Quality extends BackboneElement {
  /** End position of the sequence.If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position. */
  end?: number;
  /** Extensions for end */
  _end?: Element;
  /** Harmonic mean of Recall and Precision, computed as: 2 * precision * recall / (precision + recall). */
  fScore?: number;
  /** Extensions for fScore */
  _fScore?: Element;
  /** The number of false positives where the non-REF alleles in the Truth and Query Call Sets match (i.e. cases where the truth is 1/1 and the query is 0/1 or similar). */
  gtFP?: number;
  /** Extensions for gtFP */
  _gtFP?: Element;
  /** Which method is used to get sequence quality. */
  method?: CodeableConcept;
  /** QUERY.TP / (QUERY.TP + QUERY.FP). */
  precision?: number;
  /** Extensions for precision */
  _precision?: Element;
  /** False positives, i.e. the number of sites in the Query Call Set for which there is no path through the Truth Call Set that is consistent with this site. Sites with correct variant but incorrect genotype are counted here. */
  queryFP?: number;
  /** Extensions for queryFP */
  _queryFP?: Element;
  /** True positives, from the perspective of the query data, i.e. the number of sites in the Query Call Set for which there are paths through the Truth Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event. */
  queryTP?: number;
  /** Extensions for queryTP */
  _queryTP?: Element;
  /** TRUTH.TP / (TRUTH.TP + TRUTH.FN). */
  recall?: number;
  /** Extensions for recall */
  _recall?: Element;
  /** The score of an experimentally derived feature such as a p-value ([SO:0001685](http://www.sequenceontology.org/browser/current_svn/term/SO:0001685)). */
  score?: Quantity;
  /** Gold standard sequence used for comparing against. */
  standardSequence?: CodeableConcept;
  /** Start position of the sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive. */
  start?: number;
  /** Extensions for start */
  _start?: Element;
  /** False negatives, i.e. the number of sites in the Truth Call Set for which there is no path through the Query Call Set that is consistent with all of the alleles at this site, or sites for which there is an inaccurate genotype call for the event. Sites with correct variant but incorrect genotype are counted here. */
  truthFN?: number;
  /** Extensions for truthFN */
  _truthFN?: Element;
  /** True positives, from the perspective of the truth data, i.e. the number of sites in the Truth Call Set for which there are paths through the Query Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event. */
  truthTP?: number;
  /** Extensions for truthTP */
  _truthTP?: Element;
  /** INDEL / SNP / Undefined variant. */
  type: "indel" | "snp" | "unknown";
  /** Extensions for type */
  _type?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const Sequence_QualitySchemaInternal =
  BackboneElementSchemaInternal.extend({
    end: z.number().int().optional(),
    _end: z.lazy(getElementSchema).optional(),
    fScore: z.number().optional(),
    _fScore: z.lazy(getElementSchema).optional(),
    gtFP: z.number().optional(),
    _gtFP: z.lazy(getElementSchema).optional(),
    method: z.lazy(getCodeableConceptSchema).optional(),
    precision: z.number().optional(),
    _precision: z.lazy(getElementSchema).optional(),
    queryFP: z.number().optional(),
    _queryFP: z.lazy(getElementSchema).optional(),
    queryTP: z.number().optional(),
    _queryTP: z.lazy(getElementSchema).optional(),
    recall: z.number().optional(),
    _recall: z.lazy(getElementSchema).optional(),
    score: z.lazy(getQuantitySchema).optional(),
    standardSequence: z.lazy(getCodeableConceptSchema).optional(),
    start: z.number().int().optional(),
    _start: z.lazy(getElementSchema).optional(),
    truthFN: z.number().optional(),
    _truthFN: z.lazy(getElementSchema).optional(),
    truthTP: z.number().optional(),
    _truthTP: z.lazy(getElementSchema).optional(),
    type: z.enum(["indel", "snp", "unknown"]),
    _type: z.lazy(getElementSchema).optional(),
  }).strict();

export const Sequence_QualitySchema =
  Sequence_QualitySchemaInternal as z.ZodType<Sequence_Quality>;
