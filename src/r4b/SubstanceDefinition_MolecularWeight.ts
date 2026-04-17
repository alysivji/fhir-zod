// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-17T23:33:05.787Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** The molecular weight or weight range (for proteins, polymers or nucleic acids). */
export interface SubstanceDefinition_MolecularWeight extends BackboneElement {
  /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field. */
  amount: Quantity;
  /** The method by which the molecular weight was determined. */
  method?: CodeableConcept;
  /** Type of molecular weight such as exact, average (also known as. number average), weight average. */
  type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const SubstanceDefinition_MolecularWeightSchemaInternal =
  BackboneElementSchemaInternal.extend({
    amount: z.lazy(getQuantitySchema),
    method: z.lazy(getCodeableConceptSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const SubstanceDefinition_MolecularWeightSchema =
  SubstanceDefinition_MolecularWeightSchemaInternal as z.ZodType<SubstanceDefinition_MolecularWeight>;
