// Profile: http://hl7.org/fhir/StructureDefinition/ImplementationGuide
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { fhirString, fhirUri } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource. */
export interface ImplementationGuide_Package_Resource extends BackboneElement {
	/** A short code that may be used to identify the resource throughout the implementation guide. */
	acronym?: string;
	/** Extensions for acronym */
	_acronym?: Element;
	/** A description of the reason that a resource has been included in the implementation guide. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Whether a resource is included in the guide as part of the rules defined by the guide, or just as an example of a resource that conforms to the rules and/or help implementers understand the intent of the guide. */
	example: boolean;
	/** Extensions for example */
	_example?: Element;
	/** Another resource that this resource is an example for. This is mostly used for resources that are included as examples of StructureDefinitions. */
	exampleFor?: Reference;
	/** A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name). */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** Where this resource is found. */
	sourceReference?: Reference;
	/** Where this resource is found. */
	sourceUri?: string;
	/** Extensions for sourceUri */
	_sourceUri?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ImplementationGuide_Package_ResourceSchemaInternal =
	BackboneElementSchemaInternal.extend({
		acronym: fhirString().optional(),
		_acronym: z.lazy(getElementSchema).optional(),
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		example: z.boolean(),
		_example: z.lazy(getElementSchema).optional(),
		exampleFor: z.lazy(getReferenceSchema).optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		sourceReference: z.lazy(getReferenceSchema).optional(),
		sourceUri: fhirUri().optional(),
		_sourceUri: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const source_x_Present = ["sourceReference", "sourceUri"].filter(
				(field) => record[field] !== undefined,
			);
			if (source_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of sourceReference, sourceUri must be present for source[x]",
					path: ["sourceReference"],
				});
			}
			if (source_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of sourceReference, sourceUri may be present for source[x]",
					path: [source_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.exampleFor,
				"exampleFor",
				["http://hl7.org/fhir/StructureDefinition/StructureDefinition"],
				["StructureDefinition"],
				ctx,
			);
			validateReferenceTarget(
				record.sourceReference,
				"sourceReference",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
		});

export const ImplementationGuide_Package_ResourceSchema =
	ImplementationGuide_Package_ResourceSchemaInternal as z.ZodType<ImplementationGuide_Package_Resource>;
