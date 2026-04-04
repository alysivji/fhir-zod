// Profile: http://hl7.org/fhir/StructureDefinition/ActivityDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-04T22:42:43.846Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Indicates who should participate in performing the action described. */
export interface ActivityDefinition_Participant extends BackboneElement {
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
export const ActivityDefinition_ParticipantSchemaInternal =
	BackboneElementSchemaInternal.extend({
		role: z.lazy(getCodeableConceptSchema).optional(),
		type: z.enum(["device", "patient", "practitioner", "related-person"]),
		_type: z.lazy(getElementSchema).optional(),
	}).strict();

export const ActivityDefinition_ParticipantSchema =
	ActivityDefinition_ParticipantSchemaInternal as z.ZodType<ActivityDefinition_Participant>;
