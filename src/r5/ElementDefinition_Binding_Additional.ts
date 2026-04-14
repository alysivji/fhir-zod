// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirCanonical, fhirString } from "../shared/fhir-primitives";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** Additional bindings that help applications implementing this element. Additional bindings do not replace the main binding but provide more information and/or context. */
export interface ElementDefinition_Binding_Additional extends Element {
	/** Whether the binding applies to all repeats, or just to any one of them. This is only relevant for elements that can repeat. */
	any?: boolean;
	/** Extensions for any */
	_any?: Element;
	/** Documentation of the purpose of use of the bindingproviding additional information about how it is intended to be used. */
	documentation?: string;
	/** Extensions for documentation */
	_documentation?: Element;
	/** The use of this additional binding. */
	purpose:
		| "candidate"
		| "component"
		| "current"
		| "extensible"
		| "maximum"
		| "minimum"
		| "preferred"
		| "required"
		| "starter"
		| "ui";
	/** Extensions for purpose */
	_purpose?: Element;
	/** Concise documentation - for summary tables. */
	shortDoco?: string;
	/** Extensions for shortDoco */
	_shortDoco?: Element;
	/** Qualifies the usage of the binding. Typically bindings are qualified by jurisdiction, but they may also be qualified by gender, workflow status, clinical domain etc. The information to decide whether a usege context applies is usually outside the resource, determined by context, and this might present challenges for validation tooling. */
	usage?: Array<UsageContext>;
	/** The valueSet that is being bound for the purpose. */
	valueSet: string;
	/** Extensions for valueSet */
	_valueSet?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const ElementDefinition_Binding_AdditionalSchemaInternal =
	ElementSchemaInternal.extend({
		any: z.boolean().optional(),
		_any: z.lazy(getElementSchema).optional(),
		documentation: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_documentation: z.lazy(getElementSchema).optional(),
		purpose: z.enum([
			"candidate",
			"component",
			"current",
			"extensible",
			"maximum",
			"minimum",
			"preferred",
			"required",
			"starter",
			"ui",
		]),
		_purpose: z.lazy(getElementSchema).optional(),
		shortDoco: fhirString().optional(),
		_shortDoco: z.lazy(getElementSchema).optional(),
		usage: z.lazy(getUsageContextSchema).array().optional(),
		valueSet: fhirCanonical(),
		_valueSet: z.lazy(getElementSchema).optional(),
	}).strict();

export const ElementDefinition_Binding_AdditionalSchema =
	ElementDefinition_Binding_AdditionalSchemaInternal as z.ZodType<ElementDefinition_Binding_Additional>;
