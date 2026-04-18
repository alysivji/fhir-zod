// Profile: http://hl7.org/fhir/StructureDefinition/Contract
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirDateTime, fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Timing } from "../Timing";
import { TimingSchemaInternal } from "../Timing";
import type { Contract_Term_Action_Subject } from "./Contract_Term_Action_Subject";
import { Contract_Term_Action_SubjectSchemaInternal } from "./Contract_Term_Action_Subject";

/** An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place. */
export interface Contract_Term_Action extends BackboneElement {
	/** Encounter or Episode with primary association to the specified term activity. */
	context?: Reference;
	/** Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse. */
	contextLinkId?: Array<string | null>;
	/** Extensions for contextLinkId */
	_contextLinkId?: Array<Element | null>;
	/** True if the term prohibits the  action. */
	doNotPerform?: boolean;
	/** Extensions for doNotPerform */
	_doNotPerform?: Element;
	/** Reason or purpose for the action stipulated by this Contract Provision. */
	intent: CodeableConcept;
	/** Id [identifier??] of the clause or question text related to this action in the referenced form or QuestionnaireResponse. */
	linkId?: Array<string | null>;
	/** Extensions for linkId */
	_linkId?: Array<Element | null>;
	/** Comments made about the term action made by the requester, performer, subject or other participants. */
	note?: Array<Annotation>;
	/** When action happens. */
	occurrenceDateTime?: string;
	/** Extensions for occurrenceDateTime */
	_occurrenceDateTime?: Element;
	/** When action happens. */
	occurrencePeriod?: Period;
	/** When action happens. */
	occurrenceTiming?: Timing;
	/** Indicates who or what is being asked to perform (or not perform) the ction. */
	performer?: Reference;
	/** Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse. */
	performerLinkId?: Array<string | null>;
	/** Extensions for performerLinkId */
	_performerLinkId?: Array<Element | null>;
	/** The type of role or competency of an individual desired or required to perform or not perform the action. */
	performerRole?: CodeableConcept;
	/** The type of individual that is desired or required to perform or not perform the action. */
	performerType?: Array<CodeableConcept>;
	/** Rationale for the action to be performed or not performed. Describes why the action is permitted or prohibited. Either a coded concept, or another resource whose existence justifies permitting or not permitting this action. */
	reason?: Array<CodeableReference>;
	/** Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse. */
	reasonLinkId?: Array<string | null>;
	/** Extensions for reasonLinkId */
	_reasonLinkId?: Array<Element | null>;
	/** Who or what initiated the action and has responsibility for its activation. */
	requester?: Array<Reference>;
	/** Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse. */
	requesterLinkId?: Array<string | null>;
	/** Extensions for requesterLinkId */
	_requesterLinkId?: Array<Element | null>;
	/** Security labels that protects the action. */
	securityLabelNumber?: Array<number | null>;
	/** Extensions for securityLabelNumber */
	_securityLabelNumber?: Array<Element | null>;
	/** Current state of the term action. */
	status: CodeableConcept;
	/** Entity of the action. */
	subject?: Array<Contract_Term_Action_Subject>;
	/** Activity or service obligation to be done or not done, performed or not performed, effectuated or not by this Contract term. */
	type: CodeableConcept;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getContract_Term_Action_SubjectSchema =
	(): z.ZodType<Contract_Term_Action_Subject> =>
		Contract_Term_Action_SubjectSchemaInternal as z.ZodType<Contract_Term_Action_Subject>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const Contract_Term_ActionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		context: z.lazy(getReferenceSchema).optional(),
		contextLinkId: fhirString().nullable().array().optional(),
		_contextLinkId: z.lazy(getElementSchema).nullable().array().optional(),
		doNotPerform: z.boolean().optional(),
		_doNotPerform: z.lazy(getElementSchema).optional(),
		intent: z.lazy(getCodeableConceptSchema),
		linkId: fhirString().nullable().array().optional(),
		_linkId: z.lazy(getElementSchema).nullable().array().optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		occurrenceDateTime: fhirDateTime().optional(),
		_occurrenceDateTime: z.lazy(getElementSchema).optional(),
		occurrencePeriod: z.lazy(getPeriodSchema).optional(),
		occurrenceTiming: z.lazy(getTimingSchema).optional(),
		performer: z.lazy(getReferenceSchema).optional(),
		performerLinkId: fhirString().nullable().array().optional(),
		_performerLinkId: z.lazy(getElementSchema).nullable().array().optional(),
		performerRole: z.lazy(getCodeableConceptSchema).optional(),
		performerType: z.lazy(getCodeableConceptSchema).array().optional(),
		reason: z.lazy(getCodeableReferenceSchema).array().optional(),
		reasonLinkId: fhirString().nullable().array().optional(),
		_reasonLinkId: z.lazy(getElementSchema).nullable().array().optional(),
		requester: z.lazy(getReferenceSchema).array().optional(),
		requesterLinkId: fhirString().nullable().array().optional(),
		_requesterLinkId: z.lazy(getElementSchema).nullable().array().optional(),
		securityLabelNumber: z
			.number()
			.int()
			.nonnegative()
			.nullable()
			.array()
			.optional(),
		_securityLabelNumber: z
			.lazy(getElementSchema)
			.nullable()
			.array()
			.optional(),
		status: z.lazy(getCodeableConceptSchema),
		subject: z.lazy(getContract_Term_Action_SubjectSchema).array().optional(),
		type: z.lazy(getCodeableConceptSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const occurrence_x_Present = [
				"occurrenceDateTime",
				"occurrencePeriod",
				"occurrenceTiming",
			].filter((field) => record[field] !== undefined);
			if (occurrence_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of occurrenceDateTime, occurrencePeriod, occurrenceTiming may be present for occurrence[x]",
					path: [occurrence_x_Present[0]],
				});
			}
			validatePrimitiveArrayPair(
				record.contextLinkId,
				record._contextLinkId,
				"contextLinkId",
				"_contextLinkId",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.linkId,
				record._linkId,
				"linkId",
				"_linkId",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.performerLinkId,
				record._performerLinkId,
				"performerLinkId",
				"_performerLinkId",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.reasonLinkId,
				record._reasonLinkId,
				"reasonLinkId",
				"_reasonLinkId",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.requesterLinkId,
				record._requesterLinkId,
				"requesterLinkId",
				"_requesterLinkId",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.securityLabelNumber,
				record._securityLabelNumber,
				"securityLabelNumber",
				"_securityLabelNumber",
				ctx,
			);
			validateReferenceTarget(
				record.context,
				"context",
				[
					"http://hl7.org/fhir/StructureDefinition/Encounter",
					"http://hl7.org/fhir/StructureDefinition/EpisodeOfCare",
				],
				["Encounter", "EpisodeOfCare"],
				ctx,
			);
			validateReferenceTarget(
				record.performer,
				"performer",
				[
					"http://hl7.org/fhir/StructureDefinition/CareTeam",
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Location",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
					"http://hl7.org/fhir/StructureDefinition/Substance",
				],
				[
					"CareTeam",
					"Device",
					"Location",
					"Organization",
					"Patient",
					"Practitioner",
					"PractitionerRole",
					"RelatedPerson",
					"Substance",
				],
				ctx,
			);
			validateReferenceTarget(
				record.requester,
				"requester",
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Group",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				[
					"Device",
					"Group",
					"Organization",
					"Patient",
					"Practitioner",
					"PractitionerRole",
					"RelatedPerson",
				],
				ctx,
			);
		});

export const Contract_Term_ActionSchema =
	Contract_Term_ActionSchemaInternal as z.ZodType<Contract_Term_Action>;
