// Profile: http://hl7.org/fhir/StructureDefinition/PlanDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirCanonical } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The characteristics of the candidates that could serve as the actor. */
export interface PlanDefinition_Actor_Option extends BackboneElement {
  /** The role the participant should play in performing the described action. */
  role?: CodeableConcept;
  /** The type of participant in the action. */
  type?:
    | "careteam"
    | "device"
    | "group"
    | "healthcareservice"
    | "location"
    | "organization"
    | "patient"
    | "practitioner"
    | "practitionerrole"
    | "relatedperson";
  /** Extensions for type */
  _type?: Element;
  /** The type of participant in the action. */
  typeCanonical?: string;
  /** Extensions for typeCanonical */
  _typeCanonical?: Element;
  /** The type of participant in the action. */
  typeReference?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const PlanDefinition_Actor_OptionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    role: z.lazy(getCodeableConceptSchema).optional(),
    type: z
      .enum([
        "careteam",
        "device",
        "group",
        "healthcareservice",
        "location",
        "organization",
        "patient",
        "practitioner",
        "practitionerrole",
        "relatedperson",
      ])
      .optional(),
    _type: z.lazy(getElementSchema).optional(),
    typeCanonical: fhirCanonical().optional(),
    _typeCanonical: z.lazy(getElementSchema).optional(),
    typeReference: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.typeReference,
        "typeReference",
        [
          "http://hl7.org/fhir/StructureDefinition/CareTeam",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/DeviceDefinition",
          "http://hl7.org/fhir/StructureDefinition/Endpoint",
          "http://hl7.org/fhir/StructureDefinition/Group",
          "http://hl7.org/fhir/StructureDefinition/HealthcareService",
          "http://hl7.org/fhir/StructureDefinition/Location",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
        [
          "CareTeam",
          "Device",
          "DeviceDefinition",
          "Endpoint",
          "Group",
          "HealthcareService",
          "Location",
          "Organization",
          "Patient",
          "Practitioner",
          "PractitionerRole",
          "RelatedPerson",
        ],
        ctx,
      );
    });

export const PlanDefinition_Actor_OptionSchema =
  PlanDefinition_Actor_OptionSchemaInternal as z.ZodType<PlanDefinition_Actor_Option>;
