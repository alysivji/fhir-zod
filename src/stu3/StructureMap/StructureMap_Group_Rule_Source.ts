// Profile: http://hl7.org/fhir/StructureDefinition/StructureMap
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import {
	fhirBase64Binary,
	fhirCode,
	fhirDate,
	fhirDateTime,
	fhirId,
	fhirInstant,
	fhirOid,
	fhirString,
	fhirTime,
	fhirUri,
} from "../../shared/fhir-primitives";
import type { Address } from "../Address";
import { AddressSchemaInternal } from "../Address";
import type { Age } from "../Age";
import { AgeSchemaInternal } from "../Age";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { Attachment } from "../Attachment";
import { AttachmentSchemaInternal } from "../Attachment";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { ContactPoint } from "../ContactPoint";
import { ContactPointSchemaInternal } from "../ContactPoint";
import type { Count } from "../Count";
import { CountSchemaInternal } from "../Count";
import type { Distance } from "../Distance";
import { DistanceSchemaInternal } from "../Distance";
import type { Duration } from "../Duration";
import { DurationSchemaInternal } from "../Duration";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { HumanName } from "../HumanName";
import { HumanNameSchemaInternal } from "../HumanName";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Money } from "../Money";
import { MoneySchemaInternal } from "../Money";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Range } from "../Range";
import { RangeSchemaInternal } from "../Range";
import type { Ratio } from "../Ratio";
import { RatioSchemaInternal } from "../Ratio";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { SampledData } from "../SampledData";
import { SampledDataSchemaInternal } from "../SampledData";
import type { Signature } from "../Signature";
import { SignatureSchemaInternal } from "../Signature";
import type { Timing } from "../Timing";
import { TimingSchemaInternal } from "../Timing";

