// Profile: http://hl7.org/fhir/StructureDefinition/Task
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
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
} from "../../shared/fhir-primitives-zod4";
import type { Address } from "./Address";
import { AddressSchemaInternal } from "./Address";
import type { Age } from "./Age";
import { AgeSchemaInternal } from "./Age";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { ContactPoint } from "./ContactPoint";
import { ContactPointSchemaInternal } from "./ContactPoint";
import type { Count } from "./Count";
import { CountSchemaInternal } from "./Count";
import type { Distance } from "./Distance";
import { DistanceSchemaInternal } from "./Distance";
import type { Duration } from "./Duration";
import { DurationSchemaInternal } from "./Duration";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { HumanName } from "./HumanName";
import { HumanNameSchemaInternal } from "./HumanName";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Meta } from "./Meta";
import { MetaSchemaInternal } from "./Meta";
import type { Money } from "./Money";
import { MoneySchemaInternal } from "./Money";
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
import type { Signature } from "./Signature";
import { SignatureSchemaInternal } from "./Signature";
import type { Timing } from "./Timing";
import { TimingSchemaInternal } from "./Timing";

/** Outputs produced by the Task. */
export interface Task_Output extends BackboneElement {
	/** The name of the Output parameter. */
	type: CodeableConcept;
	/** The value of the Output parameter as a basic type. */
	valueAddress?: Address;
	/** The value of the Output parameter as a basic type. */
	valueAge?: Age;
	/** The value of the Output parameter as a basic type. */
	valueAnnotation?: Annotation;
	/** The value of the Output parameter as a basic type. */
	valueAttachment?: Attachment;
	/** The value of the Output parameter as a basic type. */
	valueBase64Binary?: string;
	/** Extensions for valueBase64Binary */
	_valueBase64Binary?: Element;
	/** The value of the Output parameter as a basic type. */
	valueBoolean?: boolean;
	/** Extensions for valueBoolean */
	_valueBoolean?: Element;
	/** The value of the Output parameter as a basic type. */
	valueCode?: string;
	/** Extensions for valueCode */
	_valueCode?: Element;
	/** The value of the Output parameter as a basic type. */
	valueCodeableConcept?: CodeableConcept;
	/** The value of the Output parameter as a basic type. */
	valueCoding?: Coding;
	/** The value of the Output parameter as a basic type. */
	valueContactPoint?: ContactPoint;
	/** The value of the Output parameter as a basic type. */
	valueCount?: Count;
	/** The value of the Output parameter as a basic type. */
	valueDate?: string;
	/** Extensions for valueDate */
	_valueDate?: Element;
	/** The value of the Output parameter as a basic type. */
	valueDateTime?: string;
	/** Extensions for valueDateTime */
	_valueDateTime?: Element;
	/** The value of the Output parameter as a basic type. */
	valueDecimal?: number;
	/** Extensions for valueDecimal */
	_valueDecimal?: Element;
	/** The value of the Output parameter as a basic type. */
	valueDistance?: Distance;
	/** The value of the Output parameter as a basic type. */
	valueDuration?: Duration;
	/** The value of the Output parameter as a basic type. */
	valueHumanName?: HumanName;
	/** The value of the Output parameter as a basic type. */
	valueId?: string;
	/** Extensions for valueId */
	_valueId?: Element;
	/** The value of the Output parameter as a basic type. */
	valueIdentifier?: Identifier;
	/** The value of the Output parameter as a basic type. */
	valueInstant?: string;
	/** Extensions for valueInstant */
	_valueInstant?: Element;
	/** The value of the Output parameter as a basic type. */
	valueInteger?: number;
	/** Extensions for valueInteger */
	_valueInteger?: Element;
	/** The value of the Output parameter as a basic type. */
	valueMarkdown?: string;
	/** Extensions for valueMarkdown */
	_valueMarkdown?: Element;
	/** The value of the Output parameter as a basic type. */
	valueMeta?: Meta;
	/** The value of the Output parameter as a basic type. */
	valueMoney?: Money;
	/** The value of the Output parameter as a basic type. */
	valueOid?: string;
	/** Extensions for valueOid */
	_valueOid?: Element;
	/** The value of the Output parameter as a basic type. */
	valuePeriod?: Period;
	/** The value of the Output parameter as a basic type. */
	valuePositiveInt?: number;
	/** Extensions for valuePositiveInt */
	_valuePositiveInt?: Element;
	/** The value of the Output parameter as a basic type. */
	valueQuantity?: Quantity;
	/** The value of the Output parameter as a basic type. */
	valueRange?: Range;
	/** The value of the Output parameter as a basic type. */
	valueRatio?: Ratio;
	/** The value of the Output parameter as a basic type. */
	valueReference?: Reference;
	/** The value of the Output parameter as a basic type. */
	valueSampledData?: SampledData;
	/** The value of the Output parameter as a basic type. */
	valueSignature?: Signature;
	/** The value of the Output parameter as a basic type. */
	valueString?: string;
	/** Extensions for valueString */
	_valueString?: Element;
	/** The value of the Output parameter as a basic type. */
	valueTime?: string;
	/** Extensions for valueTime */
	_valueTime?: Element;
	/** The value of the Output parameter as a basic type. */
	valueTiming?: Timing;
	/** The value of the Output parameter as a basic type. */
	valueUnsignedInt?: number;
	/** Extensions for valueUnsignedInt */
	_valueUnsignedInt?: Element;
	/** The value of the Output parameter as a basic type. */
	valueUri?: string;
	/** Extensions for valueUri */
	_valueUri?: Element;
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
export const Task_OutputSchemaInternal = BackboneElementSchemaInternal.extend({
	type: z.lazy(getCodeableConceptSchema),
	valueAddress: z.lazy(getAddressSchema).optional(),
	valueAge: z.lazy(getAgeSchema).optional(),
	valueAnnotation: z.lazy(getAnnotationSchema).optional(),
	valueAttachment: z.lazy(getAttachmentSchema).optional(),
	valueBase64Binary: fhirBase64Binary().optional(),
	_valueBase64Binary: z.lazy(getElementSchema).optional(),
	valueBoolean: z.boolean().optional(),
	_valueBoolean: z.lazy(getElementSchema).optional(),
	valueCode: fhirCode().optional(),
	_valueCode: z.lazy(getElementSchema).optional(),
	valueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
	valueCoding: z.lazy(getCodingSchema).optional(),
	valueContactPoint: z.lazy(getContactPointSchema).optional(),
	valueCount: z.lazy(getCountSchema).optional(),
	valueDate: fhirDate().optional(),
	_valueDate: z.lazy(getElementSchema).optional(),
	valueDateTime: fhirDateTime().optional(),
	_valueDateTime: z.lazy(getElementSchema).optional(),
	valueDecimal: z.number().optional(),
	_valueDecimal: z.lazy(getElementSchema).optional(),
	valueDistance: z.lazy(getDistanceSchema).optional(),
	valueDuration: z.lazy(getDurationSchema).optional(),
	valueHumanName: z.lazy(getHumanNameSchema).optional(),
	valueId: fhirId().optional(),
	_valueId: z.lazy(getElementSchema).optional(),
	valueIdentifier: z.lazy(getIdentifierSchema).optional(),
	valueInstant: fhirInstant().optional(),
	_valueInstant: z.lazy(getElementSchema).optional(),
	valueInteger: z.number().int().optional(),
	_valueInteger: z.lazy(getElementSchema).optional(),
	valueMarkdown: z.string().optional(),
	_valueMarkdown: z.lazy(getElementSchema).optional(),
	valueMeta: z.lazy(getMetaSchema).optional(),
	valueMoney: z.lazy(getMoneySchema).optional(),
	valueOid: fhirOid().optional(),
	_valueOid: z.lazy(getElementSchema).optional(),
	valuePeriod: z.lazy(getPeriodSchema).optional(),
	valuePositiveInt: z.number().int().positive().optional(),
	_valuePositiveInt: z.lazy(getElementSchema).optional(),
	valueQuantity: z.lazy(getQuantitySchema).optional(),
	valueRange: z.lazy(getRangeSchema).optional(),
	valueRatio: z.lazy(getRatioSchema).optional(),
	valueReference: z.lazy(getReferenceSchema).optional(),
	valueSampledData: z.lazy(getSampledDataSchema).optional(),
	valueSignature: z.lazy(getSignatureSchema).optional(),
	valueString: fhirString().optional(),
	_valueString: z.lazy(getElementSchema).optional(),
	valueTime: fhirTime().optional(),
	_valueTime: z.lazy(getElementSchema).optional(),
	valueTiming: z.lazy(getTimingSchema).optional(),
	valueUnsignedInt: z.number().int().nonnegative().optional(),
	_valueUnsignedInt: z.lazy(getElementSchema).optional(),
	valueUri: fhirUri().optional(),
	_valueUri: z.lazy(getElementSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const value_x_Present = [
			"valueAddress",
			"valueAge",
			"valueAnnotation",
			"valueAttachment",
			"valueBase64Binary",
			"valueBoolean",
			"valueCode",
			"valueCodeableConcept",
			"valueCoding",
			"valueContactPoint",
			"valueCount",
			"valueDate",
			"valueDateTime",
			"valueDecimal",
			"valueDistance",
			"valueDuration",
			"valueHumanName",
			"valueId",
			"valueIdentifier",
			"valueInstant",
			"valueInteger",
			"valueMarkdown",
			"valueMeta",
			"valueMoney",
			"valueOid",
			"valuePeriod",
			"valuePositiveInt",
			"valueQuantity",
			"valueRange",
			"valueRatio",
			"valueReference",
			"valueSampledData",
			"valueSignature",
			"valueString",
			"valueTime",
			"valueTiming",
			"valueUnsignedInt",
			"valueUri",
		].filter((field) => record[field] !== undefined);
		if (value_x_Present.length === 0) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"One of valueAddress, valueAge, valueAnnotation, valueAttachment, valueBase64Binary, valueBoolean, valueCode, valueCodeableConcept, valueCoding, valueContactPoint, valueCount, valueDate, valueDateTime, valueDecimal, valueDistance, valueDuration, valueHumanName, valueId, valueIdentifier, valueInstant, valueInteger, valueMarkdown, valueMeta, valueMoney, valueOid, valuePeriod, valuePositiveInt, valueQuantity, valueRange, valueRatio, valueReference, valueSampledData, valueSignature, valueString, valueTime, valueTiming, valueUnsignedInt, valueUri must be present for value[x]",
				path: ["valueAddress"],
			});
		}
		if (value_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of valueAddress, valueAge, valueAnnotation, valueAttachment, valueBase64Binary, valueBoolean, valueCode, valueCodeableConcept, valueCoding, valueContactPoint, valueCount, valueDate, valueDateTime, valueDecimal, valueDistance, valueDuration, valueHumanName, valueId, valueIdentifier, valueInstant, valueInteger, valueMarkdown, valueMeta, valueMoney, valueOid, valuePeriod, valuePositiveInt, valueQuantity, valueRange, valueRatio, valueReference, valueSampledData, valueSignature, valueString, valueTime, valueTiming, valueUnsignedInt, valueUri may be present for value[x]",
				path: [value_x_Present[0]],
			});
		}
	});

export const Task_OutputSchema =
	Task_OutputSchemaInternal as z.ZodType<Task_Output>;
