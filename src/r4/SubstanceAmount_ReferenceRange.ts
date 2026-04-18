// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceAmount
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

import * as z from "zod";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** Reference range of possible or expected values. */
export interface SubstanceAmount_ReferenceRange extends Element {
	/** Upper limit possible or expected. */
	highLimit?: Quantity;
	/** Lower limit possible or expected. */
	lowLimit?: Quantity;
}

const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const SubstanceAmount_ReferenceRangeSchemaInternal =
	ElementSchemaInternal.extend({
		highLimit: z.lazy(getQuantitySchema).optional(),
		lowLimit: z.lazy(getQuantitySchema).optional(),
	}).strict();

export const SubstanceAmount_ReferenceRangeSchema =
	SubstanceAmount_ReferenceRangeSchemaInternal as z.ZodType<SubstanceAmount_ReferenceRange>;
