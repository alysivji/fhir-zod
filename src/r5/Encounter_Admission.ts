// Profile: http://hl7.org/fhir/StructureDefinition/Encounter
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

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

/** Details about the stay during which a healthcare service is provided.This does not describe the event of admitting the patient, but rather any information that is relevant from the time of admittance until the time of discharge. */
export interface Encounter_Admission extends BackboneElement {
  /** From where patient was admitted (physician referral, transfer). */
  admitSource?: CodeableConcept;
  /** Location/organization to which the patient is discharged. */
  destination?: Reference;
  /** Category or kind of location after discharge. */
  dischargeDisposition?: CodeableConcept;
  /** The location/organization from which the patient came before admission. */
  origin?: Reference;
  /** Pre-admission identifier. */
  preAdmissionIdentifier?: Identifier;
  /** Indicates that this encounter is directly related to a prior admission, often because the conditions addressed in the prior admission were not fully addressed. */
  reAdmission?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Encounter_AdmissionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    admitSource: z.lazy(getCodeableConceptSchema).optional(),
    destination: z.lazy(getReferenceSchema).optional(),
    dischargeDisposition: z.lazy(getCodeableConceptSchema).optional(),
    origin: z.lazy(getReferenceSchema).optional(),
    preAdmissionIdentifier: z.lazy(getIdentifierSchema).optional(),
    reAdmission: z.lazy(getCodeableConceptSchema).optional(),
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

export const Encounter_AdmissionSchema =
  Encounter_AdmissionSchemaInternal as z.ZodType<Encounter_Admission>;
