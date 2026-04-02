// Profile: http://hl7.org/fhir/StructureDefinition/Resource
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { Element } from "./Element";
import type { Meta } from "./Meta";
import { fhirId } from "../shared/fhir-primitives";
import { ElementSchemaInternal } from "./Element";
import { MetaSchemaInternal } from "./Meta";

export interface Resource {
	id?: string;
	_id?: Element;
	implicitRules?: string;
	_implicitRules?: Element;
	language?: string;
	_language?: Element;
	meta?: Meta;
}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getMetaSchema = (): z.ZodType<Meta> => MetaSchemaInternal;

/** @internal */
export const ResourceSchemaInternal = z
	.object({
		id: fhirId()
			.optional()
			.describe(
				"The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.",
			),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		implicitRules: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.",
			),
		_implicitRules: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for implicitRules"),
		language: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional()
			.describe("The base language in which the resource is written."),
		_language: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for language"),
		meta: z
			.lazy(getMetaSchema)
			.optional()
			.describe(
				"The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.",
			),
	})
	.strict();

export const ResourceSchema: z.ZodType<Resource> = ResourceSchemaInternal;
