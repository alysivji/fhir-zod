// Profile: http://hl7.org/fhir/StructureDefinition/MolecularSequence
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:04:05.932Z

import * as z from "zod";
import {
  fhirCode,
  fhirId,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { Attachment } from "../Attachment";
import { AttachmentSchemaInternal } from "../Attachment";
import type { DomainResource } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Extension } from "../Extension";
import { ExtensionSchemaInternal } from "../Extension";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { MolecularSequence_Relative } from "./MolecularSequence_Relative";
import { MolecularSequence_RelativeSchemaInternal } from "./MolecularSequence_Relative";

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
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getMolecularSequence_RelativeSchema =
  (): z.ZodType<MolecularSequence_Relative> =>
    MolecularSequence_RelativeSchemaInternal as z.ZodType<MolecularSequence_Relative>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const MolecularSequenceSchemaInternal = z
  .object({
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    device: z.lazy(getReferenceSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    focus: z.lazy(getReferenceSchema).array().optional(),
    formatted: z.lazy(getAttachmentSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    literal: fhirString().optional(),
    _literal: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    performer: z.lazy(getReferenceSchema).optional(),
    relative: z.lazy(getMolecularSequence_RelativeSchema).array().optional(),
    resourceType: z.literal("MolecularSequence"),
    specimen: z.lazy(getReferenceSchema).optional(),
    subject: z.lazy(getReferenceSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
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
