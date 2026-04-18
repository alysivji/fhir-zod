// Source: https://hl7.org/fhir/R4B/citation-definitions.html#Citation.citedArtifact.contributorship.entry
// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { Address } from "../Address";
import { AddressSchemaInternal } from "../Address";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { ContactPoint } from "../ContactPoint";
import { ContactPointSchemaInternal } from "../ContactPoint";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { HumanName } from "../HumanName";
import { HumanNameSchemaInternal } from "../HumanName";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Citation_CitedArtifact_Contributorship_Entry_AffiliationInfo } from "./Citation_CitedArtifact_Contributorship_Entry_AffiliationInfo";
import { Citation_CitedArtifact_Contributorship_Entry_AffiliationInfoSchemaInternal } from "./Citation_CitedArtifact_Contributorship_Entry_AffiliationInfo";
import type { Citation_CitedArtifact_Contributorship_Entry_ContributionInstance } from "./Citation_CitedArtifact_Contributorship_Entry_ContributionInstance";
import { Citation_CitedArtifact_Contributorship_Entry_ContributionInstanceSchemaInternal } from "./Citation_CitedArtifact_Contributorship_Entry_ContributionInstance";

/** An individual entity named in the author list or contributor list. */
export interface Citation_CitedArtifact_Contributorship_Entry
  extends BackboneElement {
  /** Physical mailing address for the author or contributor. */
  address?: Array<Address>;
  /** Organization affiliated with the entity. */
  affiliationInfo?: Array<Citation_CitedArtifact_Contributorship_Entry_AffiliationInfo>;
  /** Used for collective or corporate name as an author. */
  collectiveName?: string;
  /** Extensions for collectiveName */
  _collectiveName?: Element;
  /** Contributions with accounting for time or number. */
  contributionInstance?: Array<Citation_CitedArtifact_Contributorship_Entry_ContributionInstance>;
  /** This element identifies the specific nature of an individual’s contribution with respect to the cited work. */
  contributionType?: Array<CodeableConcept>;
  /** Indication of which contributor is the corresponding contributor for the role. */
  correspondingContact?: boolean;
  /** Extensions for correspondingContact */
  _correspondingContact?: Element;
  /** Unique person identifier. */
  identifier?: Array<Identifier>;
  /** Initials for forename. */
  initials?: string;
  /** Extensions for initials */
  _initials?: Element;
  /** Used to code order of authors. */
  listOrder?: number;
  /** Extensions for listOrder */
  _listOrder?: Element;
  /** A name associated with the individual. */
  name?: HumanName;
  /** The role of the contributor (e.g. author, editor, reviewer). */
  role?: CodeableConcept;
  /** Email or telephone contact methods for the author or contributor. */
  telecom?: Array<ContactPoint>;
}

const getAddressSchema = (): z.ZodType<Address> =>
  AddressSchemaInternal as z.ZodType<Address>;
const getCitation_CitedArtifact_Contributorship_Entry_AffiliationInfoSchema =
  (): z.ZodType<Citation_CitedArtifact_Contributorship_Entry_AffiliationInfo> =>
    Citation_CitedArtifact_Contributorship_Entry_AffiliationInfoSchemaInternal as z.ZodType<Citation_CitedArtifact_Contributorship_Entry_AffiliationInfo>;
const getCitation_CitedArtifact_Contributorship_Entry_ContributionInstanceSchema =
  (): z.ZodType<Citation_CitedArtifact_Contributorship_Entry_ContributionInstance> =>
    Citation_CitedArtifact_Contributorship_Entry_ContributionInstanceSchemaInternal as z.ZodType<Citation_CitedArtifact_Contributorship_Entry_ContributionInstance>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
  ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getHumanNameSchema = (): z.ZodType<HumanName> =>
  HumanNameSchemaInternal as z.ZodType<HumanName>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;

/** @internal */
export const Citation_CitedArtifact_Contributorship_EntrySchemaInternal =
  BackboneElementSchemaInternal.extend({
    address: z.lazy(getAddressSchema).array().optional(),
    affiliationInfo: z
      .lazy(
        getCitation_CitedArtifact_Contributorship_Entry_AffiliationInfoSchema,
      )
      .array()
      .optional(),
    collectiveName: fhirString().optional(),
    _collectiveName: z.lazy(getElementSchema).optional(),
    contributionInstance: z
      .lazy(
        getCitation_CitedArtifact_Contributorship_Entry_ContributionInstanceSchema,
      )
      .array()
      .optional(),
    contributionType: z.lazy(getCodeableConceptSchema).array().optional(),
    correspondingContact: z.boolean().optional(),
    _correspondingContact: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    initials: fhirString().optional(),
    _initials: z.lazy(getElementSchema).optional(),
    listOrder: z.number().int().positive().optional(),
    _listOrder: z.lazy(getElementSchema).optional(),
    name: z.lazy(getHumanNameSchema).optional(),
    role: z.lazy(getCodeableConceptSchema).optional(),
    telecom: z.lazy(getContactPointSchema).array().optional(),
  }).strict();

export const Citation_CitedArtifact_Contributorship_EntrySchema =
  Citation_CitedArtifact_Contributorship_EntrySchemaInternal as z.ZodType<Citation_CitedArtifact_Contributorship_Entry>;
