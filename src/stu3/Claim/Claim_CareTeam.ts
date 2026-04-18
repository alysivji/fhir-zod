// Source: https://hl7.org/fhir/STU3/claim-definitions.html#Claim.careTeam
// Profile: http://hl7.org/fhir/StructureDefinition/Claim
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** The members of the team who provided the overall service as well as their role and whether responsible and qualifications. */
export interface Claim_CareTeam extends BackboneElement {
  /** Member of the team who provided the overall service. */
  provider: Reference;
  /** The qualification which is applicable for this service. */
  qualification?: CodeableConcept;
  /** The party who is billing and responsible for the claimed good or service rendered to the patient. */
  responsible?: boolean;
  /** Extensions for responsible */
  _responsible?: Element;
  /** The lead, assisting or supervising practitioner and their discipline if a multidisiplinary team. */
  role?: CodeableConcept;
  /** Sequence of the careTeam which serves to order and provide a link. */
  sequence: number;
  /** Extensions for sequence */
  _sequence?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Claim_CareTeamSchemaInternal =
  BackboneElementSchemaInternal.extend({
    provider: z.lazy(getReferenceSchema),
    qualification: z.lazy(getCodeableConceptSchema).optional(),
    responsible: z.boolean().optional(),
    _responsible: z.lazy(getElementSchema).optional(),
    role: z.lazy(getCodeableConceptSchema).optional(),
    sequence: z.number().int().positive(),
    _sequence: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.provider,
        "provider",
        [
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
        ],
        ["Organization", "Practitioner"],
        ctx,
      );
    });

export const Claim_CareTeamSchema =
  Claim_CareTeamSchemaInternal as z.ZodType<Claim_CareTeam>;
