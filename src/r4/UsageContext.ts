// Profile: http://hl7.org/fhir/StructureDefinition/UsageContext
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { CodeableConcept } from "./CodeableConcept";
import type { Coding } from "./Coding";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import type { Quantity } from "./Quantity";
import type { Range } from "./Range";
import type { Reference } from "./Reference";
import { fhirId } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import { CodingSchemaInternal } from "./Coding";
import { ElementSchemaInternal } from "./Element";
import { ExtensionSchemaInternal } from "./Extension";
import { QuantitySchemaInternal } from "./Quantity";
import { RangeSchemaInternal } from "./Range";
import { ReferenceSchemaInternal } from "./Reference";

export interface UsageContext extends Element {
	code: Coding;
	valueCodeableConcept: CodeableConcept;
	valueQuantity: Quantity;
	valueRange: Range;
	valueReference: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal;
const getCodingSchema = (): z.ZodType<Coding> => CodingSchemaInternal;
const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;
const getQuantitySchema = (): z.ZodType<Quantity> => QuantitySchemaInternal;
const getRangeSchema = (): z.ZodType<Range> => RangeSchemaInternal;
const getReferenceSchema = (): z.ZodType<Reference> => ReferenceSchemaInternal;

/** @internal */
export const UsageContextSchemaInternal = z
	.object({
		code: z
			.lazy(getCodingSchema)
			.describe(
				"A code that identifies the type of context being specified by this usage context.",
			),
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
		valueCodeableConcept: z
			.lazy(getCodeableConceptSchema)
			.describe(
				"A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.",
			),
		valueQuantity: z
			.lazy(getQuantitySchema)
			.describe(
				"A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.",
			),
		valueRange: z
			.lazy(getRangeSchema)
			.describe(
				"A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.",
			),
		valueReference: z
			.lazy(getReferenceSchema)
			.describe(
				"A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.",
			),
	})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const value_x_Present = [
			"valueCodeableConcept",
			"valueQuantity",
			"valueRange",
			"valueReference",
		].filter((field) => record[field] !== undefined);
		if (value_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of valueCodeableConcept, valueQuantity, valueRange, valueReference may be present for value[x]",
				path: [value_x_Present[0]],
			});
		}
		validateReferenceTarget(
			record.valueReference,
			"valueReference",
			[
				"http://hl7.org/fhir/StructureDefinition/Group",
				"http://hl7.org/fhir/StructureDefinition/HealthcareService",
				"http://hl7.org/fhir/StructureDefinition/InsurancePlan",
				"http://hl7.org/fhir/StructureDefinition/Location",
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/PlanDefinition",
				"http://hl7.org/fhir/StructureDefinition/ResearchStudy",
			],
			[
				"Group",
				"HealthcareService",
				"InsurancePlan",
				"Location",
				"Organization",
				"PlanDefinition",
				"ResearchStudy",
			],
			ctx,
		);
	});

export const UsageContextSchema: z.ZodType<UsageContext> =
	UsageContextSchemaInternal;
