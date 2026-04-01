// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

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
	_alias: z.lazy(getElementSchema).optional().describe("Extensions for alias"),
	_comment: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for comment"),
	_condition: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for condition"),
	_contentReference: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for contentReference"),
	_defaultValueBase64Binary: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for defaultValueBase64Binary"),
	_defaultValueBoolean: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for defaultValueBoolean"),
	_defaultValueCanonical: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for defaultValueCanonical"),
	_defaultValueCode: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for defaultValueCode"),
	_defaultValueDate: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for defaultValueDate"),
	_defaultValueDateTime: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for defaultValueDateTime"),
	_defaultValueDecimal: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for defaultValueDecimal"),
	_defaultValueId: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for defaultValueId"),
	_defaultValueInstant: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for defaultValueInstant"),
	_defaultValueInteger: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for defaultValueInteger"),
	_defaultValueMarkdown: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for defaultValueMarkdown"),
	_defaultValueOid: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for defaultValueOid"),
	_defaultValuePositiveInt: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for defaultValuePositiveInt"),
	_defaultValueString: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for defaultValueString"),
	_defaultValueTime: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for defaultValueTime"),
	_defaultValueUnsignedInt: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for defaultValueUnsignedInt"),
	_defaultValueUri: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for defaultValueUri"),
	_defaultValueUrl: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for defaultValueUrl"),
	_defaultValueUuid: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for defaultValueUuid"),
	_definition: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for definition"),
	_fixedBase64Binary: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for fixedBase64Binary"),
	_fixedBoolean: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for fixedBoolean"),
	_fixedCanonical: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for fixedCanonical"),
	_fixedCode: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for fixedCode"),
	_fixedDate: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for fixedDate"),
	_fixedDateTime: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for fixedDateTime"),
	_fixedDecimal: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for fixedDecimal"),
	_fixedId: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for fixedId"),
	_fixedInstant: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for fixedInstant"),
	_fixedInteger: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for fixedInteger"),
	_fixedMarkdown: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for fixedMarkdown"),
	_fixedOid: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for fixedOid"),
	_fixedPositiveInt: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for fixedPositiveInt"),
	_fixedString: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for fixedString"),
	_fixedTime: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for fixedTime"),
	_fixedUnsignedInt: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for fixedUnsignedInt"),
	_fixedUri: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for fixedUri"),
	_fixedUrl: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for fixedUrl"),
	_fixedUuid: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for fixedUuid"),
	_isModifier: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for isModifier"),
	_isModifierReason: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for isModifierReason"),
	_isSummary: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for isSummary"),
	_label: z.lazy(getElementSchema).optional().describe("Extensions for label"),
	_max: z.lazy(getElementSchema).optional().describe("Extensions for max"),
	_maxLength: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for maxLength"),
	_maxValueDate: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for maxValueDate"),
	_maxValueDateTime: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for maxValueDateTime"),
	_maxValueDecimal: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for maxValueDecimal"),
	_maxValueInstant: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for maxValueInstant"),
	_maxValueInteger: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for maxValueInteger"),
	_maxValuePositiveInt: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for maxValuePositiveInt"),
	_maxValueTime: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for maxValueTime"),
	_maxValueUnsignedInt: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for maxValueUnsignedInt"),
	_meaningWhenMissing: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for meaningWhenMissing"),
	_min: z.lazy(getElementSchema).optional().describe("Extensions for min"),
	_minValueDate: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for minValueDate"),
	_minValueDateTime: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for minValueDateTime"),
	_minValueDecimal: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for minValueDecimal"),
	_minValueInstant: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for minValueInstant"),
	_minValueInteger: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for minValueInteger"),
	_minValuePositiveInt: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for minValuePositiveInt"),
	_minValueTime: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for minValueTime"),
	_minValueUnsignedInt: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for minValueUnsignedInt"),
	_mustSupport: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for mustSupport"),
	_orderMeaning: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for orderMeaning"),
	_path: z.lazy(getElementSchema).optional().describe("Extensions for path"),
	_patternBase64Binary: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for patternBase64Binary"),
	_patternBoolean: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for patternBoolean"),
	_patternCanonical: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for patternCanonical"),
	_patternCode: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for patternCode"),
	_patternDate: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for patternDate"),
	_patternDateTime: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for patternDateTime"),
	_patternDecimal: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for patternDecimal"),
	_patternId: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for patternId"),
	_patternInstant: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for patternInstant"),
	_patternInteger: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for patternInteger"),
	_patternMarkdown: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for patternMarkdown"),
	_patternOid: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for patternOid"),
	_patternPositiveInt: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for patternPositiveInt"),
	_patternString: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for patternString"),
	_patternTime: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for patternTime"),
	_patternUnsignedInt: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for patternUnsignedInt"),
	_patternUri: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for patternUri"),
	_patternUrl: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for patternUrl"),
	_patternUuid: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for patternUuid"),
	_representation: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for representation"),
	_requirements: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for requirements"),
	_short: z.lazy(getElementSchema).optional().describe("Extensions for short"),
	_sliceIsConstraining: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for sliceIsConstraining"),
	_sliceName: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for sliceName"),
	alias: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.array()
		.optional()
		.describe(
			"Identifies additional names by which this element might also be known.",
		),
	base: z
		.lazy(getElementDefinition_BaseSchema)
		.optional()
		.describe(
			"Information about the base definition of the element, provided to make it unnecessary for tools to trace the deviation of the element through the derived and related profiles. When the element definition is not the original definition of an element - i.g. either in a constraint on another type, or for elements from a super type in a snap shot - then the information in provided in the element definition may be different to the base definition. On the original definition of the element, it will be same.",
		),
	binding: z
		.lazy(getElementDefinition_BindingSchema)
		.optional()
		.describe(
			"Binds to a value set if this element is coded (code, Coding, CodeableConcept, Quantity), or the data types (string, uri).",
		),
	code: z
		.lazy(getCodingSchema)
		.array()
		.optional()
		.describe(
			"A code that has the same meaning as the element in a particular terminology.",
		),
	comment: z
		.string()
		.optional()
		.describe(
			"Explanatory notes and implementation guidance about the data element, including notes about how to use the data properly, exceptions to proper use, etc. (Note: The text you are reading is specified in ElementDefinition.comment).",
		),
	condition: fhirId()
		.array()
		.optional()
		.describe(
			"A reference to an invariant that may make additional statements about the cardinality or value in the instance.",
		),
	constraint: z
		.lazy(getElementDefinition_ConstraintSchema)
		.array()
		.optional()
		.describe(
			"Formal constraints such as co-occurrence and other constraints that can be computationally evaluated within the context of the instance.",
		),
	contentReference: z
		.string()
		.regex(/\S*/)
		.optional()
		.describe(
			"Identifies an element defined elsewhere in the definition whose content rules should be applied to the current element. ContentReferences bring across all the rules that are in the ElementDefinition for the element, including definitions, cardinality constraints, bindings, invariants etc.",
		),
	defaultValueAddress: z
		.lazy(getAddressSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueAge: z
		.lazy(getAgeSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueAnnotation: z
		.lazy(getAnnotationSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueAttachment: z
		.lazy(getAttachmentSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueBase64Binary: z
		.string()
		.regex(/(\s*([0-9a-zA-Z+/=]){4}\s*)+/)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueBoolean: z
		.boolean()
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueCanonical: z
		.string()
		.regex(/\S*/)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueCode: z
		.string()
		.regex(/[^\s]+(\s[^\s]+)*/)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueCodeableConcept: z
		.lazy(getCodeableConceptSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueCoding: z
		.lazy(getCodingSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueContactDetail: z
		.lazy(getContactDetailSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueContactPoint: z
		.lazy(getContactPointSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueContributor: z
		.lazy(getContributorSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueCount: z
		.lazy(getCountSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueDataRequirement: z
		.lazy(getDataRequirementSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueDate: fhirDate()
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueDateTime: fhirDateTime()
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueDecimal: z
		.number()
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueDistance: z
		.lazy(getDistanceSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueDosage: z
		.lazy(getDosageSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueDuration: z
		.lazy(getDurationSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueExpression: z
		.unknown()
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueHumanName: z
		.lazy(getHumanNameSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueId: fhirId()
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueIdentifier: z
		.lazy(getIdentifierSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueInstant: fhirInstant()
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueInteger: z
		.number()
		.int()
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueMarkdown: z
		.string()
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueMeta: z
		.lazy(getMetaSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueMoney: z
		.lazy(getMoneySchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueOid: z
		.string()
		.regex(/urn:oid:[0-2](\.(0|[1-9][0-9]*))+/)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueParameterDefinition: z
		.lazy(getParameterDefinitionSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValuePeriod: z
		.lazy(getPeriodSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValuePositiveInt: z
		.number()
		.int()
		.positive()
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueQuantity: z
		.lazy(getQuantitySchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueRange: z
		.lazy(getRangeSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueRatio: z
		.lazy(getRatioSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueReference: z
		.lazy(getReferenceSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueRelatedArtifact: z
		.lazy(getRelatedArtifactSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueSampledData: z
		.lazy(getSampledDataSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueSignature: z
		.lazy(getSignatureSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueString: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueTime: fhirTime()
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueTiming: z
		.lazy(getTimingSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueTriggerDefinition: z
		.lazy(getTriggerDefinitionSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueUnsignedInt: z
		.number()
		.int()
		.nonnegative()
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueUri: z
		.string()
		.regex(/\S*/)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueUrl: z
		.string()
		.regex(/\S*/)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueUsageContext: z
		.lazy(getUsageContextSchema)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	defaultValueUuid: z
		.string()
		.regex(
			/urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
		)
		.optional()
		.describe(
			"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
		),
	definition: z
		.string()
		.optional()
		.describe(
			"Provides a complete explanation of the meaning of the data element for human readability.  For the case of elements derived from existing elements (e.g. constraints), the definition SHALL be consistent with the base definition, but convey the meaning of the element in the particular context of use of the resource. (Note: The text you are reading is specified in ElementDefinition.definition).",
		),
	example: z
		.lazy(getElementDefinition_ExampleSchema)
		.array()
		.optional()
		.describe(
			"A sample value for this element demonstrating the type of information that would typically be found in the element.",
		),
	fixedAddress: z
		.lazy(getAddressSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedAge: z
		.lazy(getAgeSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedAnnotation: z
		.lazy(getAnnotationSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedAttachment: z
		.lazy(getAttachmentSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedBase64Binary: z
		.string()
		.regex(/(\s*([0-9a-zA-Z+/=]){4}\s*)+/)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedBoolean: z
		.boolean()
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedCanonical: z
		.string()
		.regex(/\S*/)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedCode: z
		.string()
		.regex(/[^\s]+(\s[^\s]+)*/)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedCodeableConcept: z
		.lazy(getCodeableConceptSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedCoding: z
		.lazy(getCodingSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedContactDetail: z
		.lazy(getContactDetailSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedContactPoint: z
		.lazy(getContactPointSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedContributor: z
		.lazy(getContributorSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedCount: z
		.lazy(getCountSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedDataRequirement: z
		.lazy(getDataRequirementSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedDate: fhirDate()
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedDateTime: fhirDateTime()
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedDecimal: z
		.number()
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedDistance: z
		.lazy(getDistanceSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedDosage: z
		.lazy(getDosageSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedDuration: z
		.lazy(getDurationSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedExpression: z
		.unknown()
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedHumanName: z
		.lazy(getHumanNameSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedId: fhirId()
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedIdentifier: z
		.lazy(getIdentifierSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedInstant: fhirInstant()
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedInteger: z
		.number()
		.int()
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedMarkdown: z
		.string()
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedMeta: z
		.lazy(getMetaSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedMoney: z
		.lazy(getMoneySchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedOid: z
		.string()
		.regex(/urn:oid:[0-2](\.(0|[1-9][0-9]*))+/)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedParameterDefinition: z
		.lazy(getParameterDefinitionSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedPeriod: z
		.lazy(getPeriodSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedPositiveInt: z
		.number()
		.int()
		.positive()
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedQuantity: z
		.lazy(getQuantitySchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedRange: z
		.lazy(getRangeSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedRatio: z
		.lazy(getRatioSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedReference: z
		.lazy(getReferenceSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedRelatedArtifact: z
		.lazy(getRelatedArtifactSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedSampledData: z
		.lazy(getSampledDataSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedSignature: z
		.lazy(getSignatureSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedString: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedTime: fhirTime()
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedTiming: z
		.lazy(getTimingSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedTriggerDefinition: z
		.lazy(getTriggerDefinitionSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedUnsignedInt: z
		.number()
		.int()
		.nonnegative()
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedUri: z
		.string()
		.regex(/\S*/)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedUrl: z
		.string()
		.regex(/\S*/)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedUsageContext: z
		.lazy(getUsageContextSchema)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	fixedUuid: z
		.string()
		.regex(
			/urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
		)
		.optional()
		.describe(
			"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
		),
	isModifier: z
		.boolean()
		.optional()
		.describe(
			"If true, the value of this element affects the interpretation of the element or resource that contains it, and the value of the element cannot be ignored. Typically, this is used for status, negation and qualification codes. The effect of this is that the element cannot be ignored by systems: they SHALL either recognize the element and process it, and/or a pre-determination has been made that it is not relevant to their particular system.",
		),
	isModifierReason: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional()
		.describe(
			"Explains how that element affects the interpretation of the resource or element that contains it.",
		),
	isSummary: z
		.boolean()
		.optional()
		.describe(
			"Whether the element should be included if a client requests a search with the parameter _summary=true.",
		),
	label: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional()
		.describe(
			"A single preferred label which is the text to display beside the element indicating its meaning or to use to prompt for the element in a user display or form.",
		),
	mapping: z
		.lazy(getElementDefinition_MappingSchema)
		.array()
		.optional()
		.describe(
			"Identifies a concept from an external specification that roughly corresponds to this element.",
		),
	max: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional()
		.describe(
			"The maximum number of times this element is permitted to appear in the instance.",
		),
	maxLength: z
		.number()
		.int()
		.optional()
		.describe(
			"Indicates the maximum length in characters that is permitted to be present in conformant instances and which is expected to be supported by conformant consumers that support the element.",
		),
	maxValueDate: fhirDate()
		.optional()
		.describe(
			"The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
		),
	maxValueDateTime: fhirDateTime()
		.optional()
		.describe(
			"The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
		),
	maxValueDecimal: z
		.number()
		.optional()
		.describe(
			"The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
		),
	maxValueInstant: fhirInstant()
		.optional()
		.describe(
			"The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
		),
	maxValueInteger: z
		.number()
		.int()
		.optional()
		.describe(
			"The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
		),
	maxValuePositiveInt: z
		.number()
		.int()
		.positive()
		.optional()
		.describe(
			"The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
		),
	maxValueQuantity: z
		.lazy(getQuantitySchema)
		.optional()
		.describe(
			"The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
		),
	maxValueTime: fhirTime()
		.optional()
		.describe(
			"The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
		),
	maxValueUnsignedInt: z
		.number()
		.int()
		.nonnegative()
		.optional()
		.describe(
			"The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
		),
	meaningWhenMissing: z
		.string()
		.optional()
		.describe(
			"The Implicit meaning that is to be understood when this element is missing (e.g. 'when this element is missing, the period is ongoing').",
		),
	min: z
		.number()
		.int()
		.nonnegative()
		.optional()
		.describe(
			"The minimum number of times this element SHALL appear in the instance.",
		),
	minValueDate: fhirDate()
		.optional()
		.describe(
			"The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
		),
	minValueDateTime: fhirDateTime()
		.optional()
		.describe(
			"The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
		),
	minValueDecimal: z
		.number()
		.optional()
		.describe(
			"The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
		),
	minValueInstant: fhirInstant()
		.optional()
		.describe(
			"The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
		),
	minValueInteger: z
		.number()
		.int()
		.optional()
		.describe(
			"The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
		),
	minValuePositiveInt: z
		.number()
		.int()
		.positive()
		.optional()
		.describe(
			"The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
		),
	minValueQuantity: z
		.lazy(getQuantitySchema)
		.optional()
		.describe(
			"The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
		),
	minValueTime: fhirTime()
		.optional()
		.describe(
			"The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
		),
	minValueUnsignedInt: z
		.number()
		.int()
		.nonnegative()
		.optional()
		.describe(
			"The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
		),
	mustSupport: z
		.boolean()
		.optional()
		.describe(
			'If true, implementations that produce or consume resources SHALL provide "support" for the element in some meaningful way.  If false, the element may be ignored and not supported. If false, whether to populate or use the data element in any way is at the discretion of the implementation.',
		),
	orderMeaning: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional()
		.describe(
			"If present, indicates that the order of the repeating element has meaning and describes what that meaning is.  If absent, it means that the order of the element has no meaning.",
		),
	path: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.describe(
			'The path identifies the element and is expressed as a "."-separated list of ancestor elements, beginning with the name of the resource or extension.',
		),
	patternAddress: z
		.lazy(getAddressSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternAge: z
		.lazy(getAgeSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternAnnotation: z
		.lazy(getAnnotationSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternAttachment: z
		.lazy(getAttachmentSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternBase64Binary: z
		.string()
		.regex(/(\s*([0-9a-zA-Z+/=]){4}\s*)+/)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternBoolean: z
		.boolean()
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternCanonical: z
		.string()
		.regex(/\S*/)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternCode: z
		.string()
		.regex(/[^\s]+(\s[^\s]+)*/)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternCodeableConcept: z
		.lazy(getCodeableConceptSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternCoding: z
		.lazy(getCodingSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternContactDetail: z
		.lazy(getContactDetailSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternContactPoint: z
		.lazy(getContactPointSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternContributor: z
		.lazy(getContributorSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternCount: z
		.lazy(getCountSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternDataRequirement: z
		.lazy(getDataRequirementSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternDate: fhirDate()
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternDateTime: fhirDateTime()
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternDecimal: z
		.number()
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternDistance: z
		.lazy(getDistanceSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternDosage: z
		.lazy(getDosageSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternDuration: z
		.lazy(getDurationSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternExpression: z
		.unknown()
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternHumanName: z
		.lazy(getHumanNameSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternId: fhirId()
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternIdentifier: z
		.lazy(getIdentifierSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternInstant: fhirInstant()
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternInteger: z
		.number()
		.int()
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternMarkdown: z
		.string()
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternMeta: z
		.lazy(getMetaSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternMoney: z
		.lazy(getMoneySchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternOid: z
		.string()
		.regex(/urn:oid:[0-2](\.(0|[1-9][0-9]*))+/)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternParameterDefinition: z
		.lazy(getParameterDefinitionSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternPeriod: z
		.lazy(getPeriodSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternPositiveInt: z
		.number()
		.int()
		.positive()
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternQuantity: z
		.lazy(getQuantitySchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternRange: z
		.lazy(getRangeSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternRatio: z
		.lazy(getRatioSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternReference: z
		.lazy(getReferenceSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternRelatedArtifact: z
		.lazy(getRelatedArtifactSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternSampledData: z
		.lazy(getSampledDataSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternSignature: z
		.lazy(getSignatureSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternString: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternTime: fhirTime()
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternTiming: z
		.lazy(getTimingSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternTriggerDefinition: z
		.lazy(getTriggerDefinitionSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternUnsignedInt: z
		.number()
		.int()
		.nonnegative()
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternUri: z
		.string()
		.regex(/\S*/)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternUrl: z
		.string()
		.regex(/\S*/)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternUsageContext: z
		.lazy(getUsageContextSchema)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	patternUuid: z
		.string()
		.regex(
			/urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
		)
		.optional()
		.describe(
			"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
		),
	representation: z
		.enum(["cdaText", "typeAttr", "xhtml", "xmlAttr", "xmlText"])
		.array()
		.optional()
		.describe(
			"Codes that define how this element is represented in instances, when the deviation varies from the normal case.",
		),
	requirements: z
		.string()
		.optional()
		.describe(
			"This element is for traceability of why the element was created and why the constraints exist as they do. This may be used to point to source materials or specifications that drove the structure of this element.",
		),
	short: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional()
		.describe(
			"A concise description of what this element means (e.g. for use in autogenerated summaries).",
		),
	sliceIsConstraining: z
		.boolean()
		.optional()
		.describe(
			"If true, indicates that this slice definition is constraining a slice definition with the same name in an inherited profile. If false, the slice is not overriding any slice in an inherited profile. If missing, the slice might or might not be overriding a slice in an inherited profile, depending on the sliceName.",
		),
	sliceName: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional()
		.describe(
			"The name of this element definition slice, when slicing is working. The name must be a token with no dots or spaces. This is a unique name referring to a specific set of constraints applied to this element, used to provide a name to different slices of the same element.",
		),
	slicing: z
		.lazy(getElementDefinition_SlicingSchema)
		.optional()
		.describe(
			"Indicates that the element is sliced into a set of alternative definitions (i.e. in a structure definition, there are multiple different constraints on a single element in the base resource). Slicing can be used in any resource that has cardinality ..* on the base resource, or any resource with a choice of types. The set of slices is any elements that come after this in the element sequence that have the same path, until a shorter path occurs (the shorter path terminates the set).",
		),
	type: z
		.lazy(getElementDefinition_TypeSchema)
		.array()
		.optional()
		.describe(
			"The data type or resource that the value of this element is permitted to be.",
		),
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
