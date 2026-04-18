// Source: https://hl7.org/fhir/R4B/terminologycapabilities-definitions.html#TerminologyCapabilities.translation
// Profile: http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation. */
export interface TerminologyCapabilities_Translation extends BackboneElement {
  /** Whether the client must identify the map. */
  needsMap: boolean;
  /** Extensions for needsMap */
  _needsMap?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const TerminologyCapabilities_TranslationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    needsMap: z.boolean(),
    _needsMap: z.lazy(getElementSchema).optional(),
  }).strict();

export const TerminologyCapabilities_TranslationSchema =
  TerminologyCapabilities_TranslationSchemaInternal as z.ZodType<TerminologyCapabilities_Translation>;
