// Profile: http://hl7.org/fhir/StructureDefinition/MedicationRequest
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The individual, organization or device that initiated the request and has responsibility for its activation. */
export interface MedicationRequest_Requester extends BackboneElement {
  /** The healthcare professional responsible for authorizing the initial prescription. */
  agent: Reference;
  /** The organization the device or practitioner was acting on behalf of. */
  onBehalfOf?: Reference;
}

const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicationRequest_RequesterSchemaInternal =
  BackboneElementSchemaInternal.extend({
    agent: z.lazy(getReferenceSchema),
    onBehalfOf: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.agent,
        "agent",
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
        record.onBehalfOf,
        "onBehalfOf",
        ["http://hl7.org/fhir/StructureDefinition/Organization"],
        ["Organization"],
        ctx,
      );
    });

export const MedicationRequest_RequesterSchema =
  MedicationRequest_RequesterSchemaInternal as z.ZodType<MedicationRequest_Requester>;
