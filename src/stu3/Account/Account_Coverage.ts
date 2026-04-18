// Source: https://hl7.org/fhir/STU3/account-definitions.html#Account.coverage
// Profile: http://hl7.org/fhir/StructureDefinition/Account
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account. */
export interface Account_Coverage extends BackboneElement {
  /**
   * The party(s) that are responsible for payment (or part of) of charges applied to this account (including self-pay).
   *
   * A coverage may only be resposible for specific types of charges, and the sequence of the coverages in the account could be important when processing billing.
   */
  coverage: Reference;
  /** The priority of the coverage in the context of this account. */
  priority?: number;
  /** Extensions for priority */
  _priority?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Account_CoverageSchemaInternal =
  BackboneElementSchemaInternal.extend({
    coverage: z.lazy(getReferenceSchema),
    priority: z.number().int().positive().optional(),
    _priority: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.coverage,
        "coverage",
        ["http://hl7.org/fhir/StructureDefinition/Coverage"],
        ["Coverage"],
        ctx,
      );
    });

export const Account_CoverageSchema =
  Account_CoverageSchemaInternal as z.ZodType<Account_Coverage>;
