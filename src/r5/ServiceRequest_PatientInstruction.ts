// Profile: http://hl7.org/fhir/StructureDefinition/ServiceRequest
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Instructions in terms that are understood by the patient or consumer. */
export interface ServiceRequest_PatientInstruction extends BackboneElement {
  /** Instructions in terms that are understood by the patient or consumer. */
  instructionMarkdown?: string;
  /** Extensions for instructionMarkdown */
  _instructionMarkdown?: Element;
  /** Instructions in terms that are understood by the patient or consumer. */
  instructionReference?: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ServiceRequest_PatientInstructionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    instructionMarkdown: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _instructionMarkdown: z.lazy(getElementSchema).optional(),
    instructionReference: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const instruction_x_Present = [
        "instructionMarkdown",
        "instructionReference",
      ].filter((field) => record[field] !== undefined);
      if (instruction_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of instructionMarkdown, instructionReference may be present for instruction[x]",
          path: [instruction_x_Present[0]],
        });
      }
      validateReferenceTarget(
        record.instructionReference,
        "instructionReference",
        ["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
        ["DocumentReference"],
        ctx,
      );
    });

export const ServiceRequest_PatientInstructionSchema =
  ServiceRequest_PatientInstructionSchemaInternal as z.ZodType<ServiceRequest_PatientInstruction>;
