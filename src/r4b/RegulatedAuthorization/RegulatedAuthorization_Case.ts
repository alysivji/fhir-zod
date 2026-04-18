// Source: https://hl7.org/fhir/R4B/regulatedauthorization-definitions.html#RegulatedAuthorization.case
// Profile: http://hl7.org/fhir/StructureDefinition/RegulatedAuthorization
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

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

/** The case or regulatory procedure for granting or amending a regulated authorization. An authorization is granted in response to submissions/applications by those seeking authorization. A case is the administrative process that deals with the application(s) that relate to this and assesses them. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page). */
export interface RegulatedAuthorization_Case extends BackboneElement {
  /** A regulatory submission from an organization to a regulator, as part of an assessing case. Multiple applications may occur over time, with more or different information to support or modify the submission or the authorization. The applications can be considered as steps within the longer running case or procedure for this authorization process. */
  application?: Array<unknown>;
  /** Relevant date for this case. */
  dateDateTime?: string;
  /** Extensions for dateDateTime */
  _dateDateTime?: Element;
  /** Relevant date for this case. */
  datePeriod?: Period;
  /** Identifier by which this case can be referenced. */
  identifier?: Identifier;
  /** The status associated with the case. */
  status?: CodeableConcept;
  /** The defining type of case. */
  type?: CodeableConcept;
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
export const RegulatedAuthorization_CaseSchemaInternal =
  BackboneElementSchemaInternal.extend({
    application: z.unknown().array().optional(),
    dateDateTime: fhirDateTime().optional(),
    _dateDateTime: z.lazy(getElementSchema).optional(),
    datePeriod: z.lazy(getPeriodSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).optional(),
    status: z.lazy(getCodeableConceptSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
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

export const RegulatedAuthorization_CaseSchema =
  RegulatedAuthorization_CaseSchemaInternal as z.ZodType<RegulatedAuthorization_Case>;
