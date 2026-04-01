// Profile: http://hl7.org/fhir/StructureDefinition/UsageContext
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Quantity } from "./Quantity";
import { Range } from "./Range";
import { Reference } from "./Reference";

const getCodeableConceptSchema = (): z.ZodType<unknown> => CodeableConcept;
const getCodingSchema = (): z.ZodType<unknown> => Coding;
const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;
const getQuantitySchema = (): z.ZodType<unknown> => Quantity;
const getRangeSchema = (): z.ZodType<unknown> => Range;
const getReferenceSchema = (): z.ZodType<unknown> => Reference;

export const UsageContext = z
	.object({
		_id: z.lazy(getElementSchema).optional(),
		code: z.lazy(getCodingSchema),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		valueCodeableConcept: z.lazy(getCodeableConceptSchema),
		valueQuantity: z.lazy(getQuantitySchema),
		valueRange: z.lazy(getRangeSchema),
		valueReference: z.lazy(getReferenceSchema),
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
			record["valueReference"],
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

export type UsageContext = z.output<typeof UsageContext>;
