// Profile: http://hl7.org/fhir/StructureDefinition/ImplementationGuide
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { fhirCanonical, fhirUrl } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource. */
export interface ImplementationGuide_Manifest_Resource extends BackboneElement {
	/** If true or a reference, indicates the resource is an example instance.  If a reference is present, indicates that the example is an example of the specified profile. */
	exampleBoolean?: boolean;
	/** Extensions for exampleBoolean */
	_exampleBoolean?: Element;
	/** If true or a reference, indicates the resource is an example instance.  If a reference is present, indicates that the example is an example of the specified profile. */
	exampleCanonical?: string;
	/** Extensions for exampleCanonical */
	_exampleCanonical?: Element;
	/** Where this resource is found. */
	reference: Reference;
	/** The relative path for primary page for this resource within the IG. */
	relativePath?: string;
	/** Extensions for relativePath */
	_relativePath?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ImplementationGuide_Manifest_ResourceSchemaInternal =
	BackboneElementSchemaInternal.extend({
		exampleBoolean: z.boolean().optional(),
		_exampleBoolean: z.lazy(getElementSchema).optional(),
		exampleCanonical: fhirCanonical().optional(),
		_exampleCanonical: z.lazy(getElementSchema).optional(),
		reference: z.lazy(getReferenceSchema),
		relativePath: fhirUrl().optional(),
		_relativePath: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const example_x_Present = ["exampleBoolean", "exampleCanonical"].filter(
				(field) => record[field] !== undefined,
			);
			if (example_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of exampleBoolean, exampleCanonical may be present for example[x]",
					path: [example_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.reference,
				"reference",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
		});

export const ImplementationGuide_Manifest_ResourceSchema =
	ImplementationGuide_Manifest_ResourceSchemaInternal as z.ZodType<ImplementationGuide_Manifest_Resource>;
