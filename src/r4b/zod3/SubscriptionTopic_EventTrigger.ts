// Profile: http://hl7.org/fhir/StructureDefinition/SubscriptionTopic
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import { fhirUri } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Event definition which can be used to trigger the SubscriptionTopic. */
export interface SubscriptionTopic_EventTrigger extends BackboneElement {
	/** The human readable description of an event to trigger a notification for the SubscriptionTopic - for example, "Patient Admission, as defined in HL7v2 via message ADT^A01". Multiple values are considered OR joined (e.g., matching any single event listed). */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** A well-defined event which can be used to trigger notifications from the SubscriptionTopic. */
	event: CodeableConcept;
	/** URL of the Resource that is the focus type used in this event trigger.  Relative URLs are relative to the StructureDefinition root of the implemented FHIR version (e.g., http://hl7.org/fhir/StructureDefinition). For example, "Patient" maps to http://hl7.org/fhir/StructureDefinition/Patient.  For more information, see <a href="elementdefinition-definitions.html#ElementDefinition.type.code">ElementDefinition.type.code</a>. */
	resource: string;
	/** Extensions for resource */
	_resource?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const SubscriptionTopic_EventTriggerSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		event: z.lazy(getCodeableConceptSchema),
		resource: fhirUri(),
		_resource: z.lazy(getElementSchema).optional(),
	}).strict();

export const SubscriptionTopic_EventTriggerSchema =
	SubscriptionTopic_EventTriggerSchemaInternal as z.ZodType<SubscriptionTopic_EventTrigger>;
