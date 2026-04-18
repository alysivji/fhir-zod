// Source: https://hl7.org/fhir/R5/regulatedauthorization.html
// Profile: http://hl7.org/fhir/StructureDefinition/RegulatedAuthorization
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

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
import type { RegulatedAuthorization_Case } from "./RegulatedAuthorization_Case";
import { RegulatedAuthorization_CaseSchemaInternal } from "./RegulatedAuthorization_Case";

/** Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity that is cited in a guidance, regulation, rule or legislative act. An example is Market Authorization relating to a Medicinal Product. */
export interface RegulatedAuthorization extends DomainResource {
  /** Additional information or supporting documentation about the authorization. */
  attachedDocument?: Array<Reference>;
  /** The legal or regulatory framework against which this authorization is granted, or other reasons for it. */
  basis?: Array<CodeableConcept>;
  /** The case or regulatory procedure for granting or amending a regulated authorization. An authorization is granted in response to submissions/applications by those seeking authorization. A case is the administrative process that deals with the application(s) that relate to this and assesses them. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page). */
  case?: RegulatedAuthorization_Case;
  /** General textual supporting information. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** The organization that has been granted this authorization, by some authoritative body (the 'regulator'). */
  holder?: Reference;
  /** Business identifier for the authorization, typically assigned by the authorizing body. */
  identifier?: Array<Identifier>;
  /** Condition for which the use of the regulated product applies. */
  indication?: Array<CodeableReference>;
  /** The intended use of the product, e.g. prevention, treatment, diagnosis. */
  intendedUse?: CodeableConcept;
  /** The territory (e.g., country, jurisdiction etc.) in which the authorization has been granted. */
  region?: Array<CodeableConcept>;
  /** The regulatory authority or authorizing body granting the authorization. For example, European Medicines Agency (EMA), Food and Drug Administration (FDA), Health Canada (HC), etc. */
  regulator?: Reference;
  /** This is a RegulatedAuthorization resource. */
  resourceType: "RegulatedAuthorization";
  /** The status that is authorised e.g. approved. Intermediate states and actions can be tracked with cases and applications. */
  status?: CodeableConcept;
  /** The date at which the current status was assigned. */
  statusDate?: string;
  /** Extensions for statusDate */
  _statusDate?: Element;
  /** The product type, treatment, facility or activity that is being authorized. */
  subject?: Array<Reference>;
  /** Overall type of this authorization, for example drug marketing approval, orphan drug designation. */
  type?: CodeableConcept;
  /** The time period in which the regulatory approval, clearance or licencing is in effect. As an example, a Marketing Authorization includes the date of authorization and/or an expiration date. */
  validityPeriod?: Period;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
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
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getRegulatedAuthorization_CaseSchema =
  (): z.ZodType<RegulatedAuthorization_Case> =>
    RegulatedAuthorization_CaseSchemaInternal as z.ZodType<RegulatedAuthorization_Case>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const RegulatedAuthorizationSchemaInternal = z
  .object({
    attachedDocument: z.lazy(getReferenceSchema).array().optional(),
    basis: z.lazy(getCodeableConceptSchema).array().optional(),
    case: z.lazy(getRegulatedAuthorization_CaseSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    holder: z.lazy(getReferenceSchema).optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    indication: z.lazy(getCodeableReferenceSchema).array().optional(),
    intendedUse: z.lazy(getCodeableConceptSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    region: z.lazy(getCodeableConceptSchema).array().optional(),
    regulator: z.lazy(getReferenceSchema).optional(),
    resourceType: z.literal("RegulatedAuthorization"),
    status: z.lazy(getCodeableConceptSchema).optional(),
    statusDate: fhirDateTime().optional(),
    _statusDate: z.lazy(getElementSchema).optional(),
    subject: z.lazy(getReferenceSchema).array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
    validityPeriod: z.lazy(getPeriodSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.attachedDocument,
      "attachedDocument",
      ["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
      ["DocumentReference"],
      ctx,
    );
    validateReferenceTarget(
      record.holder,
      "holder",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
      ctx,
    );
    validateReferenceTarget(
      record.regulator,
      "regulator",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
      ctx,
    );
    validateReferenceTarget(
      record.subject,
      "subject",
      [
        "http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
        "http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct",
        "http://hl7.org/fhir/StructureDefinition/DeviceDefinition",
        "http://hl7.org/fhir/StructureDefinition/Ingredient",
        "http://hl7.org/fhir/StructureDefinition/Location",
        "http://hl7.org/fhir/StructureDefinition/ManufacturedItemDefinition",
        "http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition",
        "http://hl7.org/fhir/StructureDefinition/NutritionProduct",
        "http://hl7.org/fhir/StructureDefinition/ObservationDefinition",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition",
        "http://hl7.org/fhir/StructureDefinition/PlanDefinition",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/ResearchStudy",
        "http://hl7.org/fhir/StructureDefinition/SubstanceDefinition",
      ],
      [
        "ActivityDefinition",
        "BiologicallyDerivedProduct",
        "DeviceDefinition",
        "Ingredient",
        "Location",
        "ManufacturedItemDefinition",
        "MedicinalProductDefinition",
        "NutritionProduct",
        "ObservationDefinition",
        "Organization",
        "PackagedProductDefinition",
        "PlanDefinition",
        "Practitioner",
        "ResearchStudy",
        "SubstanceDefinition",
      ],
      ctx,
    );
  });

export const RegulatedAuthorizationSchema =
  RegulatedAuthorizationSchemaInternal as z.ZodType<RegulatedAuthorization>;
