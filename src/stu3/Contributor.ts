// Profile: http://hl7.org/fhir/StructureDefinition/Contributor
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { ContactDetail } from "./ContactDetail";
import { ContactDetailSchemaInternal } from "./ContactDetail";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Base StructureDefinition for Contributor Type */
export interface Contributor extends Element {
	/** Contact details to assist a user in finding and communicating with the contributor. */
	contact?: Array<ContactDetail>;
	/** The name of the individual or organization responsible for the contribution. */
	name: string;
	/** Extensions for name */
	_name?: Element;
	/** The type of contributor. */
	type: "author" | "editor" | "endorser" | "reviewer";
	/** Extensions for type */
	_type?: Element;
}

const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
	ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ContributorSchemaInternal = ElementSchemaInternal.extend({
	contact: z.lazy(getContactDetailSchema).array().optional(),
	name: fhirString(),
	_name: z.lazy(getElementSchema).optional(),
	type: z.enum(["author", "editor", "endorser", "reviewer"]),
	_type: z.lazy(getElementSchema).optional(),
}).strict();

export const ContributorSchema =
	ContributorSchemaInternal as z.ZodType<Contributor>;
