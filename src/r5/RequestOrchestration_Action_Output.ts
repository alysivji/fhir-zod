// Profile: http://hl7.org/fhir/StructureDefinition/RequestOrchestration
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { DataRequirement } from "./DataRequirement";
import { DataRequirementSchemaInternal } from "./DataRequirement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Defines the outputs of the action, if any. */
export interface RequestOrchestration_Action_Output extends BackboneElement {
	/** Points to an existing input or output element that is results as output from the action. */
	relatedData?: string;
	/** Extensions for relatedData */
	_relatedData?: Element;
	/** Defines the data that results as output from the action. */
	requirement?: DataRequirement;
	/** A human-readable label for the data requirement used to label data flows in BPMN or similar diagrams. Also provides a human readable label when rendering the data requirement that conveys its purpose to human readers. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
}

const getDataRequirementSchema = (): z.ZodType<DataRequirement> =>
	DataRequirementSchemaInternal as z.ZodType<DataRequirement>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const RequestOrchestration_Action_OutputSchemaInternal =
	BackboneElementSchemaInternal.extend({
		relatedData: fhirString().optional(),
		_relatedData: z.lazy(getElementSchema).optional(),
		requirement: z.lazy(getDataRequirementSchema).optional(),
		title: fhirString().optional(),
		_title: z.lazy(getElementSchema).optional(),
	}).strict();

export const RequestOrchestration_Action_OutputSchema =
	RequestOrchestration_Action_OutputSchemaInternal as z.ZodType<RequestOrchestration_Action_Output>;
