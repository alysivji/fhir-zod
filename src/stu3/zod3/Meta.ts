// Profile: http://hl7.org/fhir/StructureDefinition/Meta
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
	fhirId,
	fhirInstant,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives-zod3";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** Base StructureDefinition for Meta Type */
export interface Meta extends Element {
	/** When the resource last changed - e.g. when the version changed. */
	lastUpdated?: string;
	/** Extensions for lastUpdated */
	_lastUpdated?: Element;
	/** A list of profiles (references to [StructureDefinition](structuredefinition.html#) resources) that this resource claims to conform to. The URL is a reference to [StructureDefinition.url](). */
	profile?: Array<string | null>;
	/** Extensions for profile */
	_profile?: Array<Element | null>;
	/** Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure. */
	security?: Array<Coding>;
	/** Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource. */
	tag?: Array<Coding>;
	/** The version specific identifier, as it appears in the version portion of the URL. This values changes when the resource is created, updated, or deleted. */
	versionId?: string;
	/** Extensions for versionId */
	_versionId?: Element;
}

const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;

/** @internal */
export const MetaSchemaInternal = z
	.object({
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirString().optional(),
		_id: z.lazy(getElementSchema).optional(),
		lastUpdated: fhirInstant().optional(),
		_lastUpdated: z.lazy(getElementSchema).optional(),
		profile: fhirUri().nullable().array().optional(),
		_profile: z.lazy(getElementSchema).nullable().array().optional(),
		security: z.lazy(getCodingSchema).array().optional(),
		tag: z.lazy(getCodingSchema).array().optional(),
		versionId: fhirId().optional(),
		_versionId: z.lazy(getElementSchema).optional(),
	})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validatePrimitiveArrayPair(
			record.profile,
			record._profile,
			"profile",
			"_profile",
			ctx,
		);
	});

export const MetaSchema = MetaSchemaInternal as z.ZodType<Meta>;
