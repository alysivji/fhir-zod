// Profile: http://hl7.org/fhir/StructureDefinition/ImplementationGuide
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Defines how IG is built by tools. */
export interface ImplementationGuide_Definition_Parameter
	extends BackboneElement {
	/** apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template. */
	code:
		| "apply"
		| "expansion-parameter"
		| "generate-json"
		| "generate-turtle"
		| "generate-xml"
		| "html-template"
		| "path-pages"
		| "path-resource"
		| "path-tx-cache"
		| "rule-broken-links";
	/** Extensions for code */
	_code?: Element;
	/** Value for named type. */
	value: string;
	/** Extensions for value */
	_value?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ImplementationGuide_Definition_ParameterSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.enum([
			"apply",
			"expansion-parameter",
			"generate-json",
			"generate-turtle",
			"generate-xml",
			"html-template",
			"path-pages",
			"path-resource",
			"path-tx-cache",
			"rule-broken-links",
		]),
		_code: z.lazy(getElementSchema).optional(),
		value: fhirString(),
		_value: z.lazy(getElementSchema).optional(),
	}).strict();

export const ImplementationGuide_Definition_ParameterSchema =
	ImplementationGuide_Definition_ParameterSchemaInternal as z.ZodType<ImplementationGuide_Definition_Parameter>;
