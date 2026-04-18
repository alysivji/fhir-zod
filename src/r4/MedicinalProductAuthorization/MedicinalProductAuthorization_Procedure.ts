// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductAuthorization
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:00:42.795Z

import * as z from "zod";
import { fhirDateTime } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";

/** The regulatory procedure for granting or amending a marketing authorization. */
export interface MedicinalProductAuthorization_Procedure
  extends BackboneElement {
  /** Applcations submitted to obtain a marketing authorization. */
  application?: Array<unknown>;
  /** Date of procedure. */
  dateDateTime?: string;
  /** Extensions for dateDateTime */
  _dateDateTime?: Element;
  /** Date of procedure. */
  datePeriod?: Period;
  /** Identifier for this procedure. */
  identifier?: Identifier;
  /** Type of procedure. */
  type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const MedicinalProductAuthorization_ProcedureSchemaInternal =
  BackboneElementSchemaInternal.extend({
    application: z.unknown().array().optional(),
    dateDateTime: fhirDateTime().optional(),
    _dateDateTime: z.lazy(getElementSchema).optional(),
    datePeriod: z.lazy(getPeriodSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).optional(),
    type: z.lazy(getCodeableConceptSchema),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const date_x_Present = ["dateDateTime", "datePeriod"].filter(
        (field) => record[field] !== undefined,
      );
      if (date_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of dateDateTime, datePeriod may be present for date[x]",
          path: [date_x_Present[0]],
        });
      }
    });

export const MedicinalProductAuthorization_ProcedureSchema =
  MedicinalProductAuthorization_ProcedureSchemaInternal as z.ZodType<MedicinalProductAuthorization_Procedure>;
