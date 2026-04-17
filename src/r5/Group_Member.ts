// Profile: http://hl7.org/fhir/StructureDefinition/Group
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Identifies the resource instances that are members of the group. */
export interface Group_Member extends BackboneElement {
  /** A reference to the entity that is a member of the group. Must be consistent with Group.type. If the entity is another group, then the type must be the same. */
  entity: Reference;
  /** A flag to indicate that the member is no longer in the group, but previously may have been a member. */
  inactive?: boolean;
  /** Extensions for inactive */
  _inactive?: Element;
  /** The period that the member was in the group, if known. */
  period?: Period;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Group_MemberSchemaInternal = BackboneElementSchemaInternal.extend({
  entity: z.lazy(getReferenceSchema),
  inactive: z.boolean().optional(),
  _inactive: z.lazy(getElementSchema).optional(),
  period: z.lazy(getPeriodSchema).optional(),
})
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.entity,
      "entity",
      [
        "http://hl7.org/fhir/StructureDefinition/CareTeam",
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/Group",
        "http://hl7.org/fhir/StructureDefinition/HealthcareService",
        "http://hl7.org/fhir/StructureDefinition/Location",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        "http://hl7.org/fhir/StructureDefinition/Specimen",
      ],
      [
        "CareTeam",
        "Device",
        "Group",
        "HealthcareService",
        "Location",
        "Organization",
        "Patient",
        "Practitioner",
        "PractitionerRole",
        "RelatedPerson",
        "Specimen",
      ],
      ctx,
    );
  });

export const Group_MemberSchema =
  Group_MemberSchemaInternal as z.ZodType<Group_Member>;
