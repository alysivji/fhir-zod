// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductPharmaceutical
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:00:42.795Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpecies_WithdrawalPeriod } from "./MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpecies_WithdrawalPeriod";
import { MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpecies_WithdrawalPeriodSchemaInternal } from "./MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpecies_WithdrawalPeriod";

/** A species for which this route applies. */
export interface MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpecies
  extends BackboneElement {
  /** Coded expression for the species. */
  code: CodeableConcept;
  /** A species specific time during which consumption of animal product is not appropriate. */
  withdrawalPeriod?: Array<MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpecies_WithdrawalPeriod>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getMedicinalProductPharmaceutical_RouteOfAdministration_TargetSpecies_WithdrawalPeriodSchema =
  (): z.ZodType<MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpecies_WithdrawalPeriod> =>
    MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpecies_WithdrawalPeriodSchemaInternal as z.ZodType<MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpecies_WithdrawalPeriod>;

/** @internal */
export const MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpeciesSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema),
    withdrawalPeriod: z
      .lazy(
        getMedicinalProductPharmaceutical_RouteOfAdministration_TargetSpecies_WithdrawalPeriodSchema,
      )
      .array()
      .optional(),
  }).strict();

export const MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpeciesSchema =
  MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpeciesSchemaInternal as z.ZodType<MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpecies>;
