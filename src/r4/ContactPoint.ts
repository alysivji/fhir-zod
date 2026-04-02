// Profile: http://hl7.org/fhir/StructureDefinition/ContactPoint
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T14:11:40.945Z

import * as z from "zod";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";

/** Base StructureDefinition for ContactPoint Type: Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
export interface ContactPoint extends Element {
	/** Time period when the contact point was/is in use. */
	period?: Period;
	/** Specifies a preferred order in which to use a set of contacts. ContactPoints with lower rank values are more preferred than those with higher rank values. */
	rank?: number;
	/** Extensions for rank */
	_rank?: Element;
	/** Telecommunications form for contact point - what communications system is required to make use of the contact. */
	system?: "email" | "fax" | "other" | "pager" | "phone" | "sms" | "url";
	/** Extensions for system */
	_system?: Element;
	/** Identifies the purpose for the contact point. */
	use?: "home" | "mobile" | "old" | "temp" | "work";
	/** Extensions for use */
	_use?: Element;
	/** The actual contact point details, in a form that is meaningful to the designated communication system (i.e. phone number or email address). */
	value?: string;
	/** Extensions for value */
	_value?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const ContactPointSchemaInternal = z
	.object({
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_id: z.lazy(getElementSchema).optional(),
		period: z.lazy(getPeriodSchema).optional(),
		rank: z.number().int().positive().optional(),
		_rank: z.lazy(getElementSchema).optional(),
		system: z
			.enum(["email", "fax", "other", "pager", "phone", "sms", "url"])
			.optional(),
		_system: z.lazy(getElementSchema).optional(),
		use: z.enum(["home", "mobile", "old", "temp", "work"]).optional(),
		_use: z.lazy(getElementSchema).optional(),
		value: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_value: z.lazy(getElementSchema).optional(),
	})
	.strict();

export const ContactPointSchema =
	ContactPointSchemaInternal as z.ZodType<ContactPoint>;
