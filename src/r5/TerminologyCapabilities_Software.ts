// Profile: http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Software that is covered by this terminology capability statement.  It is used when the statement describes the capabilities of a particular software version, independent of an installation. */
export interface TerminologyCapabilities_Software extends BackboneElement {
  /** Name the software is known by. */
  name: string;
  /** Extensions for name */
  _name?: Element;
  /** The version identifier for the software covered by this statement. */
  version?: string;
  /** Extensions for version */
  _version?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const TerminologyCapabilities_SoftwareSchemaInternal =
  BackboneElementSchemaInternal.extend({
    name: fhirString(),
    _name: z.lazy(getElementSchema).optional(),
    version: fhirString().optional(),
    _version: z.lazy(getElementSchema).optional(),
  }).strict();

export const TerminologyCapabilities_SoftwareSchema =
  TerminologyCapabilities_SoftwareSchemaInternal as z.ZodType<TerminologyCapabilities_Software>;
