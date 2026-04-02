// Profile: http://hl7.org/fhir/StructureDefinition/Identifier
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

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

export interface Identifier extends Element {
	assigner?: Reference;
	period?: Period;
	system?: string;
	_system?: Element;
	type?: CodeableConcept;
	use?: "official" | "old" | "secondary" | "temp" | "usual";
	_use?: Element;
	value?: string;
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
		assigner: z
			.lazy(getReferenceSchema)
			.optional()
			.describe("Organization that issued/manages the identifier."),
		extension: z
			.lazy(getExtensionSchema)
			.array()
			.optional()
			.describe(
				"May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
			),
		id: fhirId()
			.optional()
			.describe(
				"Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
			),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		period: z
			.lazy(getPeriodSchema)
			.optional()
			.describe("Time period during which identifier is/was valid for use."),
		system: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"Establishes the namespace for the value - that is, a URL that describes a set values that are unique.",
			),
		_system: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for system"),
		type: z
			.lazy(getCodeableConceptSchema)
			.optional()
			.describe(
				"A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.",
			),
		use: z
			.enum(["official", "old", "secondary", "temp", "usual"])
			.optional()
			.describe("The purpose of this identifier."),
		_use: z.lazy(getElementSchema).optional().describe("Extensions for use"),
		value: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"The portion of the identifier typically relevant to the user and which is unique within the context of the system.",
			),
		_value: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for value"),
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
