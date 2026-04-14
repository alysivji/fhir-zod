// Profile: http://hl7.org/fhir/StructureDefinition/Meta
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import {
	fhirCanonical,
	fhirId,
	fhirInstant,
	fhirUri,
} from "../shared/fhir-primitives";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Base StructureDefinition for Meta Type: The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
export interface Meta extends Element {
	/** When the resource last changed - e.g. when the version changed. */
	lastUpdated?: string;
	/** Extensions for lastUpdated */
	_lastUpdated?: Element;
	/** A list of profiles (references to [StructureDefinition](structuredefinition.html#) resources) that this resource claims to conform to. The URL is a reference to [StructureDefinition.url](structuredefinition-definitions.html#StructureDefinition.url). */
	profile?: Array<string>;
	/** Extensions for profile */
	_profile?: Array<Element>;
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

const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const MetaSchemaInternal = ElementSchemaInternal.extend({
	lastUpdated: fhirInstant().optional(),
	_lastUpdated: z.lazy(getElementSchema).optional(),
	profile: fhirCanonical().array().optional(),
	_profile: z.lazy(getElementSchema).array().optional(),
	security: z.lazy(getCodingSchema).array().optional(),
	source: fhirUri().optional(),
	_source: z.lazy(getElementSchema).optional(),
	tag: z.lazy(getCodingSchema).array().optional(),
	versionId: fhirId().optional(),
	_versionId: z.lazy(getElementSchema).optional(),
}).strict();

export const MetaSchema = MetaSchemaInternal as z.ZodType<Meta>;
