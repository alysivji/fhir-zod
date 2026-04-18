// Profile: http://hl7.org/fhir/StructureDefinition/GuidanceResponse
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

import * as z from "zod";
import {
	fhirCanonical,
	fhirDateTime,
	fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DataRequirement } from "../DataRequirement";
import { DataRequirementSchemaInternal } from "../DataRequirement";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
export interface GuidanceResponse extends DomainResource {
	/** If the evaluation could not be completed due to lack of information, or additional information would potentially result in a more accurate response, this element will a description of the data required in order to proceed with the evaluation. A subsequent request to the service should include this data. */
	dataRequirement?: Array<DataRequirement>;
	/** The encounter during which this response was created or to which the creation of this record is tightly associated. */
	encounter?: Reference;
	/** Messages resulting from the evaluation of the artifact or artifacts. As part of evaluating the request, the engine may produce informational or warning messages. These messages will be provided by this element. */
	evaluationMessage?: Array<Reference>;
	/** Allows a service to provide  unique, business identifiers for the response. */
	identifier?: Array<Identifier>;
	/** An identifier, CodeableConcept or canonical reference to the guidance that was requested. */
	moduleCanonical?: string;
	/** Extensions for moduleCanonical */
	_moduleCanonical?: Element;
	/** An identifier, CodeableConcept or canonical reference to the guidance that was requested. */
	moduleCodeableConcept?: CodeableConcept;
	/** An identifier, CodeableConcept or canonical reference to the guidance that was requested. */
	moduleUri?: string;
	/** Extensions for moduleUri */
	_moduleUri?: Element;
	/** Provides a mechanism to communicate additional information about the response. */
	note?: Array<Annotation>;
	/** Indicates when the guidance response was processed. */
	occurrenceDateTime?: string;
	/** Extensions for occurrenceDateTime */
	_occurrenceDateTime?: Element;
	/** The output parameters of the evaluation, if any. Many modules will result in the return of specific resources such as procedure or communication requests that are returned as part of the operation result. However, modules may define specific outputs that would be returned as the result of the evaluation, and these would be returned in this element. */
	outputParameters?: Reference;
	/** Provides a reference to the device that performed the guidance. */
	performer?: Reference;
	/** Describes the reason for the guidance response in coded or textual form. */
	reasonCode?: Array<CodeableConcept>;
	/** Indicates the reason the request was initiated. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response. */
	reasonReference?: Array<Reference>;
	/** The identifier of the request associated with this response. If an identifier was given as part of the request, it will be reproduced here to enable the requester to more easily identify the response in a multi-request scenario. */
	requestIdentifier?: Identifier;
	/** This is a GuidanceResponse resource. */
	resourceType: "GuidanceResponse";
	/** The actions, if any, produced by the evaluation of the artifact. */
	result?: Reference;
	/** The status of the response. If the evaluation is completed successfully, the status will indicate success. However, in order to complete the evaluation, the engine may require more information. In this case, the status will be data-required, and the response will contain a description of the additional required information. If the evaluation completed successfully, but the engine determines that a potentially more accurate response could be provided if more data was available, the status will be data-requested, and the response will contain a description of the additional requested information. */
	status:
		| "data-requested"
		| "data-required"
		| "entered-in-error"
		| "failure"
		| "in-progress"
		| "success";
	/** Extensions for status */
	_status?: Element;
	/** The patient for which the request was processed. */
	subject?: Reference;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDataRequirementSchema = (): z.ZodType<DataRequirement> =>
	DataRequirementSchemaInternal as z.ZodType<DataRequirement>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const GuidanceResponseSchemaInternal =
	DomainResourceSchemaInternal.extend({
		dataRequirement: z.lazy(getDataRequirementSchema).array().optional(),
		encounter: z.lazy(getReferenceSchema).optional(),
		evaluationMessage: z.lazy(getReferenceSchema).array().optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		moduleCanonical: fhirCanonical().optional(),
		_moduleCanonical: z.lazy(getElementSchema).optional(),
		moduleCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		moduleUri: fhirUri().optional(),
		_moduleUri: z.lazy(getElementSchema).optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		occurrenceDateTime: fhirDateTime().optional(),
		_occurrenceDateTime: z.lazy(getElementSchema).optional(),
		outputParameters: z.lazy(getReferenceSchema).optional(),
		performer: z.lazy(getReferenceSchema).optional(),
		reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
		reasonReference: z.lazy(getReferenceSchema).array().optional(),
		requestIdentifier: z.lazy(getIdentifierSchema).optional(),
		resourceType: z.literal("GuidanceResponse"),
		result: z.lazy(getReferenceSchema).optional(),
		status: z.enum([
			"data-requested",
			"data-required",
			"entered-in-error",
			"failure",
			"in-progress",
			"success",
		]),
		_status: z.lazy(getElementSchema).optional(),
		subject: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const module_x_Present = [
				"moduleCanonical",
				"moduleCodeableConcept",
				"moduleUri",
			].filter((field) => record[field] !== undefined);
			if (module_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of moduleCanonical, moduleCodeableConcept, moduleUri must be present for module[x]",
					path: ["moduleCanonical"],
				});
			}
			if (module_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of moduleCanonical, moduleCodeableConcept, moduleUri may be present for module[x]",
					path: [module_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.encounter,
				"encounter",
				["http://hl7.org/fhir/StructureDefinition/Encounter"],
				["Encounter"],
				ctx,
			);
			validateReferenceTarget(
				record.evaluationMessage,
				"evaluationMessage",
				["http://hl7.org/fhir/StructureDefinition/OperationOutcome"],
				["OperationOutcome"],
				ctx,
			);
			validateReferenceTarget(
				record.outputParameters,
				"outputParameters",
				["http://hl7.org/fhir/StructureDefinition/Parameters"],
				["Parameters"],
				ctx,
			);
			validateReferenceTarget(
				record.performer,
				"performer",
				["http://hl7.org/fhir/StructureDefinition/Device"],
				["Device"],
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
				],
				["Condition", "DiagnosticReport", "DocumentReference", "Observation"],
				ctx,
			);
			validateReferenceTarget(
				record.result,
				"result",
				[
					"http://hl7.org/fhir/StructureDefinition/CarePlan",
					"http://hl7.org/fhir/StructureDefinition/RequestGroup",
				],
				["CarePlan", "RequestGroup"],
				ctx,
			);
			validateReferenceTarget(
				record.subject,
				"subject",
				[
					"http://hl7.org/fhir/StructureDefinition/Group",
					"http://hl7.org/fhir/StructureDefinition/Patient",
				],
				["Group", "Patient"],
				ctx,
			);
		});

export const GuidanceResponseSchema =
	GuidanceResponseSchemaInternal as z.ZodType<GuidanceResponse>;
