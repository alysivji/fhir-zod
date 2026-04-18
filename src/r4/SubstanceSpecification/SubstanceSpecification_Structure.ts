// Source: https://hl7.org/fhir/R4/substancespecification-definitions.html#SubstanceSpecification.structure
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

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
import type { SubstanceSpecification_Structure_Isotope } from "./SubstanceSpecification_Structure_Isotope";
import { SubstanceSpecification_Structure_IsotopeSchemaInternal } from "./SubstanceSpecification_Structure_Isotope";
import type { SubstanceSpecification_Structure_Representation } from "./SubstanceSpecification_Structure_Representation";
import { SubstanceSpecification_Structure_RepresentationSchemaInternal } from "./SubstanceSpecification_Structure_Representation";

/** Structural information. */
export interface SubstanceSpecification_Structure extends BackboneElement {
  /** Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio. */
  isotope?: Array<SubstanceSpecification_Structure_Isotope>;
  /** Molecular formula. */
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
  /** Molecular structural representation. */
  representation?: Array<SubstanceSpecification_Structure_Representation>;
  /** Supporting literature. */
  source?: Array<Reference>;
  /** Stereochemistry type. */
  stereochemistry?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getSubstanceSpecification_Structure_IsotopeSchema =
  (): z.ZodType<SubstanceSpecification_Structure_Isotope> =>
    SubstanceSpecification_Structure_IsotopeSchemaInternal as z.ZodType<SubstanceSpecification_Structure_Isotope>;
const getSubstanceSpecification_Structure_RepresentationSchema =
  (): z.ZodType<SubstanceSpecification_Structure_Representation> =>
    SubstanceSpecification_Structure_RepresentationSchemaInternal as z.ZodType<SubstanceSpecification_Structure_Representation>;

/** @internal */
export const SubstanceSpecification_StructureSchemaInternal =
  BackboneElementSchemaInternal.extend({
    isotope: z
      .lazy(getSubstanceSpecification_Structure_IsotopeSchema)
      .array()
      .optional(),
    molecularFormula: fhirString().optional(),
    _molecularFormula: z.lazy(getElementSchema).optional(),
    molecularFormulaByMoiety: fhirString().optional(),
    _molecularFormulaByMoiety: z.lazy(getElementSchema).optional(),
    molecularWeight: z.unknown().optional(),
    opticalActivity: z.lazy(getCodeableConceptSchema).optional(),
    representation: z
      .lazy(getSubstanceSpecification_Structure_RepresentationSchema)
      .array()
      .optional(),
    source: z.lazy(getReferenceSchema).array().optional(),
    stereochemistry: z.lazy(getCodeableConceptSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.source,
        "source",
        ["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
        ["DocumentReference"],
        ctx,
      );
    });

export const SubstanceSpecification_StructureSchema =
  SubstanceSpecification_StructureSchemaInternal as z.ZodType<SubstanceSpecification_Structure>;
