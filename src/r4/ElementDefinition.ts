// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { Address } from "./Address";
import type { Age } from "./Age";
import type { Annotation } from "./Annotation";
import type { Attachment } from "./Attachment";
import type { BackboneElement } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import type { Coding } from "./Coding";
import type { ContactDetail } from "./ContactDetail";
import type { ContactPoint } from "./ContactPoint";
import type { Contributor } from "./Contributor";
import type { Count } from "./Count";
import type { DataRequirement } from "./DataRequirement";
import type { Distance } from "./Distance";
import type { Dosage } from "./Dosage";
import type { Duration } from "./Duration";
import type { Element } from "./Element";
import type { ElementDefinition_Base } from "./ElementDefinition_Base";
import type { ElementDefinition_Binding } from "./ElementDefinition_Binding";
import type { ElementDefinition_Constraint } from "./ElementDefinition_Constraint";
import type { ElementDefinition_Example } from "./ElementDefinition_Example";
import type { ElementDefinition_Mapping } from "./ElementDefinition_Mapping";
import type { ElementDefinition_Slicing } from "./ElementDefinition_Slicing";
import type { ElementDefinition_Type } from "./ElementDefinition_Type";
import type { HumanName } from "./HumanName";
import type { Identifier } from "./Identifier";
import type { Meta } from "./Meta";
import type { Money } from "./Money";
import type { ParameterDefinition } from "./ParameterDefinition";
import type { Period } from "./Period";
import type { Quantity } from "./Quantity";
import type { Range } from "./Range";
import type { Ratio } from "./Ratio";
import type { Reference } from "./Reference";
import type { RelatedArtifact } from "./RelatedArtifact";
import type { SampledData } from "./SampledData";
import type { Signature } from "./Signature";
import type { Timing } from "./Timing";
import type { TriggerDefinition } from "./TriggerDefinition";
import type { UsageContext } from "./UsageContext";
import {
	fhirDate,
	fhirDateTime,
	fhirId,
	fhirInstant,
	fhirTime,
} from "../shared/fhir-primitives";
import { AddressSchemaInternal } from "./Address";
import { AgeSchemaInternal } from "./Age";
import { AnnotationSchemaInternal } from "./Annotation";
import { AttachmentSchemaInternal } from "./Attachment";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import { CodingSchemaInternal } from "./Coding";
import { ContactDetailSchemaInternal } from "./ContactDetail";
import { ContactPointSchemaInternal } from "./ContactPoint";
import { ContributorSchemaInternal } from "./Contributor";
import { CountSchemaInternal } from "./Count";
import { DataRequirementSchemaInternal } from "./DataRequirement";
import { DistanceSchemaInternal } from "./Distance";
import { DosageSchemaInternal } from "./Dosage";
import { DurationSchemaInternal } from "./Duration";
import { ElementSchemaInternal } from "./Element";
import { ElementDefinition_BaseSchemaInternal } from "./ElementDefinition_Base";
import { ElementDefinition_BindingSchemaInternal } from "./ElementDefinition_Binding";
import { ElementDefinition_ConstraintSchemaInternal } from "./ElementDefinition_Constraint";
import { ElementDefinition_ExampleSchemaInternal } from "./ElementDefinition_Example";
import { ElementDefinition_MappingSchemaInternal } from "./ElementDefinition_Mapping";
import { ElementDefinition_SlicingSchemaInternal } from "./ElementDefinition_Slicing";
import { ElementDefinition_TypeSchemaInternal } from "./ElementDefinition_Type";
import { HumanNameSchemaInternal } from "./HumanName";
import { IdentifierSchemaInternal } from "./Identifier";
import { MetaSchemaInternal } from "./Meta";
import { MoneySchemaInternal } from "./Money";
import { ParameterDefinitionSchemaInternal } from "./ParameterDefinition";
import { PeriodSchemaInternal } from "./Period";
import { QuantitySchemaInternal } from "./Quantity";
import { RangeSchemaInternal } from "./Range";
import { RatioSchemaInternal } from "./Ratio";
import { ReferenceSchemaInternal } from "./Reference";
import { RelatedArtifactSchemaInternal } from "./RelatedArtifact";
import { SampledDataSchemaInternal } from "./SampledData";
import { SignatureSchemaInternal } from "./Signature";
import { TimingSchemaInternal } from "./Timing";
import { TriggerDefinitionSchemaInternal } from "./TriggerDefinition";
import { UsageContextSchemaInternal } from "./UsageContext";

