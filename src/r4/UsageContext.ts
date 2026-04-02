// Profile: http://hl7.org/fhir/StructureDefinition/UsageContext
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T04:42:40.346Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Base StructureDefinition for UsageContext Type: Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care). */
export interface UsageContext extends Element {
	/** A code that identifies the type of context being specified by this usage context. */
	code: Coding;
	/** A value that defines the context specified in this context of use. The interpretation of the value is defined by the code. */
	valueCodeableConcept: CodeableConcept;
	/** A value that defines the context specified in this context of use. The interpretation of the value is defined by the code. */
	valueQuantity: Quantity;
	/** A value that defines the context specified in this context of use. The interpretation of the value is defined by the code. */
	valueRange: Range;
	/** A value that defines the context specified in this context of use. The interpretation of the value is defined by the code. */
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
		code: z.lazy(getCodingSchema),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
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
