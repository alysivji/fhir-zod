// Profile: http://hl7.org/fhir/StructureDefinition/Contributor
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { ContactDetail } from "./ContactDetail";
import { Element } from "./Element";
import { Extension } from "./Extension";

const getContactDetailSchema = (): z.ZodType<unknown> => ContactDetail;
const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;

export const Contributor = z
	.object({
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_name: z.lazy(getElementSchema).optional().describe("Extensions for name"),
		_type: z.lazy(getElementSchema).optional().describe("Extensions for type"),
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
		name: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.describe(
				"The name of the individual or organization responsible for the contribution.",
			),
		type: z
			.enum(["author", "editor", "endorser", "reviewer"])
			.describe("The type of contributor."),
	})
	.strict();

export type Contributor = z.output<typeof Contributor>;
