// Profile: http://hl7.org/fhir/StructureDefinition/ContactDetail
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { ContactPoint } from "./ContactPoint";
import { ContactPointSchemaInternal } from "./ContactPoint";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Base StructureDefinition for ContactDetail Type */
export interface ContactDetail extends Element {
	/** The name of an individual to contact. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** The contact details for the individual (if a name was provided) or the organization. */
	telecom?: Array<ContactPoint>;
}

const getContactPointSchema = (): z.ZodType<ContactPoint> =>
	ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ContactDetailSchemaInternal = ElementSchemaInternal.extend({
	name: fhirString().optional(),
	_name: z.lazy(getElementSchema).optional(),
	telecom: z.lazy(getContactPointSchema).array().optional(),
}).strict();

export const ContactDetailSchema =
	ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
