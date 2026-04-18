// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductPharmaceutical
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:00:42.795Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";

/** Characteristics e.g. a products onset of action. */
export interface MedicinalProductPharmaceutical_Characteristics
  extends BackboneElement {
  /** A coded characteristic. */
  code: CodeableConcept;
  /** The status of characteristic e.g. assigned or pending. */
  status?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const MedicinalProductPharmaceutical_CharacteristicsSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema),
    status: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const MedicinalProductPharmaceutical_CharacteristicsSchema =
  MedicinalProductPharmaceutical_CharacteristicsSchemaInternal as z.ZodType<MedicinalProductPharmaceutical_Characteristics>;
