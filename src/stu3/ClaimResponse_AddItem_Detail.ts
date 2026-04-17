// Profile: http://hl7.org/fhir/StructureDefinition/ClaimResponse
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Money } from "./Money";
import { MoneySchemaInternal } from "./Money";

/** The second tier service adjudications for payor added services. */
export interface ClaimResponse_AddItem_Detail extends BackboneElement {
  /** The adjudications results. */
  adjudication?: Array<unknown>;
  /** Health Care Service Type Codes  to identify the classification of service or benefits. */
  category?: CodeableConcept;
  /** The fee charged for the professional service or product.. */
  fee?: Money;
  /** Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours. */
  modifier?: Array<CodeableConcept>;
  /** A list of note references to the notes provided below. */
  noteNumber?: Array<number | null>;
  /** Extensions for noteNumber */
  _noteNumber?: Array<Element | null>;
  /** The type of reveneu or cost center providing the product and/or service. */
  revenue?: CodeableConcept;
  /** A code to indicate the Professional Service or Product supplied. */
  service?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getMoneySchema = (): z.ZodType<Money> =>
  MoneySchemaInternal as z.ZodType<Money>;

/** @internal */
export const ClaimResponse_AddItem_DetailSchemaInternal =
  BackboneElementSchemaInternal.extend({
    adjudication: z.unknown().array().optional(),
    category: z.lazy(getCodeableConceptSchema).optional(),
    fee: z.lazy(getMoneySchema).optional(),
    modifier: z.lazy(getCodeableConceptSchema).array().optional(),
    noteNumber: z.number().int().positive().nullable().array().optional(),
    _noteNumber: z.lazy(getElementSchema).nullable().array().optional(),
    revenue: z.lazy(getCodeableConceptSchema).optional(),
    service: z.lazy(getCodeableConceptSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validatePrimitiveArrayPair(
        record.noteNumber,
        record._noteNumber,
        "noteNumber",
        "_noteNumber",
        ctx,
      );
    });

export const ClaimResponse_AddItem_DetailSchema =
  ClaimResponse_AddItem_DetailSchemaInternal as z.ZodType<ClaimResponse_AddItem_Detail>;
