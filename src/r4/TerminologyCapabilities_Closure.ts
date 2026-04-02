// Profile: http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Whether the $closure operation is supported. */
export interface TerminologyCapabilities_Closure extends BackboneElement {
	/** If cross-system closure is supported. */
	translation?: boolean;
	/** Extensions for translation */
	_translation?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const TerminologyCapabilities_ClosureSchemaInternal =
	BackboneElementSchemaInternal.extend({
		translation: z.boolean().optional(),
		_translation: z.lazy(getElementSchema).optional(),
	}).strict();

export const TerminologyCapabilities_ClosureSchema =
	TerminologyCapabilities_ClosureSchemaInternal as z.ZodType<TerminologyCapabilities_Closure>;
