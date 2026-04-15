// Profile: http://hl7.org/fhir/StructureDefinition/TestReport
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { fhirCanonical, fhirUri } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Links or references providing traceability to the testing requirements for this assert. */
export interface TestReport_Setup_Action_Assert_Requirement
	extends BackboneElement {
	/** Link or reference providing traceability to the testing requirement for this test. */
	linkCanonical?: string;
	/** Extensions for linkCanonical */
	_linkCanonical?: Element;
	/** Link or reference providing traceability to the testing requirement for this test. */
	linkUri?: string;
	/** Extensions for linkUri */
	_linkUri?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const TestReport_Setup_Action_Assert_RequirementSchemaInternal =
	BackboneElementSchemaInternal.extend({
		linkCanonical: fhirCanonical().optional(),
		_linkCanonical: z.lazy(getElementSchema).optional(),
		linkUri: fhirUri().optional(),
		_linkUri: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const link_x_Present = ["linkCanonical", "linkUri"].filter(
				(field) => record[field] !== undefined,
			);
			if (link_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of linkCanonical, linkUri may be present for link[x]",
					path: [link_x_Present[0]],
				});
			}
		});

export const TestReport_Setup_Action_Assert_RequirementSchema =
	TestReport_Setup_Action_Assert_RequirementSchemaInternal as z.ZodType<TestReport_Setup_Action_Assert_Requirement>;
