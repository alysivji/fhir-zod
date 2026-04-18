// Profile: http://hl7.org/fhir/StructureDefinition/ObservationDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:03:58.798Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
  fhirCode,
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
import type { ObservationDefinition_QualifiedInterval } from "./ObservationDefinition_QualifiedInterval";
import { ObservationDefinition_QualifiedIntervalSchemaInternal } from "./ObservationDefinition_QualifiedInterval";
import type { ObservationDefinition_QuantitativeDetails } from "./ObservationDefinition_QuantitativeDetails";
import { ObservationDefinition_QuantitativeDetailsSchemaInternal } from "./ObservationDefinition_QuantitativeDetails";

/** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
export interface ObservationDefinition extends DomainResource {
  /** The set of abnormal coded results for the observation conforming to this ObservationDefinition. */
  abnormalCodedValueSet?: Reference;
  /** A code that classifies the general type of observation. */
  category?: Array<CodeableConcept>;
  /** Describes what will be observed. Sometimes this is called the observation "name". */
  code: CodeableConcept;
  /** The set of critical coded results for the observation conforming to this ObservationDefinition. */
  criticalCodedValueSet?: Reference;
  /** A unique identifier assigned to this ObservationDefinition artifact. */
  identifier?: Array<Identifier>;
  /** The method or technique used to perform the observation. */
  method?: CodeableConcept;
  /** Multiple results allowed for observations conforming to this ObservationDefinition. */
  multipleResultsAllowed?: boolean;
  /** Extensions for multipleResultsAllowed */
  _multipleResultsAllowed?: Element;
  /** The set of normal coded results for the observations conforming to this ObservationDefinition. */
  normalCodedValueSet?: Reference;
  /** The data types allowed for the value element of the instance observations conforming to this ObservationDefinition. */
  permittedDataType?: Array<
    | "boolean"
    | "CodeableConcept"
    | "dateTime"
    | "integer"
    | "Period"
    | "Quantity"
    | "Range"
    | "Ratio"
    | "SampledData"
    | "string"
    | "time"
    | null
  >;
  /** Extensions for permittedDataType */
  _permittedDataType?: Array<Element | null>;
  /** The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition. */
  preferredReportName?: string;
  /** Extensions for preferredReportName */
  _preferredReportName?: Element;
  /** Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition. */
  qualifiedInterval?: Array<ObservationDefinition_QualifiedInterval>;
  /** Characteristics for quantitative results of this observation. */
  quantitativeDetails?: ObservationDefinition_QuantitativeDetails;
  /** This is a ObservationDefinition resource. */
  resourceType: "ObservationDefinition";
  /** The set of valid coded results for the observations  conforming to this ObservationDefinition. */
  validCodedValueSet?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
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
const getObservationDefinition_QualifiedIntervalSchema =
  (): z.ZodType<ObservationDefinition_QualifiedInterval> =>
    ObservationDefinition_QualifiedIntervalSchemaInternal as z.ZodType<ObservationDefinition_QualifiedInterval>;
const getObservationDefinition_QuantitativeDetailsSchema =
  (): z.ZodType<ObservationDefinition_QuantitativeDetails> =>
    ObservationDefinition_QuantitativeDetailsSchemaInternal as z.ZodType<ObservationDefinition_QuantitativeDetails>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const ObservationDefinitionSchemaInternal = z
  .object({
    abnormalCodedValueSet: z.lazy(getReferenceSchema).optional(),
    category: z.lazy(getCodeableConceptSchema).array().optional(),
    code: z.lazy(getCodeableConceptSchema),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    criticalCodedValueSet: z.lazy(getReferenceSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    method: z.lazy(getCodeableConceptSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    multipleResultsAllowed: z.boolean().optional(),
    _multipleResultsAllowed: z.lazy(getElementSchema).optional(),
    normalCodedValueSet: z.lazy(getReferenceSchema).optional(),
    permittedDataType: z
      .enum([
        "boolean",
        "CodeableConcept",
        "dateTime",
        "integer",
        "Period",
        "Quantity",
        "Range",
        "Ratio",
        "SampledData",
        "string",
        "time",
      ])
      .nullable()
      .array()
      .optional(),
    _permittedDataType: z.lazy(getElementSchema).nullable().array().optional(),
    preferredReportName: fhirString().optional(),
    _preferredReportName: z.lazy(getElementSchema).optional(),
    qualifiedInterval: z
      .lazy(getObservationDefinition_QualifiedIntervalSchema)
      .array()
      .optional(),
    quantitativeDetails: z
      .lazy(getObservationDefinition_QuantitativeDetailsSchema)
      .optional(),
    resourceType: z.literal("ObservationDefinition"),
    text: z.lazy(getNarrativeSchema).optional(),
    validCodedValueSet: z.lazy(getReferenceSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validatePrimitiveArrayPair(
      record.permittedDataType,
      record._permittedDataType,
      "permittedDataType",
      "_permittedDataType",
      ctx,
    );
    validateReferenceTarget(
      record.abnormalCodedValueSet,
      "abnormalCodedValueSet",
      ["http://hl7.org/fhir/StructureDefinition/ValueSet"],
      ["ValueSet"],
      ctx,
    );
    validateReferenceTarget(
      record.criticalCodedValueSet,
      "criticalCodedValueSet",
      ["http://hl7.org/fhir/StructureDefinition/ValueSet"],
      ["ValueSet"],
      ctx,
    );
    validateReferenceTarget(
      record.normalCodedValueSet,
      "normalCodedValueSet",
      ["http://hl7.org/fhir/StructureDefinition/ValueSet"],
      ["ValueSet"],
      ctx,
    );
    validateReferenceTarget(
      record.validCodedValueSet,
      "validCodedValueSet",
      ["http://hl7.org/fhir/StructureDefinition/ValueSet"],
      ["ValueSet"],
      ctx,
    );
  });

export const ObservationDefinitionSchema =
  ObservationDefinitionSchemaInternal as z.ZodType<ObservationDefinition>;
