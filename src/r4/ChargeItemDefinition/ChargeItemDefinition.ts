// Profile: http://hl7.org/fhir/StructureDefinition/ChargeItemDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
  fhirCanonical,
  fhirDate,
  fhirDateTime,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { ContactDetail } from "../ContactDetail";
import { ContactDetailSchemaInternal } from "../ContactDetail";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { UsageContext } from "../UsageContext";
import { UsageContextSchemaInternal } from "../UsageContext";
import type { ChargeItemDefinition_Applicability } from "./ChargeItemDefinition_Applicability";
import { ChargeItemDefinition_ApplicabilitySchemaInternal } from "./ChargeItemDefinition_Applicability";
import type { ChargeItemDefinition_PropertyGroup } from "./ChargeItemDefinition_PropertyGroup";
import { ChargeItemDefinition_PropertyGroupSchemaInternal } from "./ChargeItemDefinition_PropertyGroup";

/** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */
export interface ChargeItemDefinition extends DomainResource {
  /** Expressions that describe applicability criteria for the billing code. */
  applicability?: Array<ChargeItemDefinition_Applicability>;
  /** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage. */
  approvalDate?: string;
  /** Extensions for approvalDate */
  _approvalDate?: Element;
  /** The defined billing details in this resource pertain to the given billing code. */
  code?: CodeableConcept;
  /** Contact details to assist a user in finding and communicating with the publisher. */
  contact?: Array<ContactDetail>;
  /** A copyright statement relating to the charge item definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the charge item definition. */
  copyright?: string;
  /** Extensions for copyright */
  _copyright?: Element;
  /** The date  (and optionally time) when the charge item definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the charge item definition changes. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** The URL pointing to an externally-defined charge item definition that is adhered to in whole or in part by this definition. */
  derivedFromUri?: Array<string | null>;
  /** Extensions for derivedFromUri */
  _derivedFromUri?: Array<Element | null>;
  /** A free text natural language description of the charge item definition from a consumer's perspective. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** The period during which the charge item definition content was or is planned to be in active use. */
  effectivePeriod?: Period;
  /** A Boolean value to indicate that this charge item definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
  experimental?: boolean;
  /** Extensions for experimental */
  _experimental?: Element;
  /** A formal identifier that is used to identify this charge item definition when it is represented in other formats, or referenced in a specification, model, design or an instance. */
  identifier?: Array<Identifier>;
  /** The defined billing details in this resource pertain to the given product instance(s). */
  instance?: Array<Reference>;
  /** A legal or geographic region in which the charge item definition is intended to be used. */
  jurisdiction?: Array<CodeableConcept>;
  /** The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date. */
  lastReviewDate?: string;
  /** Extensions for lastReviewDate */
  _lastReviewDate?: Element;
  /** A larger definition of which this particular definition is a component or step. */
  partOf?: Array<string | null>;
  /** Extensions for partOf */
  _partOf?: Array<Element | null>;
  /** Group of properties which are applicable under the same conditions. If no applicability rules are established for the group, then all properties always apply. */
  propertyGroup?: Array<ChargeItemDefinition_PropertyGroup>;
  /** The name of the organization or individual that published the charge item definition. */
  publisher?: string;
  /** Extensions for publisher */
  _publisher?: Element;
  /** As new versions of a protocol or guideline are defined, allows identification of what versions are replaced by a new instance. */
  replaces?: Array<string | null>;
  /** Extensions for replaces */
  _replaces?: Array<Element | null>;
  /** This is a ChargeItemDefinition resource. */
  resourceType: "ChargeItemDefinition";
  /** The current state of the ChargeItemDefinition. */
  status: "active" | "draft" | "retired" | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** A short, descriptive, user-friendly title for the charge item definition. */
  title?: string;
  /** Extensions for title */
  _title?: Element;
  /** An absolute URI that is used to identify this charge item definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this charge item definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the charge item definition is stored on different servers. */
  url: string;
  /** Extensions for url */
  _url?: Element;
  /** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate charge item definition instances. */
  useContext?: Array<UsageContext>;
  /** The identifier that is used to identify this version of the charge item definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the charge item definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active assets. */
  version?: string;
  /** Extensions for version */
  _version?: Element;
}

