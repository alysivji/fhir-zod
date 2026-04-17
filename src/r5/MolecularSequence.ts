// Profile: http://hl7.org/fhir/StructureDefinition/MolecularSequence
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { MolecularSequence_Relative } from "./MolecularSequence_Relative";
import { MolecularSequence_RelativeSchemaInternal } from "./MolecularSequence_Relative";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Representation of a molecular sequence. */
export interface MolecularSequence extends DomainResource {
  /** The method for sequencing, for example, chip information. */
  device?: Reference;
  /** The actual focus of a molecular sequence when it is not the patient of record representing something or someone associated with the patient such as a spouse, parent, child, or sibling. For example, in trio testing, the subject would be the child (proband) and the focus would be the parent. */
  focus?: Array<Reference>;
  /** Sequence that was observed as file content. Can be an actual file contents, or referenced by a URL to an external system. */
  formatted?: Array<Attachment>;
  /** A unique identifier for this particular sequence instance. */
  identifier?: Array<Identifier>;
  /** Sequence that was observed. */
  literal?: string;
  /** Extensions for literal */
  _literal?: Element;
  /** The organization or lab that should be responsible for this result. */
  performer?: Reference;
  /** A sequence defined relative to another sequence. */
  relative?: Array<MolecularSequence_Relative>;
  /** This is a MolecularSequence resource. */
  resourceType: "MolecularSequence";
  /** Specimen used for sequencing. */
  specimen?: Reference;
  /** Indicates the subject this sequence is associated too. */
  subject?: Reference;
  /** Amino Acid Sequence/ DNA Sequence / RNA Sequence. */
  type?: "aa" | "dna" | "rna";
  /** Extensions for type */
  _type?: Element;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
  AttachmentSchemaInternal as z.ZodType<Attachment>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMolecularSequence_RelativeSchema =
  (): z.ZodType<MolecularSequence_Relative> =>
    MolecularSequence_RelativeSchemaInternal as z.ZodType<MolecularSequence_Relative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MolecularSequenceSchemaInternal =
  DomainResourceSchemaInternal.extend({
    device: z.lazy(getReferenceSchema).optional(),
    focus: z.lazy(getReferenceSchema).array().optional(),
    formatted: z.lazy(getAttachmentSchema).array().optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    literal: fhirString().optional(),
    _literal: z.lazy(getElementSchema).optional(),
    performer: z.lazy(getReferenceSchema).optional(),
    relative: z.lazy(getMolecularSequence_RelativeSchema).array().optional(),
    resourceType: z.literal("MolecularSequence"),
    specimen: z.lazy(getReferenceSchema).optional(),
    subject: z.lazy(getReferenceSchema).optional(),
    type: z.enum(["aa", "dna", "rna"]).optional(),
    _type: z.lazy(getElementSchema).optional(),
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
        record.focus,
        "focus",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
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
        record.specimen,
        "specimen",
        ["http://hl7.org/fhir/StructureDefinition/Specimen"],
        ["Specimen"],
        ctx,
      );
      validateReferenceTarget(
        record.subject,
        "subject",
        [
          "http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct",
          "http://hl7.org/fhir/StructureDefinition/Group",
          "http://hl7.org/fhir/StructureDefinition/NutritionProduct",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Substance",
        ],
        [
          "BiologicallyDerivedProduct",
          "Group",
          "NutritionProduct",
          "Patient",
          "Substance",
        ],
        ctx,
      );
    });

export const MolecularSequenceSchema =
  MolecularSequenceSchemaInternal as z.ZodType<MolecularSequence>;
