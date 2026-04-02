// Profile: http://hl7.org/fhir/StructureDefinition/Identifier
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T04:00:24.609Z

import * as z from "zod";
import type { CodeableConcept } from "./CodeableConcept";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import type { Period } from "./Period";
import type { Reference } from "./Reference";
import { fhirId } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import { ElementSchemaInternal } from "./Element";
import { ExtensionSchemaInternal } from "./Extension";
import { PeriodSchemaInternal } from "./Period";
import { ReferenceSchemaInternal } from "./Reference";

/** Base StructureDefinition for Identifier Type: An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
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
	use?: "official" | "old" | "secondary" | "temp" | "usual";
	/** Extensions for use */
	_use?: Element;
	/** The portion of the identifier typically relevant to the user and which is unique within the context of the system. */
	value?: string;
	/** Extensions for value */
	_value?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal;
const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;
const getPeriodSchema = (): z.ZodType<Period> => PeriodSchemaInternal;
const getReferenceSchema = (): z.ZodType<Reference> => ReferenceSchemaInternal;

/** @internal */
export const IdentifierSchemaInternal = z
	.object({
		assigner: z.lazy(getReferenceSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		period: z.lazy(getPeriodSchema).optional(),
		system: z.string().regex(/\S*/).optional(),
		_system: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
		use: z.enum(["official", "old", "secondary", "temp", "usual"]).optional(),
		_use: z.lazy(getElementSchema).optional(),
		value: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
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

export const IdentifierSchema: z.ZodType<Identifier> = IdentifierSchemaInternal;
