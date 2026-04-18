// Profile: http://hl7.org/fhir/StructureDefinition/AuditEvent
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirString, fhirUri } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { AuditEvent_Agent_Network } from "./AuditEvent_Agent_Network";
import { AuditEvent_Agent_NetworkSchemaInternal } from "./AuditEvent_Agent_Network";

/** An actor taking an active role in the event or activity that is logged. */
export interface AuditEvent_Agent extends BackboneElement {
	/** Alternative agent Identifier. For a human, this should be a user identifier text string from authentication system. This identifier would be one known to a common authentication system (e.g. single sign-on), if available. */
	altId?: string;
	/** Extensions for altId */
	_altId?: Element;
	/** Where the event occurred. */
	location?: Reference;
	/** Type of media involved. Used when the event is about exporting/importing onto media. */
	media?: Coding;
	/** Human-meaningful name for the agent. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** Logical network location for application activity, if the activity has a network location. */
	network?: AuditEvent_Agent_Network;
	/** The policy or plan that authorized the activity being recorded. Typically, a single activity may have multiple applicable policies, such as patient consent, guarantor funding, etc. The policy would also indicate the security token used. */
	policy?: Array<string | null>;
	/** Extensions for policy */
	_policy?: Array<Element | null>;
	/** The reason (purpose of use), specific to this agent, that was used during the event being recorded. */
	purposeOfUse?: Array<CodeableConcept>;
	/** Indicator that the user is or is not the requestor, or initiator, for the event being audited. */
	requestor: boolean;
	/** Extensions for requestor */
	_requestor?: Element;
	/** The security role that the user was acting under, that come from local codes defined by the access control security system (e.g. RBAC, ABAC) used in the local context. */
	role?: Array<CodeableConcept>;
	/** Specification of the participation type the user plays when performing the event. */
	type?: CodeableConcept;
	/** Reference to who this agent is that was involved in the event. */
	who?: Reference;
}

const getAuditEvent_Agent_NetworkSchema =
	(): z.ZodType<AuditEvent_Agent_Network> =>
		AuditEvent_Agent_NetworkSchemaInternal as z.ZodType<AuditEvent_Agent_Network>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const AuditEvent_AgentSchemaInternal =
	BackboneElementSchemaInternal.extend({
		altId: fhirString().optional(),
		_altId: z.lazy(getElementSchema).optional(),
		location: z.lazy(getReferenceSchema).optional(),
		media: z.lazy(getCodingSchema).optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		network: z.lazy(getAuditEvent_Agent_NetworkSchema).optional(),
		policy: fhirUri().nullable().array().optional(),
		_policy: z.lazy(getElementSchema).nullable().array().optional(),
		purposeOfUse: z.lazy(getCodeableConceptSchema).array().optional(),
		requestor: z.boolean(),
		_requestor: z.lazy(getElementSchema).optional(),
		role: z.lazy(getCodeableConceptSchema).array().optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
		who: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.policy,
				record._policy,
				"policy",
				"_policy",
				ctx,
			);
			validateReferenceTarget(
				record.location,
				"location",
				["http://hl7.org/fhir/StructureDefinition/Location"],
				["Location"],
				ctx,
			);
			validateReferenceTarget(
				record.who,
				"who",
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				[
					"Device",
					"Organization",
					"Patient",
					"Practitioner",
					"PractitionerRole",
					"RelatedPerson",
				],
				ctx,
			);
		});

export const AuditEvent_AgentSchema =
	AuditEvent_AgentSchemaInternal as z.ZodType<AuditEvent_Agent>;
