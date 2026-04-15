// Profile: http://hl7.org/fhir/StructureDefinition/ExpansionProfile
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { fhirString, fhirUri } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Fix use of a particular code system to a particular version. */
export interface ExpansionProfile_FixedVersion extends BackboneElement {
	/** How to manage the intersection between a fixed version in a value set, and this fixed version of the system in the expansion profile. */
	mode: "check" | "default" | "override";
	/** Extensions for mode */
	_mode?: Element;
	/** The specific system for which to fix the version. */
	system: string;
	/** Extensions for system */
	_system?: Element;
	/** The version of the code system from which codes in the expansion should be included. */
	version: string;
	/** Extensions for version */
	_version?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ExpansionProfile_FixedVersionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		mode: z.enum(["check", "default", "override"]),
		_mode: z.lazy(getElementSchema).optional(),
		system: fhirUri(),
		_system: z.lazy(getElementSchema).optional(),
		version: fhirString(),
		_version: z.lazy(getElementSchema).optional(),
	}).strict();

export const ExpansionProfile_FixedVersionSchema =
	ExpansionProfile_FixedVersionSchemaInternal as z.ZodType<ExpansionProfile_FixedVersion>;
