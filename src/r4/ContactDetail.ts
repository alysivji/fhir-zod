// Profile: http://hl7.org/fhir/StructureDefinition/ContactDetail
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T04:00:24.609Z

import * as z from "zod";
import type { ContactPoint } from "./ContactPoint";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import { fhirId } from "../shared/fhir-primitives";
import { ContactPointSchemaInternal } from "./ContactPoint";
import { ElementSchemaInternal } from "./Element";
import { ExtensionSchemaInternal } from "./Extension";

/** Base StructureDefinition for ContactDetail Type: Specifies contact information for a person or organization. */
export interface ContactDetail extends Element {
	/** The name of an individual to contact. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** The contact details for the individual (if a name was provided) or the organization. */
	telecom?: Array<ContactPoint>;
}

const getContactPointSchema = (): z.ZodType<ContactPoint> =>
	ContactPointSchemaInternal;
const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;

/** @internal */
export const ContactDetailSchemaInternal = z
	.object({
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		name: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_name: z.lazy(getElementSchema).optional(),
		telecom: z.lazy(getContactPointSchema).array().optional(),
	})
	.strict();

export const ContactDetailSchema: z.ZodType<ContactDetail> =
	ContactDetailSchemaInternal;
