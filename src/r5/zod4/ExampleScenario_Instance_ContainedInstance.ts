// Profile: http://hl7.org/fhir/StructureDefinition/ExampleScenario
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** References to other instances that can be found within this instance (e.g. the observations contained in a bundle). */
export interface ExampleScenario_Instance_ContainedInstance
	extends BackboneElement {
	/** A reference to the key of an instance found within this one. */
	instanceReference: string;
	/** Extensions for instanceReference */
	_instanceReference?: Element;
	/** A reference to the key of a specific version of an instance in this instance. */
	versionReference?: string;
	/** Extensions for versionReference */
	_versionReference?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ExampleScenario_Instance_ContainedInstanceSchemaInternal =
	BackboneElementSchemaInternal.extend({
		instanceReference: fhirString(),
		_instanceReference: z.lazy(getElementSchema).optional(),
		versionReference: fhirString().optional(),
		_versionReference: z.lazy(getElementSchema).optional(),
	}).strict();

export const ExampleScenario_Instance_ContainedInstanceSchema =
	ExampleScenario_Instance_ContainedInstanceSchemaInternal as z.ZodType<ExampleScenario_Instance_ContainedInstance>;
