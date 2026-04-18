// Source: https://hl7.org/fhir/R5/group.html
// Profile: http://hl7.org/fhir/StructureDefinition/Group
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import {
  fhirCode,
  fhirId,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Extension } from "../Extension";
import { ExtensionSchemaInternal } from "../Extension";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Group_Characteristic } from "./Group_Characteristic";
import { Group_CharacteristicSchemaInternal } from "./Group_Characteristic";
import type { Group_Member } from "./Group_Member";
import { Group_MemberSchemaInternal } from "./Group_Member";

/** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
export interface Group extends DomainResource {
  /** Indicates whether the record for the group is available for use or is merely being retained for historical purposes. */
  active?: boolean;
  /** Extensions for active */
  _active?: Element;
  /** Identifies traits whose presence r absence is shared by members of the group. */
  characteristic?: Array<Group_Characteristic>;
  /** Provides a specific type of resource the group includes; e.g. "cow", "syringe", etc. */
  code?: CodeableConcept;
  /** Explanation of what the group represents and how it is intended to be used. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Business identifiers assigned to this participant by one of the applications involved.  These identifiers remain constant as the resource is updated and propagates from server to server. */
  identifier?: Array<Identifier>;
  /** Entity responsible for defining and maintaining Group characteristics and/or registered members. */
  managingEntity?: Reference;
  /** Identifies the resource instances that are members of the group. */
  member?: Array<Group_Member>;
  /**
   * Basis for membership in the Group:
   *
   * * 'definitional': The Group.characteristics specified are both necessary and sufficient to determine membership. All entities that meet the criteria are considered to be members of the group, whether referenced by the group or not. If members are present, they are individuals that happen to be known as meeting the Group.characteristics. The list cannot be presumed to be complete.
   * * 'enumerated': The Group.characteristics are necessary but not sufficient to determine membership. Membership is determined by being listed as one of the Group.member.
   */
  membership: "definitional" | "enumerated";
  /** Extensions for membership */
  _membership?: Element;
  /** A label assigned to the group for human identification and communication. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** A count of the number of resource instances that are part of the group. */
  quantity?: number;
  /** Extensions for quantity */
  _quantity?: Element;
  /** This is a Group resource. */
  resourceType: "Group";
  /** Identifies the broad classification of the kind of resources the group includes. */
  type:
    | "animal"
    | "careteam"
    | "device"
    | "healthcareservice"
    | "location"
    | "organization"
    | "person"
    | "practitioner"
    | "relatedperson"
    | "specimen";
  /** Extensions for type */
  _type?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getGroup_CharacteristicSchema = (): z.ZodType<Group_Characteristic> =>
  Group_CharacteristicSchemaInternal as z.ZodType<Group_Characteristic>;
const getGroup_MemberSchema = (): z.ZodType<Group_Member> =>
  Group_MemberSchemaInternal as z.ZodType<Group_Member>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const GroupSchemaInternal = z
  .object({
    active: z.boolean().optional(),
    _active: z.lazy(getElementSchema).optional(),
    characteristic: z.lazy(getGroup_CharacteristicSchema).array().optional(),
    code: z.lazy(getCodeableConceptSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    managingEntity: z.lazy(getReferenceSchema).optional(),
    member: z.lazy(getGroup_MemberSchema).array().optional(),
    membership: z.enum(["definitional", "enumerated"]),
    _membership: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    quantity: z.number().int().nonnegative().optional(),
    _quantity: z.lazy(getElementSchema).optional(),
    resourceType: z.literal("Group"),
    text: z.lazy(getNarrativeSchema).optional(),
    type: z.enum([
      "animal",
      "careteam",
      "device",
      "healthcareservice",
      "location",
      "organization",
      "person",
      "practitioner",
      "relatedperson",
      "specimen",
    ]),
    _type: z.lazy(getElementSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.managingEntity,
      "managingEntity",
      [
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      ["Organization", "Practitioner", "PractitionerRole", "RelatedPerson"],
      ctx,
    );
  });

export const GroupSchema = GroupSchemaInternal as z.ZodType<Group>;
