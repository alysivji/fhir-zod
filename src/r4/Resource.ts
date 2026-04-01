// Profile: http://hl7.org/fhir/StructureDefinition/Resource
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { Element } from "./Element";
import { Meta } from "./Meta";

const getElementSchema = (): z.ZodType<unknown> => Element;
const getMetaSchema = (): z.ZodType<unknown> => Meta;

export const Resource = z
	.object({
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_implicitRules: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for implicitRules"),
		_language: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for language"),
		id: fhirId()
			.optional()
			.describe(
				"The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.",
			),
		implicitRules: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.",
			),
		language: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional()
			.describe("The base language in which the resource is written."),
		meta: z
			.lazy(getMetaSchema)
			.optional()
			.describe(
				"The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.",
			),
	})
	.strict();

export type Resource = z.output<typeof Resource>;
