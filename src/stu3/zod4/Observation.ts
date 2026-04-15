// Profile: http://hl7.org/fhir/StructureDefinition/Observation
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import {
	fhirDateTime,
	fhirInstant,
	fhirString,
	fhirTime,
} from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Observation_Component } from "./Observation_Component";
import { Observation_ComponentSchemaInternal } from "./Observation_Component";
import type { Observation_ReferenceRange } from "./Observation_ReferenceRange";
import { Observation_ReferenceRangeSchemaInternal } from "./Observation_ReferenceRange";
import type { Observation_Related } from "./Observation_Related";
import { Observation_RelatedSchemaInternal } from "./Observation_Related";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";
import type { Ratio } from "./Ratio";
import { RatioSchemaInternal } from "./Ratio";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { SampledData } from "./SampledData";
import { SampledDataSchemaInternal } from "./SampledData";

/** Base StructureDefinition for Observation Resource */
export interface Observation extends DomainResource {
	/** A plan, proposal or order that is fulfilled in whole or in part by this event. */
	basedOn?: Array<Reference>;
	/** Indicates the site on the subject's body where the observation was made (i.e. the target site). */
	bodySite?: CodeableConcept;
	/** A code that classifies the general type of observation being made. */
	category?: Array<CodeableConcept>;
	/** Describes what was observed. Sometimes this is called the observation "name". */
	code: CodeableConcept;
	/** May include statements about significant, unexpected or unreliable values, or information about the source of the value where this may be relevant to the interpretation of the result. */
	comment?: string;
	/** Extensions for comment */
	_comment?: Element;
	/** Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations. */
	component?: Array<Observation_Component>;
	/** The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made. */
	context?: Reference;
	/** Provides a reason why the expected value in the element Observation.value[x] is missing. */
	dataAbsentReason?: CodeableConcept;
	/** The device used to generate the observation data. */
	device?: Reference;
	/** The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself. */
	effectiveDateTime?: string;
	/** Extensions for effectiveDateTime */
	_effectiveDateTime?: Element;
	/** The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself. */
	effectivePeriod?: Period;
	/** A unique identifier assigned to this observation. */
	identifier?: Array<Identifier>;
	/** The assessment made based on the result of the observation.  Intended as a simple compact code often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result. Otherwise known as abnormal flag. */
	interpretation?: CodeableConcept;
	/** The date and time this observation was made available to providers, typically after the results have been reviewed and verified. */
	issued?: string;
	/** Extensions for issued */
	_issued?: Element;
	/** Indicates the mechanism used to perform the observation. */
	method?: CodeableConcept;
	/** Who was responsible for asserting the observed value as "true". */
	performer?: Array<Reference>;
	/** Guidance on how to interpret the value by comparison to a normal or recommended range. */
	referenceRange?: Array<Observation_ReferenceRange>;
	/** A  reference to another resource (usually another Observation) whose relationship is defined by the relationship type code. */
	related?: Array<Observation_Related>;
	/** This is a Observation resource. */
	resourceType: "Observation";
	/** The specimen that was used when this observation was made. */
	specimen?: Reference;
	/** The status of the result value. */
	status:
		| "amended"
		| "cancelled"
		| "corrected"
		| "entered-in-error"
		| "final"
		| "preliminary"
		| "registered"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** The patient, or group of patients, location, or device whose characteristics (direct or indirect) are described by the observation and into whose record the observation is placed.  Comments: Indirect characteristics may be those of a specimen, fetus, donor,  other observer (for example a relative or EMT), or any observation made about the subject. */
	subject?: Reference;
	/** The information determined as a result of making the observation, if the information has a simple value. */
	valueAttachment?: Attachment;
	/** The information determined as a result of making the observation, if the information has a simple value. */
	valueBoolean?: boolean;
	/** Extensions for valueBoolean */
	_valueBoolean?: Element;
	/** The information determined as a result of making the observation, if the information has a simple value. */
	valueCodeableConcept?: CodeableConcept;
	/** The information determined as a result of making the observation, if the information has a simple value. */
	valueDateTime?: string;
	/** Extensions for valueDateTime */
	_valueDateTime?: Element;
	/** The information determined as a result of making the observation, if the information has a simple value. */
	valuePeriod?: Period;
	/** The information determined as a result of making the observation, if the information has a simple value. */
	valueQuantity?: Quantity;
	/** The information determined as a result of making the observation, if the information has a simple value. */
	valueRange?: Range;
	/** The information determined as a result of making the observation, if the information has a simple value. */
	valueRatio?: Ratio;
	/** The information determined as a result of making the observation, if the information has a simple value. */
	valueSampledData?: SampledData;
	/** The information determined as a result of making the observation, if the information has a simple value. */
	valueString?: string;
	/** Extensions for valueString */
	_valueString?: Element;
	/** The information determined as a result of making the observation, if the information has a simple value. */
	valueTime?: string;
	/** Extensions for valueTime */
	_valueTime?: Element;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getObservation_ComponentSchema = (): z.ZodType<Observation_Component> =>
	Observation_ComponentSchemaInternal as z.ZodType<Observation_Component>;
const getObservation_ReferenceRangeSchema =
	(): z.ZodType<Observation_ReferenceRange> =>
		Observation_ReferenceRangeSchemaInternal as z.ZodType<Observation_ReferenceRange>;
const getObservation_RelatedSchema = (): z.ZodType<Observation_Related> =>
	Observation_RelatedSchemaInternal as z.ZodType<Observation_Related>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;
const getRatioSchema = (): z.ZodType<Ratio> =>
	RatioSchemaInternal as z.ZodType<Ratio>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getSampledDataSchema = (): z.ZodType<SampledData> =>
	SampledDataSchemaInternal as z.ZodType<SampledData>;

/** @internal */
export const ObservationSchemaInternal = DomainResourceSchemaInternal.extend({
	basedOn: z.lazy(getReferenceSchema).array().optional(),
	bodySite: z.lazy(getCodeableConceptSchema).optional(),
	category: z.lazy(getCodeableConceptSchema).array().optional(),
	code: z.lazy(getCodeableConceptSchema),
	comment: fhirString().optional(),
	_comment: z.lazy(getElementSchema).optional(),
	component: z.lazy(getObservation_ComponentSchema).array().optional(),
	context: z.lazy(getReferenceSchema).optional(),
	dataAbsentReason: z.lazy(getCodeableConceptSchema).optional(),
	device: z.lazy(getReferenceSchema).optional(),
	effectiveDateTime: fhirDateTime().optional(),
	_effectiveDateTime: z.lazy(getElementSchema).optional(),
	effectivePeriod: z.lazy(getPeriodSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	interpretation: z.lazy(getCodeableConceptSchema).optional(),
	issued: fhirInstant().optional(),
	_issued: z.lazy(getElementSchema).optional(),
	method: z.lazy(getCodeableConceptSchema).optional(),
	performer: z.lazy(getReferenceSchema).array().optional(),
	referenceRange: z
		.lazy(getObservation_ReferenceRangeSchema)
		.array()
		.optional(),
	related: z.lazy(getObservation_RelatedSchema).array().optional(),
	resourceType: z.literal("Observation"),
	specimen: z.lazy(getReferenceSchema).optional(),
	status: z.enum([
		"amended",
		"cancelled",
		"corrected",
		"entered-in-error",
		"final",
		"preliminary",
		"registered",
		"unknown",
	]),
	_status: z.lazy(getElementSchema).optional(),
	subject: z.lazy(getReferenceSchema).optional(),
	valueAttachment: z.lazy(getAttachmentSchema).optional(),
	valueBoolean: z.boolean().optional(),
	_valueBoolean: z.lazy(getElementSchema).optional(),
	valueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
	valueDateTime: fhirDateTime().optional(),
	_valueDateTime: z.lazy(getElementSchema).optional(),
	valuePeriod: z.lazy(getPeriodSchema).optional(),
	valueQuantity: z.lazy(getQuantitySchema).optional(),
	valueRange: z.lazy(getRangeSchema).optional(),
	valueRatio: z.lazy(getRatioSchema).optional(),
	valueSampledData: z.lazy(getSampledDataSchema).optional(),
	valueString: fhirString().optional(),
	_valueString: z.lazy(getElementSchema).optional(),
	valueTime: fhirTime().optional(),
	_valueTime: z.lazy(getElementSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const effective_x_Present = ["effectiveDateTime", "effectivePeriod"].filter(
			(field) => record[field] !== undefined,
		);
		if (effective_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of effectiveDateTime, effectivePeriod may be present for effective[x]",
				path: [effective_x_Present[0]],
			});
		}
		const value_x_Present = [
			"valueAttachment",
			"valueBoolean",
			"valueCodeableConcept",
			"valueDateTime",
			"valuePeriod",
			"valueQuantity",
			"valueRange",
			"valueRatio",
			"valueSampledData",
			"valueString",
			"valueTime",
		].filter((field) => record[field] !== undefined);
		if (value_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of valueAttachment, valueBoolean, valueCodeableConcept, valueDateTime, valuePeriod, valueQuantity, valueRange, valueRatio, valueSampledData, valueString, valueTime may be present for value[x]",
				path: [value_x_Present[0]],
			});
		}
		validateReferenceTarget(
			record.basedOn,
			"basedOn",
			[
				"http://hl7.org/fhir/StructureDefinition/CarePlan",
				"http://hl7.org/fhir/StructureDefinition/DeviceRequest",
				"http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation",
				"http://hl7.org/fhir/StructureDefinition/MedicationRequest",
				"http://hl7.org/fhir/StructureDefinition/NutritionOrder",
				"http://hl7.org/fhir/StructureDefinition/ProcedureRequest",
				"http://hl7.org/fhir/StructureDefinition/ReferralRequest",
			],
			[
				"CarePlan",
				"DeviceRequest",
				"ImmunizationRecommendation",
				"MedicationRequest",
				"NutritionOrder",
				"ProcedureRequest",
				"ReferralRequest",
			],
			ctx,
		);
		validateReferenceTarget(
			record.context,
			"context",
			[
				"http://hl7.org/fhir/StructureDefinition/Encounter",
				"http://hl7.org/fhir/StructureDefinition/EpisodeOfCare",
			],
			["Encounter", "EpisodeOfCare"],
			ctx,
		);
		validateReferenceTarget(
			record.device,
			"device",
			[
				"http://hl7.org/fhir/StructureDefinition/Device",
				"http://hl7.org/fhir/StructureDefinition/DeviceMetric",
			],
			["Device", "DeviceMetric"],
			ctx,
		);
		validateReferenceTarget(
			record.performer,
			"performer",
			[
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			["Organization", "Patient", "Practitioner", "RelatedPerson"],
			ctx,
		);
		validateReferenceTarget(
			record.specimen,
			"specimen",
			["http://hl7.org/fhir/StructureDefinition/Specimen"],
			["Specimen"],
			ctx,
		);
		validateReferenceTarget(
			record.subject,
			"subject",
			[
				"http://hl7.org/fhir/StructureDefinition/Device",
				"http://hl7.org/fhir/StructureDefinition/Group",
				"http://hl7.org/fhir/StructureDefinition/Location",
				"http://hl7.org/fhir/StructureDefinition/Patient",
			],
			["Device", "Group", "Location", "Patient"],
			ctx,
		);
	});

export const ObservationSchema =
	ObservationSchemaInternal as z.ZodType<Observation>;
