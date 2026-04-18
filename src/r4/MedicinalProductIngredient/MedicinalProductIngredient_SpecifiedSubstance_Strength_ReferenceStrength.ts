// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductIngredient
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
import type { Ratio } from "../Ratio";
import { RatioSchemaInternal } from "../Ratio";

/** Strength expressed in terms of a reference substance. */
export interface MedicinalProductIngredient_SpecifiedSubstance_Strength_ReferenceStrength
  extends BackboneElement {
  /** The country or countries for which the strength range applies. */
  country?: Array<CodeableConcept>;
  /** For when strength is measured at a particular point or distance. */
  measurementPoint?: string;
  /** Extensions for measurementPoint */
  _measurementPoint?: Element;
  /** Strength expressed in terms of a reference substance. */
  strength: Ratio;
  /** Strength expressed in terms of a reference substance. */
  strengthLowLimit?: Ratio;
  /** Relevant reference substance. */
  substance?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getRatioSchema = (): z.ZodType<Ratio> =>
  RatioSchemaInternal as z.ZodType<Ratio>;

/** @internal */
export const MedicinalProductIngredient_SpecifiedSubstance_Strength_ReferenceStrengthSchemaInternal =
  BackboneElementSchemaInternal.extend({
    country: z.lazy(getCodeableConceptSchema).array().optional(),
    measurementPoint: fhirString().optional(),
    _measurementPoint: z.lazy(getElementSchema).optional(),
    strength: z.lazy(getRatioSchema),
    strengthLowLimit: z.lazy(getRatioSchema).optional(),
    substance: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const MedicinalProductIngredient_SpecifiedSubstance_Strength_ReferenceStrengthSchema =
  MedicinalProductIngredient_SpecifiedSubstance_Strength_ReferenceStrengthSchemaInternal as z.ZodType<MedicinalProductIngredient_SpecifiedSubstance_Strength_ReferenceStrength>;
