// Profile: http://hl7.org/fhir/StructureDefinition/ObservationDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Some observations have multiple component observations, expressed as separate code value pairs. */
export interface ObservationDefinition_Component extends BackboneElement {
	/** Describes what will be observed. */
	code: CodeableConcept;
	/** The data types allowed for the value element of the instance of this component observations. */
	permittedDataType?: Array<
		| "boolean"
		| "CodeableConcept"
		| "dateTime"
		| "integer"
		| "Period"
		| "Quantity"
		| "Range"
		| "Ratio"
		| "SampledData"
		| "string"
		| "time"
		| null
	>;
	/** Extensions for permittedDataType */
	_permittedDataType?: Array<Element | null>;
	/** Units allowed for the valueQuantity element in the instance observations conforming to this ObservationDefinition. */
	permittedUnit?: Array<Coding>;
	/** A set of qualified values associated with a context and a set of conditions -  provides a range for quantitative and ordinal observations and a collection of value sets for qualitative observations. */
	qualifiedValue?: Array<unknown>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ObservationDefinition_ComponentSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema),
		permittedDataType: z
			.enum([
				"boolean",
				"CodeableConcept",
				"dateTime",
				"integer",
				"Period",
				"Quantity",
				"Range",
				"Ratio",
				"SampledData",
				"string",
				"time",
			])
			.nullable()
			.array()
			.optional(),
		_permittedDataType: z.lazy(getElementSchema).nullable().array().optional(),
		permittedUnit: z.lazy(getCodingSchema).array().optional(),
		qualifiedValue: z.unknown().array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.permittedDataType,
				record._permittedDataType,
				"permittedDataType",
				"_permittedDataType",
				ctx,
			);
		});

export const ObservationDefinition_ComponentSchema =
	ObservationDefinition_ComponentSchemaInternal as z.ZodType<ObservationDefinition_Component>;
