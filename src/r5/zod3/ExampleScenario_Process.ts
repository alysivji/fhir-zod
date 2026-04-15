// Profile: http://hl7.org/fhir/StructureDefinition/ExampleScenario
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { ExampleScenario_Process_Step } from "./ExampleScenario_Process_Step";
import { ExampleScenario_Process_StepSchemaInternal } from "./ExampleScenario_Process_Step";

/** A group of operations that represents a significant step within a scenario. */
export interface ExampleScenario_Process extends BackboneElement {
	/** An explanation of what the process represents and what it does. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Description of the final state of the actors, environment and data after the process has been successfully completed. */
	postConditions?: string;
	/** Extensions for postConditions */
	_postConditions?: Element;
	/** Description of the initial state of the actors, environment and data before the process starts. */
	preConditions?: string;
	/** Extensions for preConditions */
	_preConditions?: Element;
	/** A significant action that occurs as part of the process. */
	step?: Array<ExampleScenario_Process_Step>;
	/** A short descriptive label the process to be used in tables or diagrams. */
	title: string;
	/** Extensions for title */
	_title?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExampleScenario_Process_StepSchema =
	(): z.ZodType<ExampleScenario_Process_Step> =>
		ExampleScenario_Process_StepSchemaInternal as z.ZodType<ExampleScenario_Process_Step>;

/** @internal */
export const ExampleScenario_ProcessSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		postConditions: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_postConditions: z.lazy(getElementSchema).optional(),
		preConditions: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_preConditions: z.lazy(getElementSchema).optional(),
		step: z.lazy(getExampleScenario_Process_StepSchema).array().optional(),
		title: fhirString(),
		_title: z.lazy(getElementSchema).optional(),
	}).strict();

export const ExampleScenario_ProcessSchema =
	ExampleScenario_ProcessSchemaInternal as z.ZodType<ExampleScenario_Process>;
