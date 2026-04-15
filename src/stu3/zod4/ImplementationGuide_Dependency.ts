// Profile: http://hl7.org/fhir/StructureDefinition/ImplementationGuide
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { fhirUri } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides. */
export interface ImplementationGuide_Dependency extends BackboneElement {
	/** How the dependency is represented when the guide is published. */
	type: "inclusion" | "reference";
	/** Extensions for type */
	_type?: Element;
	/** Where the dependency is located. */
	uri: string;
	/** Extensions for uri */
	_uri?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ImplementationGuide_DependencySchemaInternal =
	BackboneElementSchemaInternal.extend({
		type: z.enum(["inclusion", "reference"]),
		_type: z.lazy(getElementSchema).optional(),
		uri: fhirUri(),
		_uri: z.lazy(getElementSchema).optional(),
	}).strict();

export const ImplementationGuide_DependencySchema =
	ImplementationGuide_DependencySchemaInternal as z.ZodType<ImplementationGuide_Dependency>;
