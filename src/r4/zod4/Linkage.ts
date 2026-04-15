// Profile: http://hl7.org/fhir/StructureDefinition/Linkage
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Linkage_Item } from "./Linkage_Item";
import { Linkage_ItemSchemaInternal } from "./Linkage_Item";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
export interface Linkage extends DomainResource {
	/** Indicates whether the asserted set of linkages are considered to be "in effect". */
	active?: boolean;
	/** Extensions for active */
	_active?: Element;
	/** Identifies the user or organization responsible for asserting the linkages as well as the user or organization who establishes the context in which the nature of each linkage is evaluated. */
	author?: Reference;
	/** Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated within the collection of linked items. */
	item: Array<Linkage_Item>;
	/** This is a Linkage resource. */
	resourceType: "Linkage";
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getLinkage_ItemSchema = (): z.ZodType<Linkage_Item> =>
	Linkage_ItemSchemaInternal as z.ZodType<Linkage_Item>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const LinkageSchemaInternal = DomainResourceSchemaInternal.extend({
	active: z.boolean().optional(),
	_active: z.lazy(getElementSchema).optional(),
	author: z.lazy(getReferenceSchema).optional(),
	item: z.lazy(getLinkage_ItemSchema).array(),
	resourceType: z.literal("Linkage"),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.author,
			"author",
			[
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
			],
			["Organization", "Practitioner", "PractitionerRole"],
			ctx,
		);
	});

export const LinkageSchema = LinkageSchemaInternal as z.ZodType<Linkage>;
