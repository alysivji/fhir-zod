// Profile: http://hl7.org/fhir/StructureDefinition/Contributor
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { ContactDetail } from "./ContactDetail";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import { fhirId } from "../shared/fhir-primitives";
import { ContactDetailSchemaInternal } from "./ContactDetail";
import { ElementSchemaInternal } from "./Element";
import { ExtensionSchemaInternal } from "./Extension";

export interface Contributor extends Element {
	contact?: Array<ContactDetail>;
	name: string;
	_name?: Element;
	type: "author" | "editor" | "endorser" | "reviewer";
	_type?: Element;
}

const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
	ContactDetailSchemaInternal;
const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;

/** @internal */
export const ContributorSchemaInternal = z
	.object({
		contact: z
			.lazy(getContactDetailSchema)
			.array()
			.optional()
			.describe(
				"Contact details to assist a user in finding and communicating with the contributor.",
			),
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
			.describe(
				"The name of the individual or organization responsible for the contribution.",
			),
		_name: z.lazy(getElementSchema).optional().describe("Extensions for name"),
		type: z
			.enum(["author", "editor", "endorser", "reviewer"])
			.describe("The type of contributor."),
		_type: z.lazy(getElementSchema).optional().describe("Extensions for type"),
	})
	.strict();

export const ContributorSchema: z.ZodType<Contributor> =
	ContributorSchemaInternal;
