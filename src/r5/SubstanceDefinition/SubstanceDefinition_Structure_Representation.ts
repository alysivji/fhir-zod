// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceDefinition
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

/** A depiction of the structure of the substance. */
export interface SubstanceDefinition_Structure_Representation
  extends BackboneElement {
  /** An attached file with the structural representation e.g. a molecular structure graphic of the substance, a JCAMP or AnIML file. */
  document?: Reference;
  /** The format of the representation e.g. InChI, SMILES, MOLFILE, CDX, SDF, PDB, mmCIF. The logical content type rather than the physical file format of a document. */
  format?: CodeableConcept;
  /** The structural representation as a text string in a standard format. */
  representation?: string;
  /** Extensions for representation */
  _representation?: Element;
  /** The kind of structural representation (e.g. full, partial). */
  type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const SubstanceDefinition_Structure_RepresentationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    document: z.lazy(getReferenceSchema).optional(),
    format: z.lazy(getCodeableConceptSchema).optional(),
    representation: fhirString().optional(),
    _representation: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.document,
        "document",
        ["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
        ["DocumentReference"],
        ctx,
      );
    });

export const SubstanceDefinition_Structure_RepresentationSchema =
  SubstanceDefinition_Structure_RepresentationSchemaInternal as z.ZodType<SubstanceDefinition_Structure_Representation>;
