// Profile: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Identifies a restful operation supported by the solution. */
export interface CapabilityStatement_Rest_Resource_Interaction
	extends BackboneElement {
	/** Coded identifier of the operation, supported by the system resource. */
	code:
		| "batch"
		| "capabilities"
		| "create"
		| "delete"
		| "history"
		| "history-instance"
		| "history-system"
		| "history-type"
		| "operation"
		| "patch"
		| "read"
		| "search"
		| "search-system"
		| "search-type"
		| "transaction"
		| "update"
		| "vread";
	/** Extensions for code */
	_code?: Element;
	/** Guidance specific to the implementation of this operation, such as 'delete is a logical delete' or 'updates are only allowed with version id' or 'creates permitted from pre-authorized certificates only'. */
	documentation?: string;
	/** Extensions for documentation */
	_documentation?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const CapabilityStatement_Rest_Resource_InteractionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.enum([
			"batch",
			"capabilities",
			"create",
			"delete",
			"history",
			"history-instance",
			"history-system",
			"history-type",
			"operation",
			"patch",
			"read",
			"search",
			"search-system",
			"search-type",
			"transaction",
			"update",
			"vread",
		]),
		_code: z.lazy(getElementSchema).optional(),
		documentation: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_documentation: z.lazy(getElementSchema).optional(),
	}).strict();

export const CapabilityStatement_Rest_Resource_InteractionSchema =
	CapabilityStatement_Rest_Resource_InteractionSchemaInternal as z.ZodType<CapabilityStatement_Rest_Resource_Interaction>;
