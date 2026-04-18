// Source: https://hl7.org/fhir/R5/auditevent-definitions.html#AuditEvent.entity
// Profile: http://hl7.org/fhir/StructureDefinition/AuditEvent
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { fhirBase64Binary } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { AuditEvent_Entity_Detail } from "./AuditEvent_Entity_Detail";
import { AuditEvent_Entity_DetailSchemaInternal } from "./AuditEvent_Entity_Detail";

/** Specific instances of data or objects that have been accessed. */
export interface AuditEvent_Entity extends BackboneElement {
  /** The entity is attributed to an agent to express the agent's responsibility for that entity in the activity. This is most used to indicate when persistence media (the entity) are used by an agent. For example when importing data from a device, the device would be described in an entity, and the user importing data from that media would be indicated as the entity.agent. */
  agent?: Array<unknown>;
  /** Tagged value pairs for conveying additional information about the entity. */
  detail?: Array<AuditEvent_Entity_Detail>;
  /** The query parameters for a query-type entities. */
  query?: string;
  /** Extensions for query */
  _query?: Element;
  /** Code representing the role the entity played in the event being audited. */
  role?: CodeableConcept;
  /** Security labels for the identified entity. */
  securityLabel?: Array<CodeableConcept>;
  /** Identifies a specific instance of the entity. The reference should be version specific. This is allowed to be a Parameters resource. */
  what?: Reference;
}

const getAuditEvent_Entity_DetailSchema =
  (): z.ZodType<AuditEvent_Entity_Detail> =>
    AuditEvent_Entity_DetailSchemaInternal as z.ZodType<AuditEvent_Entity_Detail>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const AuditEvent_EntitySchemaInternal =
  BackboneElementSchemaInternal.extend({
    agent: z.unknown().array().optional(),
    detail: z.lazy(getAuditEvent_Entity_DetailSchema).array().optional(),
    query: fhirBase64Binary().optional(),
    _query: z.lazy(getElementSchema).optional(),
    role: z.lazy(getCodeableConceptSchema).optional(),
    securityLabel: z.lazy(getCodeableConceptSchema).array().optional(),
    what: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.what,
        "what",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
    });

export const AuditEvent_EntitySchema =
  AuditEvent_EntitySchemaInternal as z.ZodType<AuditEvent_Entity>;
