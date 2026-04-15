// Profile: http://hl7.org/fhir/StructureDefinition/Specimen
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here. */
export interface Specimen_Container extends BackboneElement {
	/** The device resource for the the container holding the specimen. If the container is in a holder then the referenced device will point to a parent device. */
	device: Reference;
	/** The location of the container holding the specimen. */
	location?: Reference;
	/** The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type. */
	specimenQuantity?: Quantity;
}

const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Specimen_ContainerSchemaInternal =
	BackboneElementSchemaInternal.extend({
		device: z.lazy(getReferenceSchema),
		location: z.lazy(getReferenceSchema).optional(),
		specimenQuantity: z.lazy(getQuantitySchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.device,
				"device",
				["http://hl7.org/fhir/StructureDefinition/Device"],
				["Device"],
				ctx,
			);
			validateReferenceTarget(
				record.location,
				"location",
				["http://hl7.org/fhir/StructureDefinition/Location"],
				["Location"],
				ctx,
			);
		});

export const Specimen_ContainerSchema =
	Specimen_ContainerSchemaInternal as z.ZodType<Specimen_Container>;
