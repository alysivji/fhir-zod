// Profile: http://hl7.org/fhir/StructureDefinition/Bundle
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Information about the search process that lead to the creation of this entry. */
export interface Bundle_Entry_Search extends BackboneElement {
	/** Why this entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process. */
	mode?: "include" | "match" | "outcome";
	/** Extensions for mode */
	_mode?: Element;
	/** When searching, the server's search ranking score for the entry. */
	score?: number;
	/** Extensions for score */
	_score?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Bundle_Entry_SearchSchemaInternal =
	BackboneElementSchemaInternal.extend({
		mode: z.enum(["include", "match", "outcome"]).optional(),
		_mode: z.lazy(getElementSchema).optional(),
		score: z.number().optional(),
		_score: z.lazy(getElementSchema).optional(),
	}).strict();

export const Bundle_Entry_SearchSchema =
	Bundle_Entry_SearchSchemaInternal as z.ZodType<Bundle_Entry_Search>;
