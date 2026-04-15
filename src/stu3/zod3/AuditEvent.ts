// Profile: http://hl7.org/fhir/StructureDefinition/AuditEvent
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { fhirInstant, fhirString } from "../../shared/fhir-primitives-zod3";
import type { AuditEvent_Agent } from "./AuditEvent_Agent";
import { AuditEvent_AgentSchemaInternal } from "./AuditEvent_Agent";
import type { AuditEvent_Entity } from "./AuditEvent_Entity";
import { AuditEvent_EntitySchemaInternal } from "./AuditEvent_Entity";
import type { AuditEvent_Source } from "./AuditEvent_Source";
import { AuditEvent_SourceSchemaInternal } from "./AuditEvent_Source";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Base StructureDefinition for AuditEvent Resource */
export interface AuditEvent extends DomainResource {
	/** Indicator for type of action performed during the event that generated the audit. */
	action?: "C" | "D" | "E" | "R" | "U";
	/** Extensions for action */
	_action?: Element;
	/** An actor taking an active role in the event or activity that is logged. */
	agent: Array<AuditEvent_Agent>;
	/** Specific instances of data or objects that have been accessed. */
	entity?: Array<AuditEvent_Entity>;
	/** Indicates whether the event succeeded or failed. */
	outcome?: "0" | "12" | "4" | "8";
	/** Extensions for outcome */
	_outcome?: Element;
	/** A free text description of the outcome of the event. */
	outcomeDesc?: string;
	/** Extensions for outcomeDesc */
	_outcomeDesc?: Element;
	/** The purposeOfUse (reason) that was used during the event being recorded. */
	purposeOfEvent?: Array<CodeableConcept>;
	/** The time when the event occurred on the source. */
	recorded: string;
	/** Extensions for recorded */
	_recorded?: Element;
	/** This is a AuditEvent resource. */
	resourceType: "AuditEvent";
	/** The system that is reporting the event. */
	source: AuditEvent_Source;
	/** Identifier for the category of event. */
	subtype?: Array<Coding>;
	/** Identifier for a family of the event.  For example, a menu item, program, rule, policy, function code, application name or URL. It identifies the performed function. */
	type: Coding;
}

const getAuditEvent_AgentSchema = (): z.ZodType<AuditEvent_Agent> =>
	AuditEvent_AgentSchemaInternal as z.ZodType<AuditEvent_Agent>;
const getAuditEvent_EntitySchema = (): z.ZodType<AuditEvent_Entity> =>
	AuditEvent_EntitySchemaInternal as z.ZodType<AuditEvent_Entity>;
const getAuditEvent_SourceSchema = (): z.ZodType<AuditEvent_Source> =>
	AuditEvent_SourceSchemaInternal as z.ZodType<AuditEvent_Source>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const AuditEventSchemaInternal = DomainResourceSchemaInternal.extend({
	action: z.enum(["C", "D", "E", "R", "U"]).optional(),
	_action: z.lazy(getElementSchema).optional(),
	agent: z.lazy(getAuditEvent_AgentSchema).array(),
	entity: z.lazy(getAuditEvent_EntitySchema).array().optional(),
	outcome: z.enum(["0", "12", "4", "8"]).optional(),
	_outcome: z.lazy(getElementSchema).optional(),
	outcomeDesc: fhirString().optional(),
	_outcomeDesc: z.lazy(getElementSchema).optional(),
	purposeOfEvent: z.lazy(getCodeableConceptSchema).array().optional(),
	recorded: fhirInstant(),
	_recorded: z.lazy(getElementSchema).optional(),
	resourceType: z.literal("AuditEvent"),
	source: z.lazy(getAuditEvent_SourceSchema),
	subtype: z.lazy(getCodingSchema).array().optional(),
	type: z.lazy(getCodingSchema),
}).strict();

export const AuditEventSchema =
	AuditEventSchemaInternal as z.ZodType<AuditEvent>;
