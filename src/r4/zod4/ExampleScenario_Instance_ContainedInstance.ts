// Profile: http://hl7.org/fhir/StructureDefinition/ExampleScenario
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Resources contained in the instance (e.g. the observations contained in a bundle). */
export interface ExampleScenario_Instance_ContainedInstance
	extends BackboneElement {
	/** Each resource contained in the instance. */
	resourceId: string;
	/** Extensions for resourceId */
	_resourceId?: Element;
	/** A specific version of a resource contained in the instance. */
	versionId?: string;
	/** Extensions for versionId */
	_versionId?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ExampleScenario_Instance_ContainedInstanceSchemaInternal =
	BackboneElementSchemaInternal.extend({
		resourceId: fhirString(),
		_resourceId: z.lazy(getElementSchema).optional(),
		versionId: fhirString().optional(),
		_versionId: z.lazy(getElementSchema).optional(),
	}).strict();

export const ExampleScenario_Instance_ContainedInstanceSchema =
	ExampleScenario_Instance_ContainedInstanceSchemaInternal as z.ZodType<ExampleScenario_Instance_ContainedInstance>;
