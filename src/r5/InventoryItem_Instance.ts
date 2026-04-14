// Profile: http://hl7.org/fhir/StructureDefinition/InventoryItem
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Instances or occurrences of the product. */
export interface InventoryItem_Instance extends BackboneElement {
	/** The expiry date or date and time for the product. */
	expiry?: string;
	/** Extensions for expiry */
	_expiry?: Element;
	/** The identifier for the physical instance, typically a serial number. */
	identifier?: Array<Identifier>;
	/** The location that the item is associated with. */
	location?: Reference;
	/** The lot or batch number of the item. */
	lotNumber?: string;
	/** Extensions for lotNumber */
	_lotNumber?: Element;
	/** The subject that the item is associated with. */
	subject?: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const InventoryItem_InstanceSchemaInternal =
	BackboneElementSchemaInternal.extend({
		expiry: fhirDateTime().optional(),
		_expiry: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		location: z.lazy(getReferenceSchema).optional(),
		lotNumber: fhirString().optional(),
		_lotNumber: z.lazy(getElementSchema).optional(),
		subject: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.location,
				"location",
				["http://hl7.org/fhir/StructureDefinition/Location"],
				["Location"],
				ctx,
			);
			validateReferenceTarget(
				record.subject,
				"subject",
				[
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
				],
				["Organization", "Patient"],
				ctx,
			);
		});

export const InventoryItem_InstanceSchema =
	InventoryItem_InstanceSchemaInternal as z.ZodType<InventoryItem_Instance>;
