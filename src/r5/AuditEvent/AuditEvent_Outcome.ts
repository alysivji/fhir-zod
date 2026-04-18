// Profile: http://hl7.org/fhir/StructureDefinition/AuditEvent
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";

/** Indicates whether the event succeeded or failed. A free text descripiton can be given in outcome.text. */
export interface AuditEvent_Outcome extends BackboneElement {
  /** Indicates whether the event succeeded or failed. */
  code: Coding;
  /** Additional details about the error. This may be a text description of the error or a system code that identifies the error. */
  detail?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;

/** @internal */
export const AuditEvent_OutcomeSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodingSchema),
    detail: z.lazy(getCodeableConceptSchema).array().optional(),
  }).strict();

export const AuditEvent_OutcomeSchema =
  AuditEvent_OutcomeSchemaInternal as z.ZodType<AuditEvent_Outcome>;
