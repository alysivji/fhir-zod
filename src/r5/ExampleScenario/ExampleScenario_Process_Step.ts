// Profile: http://hl7.org/fhir/StructureDefinition/ExampleScenario
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirCanonical, fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { ExampleScenario_Process_Step_Alternative } from "./ExampleScenario_Process_Step_Alternative";
import { ExampleScenario_Process_Step_AlternativeSchemaInternal } from "./ExampleScenario_Process_Step_Alternative";
import type { ExampleScenario_Process_Step_Operation } from "./ExampleScenario_Process_Step_Operation";
import { ExampleScenario_Process_Step_OperationSchemaInternal } from "./ExampleScenario_Process_Step_Operation";

/** A significant action that occurs as part of the process. */
export interface ExampleScenario_Process_Step extends BackboneElement {
	/** Indicates an alternative step that can be taken instead of the sub-process, scenario or operation.  E.g. to represent non-happy-path/exceptional/atypical circumstances. */
	alternative?: Array<ExampleScenario_Process_Step_Alternative>;
	/** The sequential number of the step, e.g. 1.2.5. */
	number?: string;
	/** Extensions for number */
	_number?: Element;
	/** The step represents a single operation invoked on receiver by sender. */
	operation?: ExampleScenario_Process_Step_Operation;
	/** If true, indicates that, following this step, there is a pause in the flow and the subsequent step will occur at some later time (triggered by some event). */
	pause?: boolean;
	/** Extensions for pause */
	_pause?: Element;
	/** Indicates that the step is a complex sub-process with its own steps. */
	process?: unknown;
	/** Indicates that the step is defined by a seaparate scenario instance. */
	workflow?: string;
	/** Extensions for workflow */
	_workflow?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExampleScenario_Process_Step_AlternativeSchema =
	(): z.ZodType<ExampleScenario_Process_Step_Alternative> =>
		ExampleScenario_Process_Step_AlternativeSchemaInternal as z.ZodType<ExampleScenario_Process_Step_Alternative>;
const getExampleScenario_Process_Step_OperationSchema =
	(): z.ZodType<ExampleScenario_Process_Step_Operation> =>
		ExampleScenario_Process_Step_OperationSchemaInternal as z.ZodType<ExampleScenario_Process_Step_Operation>;

/** @internal */
export const ExampleScenario_Process_StepSchemaInternal =
	BackboneElementSchemaInternal.extend({
		alternative: z
			.lazy(getExampleScenario_Process_Step_AlternativeSchema)
			.array()
			.optional(),
		number: fhirString().optional(),
		_number: z.lazy(getElementSchema).optional(),
		operation: z
			.lazy(getExampleScenario_Process_Step_OperationSchema)
			.optional(),
		pause: z.boolean().optional(),
		_pause: z.lazy(getElementSchema).optional(),
		process: z.unknown().optional(),
		workflow: fhirCanonical().optional(),
		_workflow: z.lazy(getElementSchema).optional(),
	}).strict();

export const ExampleScenario_Process_StepSchema =
	ExampleScenario_Process_StepSchemaInternal as z.ZodType<ExampleScenario_Process_Step>;
