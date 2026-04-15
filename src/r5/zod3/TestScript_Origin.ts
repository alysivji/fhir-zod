// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { fhirUrl } from "../../shared/fhir-primitives-zod3";
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
	/** The explicit url path of the origin server used in this test script. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
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
		url: fhirUrl().optional(),
		_url: z.lazy(getElementSchema).optional(),
	}).strict();

export const TestScript_OriginSchema =
	TestScript_OriginSchemaInternal as z.ZodType<TestScript_Origin>;
