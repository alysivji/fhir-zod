// Profile: http://hl7.org/fhir/StructureDefinition/Extension
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

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
} from "../shared/fhir-primitives";
import type { Address } from "./Address";
import { AddressSchemaInternal } from "./Address";
import type { Age } from "./Age";
import { AgeSchemaInternal } from "./Age";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
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

/** Base StructureDefinition for Extension Type */
export interface Extension extends Element {
  /** Source of the definition for the extension code - a logical name or a URL. */
  url: string;
  /** Extensions for url */
  _url?: Element;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueAddress?: Address;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueAge?: Age;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueAnnotation?: Annotation;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueAttachment?: Attachment;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueBase64Binary?: string;
  /** Extensions for valueBase64Binary */
  _valueBase64Binary?: Element;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueBoolean?: boolean;
  /** Extensions for valueBoolean */
  _valueBoolean?: Element;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueCode?: string;
  /** Extensions for valueCode */
  _valueCode?: Element;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueCodeableConcept?: CodeableConcept;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueCoding?: Coding;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueContactPoint?: ContactPoint;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueCount?: Count;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueDate?: string;
  /** Extensions for valueDate */
  _valueDate?: Element;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueDateTime?: string;
  /** Extensions for valueDateTime */
  _valueDateTime?: Element;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueDecimal?: number;
  /** Extensions for valueDecimal */
  _valueDecimal?: Element;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueDistance?: Distance;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueDuration?: Duration;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueHumanName?: HumanName;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueId?: string;
  /** Extensions for valueId */
  _valueId?: Element;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueIdentifier?: Identifier;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueInstant?: string;
  /** Extensions for valueInstant */
  _valueInstant?: Element;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueInteger?: number;
  /** Extensions for valueInteger */
  _valueInteger?: Element;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueMarkdown?: string;
  /** Extensions for valueMarkdown */
  _valueMarkdown?: Element;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueMeta?: Meta;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueMoney?: Money;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueOid?: string;
  /** Extensions for valueOid */
  _valueOid?: Element;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valuePeriod?: Period;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valuePositiveInt?: number;
  /** Extensions for valuePositiveInt */
  _valuePositiveInt?: Element;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueQuantity?: Quantity;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueRange?: Range;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueRatio?: Ratio;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueReference?: Reference;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueSampledData?: SampledData;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueSignature?: Signature;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueString?: string;
  /** Extensions for valueString */
  _valueString?: Element;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueTime?: string;
  /** Extensions for valueTime */
  _valueTime?: Element;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueTiming?: Timing;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
  valueUnsignedInt?: number;
  /** Extensions for valueUnsignedInt */
  _valueUnsignedInt?: Element;
  /** Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list). */
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
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
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
export const ExtensionSchemaInternal = z
  .object({
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirString().optional(),
    _id: z.lazy(getElementSchema).optional(),
    url: fhirUri(),
    _url: z.lazy(getElementSchema).optional(),
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
    if (value_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of valueAddress, valueAge, valueAnnotation, valueAttachment, valueBase64Binary, valueBoolean, valueCode, valueCodeableConcept, valueCoding, valueContactPoint, valueCount, valueDate, valueDateTime, valueDecimal, valueDistance, valueDuration, valueHumanName, valueId, valueIdentifier, valueInstant, valueInteger, valueMarkdown, valueMeta, valueMoney, valueOid, valuePeriod, valuePositiveInt, valueQuantity, valueRange, valueRatio, valueReference, valueSampledData, valueSignature, valueString, valueTime, valueTiming, valueUnsignedInt, valueUri may be present for value[x]",
        path: [value_x_Present[0]],
      });
    }
  });

export const ExtensionSchema = ExtensionSchemaInternal as z.ZodType<Extension>;
