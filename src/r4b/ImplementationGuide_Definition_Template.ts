// Profile: http://hl7.org/fhir/StructureDefinition/ImplementationGuide
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { fhirCode, fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A template for building resources. */
export interface ImplementationGuide_Definition_Template
	extends BackboneElement {
	/** Type of template specified. */
	code: string;
	/** Extensions for code */
	_code?: Element;
	/** The scope in which the template applies. */
	scope?: string;
	/** Extensions for scope */
	_scope?: Element;
	/** The source location for the template. */
	source: string;
	/** Extensions for source */
	_source?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ImplementationGuide_Definition_TemplateSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: fhirCode(),
		_code: z.lazy(getElementSchema).optional(),
		scope: fhirString().optional(),
		_scope: z.lazy(getElementSchema).optional(),
		source: fhirString(),
		_source: z.lazy(getElementSchema).optional(),
	}).strict();

export const ImplementationGuide_Definition_TemplateSchema =
	ImplementationGuide_Definition_TemplateSchemaInternal as z.ZodType<ImplementationGuide_Definition_Template>;
