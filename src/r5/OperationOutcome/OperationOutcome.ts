// Source: https://hl7.org/fhir/R5/operationoutcome.html
// Profile: http://hl7.org/fhir/StructureDefinition/OperationOutcome
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { fhirCode, fhirId, fhirUri } from "../../shared/fhir-primitives";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { DomainResource } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Extension } from "../Extension";
import { ExtensionSchemaInternal } from "../Extension";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { OperationOutcome_Issue } from "./OperationOutcome_Issue";
import { OperationOutcome_IssueSchemaInternal } from "./OperationOutcome_Issue";

/** A collection of error, warning, or information messages that result from a system action. */
export interface OperationOutcome extends DomainResource {
  /** An error, warning, or information message that results from a system action. */
  issue: Array<OperationOutcome_Issue>;
  /** This is a OperationOutcome resource. */
  resourceType: "OperationOutcome";
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getOperationOutcome_IssueSchema = (): z.ZodType<OperationOutcome_Issue> =>
  OperationOutcome_IssueSchemaInternal as z.ZodType<OperationOutcome_Issue>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const OperationOutcomeSchemaInternal = z
  .object({
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    issue: z.lazy(getOperationOutcome_IssueSchema).array(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    resourceType: z.literal("OperationOutcome"),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict();

export const OperationOutcomeSchema =
  OperationOutcomeSchemaInternal as z.ZodType<OperationOutcome>;
