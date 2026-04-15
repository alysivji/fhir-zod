// Profile: http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirCode, fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { TerminologyCapabilities_CodeSystem_Version_Filter } from "./TerminologyCapabilities_CodeSystem_Version_Filter";
import { TerminologyCapabilities_CodeSystem_Version_FilterSchemaInternal } from "./TerminologyCapabilities_CodeSystem_Version_Filter";

/** For the code system, a list of versions that are supported by the server. */
export interface TerminologyCapabilities_CodeSystem_Version
	extends BackboneElement {
	/** For version-less code systems, there should be a single version with no identifier. */
	code?: string;
	/** Extensions for code */
	_code?: Element;
	/** If the compositional grammar defined by the code system is supported. */
	compositional?: boolean;
	/** Extensions for compositional */
	_compositional?: Element;
	/** Filter Properties supported. */
	filter?: Array<TerminologyCapabilities_CodeSystem_Version_Filter>;
	/** If this is the default version for this code system. */
	isDefault?: boolean;
	/** Extensions for isDefault */
	_isDefault?: Element;
	/** Language Displays supported. */
	language?: Array<string | null>;
	/** Extensions for language */
	_language?: Array<Element | null>;
	/** Properties supported for $lookup. */
	property?: Array<string | null>;
	/** Extensions for property */
	_property?: Array<Element | null>;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getTerminologyCapabilities_CodeSystem_Version_FilterSchema =
	(): z.ZodType<TerminologyCapabilities_CodeSystem_Version_Filter> =>
		TerminologyCapabilities_CodeSystem_Version_FilterSchemaInternal as z.ZodType<TerminologyCapabilities_CodeSystem_Version_Filter>;

/** @internal */
export const TerminologyCapabilities_CodeSystem_VersionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: fhirString().optional(),
		_code: z.lazy(getElementSchema).optional(),
		compositional: z.boolean().optional(),
		_compositional: z.lazy(getElementSchema).optional(),
		filter: z
			.lazy(getTerminologyCapabilities_CodeSystem_Version_FilterSchema)
			.array()
			.optional(),
		isDefault: z.boolean().optional(),
		_isDefault: z.lazy(getElementSchema).optional(),
		language: fhirCode().nullable().array().optional(),
		_language: z.lazy(getElementSchema).nullable().array().optional(),
		property: fhirCode().nullable().array().optional(),
		_property: z.lazy(getElementSchema).nullable().array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.language,
				record._language,
				"language",
				"_language",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.property,
				record._property,
				"property",
				"_property",
				ctx,
			);
		});

export const TerminologyCapabilities_CodeSystem_VersionSchema =
	TerminologyCapabilities_CodeSystem_VersionSchemaInternal as z.ZodType<TerminologyCapabilities_CodeSystem_Version>;