export interface ElementDefinition extends BackboneElement {
	alias?: Array<string>;
	_alias?: Element;
	base?: ElementDefinition_Base;
	binding?: ElementDefinition_Binding;
	code?: Array<Coding>;
	comment?: string;
	_comment?: Element;
	condition?: Array<string>;
	_condition?: Element;
	constraint?: Array<ElementDefinition_Constraint>;
	contentReference?: string;
	_contentReference?: Element;
	defaultValueAddress?: Address;
	defaultValueAge?: Age;
	defaultValueAnnotation?: Annotation;
	defaultValueAttachment?: Attachment;
	defaultValueBase64Binary?: string;
	_defaultValueBase64Binary?: Element;
	defaultValueBoolean?: boolean;
	_defaultValueBoolean?: Element;
	defaultValueCanonical?: string;
	_defaultValueCanonical?: Element;
	defaultValueCode?: string;
	_defaultValueCode?: Element;
	defaultValueCodeableConcept?: CodeableConcept;
	defaultValueCoding?: Coding;
	defaultValueContactDetail?: ContactDetail;
	defaultValueContactPoint?: ContactPoint;
	defaultValueContributor?: Contributor;
	defaultValueCount?: Count;
	defaultValueDataRequirement?: DataRequirement;
	defaultValueDate?: string;
	_defaultValueDate?: Element;
	defaultValueDateTime?: string;
	_defaultValueDateTime?: Element;
	defaultValueDecimal?: number;
	_defaultValueDecimal?: Element;
	defaultValueDistance?: Distance;
	defaultValueDosage?: Dosage;
	defaultValueDuration?: Duration;
	defaultValueExpression?: unknown;
	defaultValueHumanName?: HumanName;
	defaultValueId?: string;
	_defaultValueId?: Element;
	defaultValueIdentifier?: Identifier;
	defaultValueInstant?: string;
	_defaultValueInstant?: Element;
	defaultValueInteger?: number;
	_defaultValueInteger?: Element;
	defaultValueMarkdown?: string;
	_defaultValueMarkdown?: Element;
	defaultValueMeta?: Meta;
	defaultValueMoney?: Money;
	defaultValueOid?: string;
	_defaultValueOid?: Element;
	defaultValueParameterDefinition?: ParameterDefinition;
	defaultValuePeriod?: Period;
	defaultValuePositiveInt?: number;
	_defaultValuePositiveInt?: Element;
	defaultValueQuantity?: Quantity;
	defaultValueRange?: Range;
	defaultValueRatio?: Ratio;
	defaultValueReference?: Reference;
	defaultValueRelatedArtifact?: RelatedArtifact;
	defaultValueSampledData?: SampledData;
	defaultValueSignature?: Signature;
	defaultValueString?: string;
	_defaultValueString?: Element;
	defaultValueTime?: string;
	_defaultValueTime?: Element;
	defaultValueTiming?: Timing;
	defaultValueTriggerDefinition?: TriggerDefinition;
	defaultValueUnsignedInt?: number;
	_defaultValueUnsignedInt?: Element;
	defaultValueUri?: string;
	_defaultValueUri?: Element;
	defaultValueUrl?: string;
	_defaultValueUrl?: Element;
	defaultValueUsageContext?: UsageContext;
	defaultValueUuid?: string;
	_defaultValueUuid?: Element;
	definition?: string;
	_definition?: Element;
	example?: Array<ElementDefinition_Example>;
	fixedAddress?: Address;
	fixedAge?: Age;
	fixedAnnotation?: Annotation;
	fixedAttachment?: Attachment;
	fixedBase64Binary?: string;
	_fixedBase64Binary?: Element;
	fixedBoolean?: boolean;
	_fixedBoolean?: Element;
	fixedCanonical?: string;
	_fixedCanonical?: Element;
	fixedCode?: string;
	_fixedCode?: Element;
	fixedCodeableConcept?: CodeableConcept;
	fixedCoding?: Coding;
	fixedContactDetail?: ContactDetail;
	fixedContactPoint?: ContactPoint;
	fixedContributor?: Contributor;
	fixedCount?: Count;
	fixedDataRequirement?: DataRequirement;
	fixedDate?: string;
	_fixedDate?: Element;
	fixedDateTime?: string;
	_fixedDateTime?: Element;
	fixedDecimal?: number;
	_fixedDecimal?: Element;
	fixedDistance?: Distance;
	fixedDosage?: Dosage;
	fixedDuration?: Duration;
	fixedExpression?: unknown;
	fixedHumanName?: HumanName;
	fixedId?: string;
	_fixedId?: Element;
	fixedIdentifier?: Identifier;
	fixedInstant?: string;
	_fixedInstant?: Element;
	fixedInteger?: number;
	_fixedInteger?: Element;
	fixedMarkdown?: string;
	_fixedMarkdown?: Element;
	fixedMeta?: Meta;
	fixedMoney?: Money;
	fixedOid?: string;
	_fixedOid?: Element;
	fixedParameterDefinition?: ParameterDefinition;
	fixedPeriod?: Period;
	fixedPositiveInt?: number;
	_fixedPositiveInt?: Element;
	fixedQuantity?: Quantity;
	fixedRange?: Range;
	fixedRatio?: Ratio;
	fixedReference?: Reference;
	fixedRelatedArtifact?: RelatedArtifact;
	fixedSampledData?: SampledData;
	fixedSignature?: Signature;
	fixedString?: string;
	_fixedString?: Element;
	fixedTime?: string;
	_fixedTime?: Element;
	fixedTiming?: Timing;
	fixedTriggerDefinition?: TriggerDefinition;
	fixedUnsignedInt?: number;
	_fixedUnsignedInt?: Element;
	fixedUri?: string;
	_fixedUri?: Element;
	fixedUrl?: string;
	_fixedUrl?: Element;
	fixedUsageContext?: UsageContext;
	fixedUuid?: string;
	_fixedUuid?: Element;
	isModifier?: boolean;
	_isModifier?: Element;
	isModifierReason?: string;
	_isModifierReason?: Element;
	isSummary?: boolean;
	_isSummary?: Element;
	label?: string;
	_label?: Element;
	mapping?: Array<ElementDefinition_Mapping>;
	max?: string;
	_max?: Element;
	maxLength?: number;
	_maxLength?: Element;
	maxValueDate?: string;
	_maxValueDate?: Element;
	maxValueDateTime?: string;
	_maxValueDateTime?: Element;
	maxValueDecimal?: number;
	_maxValueDecimal?: Element;
	maxValueInstant?: string;
	_maxValueInstant?: Element;
	maxValueInteger?: number;
	_maxValueInteger?: Element;
	maxValuePositiveInt?: number;
	_maxValuePositiveInt?: Element;
	maxValueQuantity?: Quantity;
	maxValueTime?: string;
	_maxValueTime?: Element;
	maxValueUnsignedInt?: number;
	_maxValueUnsignedInt?: Element;
	meaningWhenMissing?: string;
	_meaningWhenMissing?: Element;
	min?: number;
	_min?: Element;
	minValueDate?: string;
	_minValueDate?: Element;
	minValueDateTime?: string;
	_minValueDateTime?: Element;
	minValueDecimal?: number;
	_minValueDecimal?: Element;
	minValueInstant?: string;
	_minValueInstant?: Element;
	minValueInteger?: number;
	_minValueInteger?: Element;
	minValuePositiveInt?: number;
	_minValuePositiveInt?: Element;
	minValueQuantity?: Quantity;
	minValueTime?: string;
	_minValueTime?: Element;
	minValueUnsignedInt?: number;
	_minValueUnsignedInt?: Element;
	mustSupport?: boolean;
	_mustSupport?: Element;
	orderMeaning?: string;
	_orderMeaning?: Element;
	path: string;
	_path?: Element;
	patternAddress?: Address;
	patternAge?: Age;
	patternAnnotation?: Annotation;
	patternAttachment?: Attachment;
	patternBase64Binary?: string;
	_patternBase64Binary?: Element;
	patternBoolean?: boolean;
	_patternBoolean?: Element;
	patternCanonical?: string;
	_patternCanonical?: Element;
	patternCode?: string;
	_patternCode?: Element;
	patternCodeableConcept?: CodeableConcept;
	patternCoding?: Coding;
	patternContactDetail?: ContactDetail;
	patternContactPoint?: ContactPoint;
	patternContributor?: Contributor;
	patternCount?: Count;
	patternDataRequirement?: DataRequirement;
	patternDate?: string;
	_patternDate?: Element;
	patternDateTime?: string;
	_patternDateTime?: Element;
	patternDecimal?: number;
	_patternDecimal?: Element;
	patternDistance?: Distance;
	patternDosage?: Dosage;
	patternDuration?: Duration;
	patternExpression?: unknown;
	patternHumanName?: HumanName;
	patternId?: string;
	_patternId?: Element;
	patternIdentifier?: Identifier;
	patternInstant?: string;
	_patternInstant?: Element;
	patternInteger?: number;
	_patternInteger?: Element;
	patternMarkdown?: string;
	_patternMarkdown?: Element;
	patternMeta?: Meta;
	patternMoney?: Money;
	patternOid?: string;
	_patternOid?: Element;
	patternParameterDefinition?: ParameterDefinition;
	patternPeriod?: Period;
	patternPositiveInt?: number;
	_patternPositiveInt?: Element;
	patternQuantity?: Quantity;
	patternRange?: Range;
	patternRatio?: Ratio;
	patternReference?: Reference;
	patternRelatedArtifact?: RelatedArtifact;
	patternSampledData?: SampledData;
	patternSignature?: Signature;
	patternString?: string;
	_patternString?: Element;
	patternTime?: string;
	_patternTime?: Element;
	patternTiming?: Timing;
	patternTriggerDefinition?: TriggerDefinition;
	patternUnsignedInt?: number;
	_patternUnsignedInt?: Element;
	patternUri?: string;
	_patternUri?: Element;
	patternUrl?: string;
	_patternUrl?: Element;
	patternUsageContext?: UsageContext;
	patternUuid?: string;
	_patternUuid?: Element;
	representation?: Array<
		"cdaText" | "typeAttr" | "xhtml" | "xmlAttr" | "xmlText"
	>;
	_representation?: Element;
	requirements?: string;
	_requirements?: Element;
	short?: string;
	_short?: Element;
	sliceIsConstraining?: boolean;
	_sliceIsConstraining?: Element;
	sliceName?: string;
	_sliceName?: Element;
	slicing?: ElementDefinition_Slicing;
	type?: Array<ElementDefinition_Type>;
}

