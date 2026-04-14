// Profile: http://hl7.org/fhir/StructureDefinition/PlanDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { PlanDefinition_Actor_Option } from "./PlanDefinition_Actor_Option";
import { PlanDefinition_Actor_OptionSchemaInternal } from "./PlanDefinition_Actor_Option";

/** Actors represent the individuals or groups involved in the execution of the defined set of activities. */
export interface PlanDefinition_Actor extends BackboneElement {
	/** A description of how the actor fits into the overall actions of the plan definition. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** The characteristics of the candidates that could serve as the actor. */
	option: Array<PlanDefinition_Actor_Option>;
	/** A descriptive label for the actor. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getPlanDefinition_Actor_OptionSchema =
	(): z.ZodType<PlanDefinition_Actor_Option> =>
		PlanDefinition_Actor_OptionSchemaInternal as z.ZodType<PlanDefinition_Actor_Option>;

/** @internal */
export const PlanDefinition_ActorSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		option: z.lazy(getPlanDefinition_Actor_OptionSchema).array(),
		title: fhirString().optional(),
		_title: z.lazy(getElementSchema).optional(),
	}).strict();

export const PlanDefinition_ActorSchema =
	PlanDefinition_ActorSchemaInternal as z.ZodType<PlanDefinition_Actor>;
