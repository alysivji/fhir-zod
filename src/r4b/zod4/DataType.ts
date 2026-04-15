// Profile: http://hl7.org/fhir/StructureDefinition/DataType
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import type * as z from "zod/v4";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Base StructureDefinition for DataType Type: The base class for all re-useable types defined as part of the FHIR Specification. */
export interface DataType extends Element {}

/** @internal */
export const DataTypeSchemaInternal = ElementSchemaInternal.extend({}).strict();

export const DataTypeSchema = DataTypeSchemaInternal as z.ZodType<DataType>;
