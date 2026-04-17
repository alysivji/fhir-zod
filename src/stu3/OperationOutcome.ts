// Profile: http://hl7.org/fhir/StructureDefinition/OperationOutcome
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { OperationOutcome_Issue } from "./OperationOutcome_Issue";
import { OperationOutcome_IssueSchemaInternal } from "./OperationOutcome_Issue";

/** Base StructureDefinition for OperationOutcome Resource */
export interface OperationOutcome extends DomainResource {
  /** An error, warning or information message that results from a system action. */
  issue: Array<OperationOutcome_Issue>;
  /** This is a OperationOutcome resource. */
  resourceType: "OperationOutcome";
}

const getOperationOutcome_IssueSchema = (): z.ZodType<OperationOutcome_Issue> =>
  OperationOutcome_IssueSchemaInternal as z.ZodType<OperationOutcome_Issue>;

/** @internal */
export const OperationOutcomeSchemaInternal =
  DomainResourceSchemaInternal.extend({
    issue: z.lazy(getOperationOutcome_IssueSchema).array(),
    resourceType: z.literal("OperationOutcome"),
  }).strict();

export const OperationOutcomeSchema =
  OperationOutcomeSchemaInternal as z.ZodType<OperationOutcome>;
