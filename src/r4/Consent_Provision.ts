// Profile: http://hl7.org/fhir/StructureDefinition/Consent
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Consent_Provision_Actor } from "./Consent_Provision_Actor";
import { Consent_Provision_ActorSchemaInternal } from "./Consent_Provision_Actor";
import type { Consent_Provision_Data } from "./Consent_Provision_Data";
import { Consent_Provision_DataSchemaInternal } from "./Consent_Provision_Data";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";

/** An exception to the base policy of this consent. An exception can be an addition or removal of access permissions. */
export interface Consent_Provision extends BackboneElement {
	/** Actions controlled by this Rule. */
	action?: Array<CodeableConcept>;
	/** Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers'). */
	actor?: Array<Consent_Provision_Actor>;
	/** The class of information covered by this rule. The type can be a FHIR resource type, a profile on a type, or a CDA document, or some other type that indicates what sort of information the consent relates to. */
	class?: Array<Coding>;
	/** If this code is found in an instance, then the rule applies. */
	code?: Array<CodeableConcept>;
	/** The resources controlled by this rule if specific resources are referenced. */
	data?: Array<Consent_Provision_Data>;
	/** Clinical or Operational Relevant period of time that bounds the data controlled by this rule. */
	dataPeriod?: Period;
	/** The timeframe in this rule is valid. */
	period?: Period;
	/** Rules which provide exceptions to the base rule or subrules. */
	provision?: Array<unknown>;
	/** The context of the activities a user is taking - why the user is accessing the data - that are controlled by this rule. */
	purpose?: Array<Coding>;
	/** A security label, comprised of 0..* security label fields (Privacy tags), which define which resources are controlled by this exception. */
	securityLabel?: Array<Coding>;
	/** Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules. */
	type?: "deny" | "permit";
	/** Extensions for type */
	_type?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getConsent_Provision_ActorSchema =
	(): z.ZodType<Consent_Provision_Actor> =>
		Consent_Provision_ActorSchemaInternal as z.ZodType<Consent_Provision_Actor>;
const getConsent_Provision_DataSchema = (): z.ZodType<Consent_Provision_Data> =>
	Consent_Provision_DataSchemaInternal as z.ZodType<Consent_Provision_Data>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const Consent_ProvisionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		action: z.lazy(getCodeableConceptSchema).array().optional(),
		actor: z.lazy(getConsent_Provision_ActorSchema).array().optional(),
		class: z.lazy(getCodingSchema).array().optional(),
		code: z.lazy(getCodeableConceptSchema).array().optional(),
		data: z.lazy(getConsent_Provision_DataSchema).array().optional(),
		dataPeriod: z.lazy(getPeriodSchema).optional(),
		period: z.lazy(getPeriodSchema).optional(),
		provision: z.unknown().array().optional(),
		purpose: z.lazy(getCodingSchema).array().optional(),
		securityLabel: z.lazy(getCodingSchema).array().optional(),
		type: z.enum(["deny", "permit"]).optional(),
		_type: z.lazy(getElementSchema).optional(),
	}).strict();

export const Consent_ProvisionSchema =
	Consent_ProvisionSchemaInternal as z.ZodType<Consent_Provision>;
