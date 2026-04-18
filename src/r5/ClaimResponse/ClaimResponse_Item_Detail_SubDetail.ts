// Source: https://hl7.org/fhir/R5/claimresponse-definitions.html#ClaimResponse.item.detail.subDetail
// Profile: http://hl7.org/fhir/StructureDefinition/ClaimResponse
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";

/** A sub-detail adjudication of a simple product or service. */
export interface ClaimResponse_Item_Detail_SubDetail extends BackboneElement {
  /** The adjudication results. */
  adjudication?: Array<unknown>;
  /** The numbers associated with notes below which apply to the adjudication of this item. */
  noteNumber?: Array<number | null>;
  /** Extensions for noteNumber */
  _noteNumber?: Array<Element | null>;
  /** The high-level results of the adjudication if adjudication has been performed. */
  reviewOutcome?: unknown;
  /** A number to uniquely reference the claim sub-detail entry. */
  subDetailSequence: number;
  /** Extensions for subDetailSequence */
  _subDetailSequence?: Element;
  /** Trace number for tracking purposes. May be defined at the jurisdiction level or between trading partners. */
  traceNumber?: Array<Identifier>;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;

/** @internal */
export const ClaimResponse_Item_Detail_SubDetailSchemaInternal =
  BackboneElementSchemaInternal.extend({
    adjudication: z.unknown().array().optional(),
    noteNumber: z.number().int().positive().nullable().array().optional(),
    _noteNumber: z.lazy(getElementSchema).nullable().array().optional(),
    reviewOutcome: z.unknown().optional(),
    subDetailSequence: z.number().int().positive(),
    _subDetailSequence: z.lazy(getElementSchema).optional(),
    traceNumber: z.lazy(getIdentifierSchema).array().optional(),
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

export const ClaimResponse_Item_Detail_SubDetailSchema =
  ClaimResponse_Item_Detail_SubDetailSchemaInternal as z.ZodType<ClaimResponse_Item_Detail_SubDetail>;
