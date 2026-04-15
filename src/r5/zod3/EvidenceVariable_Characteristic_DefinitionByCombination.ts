// Profile: http://hl7.org/fhir/StructureDefinition/EvidenceVariable
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Defines the characteristic as a combination of two or more characteristics. */
export interface EvidenceVariable_Characteristic_DefinitionByCombination
	extends BackboneElement {
	/** A defining factor of the characteristic. */
	characteristic: Array<unknown>;
	/** Used to specify if two or more characteristics are combined with OR or AND. */
	code:
		| "all-of"
		| "any-of"
		| "at-least"
		| "at-most"
		| "dataset"
		| "net-effect"
		| "statistical";
	/** Extensions for code */
	_code?: Element;
	/** Provides the value of "n" when "at-least" or "at-most" codes are used. */
	threshold?: number;
	/** Extensions for threshold */
	_threshold?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const EvidenceVariable_Characteristic_DefinitionByCombinationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		characteristic: z.custom<unknown>((value) => value !== undefined).array(),
		code: z.enum([
			"all-of",
			"any-of",
			"at-least",
			"at-most",
			"dataset",
			"net-effect",
			"statistical",
		]),
		_code: z.lazy(getElementSchema).optional(),
		threshold: z.number().int().positive().optional(),
		_threshold: z.lazy(getElementSchema).optional(),
	}).strict();

export const EvidenceVariable_Characteristic_DefinitionByCombinationSchema =
	EvidenceVariable_Characteristic_DefinitionByCombinationSchemaInternal as z.ZodType<EvidenceVariable_Characteristic_DefinitionByCombination>;
