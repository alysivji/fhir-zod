// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductPharmaceutical
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Duration } from "./Duration";
import { DurationSchemaInternal } from "./Duration";
import type { MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpecies } from "./MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpecies";
import { MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpeciesSchemaInternal } from "./MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpecies";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Ratio } from "./Ratio";
import { RatioSchemaInternal } from "./Ratio";

/** The path by which the pharmaceutical product is taken into or makes contact with the body. */
export interface MedicinalProductPharmaceutical_RouteOfAdministration
  extends BackboneElement {
  /** Coded expression for the route. */
  code: CodeableConcept;
  /** The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement. */
  firstDose?: Quantity;
  /** The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation. */
  maxDosePerDay?: Quantity;
  /** The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation. */
  maxDosePerTreatmentPeriod?: Ratio;
  /** The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement. */
  maxSingleDose?: Quantity;
  /** The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation. */
  maxTreatmentPeriod?: Duration;
  /** A species for which this route applies. */
  targetSpecies?: Array<MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpecies>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDurationSchema = (): z.ZodType<Duration> =>
  DurationSchemaInternal as z.ZodType<Duration>;
const getMedicinalProductPharmaceutical_RouteOfAdministration_TargetSpeciesSchema =
  (): z.ZodType<MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpecies> =>
    MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpeciesSchemaInternal as z.ZodType<MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpecies>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getRatioSchema = (): z.ZodType<Ratio> =>
  RatioSchemaInternal as z.ZodType<Ratio>;

/** @internal */
export const MedicinalProductPharmaceutical_RouteOfAdministrationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema),
    firstDose: z.lazy(getQuantitySchema).optional(),
    maxDosePerDay: z.lazy(getQuantitySchema).optional(),
    maxDosePerTreatmentPeriod: z.lazy(getRatioSchema).optional(),
    maxSingleDose: z.lazy(getQuantitySchema).optional(),
    maxTreatmentPeriod: z.lazy(getDurationSchema).optional(),
    targetSpecies: z
      .lazy(
        getMedicinalProductPharmaceutical_RouteOfAdministration_TargetSpeciesSchema,
      )
      .array()
      .optional(),
  }).strict();

export const MedicinalProductPharmaceutical_RouteOfAdministrationSchema =
  MedicinalProductPharmaceutical_RouteOfAdministrationSchemaInternal as z.ZodType<MedicinalProductPharmaceutical_RouteOfAdministration>;
