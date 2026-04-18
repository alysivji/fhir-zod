// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductAuthorization
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { fhirDateTime } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
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
import type { MedicinalProductAuthorization_JurisdictionalAuthorization } from "./MedicinalProductAuthorization_JurisdictionalAuthorization";
import { MedicinalProductAuthorization_JurisdictionalAuthorizationSchemaInternal } from "./MedicinalProductAuthorization_JurisdictionalAuthorization";
import type { MedicinalProductAuthorization_Procedure } from "./MedicinalProductAuthorization_Procedure";
import { MedicinalProductAuthorization_ProcedureSchemaInternal } from "./MedicinalProductAuthorization_Procedure";

/** The regulatory authorization of a medicinal product. */
export interface MedicinalProductAuthorization extends DomainResource {
  /** The country in which the marketing authorization has been granted. */
  country?: Array<CodeableConcept>;
  /** A period of time after authorization before generic product applicatiosn can be submitted. */
  dataExclusivityPeriod?: Period;
  /** The date when the first authorization was granted by a Medicines Regulatory Agency. */
  dateOfFirstAuthorization?: string;
  /** Extensions for dateOfFirstAuthorization */
  _dateOfFirstAuthorization?: Element;
  /** Marketing Authorization Holder. */
  holder?: Reference;
  /** Business identifier for the marketing authorization, as assigned by a regulator. */
  identifier?: Array<Identifier>;
  /** Date of first marketing authorization for a company's new medicinal product in any country in the World. */
  internationalBirthDate?: string;
  /** Extensions for internationalBirthDate */
  _internationalBirthDate?: Element;
  /** Jurisdiction within a country. */
  jurisdiction?: Array<CodeableConcept>;
  /** Authorization in areas within a country. */
  jurisdictionalAuthorization?: Array<MedicinalProductAuthorization_JurisdictionalAuthorization>;
  /** The legal framework against which this authorization is granted. */
  legalBasis?: CodeableConcept;
  /** The regulatory procedure for granting or amending a marketing authorization. */
  procedure?: MedicinalProductAuthorization_Procedure;
  /** Medicines Regulatory Agency. */
  regulator?: Reference;
  /** This is a MedicinalProductAuthorization resource. */
  resourceType: "MedicinalProductAuthorization";
  /** The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored. */
  restoreDate?: string;
  /** Extensions for restoreDate */
  _restoreDate?: Element;
  /** The status of the marketing authorization. */
  status?: CodeableConcept;
  /** The date at which the given status has become applicable. */
  statusDate?: string;
  /** Extensions for statusDate */
  _statusDate?: Element;
  /** The medicinal product that is being authorized. */
  subject?: Reference;
  /** The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format. */
  validityPeriod?: Period;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMedicinalProductAuthorization_JurisdictionalAuthorizationSchema =
  (): z.ZodType<MedicinalProductAuthorization_JurisdictionalAuthorization> =>
    MedicinalProductAuthorization_JurisdictionalAuthorizationSchemaInternal as z.ZodType<MedicinalProductAuthorization_JurisdictionalAuthorization>;
const getMedicinalProductAuthorization_ProcedureSchema =
  (): z.ZodType<MedicinalProductAuthorization_Procedure> =>
    MedicinalProductAuthorization_ProcedureSchemaInternal as z.ZodType<MedicinalProductAuthorization_Procedure>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicinalProductAuthorizationSchemaInternal =
  DomainResourceSchemaInternal.extend({
    country: z.lazy(getCodeableConceptSchema).array().optional(),
    dataExclusivityPeriod: z.lazy(getPeriodSchema).optional(),
    dateOfFirstAuthorization: fhirDateTime().optional(),
    _dateOfFirstAuthorization: z.lazy(getElementSchema).optional(),
    holder: z.lazy(getReferenceSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    internationalBirthDate: fhirDateTime().optional(),
    _internationalBirthDate: z.lazy(getElementSchema).optional(),
    jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
    jurisdictionalAuthorization: z
      .lazy(getMedicinalProductAuthorization_JurisdictionalAuthorizationSchema)
      .array()
      .optional(),
    legalBasis: z.lazy(getCodeableConceptSchema).optional(),
    procedure: z
      .lazy(getMedicinalProductAuthorization_ProcedureSchema)
      .optional(),
    regulator: z.lazy(getReferenceSchema).optional(),
    resourceType: z.literal("MedicinalProductAuthorization"),
    restoreDate: fhirDateTime().optional(),
    _restoreDate: z.lazy(getElementSchema).optional(),
    status: z.lazy(getCodeableConceptSchema).optional(),
    statusDate: fhirDateTime().optional(),
    _statusDate: z.lazy(getElementSchema).optional(),
    subject: z.lazy(getReferenceSchema).optional(),
    validityPeriod: z.lazy(getPeriodSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
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
          "http://hl7.org/fhir/StructureDefinition/MedicinalProduct",
          "http://hl7.org/fhir/StructureDefinition/MedicinalProductPackaged",
        ],
        ["MedicinalProduct", "MedicinalProductPackaged"],
        ctx,
      );
    });

export const MedicinalProductAuthorizationSchema =
  MedicinalProductAuthorizationSchemaInternal as z.ZodType<MedicinalProductAuthorization>;
