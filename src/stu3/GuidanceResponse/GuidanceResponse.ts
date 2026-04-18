// Profile: http://hl7.org/fhir/StructureDefinition/GuidanceResponse
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:04:01.401Z

import * as z from "zod";
import {
  fhirCode,
  fhirDateTime,
  fhirId,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DataRequirement } from "../DataRequirement";
import { DataRequirementSchemaInternal } from "../DataRequirement";
import type { DomainResource } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Extension } from "../Extension";
import { ExtensionSchemaInternal } from "../Extension";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Base StructureDefinition for GuidanceResponse Resource */
export interface GuidanceResponse extends DomainResource {
  /** Allows the context of the guidance response to be provided if available. In a service context, this would likely be unavailable. */
  context?: Reference;
  /** If the evaluation could not be completed due to lack of information, or additional information would potentially result in a more accurate response, this element will a description of the data required in order to proceed with the evaluation. A subsequent request to the service should include this data. */
  dataRequirement?: Array<DataRequirement>;
  /** Messages resulting from the evaluation of the artifact or artifacts. As part of evaluating the request, the engine may produce informational or warning messages. These messages will be provided by this element. */
  evaluationMessage?: Array<Reference>;
  /** Allows a service to provide a unique, business identifier for the response. */
  identifier?: Identifier;
  /** A reference to the knowledge module that was invoked. */
  module: Reference;
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
  /** Indicates the reason the request was initiated. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response. */
  reasonCodeableConcept?: CodeableConcept;
  /** Indicates the reason the request was initiated. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response. */
  reasonReference?: Reference;
  /** The id of the request associated with this response. If an id was given as part of the request, it will be reproduced here to enable the requester to more easily identify the response in a multi-request scenario. */
  requestId?: string;
  /** Extensions for requestId */
  _requestId?: Element;
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
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const GuidanceResponseSchemaInternal = z
  .object({
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    context: z.lazy(getReferenceSchema).optional(),
    dataRequirement: z.lazy(getDataRequirementSchema).array().optional(),
    evaluationMessage: z.lazy(getReferenceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    module: z.lazy(getReferenceSchema),
    note: z.lazy(getAnnotationSchema).array().optional(),
    occurrenceDateTime: fhirDateTime().optional(),
    _occurrenceDateTime: z.lazy(getElementSchema).optional(),
    outputParameters: z.lazy(getReferenceSchema).optional(),
    performer: z.lazy(getReferenceSchema).optional(),
    reasonCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    reasonReference: z.lazy(getReferenceSchema).optional(),
    requestId: fhirId().optional(),
    _requestId: z.lazy(getElementSchema).optional(),
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
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const reason_x_Present = [
      "reasonCodeableConcept",
      "reasonReference",
    ].filter((field) => record[field] !== undefined);
    if (reason_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of reasonCodeableConcept, reasonReference may be present for reason[x]",
        path: [reason_x_Present[0]],
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
      record.evaluationMessage,
      "evaluationMessage",
      ["http://hl7.org/fhir/StructureDefinition/OperationOutcome"],
      ["OperationOutcome"],
      ctx,
    );
    validateReferenceTarget(
      record.module,
      "module",
      ["http://hl7.org/fhir/StructureDefinition/ServiceDefinition"],
      ["ServiceDefinition"],
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
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
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