const getAddressSchema = (): z.ZodType<Address> => AddressSchemaInternal;
const getAgeSchema = (): z.ZodType<Age> => AgeSchemaInternal;
const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal;
const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal;
const getCodingSchema = (): z.ZodType<Coding> => CodingSchemaInternal;
const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
	ContactDetailSchemaInternal;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
	ContactPointSchemaInternal;
const getContributorSchema = (): z.ZodType<Contributor> =>
	ContributorSchemaInternal;
const getCountSchema = (): z.ZodType<Count> => CountSchemaInternal;
const getDataRequirementSchema = (): z.ZodType<DataRequirement> =>
	DataRequirementSchemaInternal;
const getDistanceSchema = (): z.ZodType<Distance> => DistanceSchemaInternal;
const getDosageSchema = (): z.ZodType<Dosage> => DosageSchemaInternal;
const getDurationSchema = (): z.ZodType<Duration> => DurationSchemaInternal;
const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getElementDefinition_BaseSchema = (): z.ZodType<ElementDefinition_Base> =>
	ElementDefinition_BaseSchemaInternal;
const getElementDefinition_BindingSchema =
	(): z.ZodType<ElementDefinition_Binding> =>
		ElementDefinition_BindingSchemaInternal;
const getElementDefinition_ConstraintSchema =
	(): z.ZodType<ElementDefinition_Constraint> =>
		ElementDefinition_ConstraintSchemaInternal;
