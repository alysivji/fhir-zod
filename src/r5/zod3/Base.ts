// Profile: http://hl7.org/fhir/StructureDefinition/Base
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";

/** Base Type: Base definition for all types defined in FHIR type system. */
export type Base = Record<never, never>;

/** @internal */
export const BaseSchemaInternal = z.object({}).strict();

export const BaseSchema = BaseSchemaInternal as z.ZodType<Base>;
