// Profile: http://hl7.org/fhir/StructureDefinition/ContactDetail
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { ContactPoint } from "./ContactPoint";
import { Element } from "./Element";
import { Extension } from "./Extension";

const getContactPointSchema = (): z.ZodType<unknown> => ContactPoint;
const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;

export const ContactDetail = z
	.object({
		_id: z.lazy(getElementSchema).optional(),
		_name: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		name: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		telecom: z.lazy(getContactPointSchema).array().optional(),
	})
	.strict();

export type ContactDetail = z.output<typeof ContactDetail>;