const getElementDefinition_ExampleSchema =
	(): z.ZodType<ElementDefinition_Example> =>
		ElementDefinition_ExampleSchemaInternal;
const getElementDefinition_MappingSchema =
	(): z.ZodType<ElementDefinition_Mapping> =>
		ElementDefinition_MappingSchemaInternal;
const getElementDefinition_SlicingSchema =
	(): z.ZodType<ElementDefinition_Slicing> =>
		ElementDefinition_SlicingSchemaInternal;
const getElementDefinition_TypeSchema = (): z.ZodType<ElementDefinition_Type> =>
	ElementDefinition_TypeSchemaInternal;
const getHumanNameSchema = (): z.ZodType<HumanName> => HumanNameSchemaInternal;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal;
const getMetaSchema = (): z.ZodType<Meta> => MetaSchemaInternal;
const getMoneySchema = (): z.ZodType<Money> => MoneySchemaInternal;
const getParameterDefinitionSchema = (): z.ZodType<ParameterDefinition> =>
	ParameterDefinitionSchemaInternal;
const getPeriodSchema = (): z.ZodType<Period> => PeriodSchemaInternal;
const getQuantitySchema = (): z.ZodType<Quantity> => QuantitySchemaInternal;
const getRangeSchema = (): z.ZodType<Range> => RangeSchemaInternal;
const getRatioSchema = (): z.ZodType<Ratio> => RatioSchemaInternal;
const getReferenceSchema = (): z.ZodType<Reference> => ReferenceSchemaInternal;
const getRelatedArtifactSchema = (): z.ZodType<RelatedArtifact> =>
	RelatedArtifactSchemaInternal;
