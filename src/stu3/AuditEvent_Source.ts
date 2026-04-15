// Profile: http://hl7.org/fhir/StructureDefinition/AuditEvent
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";

/** The system that is reporting the event. */
export interface AuditEvent_Source extends BackboneElement {
	/** Identifier of the source where the event was detected. */
	identifier: Identifier;
	/** Logical source location within the healthcare enterprise network.  For example, a hospital or other provider location within a multi-entity provider group. */
	site?: string;
	/** Extensions for site */
	_site?: Element;
	/** Code specifying the type of source where event originated. */
	type?: Array<Coding>;
}

const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;

/** @internal */
export const AuditEvent_SourceSchemaInternal =
	BackboneElementSchemaInternal.extend({
		identifier: z.lazy(getIdentifierSchema),
		site: fhirString().optional(),
		_site: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodingSchema).array().optional(),
	}).strict();

export const AuditEvent_SourceSchema =
	AuditEvent_SourceSchemaInternal as z.ZodType<AuditEvent_Source>;
