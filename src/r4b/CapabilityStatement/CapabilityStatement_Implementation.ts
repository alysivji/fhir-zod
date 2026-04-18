// Profile: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:00:58.420Z

import * as z from "zod";
import { fhirString, fhirUrl } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program. */
export interface CapabilityStatement_Implementation extends BackboneElement {
  /** The organization responsible for the management of the instance and oversight of the data on the server at the specified URL. */
  custodian?: Reference;
  /** Information about the specific installation that this capability statement relates to. */
  description: string;
  /** Extensions for description */
  _description?: Element;
  /** An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces. */
  url?: string;
  /** Extensions for url */
  _url?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const CapabilityStatement_ImplementationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    custodian: z.lazy(getReferenceSchema).optional(),
    description: fhirString(),
    _description: z.lazy(getElementSchema).optional(),
    url: fhirUrl().optional(),
    _url: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.custodian,
        "custodian",
        ["http://hl7.org/fhir/StructureDefinition/Organization"],
        ["Organization"],
        ctx,
      );
    });

export const CapabilityStatement_ImplementationSchema =
  CapabilityStatement_ImplementationSchemaInternal as z.ZodType<CapabilityStatement_Implementation>;
