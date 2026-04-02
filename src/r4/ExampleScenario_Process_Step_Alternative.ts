// Profile: http://hl7.org/fhir/StructureDefinition/ExampleScenario
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Indicates an alternative step that can be taken instead of the operations on the base step in exceptional/atypical circumstances. */
export interface ExampleScenario_Process_Step_Alternative
	extends BackboneElement {
	/** A human-readable description of the alternative explaining when the alternative should occur rather than the base step. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** What happens in each alternative option. */
	step?: Array<unknown>;
	/** The label to display for the alternative that gives a sense of the circumstance in which the alternative should be invoked. */
	title: string;
	/** Extensions for title */
	_title?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ExampleScenario_Process_Step_AlternativeSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: z.string().optional(),
		_description: z.lazy(getElementSchema).optional(),
		step: z.unknown().array().optional(),
		title: z.string().regex(/[ \r\n\t\S]+/),
		_title: z.lazy(getElementSchema).optional(),
	}).strict();

export const ExampleScenario_Process_Step_AlternativeSchema =
	ExampleScenario_Process_Step_AlternativeSchemaInternal as z.ZodType<ExampleScenario_Process_Step_Alternative>;
