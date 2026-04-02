// Profile: http://hl7.org/fhir/StructureDefinition/Range
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T04:00:24.609Z

import * as z from "zod";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import type { Quantity } from "./Quantity";
import { fhirId } from "../shared/fhir-primitives";
import { ElementSchemaInternal } from "./Element";
import { ExtensionSchemaInternal } from "./Extension";
import { QuantitySchemaInternal } from "./Quantity";

/** Base StructureDefinition for Range Type: A set of ordered Quantities defined by a low and high limit. */
export interface Range extends Element {
	/** The high limit. The boundary is inclusive. */
	high?: Quantity;
	/** The low limit. The boundary is inclusive. */
	low?: Quantity;
}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;
const getQuantitySchema = (): z.ZodType<Quantity> => QuantitySchemaInternal;

/** @internal */
export const RangeSchemaInternal = z
	.object({
		extension: z.lazy(getExtensionSchema).array().optional(),
		high: z.lazy(getQuantitySchema).optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		low: z.lazy(getQuantitySchema).optional(),
	})
	.strict();

export const RangeSchema: z.ZodType<Range> = RangeSchemaInternal;
