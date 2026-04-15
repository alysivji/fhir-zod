// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** An abstract server used in operations within this test script in the origin element. */
export interface TestScript_Origin extends BackboneElement {
	/** Abstract name given to an origin server in this test script.  The name is provided as a number starting at 1. */
	index: number;
	/** Extensions for index */
	_index?: Element;
	/** The type of origin profile the test system supports. */
	profile: Coding;
}

const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const TestScript_OriginSchemaInternal =
	BackboneElementSchemaInternal.extend({
		index: z.number().int(),
		_index: z.lazy(getElementSchema).optional(),
		profile: z.lazy(getCodingSchema),
	}).strict();

export const TestScript_OriginSchema =
	TestScript_OriginSchemaInternal as z.ZodType<TestScript_Origin>;
