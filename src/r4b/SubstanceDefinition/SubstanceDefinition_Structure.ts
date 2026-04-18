// Source: https://hl7.org/fhir/R4B/substancedefinition-definitions.html#SubstanceDefinition.structure
// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

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
import type { SubstanceDefinition_Structure_Representation } from "./SubstanceDefinition_Structure_Representation";
import { SubstanceDefinition_Structure_RepresentationSchemaInternal } from "./SubstanceDefinition_Structure_Representation";

/** Structural information. */
export interface SubstanceDefinition_Structure extends BackboneElement {
  /** Molecular formula of this substance, typically using the Hill system. */
  molecularFormula?: string;
  /** Extensions for molecularFormula */
  _molecularFormula?: Element;
  /** Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot. */
  molecularFormulaByMoiety?: string;
  /** Extensions for molecularFormulaByMoiety */
  _molecularFormulaByMoiety?: Element;
  /** The molecular weight or weight range (for proteins, polymers or nucleic acids). */
  molecularWeight?: unknown;
  /** Optical activity type. */
  opticalActivity?: CodeableConcept;
  /** A depiction of the structure or characterization of the substance. */
  representation?: Array<SubstanceDefinition_Structure_Representation>;
  /** The source of information about the structure. */
  sourceDocument?: Array<Reference>;
  /** Stereochemistry type. */
  stereochemistry?: CodeableConcept;
  /** The method used to elucidate the structure or characterization of the drug substance. Examples: X-ray, HPLC, NMR, Peptide mapping, Ligand binding assay. */
  technique?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getSubstanceDefinition_Structure_RepresentationSchema =
  (): z.ZodType<SubstanceDefinition_Structure_Representation> =>
    SubstanceDefinition_Structure_RepresentationSchemaInternal as z.ZodType<SubstanceDefinition_Structure_Representation>;

/** @internal */
export const SubstanceDefinition_StructureSchemaInternal =
  BackboneElementSchemaInternal.extend({
    molecularFormula: fhirString().optional(),
    _molecularFormula: z.lazy(getElementSchema).optional(),
    molecularFormulaByMoiety: fhirString().optional(),
    _molecularFormulaByMoiety: z.lazy(getElementSchema).optional(),
    molecularWeight: z.unknown().optional(),
    opticalActivity: z.lazy(getCodeableConceptSchema).optional(),
    representation: z
      .lazy(getSubstanceDefinition_Structure_RepresentationSchema)
      .array()
      .optional(),
    sourceDocument: z.lazy(getReferenceSchema).array().optional(),
    stereochemistry: z.lazy(getCodeableConceptSchema).optional(),
    technique: z.lazy(getCodeableConceptSchema).array().optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.sourceDocument,
        "sourceDocument",
        ["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
        ["DocumentReference"],
        ctx,
      );
    });

export const SubstanceDefinition_StructureSchema =
  SubstanceDefinition_StructureSchemaInternal as z.ZodType<SubstanceDefinition_Structure>;
