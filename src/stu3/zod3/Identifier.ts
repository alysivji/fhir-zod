// Profile: http://hl7.org/fhir/StructureDefinition/Identifier
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { fhirString, fhirUri } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Base StructureDefinition for Identifier Type */
export interface Identifier extends Element {
	/** Organization that issued/manages the identifier. */
	assigner?: Reference;
	/** Time period during which identifier is/was valid for use. */
	period?: Period;
	/** Establishes the namespace for the value - that is, a URL that describes a set values that are unique. */
	system?: string;
	/** Extensions for system */
	_system?: Element;
	/** A coded type for the identifier that can be used to determine which identifier to use for a specific purpose. */
	type?: CodeableConcept;
	/** The purpose of this identifier. */
	use?: "official" | "secondary" | "temp" | "usual";
	/** Extensions for use */
	_use?: Element;
	/** The portion of the identifier typically relevant to the user and which is unique within the context of the system. */
	value?: string;
	/** Extensions for value */
	_value?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const IdentifierSchemaInternal = z
	.object({
		assigner: z.lazy(getReferenceSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirString().optional(),
		_id: z.lazy(getElementSchema).optional(),
		period: z.lazy(getPeriodSchema).optional(),
		system: fhirUri().optional(),
		_system: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
		use: z.enum(["official", "secondary", "temp", "usual"]).optional(),
		_use: z.lazy(getElementSchema).optional(),
		value: fhirString().optional(),
		_value: z.lazy(getElementSchema).optional(),
	})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.assigner,
			"assigner",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
	});

export const IdentifierSchema =
	IdentifierSchemaInternal as z.ZodType<Identifier>;
