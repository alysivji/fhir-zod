// Profile: http://hl7.org/fhir/StructureDefinition/ContactDetail
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { ContactPoint } from "./ContactPoint";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import { fhirId } from "../shared/fhir-primitives";
import { ContactPointSchemaInternal } from "./ContactPoint";
import { ElementSchemaInternal } from "./Element";
import { ExtensionSchemaInternal } from "./Extension";

export interface ContactDetail extends Element {
	name?: string;
	_name?: Element;
	telecom?: Array<ContactPoint>;
}

const getContactPointSchema = (): z.ZodType<ContactPoint> =>
	ContactPointSchemaInternal;
const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;

/** @internal */
export const ContactDetailSchemaInternal = z
	.object({
		extension: z
			.lazy(getExtensionSchema)
			.array()
			.optional()
			.describe(
				"May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
			),
		id: fhirId()
			.optional()
			.describe(
				"Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
			),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		name: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe("The name of an individual to contact."),
		_name: z.lazy(getElementSchema).optional().describe("Extensions for name"),
		telecom: z
			.lazy(getContactPointSchema)
			.array()
			.optional()
			.describe(
				"The contact details for the individual (if a name was provided) or the organization.",
			),
	})
	.strict();

export const ContactDetailSchema: z.ZodType<ContactDetail> =
	ContactDetailSchemaInternal;
