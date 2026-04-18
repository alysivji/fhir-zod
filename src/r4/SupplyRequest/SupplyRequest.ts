// Profile: http://hl7.org/fhir/StructureDefinition/SupplyRequest
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:03:58.798Z

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
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Timing } from "../Timing";
import { TimingSchemaInternal } from "../Timing";
import type { SupplyRequest_Parameter } from "./SupplyRequest_Parameter";
import { SupplyRequest_ParameterSchemaInternal } from "./SupplyRequest_Parameter";

/** A record of a request for a medication, substance or device used in the healthcare setting. */
export interface SupplyRequest extends DomainResource {
  /** When the request was made. */
  authoredOn?: string;
  /** Extensions for authoredOn */
  _authoredOn?: Element;
  /** Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process. */
  category?: CodeableConcept;
  /** Where the supply is expected to come from. */
  deliverFrom?: Reference;
  /** Where the supply is destined to go. */
  deliverTo?: Reference;
  /** Business identifiers assigned to this SupplyRequest by the author and/or other systems. These identifiers remain constant as the resource is updated and propagates from server to server. */
  identifier?: Array<Identifier>;
  /** The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list. */
  itemCodeableConcept?: CodeableConcept;
  /** The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list. */
  itemReference?: Reference;
  /** When the request should be fulfilled. */
  occurrenceDateTime?: string;
  /** Extensions for occurrenceDateTime */
  _occurrenceDateTime?: Element;
  /** When the request should be fulfilled. */
  occurrencePeriod?: Period;
  /** When the request should be fulfilled. */
  occurrenceTiming?: Timing;
  /** Specific parameters for the ordered item.  For example, the size of the indicated item. */
  parameter?: Array<SupplyRequest_Parameter>;
  /** Indicates how quickly this SupplyRequest should be addressed with respect to other requests. */
  priority?: "asap" | "routine" | "stat" | "urgent";
  /** Extensions for priority */
  _priority?: Element;
  /** The amount that is being ordered of the indicated item. */
  quantity: Quantity;
  /** The reason why the supply item was requested. */
  reasonCode?: Array<CodeableConcept>;
  /** The reason why the supply item was requested. */
  reasonReference?: Array<Reference>;
  /** The device, practitioner, etc. who initiated the request. */
  requester?: Reference;
  /** This is a SupplyRequest resource. */
  resourceType: "SupplyRequest";
  /** Status of the supply request. */
  status?:
    | "active"
    | "cancelled"
    | "completed"
    | "draft"
    | "entered-in-error"
    | "suspended"
    | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** Who is intended to fulfill the request. */
  supplier?: Array<Reference>;
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
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getSupplyRequest_ParameterSchema =
  (): z.ZodType<SupplyRequest_Parameter> =>
    SupplyRequest_ParameterSchemaInternal as z.ZodType<SupplyRequest_Parameter>;
const getTimingSchema = (): z.ZodType<Timing> =>
  TimingSchemaInternal as z.ZodType<Timing>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const SupplyRequestSchemaInternal = z
  .object({
    authoredOn: fhirDateTime().optional(),
    _authoredOn: z.lazy(getElementSchema).optional(),
    category: z.lazy(getCodeableConceptSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    deliverFrom: z.lazy(getReferenceSchema).optional(),
    deliverTo: z.lazy(getReferenceSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    itemCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    itemReference: z.lazy(getReferenceSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    occurrenceDateTime: fhirDateTime().optional(),
    _occurrenceDateTime: z.lazy(getElementSchema).optional(),
    occurrencePeriod: z.lazy(getPeriodSchema).optional(),
    occurrenceTiming: z.lazy(getTimingSchema).optional(),
    parameter: z.lazy(getSupplyRequest_ParameterSchema).array().optional(),
    priority: z.enum(["asap", "routine", "stat", "urgent"]).optional(),
    _priority: z.lazy(getElementSchema).optional(),
    quantity: z.lazy(getQuantitySchema),
    reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
    reasonReference: z.lazy(getReferenceSchema).array().optional(),
    requester: z.lazy(getReferenceSchema).optional(),
    resourceType: z.literal("SupplyRequest"),
    status: z
      .enum([
        "active",
        "cancelled",
        "completed",
        "draft",
        "entered-in-error",
        "suspended",
        "unknown",
      ])
      .optional(),
    _status: z.lazy(getElementSchema).optional(),
    supplier: z.lazy(getReferenceSchema).array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const item_x_Present = ["itemCodeableConcept", "itemReference"].filter(
      (field) => record[field] !== undefined,
    );
    if (item_x_Present.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "One of itemCodeableConcept, itemReference must be present for item[x]",
        path: ["itemCodeableConcept"],
      });
    }
    if (item_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of itemCodeableConcept, itemReference may be present for item[x]",
        path: [item_x_Present[0]],
      });
    }
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
      record.deliverFrom,
      "deliverFrom",
      [
        "http://hl7.org/fhir/StructureDefinition/Location",
        "http://hl7.org/fhir/StructureDefinition/Organization",
      ],
      ["Location", "Organization"],
      ctx,
    );
    validateReferenceTarget(
      record.deliverTo,
      "deliverTo",
      [
        "http://hl7.org/fhir/StructureDefinition/Location",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
      ],
      ["Location", "Organization", "Patient"],
      ctx,
    );
    validateReferenceTarget(
      record.itemReference,
      "itemReference",
      [
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/Medication",
        "http://hl7.org/fhir/StructureDefinition/Substance",
      ],
      ["Device", "Medication", "Substance"],
      ctx,
    );
    validateReferenceTarget(
      record.reasonReference,
      "reasonReference",
      [
        "http://hl7.org/fhir/StructureDefinition/Condition",
        "http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
        "http://hl7.org/fhir/StructureDefinition/DocumentReference",
        "http://hl7.org/fhir/StructureDefinition/Observation",
      ],
      ["Condition", "DiagnosticReport", "DocumentReference", "Observation"],
      ctx,
    );
    validateReferenceTarget(
      record.requester,
      "requester",
      [
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      [
        "Device",
        "Organization",
        "Patient",
        "Practitioner",
        "PractitionerRole",
        "RelatedPerson",
      ],
      ctx,
    );
    validateReferenceTarget(
      record.supplier,
      "supplier",
      [
        "http://hl7.org/fhir/StructureDefinition/HealthcareService",
        "http://hl7.org/fhir/StructureDefinition/Organization",
      ],
      ["HealthcareService", "Organization"],
      ctx,
    );
  });

export const SupplyRequestSchema =
  SupplyRequestSchemaInternal as z.ZodType<SupplyRequest>;
