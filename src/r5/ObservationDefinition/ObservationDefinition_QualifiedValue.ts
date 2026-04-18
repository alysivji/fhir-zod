// Profile: http://hl7.org/fhir/StructureDefinition/ObservationDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirCanonical, fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Range } from "../Range";
import { RangeSchemaInternal } from "../Range";

/** A set of qualified values associated with a context and a set of conditions -  provides a range for quantitative and ordinal observations and a collection of value sets for qualitative observations. */
export interface ObservationDefinition_QualifiedValue extends BackboneElement {
	/** The set of abnormal coded results for qualitative observations  that match the criteria of this set of qualified values. */
	abnormalCodedValueSet?: string;
	/** Extensions for abnormalCodedValueSet */
	_abnormalCodedValueSet?: Element;
	/** The age range this  set of qualified values applies to. */
	age?: Range;
	/** The target population this  set of qualified values applies to. */
	appliesTo?: Array<CodeableConcept>;
	/** Text based condition for which the the set of qualified values is valid. */
	condition?: string;
	/** Extensions for condition */
	_condition?: Element;
	/** A concept defining the context for this set of qualified values. */
	context?: CodeableConcept;
	/** The set of critical coded results for qualitative observations  that match the criteria of this set of qualified values. */
	criticalCodedValueSet?: string;
	/** Extensions for criticalCodedValueSet */
	_criticalCodedValueSet?: Element;
	/** The gender this  set of qualified values applies to. */
	gender?: "female" | "male" | "other" | "unknown";
	/** Extensions for gender */
	_gender?: Element;
	/** The gestational age this  set of qualified values applies to. */
	gestationalAge?: Range;
	/** The set of normal coded results for qualitative observations  that match the criteria of this set of qualified values. */
	normalCodedValueSet?: string;
	/** Extensions for normalCodedValueSet */
	_normalCodedValueSet?: Element;
	/** The range of values defined for continuous or ordinal observations that match the criteria of this set of qualified values. */
	range?: Range;
	/** The category of range of values for continuous or ordinal observations that match the criteria of this set of qualified values. */
	rangeCategory?: "absolute" | "critical" | "reference";
	/** Extensions for rangeCategory */
	_rangeCategory?: Element;
	/** The set of valid coded results for qualitative observations  that match the criteria of this set of qualified values. */
	validCodedValueSet?: string;
	/** Extensions for validCodedValueSet */
	_validCodedValueSet?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;

/** @internal */
export const ObservationDefinition_QualifiedValueSchemaInternal =
	BackboneElementSchemaInternal.extend({
		abnormalCodedValueSet: fhirCanonical().optional(),
		_abnormalCodedValueSet: z.lazy(getElementSchema).optional(),
		age: z.lazy(getRangeSchema).optional(),
		appliesTo: z.lazy(getCodeableConceptSchema).array().optional(),
		condition: fhirString().optional(),
		_condition: z.lazy(getElementSchema).optional(),
		context: z.lazy(getCodeableConceptSchema).optional(),
		criticalCodedValueSet: fhirCanonical().optional(),
		_criticalCodedValueSet: z.lazy(getElementSchema).optional(),
		gender: z.enum(["female", "male", "other", "unknown"]).optional(),
		_gender: z.lazy(getElementSchema).optional(),
		gestationalAge: z.lazy(getRangeSchema).optional(),
		normalCodedValueSet: fhirCanonical().optional(),
		_normalCodedValueSet: z.lazy(getElementSchema).optional(),
		range: z.lazy(getRangeSchema).optional(),
		rangeCategory: z.enum(["absolute", "critical", "reference"]).optional(),
		_rangeCategory: z.lazy(getElementSchema).optional(),
		validCodedValueSet: fhirCanonical().optional(),
		_validCodedValueSet: z.lazy(getElementSchema).optional(),
	}).strict();

export const ObservationDefinition_QualifiedValueSchema =
	ObservationDefinition_QualifiedValueSchemaInternal as z.ZodType<ObservationDefinition_QualifiedValue>;
