// Profile: http://hl7.org/fhir/StructureDefinition/Consent
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { fhirDateTime, fhirUri } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Attachment } from "../Attachment";
import { AttachmentSchemaInternal } from "../Attachment";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Consent_Actor } from "./Consent_Actor";
import { Consent_ActorSchemaInternal } from "./Consent_Actor";
import type { Consent_Data } from "./Consent_Data";
import { Consent_DataSchemaInternal } from "./Consent_Data";
import type { Consent_Except } from "./Consent_Except";
import { Consent_ExceptSchemaInternal } from "./Consent_Except";
import type { Consent_Policy } from "./Consent_Policy";
import { Consent_PolicySchemaInternal } from "./Consent_Policy";

/** Base StructureDefinition for Consent Resource */
export interface Consent extends DomainResource {
	/** Actions controlled by this consent. */
	action?: Array<CodeableConcept>;
	/** Who or what is controlled by this consent. Use group to identify a set of actors by some property they share (e.g. 'admitting officers'). */
	actor?: Array<Consent_Actor>;
	/** A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements. */
	category?: Array<CodeableConcept>;
	/** Either the Grantor, which is the entity responsible for granting the rights listed in a Consent Directive or the Grantee, which is the entity responsible for complying with the Consent Directive, including any obligations or limitations on authorizations and enforcement of prohibitions. */
	consentingParty?: Array<Reference>;
	/** The resources controlled by this consent, if specific resources are referenced. */
	data?: Array<Consent_Data>;
	/** Clinical or Operational Relevant period of time that bounds the data controlled by this consent. */
	dataPeriod?: Period;
	/** When this  Consent was issued / created / indexed. */
	dateTime?: string;
	/** Extensions for dateTime */
	_dateTime?: Element;
	/** An exception to the base policy of this consent. An exception can be an addition or removal of access permissions. */
	except?: Array<Consent_Except>;
	/** Unique identifier for this copy of the Consent Statement. */
	identifier?: Identifier;
	/** The organization that manages the consent, and the framework within which it is executed. */
	organization?: Array<Reference>;
	/** The patient/healthcare consumer to whom this consent applies. */
	patient: Reference;
	/** Relevant time or time-period when this Consent is applicable. */
	period?: Period;
	/** The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law. */
	policy?: Array<Consent_Policy>;
	/** A referece to the specific computable policy. */
	policyRule?: string;
	/** Extensions for policyRule */
	_policyRule?: Element;
	/** The context of the activities a user is taking - why the user is accessing the data - that are controlled by this consent. */
	purpose?: Array<Coding>;
	/** This is a Consent resource. */
	resourceType: "Consent";
	/** A set of security labels that define which resources are controlled by this consent. If more than one label is specified, all resources must have all the specified labels. */
	securityLabel?: Array<Coding>;
	/** The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document. */
	sourceAttachment?: Attachment;
	/** The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document. */
	sourceIdentifier?: Identifier;
	/** The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document. */
	sourceReference?: Reference;
	/** Indicates the current state of this consent. */
	status:
		| "active"
		| "draft"
		| "entered-in-error"
		| "inactive"
		| "proposed"
		| "rejected";
	/** Extensions for status */
	_status?: Element;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getConsent_ActorSchema = (): z.ZodType<Consent_Actor> =>
	Consent_ActorSchemaInternal as z.ZodType<Consent_Actor>;
const getConsent_DataSchema = (): z.ZodType<Consent_Data> =>
	Consent_DataSchemaInternal as z.ZodType<Consent_Data>;
const getConsent_ExceptSchema = (): z.ZodType<Consent_Except> =>
	Consent_ExceptSchemaInternal as z.ZodType<Consent_Except>;
const getConsent_PolicySchema = (): z.ZodType<Consent_Policy> =>
	Consent_PolicySchemaInternal as z.ZodType<Consent_Policy>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ConsentSchemaInternal = DomainResourceSchemaInternal.extend({
	action: z.lazy(getCodeableConceptSchema).array().optional(),
	actor: z.lazy(getConsent_ActorSchema).array().optional(),
	category: z.lazy(getCodeableConceptSchema).array().optional(),
	consentingParty: z.lazy(getReferenceSchema).array().optional(),
	data: z.lazy(getConsent_DataSchema).array().optional(),
	dataPeriod: z.lazy(getPeriodSchema).optional(),
	dateTime: fhirDateTime().optional(),
	_dateTime: z.lazy(getElementSchema).optional(),
	except: z.lazy(getConsent_ExceptSchema).array().optional(),
	identifier: z.lazy(getIdentifierSchema).optional(),
	organization: z.lazy(getReferenceSchema).array().optional(),
	patient: z.lazy(getReferenceSchema),
	period: z.lazy(getPeriodSchema).optional(),
	policy: z.lazy(getConsent_PolicySchema).array().optional(),
	policyRule: fhirUri().optional(),
	_policyRule: z.lazy(getElementSchema).optional(),
	purpose: z.lazy(getCodingSchema).array().optional(),
	resourceType: z.literal("Consent"),
	securityLabel: z.lazy(getCodingSchema).array().optional(),
	sourceAttachment: z.lazy(getAttachmentSchema).optional(),
	sourceIdentifier: z.lazy(getIdentifierSchema).optional(),
	sourceReference: z.lazy(getReferenceSchema).optional(),
	status: z.enum([
		"active",
		"draft",
		"entered-in-error",
		"inactive",
		"proposed",
		"rejected",
	]),
	_status: z.lazy(getElementSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const source_x_Present = [
			"sourceAttachment",
			"sourceIdentifier",
			"sourceReference",
		].filter((field) => record[field] !== undefined);
		if (source_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of sourceAttachment, sourceIdentifier, sourceReference may be present for source[x]",
				path: [source_x_Present[0]],
			});
		}
		validateReferenceTarget(
			record.consentingParty,
			"consentingParty",
			[
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			["Organization", "Patient", "Practitioner", "RelatedPerson"],
			ctx,
		);
		validateReferenceTarget(
			record.organization,
			"organization",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
		validateReferenceTarget(
			record.patient,
			"patient",
			["http://hl7.org/fhir/StructureDefinition/Patient"],
			["Patient"],
			ctx,
		);
		validateReferenceTarget(
			record.sourceReference,
			"sourceReference",
			[
				"http://hl7.org/fhir/StructureDefinition/Consent",
				"http://hl7.org/fhir/StructureDefinition/Contract",
				"http://hl7.org/fhir/StructureDefinition/DocumentReference",
				"http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
			],
			["Consent", "Contract", "DocumentReference", "QuestionnaireResponse"],
			ctx,
		);
	});

export const ConsentSchema = ConsentSchemaInternal as z.ZodType<Consent>;