/** Source inputs to the mapping. */
export interface StructureMap_Group_Rule_Source extends BackboneElement {
	/** FHIRPath expression  - must be true or the mapping engine throws an error instead of completing. */
	check?: string;
	/** Extensions for check */
	_check?: Element;
	/** FHIRPath expression  - must be true or the rule does not apply. */
	condition?: string;
	/** Extensions for condition */
	_condition?: Element;
	/** Type or variable this rule applies to. */
	context: string;
	/** Extensions for context */
	_context?: Element;
	/** A value to use if there is no existing value in the source object. */
	defaultValueAddress?: Address;
	/** A value to use if there is no existing value in the source object. */
	defaultValueAge?: Age;
	/** A value to use if there is no existing value in the source object. */
	defaultValueAnnotation?: Annotation;
	/** A value to use if there is no existing value in the source object. */
	defaultValueAttachment?: Attachment;
	/** A value to use if there is no existing value in the source object. */
	defaultValueBase64Binary?: string;
	/** Extensions for defaultValueBase64Binary */
	_defaultValueBase64Binary?: Element;
	/** A value to use if there is no existing value in the source object. */
	defaultValueBoolean?: boolean;
	/** Extensions for defaultValueBoolean */
	_defaultValueBoolean?: Element;
	/** A value to use if there is no existing value in the source object. */
	defaultValueCode?: string;
	/** Extensions for defaultValueCode */
	_defaultValueCode?: Element;
	/** A value to use if there is no existing value in the source object. */
	defaultValueCodeableConcept?: CodeableConcept;
	/** A value to use if there is no existing value in the source object. */
	defaultValueCoding?: Coding;
	/** A value to use if there is no existing value in the source object. */
	defaultValueContactPoint?: ContactPoint;
	/** A value to use if there is no existing value in the source object. */
	defaultValueCount?: Count;
	/** A value to use if there is no existing value in the source object. */
	defaultValueDate?: string;
	/** Extensions for defaultValueDate */
	_defaultValueDate?: Element;
	/** A value to use if there is no existing value in the source object. */
	defaultValueDateTime?: string;
	/** Extensions for defaultValueDateTime */
	_defaultValueDateTime?: Element;
	/** A value to use if there is no existing value in the source object. */
	defaultValueDecimal?: number;
	/** Extensions for defaultValueDecimal */
	_defaultValueDecimal?: Element;
	/** A value to use if there is no existing value in the source object. */
	defaultValueDistance?: Distance;
	/** A value to use if there is no existing value in the source object. */
	defaultValueDuration?: Duration;
	/** A value to use if there is no existing value in the source object. */
	defaultValueHumanName?: HumanName;
	/** A value to use if there is no existing value in the source object. */
	defaultValueId?: string;
	/** Extensions for defaultValueId */
	_defaultValueId?: Element;
	/** A value to use if there is no existing value in the source object. */
	defaultValueIdentifier?: Identifier;
	/** A value to use if there is no existing value in the source object. */
	defaultValueInstant?: string;
	/** Extensions for defaultValueInstant */
	_defaultValueInstant?: Element;
	/** A value to use if there is no existing value in the source object. */
	defaultValueInteger?: number;
	/** Extensions for defaultValueInteger */
	_defaultValueInteger?: Element;
	/** A value to use if there is no existing value in the source object. */
	defaultValueMarkdown?: string;
	/** Extensions for defaultValueMarkdown */
	_defaultValueMarkdown?: Element;
	/** A value to use if there is no existing value in the source object. */
	defaultValueMeta?: Meta;
	/** A value to use if there is no existing value in the source object. */
	defaultValueMoney?: Money;
	/** A value to use if there is no existing value in the source object. */
	defaultValueOid?: string;
	/** Extensions for defaultValueOid */
	_defaultValueOid?: Element;
	/** A value to use if there is no existing value in the source object. */
	defaultValuePeriod?: Period;
	/** A value to use if there is no existing value in the source object. */
	defaultValuePositiveInt?: number;
	/** Extensions for defaultValuePositiveInt */
	_defaultValuePositiveInt?: Element;
	/** A value to use if there is no existing value in the source object. */
	defaultValueQuantity?: Quantity;
	/** A value to use if there is no existing value in the source object. */
	defaultValueRange?: Range;
	/** A value to use if there is no existing value in the source object. */
	defaultValueRatio?: Ratio;
	/** A value to use if there is no existing value in the source object. */
	defaultValueReference?: Reference;
	/** A value to use if there is no existing value in the source object. */
	defaultValueSampledData?: SampledData;
	/** A value to use if there is no existing value in the source object. */
	defaultValueSignature?: Signature;
	/** A value to use if there is no existing value in the source object. */
	defaultValueString?: string;
	/** Extensions for defaultValueString */
	_defaultValueString?: Element;
	/** A value to use if there is no existing value in the source object. */
	defaultValueTime?: string;
	/** Extensions for defaultValueTime */
	_defaultValueTime?: Element;
	/** A value to use if there is no existing value in the source object. */
	defaultValueTiming?: Timing;
	/** A value to use if there is no existing value in the source object. */
	defaultValueUnsignedInt?: number;
	/** Extensions for defaultValueUnsignedInt */
	_defaultValueUnsignedInt?: Element;
	/** A value to use if there is no existing value in the source object. */
	defaultValueUri?: string;
	/** Extensions for defaultValueUri */
	_defaultValueUri?: Element;
	/** Optional field for this source. */
	element?: string;
	/** Extensions for element */
	_element?: Element;
	/** How to handle the list mode for this element. */
	listMode?: "first" | "last" | "not_first" | "not_last" | "only_one";
	/** Extensions for listMode */
	_listMode?: Element;
	/** Specified maximum cardinality for the element - a number or a "*". This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it's the default value). */
	max?: string;
	/** Extensions for max */
	_max?: Element;
	/** Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content. */
	min?: number;
	/** Extensions for min */
	_min?: Element;
	/** Specified type for the element. This works as a condition on the mapping - use for polymorphic elements. */
	type?: string;
	/** Extensions for type */
	_type?: Element;
	/** Named context for field, if a field is specified. */
	variable?: string;
	/** Extensions for variable */
	_variable?: Element;
}

