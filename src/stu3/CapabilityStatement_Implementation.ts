// Profile: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { fhirString, fhirUri } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program. */
export interface CapabilityStatement_Implementation extends BackboneElement {
	/** Information about the specific installation that this capability statement relates to. */
	description: string;
	/** Extensions for description */
	_description?: Element;
	/** An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const CapabilityStatement_ImplementationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: fhirString(),
		_description: z.lazy(getElementSchema).optional(),
		url: fhirUri().optional(),
		_url: z.lazy(getElementSchema).optional(),
	}).strict();

export const CapabilityStatement_ImplementationSchema =
	CapabilityStatement_ImplementationSchemaInternal as z.ZodType<CapabilityStatement_Implementation>;
