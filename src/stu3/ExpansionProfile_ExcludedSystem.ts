// Profile: http://hl7.org/fhir/StructureDefinition/ExpansionProfile
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { fhirString, fhirUri } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Code system, or a particular version of a code system to be excluded from value set expansions. */
export interface ExpansionProfile_ExcludedSystem extends BackboneElement {
	/** An absolute URI which is the code system to be excluded. */
	system: string;
	/** Extensions for system */
	_system?: Element;
	/** The version of the code system from which codes in the expansion should be excluded. */
	version?: string;
	/** Extensions for version */
	_version?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ExpansionProfile_ExcludedSystemSchemaInternal =
	BackboneElementSchemaInternal.extend({
		system: fhirUri(),
		_system: z.lazy(getElementSchema).optional(),
		version: fhirString().optional(),
		_version: z.lazy(getElementSchema).optional(),
	}).strict();

export const ExpansionProfile_ExcludedSystemSchema =
	ExpansionProfile_ExcludedSystemSchemaInternal as z.ZodType<ExpansionProfile_ExcludedSystem>;
