// Profile: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T00:02:13.224Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirCanonical } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CapabilityStatement_Rest_Interaction } from "./CapabilityStatement_Rest_Interaction";
import { CapabilityStatement_Rest_InteractionSchemaInternal } from "./CapabilityStatement_Rest_Interaction";
import type { CapabilityStatement_Rest_Resource } from "./CapabilityStatement_Rest_Resource";
import { CapabilityStatement_Rest_ResourceSchemaInternal } from "./CapabilityStatement_Rest_Resource";
import type { CapabilityStatement_Rest_Security } from "./CapabilityStatement_Rest_Security";
import { CapabilityStatement_Rest_SecuritySchemaInternal } from "./CapabilityStatement_Rest_Security";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A definition of the restful capabilities of the solution, if any. */
export interface CapabilityStatement_Rest extends BackboneElement {
	/** An absolute URI which is a reference to the definition of a compartment that the system supports. The reference is to a CompartmentDefinition resource by its canonical URL . */
	compartment?: Array<string | null>;
	/** Extensions for compartment */
	_compartment?: Array<Element | null>;
	/** Information about the system's restful capabilities that apply across all applications, such as security. */
	documentation?: string;
	/** Extensions for documentation */
	_documentation?: Element;
	/** A specification of restful operations supported by the system. */
	interaction?: Array<CapabilityStatement_Rest_Interaction>;
	/** Identifies whether this portion of the statement is describing the ability to initiate or receive restful operations. */
	mode: "client" | "server";
	/** Extensions for mode */
	_mode?: Element;
	/** Definition of an operation or a named query together with its parameters and their meaning and type. */
	operation?: Array<unknown>;
	/** A specification of the restful capabilities of the solution for a specific resource type. */
	resource?: Array<CapabilityStatement_Rest_Resource>;
	/** Search parameters that are supported for searching all resources for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation. */
	searchParam?: Array<unknown>;
	/** Information about security implementation from an interface perspective - what a client needs to know. */
	security?: CapabilityStatement_Rest_Security;
}

const getCapabilityStatement_Rest_InteractionSchema =
	(): z.ZodType<CapabilityStatement_Rest_Interaction> =>
		CapabilityStatement_Rest_InteractionSchemaInternal as z.ZodType<CapabilityStatement_Rest_Interaction>;
const getCapabilityStatement_Rest_ResourceSchema =
	(): z.ZodType<CapabilityStatement_Rest_Resource> =>
		CapabilityStatement_Rest_ResourceSchemaInternal as z.ZodType<CapabilityStatement_Rest_Resource>;
const getCapabilityStatement_Rest_SecuritySchema =
	(): z.ZodType<CapabilityStatement_Rest_Security> =>
		CapabilityStatement_Rest_SecuritySchemaInternal as z.ZodType<CapabilityStatement_Rest_Security>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const CapabilityStatement_RestSchemaInternal =
	BackboneElementSchemaInternal.extend({
		compartment: fhirCanonical().nullable().array().optional(),
		_compartment: z.lazy(getElementSchema).nullable().array().optional(),
		documentation: z.string().optional(),
		_documentation: z.lazy(getElementSchema).optional(),
		interaction: z
			.lazy(getCapabilityStatement_Rest_InteractionSchema)
			.array()
			.optional(),
		mode: z.enum(["client", "server"]),
		_mode: z.lazy(getElementSchema).optional(),
		operation: z.unknown().array().optional(),
		resource: z
			.lazy(getCapabilityStatement_Rest_ResourceSchema)
			.array()
			.optional(),
		searchParam: z.unknown().array().optional(),
		security: z.lazy(getCapabilityStatement_Rest_SecuritySchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.compartment,
				record._compartment,
				"compartment",
				"_compartment",
				ctx,
			);
		});

export const CapabilityStatement_RestSchema =
	CapabilityStatement_RestSchemaInternal as z.ZodType<CapabilityStatement_Rest>;
