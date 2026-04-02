// Profile: http://hl7.org/fhir/StructureDefinition/Device
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";

/** The actual design of the device or software version running on the device. */
export interface Device_Version extends BackboneElement {
	/** A single component of the device version. */
	component?: Identifier;
	/** The type of the device version. */
	type?: CodeableConcept;
	/** The version text. */
	value: string;
	/** Extensions for value */
	_value?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;

/** @internal */
export const Device_VersionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		component: z.lazy(getIdentifierSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
		value: z.string().regex(/[ \r\n\t\S]+/),
		_value: z.lazy(getElementSchema).optional(),
	}).strict();

export const Device_VersionSchema =
	Device_VersionSchemaInternal as z.ZodType<Device_Version>;
