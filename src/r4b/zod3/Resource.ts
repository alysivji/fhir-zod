// Profile: http://hl7.org/fhir/StructureDefinition/Resource
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import { fhirCode, fhirId, fhirUri } from "../../shared/fhir-primitives-zod3";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Meta } from "./Meta";
import { MetaSchemaInternal } from "./Meta";

/** This is the base resource type for everything. */
export interface Resource {
	/** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
	id?: string;
	/** Extensions for id */
	_id?: Element;
	/** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
	implicitRules?: string;
	/** Extensions for implicitRules */
	_implicitRules?: Element;
	/** The base language in which the resource is written. */
	language?: string;
	/** Extensions for language */
	_language?: Element;
	/** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
	meta?: Meta;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getMetaSchema = (): z.ZodType<Meta> =>
	MetaSchemaInternal as z.ZodType<Meta>;

/** @internal */
export const ResourceSchemaInternal = z
	.object({
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		implicitRules: fhirUri().optional(),
		_implicitRules: z.lazy(getElementSchema).optional(),
		language: fhirCode().optional(),
		_language: z.lazy(getElementSchema).optional(),
		meta: z.lazy(getMetaSchema).optional(),
	})
	.strict();

export const ResourceSchema = ResourceSchemaInternal as z.ZodType<Resource>;
