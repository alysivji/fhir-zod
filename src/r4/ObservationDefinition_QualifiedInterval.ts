// Profile: http://hl7.org/fhir/StructureDefinition/ObservationDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";

/** Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition. */
export interface ObservationDefinition_QualifiedInterval
	extends BackboneElement {
	/** The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so. */
	age?: Range;
	/** Codes to indicate the target population this reference range applies to. */
	appliesTo?: Array<CodeableConcept>;
	/** The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition. */
	category?: "absolute" | "critical" | "reference";
	/** Extensions for category */
	_category?: Element;
	/** Text based condition for which the reference range is valid. */
	condition?: string;
	/** Extensions for condition */
	_condition?: Element;
	/** Codes to indicate the health context the range applies to. For example, the normal or therapeutic range. */
	context?: CodeableConcept;
	/** Sex of the population the range applies to. */
	gender?: "female" | "male" | "other" | "unknown";
	/** Extensions for gender */
	_gender?: Element;
	/** The gestational age to which this reference range is applicable, in the context of pregnancy. */
	gestationalAge?: Range;
	/** The low and high values determining the interval. There may be only one of the two. */
	range?: Range;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;

/** @internal */
export const ObservationDefinition_QualifiedIntervalSchemaInternal =
	BackboneElementSchemaInternal.extend({
		age: z.lazy(getRangeSchema).optional(),
		appliesTo: z.lazy(getCodeableConceptSchema).array().optional(),
		category: z.enum(["absolute", "critical", "reference"]).optional(),
		_category: z.lazy(getElementSchema).optional(),
		condition: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_condition: z.lazy(getElementSchema).optional(),
		context: z.lazy(getCodeableConceptSchema).optional(),
		gender: z.enum(["female", "male", "other", "unknown"]).optional(),
		_gender: z.lazy(getElementSchema).optional(),
		gestationalAge: z.lazy(getRangeSchema).optional(),
		range: z.lazy(getRangeSchema).optional(),
	}).strict();

export const ObservationDefinition_QualifiedIntervalSchema =
	ObservationDefinition_QualifiedIntervalSchemaInternal as z.ZodType<ObservationDefinition_QualifiedInterval>;
