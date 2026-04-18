// Profile: http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation. */
export interface TerminologyCapabilities_ValidateCode extends BackboneElement {
  /** Whether translations are validated. */
  translations: boolean;
  /** Extensions for translations */
  _translations?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const TerminologyCapabilities_ValidateCodeSchemaInternal =
  BackboneElementSchemaInternal.extend({
    translations: z.boolean(),
    _translations: z.lazy(getElementSchema).optional(),
  }).strict();

export const TerminologyCapabilities_ValidateCodeSchema =
  TerminologyCapabilities_ValidateCodeSchemaInternal as z.ZodType<TerminologyCapabilities_ValidateCode>;
