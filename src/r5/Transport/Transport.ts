// Source: https://hl7.org/fhir/R5/transport.html
// Profile: http://hl7.org/fhir/StructureDefinition/Transport
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import {
  fhirCanonical,
  fhirCode,
  fhirDateTime,
  fhirId,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
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
import type { Transport_Input } from "./Transport_Input";
import { Transport_InputSchemaInternal } from "./Transport_Input";
import type { Transport_Output } from "./Transport_Output";
import { Transport_OutputSchemaInternal } from "./Transport_Output";
import type { Transport_Restriction } from "./Transport_Restriction";
import { Transport_RestrictionSchemaInternal } from "./Transport_Restriction";

/** Record of transport. */
export interface Transport extends DomainResource {
  /** The date and time this transport was created. */
  authoredOn?: string;
  /** Extensions for authoredOn */
  _authoredOn?: Element;
  /** BasedOn refers to a higher-level authorization that triggered the creation of the transport.  It references a "request" resource such as a ServiceRequest or Transport, which is distinct from the "request" resource the Transport is seeking to fulfill.  This latter resource is referenced by FocusOn.  For example, based on a ServiceRequest (= BasedOn), a transport is created to fulfill a procedureRequest ( = FocusOn ) to transport a specimen to the lab. */
  basedOn?: Array<Reference>;
  /** A name or code (or both) briefly describing what the transport involves. */
  code?: CodeableConcept;
  /** Identifies the completion time of the event (the occurrence). */
  completionTime?: string;
  /** Extensions for completionTime */
  _completionTime?: Element;
  /** The current location for the entity to be transported. */
  currentLocation: Reference;
  /** A free-text description of what is to be performed. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** The healthcare event  (e.g. a patient and healthcare provider interaction) during which this transport was created. */
  encounter?: Reference;
  /** The request being actioned or the resource being manipulated by this transport. */
  focus?: Reference;
  /** The entity who benefits from the performance of the service specified in the transport (e.g., the patient). */
  for?: Reference;
  /** A shared identifier common to multiple independent Request instances that were activated/authorized more or less simultaneously by a single author.  The presence of the same identifier on each request ties those requests together and may have business ramifications in terms of reporting of results, billing, etc.  E.g. a requisition number shared by a set of lab tests ordered together, or a prescription number shared by all meds ordered at one time. */
  groupIdentifier?: Identifier;
  /** The transport event prior to this one. */
  history?: Reference;
  /** Identifier for the transport event that is used to identify it across multiple disparate systems. */
  identifier?: Array<Identifier>;
  /** Additional information that may be needed in the execution of the transport. */
  input?: Array<Transport_Input>;
  /** The URL pointing to a *FHIR*-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Transport. */
  instantiatesCanonical?: string;
  /** Extensions for instantiatesCanonical */
  _instantiatesCanonical?: Element;
  /** The URL pointing to an *externally* maintained  protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Transport. */
  instantiatesUri?: string;
  /** Extensions for instantiatesUri */
  _instantiatesUri?: Element;
  /** Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant to the Transport. */
  insurance?: Array<Reference>;
  /** Indicates the "level" of actionability associated with the Transport, i.e. i+R[9]Cs this a proposed transport, a planned transport, an actionable transport, etc. */
  intent:
    | "directive"
    | "filler-order"
    | "instance-order"
    | "option"
    | "order"
    | "original-order"
    | "plan"
    | "proposal"
    | "reflex-order"
    | "unknown";
  /** Extensions for intent */
  _intent?: Element;
  /** The date and time of last modification to this transport. */
  lastModified?: string;
  /** Extensions for lastModified */
  _lastModified?: Element;
  /** Principal physical location where this transport is performed. */
  location?: Reference;
  /** Free-text information captured about the transport as it progresses. */
  note?: Array<Annotation>;
  /** Outputs produced by the Transport. */
  output?: Array<Transport_Output>;
  /** Individual organization or Device currently responsible for transport execution. */
  owner?: Reference;
  /** A larger event of which this particular event is a component or step. */
  partOf?: Array<Reference>;
  /** The kind of participant that should perform the transport. */
  performerType?: Array<CodeableConcept>;
  /** Indicates how quickly the Transport should be addressed with respect to other requests. */
  priority?: "asap" | "routine" | "stat" | "urgent";
  /** Extensions for priority */
  _priority?: Element;
  /** A resource reference indicating why this transport needs to be performed. */
  reason?: CodeableReference;
  /** Links to Provenance records for past versions of this Transport that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the transport. */
  relevantHistory?: Array<Reference>;
  /** The desired or final location for the transport. */
  requestedLocation: Reference;
  /** The creator of the transport. */
  requester?: Reference;
  /** This is a Transport resource. */
  resourceType: "Transport";
  /** If the Transport.focus is a request resource and the transport is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned. */
  restriction?: Transport_Restriction;
  /** A code specifying the state of the transport event. */
  status?:
    | "abandoned"
    | "cancelled"
    | "completed"
    | "entered-in-error"
    | "in-progress"
    | "planned";
  /** Extensions for status */
  _status?: Element;
  /** An explanation as to why this transport is held, failed, was refused, etc. */
  statusReason?: CodeableConcept;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
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
const getTransport_InputSchema = (): z.ZodType<Transport_Input> =>
  Transport_InputSchemaInternal as z.ZodType<Transport_Input>;
const getTransport_OutputSchema = (): z.ZodType<Transport_Output> =>
  Transport_OutputSchemaInternal as z.ZodType<Transport_Output>;
const getTransport_RestrictionSchema = (): z.ZodType<Transport_Restriction> =>
  Transport_RestrictionSchemaInternal as z.ZodType<Transport_Restriction>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const TransportSchemaInternal = z
  .object({
    authoredOn: fhirDateTime().optional(),
    _authoredOn: z.lazy(getElementSchema).optional(),
    basedOn: z.lazy(getReferenceSchema).array().optional(),
    code: z.lazy(getCodeableConceptSchema).optional(),
    completionTime: fhirDateTime().optional(),
    _completionTime: z.lazy(getElementSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    currentLocation: z.lazy(getReferenceSchema),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    encounter: z.lazy(getReferenceSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    focus: z.lazy(getReferenceSchema).optional(),
    for: z.lazy(getReferenceSchema).optional(),
    groupIdentifier: z.lazy(getIdentifierSchema).optional(),
    history: z.lazy(getReferenceSchema).optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    input: z.lazy(getTransport_InputSchema).array().optional(),
    instantiatesCanonical: fhirCanonical().optional(),
    _instantiatesCanonical: z.lazy(getElementSchema).optional(),
    instantiatesUri: fhirUri().optional(),
    _instantiatesUri: z.lazy(getElementSchema).optional(),
    insurance: z.lazy(getReferenceSchema).array().optional(),
    intent: z.enum([
      "directive",
      "filler-order",
      "instance-order",
      "option",
      "order",
      "original-order",
      "plan",
      "proposal",
      "reflex-order",
      "unknown",
    ]),
    _intent: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    lastModified: fhirDateTime().optional(),
    _lastModified: z.lazy(getElementSchema).optional(),
    location: z.lazy(getReferenceSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    output: z.lazy(getTransport_OutputSchema).array().optional(),
    owner: z.lazy(getReferenceSchema).optional(),
    partOf: z.lazy(getReferenceSchema).array().optional(),
    performerType: z.lazy(getCodeableConceptSchema).array().optional(),
    priority: z.enum(["asap", "routine", "stat", "urgent"]).optional(),
    _priority: z.lazy(getElementSchema).optional(),
    reason: z.lazy(getCodeableReferenceSchema).optional(),
    relevantHistory: z.lazy(getReferenceSchema).array().optional(),
    requestedLocation: z.lazy(getReferenceSchema),
    requester: z.lazy(getReferenceSchema).optional(),
    resourceType: z.literal("Transport"),
    restriction: z.lazy(getTransport_RestrictionSchema).optional(),
    status: z
      .enum([
        "abandoned",
        "cancelled",
        "completed",
        "entered-in-error",
        "in-progress",
        "planned",
      ])
      .optional(),
    _status: z.lazy(getElementSchema).optional(),
    statusReason: z.lazy(getCodeableConceptSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.basedOn,
      "basedOn",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
    validateReferenceTarget(
      record.currentLocation,
      "currentLocation",
      ["http://hl7.org/fhir/StructureDefinition/Location"],
      ["Location"],
      ctx,
    );
    validateReferenceTarget(
      record.encounter,
      "encounter",
      ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      ["Encounter"],
      ctx,
    );
    validateReferenceTarget(
      record.focus,
      "focus",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
    validateReferenceTarget(
      record.for,
      "for",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
    validateReferenceTarget(
      record.history,
      "history",
      ["http://hl7.org/fhir/StructureDefinition/Transport"],
      ["Transport"],
      ctx,
    );
    validateReferenceTarget(
      record.insurance,
      "insurance",
      [
        "http://hl7.org/fhir/StructureDefinition/ClaimResponse",
        "http://hl7.org/fhir/StructureDefinition/Coverage",
      ],
      ["ClaimResponse", "Coverage"],
      ctx,
    );
    validateReferenceTarget(
      record.location,
      "location",
      ["http://hl7.org/fhir/StructureDefinition/Location"],
      ["Location"],
      ctx,
    );
    validateReferenceTarget(
      record.owner,
      "owner",
      [
        "http://hl7.org/fhir/StructureDefinition/CareTeam",
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/HealthcareService",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      [
        "CareTeam",
        "Device",
        "HealthcareService",
        "Organization",
        "Patient",
        "Practitioner",
        "PractitionerRole",
        "RelatedPerson",
      ],
      ctx,
    );
    validateReferenceTarget(
      record.partOf,
      "partOf",
      ["http://hl7.org/fhir/StructureDefinition/Transport"],
      ["Transport"],
      ctx,
    );
    validateReferenceTarget(
      record.relevantHistory,
      "relevantHistory",
      ["http://hl7.org/fhir/StructureDefinition/Provenance"],
      ["Provenance"],
      ctx,
    );
    validateReferenceTarget(
      record.requestedLocation,
      "requestedLocation",
      ["http://hl7.org/fhir/StructureDefinition/Location"],
      ["Location"],
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
  });

export const TransportSchema = TransportSchemaInternal as z.ZodType<Transport>;
