// Profile: http://hl7.org/fhir/StructureDefinition/MolecularSequence
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** A sequence that is used as a starting sequence to describe variants that are present in a sequence analyzed. */
export interface MolecularSequence_Relative_StartingSequence
  extends BackboneElement {
  /** Structural unit composed of a nucleic acid molecule which controls its own replication through the interaction of specific proteins at one or more origins of replication ([SO:0000340](http://www.sequenceontology.org/browser/current_svn/term/SO:0000340)). */
  chromosome?: CodeableConcept;
  /** The genome assembly used for starting sequence, e.g. GRCh38. */
  genomeAssembly?: CodeableConcept;
  /** A relative reference to a DNA strand based on gene orientation. The strand that contains the open reading frame of the gene is the "sense" strand, and the opposite complementary strand is the "antisense" strand. */
  orientation?: "antisense" | "sense";
  /** Extensions for orientation */
  _orientation?: Element;
  /** The reference sequence that represents the starting sequence. */
  sequenceCodeableConcept?: CodeableConcept;
  /** The reference sequence that represents the starting sequence. */
  sequenceReference?: Reference;
  /** The reference sequence that represents the starting sequence. */
  sequenceString?: string;
  /** Extensions for sequenceString */
  _sequenceString?: Element;
  /** An absolute reference to a strand. The Watson strand is the strand whose 5'-end is on the short arm of the chromosome, and the Crick strand as the one whose 5'-end is on the long arm. */
  strand?: "crick" | "watson";
  /** Extensions for strand */
  _strand?: Element;
  /** End position of the window on the starting sequence. This value should honor the rules of the  coordinateSystem. */
  windowEnd?: number;
  /** Extensions for windowEnd */
  _windowEnd?: Element;
  /** Start position of the window on the starting sequence. This value should honor the rules of the coordinateSystem. */
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
export const MolecularSequence_Relative_StartingSequenceSchemaInternal =
  BackboneElementSchemaInternal.extend({
    chromosome: z.lazy(getCodeableConceptSchema).optional(),
    genomeAssembly: z.lazy(getCodeableConceptSchema).optional(),
    orientation: z.enum(["antisense", "sense"]).optional(),
    _orientation: z.lazy(getElementSchema).optional(),
    sequenceCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    sequenceReference: z.lazy(getReferenceSchema).optional(),
    sequenceString: fhirString().optional(),
    _sequenceString: z.lazy(getElementSchema).optional(),
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
      const sequence_x_Present = [
        "sequenceCodeableConcept",
        "sequenceReference",
        "sequenceString",
      ].filter((field) => record[field] !== undefined);
      if (sequence_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of sequenceCodeableConcept, sequenceReference, sequenceString may be present for sequence[x]",
          path: [sequence_x_Present[0]],
        });
      }
      validateReferenceTarget(
        record.sequenceReference,
        "sequenceReference",
        ["http://hl7.org/fhir/StructureDefinition/MolecularSequence"],
        ["MolecularSequence"],
        ctx,
      );
    });

export const MolecularSequence_Relative_StartingSequenceSchema =
  MolecularSequence_Relative_StartingSequenceSchemaInternal as z.ZodType<MolecularSequence_Relative_StartingSequence>;
