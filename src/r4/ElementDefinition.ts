// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import {
	fhirDate,
	fhirDateTime,
	fhirId,
	fhirInstant,
	fhirTime,
} from "../shared/fhir-primitives";
import { Address } from "./Address";
import { Age } from "./Age";
import { Annotation } from "./Annotation";
import { Attachment } from "./Attachment";
import { BackboneElement } from "./BackboneElement";
import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { ContactDetail } from "./ContactDetail";
import { ContactPoint } from "./ContactPoint";
import { Contributor } from "./Contributor";
import { Count } from "./Count";
import { DataRequirement } from "./DataRequirement";
import { Distance } from "./Distance";
import { Dosage } from "./Dosage";
import { Duration } from "./Duration";
import { Element } from "./Element";
import { ElementDefinition_Base } from "./ElementDefinition_Base";
import { ElementDefinition_Binding } from "./ElementDefinition_Binding";
import { ElementDefinition_Constraint } from "./ElementDefinition_Constraint";
import { ElementDefinition_Example } from "./ElementDefinition_Example";
import { ElementDefinition_Mapping } from "./ElementDefinition_Mapping";
import { ElementDefinition_Slicing } from "./ElementDefinition_Slicing";
import { ElementDefinition_Type } from "./ElementDefinition_Type";
import { HumanName } from "./HumanName";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Money } from "./Money";
import { ParameterDefinition } from "./ParameterDefinition";
import { Period } from "./Period";
import { Quantity } from "./Quantity";
import { Range } from "./Range";
import { Ratio } from "./Ratio";
import { Reference } from "./Reference";
import { RelatedArtifact } from "./RelatedArtifact";
import { SampledData } from "./SampledData";
import { Signature } from "./Signature";
import { Timing } from "./Timing";
import { TriggerDefinition } from "./TriggerDefinition";
import { UsageContext } from "./UsageContext";

const getAddressSchema = (): z.ZodType<unknown> => Address;
const getAgeSchema = (): z.ZodType<unknown> => Age;
const getAnnotationSchema = (): z.ZodType<unknown> => Annotation;
const getAttachmentSchema = (): z.ZodType<unknown> => Attachment;
const getCodeableConceptSchema = (): z.ZodType<unknown> => CodeableConcept;
const getCodingSchema = (): z.ZodType<unknown> => Coding;
const getContactDetailSchema = (): z.ZodType<unknown> => ContactDetail;
const getContactPointSchema = (): z.ZodType<unknown> => ContactPoint;
const getContributorSchema = (): z.ZodType<unknown> => Contributor;
const getCountSchema = (): z.ZodType<unknown> => Count;
const getDataRequirementSchema = (): z.ZodType<unknown> => DataRequirement;
const getDistanceSchema = (): z.ZodType<unknown> => Distance;
const getDosageSchema = (): z.ZodType<unknown> => Dosage;
const getDurationSchema = (): z.ZodType<unknown> => Duration;
const getElementSchema = (): z.ZodType<unknown> => Element;
const getElementDefinition_BaseSchema = (): z.ZodType<unknown> =>
	ElementDefinition_Base;
const getElementDefinition_BindingSchema = (): z.ZodType<unknown> =>
	ElementDefinition_Binding;
const getElementDefinition_ConstraintSchema = (): z.ZodType<unknown> =>
	ElementDefinition_Constraint;
const getElementDefinition_ExampleSchema = (): z.ZodType<unknown> =>
	ElementDefinition_Example;
const getElementDefinition_MappingSchema = (): z.ZodType<unknown> =>
	ElementDefinition_Mapping;
const getElementDefinition_SlicingSchema = (): z.ZodType<unknown> =>
	ElementDefinition_Slicing;
const getElementDefinition_TypeSchema = (): z.ZodType<unknown> =>
	ElementDefinition_Type;
const getHumanNameSchema = (): z.ZodType<unknown> => HumanName;
const getIdentifierSchema = (): z.ZodType<unknown> => Identifier;
const getMetaSchema = (): z.ZodType<unknown> => Meta;
const getMoneySchema = (): z.ZodType<unknown> => Money;
const getParameterDefinitionSchema = (): z.ZodType<unknown> =>
	ParameterDefinition;
