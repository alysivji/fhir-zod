// Profile: http://hl7.org/fhir/StructureDefinition/EncounterHistory
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:04:05.932Z

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
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
import type { DomainResource } from "../DomainResource";
import type { Duration } from "../Duration";
import { DurationSchemaInternal } from "../Duration";
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
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { EncounterHistory_Location } from "./EncounterHistory_Location";
import { EncounterHistory_LocationSchemaInternal } from "./EncounterHistory_Location";

/** A record of significant events/milestones key data throughout the history of an Encounter */
export interface EncounterHistory extends DomainResource {
  /** The start and end time associated with this set of values associated with the encounter, may be different to the planned times for various reasons. */
  actualPeriod?: Period;
  /** Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations. */
  class: CodeableConcept;
  /** The Encounter associated with this set of historic values. */
  encounter?: Reference;
  /** Identifier(s) by which this encounter is known. */
  identifier?: Array<Identifier>;
  /** Actual quantity of time the encounter lasted. This excludes the time during leaves of absence.When missing it is the time in between the start and end values. */
  length?: Duration;
  /** The location of the patient at this point in the encounter, the multiple cardinality permits de-normalizing the levels of the location hierarchy, such as site/ward/room/bed. */
  location?: Array<EncounterHistory_Location>;
  /** The planned end date/time (or discharge date) of the encounter. */
  plannedEndDate?: string;
  /** Extensions for plannedEndDate */
  _plannedEndDate?: Element;
  /** The planned start date/time (or admission date) of the encounter. */
  plannedStartDate?: string;
  /** Extensions for plannedStartDate */
  _plannedStartDate?: Element;
  /** This is a EncounterHistory resource. */
  resourceType: "EncounterHistory";
  /** Broad categorization of the service that is to be provided (e.g. cardiology). */
  serviceType?: Array<CodeableReference>;
  /** planned | in-progress | on-hold | discharged | completed | cancelled | discontinued | entered-in-error | unknown. */
  status:
    | "cancelled"
    | "completed"
    | "discharged"
    | "discontinued"
    | "entered-in-error"
    | "in-progress"
    | "on-hold"
    | "planned"
    | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** The patient or group related to this encounter. In some use-cases the patient MAY not be present, such as a case meeting about a patient between several practitioners or a careteam. */
  subject?: Reference;
  /** The subjectStatus value can be used to track the patient's status within the encounter. It details whether the patient has arrived or departed, has been triaged or is currently in a waiting status. */
  subjectStatus?: CodeableConcept;
  /** Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation). */
  type?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getDurationSchema = (): z.ZodType<Duration> =>
  DurationSchemaInternal as z.ZodType<Duration>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getEncounterHistory_LocationSchema =
  (): z.ZodType<EncounterHistory_Location> =>
    EncounterHistory_LocationSchemaInternal as z.ZodType<EncounterHistory_Location>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const EncounterHistorySchemaInternal = z
  .object({
    actualPeriod: z.lazy(getPeriodSchema).optional(),
    class: z.lazy(getCodeableConceptSchema),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    encounter: z.lazy(getReferenceSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    length: z.lazy(getDurationSchema).optional(),
    location: z.lazy(getEncounterHistory_LocationSchema).array().optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    plannedEndDate: fhirDateTime().optional(),
    _plannedEndDate: z.lazy(getElementSchema).optional(),
    plannedStartDate: fhirDateTime().optional(),
    _plannedStartDate: z.lazy(getElementSchema).optional(),
    resourceType: z.literal("EncounterHistory"),
    serviceType: z.lazy(getCodeableReferenceSchema).array().optional(),
    status: z.enum([
      "cancelled",
      "completed",
      "discharged",
      "discontinued",
      "entered-in-error",
      "in-progress",
      "on-hold",
      "planned",
      "unknown",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    subject: z.lazy(getReferenceSchema).optional(),
    subjectStatus: z.lazy(getCodeableConceptSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).array().optional(),
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

export const EncounterHistorySchema =
  EncounterHistorySchemaInternal as z.ZodType<EncounterHistory>;
