// Profile: http://hl7.org/fhir/StructureDefinition/RequestOrchestration
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirCanonical } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** The participant that should perform or be responsible for this action. */
export interface RequestOrchestration_Action_Participant
	extends BackboneElement {
	/** A reference to the actual participant. */
	actorCanonical?: string;
	/** Extensions for actorCanonical */
	_actorCanonical?: Element;
	/** A reference to the actual participant. */
	actorReference?: Reference;
	/** Indicates how the actor will be involved in the action - author, reviewer, witness, etc. */
	function?: CodeableConcept;
	/** The role the participant should play in performing the described action. */
	role?: CodeableConcept;
	/** The type of participant in the action. */
	type?:
		| "careteam"
		| "device"
		| "group"
		| "healthcareservice"
		| "location"
		| "organization"
		| "patient"
		| "practitioner"
		| "practitionerrole"
		| "relatedperson";
	/** Extensions for type */
	_type?: Element;
	/** The type of participant in the action. */
	typeCanonical?: string;
	/** Extensions for typeCanonical */
	_typeCanonical?: Element;
	/** The type of participant in the action. */
	typeReference?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const RequestOrchestration_Action_ParticipantSchemaInternal =
	BackboneElementSchemaInternal.extend({
		actorCanonical: fhirCanonical().optional(),
		_actorCanonical: z.lazy(getElementSchema).optional(),
		actorReference: z.lazy(getReferenceSchema).optional(),
		function: z.lazy(getCodeableConceptSchema).optional(),
		role: z.lazy(getCodeableConceptSchema).optional(),
		type: z
			.enum([
				"careteam",
				"device",
				"group",
				"healthcareservice",
				"location",
				"organization",
				"patient",
				"practitioner",
				"practitionerrole",
				"relatedperson",
			])
			.optional(),
		_type: z.lazy(getElementSchema).optional(),
		typeCanonical: fhirCanonical().optional(),
		_typeCanonical: z.lazy(getElementSchema).optional(),
		typeReference: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const actor_x_Present = ["actorCanonical", "actorReference"].filter(
				(field) => record[field] !== undefined,
			);
			if (actor_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of actorCanonical, actorReference may be present for actor[x]",
					path: [actor_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.actorReference,
				"actorReference",
				[
					"http://hl7.org/fhir/StructureDefinition/CareTeam",
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/DeviceDefinition",
					"http://hl7.org/fhir/StructureDefinition/Endpoint",
					"http://hl7.org/fhir/StructureDefinition/Group",
					"http://hl7.org/fhir/StructureDefinition/HealthcareService",
					"http://hl7.org/fhir/StructureDefinition/Location",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				[
					"CareTeam",
					"Device",
					"DeviceDefinition",
					"Endpoint",
					"Group",
					"HealthcareService",
					"Location",
					"Organization",
					"Patient",
					"Practitioner",
					"PractitionerRole",
					"RelatedPerson",
				],
				ctx,
			);
			validateReferenceTarget(
				record.typeReference,
				"typeReference",
				[
					"http://hl7.org/fhir/StructureDefinition/CareTeam",
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/DeviceDefinition",
					"http://hl7.org/fhir/StructureDefinition/Endpoint",
					"http://hl7.org/fhir/StructureDefinition/Group",
					"http://hl7.org/fhir/StructureDefinition/HealthcareService",
					"http://hl7.org/fhir/StructureDefinition/Location",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				[
					"CareTeam",
					"Device",
					"DeviceDefinition",
					"Endpoint",
					"Group",
					"HealthcareService",
					"Location",
					"Organization",
					"Patient",
					"Practitioner",
					"PractitionerRole",
					"RelatedPerson",
				],
				ctx,
			);
		});

export const RequestOrchestration_Action_ParticipantSchema =
	RequestOrchestration_Action_ParticipantSchemaInternal as z.ZodType<RequestOrchestration_Action_Participant>;
