// Profile: http://hl7.org/fhir/StructureDefinition/AuditEvent
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Logical network location for application activity, if the activity has a network location. */
export interface AuditEvent_Agent_Network extends BackboneElement {
	/** An identifier for the network access point of the user device for the audit event. */
	address?: string;
	/** Extensions for address */
	_address?: Element;
	/** An identifier for the type of network access point that originated the audit event. */
	type?: "1" | "2" | "3" | "4" | "5";
	/** Extensions for type */
	_type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const AuditEvent_Agent_NetworkSchemaInternal =
	BackboneElementSchemaInternal.extend({
		address: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_address: z.lazy(getElementSchema).optional(),
		type: z.enum(["1", "2", "3", "4", "5"]).optional(),
		_type: z.lazy(getElementSchema).optional(),
	}).strict();

export const AuditEvent_Agent_NetworkSchema =
	AuditEvent_Agent_NetworkSchemaInternal as z.ZodType<AuditEvent_Agent_Network>;
