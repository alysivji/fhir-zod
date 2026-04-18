// Profile: http://hl7.org/fhir/StructureDefinition/Consent
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:00:56.233Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** The resources controlled by this exception, if specific resources are referenced. */
export interface Consent_Except_Data extends BackboneElement {
  /** How the resource reference is interpreted when testing consent restrictions. */
  meaning: "authoredby" | "dependents" | "instance" | "related";
  /** Extensions for meaning */
  _meaning?: Element;
  /** A reference to a specific resource that defines which resources are covered by this consent. */
  reference: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Consent_Except_DataSchemaInternal =
  BackboneElementSchemaInternal.extend({
    meaning: z.enum(["authoredby", "dependents", "instance", "related"]),
    _meaning: z.lazy(getElementSchema).optional(),
    reference: z.lazy(getReferenceSchema),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.reference,
        "reference",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
    });

export const Consent_Except_DataSchema =
  Consent_Except_DataSchemaInternal as z.ZodType<Consent_Except_Data>;