const getChargeItemDefinition_ApplicabilitySchema =
  (): z.ZodType<ChargeItemDefinition_Applicability> =>
    ChargeItemDefinition_ApplicabilitySchemaInternal as z.ZodType<ChargeItemDefinition_Applicability>;
const getChargeItemDefinition_PropertyGroupSchema =
  (): z.ZodType<ChargeItemDefinition_PropertyGroup> =>
    ChargeItemDefinition_PropertyGroupSchemaInternal as z.ZodType<ChargeItemDefinition_PropertyGroup>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
  ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
  UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const ChargeItemDefinitionSchemaInternal =
  DomainResourceSchemaInternal.extend({
    applicability: z
      .lazy(getChargeItemDefinition_ApplicabilitySchema)
      .array()
      .optional(),
    approvalDate: fhirDate().optional(),
    _approvalDate: z.lazy(getElementSchema).optional(),
    code: z.lazy(getCodeableConceptSchema).optional(),
    contact: z.lazy(getContactDetailSchema).array().optional(),
    copyright: z
      .string()
      .regex(/[ \r\n\t\S]+/)
      .optional(),
    _copyright: z.lazy(getElementSchema).optional(),
    date: fhirDateTime().optional(),
    _date: z.lazy(getElementSchema).optional(),
    derivedFromUri: fhirUri().nullable().array().optional(),
    _derivedFromUri: z.lazy(getElementSchema).nullable().array().optional(),
    description: z
      .string()
      .regex(/[ \r\n\t\S]+/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    effectivePeriod: z.lazy(getPeriodSchema).optional(),
    experimental: z.boolean().optional(),
    _experimental: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    instance: z.lazy(getReferenceSchema).array().optional(),
    jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
    lastReviewDate: fhirDate().optional(),
    _lastReviewDate: z.lazy(getElementSchema).optional(),
    partOf: fhirCanonical().nullable().array().optional(),
    _partOf: z.lazy(getElementSchema).nullable().array().optional(),
    propertyGroup: z
      .lazy(getChargeItemDefinition_PropertyGroupSchema)
      .array()
      .optional(),
    publisher: fhirString().optional(),
    _publisher: z.lazy(getElementSchema).optional(),
    replaces: fhirCanonical().nullable().array().optional(),
    _replaces: z.lazy(getElementSchema).nullable().array().optional(),
    resourceType: z.literal("ChargeItemDefinition"),
    status: z.enum(["active", "draft", "retired", "unknown"]),
    _status: z.lazy(getElementSchema).optional(),
    title: fhirString().optional(),
    _title: z.lazy(getElementSchema).optional(),
    url: fhirUri(),
    _url: z.lazy(getElementSchema).optional(),
    useContext: z.lazy(getUsageContextSchema).array().optional(),
    version: fhirString().optional(),
    _version: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validatePrimitiveArrayPair(
        record.derivedFromUri,
        record._derivedFromUri,
        "derivedFromUri",
        "_derivedFromUri",
        ctx,
      );
      validatePrimitiveArrayPair(
        record.partOf,
        record._partOf,
        "partOf",
        "_partOf",
        ctx,
      );
      validatePrimitiveArrayPair(
        record.replaces,
        record._replaces,
        "replaces",
        "_replaces",
        ctx,
      );
      validateReferenceTarget(
        record.instance,
        "instance",
        [
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Medication",
          "http://hl7.org/fhir/StructureDefinition/Substance",
        ],
        ["Device", "Medication", "Substance"],
        ctx,
      );
    });

export const ChargeItemDefinitionSchema =
  ChargeItemDefinitionSchemaInternal as z.ZodType<ChargeItemDefinition>;
