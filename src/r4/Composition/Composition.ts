// Profile: http://hl7.org/fhir/StructureDefinition/Composition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:03:58.798Z

import * as z from "zod";
import {
  fhirCode,
  fhirDateTime,
  fhirId,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
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
import type { Composition_Attester } from "./Composition_Attester";
import { Composition_AttesterSchemaInternal } from "./Composition_Attester";
import type { Composition_Event } from "./Composition_Event";
import { Composition_EventSchemaInternal } from "./Composition_Event";
import type { Composition_RelatesTo } from "./Composition_RelatesTo";
import { Composition_RelatesToSchemaInternal } from "./Composition_RelatesTo";
import type { Composition_Section } from "./Composition_Section";
import { Composition_SectionSchemaInternal } from "./Composition_Section";

/** A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.). */
export interface Composition extends DomainResource {
  /** A participant who has attested to the accuracy of the composition/document. */
  attester?: Array<Composition_Attester>;
  /** Identifies who is responsible for the information in the composition, not necessarily who typed it in. */
  author: Array<Reference>;
  /** A categorization for the type of the composition - helps for indexing and searching. This may be implied by or derived from the code specified in the Composition Type. */
  category?: Array<CodeableConcept>;
  /** The code specifying the level of confidentiality of the Composition. */
  confidentiality?:
    | "_Confidentiality"
    | "_ConfidentialityByAccessKind"
    | "_ConfidentialityByInfoType"
    | "_ConfidentialityModifiers"
    | "B"
    | "C"
    | "D"
    | "ETH"
    | "HIV"
    | "I"
    | "L"
    | "M"
    | "N"
    | "PSY"
    | "R"
    | "S"
    | "SDV"
    | "T"
    | "U"
    | "V";
  /** Extensions for confidentiality */
  _confidentiality?: Element;
  /** Identifies the organization or group who is responsible for ongoing maintenance of and access to the composition/document information. */
  custodian?: Reference;
  /** The composition editing time, when the composition was last logically changed by the author. */
  date: string;
  /** Extensions for date */
  _date?: Element;
  /** Describes the clinical encounter or type of care this documentation is associated with. */
  encounter?: Reference;
  /** The clinical service, such as a colonoscopy or an appendectomy, being documented. */
  event?: Array<Composition_Event>;
  /** A version-independent identifier for the Composition. This identifier stays constant as the composition is changed over time. */
  identifier?: Identifier;
  /** Relationships that this composition has with other compositions or documents that already exist. */
  relatesTo?: Array<Composition_RelatesTo>;
  /** This is a Composition resource. */
  resourceType: "Composition";
  /** The root of the sections that make up the composition. */
  section?: Array<Composition_Section>;
  /** The workflow/clinical status of this composition. The status is a marker for the clinical standing of the document. */
  status: "amended" | "entered-in-error" | "final" | "preliminary";
  /** Extensions for status */
  _status?: Element;
  /** Who or what the composition is about. The composition can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure). */
  subject?: Reference;
  /** Official human-readable label for the composition. */
  title: string;
  /** Extensions for title */
  _title?: Element;
  /** Specifies the particular kind of composition (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the composition. */
  type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getComposition_AttesterSchema = (): z.ZodType<Composition_Attester> =>
  Composition_AttesterSchemaInternal as z.ZodType<Composition_Attester>;
const getComposition_EventSchema = (): z.ZodType<Composition_Event> =>
  Composition_EventSchemaInternal as z.ZodType<Composition_Event>;
const getComposition_RelatesToSchema = (): z.ZodType<Composition_RelatesTo> =>
  Composition_RelatesToSchemaInternal as z.ZodType<Composition_RelatesTo>;
const getComposition_SectionSchema = (): z.ZodType<Composition_Section> =>
  Composition_SectionSchemaInternal as z.ZodType<Composition_Section>;
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
export const CompositionSchemaInternal = z
  .object({
    attester: z.lazy(getComposition_AttesterSchema).array().optional(),
    author: z.lazy(getReferenceSchema).array(),
    category: z.lazy(getCodeableConceptSchema).array().optional(),
    confidentiality: z
      .enum([
        "_Confidentiality",
        "_ConfidentialityByAccessKind",
        "_ConfidentialityByInfoType",
        "_ConfidentialityModifiers",
        "B",
        "C",
        "D",
        "ETH",
        "HIV",
        "I",
        "L",
        "M",
        "N",
        "PSY",
        "R",
        "S",
        "SDV",
        "T",
        "U",
        "V",
      ])
      .optional(),
    _confidentiality: z.lazy(getElementSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    custodian: z.lazy(getReferenceSchema).optional(),
    date: fhirDateTime(),
    _date: z.lazy(getElementSchema).optional(),
    encounter: z.lazy(getReferenceSchema).optional(),
    event: z.lazy(getComposition_EventSchema).array().optional(),
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
    relatesTo: z.lazy(getComposition_RelatesToSchema).array().optional(),
    resourceType: z.literal("Composition"),
    section: z.lazy(getComposition_SectionSchema).array().optional(),
    status: z.enum(["amended", "entered-in-error", "final", "preliminary"]),
    _status: z.lazy(getElementSchema).optional(),
    subject: z.lazy(getReferenceSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    title: fhirString(),
    _title: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodeableConceptSchema),
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
      record.custodian,
      "custodian",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
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
      record.subject,
      "subject",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
  });

export const CompositionSchema =
  CompositionSchemaInternal as z.ZodType<Composition>;
