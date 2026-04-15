// Profile: http://hl7.org/fhir/StructureDefinition/DeviceRequest
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The individual who initiated the request and has responsibility for its activation. */
export interface DeviceRequest_Requester extends BackboneElement {
	/** The device, practitioner, etc. who initiated the request. */
	agent: Reference;
	/** The organization the device or practitioner was acting on behalf of. */
	onBehalfOf?: Reference;
}

const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DeviceRequest_RequesterSchemaInternal =
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
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
				],
				["Device", "Organization", "Practitioner"],
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

export const DeviceRequest_RequesterSchema =
	DeviceRequest_RequesterSchemaInternal as z.ZodType<DeviceRequest_Requester>;
