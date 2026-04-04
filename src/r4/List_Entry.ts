// Profile: http://hl7.org/fhir/StructureDefinition/List
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import { fhirDateTime } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Entries in this list. */
export interface List_Entry extends BackboneElement {
	/** When this item was added to the list. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** True if this item is marked as deleted in the list. */
	deleted?: boolean;
	/** Extensions for deleted */
	_deleted?: Element;
	/** The flag allows the system constructing the list to indicate the role and significance of the item in the list. */
	flag?: CodeableConcept;
	/** A reference to the actual resource from which data was derived. */
	item: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const List_EntrySchemaInternal = BackboneElementSchemaInternal.extend({
	date: fhirDateTime().optional(),
	_date: z.lazy(getElementSchema).optional(),
	deleted: z.boolean().optional(),
	_deleted: z.lazy(getElementSchema).optional(),
	flag: z.lazy(getCodeableConceptSchema).optional(),
	item: z.lazy(getReferenceSchema),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.item,
			"item",
			["http://hl7.org/fhir/StructureDefinition/Resource"],
			["Resource"],
			ctx,
		);
	});

export const List_EntrySchema =
	List_EntrySchemaInternal as z.ZodType<List_Entry>;
