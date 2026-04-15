// Profile: http://hl7.org/fhir/StructureDefinition/Consent
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { fhirUri } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law. */
export interface Consent_Policy extends BackboneElement {
	/** Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives. */
	authority?: string;
	/** Extensions for authority */
	_authority?: Element;
	/** The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law. */
	uri?: string;
	/** Extensions for uri */
	_uri?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Consent_PolicySchemaInternal =
	BackboneElementSchemaInternal.extend({
		authority: fhirUri().optional(),
		_authority: z.lazy(getElementSchema).optional(),
		uri: fhirUri().optional(),
		_uri: z.lazy(getElementSchema).optional(),
	}).strict();

export const Consent_PolicySchema =
	Consent_PolicySchemaInternal as z.ZodType<Consent_Policy>;
