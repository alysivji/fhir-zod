// Profile: http://hl7.org/fhir/StructureDefinition/Linkage
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Linkage_Item } from "./Linkage_Item";
import { Linkage_ItemSchemaInternal } from "./Linkage_Item";

/** Base StructureDefinition for Linkage Resource */
export interface Linkage extends DomainResource {
	/** Indicates whether the asserted set of linkages are considered to be "in effect". */
	active?: boolean;
	/** Extensions for active */
	_active?: Element;
	/** Identifies the user or organization responsible for asserting the linkages and who establishes the context for evaluating the nature of each linkage. */
	author?: Reference;
	/** Identifies one of the records that is considered to refer to the same real-world occurrence as well as how the items hould be evaluated within the collection of linked items. */
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
			],
			["Organization", "Practitioner"],
			ctx,
		);
	});

export const LinkageSchema = LinkageSchemaInternal as z.ZodType<Linkage>;
