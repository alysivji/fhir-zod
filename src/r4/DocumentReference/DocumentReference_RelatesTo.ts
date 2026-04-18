// Profile: http://hl7.org/fhir/StructureDefinition/DocumentReference
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:00:42.795Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Relationships that this document has with other document references that already exist. */
export interface DocumentReference_RelatesTo extends BackboneElement {
  /** The type of relationship that this document has with anther document. */
  code: "appends" | "replaces" | "signs" | "transforms";
  /** Extensions for code */
  _code?: Element;
  /** The target document of this relationship. */
  target: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DocumentReference_RelatesToSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.enum(["appends", "replaces", "signs", "transforms"]),
    _code: z.lazy(getElementSchema).optional(),
    target: z.lazy(getReferenceSchema),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.target,
        "target",
        ["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
        ["DocumentReference"],
        ctx,
      );
    });

export const DocumentReference_RelatesToSchema =
  DocumentReference_RelatesToSchemaInternal as z.ZodType<DocumentReference_RelatesTo>;
