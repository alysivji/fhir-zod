// Profile: http://hl7.org/fhir/StructureDefinition/Claim
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:00:58.420Z

import * as z from "zod";
import { fhirDateTime } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Procedures performed on the patient relevant to the billing items with the claim. */
export interface Claim_Procedure extends BackboneElement {
  /** Date and optionally time the procedure was performed. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** The code or reference to a Procedure resource which identifies the clinical intervention performed. */
  procedureCodeableConcept?: CodeableConcept;
  /** The code or reference to a Procedure resource which identifies the clinical intervention performed. */
  procedureReference?: Reference;
  /** A number to uniquely identify procedure entries. */
  sequence: number;
  /** Extensions for sequence */
  _sequence?: Element;
  /** When the condition was observed or the relative ranking. */
  type?: Array<CodeableConcept>;
  /** Unique Device Identifiers associated with this line item. */
  udi?: Array<Reference>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Claim_ProcedureSchemaInternal =
  BackboneElementSchemaInternal.extend({
    date: fhirDateTime().optional(),
    _date: z.lazy(getElementSchema).optional(),
    procedureCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    procedureReference: z.lazy(getReferenceSchema).optional(),
    sequence: z.number().int().positive(),
    _sequence: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).array().optional(),
    udi: z.lazy(getReferenceSchema).array().optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const procedure_x_Present = [
        "procedureCodeableConcept",
        "procedureReference",
      ].filter((field) => record[field] !== undefined);
      if (procedure_x_Present.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "One of procedureCodeableConcept, procedureReference must be present for procedure[x]",
          path: ["procedureCodeableConcept"],
        });
      }
      if (procedure_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of procedureCodeableConcept, procedureReference may be present for procedure[x]",
          path: [procedure_x_Present[0]],
        });
      }
      validateReferenceTarget(
        record.procedureReference,
        "procedureReference",
        ["http://hl7.org/fhir/StructureDefinition/Procedure"],
        ["Procedure"],
        ctx,
      );
      validateReferenceTarget(
        record.udi,
        "udi",
        ["http://hl7.org/fhir/StructureDefinition/Device"],
        ["Device"],
        ctx,
      );
    });

export const Claim_ProcedureSchema =
  Claim_ProcedureSchemaInternal as z.ZodType<Claim_Procedure>;
