// Profile: http://hl7.org/fhir/StructureDefinition/StructureDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { ElementDefinition } from "../ElementDefinition";
import { ElementDefinitionSchemaInternal } from "../ElementDefinition";

/** A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies. */
export interface StructureDefinition_Differential extends BackboneElement {
	/** Captures constraints on each element within the resource. */
	element: Array<ElementDefinition>;
}

const getElementDefinitionSchema = (): z.ZodType<ElementDefinition> =>
	ElementDefinitionSchemaInternal as z.ZodType<ElementDefinition>;

/** @internal */
export const StructureDefinition_DifferentialSchemaInternal =
	BackboneElementSchemaInternal.extend({
		element: z.lazy(getElementDefinitionSchema).array(),
	}).strict();

export const StructureDefinition_DifferentialSchema =
	StructureDefinition_DifferentialSchemaInternal as z.ZodType<StructureDefinition_Differential>;
