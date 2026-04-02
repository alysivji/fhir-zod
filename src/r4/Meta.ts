// Profile: http://hl7.org/fhir/StructureDefinition/Meta
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { Coding } from "./Coding";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import { fhirId, fhirInstant } from "../shared/fhir-primitives";
import { CodingSchemaInternal } from "./Coding";
import { ElementSchemaInternal } from "./Element";
import { ExtensionSchemaInternal } from "./Extension";

export interface Meta extends Element {
	lastUpdated?: string;
	_lastUpdated?: Element;
	profile?: Array<string>;
	_profile?: Element;
	security?: Array<Coding>;
	source?: string;
	_source?: Element;
	tag?: Array<Coding>;
	versionId?: string;
	_versionId?: Element;
}

const getCodingSchema = (): z.ZodType<Coding> => CodingSchemaInternal;
const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;

/** @internal */
export const MetaSchemaInternal = z
	.object({
		extension: z
			.lazy(getExtensionSchema)
			.array()
			.optional()
			.describe(
				"May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
			),
		id: fhirId()
			.optional()
			.describe(
				"Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
			),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		lastUpdated: fhirInstant()
			.optional()
			.describe(
				"When the resource last changed - e.g. when the version changed.",
			),
		_lastUpdated: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for lastUpdated"),
		profile: z
			.string()
			.regex(/\S*/)
			.array()
			.optional()
			.describe(
				"A list of profiles (references to [StructureDefinition](structuredefinition.html#) resources) that this resource claims to conform to. The URL is a reference to [StructureDefinition.url](structuredefinition-definitions.html#StructureDefinition.url).",
			),
		_profile: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for profile"),
		security: z
			.lazy(getCodingSchema)
			.array()
			.optional()
			.describe(
				"Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure.",
			),
		source: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"A uri that identifies the source system of the resource. This provides a minimal amount of [Provenance](provenance.html#) information that can be used to track or differentiate the source of information in the resource. The source may identify another FHIR server, document, message, database, etc.",
			),
		_source: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for source"),
		tag: z
			.lazy(getCodingSchema)
			.array()
			.optional()
			.describe(
				"Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource.",
			),
		versionId: fhirId()
			.optional()
			.describe(
				"The version specific identifier, as it appears in the version portion of the URL. This value changes when the resource is created, updated, or deleted.",
			),
		_versionId: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for versionId"),
	})
	.strict();

export const MetaSchema: z.ZodType<Meta> = MetaSchemaInternal;
