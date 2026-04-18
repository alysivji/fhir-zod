// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";

/** Information that only applies to packages (not products). */
export interface MedicationKnowledge_Packaging extends BackboneElement {
  /** The number of product units the package would contain if fully loaded. */
  quantity?: Quantity;
  /** A code that defines the specific type of packaging that the medication can be found in (e.g. blister sleeve, tube, bottle). */
  type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const MedicationKnowledge_PackagingSchemaInternal =
  BackboneElementSchemaInternal.extend({
    quantity: z.lazy(getQuantitySchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const MedicationKnowledge_PackagingSchema =
  MedicationKnowledge_PackagingSchemaInternal as z.ZodType<MedicationKnowledge_Packaging>;
