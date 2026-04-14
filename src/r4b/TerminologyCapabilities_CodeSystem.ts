// Profile: http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { fhirCanonical } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { TerminologyCapabilities_CodeSystem_Version } from "./TerminologyCapabilities_CodeSystem_Version";
import { TerminologyCapabilities_CodeSystem_VersionSchemaInternal } from "./TerminologyCapabilities_CodeSystem_Version";

/** Identifies a code system that is supported by the server. If there is a no code system URL, then this declares the general assumptions a client can make about support for any CodeSystem resource. */
export interface TerminologyCapabilities_CodeSystem extends BackboneElement {
	/** True if subsumption is supported for this version of the code system. */
	subsumption?: boolean;
	/** Extensions for subsumption */
	_subsumption?: Element;
	/** URI for the Code System. */
	uri?: string;
	/** Extensions for uri */
	_uri?: Element;
	/** For the code system, a list of versions that are supported by the server. */
	version?: Array<TerminologyCapabilities_CodeSystem_Version>;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getTerminologyCapabilities_CodeSystem_VersionSchema =
	(): z.ZodType<TerminologyCapabilities_CodeSystem_Version> =>
		TerminologyCapabilities_CodeSystem_VersionSchemaInternal as z.ZodType<TerminologyCapabilities_CodeSystem_Version>;

/** @internal */
export const TerminologyCapabilities_CodeSystemSchemaInternal =
	BackboneElementSchemaInternal.extend({
		subsumption: z.boolean().optional(),
		_subsumption: z.lazy(getElementSchema).optional(),
		uri: fhirCanonical().optional(),
		_uri: z.lazy(getElementSchema).optional(),
		version: z
			.lazy(getTerminologyCapabilities_CodeSystem_VersionSchema)
			.array()
			.optional(),
	}).strict();

export const TerminologyCapabilities_CodeSystemSchema =
	TerminologyCapabilities_CodeSystemSchemaInternal as z.ZodType<TerminologyCapabilities_CodeSystem>;
