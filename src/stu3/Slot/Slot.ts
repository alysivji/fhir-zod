// Profile: http://hl7.org/fhir/StructureDefinition/Slot
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:04:01.401Z

import * as z from "zod";
import {
  fhirCode,
  fhirId,
  fhirInstant,
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

/** Base StructureDefinition for Slot Resource */
export interface Slot extends DomainResource {
  /** The style of appointment or patient that may be booked in the slot (not service type). */
  appointmentType?: CodeableConcept;
  /** Comments on the slot to describe any extended information. Such as custom constraints on the slot. */
  comment?: string;
  /** Extensions for comment */
  _comment?: Element;
  /** Date/Time that the slot is to conclude. */
  end: string;
  /** Extensions for end */
  _end?: Element;
  /** External Ids for this item. */
  identifier?: Array<Identifier>;
  /** This slot has already been overbooked, appointments are unlikely to be accepted for this time. */
  overbooked?: boolean;
  /** Extensions for overbooked */
  _overbooked?: Element;
  /** This is a Slot resource. */
  resourceType: "Slot";
  /** The schedule resource that this slot defines an interval of status information. */
  schedule: Reference;
  /** A broad categorisation of the service that is to be performed during this appointment. */
  serviceCategory?: CodeableConcept;
  /** The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource. */
  serviceType?: Array<CodeableConcept>;
  /** The specialty of a practitioner that would be required to perform the service requested in this appointment. */
  specialty?: Array<CodeableConcept>;
  /** Date/Time that the slot is to begin. */
  start: string;
  /** Extensions for start */
  _start?: Element;
  /** busy | free | busy-unavailable | busy-tentative | entered-in-error. */
  status:
    | "busy"
    | "busy-tentative"
    | "busy-unavailable"
    | "entered-in-error"
    | "free";
  /** Extensions for status */
  _status?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
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
export const SlotSchemaInternal = z
  .object({
    appointmentType: z.lazy(getCodeableConceptSchema).optional(),
    comment: fhirString().optional(),
    _comment: z.lazy(getElementSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    end: fhirInstant(),
    _end: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    overbooked: z.boolean().optional(),
    _overbooked: z.lazy(getElementSchema).optional(),
    resourceType: z.literal("Slot"),
    schedule: z.lazy(getReferenceSchema),
    serviceCategory: z.lazy(getCodeableConceptSchema).optional(),
    serviceType: z.lazy(getCodeableConceptSchema).array().optional(),
    specialty: z.lazy(getCodeableConceptSchema).array().optional(),
    start: fhirInstant(),
    _start: z.lazy(getElementSchema).optional(),
    status: z.enum([
      "busy",
      "busy-tentative",
      "busy-unavailable",
      "entered-in-error",
      "free",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.schedule,
      "schedule",
      ["http://hl7.org/fhir/StructureDefinition/Schedule"],
      ["Schedule"],
      ctx,
    );
  });

export const SlotSchema = SlotSchemaInternal as z.ZodType<Slot>;
