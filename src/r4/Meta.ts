// Profile: http://hl7.org/fhir/StructureDefinition/Meta
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T04:42:40.346Z

import * as z from "zod";
import { fhirId, fhirInstant } from "../shared/fhir-primitives";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** Base StructureDefinition for Meta Type: The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
export interface Meta extends Element {
	/** When the resource last changed - e.g. when the version changed. */
	lastUpdated?: string;
	/** Extensions for lastUpdated */
	_lastUpdated?: Element;
	/** A list of profiles (references to [StructureDefinition](structuredefinition.html#) resources) that this resource claims to conform to. The URL is a reference to [StructureDefinition.url](structuredefinition-definitions.html#StructureDefinition.url). */
	profile?: Array<string>;
	/** Extensions for profile */
	_profile?: Element;
	/** Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure. */
	security?: Array<Coding>;
	/** A uri that identifies the source system of the resource. This provides a minimal amount of [Provenance](provenance.html#) information that can be used to track or differentiate the source of information in the resource. The source may identify another FHIR server, document, message, database, etc. */
	source?: string;
	/** Extensions for source */
	_source?: Element;
	/** Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource. */
	tag?: Array<Coding>;
	/** The version specific identifier, as it appears in the version portion of the URL. This value changes when the resource is created, updated, or deleted. */
	versionId?: string;
	/** Extensions for versionId */
	_versionId?: Element;
}

const getCodingSchema = (): z.ZodType<Coding> => CodingSchemaInternal;
const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;

/** @internal */
export const MetaSchemaInternal = z
	.object({
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		lastUpdated: fhirInstant().optional(),
		_lastUpdated: z.lazy(getElementSchema).optional(),
		profile: z.string().regex(/\S*/).array().optional(),
		_profile: z.lazy(getElementSchema).optional(),
		security: z.lazy(getCodingSchema).array().optional(),
		source: z.string().regex(/\S*/).optional(),
		_source: z.lazy(getElementSchema).optional(),
		tag: z.lazy(getCodingSchema).array().optional(),
		versionId: fhirId().optional(),
		_versionId: z.lazy(getElementSchema).optional(),
	})
	.strict();

export const MetaSchema: z.ZodType<Meta> = MetaSchemaInternal;
