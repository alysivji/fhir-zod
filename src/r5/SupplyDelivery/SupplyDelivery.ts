// Profile: http://hl7.org/fhir/StructureDefinition/SupplyDelivery
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:04:05.932Z

import * as z from "zod";
import {
  fhirCode,
  fhirDateTime,
  fhirId,
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
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Timing } from "../Timing";
import { TimingSchemaInternal } from "../Timing";
import type { SupplyDelivery_SuppliedItem } from "./SupplyDelivery_SuppliedItem";
import { SupplyDelivery_SuppliedItemSchemaInternal } from "./SupplyDelivery_SuppliedItem";

/** Record of delivery of what is supplied. */
export interface SupplyDelivery extends DomainResource {
  /** A plan, proposal or order that is fulfilled in whole or in part by this event. */
  basedOn?: Array<Reference>;
  /** Identification of the facility/location where the delivery was shipped to. */
  destination?: Reference;
  /** Identifier for the supply delivery event that is used to identify it across multiple disparate systems. */
  identifier?: Array<Identifier>;
  /** The date or time(s) the activity occurred. */
  occurrenceDateTime?: string;
  /** Extensions for occurrenceDateTime */
  _occurrenceDateTime?: Element;
  /** The date or time(s) the activity occurred. */
  occurrencePeriod?: Period;
  /** The date or time(s) the activity occurred. */
  occurrenceTiming?: Timing;
  /** A larger event of which this particular event is a component or step. */
  partOf?: Array<Reference>;
  /** A link to a resource representing the person whom the delivered item is for. */
  patient?: Reference;
  /** Identifies the individual or organization that received the delivery. */
  receiver?: Array<Reference>;
  /** This is a SupplyDelivery resource. */
  resourceType: "SupplyDelivery";
  /** A code specifying the state of the dispense event. */
  status?: "abandoned" | "completed" | "entered-in-error" | "in-progress";
  /** Extensions for status */
  _status?: Element;
  /** The item that is being delivered or has been supplied. */
  suppliedItem?: Array<SupplyDelivery_SuppliedItem>;
  /** The individual or organization responsible for supplying the delivery. */
  supplier?: Reference;
  /** Indicates the type of supply being provided.  Examples include: Medication, Device, Biologically Derived Product. */
  type?: CodeableConcept;
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
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getSupplyDelivery_SuppliedItemSchema =
  (): z.ZodType<SupplyDelivery_SuppliedItem> =>
    SupplyDelivery_SuppliedItemSchemaInternal as z.ZodType<SupplyDelivery_SuppliedItem>;
const getTimingSchema = (): z.ZodType<Timing> =>
  TimingSchemaInternal as z.ZodType<Timing>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const SupplyDeliverySchemaInternal = z
  .object({
    basedOn: z.lazy(getReferenceSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    destination: z.lazy(getReferenceSchema).optional(),
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
    occurrenceDateTime: fhirDateTime().optional(),
    _occurrenceDateTime: z.lazy(getElementSchema).optional(),
    occurrencePeriod: z.lazy(getPeriodSchema).optional(),
    occurrenceTiming: z.lazy(getTimingSchema).optional(),
    partOf: z.lazy(getReferenceSchema).array().optional(),
    patient: z.lazy(getReferenceSchema).optional(),
    receiver: z.lazy(getReferenceSchema).array().optional(),
    resourceType: z.literal("SupplyDelivery"),
    status: z
      .enum(["abandoned", "completed", "entered-in-error", "in-progress"])
      .optional(),
    _status: z.lazy(getElementSchema).optional(),
    suppliedItem: z
      .lazy(getSupplyDelivery_SuppliedItemSchema)
      .array()
      .optional(),
    supplier: z.lazy(getReferenceSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const occurrence_x_Present = [
      "occurrenceDateTime",
      "occurrencePeriod",
      "occurrenceTiming",
    ].filter((field) => record[field] !== undefined);
    if (occurrence_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of occurrenceDateTime, occurrencePeriod, occurrenceTiming may be present for occurrence[x]",
        path: [occurrence_x_Present[0]],
      });
    }
    validateReferenceTarget(
      record.basedOn,
      "basedOn",
      ["http://hl7.org/fhir/StructureDefinition/SupplyRequest"],
      ["SupplyRequest"],
      ctx,
    );
    validateReferenceTarget(
      record.destination,
      "destination",
      ["http://hl7.org/fhir/StructureDefinition/Location"],
      ["Location"],
      ctx,
    );
    validateReferenceTarget(
      record.partOf,
      "partOf",
      [
        "http://hl7.org/fhir/StructureDefinition/Contract",
        "http://hl7.org/fhir/StructureDefinition/SupplyDelivery",
      ],
      ["Contract", "SupplyDelivery"],
      ctx,
    );
    validateReferenceTarget(
      record.patient,
      "patient",
      ["http://hl7.org/fhir/StructureDefinition/Patient"],
      ["Patient"],
      ctx,
    );
    validateReferenceTarget(
      record.receiver,
      "receiver",
      [
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
      ],
      ["Organization", "Practitioner", "PractitionerRole"],
      ctx,
    );
    validateReferenceTarget(
      record.supplier,
      "supplier",
      [
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
      ],
      ["Organization", "Practitioner", "PractitionerRole"],
      ctx,
    );
  });

export const SupplyDeliverySchema =
  SupplyDeliverySchemaInternal as z.ZodType<SupplyDelivery>;
