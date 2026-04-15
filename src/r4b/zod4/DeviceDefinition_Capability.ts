// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";

/** Device capabilities. */
export interface DeviceDefinition_Capability extends BackboneElement {
	/** Description of capability. */
	description?: Array<CodeableConcept>;
	/** Type of capability. */
	type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const DeviceDefinition_CapabilitySchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: z.lazy(getCodeableConceptSchema).array().optional(),
		type: z.lazy(getCodeableConceptSchema),
	}).strict();

export const DeviceDefinition_CapabilitySchema =
	DeviceDefinition_CapabilitySchemaInternal as z.ZodType<DeviceDefinition_Capability>;
