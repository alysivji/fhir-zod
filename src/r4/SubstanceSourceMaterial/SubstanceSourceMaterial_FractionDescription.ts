// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceSourceMaterial
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels. */
export interface SubstanceSourceMaterial_FractionDescription
  extends BackboneElement {
  /** This element is capturing information about the fraction of a plant part, or human plasma for fractionation. */
  fraction?: string;
  /** Extensions for fraction */
  _fraction?: Element;
  /** The specific type of the material constituting the component. For Herbal preparations the particulars of the extracts (liquid/dry) is described in Specified Substance Group 1. */
  materialType?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const SubstanceSourceMaterial_FractionDescriptionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    fraction: fhirString().optional(),
    _fraction: z.lazy(getElementSchema).optional(),
    materialType: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const SubstanceSourceMaterial_FractionDescriptionSchema =
  SubstanceSourceMaterial_FractionDescriptionSchemaInternal as z.ZodType<SubstanceSourceMaterial_FractionDescription>;
