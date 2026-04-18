// Source: https://hl7.org/fhir/STU3/capabilitystatement-definitions.html#CapabilityStatement.document
// Profile: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** A document definition. */
export interface CapabilityStatement_Document extends BackboneElement {
  /** A description of how the application supports or uses the specified document profile.  For example, when documents are created, what action is taken with consumed documents, etc. */
  documentation?: string;
  /** Extensions for documentation */
  _documentation?: Element;
  /** Mode of this document declaration - whether an application is a producer or consumer. */
  mode: "consumer" | "producer";
  /** Extensions for mode */
  _mode?: Element;
  /** A constraint on a resource used in the document. */
  profile: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const CapabilityStatement_DocumentSchemaInternal =
  BackboneElementSchemaInternal.extend({
    documentation: fhirString().optional(),
    _documentation: z.lazy(getElementSchema).optional(),
    mode: z.enum(["consumer", "producer"]),
    _mode: z.lazy(getElementSchema).optional(),
    profile: z.lazy(getReferenceSchema),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.profile,
        "profile",
        ["http://hl7.org/fhir/StructureDefinition/StructureDefinition"],
        ["StructureDefinition"],
        ctx,
      );
    });

export const CapabilityStatement_DocumentSchema =
  CapabilityStatement_DocumentSchemaInternal as z.ZodType<CapabilityStatement_Document>;
