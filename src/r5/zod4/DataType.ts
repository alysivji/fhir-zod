// Profile: http://hl7.org/fhir/StructureDefinition/DataType
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import type * as z from "zod/v4";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** DataType Type: The base class for all re-useable types defined as part of the FHIR Specification. */
export interface DataType extends Element {}

/** @internal */
export const DataTypeSchemaInternal = ElementSchemaInternal.extend({}).strict();

export const DataTypeSchema = DataTypeSchemaInternal as z.ZodType<DataType>;
