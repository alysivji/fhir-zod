// Profile: http://hl7.org/fhir/StructureDefinition/ImplementationGuide
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
	fhirCanonical,
	fhirId,
	fhirString,
} from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource. */
export interface ImplementationGuide_Definition_Resource
	extends BackboneElement {
	/** A description of the reason that a resource has been included in the implementation guide. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Indicates the FHIR Version(s) this artifact is intended to apply to. If no versions are specified, the resource is assumed to apply to all the versions stated in ImplementationGuide.fhirVersion. */
	fhirVersion?: Array<
		| "0.0"
		| "0.0.80"
		| "0.0.81"
		| "0.0.82"
		| "0.01"
		| "0.05"
		| "0.06"
		| "0.11"
		| "0.4"
		| "0.4.0"
		| "0.5"
		| "0.5.0"
		| "1.0"
		| "1.0.0"
		| "1.0.1"
		| "1.0.2"
		| "1.1"
		| "1.1.0"
		| "1.4"
		| "1.4.0"
		| "1.6"
		| "1.6.0"
		| "1.8"
		| "1.8.0"
		| "3.0"
		| "3.0.0"
		| "3.0.1"
		| "3.0.2"
		| "3.3"
		| "3.3.0"
		| "3.5"
		| "3.5.0"
		| "4.0"
		| "4.0.0"
		| "4.0.1"
		| "4.1"
		| "4.1.0"
		| "4.2"
		| "4.2.0"
		| "4.3"
		| "4.3.0"
		| "4.3.0-cibuild"
		| "4.3.0-snapshot1"
		| "4.4"
		| "4.4.0"
		| "4.5"
		| "4.5.0"
		| "4.6"
		| "4.6.0"
		| "5.0"
		| "5.0.0"
		| "5.0.0-ballot"
		| "5.0.0-cibuild"
		| "5.0.0-draft-final"
		| "5.0.0-snapshot1"
		| "5.0.0-snapshot2"
		| "5.0.0-snapshot3"
		| null
	>;
	/** Extensions for fhirVersion */
	_fhirVersion?: Array<Element | null>;
	/** Reference to the id of the grouping this resource appears in. */
	groupingId?: string;
	/** Extensions for groupingId */
	_groupingId?: Element;
	/** If true, indicates the resource is an example instance. */
	isExample?: boolean;
	/** Extensions for isExample */
	_isExample?: Element;
	/** A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name). */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** If present, indicates profile(s) the instance is valid against. */
	profile?: Array<string | null>;
	/** Extensions for profile */
	_profile?: Array<Element | null>;
	/** Where this resource is found. */
	reference: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ImplementationGuide_Definition_ResourceSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		fhirVersion: z
			.enum([
				"0.0",
				"0.0.80",
				"0.0.81",
				"0.0.82",
				"0.01",
				"0.05",
				"0.06",
				"0.11",
				"0.4",
				"0.4.0",
				"0.5",
				"0.5.0",
				"1.0",
				"1.0.0",
				"1.0.1",
				"1.0.2",
				"1.1",
				"1.1.0",
				"1.4",
				"1.4.0",
				"1.6",
				"1.6.0",
				"1.8",
				"1.8.0",
				"3.0",
				"3.0.0",
				"3.0.1",
				"3.0.2",
				"3.3",
				"3.3.0",
				"3.5",
				"3.5.0",
				"4.0",
				"4.0.0",
				"4.0.1",
				"4.1",
				"4.1.0",
				"4.2",
				"4.2.0",
				"4.3",
				"4.3.0",
				"4.3.0-cibuild",
				"4.3.0-snapshot1",
				"4.4",
				"4.4.0",
				"4.5",
				"4.5.0",
				"4.6",
				"4.6.0",
				"5.0",
				"5.0.0",
				"5.0.0-ballot",
				"5.0.0-cibuild",
				"5.0.0-draft-final",
				"5.0.0-snapshot1",
				"5.0.0-snapshot2",
				"5.0.0-snapshot3",
			])
			.nullable()
			.array()
			.optional(),
		_fhirVersion: z.lazy(getElementSchema).nullable().array().optional(),
		groupingId: fhirId().optional(),
		_groupingId: z.lazy(getElementSchema).optional(),
		isExample: z.boolean().optional(),
		_isExample: z.lazy(getElementSchema).optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		profile: fhirCanonical().nullable().array().optional(),
		_profile: z.lazy(getElementSchema).nullable().array().optional(),
		reference: z.lazy(getReferenceSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.fhirVersion,
				record._fhirVersion,
				"fhirVersion",
				"_fhirVersion",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.profile,
				record._profile,
				"profile",
				"_profile",
				ctx,
			);
			validateReferenceTarget(
				record.reference,
				"reference",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
		});

export const ImplementationGuide_Definition_ResourceSchema =
	ImplementationGuide_Definition_ResourceSchemaInternal as z.ZodType<ImplementationGuide_Definition_Resource>;
