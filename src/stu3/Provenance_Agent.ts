// Profile: http://hl7.org/fhir/StructureDefinition/Provenance
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirUri } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** An actor taking a role in an activity  for which it can be assigned some degree of responsibility for the activity taking place. */
export interface Provenance_Agent extends BackboneElement {
  /** The individual, device, or organization for whom the change was made. */
  onBehalfOfReference?: Reference;
  /** The individual, device, or organization for whom the change was made. */
  onBehalfOfUri?: string;
  /** Extensions for onBehalfOfUri */
  _onBehalfOfUri?: Element;
  /** The type of relationship between agents. */
  relatedAgentType?: CodeableConcept;
  /** The function of the agent with respect to the activity. The security role enabling the agent with respect to the activity. */
  role?: Array<CodeableConcept>;
  /** The individual, device or organization that participated in the event. */
  whoReference?: Reference;
  /** The individual, device or organization that participated in the event. */
  whoUri?: string;
  /** Extensions for whoUri */
  _whoUri?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Provenance_AgentSchemaInternal =
  BackboneElementSchemaInternal.extend({
    onBehalfOfReference: z.lazy(getReferenceSchema).optional(),
    onBehalfOfUri: fhirUri().optional(),
    _onBehalfOfUri: z.lazy(getElementSchema).optional(),
    relatedAgentType: z.lazy(getCodeableConceptSchema).optional(),
    role: z.lazy(getCodeableConceptSchema).array().optional(),
    whoReference: z.lazy(getReferenceSchema).optional(),
    whoUri: fhirUri().optional(),
    _whoUri: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const onBehalfOf_x_Present = [
        "onBehalfOfReference",
        "onBehalfOfUri",
      ].filter((field) => record[field] !== undefined);
      if (onBehalfOf_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of onBehalfOfReference, onBehalfOfUri may be present for onBehalfOf[x]",
          path: [onBehalfOf_x_Present[0]],
        });
      }
      const who_x_Present = ["whoReference", "whoUri"].filter(
        (field) => record[field] !== undefined,
      );
      if (who_x_Present.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "One of whoReference, whoUri must be present for who[x]",
          path: ["whoReference"],
        });
      }
      if (who_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Only one of whoReference, whoUri may be present for who[x]",
          path: [who_x_Present[0]],
        });
      }
      validateReferenceTarget(
        record.onBehalfOfReference,
        "onBehalfOfReference",
        [
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
        ["Device", "Organization", "Patient", "Practitioner", "RelatedPerson"],
        ctx,
      );
      validateReferenceTarget(
        record.whoReference,
        "whoReference",
        [
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
        ["Device", "Organization", "Patient", "Practitioner", "RelatedPerson"],
        ctx,
      );
    });

export const Provenance_AgentSchema =
  Provenance_AgentSchemaInternal as z.ZodType<Provenance_Agent>;
