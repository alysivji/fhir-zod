// Profile: http://hl7.org/fhir/StructureDefinition/AuditEvent
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirString, fhirUri } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** An actor taking an active role in the event or activity that is logged. */
export interface AuditEvent_Agent extends BackboneElement {
  /** The authorization (e.g., PurposeOfUse) that was used during the event being recorded. */
  authorization?: Array<CodeableConcept>;
  /** Where the agent location is known, the agent location when the event occurred. */
  location?: Reference;
  /** When the event utilizes a network there should be an agent describing the local system, and an agent describing remote system, with the network interface details. */
  networkReference?: Reference;
  /** When the event utilizes a network there should be an agent describing the local system, and an agent describing remote system, with the network interface details. */
  networkString?: string;
  /** Extensions for networkString */
  _networkString?: Element;
  /** When the event utilizes a network there should be an agent describing the local system, and an agent describing remote system, with the network interface details. */
  networkUri?: string;
  /** Extensions for networkUri */
  _networkUri?: Element;
  /** Where the policy(ies) are known that authorized the agent participation in the event. Typically, a single activity may have multiple applicable policies, such as patient consent, guarantor funding, etc. The policy would also indicate the security token used. */
  policy?: Array<string | null>;
  /** Extensions for policy */
  _policy?: Array<Element | null>;
  /** Indicator that the user is or is not the requestor, or initiator, for the event being audited. */
  requestor?: boolean;
  /** Extensions for requestor */
  _requestor?: Element;
  /** The structural roles of the agent indicating the agent's competency. The security role enabling the agent with respect to the activity. */
  role?: Array<CodeableConcept>;
  /** The Functional Role of the user when performing the event. */
  type?: CodeableConcept;
  /** Reference to who this agent is that was involved in the event. */
  who: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const AuditEvent_AgentSchemaInternal =
  BackboneElementSchemaInternal.extend({
    authorization: z.lazy(getCodeableConceptSchema).array().optional(),
    location: z.lazy(getReferenceSchema).optional(),
    networkReference: z.lazy(getReferenceSchema).optional(),
    networkString: fhirString().optional(),
    _networkString: z.lazy(getElementSchema).optional(),
    networkUri: fhirUri().optional(),
    _networkUri: z.lazy(getElementSchema).optional(),
    policy: fhirUri().nullable().array().optional(),
    _policy: z.lazy(getElementSchema).nullable().array().optional(),
    requestor: z.boolean().optional(),
    _requestor: z.lazy(getElementSchema).optional(),
    role: z.lazy(getCodeableConceptSchema).array().optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
    who: z.lazy(getReferenceSchema),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const network_x_Present = [
        "networkReference",
        "networkString",
        "networkUri",
      ].filter((field) => record[field] !== undefined);
      if (network_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of networkReference, networkString, networkUri may be present for network[x]",
          path: [network_x_Present[0]],
        });
      }
      validatePrimitiveArrayPair(
        record.policy,
        record._policy,
        "policy",
        "_policy",
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
        record.networkReference,
        "networkReference",
        ["http://hl7.org/fhir/StructureDefinition/Endpoint"],
        ["Endpoint"],
        ctx,
      );
      validateReferenceTarget(
        record.who,
        "who",
        [
          "http://hl7.org/fhir/StructureDefinition/CareTeam",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
        [
          "CareTeam",
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

export const AuditEvent_AgentSchema =
  AuditEvent_AgentSchemaInternal as z.ZodType<AuditEvent_Agent>;
