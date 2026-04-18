// Source: https://hl7.org/fhir/R5/list.html
// Profile: http://hl7.org/fhir/StructureDefinition/List
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

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
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
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
import type { List_Entry } from "./List_Entry";
import { List_EntrySchemaInternal } from "./List_Entry";

/** A List is a curated collection of resources, for things such as problem lists, allergy lists, facility list, organization list, etc. */
export interface List extends DomainResource {
  /** This code defines the purpose of the list - why it was created. */
  code?: CodeableConcept;
  /** Date list was last reviewed/revised and determined to be 'current'. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** If the list is empty, why the list is empty. */
  emptyReason?: CodeableConcept;
  /** The encounter that is the context in which this list was created. */
  encounter?: Reference;
  /** Entries in this list. */
  entry?: Array<List_Entry>;
  /** Identifier for the List assigned for business purposes outside the context of FHIR. */
  identifier?: Array<Identifier>;
  /** How this list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted. */
  mode: "changes" | "snapshot" | "working";
  /** Extensions for mode */
  _mode?: Element;
  /** Comments that apply to the overall list. */
  note?: Array<Annotation>;
  /** What order applies to the items in the list. */
  orderedBy?: CodeableConcept;
  /** This is a List resource. */
  resourceType: "List";
  /** The entity responsible for deciding what the contents of the list were. Where the list was created by a human, this is the same as the author of the list. */
  source?: Reference;
  /** Indicates the current state of this list. */
  status: "current" | "entered-in-error" | "retired";
  /** Extensions for status */
  _status?: Element;
  /** The common subject(s) (or patient(s)) of the resources that are in the list if there is one (or a set of subjects). */
  subject?: Array<Reference>;
  /** A label for the list assigned by the author. */
  title?: string;
  /** Extensions for title */
  _title?: Element;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getList_EntrySchema = (): z.ZodType<List_Entry> =>
  List_EntrySchemaInternal as z.ZodType<List_Entry>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const ListSchemaInternal = z
  .object({
    code: z.lazy(getCodeableConceptSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    date: fhirDateTime().optional(),
    _date: z.lazy(getElementSchema).optional(),
    emptyReason: z.lazy(getCodeableConceptSchema).optional(),
    encounter: z.lazy(getReferenceSchema).optional(),
    entry: z.lazy(getList_EntrySchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    mode: z.enum(["changes", "snapshot", "working"]),
    _mode: z.lazy(getElementSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    orderedBy: z.lazy(getCodeableConceptSchema).optional(),
    resourceType: z.literal("List"),
    source: z.lazy(getReferenceSchema).optional(),
    status: z.enum(["current", "entered-in-error", "retired"]),
    _status: z.lazy(getElementSchema).optional(),
    subject: z.lazy(getReferenceSchema).array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    title: fhirString().optional(),
    _title: z.lazy(getElementSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.encounter,
      "encounter",
      ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      ["Encounter"],
      ctx,
    );
    validateReferenceTarget(
      record.source,
      "source",
      [
        "http://hl7.org/fhir/StructureDefinition/CareTeam",
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      [
        "CareTeam",
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

export const ListSchema = ListSchemaInternal as z.ZodType<List>;
