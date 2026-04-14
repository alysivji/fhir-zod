// Profile: http://hl7.org/fhir/StructureDefinition/PlanDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Indicates who should participate in performing the action described. */
export interface PlanDefinition_Action_Participant extends BackboneElement {
	/** The role the participant should play in performing the described action. */
	role?: CodeableConcept;
	/** The type of participant in the action. */
	type: "device" | "patient" | "practitioner" | "related-person";
	/** Extensions for type */
	_type?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const PlanDefinition_Action_ParticipantSchemaInternal =
	BackboneElementSchemaInternal.extend({
		role: z.lazy(getCodeableConceptSchema).optional(),
		type: z.enum(["device", "patient", "practitioner", "related-person"]),
		_type: z.lazy(getElementSchema).optional(),
	}).strict();

export const PlanDefinition_Action_ParticipantSchema =
	PlanDefinition_Action_ParticipantSchemaInternal as z.ZodType<PlanDefinition_Action_Participant>;
