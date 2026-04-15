// Profile: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import { fhirCanonical, fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Definition of an operation or a named query together with its parameters and their meaning and type. Consult the definition of the operation for details about how to invoke the operation, and the parameters. */
export interface CapabilityStatement_Rest_Resource_Operation
	extends BackboneElement {
	/** Where the formal definition can be found. If a server references the base definition of an Operation (i.e. from the specification itself such as ```http://hl7.org/fhir/OperationDefinition/ValueSet-expand```), that means it supports the full capabilities of the operation - e.g. both GET and POST invocation.  If it only supports a subset, it must define its own custom [OperationDefinition](operationdefinition.html#) with a 'base' of the original OperationDefinition.  The custom definition would describe the specific subset of functionality supported. */
	definition: string;
	/** Extensions for definition */
	_definition?: Element;
	/** Documentation that describes anything special about the operation behavior, possibly detailing different behavior for system, type and instance-level invocation of the operation. */
	documentation?: string;
	/** Extensions for documentation */
	_documentation?: Element;
	/** The name of the operation or query. For an operation, this is the name  prefixed with $ and used in the URL. For a query, this is the name used in the _query parameter when the query is called. */
	name: string;
	/** Extensions for name */
	_name?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const CapabilityStatement_Rest_Resource_OperationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		definition: fhirCanonical(),
		_definition: z.lazy(getElementSchema).optional(),
		documentation: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_documentation: z.lazy(getElementSchema).optional(),
		name: fhirString(),
		_name: z.lazy(getElementSchema).optional(),
	}).strict();

export const CapabilityStatement_Rest_Resource_OperationSchema =
	CapabilityStatement_Rest_Resource_OperationSchemaInternal as z.ZodType<CapabilityStatement_Rest_Resource_Operation>;
