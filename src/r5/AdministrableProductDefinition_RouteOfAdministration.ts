// Profile: http://hl7.org/fhir/StructureDefinition/AdministrableProductDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import type { AdministrableProductDefinition_RouteOfAdministration_TargetSpecies } from "./AdministrableProductDefinition_RouteOfAdministration_TargetSpecies";
import { AdministrableProductDefinition_RouteOfAdministration_TargetSpeciesSchemaInternal } from "./AdministrableProductDefinition_RouteOfAdministration_TargetSpecies";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Duration } from "./Duration";
import { DurationSchemaInternal } from "./Duration";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Ratio } from "./Ratio";
import { RatioSchemaInternal } from "./Ratio";

/** The path by which the product is taken into or makes contact with the body. In some regions this is referred to as the licenced or approved route. RouteOfAdministration cannot be used when the 'formOf' product already uses MedicinalProductDefinition.route (and vice versa). */
export interface AdministrableProductDefinition_RouteOfAdministration
  extends BackboneElement {
  /** Coded expression for the route. */
  code: CodeableConcept;
  /** The first dose (dose quantity) administered can be specified for the product, using a numerical value and its unit of measurement. */
  firstDose?: Quantity;
  /** The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered. */
  maxDosePerDay?: Quantity;
  /** The maximum dose per treatment period that can be administered. */
  maxDosePerTreatmentPeriod?: Ratio;
  /** The maximum single dose that can be administered, specified using a numerical value and its unit of measurement. */
  maxSingleDose?: Quantity;
  /** The maximum treatment period during which the product can be administered. */
  maxTreatmentPeriod?: Duration;
  /** A species for which this route applies. */
  targetSpecies?: Array<AdministrableProductDefinition_RouteOfAdministration_TargetSpecies>;
}

const getAdministrableProductDefinition_RouteOfAdministration_TargetSpeciesSchema =
  (): z.ZodType<AdministrableProductDefinition_RouteOfAdministration_TargetSpecies> =>
    AdministrableProductDefinition_RouteOfAdministration_TargetSpeciesSchemaInternal as z.ZodType<AdministrableProductDefinition_RouteOfAdministration_TargetSpecies>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDurationSchema = (): z.ZodType<Duration> =>
  DurationSchemaInternal as z.ZodType<Duration>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getRatioSchema = (): z.ZodType<Ratio> =>
  RatioSchemaInternal as z.ZodType<Ratio>;

/** @internal */
export const AdministrableProductDefinition_RouteOfAdministrationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema),
    firstDose: z.lazy(getQuantitySchema).optional(),
    maxDosePerDay: z.lazy(getQuantitySchema).optional(),
    maxDosePerTreatmentPeriod: z.lazy(getRatioSchema).optional(),
    maxSingleDose: z.lazy(getQuantitySchema).optional(),
    maxTreatmentPeriod: z.lazy(getDurationSchema).optional(),
    targetSpecies: z
      .lazy(
        getAdministrableProductDefinition_RouteOfAdministration_TargetSpeciesSchema,
      )
      .array()
      .optional(),
  }).strict();

export const AdministrableProductDefinition_RouteOfAdministrationSchema =
  AdministrableProductDefinition_RouteOfAdministrationSchemaInternal as z.ZodType<AdministrableProductDefinition_RouteOfAdministration>;
