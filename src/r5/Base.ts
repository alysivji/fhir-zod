// Profile: http://hl7.org/fhir/StructureDefinition/Base
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-05T15:32:44.350Z

import * as z from "zod";

/** Base Type: Base definition for all types defined in FHIR type system. */
export type Base = {};

/** @internal */
export const BaseSchemaInternal = z.object({}).strict();

export const BaseSchema = BaseSchemaInternal as z.ZodType<Base>;
