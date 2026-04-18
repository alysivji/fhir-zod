// Source: https://hl7.org/fhir/R4B/auditevent-definitions.html#AuditEvent.entity.detail
// Profile: http://hl7.org/fhir/StructureDefinition/AuditEvent
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import { fhirBase64Binary, fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Tagged value pairs for conveying additional information about the entity. */
export interface AuditEvent_Entity_Detail extends BackboneElement {
  /** The type of extra detail provided in the value. */
  type: string;
  /** Extensions for type */
  _type?: Element;
  /** The  value of the extra detail. */
  valueBase64Binary?: string;
  /** Extensions for valueBase64Binary */
  _valueBase64Binary?: Element;
  /** The  value of the extra detail. */
  valueString?: string;
  /** Extensions for valueString */
  _valueString?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const AuditEvent_Entity_DetailSchemaInternal =
  BackboneElementSchemaInternal.extend({
    type: fhirString(),
    _type: z.lazy(getElementSchema).optional(),
    valueBase64Binary: fhirBase64Binary().optional(),
    _valueBase64Binary: z.lazy(getElementSchema).optional(),
    valueString: fhirString().optional(),
    _valueString: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const value_x_Present = ["valueBase64Binary", "valueString"].filter(
        (field) => record[field] !== undefined,
      );
      if (value_x_Present.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "One of valueBase64Binary, valueString must be present for value[x]",
          path: ["valueBase64Binary"],
        });
      }
      if (value_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of valueBase64Binary, valueString may be present for value[x]",
          path: [value_x_Present[0]],
        });
      }
    });

export const AuditEvent_Entity_DetailSchema =
  AuditEvent_Entity_DetailSchemaInternal as z.ZodType<AuditEvent_Entity_Detail>;
