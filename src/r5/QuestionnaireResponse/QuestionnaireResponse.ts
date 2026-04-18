// Profile: http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:04:05.932Z

import * as z from "zod";
import {
  fhirCanonical,
  fhirCode,
  fhirDateTime,
  fhirId,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
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
import type { QuestionnaireResponse_Item } from "./QuestionnaireResponse_Item";
import { QuestionnaireResponse_ItemSchemaInternal } from "./QuestionnaireResponse_Item";

/** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
export interface QuestionnaireResponse extends DomainResource {
  /** The individual or device that received the answers to the questions in the QuestionnaireResponse and recorded them in the system. */
  author?: Reference;
  /** The date and/or time that this questionnaire response was last modified by the user - e.g. changing answers or revising status. */
  authored?: string;
  /** Extensions for authored */
  _authored?: Element;
  /** A plan, proposal or order that is fulfilled in whole or in part by this questionnaire response.  For example, a ServiceRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression. */
  basedOn?: Array<Reference>;
  /** The Encounter during which this questionnaire response was created or to which the creation of this record is tightly associated. */
  encounter?: Reference;
  /** Business identifiers assigned to this questionnaire response by the performer and/or other systems.  These identifiers remain constant as the resource is updated and propagates from server to server. */
  identifier?: Array<Identifier>;
  /** A group or question item from the original questionnaire for which answers are provided. */
  item?: Array<QuestionnaireResponse_Item>;
  /** A procedure or observation that this questionnaire was performed as part of the execution of.  For example, the surgery a checklist was executed as part of. */
  partOf?: Array<Reference>;
  /** The Questionnaire that defines and organizes the questions for which answers are being provided. */
  questionnaire: string;
  /** Extensions for questionnaire */
  _questionnaire?: Element;
  /** This is a QuestionnaireResponse resource. */
  resourceType: "QuestionnaireResponse";
  /** The individual or device that answered the questions about the subject. */
  source?: Reference;
  /** The current state of the questionnaire response. */
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
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getQuestionnaireResponse_ItemSchema =
  (): z.ZodType<QuestionnaireResponse_Item> =>
    QuestionnaireResponse_ItemSchemaInternal as z.ZodType<QuestionnaireResponse_Item>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const QuestionnaireResponseSchemaInternal = z
  .object({
    author: z.lazy(getReferenceSchema).optional(),
    authored: fhirDateTime().optional(),
    _authored: z.lazy(getElementSchema).optional(),
    basedOn: z.lazy(getReferenceSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    encounter: z.lazy(getReferenceSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    item: z.lazy(getQuestionnaireResponse_ItemSchema).array().optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    partOf: z.lazy(getReferenceSchema).array().optional(),
    questionnaire: fhirCanonical(),
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
    text: z.lazy(getNarrativeSchema).optional(),
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
      record.subject,
      "subject",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
  });

export const QuestionnaireResponseSchema =
  QuestionnaireResponseSchemaInternal as z.ZodType<QuestionnaireResponse>;
