// Profile: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation. */
export interface CapabilityStatement_Software extends BackboneElement {
	/** Name the software is known by. */
	name: string;
	/** Extensions for name */
	_name?: Element;
	/** Date this version of the software was released. */
	releaseDate?: string;
	/** Extensions for releaseDate */
	_releaseDate?: Element;
	/** The version identifier for the software covered by this statement. */
	version?: string;
	/** Extensions for version */
	_version?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const CapabilityStatement_SoftwareSchemaInternal =
	BackboneElementSchemaInternal.extend({
		name: fhirString(),
		_name: z.lazy(getElementSchema).optional(),
		releaseDate: fhirDateTime().optional(),
		_releaseDate: z.lazy(getElementSchema).optional(),
		version: fhirString().optional(),
		_version: z.lazy(getElementSchema).optional(),
	}).strict();

export const CapabilityStatement_SoftwareSchema =
	CapabilityStatement_SoftwareSchemaInternal as z.ZodType<CapabilityStatement_Software>;
