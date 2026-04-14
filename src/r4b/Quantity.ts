// Profile: http://hl7.org/fhir/StructureDefinition/Quantity
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

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

/** Base StructureDefinition for Quantity Type: A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
export interface Quantity extends Element {
	/** A computer processable form of the unit in some unit representation system. */
	code?: string;
	/** Extensions for code */
	_code?: Element;
	/** How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value. */
	comparator?: "<" | "<=" | ">" | ">=";
	/** Extensions for comparator */
	_comparator?: Element;
	/** The identification of the system that provides the coded form of the unit. */
	system?: string;
	/** Extensions for system */
	_system?: Element;
	/** A human-readable form of the unit. */
	unit?: string;
	/** Extensions for unit */
	_unit?: Element;
	/** The value of the measured amount. The value includes an implicit precision in the presentation of the value. */
	value?: number;
	/** Extensions for value */
	_value?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;

/** @internal */
export const QuantitySchemaInternal = z
	.object({
		code: fhirCode().optional(),
		_code: z.lazy(getElementSchema).optional(),
		comparator: z.enum(["<", "<=", ">", ">="]).optional(),
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

export const QuantitySchema = QuantitySchemaInternal as z.ZodType<Quantity>;
