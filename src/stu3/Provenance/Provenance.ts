// Profile: http://hl7.org/fhir/StructureDefinition/Provenance
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirInstant, fhirUri } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Signature } from "../Signature";
import { SignatureSchemaInternal } from "../Signature";
import type { Provenance_Agent } from "./Provenance_Agent";
import { Provenance_AgentSchemaInternal } from "./Provenance_Agent";
import type { Provenance_Entity } from "./Provenance_Entity";
import { Provenance_EntitySchemaInternal } from "./Provenance_Entity";

/** Base StructureDefinition for Provenance Resource */
export interface Provenance extends DomainResource {
	/** An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities. */
	activity?: Coding;
	/** An actor taking a role in an activity  for which it can be assigned some degree of responsibility for the activity taking place. */
	agent: Array<Provenance_Agent>;
	/** An entity used in this activity. */
	entity?: Array<Provenance_Entity>;
	/** Where the activity occurred, if relevant. */
	location?: Reference;
	/** The period during which the activity occurred. */
	period?: Period;
	/** Policy or plan the activity was defined by. Typically, a single activity may have multiple applicable policy documents, such as patient consent, guarantor funding, etc. */
	policy?: Array<string | null>;
	/** Extensions for policy */
	_policy?: Array<Element | null>;
	/** The reason that the activity was taking place. */
	reason?: Array<Coding>;
	/** The instant of time at which the activity was recorded. */
	recorded: string;
	/** Extensions for recorded */
	_recorded?: Element;
	/** This is a Provenance resource. */
	resourceType: "Provenance";
	/** A digital signature on the target Reference(s). The signer should match a Provenance.agent. The purpose of the signature is indicated. */
	signature?: Array<Signature>;
	/** The Reference(s) that were generated or updated by  the activity described in this resource. A provenance can point to more than one target if multiple resources were created/updated by the same activity. */
	target: Array<Reference>;
}

const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getProvenance_AgentSchema = (): z.ZodType<Provenance_Agent> =>
	Provenance_AgentSchemaInternal as z.ZodType<Provenance_Agent>;
const getProvenance_EntitySchema = (): z.ZodType<Provenance_Entity> =>
	Provenance_EntitySchemaInternal as z.ZodType<Provenance_Entity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getSignatureSchema = (): z.ZodType<Signature> =>
	SignatureSchemaInternal as z.ZodType<Signature>;

/** @internal */
export const ProvenanceSchemaInternal = DomainResourceSchemaInternal.extend({
	activity: z.lazy(getCodingSchema).optional(),
	agent: z.lazy(getProvenance_AgentSchema).array(),
	entity: z.lazy(getProvenance_EntitySchema).array().optional(),
	location: z.lazy(getReferenceSchema).optional(),
	period: z.lazy(getPeriodSchema).optional(),
	policy: fhirUri().nullable().array().optional(),
	_policy: z.lazy(getElementSchema).nullable().array().optional(),
	reason: z.lazy(getCodingSchema).array().optional(),
	recorded: fhirInstant(),
	_recorded: z.lazy(getElementSchema).optional(),
	resourceType: z.literal("Provenance"),
	signature: z.lazy(getSignatureSchema).array().optional(),
	target: z.lazy(getReferenceSchema).array(),
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
			record.target,
			"target",
			["http://hl7.org/fhir/StructureDefinition/Resource"],
			["Resource"],
			ctx,
		);
	});

export const ProvenanceSchema =
	ProvenanceSchemaInternal as z.ZodType<Provenance>;
