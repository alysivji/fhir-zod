// Profile: http://hl7.org/fhir/StructureDefinition/Contract
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Contract_Term_Action_Subject } from "./Contract_Term_Action_Subject";
import { Contract_Term_Action_SubjectSchemaInternal } from "./Contract_Term_Action_Subject";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { Timing } from "./Timing";
import { TimingSchemaInternal } from "./Timing";

/** An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place. */
export interface Contract_Term_Action extends BackboneElement {
	/** Encounter or Episode with primary association to specified term activity. */
	context?: Reference;
	/** Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse. */
	contextLinkId?: Array<string>;
	/** Extensions for contextLinkId */
	_contextLinkId?: Array<Element>;
	/** True if the term prohibits the  action. */
	doNotPerform?: boolean;
	/** Extensions for doNotPerform */
	_doNotPerform?: Element;
	/** Reason or purpose for the action stipulated by this Contract Provision. */
	intent: CodeableConcept;
	/** Id [identifier??] of the clause or question text related to this action in the referenced form or QuestionnaireResponse. */
	linkId?: Array<string>;
	/** Extensions for linkId */
	_linkId?: Array<Element>;
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
	performerLinkId?: Array<string>;
	/** Extensions for performerLinkId */
	_performerLinkId?: Array<Element>;
	/** The type of role or competency of an individual desired or required to perform or not perform the action. */
	performerRole?: CodeableConcept;
	/** The type of individual that is desired or required to perform or not perform the action. */
	performerType?: Array<CodeableConcept>;
	/** Describes why the action is to be performed or not performed in textual form. */
	reason?: Array<string>;
	/** Extensions for reason */
	_reason?: Array<Element>;
	/** Rationale for the action to be performed or not performed. Describes why the action is permitted or prohibited. */
	reasonCode?: Array<CodeableConcept>;
	/** Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse. */
	reasonLinkId?: Array<string>;
	/** Extensions for reasonLinkId */
	_reasonLinkId?: Array<Element>;
	/** Indicates another resource whose existence justifies permitting or not permitting this action. */
	reasonReference?: Array<Reference>;
	/** Who or what initiated the action and has responsibility for its activation. */
	requester?: Array<Reference>;
	/** Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse. */
	requesterLinkId?: Array<string>;
	/** Extensions for requesterLinkId */
	_requesterLinkId?: Array<Element>;
	/** Security labels that protects the action. */
	securityLabelNumber?: Array<number>;
	/** Extensions for securityLabelNumber */
	_securityLabelNumber?: Array<Element>;
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
		contextLinkId: fhirString().array().optional(),
		_contextLinkId: z.lazy(getElementSchema).array().optional(),
		doNotPerform: z.boolean().optional(),
		_doNotPerform: z.lazy(getElementSchema).optional(),
		intent: z.lazy(getCodeableConceptSchema),
		linkId: fhirString().array().optional(),
		_linkId: z.lazy(getElementSchema).array().optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		occurrenceDateTime: fhirDateTime().optional(),
		_occurrenceDateTime: z.lazy(getElementSchema).optional(),
		occurrencePeriod: z.lazy(getPeriodSchema).optional(),
		occurrenceTiming: z.lazy(getTimingSchema).optional(),
		performer: z.lazy(getReferenceSchema).optional(),
		performerLinkId: fhirString().array().optional(),
		_performerLinkId: z.lazy(getElementSchema).array().optional(),
		performerRole: z.lazy(getCodeableConceptSchema).optional(),
		performerType: z.lazy(getCodeableConceptSchema).array().optional(),
		reason: fhirString().array().optional(),
		_reason: z.lazy(getElementSchema).array().optional(),
		reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
		reasonLinkId: fhirString().array().optional(),
		_reasonLinkId: z.lazy(getElementSchema).array().optional(),
		reasonReference: z.lazy(getReferenceSchema).array().optional(),
		requester: z.lazy(getReferenceSchema).array().optional(),
		requesterLinkId: fhirString().array().optional(),
		_requesterLinkId: z.lazy(getElementSchema).array().optional(),
		securityLabelNumber: z.number().int().nonnegative().array().optional(),
		_securityLabelNumber: z.lazy(getElementSchema).array().optional(),
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
				record.reasonReference,
				"reasonReference",
				[
					"http://hl7.org/fhir/StructureDefinition/Condition",
					"http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
					"http://hl7.org/fhir/StructureDefinition/DocumentReference",
					"http://hl7.org/fhir/StructureDefinition/Observation",
					"http://hl7.org/fhir/StructureDefinition/Questionnaire",
					"http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
				],
				[
					"Condition",
					"DiagnosticReport",
					"DocumentReference",
					"Observation",
					"Questionnaire",
					"QuestionnaireResponse",
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
