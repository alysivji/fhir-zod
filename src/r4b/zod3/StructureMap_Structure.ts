// Profile: http://hl7.org/fhir/StructureDefinition/StructureMap
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import { fhirCanonical, fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A structure definition used by this map. The structure definition may describe instances that are converted, or the instances that are produced. */
export interface StructureMap_Structure extends BackboneElement {
	/** The name used for this type in the map. */
	alias?: string;
	/** Extensions for alias */
	_alias?: Element;
	/** Documentation that describes how the structure is used in the mapping. */
	documentation?: string;
	/** Extensions for documentation */
	_documentation?: Element;
	/** How the referenced structure is used in this mapping. */
	mode: "produced" | "queried" | "source" | "target";
	/** Extensions for mode */
	_mode?: Element;
	/** The canonical reference to the structure. */
	url: string;
	/** Extensions for url */
	_url?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const StructureMap_StructureSchemaInternal =
	BackboneElementSchemaInternal.extend({
		alias: fhirString().optional(),
		_alias: z.lazy(getElementSchema).optional(),
		documentation: fhirString().optional(),
		_documentation: z.lazy(getElementSchema).optional(),
		mode: z.enum(["produced", "queried", "source", "target"]),
		_mode: z.lazy(getElementSchema).optional(),
		url: fhirCanonical(),
		_url: z.lazy(getElementSchema).optional(),
	}).strict();

export const StructureMap_StructureSchema =
	StructureMap_StructureSchemaInternal as z.ZodType<StructureMap_Structure>;
