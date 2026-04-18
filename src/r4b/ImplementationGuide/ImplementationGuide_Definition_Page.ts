// Profile: http://hl7.org/fhir/StructureDefinition/ImplementationGuide
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

import * as z from "zod";
import { fhirString, fhirUrl } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** A page / section in the implementation guide. The root page is the implementation guide home page. */
export interface ImplementationGuide_Definition_Page extends BackboneElement {
	/** A code that indicates how the page is generated. */
	generation: "generated" | "html" | "markdown" | "xml";
	/** Extensions for generation */
	_generation?: Element;
	/** The source address for the page. */
	nameReference?: Reference;
	/** The source address for the page. */
	nameUrl?: string;
	/** Extensions for nameUrl */
	_nameUrl?: Element;
	/** Nested Pages/Sections under this page. */
	page?: Array<unknown>;
	/** A short title used to represent this page in navigational structures such as table of contents, bread crumbs, etc. */
	title: string;
	/** Extensions for title */
	_title?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ImplementationGuide_Definition_PageSchemaInternal =
	BackboneElementSchemaInternal.extend({
		generation: z.enum(["generated", "html", "markdown", "xml"]),
		_generation: z.lazy(getElementSchema).optional(),
		nameReference: z.lazy(getReferenceSchema).optional(),
		nameUrl: fhirUrl().optional(),
		_nameUrl: z.lazy(getElementSchema).optional(),
		page: z.unknown().array().optional(),
		title: fhirString(),
		_title: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const name_x_Present = ["nameReference", "nameUrl"].filter(
				(field) => record[field] !== undefined,
			);
			if (name_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: "One of nameReference, nameUrl must be present for name[x]",
					path: ["nameReference"],
				});
			}
			if (name_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of nameReference, nameUrl may be present for name[x]",
					path: [name_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.nameReference,
				"nameReference",
				["http://hl7.org/fhir/StructureDefinition/Binary"],
				["Binary"],
				ctx,
			);
		});

export const ImplementationGuide_Definition_PageSchema =
	ImplementationGuide_Definition_PageSchemaInternal as z.ZodType<ImplementationGuide_Definition_Page>;
