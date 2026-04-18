// Profile: http://hl7.org/fhir/StructureDefinition/ImplementationGuide
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirString, fhirUrl } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** A page / section in the implementation guide. The root page is the implementation guide home page. */
export interface ImplementationGuide_Definition_Page extends BackboneElement {
	/** A code that indicates how the page is generated. */
	generation: "generated" | "html" | "markdown" | "xml";
	/** Extensions for generation */
	_generation?: Element;
	/** The url by which the page should be known when published. */
	name: string;
	/** Extensions for name */
	_name?: Element;
	/** Nested Pages/Sections under this page. */
	page?: Array<unknown>;
	/** Indicates the URL or the actual content to provide for the page. */
	sourceMarkdown?: string;
	/** Extensions for sourceMarkdown */
	_sourceMarkdown?: Element;
	/** Indicates the URL or the actual content to provide for the page. */
	sourceString?: string;
	/** Extensions for sourceString */
	_sourceString?: Element;
	/** Indicates the URL or the actual content to provide for the page. */
	sourceUrl?: string;
	/** Extensions for sourceUrl */
	_sourceUrl?: Element;
	/** A short title used to represent this page in navigational structures such as table of contents, bread crumbs, etc. */
	title: string;
	/** Extensions for title */
	_title?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ImplementationGuide_Definition_PageSchemaInternal =
	BackboneElementSchemaInternal.extend({
		generation: z.enum(["generated", "html", "markdown", "xml"]),
		_generation: z.lazy(getElementSchema).optional(),
		name: fhirUrl(),
		_name: z.lazy(getElementSchema).optional(),
		page: z.unknown().array().optional(),
		sourceMarkdown: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_sourceMarkdown: z.lazy(getElementSchema).optional(),
		sourceString: fhirString().optional(),
		_sourceString: z.lazy(getElementSchema).optional(),
		sourceUrl: fhirUrl().optional(),
		_sourceUrl: z.lazy(getElementSchema).optional(),
		title: fhirString(),
		_title: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const source_x_Present = [
				"sourceMarkdown",
				"sourceString",
				"sourceUrl",
			].filter((field) => record[field] !== undefined);
			if (source_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of sourceMarkdown, sourceString, sourceUrl may be present for source[x]",
					path: [source_x_Present[0]],
				});
			}
		});

export const ImplementationGuide_Definition_PageSchema =
	ImplementationGuide_Definition_PageSchemaInternal as z.ZodType<ImplementationGuide_Definition_Page>;
