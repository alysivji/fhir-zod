// Profile: http://hl7.org/fhir/StructureDefinition/Patient
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:00:56.233Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";

/** This patient is known to be an animal. */
export interface Patient_Animal extends BackboneElement {
  /** Identifies the detailed categorization of the kind of animal. */
  breed?: CodeableConcept;
  /** Indicates the current state of the animal's reproductive organs. */
  genderStatus?: CodeableConcept;
  /** Identifies the high level taxonomic categorization of the kind of animal. */
  species: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const Patient_AnimalSchemaInternal =
  BackboneElementSchemaInternal.extend({
    breed: z.lazy(getCodeableConceptSchema).optional(),
    genderStatus: z.lazy(getCodeableConceptSchema).optional(),
    species: z.lazy(getCodeableConceptSchema),
  }).strict();

export const Patient_AnimalSchema =
  Patient_AnimalSchemaInternal as z.ZodType<Patient_Animal>;
