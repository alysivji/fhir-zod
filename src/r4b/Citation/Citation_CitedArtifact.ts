// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:00:58.420Z

import * as z from "zod";
import { fhirDateTime } from "../../shared/fhir-primitives";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Citation_CitedArtifact_Abstract } from "./Citation_CitedArtifact_Abstract";
import { Citation_CitedArtifact_AbstractSchemaInternal } from "./Citation_CitedArtifact_Abstract";
import type { Citation_CitedArtifact_Classification } from "./Citation_CitedArtifact_Classification";
import { Citation_CitedArtifact_ClassificationSchemaInternal } from "./Citation_CitedArtifact_Classification";
import type { Citation_CitedArtifact_Contributorship } from "./Citation_CitedArtifact_Contributorship";
import { Citation_CitedArtifact_ContributorshipSchemaInternal } from "./Citation_CitedArtifact_Contributorship";
import type { Citation_CitedArtifact_Part } from "./Citation_CitedArtifact_Part";
import { Citation_CitedArtifact_PartSchemaInternal } from "./Citation_CitedArtifact_Part";
import type { Citation_CitedArtifact_PublicationForm } from "./Citation_CitedArtifact_PublicationForm";
import { Citation_CitedArtifact_PublicationFormSchemaInternal } from "./Citation_CitedArtifact_PublicationForm";
import type { Citation_CitedArtifact_RelatesTo } from "./Citation_CitedArtifact_RelatesTo";
import { Citation_CitedArtifact_RelatesToSchemaInternal } from "./Citation_CitedArtifact_RelatesTo";
import type { Citation_CitedArtifact_StatusDate } from "./Citation_CitedArtifact_StatusDate";
import { Citation_CitedArtifact_StatusDateSchemaInternal } from "./Citation_CitedArtifact_StatusDate";
import type { Citation_CitedArtifact_Title } from "./Citation_CitedArtifact_Title";
import { Citation_CitedArtifact_TitleSchemaInternal } from "./Citation_CitedArtifact_Title";
import type { Citation_CitedArtifact_Version } from "./Citation_CitedArtifact_Version";
import { Citation_CitedArtifact_VersionSchemaInternal } from "./Citation_CitedArtifact_Version";
import type { Citation_CitedArtifact_WebLocation } from "./Citation_CitedArtifact_WebLocation";
import { Citation_CitedArtifact_WebLocationSchemaInternal } from "./Citation_CitedArtifact_WebLocation";

