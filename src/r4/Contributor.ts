// Profile: http://hl7.org/fhir/StructureDefinition/Contributor
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

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
		_id: z.lazy(getElementSchema).optional(),
		_name: z.lazy(getElementSchema).optional(),
		_type: z.lazy(getElementSchema).optional(),
		contact: z.lazy(getContactDetailSchema).array().optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		name: z.string().regex(/[ \r\n\t\S]+/),
		type: z.enum(["author", "editor", "endorser", "reviewer"]),
	})
	.strict();

export type Contributor = z.output<typeof Contributor>;
