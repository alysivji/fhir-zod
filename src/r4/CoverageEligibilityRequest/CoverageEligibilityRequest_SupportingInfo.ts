// Profile: http://hl7.org/fhir/StructureDefinition/CoverageEligibilityRequest
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. */
export interface CoverageEligibilityRequest_SupportingInfo
  extends BackboneElement {
  /** The supporting materials are applicable for all detail items, product/servce categories and specific billing codes. */
  appliesToAll?: boolean;
  /** Extensions for appliesToAll */
  _appliesToAll?: Element;
  /** Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data. */
  information: Reference;
  /** A number to uniquely identify supporting information entries. */
  sequence: number;
  /** Extensions for sequence */
  _sequence?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const CoverageEligibilityRequest_SupportingInfoSchemaInternal =
  BackboneElementSchemaInternal.extend({
    appliesToAll: z.boolean().optional(),
    _appliesToAll: z.lazy(getElementSchema).optional(),
    information: z.lazy(getReferenceSchema),
    sequence: z.number().int().positive(),
    _sequence: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.information,
        "information",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
    });

export const CoverageEligibilityRequest_SupportingInfoSchema =
  CoverageEligibilityRequest_SupportingInfoSchemaInternal as z.ZodType<CoverageEligibilityRequest_SupportingInfo>;