/** The article or artifact being described. */
export interface Citation_CitedArtifact extends BackboneElement {
  /** Summary of the article or artifact. */
  abstract?: Array<Citation_CitedArtifact_Abstract>;
  /** The assignment to an organizing scheme. */
  classification?: Array<Citation_CitedArtifact_Classification>;
  /** This element is used to list authors and other contributors, their contact information, specific contributions, and summary statements. */
  contributorship?: Citation_CitedArtifact_Contributorship;
  /** The status of the cited artifact. */
  currentState?: Array<CodeableConcept>;
  /** When the cited artifact was accessed. */
  dateAccessed?: string;
  /** Extensions for dateAccessed */
  _dateAccessed?: Element;
  /** A formal identifier that is used to identify this citation when it is represented in other formats, or referenced in a specification, model, design or an instance. */
  identifier?: Array<Identifier>;
  /** Any additional information or content for the article or artifact. */
  note?: Array<Annotation>;
  /** The component of the article or artifact. */
  part?: Citation_CitedArtifact_Part;
  /** If multiple, used to represent alternative forms of the article that are not separate citations. */
  publicationForm?: Array<Citation_CitedArtifact_PublicationForm>;
  /** A formal identifier that is used to identify things closely related to this citation. */
  relatedIdentifier?: Array<Identifier>;
  /** The artifact related to the cited artifact. */
  relatesTo?: Array<Citation_CitedArtifact_RelatesTo>;
  /** An effective date or period for a status of the cited artifact. */
  statusDate?: Array<Citation_CitedArtifact_StatusDate>;
  /** The title details of the article or artifact. */
  title?: Array<Citation_CitedArtifact_Title>;
  /** The defined version of the cited artifact. */
  version?: Citation_CitedArtifact_Version;
  /** Used for any URL for the article or artifact cited. */
  webLocation?: Array<Citation_CitedArtifact_WebLocation>;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCitation_CitedArtifact_AbstractSchema =
  (): z.ZodType<Citation_CitedArtifact_Abstract> =>
    Citation_CitedArtifact_AbstractSchemaInternal as z.ZodType<Citation_CitedArtifact_Abstract>;
const getCitation_CitedArtifact_ClassificationSchema =
  (): z.ZodType<Citation_CitedArtifact_Classification> =>
    Citation_CitedArtifact_ClassificationSchemaInternal as z.ZodType<Citation_CitedArtifact_Classification>;
const getCitation_CitedArtifact_ContributorshipSchema =
  (): z.ZodType<Citation_CitedArtifact_Contributorship> =>
    Citation_CitedArtifact_ContributorshipSchemaInternal as z.ZodType<Citation_CitedArtifact_Contributorship>;
const getCitation_CitedArtifact_PartSchema =
  (): z.ZodType<Citation_CitedArtifact_Part> =>
    Citation_CitedArtifact_PartSchemaInternal as z.ZodType<Citation_CitedArtifact_Part>;
const getCitation_CitedArtifact_PublicationFormSchema =
  (): z.ZodType<Citation_CitedArtifact_PublicationForm> =>
    Citation_CitedArtifact_PublicationFormSchemaInternal as z.ZodType<Citation_CitedArtifact_PublicationForm>;
const getCitation_CitedArtifact_RelatesToSchema =
  (): z.ZodType<Citation_CitedArtifact_RelatesTo> =>
    Citation_CitedArtifact_RelatesToSchemaInternal as z.ZodType<Citation_CitedArtifact_RelatesTo>;
const getCitation_CitedArtifact_StatusDateSchema =
  (): z.ZodType<Citation_CitedArtifact_StatusDate> =>
    Citation_CitedArtifact_StatusDateSchemaInternal as z.ZodType<Citation_CitedArtifact_StatusDate>;
const getCitation_CitedArtifact_TitleSchema =
  (): z.ZodType<Citation_CitedArtifact_Title> =>
    Citation_CitedArtifact_TitleSchemaInternal as z.ZodType<Citation_CitedArtifact_Title>;
const getCitation_CitedArtifact_VersionSchema =
  (): z.ZodType<Citation_CitedArtifact_Version> =>
    Citation_CitedArtifact_VersionSchemaInternal as z.ZodType<Citation_CitedArtifact_Version>;
const getCitation_CitedArtifact_WebLocationSchema =
  (): z.ZodType<Citation_CitedArtifact_WebLocation> =>
    Citation_CitedArtifact_WebLocationSchemaInternal as z.ZodType<Citation_CitedArtifact_WebLocation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;

/** @internal */
export const Citation_CitedArtifactSchemaInternal =
  BackboneElementSchemaInternal.extend({
    abstract: z
      .lazy(getCitation_CitedArtifact_AbstractSchema)
      .array()
      .optional(),
    classification: z
      .lazy(getCitation_CitedArtifact_ClassificationSchema)
      .array()
      .optional(),
    contributorship: z
      .lazy(getCitation_CitedArtifact_ContributorshipSchema)
      .optional(),
    currentState: z.lazy(getCodeableConceptSchema).array().optional(),
    dateAccessed: fhirDateTime().optional(),
    _dateAccessed: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    part: z.lazy(getCitation_CitedArtifact_PartSchema).optional(),
    publicationForm: z
      .lazy(getCitation_CitedArtifact_PublicationFormSchema)
      .array()
      .optional(),
    relatedIdentifier: z.lazy(getIdentifierSchema).array().optional(),
    relatesTo: z
      .lazy(getCitation_CitedArtifact_RelatesToSchema)
      .array()
      .optional(),
    statusDate: z
      .lazy(getCitation_CitedArtifact_StatusDateSchema)
      .array()
      .optional(),
    title: z.lazy(getCitation_CitedArtifact_TitleSchema).array().optional(),
    version: z.lazy(getCitation_CitedArtifact_VersionSchema).optional(),
    webLocation: z
      .lazy(getCitation_CitedArtifact_WebLocationSchema)
      .array()
      .optional(),
  }).strict();

export const Citation_CitedArtifactSchema =
  Citation_CitedArtifactSchemaInternal as z.ZodType<Citation_CitedArtifact>;
