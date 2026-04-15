// Profile: http://hl7.org/fhir/StructureDefinition/NamingSystem
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";

/** Indicates how the system may be identified when referenced in electronic exchange. */
export interface NamingSystem_UniqueId extends BackboneElement {
	/** Notes about the past or intended usage of this identifier. */
	comment?: string;
	/** Extensions for comment */
	_comment?: Element;
	/** Identifies the period of time over which this identifier is considered appropriate to refer to the naming system.  Outside of this window, the identifier might be non-deterministic. */
	period?: Period;
	/** Indicates whether this identifier is the "preferred" identifier of this type. */
	preferred?: boolean;
	/** Extensions for preferred */
	_preferred?: Element;
	/** Identifies the unique identifier scheme used for this particular identifier. */
	type: "oid" | "other" | "uri" | "uuid";
	/** Extensions for type */
	_type?: Element;
	/** The string that should be sent over the wire to identify the code system or identifier system. */
	value: string;
	/** Extensions for value */
	_value?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const NamingSystem_UniqueIdSchemaInternal =
	BackboneElementSchemaInternal.extend({
		comment: fhirString().optional(),
		_comment: z.lazy(getElementSchema).optional(),
		period: z.lazy(getPeriodSchema).optional(),
		preferred: z.boolean().optional(),
		_preferred: z.lazy(getElementSchema).optional(),
		type: z.enum(["oid", "other", "uri", "uuid"]),
		_type: z.lazy(getElementSchema).optional(),
		value: fhirString(),
		_value: z.lazy(getElementSchema).optional(),
	}).strict();

export const NamingSystem_UniqueIdSchema =
	NamingSystem_UniqueIdSchemaInternal as z.ZodType<NamingSystem_UniqueId>;
