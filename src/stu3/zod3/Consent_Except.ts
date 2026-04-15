// Profile: http://hl7.org/fhir/StructureDefinition/Consent
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Consent_Except_Actor } from "./Consent_Except_Actor";
import { Consent_Except_ActorSchemaInternal } from "./Consent_Except_Actor";
import type { Consent_Except_Data } from "./Consent_Except_Data";
import { Consent_Except_DataSchemaInternal } from "./Consent_Except_Data";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";

/** An exception to the base policy of this consent. An exception can be an addition or removal of access permissions. */
export interface Consent_Except extends BackboneElement {
	/** Actions controlled by this Exception. */
	action?: Array<CodeableConcept>;
	/** Who or what is controlled by this Exception. Use group to identify a set of actors by some property they share (e.g. 'admitting officers'). */
	actor?: Array<Consent_Except_Actor>;
	/** The class of information covered by this exception. The type can be a FHIR resource type, a profile on a type, or a CDA document, or some other type that indicates what sort of information the consent relates to. */
	class?: Array<Coding>;
	/** If this code is found in an instance, then the exception applies. */
	code?: Array<Coding>;
	/** The resources controlled by this exception, if specific resources are referenced. */
	data?: Array<Consent_Except_Data>;
	/** Clinical or Operational Relevant period of time that bounds the data controlled by this exception. */
	dataPeriod?: Period;
	/** The timeframe in this exception is valid. */
	period?: Period;
	/** The context of the activities a user is taking - why the user is accessing the data - that are controlled by this exception. */
	purpose?: Array<Coding>;
	/** A set of security labels that define which resources are controlled by this exception. If more than one label is specified, all resources must have all the specified labels. */
	securityLabel?: Array<Coding>;
	/** Action  to take - permit or deny - when the exception conditions are met. */
	type: "deny" | "permit";
	/** Extensions for type */
	_type?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getConsent_Except_ActorSchema = (): z.ZodType<Consent_Except_Actor> =>
	Consent_Except_ActorSchemaInternal as z.ZodType<Consent_Except_Actor>;
const getConsent_Except_DataSchema = (): z.ZodType<Consent_Except_Data> =>
	Consent_Except_DataSchemaInternal as z.ZodType<Consent_Except_Data>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const Consent_ExceptSchemaInternal =
	BackboneElementSchemaInternal.extend({
		action: z.lazy(getCodeableConceptSchema).array().optional(),
		actor: z.lazy(getConsent_Except_ActorSchema).array().optional(),
		class: z.lazy(getCodingSchema).array().optional(),
		code: z.lazy(getCodingSchema).array().optional(),
		data: z.lazy(getConsent_Except_DataSchema).array().optional(),
		dataPeriod: z.lazy(getPeriodSchema).optional(),
		period: z.lazy(getPeriodSchema).optional(),
		purpose: z.lazy(getCodingSchema).array().optional(),
		securityLabel: z.lazy(getCodingSchema).array().optional(),
		type: z.enum(["deny", "permit"]),
		_type: z.lazy(getElementSchema).optional(),
	}).strict();

export const Consent_ExceptSchema =
	Consent_ExceptSchemaInternal as z.ZodType<Consent_Except>;
