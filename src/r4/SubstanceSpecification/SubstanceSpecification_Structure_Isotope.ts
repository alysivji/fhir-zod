// Source: https://hl7.org/fhir/R4/substancespecification-definitions.html#SubstanceSpecification.structure.isotope
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { SubstanceSpecification_Structure_Isotope_MolecularWeight } from "./SubstanceSpecification_Structure_Isotope_MolecularWeight";
import { SubstanceSpecification_Structure_Isotope_MolecularWeightSchemaInternal } from "./SubstanceSpecification_Structure_Isotope_MolecularWeight";

/** Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio. */
export interface SubstanceSpecification_Structure_Isotope
  extends BackboneElement {
  /** Half life - for a non-natural nuclide. */
  halfLife?: Quantity;
  /** Substance identifier for each non-natural or radioisotope. */
  identifier?: Identifier;
  /** The molecular weight or weight range (for proteins, polymers or nucleic acids). */
  molecularWeight?: SubstanceSpecification_Structure_Isotope_MolecularWeight;
  /** Substance name for each non-natural or radioisotope. */
  name?: CodeableConcept;
  /** The type of isotopic substitution present in a single substance. */
  substitution?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getSubstanceSpecification_Structure_Isotope_MolecularWeightSchema =
  (): z.ZodType<SubstanceSpecification_Structure_Isotope_MolecularWeight> =>
    SubstanceSpecification_Structure_Isotope_MolecularWeightSchemaInternal as z.ZodType<SubstanceSpecification_Structure_Isotope_MolecularWeight>;

/** @internal */
export const SubstanceSpecification_Structure_IsotopeSchemaInternal =
  BackboneElementSchemaInternal.extend({
    halfLife: z.lazy(getQuantitySchema).optional(),
    identifier: z.lazy(getIdentifierSchema).optional(),
    molecularWeight: z
      .lazy(getSubstanceSpecification_Structure_Isotope_MolecularWeightSchema)
      .optional(),
    name: z.lazy(getCodeableConceptSchema).optional(),
    substitution: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const SubstanceSpecification_Structure_IsotopeSchema =
  SubstanceSpecification_Structure_IsotopeSchemaInternal as z.ZodType<SubstanceSpecification_Structure_Isotope>;
