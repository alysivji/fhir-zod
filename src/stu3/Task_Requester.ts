// Profile: http://hl7.org/fhir/StructureDefinition/Task
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T01:26:20.392Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The creator of the task. */
export interface Task_Requester extends BackboneElement {
	/** The device, practitioner, etc. who initiated the task. */
	agent: Reference;
	/** The organization the device or practitioner was acting on behalf of when they initiated the task. */
	onBehalfOf?: Reference;
}

const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Task_RequesterSchemaInternal =
	BackboneElementSchemaInternal.extend({
		agent: z.lazy(getReferenceSchema),
		onBehalfOf: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.agent,
				"agent",
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				["Device", "Organization", "Patient", "Practitioner", "RelatedPerson"],
				ctx,
			);
			validateReferenceTarget(
				record.onBehalfOf,
				"onBehalfOf",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
		});

export const Task_RequesterSchema =
	Task_RequesterSchemaInternal as z.ZodType<Task_Requester>;
