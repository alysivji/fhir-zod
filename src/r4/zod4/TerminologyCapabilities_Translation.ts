// Profile: http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

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
