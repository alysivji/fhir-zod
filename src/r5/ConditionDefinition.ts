// Profile: http://hl7.org/fhir/StructureDefinition/ConditionDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirDateTime, fhirString, fhirUri } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { ConditionDefinition_Medication } from "./ConditionDefinition_Medication";
import { ConditionDefinition_MedicationSchemaInternal } from "./ConditionDefinition_Medication";
import type { ConditionDefinition_Observation } from "./ConditionDefinition_Observation";
import { ConditionDefinition_ObservationSchemaInternal } from "./ConditionDefinition_Observation";
import type { ConditionDefinition_Plan } from "./ConditionDefinition_Plan";
import { ConditionDefinition_PlanSchemaInternal } from "./ConditionDefinition_Plan";
import type { ConditionDefinition_Precondition } from "./ConditionDefinition_Precondition";
import { ConditionDefinition_PreconditionSchemaInternal } from "./ConditionDefinition_Precondition";
import type { ConditionDefinition_Questionnaire } from "./ConditionDefinition_Questionnaire";
import { ConditionDefinition_QuestionnaireSchemaInternal } from "./ConditionDefinition_Questionnaire";
import type { ContactDetail } from "./ContactDetail";
import { ContactDetailSchemaInternal } from "./ContactDetail";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** A definition of a condition and information relevant to managing it. */
export interface ConditionDefinition extends DomainResource {
  /** The anatomical location where this condition manifests itself. */
  bodySite?: CodeableConcept;
  /** Identification of the condition, problem or diagnosis. */
  code: CodeableConcept;
  /** Contact details to assist a user in finding and communicating with the publisher. */
  contact?: Array<ContactDetail>;
  /** The date  (and optionally time) when the condition definition was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the condition definition changes. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** Formal definitions of the condition. These may be references to ontologies, published clinical protocols or research papers. */
  definition?: Array<string | null>;
  /** Extensions for definition */
  _definition?: Array<Element | null>;
  /** A free text natural language description of the condition definition from a consumer's perspective. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** A Boolean value to indicate that this condition definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
  experimental?: boolean;
  /** Extensions for experimental */
  _experimental?: Element;
  /** Whether bodySite is appropriate to collect for this condition. */
  hasBodySite?: boolean;
  /** Extensions for hasBodySite */
  _hasBodySite?: Element;
  /** Whether Severity is appropriate to collect for this condition. */
  hasSeverity?: boolean;
  /** Extensions for hasSeverity */
  _hasSeverity?: Element;
  /** Whether stage is appropriate to collect for this condition. */
  hasStage?: boolean;
  /** Extensions for hasStage */
  _hasStage?: Element;
  /** A formal identifier that is used to identify this condition definition when it is represented in other formats, or referenced in a specification, model, design or an instance. */
  identifier?: Array<Identifier>;
  /** A legal or geographic region in which the condition definition is intended to be used. */
  jurisdiction?: Array<CodeableConcept>;
  /** Medications particularly relevant for this condition. */
  medication?: Array<ConditionDefinition_Medication>;
  /** A natural language name identifying the condition definition. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** Observations particularly relevant to this condition. */
  observation?: Array<ConditionDefinition_Observation>;
  /** Plan that is appropriate. */
  plan?: Array<ConditionDefinition_Plan>;
  /** An observation that suggests that this condition applies. */
  precondition?: Array<ConditionDefinition_Precondition>;
  /** The name of the organization or individual responsible for the release and ongoing maintenance of the condition definition. */
  publisher?: string;
  /** Extensions for publisher */
  _publisher?: Element;
  /** Questionnaire for this condition. */
  questionnaire?: Array<ConditionDefinition_Questionnaire>;
  /** This is a ConditionDefinition resource. */
  resourceType: "ConditionDefinition";
  /** A subjective assessment of the severity of the condition as evaluated by the clinician. */
  severity?: CodeableConcept;
  /** Clinical stage or grade of a condition. May include formal severity assessments. */
  stage?: CodeableConcept;
  /** The status of this condition definition. Enables tracking the life-cycle of the content. */
  status: "active" | "draft" | "retired" | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** An explanatory or alternate title for the event definition giving additional information about its content. */
  subtitle?: string;
  /** Extensions for subtitle */
  _subtitle?: Element;
  /** Appropriate team for this condition. */
  team?: Array<Reference>;
  /** A short, descriptive, user-friendly title for the condition definition. */
  title?: string;
  /** Extensions for title */
  _title?: Element;
  /** An absolute URI that is used to identify this condition definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this condition definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the condition definition is stored on different servers. */
  url?: string;
  /** Extensions for url */
  _url?: Element;
  /** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate condition definition instances. */
  useContext?: Array<UsageContext>;
  /** The identifier that is used to identify this version of the condition definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the condition definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
  version?: string;
  /** Extensions for version */
  _version?: Element;
  /** Indicates the mechanism used to compare versions to determine which is more current. */
  versionAlgorithmCoding?: Coding;
  /** Indicates the mechanism used to compare versions to determine which is more current. */
  versionAlgorithmString?: string;
  /** Extensions for versionAlgorithmString */
  _versionAlgorithmString?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getConditionDefinition_MedicationSchema =
  (): z.ZodType<ConditionDefinition_Medication> =>
    ConditionDefinition_MedicationSchemaInternal as z.ZodType<ConditionDefinition_Medication>;
const getConditionDefinition_ObservationSchema =
  (): z.ZodType<ConditionDefinition_Observation> =>
    ConditionDefinition_ObservationSchemaInternal as z.ZodType<ConditionDefinition_Observation>;
const getConditionDefinition_PlanSchema =
  (): z.ZodType<ConditionDefinition_Plan> =>
    ConditionDefinition_PlanSchemaInternal as z.ZodType<ConditionDefinition_Plan>;
const getConditionDefinition_PreconditionSchema =
  (): z.ZodType<ConditionDefinition_Precondition> =>
    ConditionDefinition_PreconditionSchemaInternal as z.ZodType<ConditionDefinition_Precondition>;
const getConditionDefinition_QuestionnaireSchema =
  (): z.ZodType<ConditionDefinition_Questionnaire> =>
    ConditionDefinition_QuestionnaireSchemaInternal as z.ZodType<ConditionDefinition_Questionnaire>;
const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
  ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
  UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const ConditionDefinitionSchemaInternal =
  DomainResourceSchemaInternal.extend({
    bodySite: z.lazy(getCodeableConceptSchema).optional(),
    code: z.lazy(getCodeableConceptSchema),
    contact: z.lazy(getContactDetailSchema).array().optional(),
    date: fhirDateTime().optional(),
    _date: z.lazy(getElementSchema).optional(),
    definition: fhirUri().nullable().array().optional(),
    _definition: z.lazy(getElementSchema).nullable().array().optional(),
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    experimental: z.boolean().optional(),
    _experimental: z.lazy(getElementSchema).optional(),
    hasBodySite: z.boolean().optional(),
    _hasBodySite: z.lazy(getElementSchema).optional(),
    hasSeverity: z.boolean().optional(),
    _hasSeverity: z.lazy(getElementSchema).optional(),
    hasStage: z.boolean().optional(),
    _hasStage: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
    medication: z
      .lazy(getConditionDefinition_MedicationSchema)
      .array()
      .optional(),
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    observation: z
      .lazy(getConditionDefinition_ObservationSchema)
      .array()
      .optional(),
    plan: z.lazy(getConditionDefinition_PlanSchema).array().optional(),
    precondition: z
      .lazy(getConditionDefinition_PreconditionSchema)
      .array()
      .optional(),
    publisher: fhirString().optional(),
    _publisher: z.lazy(getElementSchema).optional(),
    questionnaire: z
      .lazy(getConditionDefinition_QuestionnaireSchema)
      .array()
      .optional(),
    resourceType: z.literal("ConditionDefinition"),
    severity: z.lazy(getCodeableConceptSchema).optional(),
    stage: z.lazy(getCodeableConceptSchema).optional(),
    status: z.enum(["active", "draft", "retired", "unknown"]),
    _status: z.lazy(getElementSchema).optional(),
    subtitle: fhirString().optional(),
    _subtitle: z.lazy(getElementSchema).optional(),
    team: z.lazy(getReferenceSchema).array().optional(),
    title: fhirString().optional(),
    _title: z.lazy(getElementSchema).optional(),
    url: fhirUri().optional(),
    _url: z.lazy(getElementSchema).optional(),
    useContext: z.lazy(getUsageContextSchema).array().optional(),
    version: fhirString().optional(),
    _version: z.lazy(getElementSchema).optional(),
    versionAlgorithmCoding: z.lazy(getCodingSchema).optional(),
    versionAlgorithmString: fhirString().optional(),
    _versionAlgorithmString: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const versionAlgorithm_x_Present = [
        "versionAlgorithmCoding",
        "versionAlgorithmString",
      ].filter((field) => record[field] !== undefined);
      if (versionAlgorithm_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of versionAlgorithmCoding, versionAlgorithmString may be present for versionAlgorithm[x]",
          path: [versionAlgorithm_x_Present[0]],
        });
      }
      validatePrimitiveArrayPair(
        record.definition,
        record._definition,
        "definition",
        "_definition",
        ctx,
      );
      validateReferenceTarget(
        record.team,
        "team",
        ["http://hl7.org/fhir/StructureDefinition/CareTeam"],
        ["CareTeam"],
        ctx,
      );
    });

export const ConditionDefinitionSchema =
  ConditionDefinitionSchemaInternal as z.ZodType<ConditionDefinition>;
