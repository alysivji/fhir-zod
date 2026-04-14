// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A device that is part (for example a component) of the present device. */
export interface DeviceDefinition_HasPart extends BackboneElement {
	/** Number of instances of the component device in the current device. */
	count?: number;
	/** Extensions for count */
	_count?: Element;
	/** Reference to the device that is part of the current device. */
	reference: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DeviceDefinition_HasPartSchemaInternal =
	BackboneElementSchemaInternal.extend({
		count: z.number().int().optional(),
		_count: z.lazy(getElementSchema).optional(),
		reference: z.lazy(getReferenceSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.reference,
				"reference",
				["http://hl7.org/fhir/StructureDefinition/DeviceDefinition"],
				["DeviceDefinition"],
				ctx,
			);
		});

export const DeviceDefinition_HasPartSchema =
	DeviceDefinition_HasPartSchemaInternal as z.ZodType<DeviceDefinition_HasPart>;
