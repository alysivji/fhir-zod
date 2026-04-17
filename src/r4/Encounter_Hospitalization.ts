// Profile: http://hl7.org/fhir/StructureDefinition/Encounter
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Details about the admission to a healthcare service. */
export interface Encounter_Hospitalization extends BackboneElement {
  /** From where patient was admitted (physician referral, transfer). */
  admitSource?: CodeableConcept;
  /** Location/organization to which the patient is discharged. */
  destination?: Reference;
  /** Diet preferences reported by the patient. */
  dietPreference?: Array<CodeableConcept>;
  /** Category or kind of location after discharge. */
  dischargeDisposition?: CodeableConcept;
  /** The location/organization from which the patient came before admission. */
  origin?: Reference;
  /** Pre-admission identifier. */
  preAdmissionIdentifier?: Identifier;
  /** Whether this hospitalization is a readmission and why if known. */
  reAdmission?: CodeableConcept;
  /** Any special requests that have been made for this hospitalization encounter, such as the provision of specific equipment or other things. */
  specialArrangement?: Array<CodeableConcept>;
  /** Special courtesies (VIP, board member). */
  specialCourtesy?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Encounter_HospitalizationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    admitSource: z.lazy(getCodeableConceptSchema).optional(),
    destination: z.lazy(getReferenceSchema).optional(),
    dietPreference: z.lazy(getCodeableConceptSchema).array().optional(),
    dischargeDisposition: z.lazy(getCodeableConceptSchema).optional(),
    origin: z.lazy(getReferenceSchema).optional(),
    preAdmissionIdentifier: z.lazy(getIdentifierSchema).optional(),
    reAdmission: z.lazy(getCodeableConceptSchema).optional(),
    specialArrangement: z.lazy(getCodeableConceptSchema).array().optional(),
    specialCourtesy: z.lazy(getCodeableConceptSchema).array().optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.destination,
        "destination",
        [
          "http://hl7.org/fhir/StructureDefinition/Location",
          "http://hl7.org/fhir/StructureDefinition/Organization",
        ],
        ["Location", "Organization"],
        ctx,
      );
      validateReferenceTarget(
        record.origin,
        "origin",
        [
          "http://hl7.org/fhir/StructureDefinition/Location",
          "http://hl7.org/fhir/StructureDefinition/Organization",
        ],
        ["Location", "Organization"],
        ctx,
      );
    });

export const Encounter_HospitalizationSchema =
  Encounter_HospitalizationSchemaInternal as z.ZodType<Encounter_Hospitalization>;