const getSampledDataSchema = (): z.ZodType<SampledData> =>
	SampledDataSchemaInternal;
const getSignatureSchema = (): z.ZodType<Signature> => SignatureSchemaInternal;
const getTimingSchema = (): z.ZodType<Timing> => TimingSchemaInternal;
const getTriggerDefinitionSchema = (): z.ZodType<TriggerDefinition> =>
	TriggerDefinitionSchemaInternal;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal;

/** @internal */
export const ElementDefinitionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		alias: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.array()
			.optional()
			.describe(
				"Identifies additional names by which this element might also be known.",
			),
		_alias: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for alias"),
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
		_comment: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for comment"),
		condition: fhirId()
			.array()
			.optional()
			.describe(
				"A reference to an invariant that may make additional statements about the cardinality or value in the instance.",
			),
		_condition: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for condition"),
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
		_contentReference: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for contentReference"),
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
		_defaultValueBase64Binary: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for defaultValueBase64Binary"),
		defaultValueBoolean: z
			.boolean()
			.optional()
			.describe(
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
			),
		_defaultValueBoolean: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for defaultValueBoolean"),
		defaultValueCanonical: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
			),
		_defaultValueCanonical: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for defaultValueCanonical"),
		defaultValueCode: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional()
			.describe(
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
			),
		_defaultValueCode: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for defaultValueCode"),
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
		_defaultValueDate: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for defaultValueDate"),
		defaultValueDateTime: fhirDateTime()
			.optional()
			.describe(
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
			),
		_defaultValueDateTime: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for defaultValueDateTime"),
		defaultValueDecimal: z
			.number()
			.optional()
			.describe(
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
			),
		_defaultValueDecimal: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for defaultValueDecimal"),
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
			.any()
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
		_defaultValueId: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for defaultValueId"),
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
		_defaultValueInstant: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for defaultValueInstant"),
		defaultValueInteger: z
			.number()
			.int()
			.optional()
			.describe(
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
			),
		_defaultValueInteger: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for defaultValueInteger"),
		defaultValueMarkdown: z
			.string()
			.optional()
			.describe(
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
			),
		_defaultValueMarkdown: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for defaultValueMarkdown"),
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
		_defaultValueOid: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for defaultValueOid"),
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
		_defaultValuePositiveInt: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for defaultValuePositiveInt"),
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
		_defaultValueString: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for defaultValueString"),
		defaultValueTime: fhirTime()
			.optional()
			.describe(
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
			),
		_defaultValueTime: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for defaultValueTime"),
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
		_defaultValueUnsignedInt: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for defaultValueUnsignedInt"),
		defaultValueUri: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
			),
		_defaultValueUri: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for defaultValueUri"),
		defaultValueUrl: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
			),
		_defaultValueUrl: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for defaultValueUrl"),
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
		_defaultValueUuid: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for defaultValueUuid"),
		definition: z
			.string()
			.optional()
			.describe(
				"Provides a complete explanation of the meaning of the data element for human readability.  For the case of elements derived from existing elements (e.g. constraints), the definition SHALL be consistent with the base definition, but convey the meaning of the element in the particular context of use of the resource. (Note: The text you are reading is specified in ElementDefinition.definition).",
			),
		_definition: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for definition"),
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
		_fixedBase64Binary: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for fixedBase64Binary"),
		fixedBoolean: z
			.boolean()
			.optional()
			.describe(
				"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
			),
		_fixedBoolean: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for fixedBoolean"),
		fixedCanonical: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
			),
		_fixedCanonical: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for fixedCanonical"),
		fixedCode: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional()
			.describe(
				"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
			),
		_fixedCode: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for fixedCode"),
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
		_fixedDate: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for fixedDate"),
		fixedDateTime: fhirDateTime()
			.optional()
			.describe(
				"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
			),
		_fixedDateTime: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for fixedDateTime"),
		fixedDecimal: z
			.number()
			.optional()
			.describe(
				"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
			),
		_fixedDecimal: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for fixedDecimal"),
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
			.any()
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
		_fixedId: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for fixedId"),
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
		_fixedInstant: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for fixedInstant"),
		fixedInteger: z
			.number()
			.int()
			.optional()
			.describe(
				"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
			),
		_fixedInteger: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for fixedInteger"),
		fixedMarkdown: z
			.string()
			.optional()
			.describe(
				"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
			),
		_fixedMarkdown: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for fixedMarkdown"),
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
		_fixedOid: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for fixedOid"),
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
		_fixedPositiveInt: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for fixedPositiveInt"),
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
		_fixedString: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for fixedString"),
		fixedTime: fhirTime()
			.optional()
			.describe(
				"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
			),
		_fixedTime: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for fixedTime"),
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
		_fixedUnsignedInt: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for fixedUnsignedInt"),
		fixedUri: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
			),
		_fixedUri: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for fixedUri"),
		fixedUrl: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
			),
		_fixedUrl: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for fixedUrl"),
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
		_fixedUuid: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for fixedUuid"),
		isModifier: z
			.boolean()
			.optional()
			.describe(
				"If true, the value of this element affects the interpretation of the element or resource that contains it, and the value of the element cannot be ignored. Typically, this is used for status, negation and qualification codes. The effect of this is that the element cannot be ignored by systems: they SHALL either recognize the element and process it, and/or a pre-determination has been made that it is not relevant to their particular system.",
			),
		_isModifier: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for isModifier"),
		isModifierReason: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"Explains how that element affects the interpretation of the resource or element that contains it.",
			),
		_isModifierReason: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for isModifierReason"),
		isSummary: z
			.boolean()
			.optional()
			.describe(
				"Whether the element should be included if a client requests a search with the parameter _summary=true.",
			),
		_isSummary: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for isSummary"),
		label: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"A single preferred label which is the text to display beside the element indicating its meaning or to use to prompt for the element in a user display or form.",
			),
		_label: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for label"),
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
		_max: z.lazy(getElementSchema).optional().describe("Extensions for max"),
		maxLength: z
			.number()
			.int()
			.optional()
			.describe(
				"Indicates the maximum length in characters that is permitted to be present in conformant instances and which is expected to be supported by conformant consumers that support the element.",
			),
		_maxLength: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for maxLength"),
		maxValueDate: fhirDate()
			.optional()
			.describe(
				"The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
			),
		_maxValueDate: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for maxValueDate"),
		maxValueDateTime: fhirDateTime()
			.optional()
			.describe(
				"The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
			),
		_maxValueDateTime: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for maxValueDateTime"),
		maxValueDecimal: z
			.number()
			.optional()
			.describe(
				"The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
			),
		_maxValueDecimal: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for maxValueDecimal"),
		maxValueInstant: fhirInstant()
			.optional()
			.describe(
				"The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
			),
		_maxValueInstant: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for maxValueInstant"),
		maxValueInteger: z
			.number()
			.int()
			.optional()
			.describe(
				"The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
			),
		_maxValueInteger: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for maxValueInteger"),
		maxValuePositiveInt: z
			.number()
			.int()
			.positive()
			.optional()
			.describe(
				"The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
			),
		_maxValuePositiveInt: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for maxValuePositiveInt"),
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
		_maxValueTime: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for maxValueTime"),
		maxValueUnsignedInt: z
			.number()
			.int()
			.nonnegative()
			.optional()
			.describe(
				"The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
			),
		_maxValueUnsignedInt: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for maxValueUnsignedInt"),
		meaningWhenMissing: z
			.string()
			.optional()
			.describe(
				"The Implicit meaning that is to be understood when this element is missing (e.g. 'when this element is missing, the period is ongoing').",
			),
		_meaningWhenMissing: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for meaningWhenMissing"),
		min: z
			.number()
			.int()
			.nonnegative()
			.optional()
			.describe(
				"The minimum number of times this element SHALL appear in the instance.",
			),
		_min: z.lazy(getElementSchema).optional().describe("Extensions for min"),
		minValueDate: fhirDate()
			.optional()
			.describe(
				"The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
			),
		_minValueDate: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for minValueDate"),
		minValueDateTime: fhirDateTime()
			.optional()
			.describe(
				"The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
			),
		_minValueDateTime: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for minValueDateTime"),
		minValueDecimal: z
			.number()
			.optional()
			.describe(
				"The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
			),
		_minValueDecimal: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for minValueDecimal"),
		minValueInstant: fhirInstant()
			.optional()
			.describe(
				"The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
			),
		_minValueInstant: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for minValueInstant"),
		minValueInteger: z
			.number()
			.int()
			.optional()
			.describe(
				"The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
			),
		_minValueInteger: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for minValueInteger"),
		minValuePositiveInt: z
			.number()
			.int()
			.positive()
			.optional()
			.describe(
				"The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
			),
		_minValuePositiveInt: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for minValuePositiveInt"),
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
		_minValueTime: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for minValueTime"),
		minValueUnsignedInt: z
			.number()
			.int()
			.nonnegative()
			.optional()
			.describe(
				"The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
			),
		_minValueUnsignedInt: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for minValueUnsignedInt"),
		mustSupport: z
			.boolean()
			.optional()
			.describe(
				'If true, implementations that produce or consume resources SHALL provide "support" for the element in some meaningful way.  If false, the element may be ignored and not supported. If false, whether to populate or use the data element in any way is at the discretion of the implementation.',
			),
		_mustSupport: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for mustSupport"),
		orderMeaning: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"If present, indicates that the order of the repeating element has meaning and describes what that meaning is.  If absent, it means that the order of the element has no meaning.",
			),
		_orderMeaning: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for orderMeaning"),
		path: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.describe(
				'The path identifies the element and is expressed as a "."-separated list of ancestor elements, beginning with the name of the resource or extension.',
			),
		_path: z.lazy(getElementSchema).optional().describe("Extensions for path"),
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
		_patternBase64Binary: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for patternBase64Binary"),
		patternBoolean: z
			.boolean()
			.optional()
			.describe(
				"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
			),
		_patternBoolean: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for patternBoolean"),
		patternCanonical: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
			),
		_patternCanonical: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for patternCanonical"),
		patternCode: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional()
			.describe(
				"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
			),
		_patternCode: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for patternCode"),
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
		_patternDate: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for patternDate"),
		patternDateTime: fhirDateTime()
			.optional()
			.describe(
				"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
			),
		_patternDateTime: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for patternDateTime"),
		patternDecimal: z
			.number()
			.optional()
			.describe(
				"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
			),
		_patternDecimal: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for patternDecimal"),
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
			.any()
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
		_patternId: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for patternId"),
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
		_patternInstant: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for patternInstant"),
		patternInteger: z
			.number()
			.int()
			.optional()
			.describe(
				"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
			),
		_patternInteger: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for patternInteger"),
		patternMarkdown: z
			.string()
			.optional()
			.describe(
				"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
			),
		_patternMarkdown: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for patternMarkdown"),
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
		_patternOid: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for patternOid"),
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
		_patternPositiveInt: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for patternPositiveInt"),
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
		_patternString: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for patternString"),
		patternTime: fhirTime()
			.optional()
			.describe(
				"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
			),
		_patternTime: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for patternTime"),
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
		_patternUnsignedInt: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for patternUnsignedInt"),
		patternUri: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
			),
		_patternUri: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for patternUri"),
		patternUrl: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
			),
		_patternUrl: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for patternUrl"),
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
		_patternUuid: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for patternUuid"),
		representation: z
			.enum(["cdaText", "typeAttr", "xhtml", "xmlAttr", "xmlText"])
			.array()
			.optional()
			.describe(
				"Codes that define how this element is represented in instances, when the deviation varies from the normal case.",
			),
		_representation: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for representation"),
		requirements: z
			.string()
			.optional()
			.describe(
				"This element is for traceability of why the element was created and why the constraints exist as they do. This may be used to point to source materials or specifications that drove the structure of this element.",
			),
		_requirements: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for requirements"),
		short: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"A concise description of what this element means (e.g. for use in autogenerated summaries).",
			),
		_short: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for short"),
		sliceIsConstraining: z
			.boolean()
			.optional()
			.describe(
				"If true, indicates that this slice definition is constraining a slice definition with the same name in an inherited profile. If false, the slice is not overriding any slice in an inherited profile. If missing, the slice might or might not be overriding a slice in an inherited profile, depending on the sliceName.",
			),
		_sliceIsConstraining: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for sliceIsConstraining"),
		sliceName: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"The name of this element definition slice, when slicing is working. The name must be a token with no dots or spaces. This is a unique name referring to a specific set of constraints applied to this element, used to provide a name to different slices of the same element.",
			),
		_sliceName: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for sliceName"),
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

export const ElementDefinitionSchema: z.ZodType<ElementDefinition> =
	ElementDefinitionSchemaInternal;
