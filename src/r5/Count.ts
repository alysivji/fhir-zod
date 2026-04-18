// Profile: http://hl7.org/fhir/StructureDefinition/Count
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import {
	fhirCode,
	fhirId,
	fhirString,
	fhirUri,
} from "../shared/fhir-primitives";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Quantity } from "./Quantity";

/** Count Type: A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
export interface Count extends Quantity {}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;

/** @internal */
export const CountSchemaInternal = z
	.object({
		code: fhirCode().optional(),
		_code: z.lazy(getElementSchema).optional(),
		comparator: z.enum(["<", "<=", ">", ">=", "ad"]).optional(),
		_comparator: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		system: fhirUri().optional(),
		_system: z.lazy(getElementSchema).optional(),
		unit: fhirString().optional(),
		_unit: z.lazy(getElementSchema).optional(),
		value: z.number().optional(),
		_value: z.lazy(getElementSchema).optional(),
	})
	.strict();

export const CountSchema = CountSchemaInternal as z.ZodType<Count>;
