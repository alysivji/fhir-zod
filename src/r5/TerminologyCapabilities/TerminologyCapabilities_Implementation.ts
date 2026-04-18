// Profile: http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirString, fhirUrl } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Identifies a specific implementation instance that is described by the terminology capability statement - i.e. a particular installation, rather than the capabilities of a software program. */
export interface TerminologyCapabilities_Implementation
	extends BackboneElement {
	/** Information about the specific installation that this terminology capability statement relates to. */
	description: string;
	/** Extensions for description */
	_description?: Element;
	/** An absolute base URL for the implementation. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const TerminologyCapabilities_ImplementationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: fhirString(),
		_description: z.lazy(getElementSchema).optional(),
		url: fhirUrl().optional(),
		_url: z.lazy(getElementSchema).optional(),
	}).strict();

export const TerminologyCapabilities_ImplementationSchema =
	TerminologyCapabilities_ImplementationSchemaInternal as z.ZodType<TerminologyCapabilities_Implementation>;
