// Profile: http://hl7.org/fhir/StructureDefinition/ImplementationGuide
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import {
  fhirCanonical,
  fhirId,
  fhirString,
} from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides. */
export interface ImplementationGuide_DependsOn extends BackboneElement {
  /** The NPM package name for the Implementation Guide that this IG depends on. */
  packageId?: string;
  /** Extensions for packageId */
  _packageId?: Element;
  /** A description explaining the nature of the dependency on the listed IG. */
  reason?: string;
  /** Extensions for reason */
  _reason?: Element;
  /** A canonical reference to the Implementation guide for the dependency. */
  uri: string;
  /** Extensions for uri */
  _uri?: Element;
  /** The version of the IG that is depended on, when the correct version is required to understand the IG correctly. */
  version?: string;
  /** Extensions for version */
  _version?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ImplementationGuide_DependsOnSchemaInternal =
  BackboneElementSchemaInternal.extend({
    packageId: fhirId().optional(),
    _packageId: z.lazy(getElementSchema).optional(),
    reason: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _reason: z.lazy(getElementSchema).optional(),
    uri: fhirCanonical(),
    _uri: z.lazy(getElementSchema).optional(),
    version: fhirString().optional(),
    _version: z.lazy(getElementSchema).optional(),
  }).strict();

export const ImplementationGuide_DependsOnSchema =
  ImplementationGuide_DependsOnSchemaInternal as z.ZodType<ImplementationGuide_DependsOn>;
