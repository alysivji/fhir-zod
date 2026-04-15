// Profile: http://hl7.org/fhir/StructureDefinition/TestPlan
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The test data used in the test case. */
export interface TestPlan_TestCase_TestData extends BackboneElement {
	/** The actual test resources when they exist. */
	content?: Reference;
	/** Pointer to a definition of test resources - narrative or structured e.g. synthetic data generation, etc. */
	sourceReference?: Reference;
	/** Pointer to a definition of test resources - narrative or structured e.g. synthetic data generation, etc. */
	sourceString?: string;
	/** Extensions for sourceString */
	_sourceString?: Element;
	/** The type of test data description, e.g. 'synthea'. */
	type: Coding;
}

const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const TestPlan_TestCase_TestDataSchemaInternal =
	BackboneElementSchemaInternal.extend({
		content: z.lazy(getReferenceSchema).optional(),
		sourceReference: z.lazy(getReferenceSchema).optional(),
		sourceString: fhirString().optional(),
		_sourceString: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodingSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const source_x_Present = ["sourceReference", "sourceString"].filter(
				(field) => record[field] !== undefined,
			);
			if (source_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of sourceReference, sourceString may be present for source[x]",
					path: [source_x_Present[0]],
				});
			}
		});

export const TestPlan_TestCase_TestDataSchema =
	TestPlan_TestCase_TestDataSchemaInternal as z.ZodType<TestPlan_TestCase_TestData>;
