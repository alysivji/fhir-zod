// Profile: http://hl7.org/fhir/StructureDefinition/AuditEvent
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import {
	fhirBase64Binary,
	fhirString,
} from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Tagged value pairs for conveying additional information about the entity. */
export interface AuditEvent_Entity_Detail extends BackboneElement {
	/** The type of extra detail provided in the value. */
	type: string;
	/** Extensions for type */
	_type?: Element;
	/** The details, base64 encoded. Used to carry bulk information. */
	value: string;
	/** Extensions for value */
	_value?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const AuditEvent_Entity_DetailSchemaInternal =
	BackboneElementSchemaInternal.extend({
		type: fhirString(),
		_type: z.lazy(getElementSchema).optional(),
		value: fhirBase64Binary(),
		_value: z.lazy(getElementSchema).optional(),
	}).strict();

export const AuditEvent_Entity_DetailSchema =
	AuditEvent_Entity_DetailSchemaInternal as z.ZodType<AuditEvent_Entity_Detail>;