const getPeriodSchema = (): z.ZodType<unknown> => Period;
const getQuantitySchema = (): z.ZodType<unknown> => Quantity;
const getRangeSchema = (): z.ZodType<unknown> => Range;
const getRatioSchema = (): z.ZodType<unknown> => Ratio;
const getReferenceSchema = (): z.ZodType<unknown> => Reference;
const getRelatedArtifactSchema = (): z.ZodType<unknown> => RelatedArtifact;
const getSampledDataSchema = (): z.ZodType<unknown> => SampledData;
const getSignatureSchema = (): z.ZodType<unknown> => Signature;
const getTimingSchema = (): z.ZodType<unknown> => Timing;
const getTriggerDefinitionSchema = (): z.ZodType<unknown> => TriggerDefinition;
const getUsageContextSchema = (): z.ZodType<unknown> => UsageContext;

export const ElementDefinition = BackboneElement.extend({
	_alias: z.lazy(getElementSchema).optional(),
	_comment: z.lazy(getElementSchema).optional(),
	_condition: z.lazy(getElementSchema).optional(),
	_contentReference: z.lazy(getElementSchema).optional(),
	_defaultValueBase64Binary: z.lazy(getElementSchema).optional(),
	_defaultValueBoolean: z.lazy(getElementSchema).optional(),
	_defaultValueCanonical: z.lazy(getElementSchema).optional(),
	_defaultValueCode: z.lazy(getElementSchema).optional(),
	_defaultValueDate: z.lazy(getElementSchema).optional(),
	_defaultValueDateTime: z.lazy(getElementSchema).optional(),
	_defaultValueDecimal: z.lazy(getElementSchema).optional(),
	_defaultValueId: z.lazy(getElementSchema).optional(),
	_defaultValueInstant: z.lazy(getElementSchema).optional(),
	_defaultValueInteger: z.lazy(getElementSchema).optional(),
	_defaultValueMarkdown: z.lazy(getElementSchema).optional(),
	_defaultValueOid: z.lazy(getElementSchema).optional(),
	_defaultValuePositiveInt: z.lazy(getElementSchema).optional(),
	_defaultValueString: z.lazy(getElementSchema).optional(),
	_defaultValueTime: z.lazy(getElementSchema).optional(),
	_defaultValueUnsignedInt: z.lazy(getElementSchema).optional(),
	_defaultValueUri: z.lazy(getElementSchema).optional(),
	_defaultValueUrl: z.lazy(getElementSchema).optional(),
	_defaultValueUuid: z.lazy(getElementSchema).optional(),
	_definition: z.lazy(getElementSchema).optional(),
	_fixedBase64Binary: z.lazy(getElementSchema).optional(),
	_fixedBoolean: z.lazy(getElementSchema).optional(),
	_fixedCanonical: z.lazy(getElementSchema).optional(),
	_fixedCode: z.lazy(getElementSchema).optional(),
	_fixedDate: z.lazy(getElementSchema).optional(),
	_fixedDateTime: z.lazy(getElementSchema).optional(),
	_fixedDecimal: z.lazy(getElementSchema).optional(),
	_fixedId: z.lazy(getElementSchema).optional(),
	_fixedInstant: z.lazy(getElementSchema).optional(),
	_fixedInteger: z.lazy(getElementSchema).optional(),
	_fixedMarkdown: z.lazy(getElementSchema).optional(),
	_fixedOid: z.lazy(getElementSchema).optional(),
	_fixedPositiveInt: z.lazy(getElementSchema).optional(),
	_fixedString: z.lazy(getElementSchema).optional(),
	_fixedTime: z.lazy(getElementSchema).optional(),
	_fixedUnsignedInt: z.lazy(getElementSchema).optional(),
	_fixedUri: z.lazy(getElementSchema).optional(),
	_fixedUrl: z.lazy(getElementSchema).optional(),
	_fixedUuid: z.lazy(getElementSchema).optional(),
	_isModifier: z.lazy(getElementSchema).optional(),
	_isModifierReason: z.lazy(getElementSchema).optional(),
	_isSummary: z.lazy(getElementSchema).optional(),
	_label: z.lazy(getElementSchema).optional(),
	_max: z.lazy(getElementSchema).optional(),
	_maxLength: z.lazy(getElementSchema).optional(),
	_maxValueDate: z.lazy(getElementSchema).optional(),
	_maxValueDateTime: z.lazy(getElementSchema).optional(),
	_maxValueDecimal: z.lazy(getElementSchema).optional(),
	_maxValueInstant: z.lazy(getElementSchema).optional(),
	_maxValueInteger: z.lazy(getElementSchema).optional(),
	_maxValuePositiveInt: z.lazy(getElementSchema).optional(),
	_maxValueTime: z.lazy(getElementSchema).optional(),
	_maxValueUnsignedInt: z.lazy(getElementSchema).optional(),
	_meaningWhenMissing: z.lazy(getElementSchema).optional(),
	_min: z.lazy(getElementSchema).optional(),
	_minValueDate: z.lazy(getElementSchema).optional(),
	_minValueDateTime: z.lazy(getElementSchema).optional(),
	_minValueDecimal: z.lazy(getElementSchema).optional(),
	_minValueInstant: z.lazy(getElementSchema).optional(),
	_minValueInteger: z.lazy(getElementSchema).optional(),
	_minValuePositiveInt: z.lazy(getElementSchema).optional(),
	_minValueTime: z.lazy(getElementSchema).optional(),
	_minValueUnsignedInt: z.lazy(getElementSchema).optional(),
	_mustSupport: z.lazy(getElementSchema).optional(),
	_orderMeaning: z.lazy(getElementSchema).optional(),
	_path: z.lazy(getElementSchema).optional(),
	_patternBase64Binary: z.lazy(getElementSchema).optional(),
	_patternBoolean: z.lazy(getElementSchema).optional(),
	_patternCanonical: z.lazy(getElementSchema).optional(),
	_patternCode: z.lazy(getElementSchema).optional(),
	_patternDate: z.lazy(getElementSchema).optional(),
	_patternDateTime: z.lazy(getElementSchema).optional(),
	_patternDecimal: z.lazy(getElementSchema).optional(),
	_patternId: z.lazy(getElementSchema).optional(),
	_patternInstant: z.lazy(getElementSchema).optional(),
	_patternInteger: z.lazy(getElementSchema).optional(),
	_patternMarkdown: z.lazy(getElementSchema).optional(),
	_patternOid: z.lazy(getElementSchema).optional(),
	_patternPositiveInt: z.lazy(getElementSchema).optional(),
	_patternString: z.lazy(getElementSchema).optional(),
	_patternTime: z.lazy(getElementSchema).optional(),
	_patternUnsignedInt: z.lazy(getElementSchema).optional(),
	_patternUri: z.lazy(getElementSchema).optional(),
	_patternUrl: z.lazy(getElementSchema).optional(),
	_patternUuid: z.lazy(getElementSchema).optional(),
	_representation: z.lazy(getElementSchema).optional(),
	_requirements: z.lazy(getElementSchema).optional(),
	_short: z.lazy(getElementSchema).optional(),
	_sliceIsConstraining: z.lazy(getElementSchema).optional(),
	_sliceName: z.lazy(getElementSchema).optional(),
	alias: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.array()
		.optional(),
	base: z.lazy(getElementDefinition_BaseSchema).optional(),
	binding: z.lazy(getElementDefinition_BindingSchema).optional(),
	code: z.lazy(getCodingSchema).array().optional(),
	comment: z.string().optional(),
	condition: fhirId().array().optional(),
	constraint: z.lazy(getElementDefinition_ConstraintSchema).array().optional(),
	contentReference: z.string().regex(/\S*/).optional(),
	defaultValueAddress: z.lazy(getAddressSchema).optional(),
	defaultValueAge: z.lazy(getAgeSchema).optional(),
	defaultValueAnnotation: z.lazy(getAnnotationSchema).optional(),
	defaultValueAttachment: z.lazy(getAttachmentSchema).optional(),
	defaultValueBase64Binary: z
		.string()
		.regex(/(\s*([0-9a-zA-Z\+\/=]){4}\s*)+/)
		.optional(),
	defaultValueBoolean: z.boolean().optional(),
	defaultValueCanonical: z.string().regex(/\S*/).optional(),
	defaultValueCode: z
		.string()
		.regex(/[^\s]+(\s[^\s]+)*/)
		.optional(),
	defaultValueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
	defaultValueCoding: z.lazy(getCodingSchema).optional(),
	defaultValueContactDetail: z.lazy(getContactDetailSchema).optional(),
	defaultValueContactPoint: z.lazy(getContactPointSchema).optional(),
	defaultValueContributor: z.lazy(getContributorSchema).optional(),
	defaultValueCount: z.lazy(getCountSchema).optional(),
	defaultValueDataRequirement: z.lazy(getDataRequirementSchema).optional(),
	defaultValueDate: fhirDate().optional(),
	defaultValueDateTime: fhirDateTime().optional(),
	defaultValueDecimal: z.number().optional(),
	defaultValueDistance: z.lazy(getDistanceSchema).optional(),
	defaultValueDosage: z.lazy(getDosageSchema).optional(),
	defaultValueDuration: z.lazy(getDurationSchema).optional(),
	defaultValueExpression: z.unknown().optional(),
	defaultValueHumanName: z.lazy(getHumanNameSchema).optional(),
	defaultValueId: fhirId().optional(),
	defaultValueIdentifier: z.lazy(getIdentifierSchema).optional(),
	defaultValueInstant: fhirInstant().optional(),
	defaultValueInteger: z.number().int().optional(),
	defaultValueMarkdown: z.string().optional(),
	defaultValueMeta: z.lazy(getMetaSchema).optional(),
	defaultValueMoney: z.lazy(getMoneySchema).optional(),
	defaultValueOid: z
		.string()
		.regex(/urn:oid:[0-2](\.(0|[1-9][0-9]*))+/)
		.optional(),
	defaultValueParameterDefinition: z
		.lazy(getParameterDefinitionSchema)
		.optional(),
	defaultValuePeriod: z.lazy(getPeriodSchema).optional(),
	defaultValuePositiveInt: z.number().int().positive().optional(),
	defaultValueQuantity: z.lazy(getQuantitySchema).optional(),
	defaultValueRange: z.lazy(getRangeSchema).optional(),
	defaultValueRatio: z.lazy(getRatioSchema).optional(),
	defaultValueReference: z.lazy(getReferenceSchema).optional(),
	defaultValueRelatedArtifact: z.lazy(getRelatedArtifactSchema).optional(),
	defaultValueSampledData: z.lazy(getSampledDataSchema).optional(),
	defaultValueSignature: z.lazy(getSignatureSchema).optional(),
	defaultValueString: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	defaultValueTime: fhirTime().optional(),
	defaultValueTiming: z.lazy(getTimingSchema).optional(),
	defaultValueTriggerDefinition: z.lazy(getTriggerDefinitionSchema).optional(),
	defaultValueUnsignedInt: z.number().int().nonnegative().optional(),
	defaultValueUri: z.string().regex(/\S*/).optional(),
	defaultValueUrl: z.string().regex(/\S*/).optional(),
	defaultValueUsageContext: z.lazy(getUsageContextSchema).optional(),
	defaultValueUuid: z
		.string()
		.regex(
			/urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
		)
		.optional(),
	definition: z.string().optional(),
	example: z.lazy(getElementDefinition_ExampleSchema).array().optional(),
	fixedAddress: z.lazy(getAddressSchema).optional(),
	fixedAge: z.lazy(getAgeSchema).optional(),
	fixedAnnotation: z.lazy(getAnnotationSchema).optional(),
	fixedAttachment: z.lazy(getAttachmentSchema).optional(),
	fixedBase64Binary: z
		.string()
		.regex(/(\s*([0-9a-zA-Z\+\/=]){4}\s*)+/)
		.optional(),
	fixedBoolean: z.boolean().optional(),
	fixedCanonical: z.string().regex(/\S*/).optional(),
	fixedCode: z
		.string()
		.regex(/[^\s]+(\s[^\s]+)*/)
		.optional(),
	fixedCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
	fixedCoding: z.lazy(getCodingSchema).optional(),
	fixedContactDetail: z.lazy(getContactDetailSchema).optional(),
	fixedContactPoint: z.lazy(getContactPointSchema).optional(),
	fixedContributor: z.lazy(getContributorSchema).optional(),
	fixedCount: z.lazy(getCountSchema).optional(),
	fixedDataRequirement: z.lazy(getDataRequirementSchema).optional(),
	fixedDate: fhirDate().optional(),
	fixedDateTime: fhirDateTime().optional(),
	fixedDecimal: z.number().optional(),
	fixedDistance: z.lazy(getDistanceSchema).optional(),
	fixedDosage: z.lazy(getDosageSchema).optional(),
	fixedDuration: z.lazy(getDurationSchema).optional(),
	fixedExpression: z.unknown().optional(),
	fixedHumanName: z.lazy(getHumanNameSchema).optional(),
	fixedId: fhirId().optional(),
	fixedIdentifier: z.lazy(getIdentifierSchema).optional(),
	fixedInstant: fhirInstant().optional(),
	fixedInteger: z.number().int().optional(),
	fixedMarkdown: z.string().optional(),
	fixedMeta: z.lazy(getMetaSchema).optional(),
	fixedMoney: z.lazy(getMoneySchema).optional(),
	fixedOid: z
		.string()
		.regex(/urn:oid:[0-2](\.(0|[1-9][0-9]*))+/)
		.optional(),
	fixedParameterDefinition: z.lazy(getParameterDefinitionSchema).optional(),
	fixedPeriod: z.lazy(getPeriodSchema).optional(),
	fixedPositiveInt: z.number().int().positive().optional(),
	fixedQuantity: z.lazy(getQuantitySchema).optional(),
	fixedRange: z.lazy(getRangeSchema).optional(),
	fixedRatio: z.lazy(getRatioSchema).optional(),
	fixedReference: z.lazy(getReferenceSchema).optional(),
	fixedRelatedArtifact: z.lazy(getRelatedArtifactSchema).optional(),
	fixedSampledData: z.lazy(getSampledDataSchema).optional(),
	fixedSignature: z.lazy(getSignatureSchema).optional(),
	fixedString: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	fixedTime: fhirTime().optional(),
	fixedTiming: z.lazy(getTimingSchema).optional(),
	fixedTriggerDefinition: z.lazy(getTriggerDefinitionSchema).optional(),
	fixedUnsignedInt: z.number().int().nonnegative().optional(),
	fixedUri: z.string().regex(/\S*/).optional(),
	fixedUrl: z.string().regex(/\S*/).optional(),
	fixedUsageContext: z.lazy(getUsageContextSchema).optional(),
	fixedUuid: z
		.string()
		.regex(
			/urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
		)
		.optional(),
	isModifier: z.boolean().optional(),
	isModifierReason: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	isSummary: z.boolean().optional(),
	label: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	mapping: z.lazy(getElementDefinition_MappingSchema).array().optional(),
	max: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	maxLength: z.number().int().optional(),
	maxValueDate: fhirDate().optional(),
	maxValueDateTime: fhirDateTime().optional(),
	maxValueDecimal: z.number().optional(),
	maxValueInstant: fhirInstant().optional(),
	maxValueInteger: z.number().int().optional(),
	maxValuePositiveInt: z.number().int().positive().optional(),
	maxValueQuantity: z.lazy(getQuantitySchema).optional(),
	maxValueTime: fhirTime().optional(),
	maxValueUnsignedInt: z.number().int().nonnegative().optional(),
	meaningWhenMissing: z.string().optional(),
	min: z.number().int().nonnegative().optional(),
	minValueDate: fhirDate().optional(),
	minValueDateTime: fhirDateTime().optional(),
	minValueDecimal: z.number().optional(),
	minValueInstant: fhirInstant().optional(),
	minValueInteger: z.number().int().optional(),
	minValuePositiveInt: z.number().int().positive().optional(),
	minValueQuantity: z.lazy(getQuantitySchema).optional(),
	minValueTime: fhirTime().optional(),
	minValueUnsignedInt: z.number().int().nonnegative().optional(),
	mustSupport: z.boolean().optional(),
	orderMeaning: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	path: z.string().regex(/[ \r\n\t\S]+/),
	patternAddress: z.lazy(getAddressSchema).optional(),
	patternAge: z.lazy(getAgeSchema).optional(),
	patternAnnotation: z.lazy(getAnnotationSchema).optional(),
	patternAttachment: z.lazy(getAttachmentSchema).optional(),
	patternBase64Binary: z
		.string()
		.regex(/(\s*([0-9a-zA-Z\+\/=]){4}\s*)+/)
		.optional(),
	patternBoolean: z.boolean().optional(),
	patternCanonical: z.string().regex(/\S*/).optional(),
	patternCode: z
		.string()
		.regex(/[^\s]+(\s[^\s]+)*/)
		.optional(),
	patternCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
	patternCoding: z.lazy(getCodingSchema).optional(),
	patternContactDetail: z.lazy(getContactDetailSchema).optional(),
	patternContactPoint: z.lazy(getContactPointSchema).optional(),
	patternContributor: z.lazy(getContributorSchema).optional(),
	patternCount: z.lazy(getCountSchema).optional(),
	patternDataRequirement: z.lazy(getDataRequirementSchema).optional(),
	patternDate: fhirDate().optional(),
	patternDateTime: fhirDateTime().optional(),
	patternDecimal: z.number().optional(),
	patternDistance: z.lazy(getDistanceSchema).optional(),
	patternDosage: z.lazy(getDosageSchema).optional(),
	patternDuration: z.lazy(getDurationSchema).optional(),
	patternExpression: z.unknown().optional(),
	patternHumanName: z.lazy(getHumanNameSchema).optional(),
	patternId: fhirId().optional(),
	patternIdentifier: z.lazy(getIdentifierSchema).optional(),
	patternInstant: fhirInstant().optional(),
	patternInteger: z.number().int().optional(),
	patternMarkdown: z.string().optional(),
	patternMeta: z.lazy(getMetaSchema).optional(),
	patternMoney: z.lazy(getMoneySchema).optional(),
	patternOid: z
		.string()
		.regex(/urn:oid:[0-2](\.(0|[1-9][0-9]*))+/)
		.optional(),
	patternParameterDefinition: z.lazy(getParameterDefinitionSchema).optional(),
	patternPeriod: z.lazy(getPeriodSchema).optional(),
	patternPositiveInt: z.number().int().positive().optional(),
	patternQuantity: z.lazy(getQuantitySchema).optional(),
	patternRange: z.lazy(getRangeSchema).optional(),
	patternRatio: z.lazy(getRatioSchema).optional(),
	patternReference: z.lazy(getReferenceSchema).optional(),
	patternRelatedArtifact: z.lazy(getRelatedArtifactSchema).optional(),
	patternSampledData: z.lazy(getSampledDataSchema).optional(),
	patternSignature: z.lazy(getSignatureSchema).optional(),
	patternString: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	patternTime: fhirTime().optional(),
	patternTiming: z.lazy(getTimingSchema).optional(),
	patternTriggerDefinition: z.lazy(getTriggerDefinitionSchema).optional(),
	patternUnsignedInt: z.number().int().nonnegative().optional(),
	patternUri: z.string().regex(/\S*/).optional(),
	patternUrl: z.string().regex(/\S*/).optional(),
	patternUsageContext: z.lazy(getUsageContextSchema).optional(),
	patternUuid: z
		.string()
		.regex(
			/urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
		)
		.optional(),
	representation: z
		.enum(["cdaText", "typeAttr", "xhtml", "xmlAttr", "xmlText"])
		.array()
		.optional(),
	requirements: z.string().optional(),
	short: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	sliceIsConstraining: z.boolean().optional(),
	sliceName: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	slicing: z.lazy(getElementDefinition_SlicingSchema).optional(),
	type: z.lazy(getElementDefinition_TypeSchema).array().optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const defaultValue_x_Present = [
			"defaultValueAddress",
			"defaultValueAge",
			"defaultValueAnnotation",
			"defaultValueAttachment",
			"defaultValueBase64Binary",
			"defaultValueBoolean",
			"defaultValueCanonical",
			"defaultValueCode",
			"defaultValueCodeableConcept",
			"defaultValueCoding",
			"defaultValueContactDetail",
			"defaultValueContactPoint",
			"defaultValueContributor",
			"defaultValueCount",
			"defaultValueDataRequirement",
			"defaultValueDate",
			"defaultValueDateTime",
			"defaultValueDecimal",
			"defaultValueDistance",
			"defaultValueDosage",
			"defaultValueDuration",
			"defaultValueExpression",
			"defaultValueHumanName",
			"defaultValueId",
			"defaultValueIdentifier",
			"defaultValueInstant",
			"defaultValueInteger",
			"defaultValueMarkdown",
			"defaultValueMeta",
			"defaultValueMoney",
			"defaultValueOid",
			"defaultValueParameterDefinition",
			"defaultValuePeriod",
			"defaultValuePositiveInt",
			"defaultValueQuantity",
			"defaultValueRange",
			"defaultValueRatio",
			"defaultValueReference",
			"defaultValueRelatedArtifact",
			"defaultValueSampledData",
			"defaultValueSignature",
			"defaultValueString",
			"defaultValueTime",
			"defaultValueTiming",
			"defaultValueTriggerDefinition",
			"defaultValueUnsignedInt",
			"defaultValueUri",
			"defaultValueUrl",
			"defaultValueUsageContext",
			"defaultValueUuid",
		].filter((field) => record[field] !== undefined);
		if (defaultValue_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of defaultValueAddress, defaultValueAge, defaultValueAnnotation, defaultValueAttachment, defaultValueBase64Binary, defaultValueBoolean, defaultValueCanonical, defaultValueCode, defaultValueCodeableConcept, defaultValueCoding, defaultValueContactDetail, defaultValueContactPoint, defaultValueContributor, defaultValueCount, defaultValueDataRequirement, defaultValueDate, defaultValueDateTime, defaultValueDecimal, defaultValueDistance, defaultValueDosage, defaultValueDuration, defaultValueExpression, defaultValueHumanName, defaultValueId, defaultValueIdentifier, defaultValueInstant, defaultValueInteger, defaultValueMarkdown, defaultValueMeta, defaultValueMoney, defaultValueOid, defaultValueParameterDefinition, defaultValuePeriod, defaultValuePositiveInt, defaultValueQuantity, defaultValueRange, defaultValueRatio, defaultValueReference, defaultValueRelatedArtifact, defaultValueSampledData, defaultValueSignature, defaultValueString, defaultValueTime, defaultValueTiming, defaultValueTriggerDefinition, defaultValueUnsignedInt, defaultValueUri, defaultValueUrl, defaultValueUsageContext, defaultValueUuid may be present for defaultValue[x]",
				path: [defaultValue_x_Present[0]],
			});
		}
		const fixed_x_Present = [
			"fixedAddress",
			"fixedAge",
			"fixedAnnotation",
			"fixedAttachment",
			"fixedBase64Binary",
			"fixedBoolean",
			"fixedCanonical",
			"fixedCode",
			"fixedCodeableConcept",
			"fixedCoding",
			"fixedContactDetail",
			"fixedContactPoint",
			"fixedContributor",
			"fixedCount",
			"fixedDataRequirement",
			"fixedDate",
			"fixedDateTime",
			"fixedDecimal",
			"fixedDistance",
			"fixedDosage",
			"fixedDuration",
			"fixedExpression",
			"fixedHumanName",
			"fixedId",
			"fixedIdentifier",
			"fixedInstant",
			"fixedInteger",
			"fixedMarkdown",
			"fixedMeta",
			"fixedMoney",
			"fixedOid",
			"fixedParameterDefinition",
			"fixedPeriod",
			"fixedPositiveInt",
			"fixedQuantity",
			"fixedRange",
			"fixedRatio",
			"fixedReference",
			"fixedRelatedArtifact",
			"fixedSampledData",
			"fixedSignature",
			"fixedString",
			"fixedTime",
			"fixedTiming",
			"fixedTriggerDefinition",
			"fixedUnsignedInt",
			"fixedUri",
			"fixedUrl",
			"fixedUsageContext",
			"fixedUuid",
		].filter((field) => record[field] !== undefined);
		if (fixed_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of fixedAddress, fixedAge, fixedAnnotation, fixedAttachment, fixedBase64Binary, fixedBoolean, fixedCanonical, fixedCode, fixedCodeableConcept, fixedCoding, fixedContactDetail, fixedContactPoint, fixedContributor, fixedCount, fixedDataRequirement, fixedDate, fixedDateTime, fixedDecimal, fixedDistance, fixedDosage, fixedDuration, fixedExpression, fixedHumanName, fixedId, fixedIdentifier, fixedInstant, fixedInteger, fixedMarkdown, fixedMeta, fixedMoney, fixedOid, fixedParameterDefinition, fixedPeriod, fixedPositiveInt, fixedQuantity, fixedRange, fixedRatio, fixedReference, fixedRelatedArtifact, fixedSampledData, fixedSignature, fixedString, fixedTime, fixedTiming, fixedTriggerDefinition, fixedUnsignedInt, fixedUri, fixedUrl, fixedUsageContext, fixedUuid may be present for fixed[x]",
				path: [fixed_x_Present[0]],
			});
		}
		const maxValue_x_Present = [
			"maxValueDate",
			"maxValueDateTime",
			"maxValueDecimal",
			"maxValueInstant",
			"maxValueInteger",
			"maxValuePositiveInt",
			"maxValueQuantity",
			"maxValueTime",
			"maxValueUnsignedInt",
		].filter((field) => record[field] !== undefined);
		if (maxValue_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of maxValueDate, maxValueDateTime, maxValueDecimal, maxValueInstant, maxValueInteger, maxValuePositiveInt, maxValueQuantity, maxValueTime, maxValueUnsignedInt may be present for maxValue[x]",
				path: [maxValue_x_Present[0]],
			});
		}
		const minValue_x_Present = [
			"minValueDate",
			"minValueDateTime",
			"minValueDecimal",
			"minValueInstant",
			"minValueInteger",
			"minValuePositiveInt",
			"minValueQuantity",
			"minValueTime",
			"minValueUnsignedInt",
		].filter((field) => record[field] !== undefined);
		if (minValue_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of minValueDate, minValueDateTime, minValueDecimal, minValueInstant, minValueInteger, minValuePositiveInt, minValueQuantity, minValueTime, minValueUnsignedInt may be present for minValue[x]",
				path: [minValue_x_Present[0]],
			});
		}
		const pattern_x_Present = [
			"patternAddress",
			"patternAge",
			"patternAnnotation",
			"patternAttachment",
			"patternBase64Binary",
			"patternBoolean",
			"patternCanonical",
			"patternCode",
			"patternCodeableConcept",
			"patternCoding",
			"patternContactDetail",
			"patternContactPoint",
			"patternContributor",
			"patternCount",
			"patternDataRequirement",
			"patternDate",
			"patternDateTime",
			"patternDecimal",
			"patternDistance",
			"patternDosage",
			"patternDuration",
			"patternExpression",
			"patternHumanName",
			"patternId",
			"patternIdentifier",
			"patternInstant",
			"patternInteger",
			"patternMarkdown",
			"patternMeta",
			"patternMoney",
			"patternOid",
			"patternParameterDefinition",
			"patternPeriod",
			"patternPositiveInt",
			"patternQuantity",
			"patternRange",
			"patternRatio",
			"patternReference",
			"patternRelatedArtifact",
			"patternSampledData",
			"patternSignature",
			"patternString",
			"patternTime",
			"patternTiming",
			"patternTriggerDefinition",
			"patternUnsignedInt",
			"patternUri",
			"patternUrl",
			"patternUsageContext",
			"patternUuid",
		].filter((field) => record[field] !== undefined);
		if (pattern_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of patternAddress, patternAge, patternAnnotation, patternAttachment, patternBase64Binary, patternBoolean, patternCanonical, patternCode, patternCodeableConcept, patternCoding, patternContactDetail, patternContactPoint, patternContributor, patternCount, patternDataRequirement, patternDate, patternDateTime, patternDecimal, patternDistance, patternDosage, patternDuration, patternExpression, patternHumanName, patternId, patternIdentifier, patternInstant, patternInteger, patternMarkdown, patternMeta, patternMoney, patternOid, patternParameterDefinition, patternPeriod, patternPositiveInt, patternQuantity, patternRange, patternRatio, patternReference, patternRelatedArtifact, patternSampledData, patternSignature, patternString, patternTime, patternTiming, patternTriggerDefinition, patternUnsignedInt, patternUri, patternUrl, patternUsageContext, patternUuid may be present for pattern[x]",
				path: [pattern_x_Present[0]],
			});
		}
	});

export type ElementDefinition = z.output<typeof ElementDefinition>;
