// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** An organization that distributes the packaged device. */
export interface DeviceDefinition_Packaging_Distributor
  extends BackboneElement {
  /** Distributor's human-readable name. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** Distributor as an Organization resource. */
  organizationReference?: Array<Reference>;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DeviceDefinition_Packaging_DistributorSchemaInternal =
  BackboneElementSchemaInternal.extend({
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    organizationReference: z.lazy(getReferenceSchema).array().optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.organizationReference,
        "organizationReference",
        ["http://hl7.org/fhir/StructureDefinition/Organization"],
        ["Organization"],
        ctx,
      );
    });

export const DeviceDefinition_Packaging_DistributorSchema =
  DeviceDefinition_Packaging_DistributorSchemaInternal as z.ZodType<DeviceDefinition_Packaging_Distributor>;
