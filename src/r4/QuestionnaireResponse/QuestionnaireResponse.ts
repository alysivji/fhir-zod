// Profile: http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { fhirCanonical, fhirDateTime } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { QuestionnaireResponse_Item } from "./QuestionnaireResponse_Item";
import { QuestionnaireResponse_ItemSchemaInternal } from "./QuestionnaireResponse_Item";

/** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
export interface QuestionnaireResponse extends DomainResource {
	/** Person who received the answers to the questions in the QuestionnaireResponse and recorded them in the system. */
	author?: Reference;
	/** The date and/or time that this set of answers were last changed. */
	authored?: string;
	/** Extensions for authored */
	_authored?: Element;
	/** The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse.  For example, a ServiceRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression. */
	basedOn?: Array<Reference>;
	/** The Encounter during which this questionnaire response was created or to which the creation of this record is tightly associated. */
	encounter?: Reference;
	/** A business identifier assigned to a particular completed (or partially completed) questionnaire. */
	identifier?: Identifier;
	/** A group or question item from the original questionnaire for which answers are provided. */
	item?: Array<QuestionnaireResponse_Item>;
	/** A procedure or observation that this questionnaire was performed as part of the execution of.  For example, the surgery a checklist was executed as part of. */
	partOf?: Array<Reference>;
	/** The Questionnaire that defines and organizes the questions for which answers are being provided. */
	questionnaire?: string;
	/** Extensions for questionnaire */
	_questionnaire?: Element;
	/** This is a QuestionnaireResponse resource. */
	resourceType: "QuestionnaireResponse";
	/** The person who answered the questions about the subject. */
	source?: Reference;
	/** The position of the questionnaire response within its overall lifecycle. */
	status:
		| "amended"
		| "completed"
		| "entered-in-error"
		| "in-progress"
		| "stopped";
	/** Extensions for status */
	_status?: Element;
	/** The subject of the questionnaire response.  This could be a patient, organization, practitioner, device, etc.  This is who/what the answers apply to, but is not necessarily the source of information. */
	subject?: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getQuestionnaireResponse_ItemSchema =
	(): z.ZodType<QuestionnaireResponse_Item> =>
		QuestionnaireResponse_ItemSchemaInternal as z.ZodType<QuestionnaireResponse_Item>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const QuestionnaireResponseSchemaInternal =
	DomainResourceSchemaInternal.extend({
		author: z.lazy(getReferenceSchema).optional(),
		authored: fhirDateTime().optional(),
		_authored: z.lazy(getElementSchema).optional(),
		basedOn: z.lazy(getReferenceSchema).array().optional(),
		encounter: z.lazy(getReferenceSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).optional(),
		item: z.lazy(getQuestionnaireResponse_ItemSchema).array().optional(),
		partOf: z.lazy(getReferenceSchema).array().optional(),
		questionnaire: fhirCanonical().optional(),
		_questionnaire: z.lazy(getElementSchema).optional(),
		resourceType: z.literal("QuestionnaireResponse"),
		source: z.lazy(getReferenceSchema).optional(),
		status: z.enum([
			"amended",
			"completed",
			"entered-in-error",
			"in-progress",
			"stopped",
		]),
		_status: z.lazy(getElementSchema).optional(),
		subject: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.author,
				"author",
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
			validateReferenceTarget(
				record.basedOn,
				"basedOn",
				[
					"http://hl7.org/fhir/StructureDefinition/CarePlan",
					"http://hl7.org/fhir/StructureDefinition/ServiceRequest",
				],
				["CarePlan", "ServiceRequest"],
				ctx,
			);
			validateReferenceTarget(
				record.encounter,
				"encounter",
				["http://hl7.org/fhir/StructureDefinition/Encounter"],
				["Encounter"],
				ctx,
			);
			validateReferenceTarget(
				record.partOf,
				"partOf",
				[
					"http://hl7.org/fhir/StructureDefinition/Observation",
					"http://hl7.org/fhir/StructureDefinition/Procedure",
				],
				["Observation", "Procedure"],
				ctx,
			);
			validateReferenceTarget(
				record.source,
				"source",
				[
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				["Patient", "Practitioner", "PractitionerRole", "RelatedPerson"],
				ctx,
			);
			validateReferenceTarget(
				record.subject,
				"subject",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
		});

export const QuestionnaireResponseSchema =
	QuestionnaireResponseSchemaInternal as z.ZodType<QuestionnaireResponse>;