const getAddressSchema = (): z.ZodType<Address> =>
	AddressSchemaInternal as z.ZodType<Address>;
const getAgeSchema = (): z.ZodType<Age> => AgeSchemaInternal as z.ZodType<Age>;
const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
	ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getCountSchema = (): z.ZodType<Count> =>
	CountSchemaInternal as z.ZodType<Count>;
const getDistanceSchema = (): z.ZodType<Distance> =>
	DistanceSchemaInternal as z.ZodType<Distance>;
const getDurationSchema = (): z.ZodType<Duration> =>
	DurationSchemaInternal as z.ZodType<Duration>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getHumanNameSchema = (): z.ZodType<HumanName> =>
	HumanNameSchemaInternal as z.ZodType<HumanName>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMetaSchema = (): z.ZodType<Meta> =>
	MetaSchemaInternal as z.ZodType<Meta>;
const getMoneySchema = (): z.ZodType<Money> =>
	MoneySchemaInternal as z.ZodType<Money>;
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
const getSignatureSchema = (): z.ZodType<Signature> =>
	SignatureSchemaInternal as z.ZodType<Signature>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const StructureMap_Group_Rule_SourceSchemaInternal =
	BackboneElementSchemaInternal.extend({
		check: fhirString().optional(),
		_check: z.lazy(getElementSchema).optional(),
		condition: fhirString().optional(),
		_condition: z.lazy(getElementSchema).optional(),
		context: fhirId(),
		_context: z.lazy(getElementSchema).optional(),
		defaultValueAddress: z.lazy(getAddressSchema).optional(),
		defaultValueAge: z.lazy(getAgeSchema).optional(),
		defaultValueAnnotation: z.lazy(getAnnotationSchema).optional(),
		defaultValueAttachment: z.lazy(getAttachmentSchema).optional(),
		defaultValueBase64Binary: fhirBase64Binary().optional(),
		_defaultValueBase64Binary: z.lazy(getElementSchema).optional(),
		defaultValueBoolean: z.boolean().optional(),
		_defaultValueBoolean: z.lazy(getElementSchema).optional(),
		defaultValueCode: fhirCode().optional(),
		_defaultValueCode: z.lazy(getElementSchema).optional(),
		defaultValueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		defaultValueCoding: z.lazy(getCodingSchema).optional(),
		defaultValueContactPoint: z.lazy(getContactPointSchema).optional(),
		defaultValueCount: z.lazy(getCountSchema).optional(),
		defaultValueDate: fhirDate().optional(),
		_defaultValueDate: z.lazy(getElementSchema).optional(),
		defaultValueDateTime: fhirDateTime().optional(),
		_defaultValueDateTime: z.lazy(getElementSchema).optional(),
		defaultValueDecimal: z.number().optional(),
		_defaultValueDecimal: z.lazy(getElementSchema).optional(),
		defaultValueDistance: z.lazy(getDistanceSchema).optional(),
		defaultValueDuration: z.lazy(getDurationSchema).optional(),
		defaultValueHumanName: z.lazy(getHumanNameSchema).optional(),
		defaultValueId: fhirId().optional(),
		_defaultValueId: z.lazy(getElementSchema).optional(),
		defaultValueIdentifier: z.lazy(getIdentifierSchema).optional(),
		defaultValueInstant: fhirInstant().optional(),
		_defaultValueInstant: z.lazy(getElementSchema).optional(),
		defaultValueInteger: z.number().int().optional(),
		_defaultValueInteger: z.lazy(getElementSchema).optional(),
		defaultValueMarkdown: z.string().optional(),
		_defaultValueMarkdown: z.lazy(getElementSchema).optional(),
		defaultValueMeta: z.lazy(getMetaSchema).optional(),
		defaultValueMoney: z.lazy(getMoneySchema).optional(),
		defaultValueOid: fhirOid().optional(),
		_defaultValueOid: z.lazy(getElementSchema).optional(),
		defaultValuePeriod: z.lazy(getPeriodSchema).optional(),
		defaultValuePositiveInt: z.number().int().positive().optional(),
		_defaultValuePositiveInt: z.lazy(getElementSchema).optional(),
		defaultValueQuantity: z.lazy(getQuantitySchema).optional(),
		defaultValueRange: z.lazy(getRangeSchema).optional(),
		defaultValueRatio: z.lazy(getRatioSchema).optional(),
		defaultValueReference: z.lazy(getReferenceSchema).optional(),
		defaultValueSampledData: z.lazy(getSampledDataSchema).optional(),
		defaultValueSignature: z.lazy(getSignatureSchema).optional(),
		defaultValueString: fhirString().optional(),
		_defaultValueString: z.lazy(getElementSchema).optional(),
		defaultValueTime: fhirTime().optional(),
		_defaultValueTime: z.lazy(getElementSchema).optional(),
		defaultValueTiming: z.lazy(getTimingSchema).optional(),
		defaultValueUnsignedInt: z.number().int().nonnegative().optional(),
		_defaultValueUnsignedInt: z.lazy(getElementSchema).optional(),
		defaultValueUri: fhirUri().optional(),
		_defaultValueUri: z.lazy(getElementSchema).optional(),
		element: fhirString().optional(),
		_element: z.lazy(getElementSchema).optional(),
		listMode: z
			.enum(["first", "last", "not_first", "not_last", "only_one"])
			.optional(),
		_listMode: z.lazy(getElementSchema).optional(),
		max: fhirString().optional(),
		_max: z.lazy(getElementSchema).optional(),
		min: z.number().int().optional(),
		_min: z.lazy(getElementSchema).optional(),
		type: fhirString().optional(),
		_type: z.lazy(getElementSchema).optional(),
		variable: fhirId().optional(),
		_variable: z.lazy(getElementSchema).optional(),
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
				"defaultValueCode",
				"defaultValueCodeableConcept",
				"defaultValueCoding",
				"defaultValueContactPoint",
				"defaultValueCount",
				"defaultValueDate",
				"defaultValueDateTime",
				"defaultValueDecimal",
				"defaultValueDistance",
				"defaultValueDuration",
				"defaultValueHumanName",
				"defaultValueId",
				"defaultValueIdentifier",
				"defaultValueInstant",
				"defaultValueInteger",
				"defaultValueMarkdown",
				"defaultValueMeta",
				"defaultValueMoney",
				"defaultValueOid",
				"defaultValuePeriod",
				"defaultValuePositiveInt",
				"defaultValueQuantity",
				"defaultValueRange",
				"defaultValueRatio",
				"defaultValueReference",
				"defaultValueSampledData",
				"defaultValueSignature",
				"defaultValueString",
				"defaultValueTime",
				"defaultValueTiming",
				"defaultValueUnsignedInt",
				"defaultValueUri",
			].filter((field) => record[field] !== undefined);
			if (defaultValue_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of defaultValueAddress, defaultValueAge, defaultValueAnnotation, defaultValueAttachment, defaultValueBase64Binary, defaultValueBoolean, defaultValueCode, defaultValueCodeableConcept, defaultValueCoding, defaultValueContactPoint, defaultValueCount, defaultValueDate, defaultValueDateTime, defaultValueDecimal, defaultValueDistance, defaultValueDuration, defaultValueHumanName, defaultValueId, defaultValueIdentifier, defaultValueInstant, defaultValueInteger, defaultValueMarkdown, defaultValueMeta, defaultValueMoney, defaultValueOid, defaultValuePeriod, defaultValuePositiveInt, defaultValueQuantity, defaultValueRange, defaultValueRatio, defaultValueReference, defaultValueSampledData, defaultValueSignature, defaultValueString, defaultValueTime, defaultValueTiming, defaultValueUnsignedInt, defaultValueUri may be present for defaultValue[x]",
					path: [defaultValue_x_Present[0]],
				});
			}
		});

export const StructureMap_Group_Rule_SourceSchema =
	StructureMap_Group_Rule_SourceSchemaInternal as z.ZodType<StructureMap_Group_Rule_Source>;
