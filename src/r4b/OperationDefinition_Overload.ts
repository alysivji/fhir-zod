// Profile: http://hl7.org/fhir/StructureDefinition/OperationDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Defines an appropriate combination of parameters to use when invoking this operation, to help code generators when generating overloaded parameter sets for this operation. */
export interface OperationDefinition_Overload extends BackboneElement {
	/** Comments to go on overload. */
	comment?: string;
	/** Extensions for comment */
	_comment?: Element;
	/** Name of parameter to include in overload. */
	parameterName?: Array<string>;
	/** Extensions for parameterName */
	_parameterName?: Array<Element>;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const OperationDefinition_OverloadSchemaInternal =
	BackboneElementSchemaInternal.extend({
		comment: fhirString().optional(),
		_comment: z.lazy(getElementSchema).optional(),
		parameterName: fhirString().array().optional(),
		_parameterName: z.lazy(getElementSchema).array().optional(),
	}).strict();

export const OperationDefinition_OverloadSchema =
	OperationDefinition_OverloadSchemaInternal as z.ZodType<OperationDefinition_Overload>;
