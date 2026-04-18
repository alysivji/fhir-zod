// Profile: http://hl7.org/fhir/StructureDefinition/Task
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:00:42.795Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned. */
export interface Task_Restriction extends BackboneElement {
  /** Over what time-period is fulfillment sought. */
  period?: Period;
  /** For requests that are targeted to more than on potential recipient/target, for whom is fulfillment sought? */
  recipient?: Array<Reference>;
  /** Indicates the number of times the requested action should occur. */
  repetitions?: number;
  /** Extensions for repetitions */
  _repetitions?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Task_RestrictionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    period: z.lazy(getPeriodSchema).optional(),
    recipient: z.lazy(getReferenceSchema).array().optional(),
    repetitions: z.number().int().positive().optional(),
    _repetitions: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.recipient,
        "recipient",
        [
          "http://hl7.org/fhir/StructureDefinition/Group",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
        [
          "Group",
          "Organization",
          "Patient",
          "Practitioner",
          "PractitionerRole",
          "RelatedPerson",
        ],
        ctx,
      );
    });

export const Task_RestrictionSchema =
  Task_RestrictionSchemaInternal as z.ZodType<Task_Restriction>;
