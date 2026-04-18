// Source: https://hl7.org/fhir/STU3/parameters-definitions.html#Parameters.parameter
// Profile: http://hl7.org/fhir/StructureDefinition/Parameters
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

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
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
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

/** A parameter passed to or received from the operation. */
export interface Parameters_Parameter extends BackboneElement {
  /** The name of the parameter (reference to the operation definition). */
  name: string;
  /** Extensions for name */
  _name?: Element;
  /** A named part of a multi-part parameter. */
  part?: Array<unknown>;
  /** If the parameter is a whole resource. */
  resource?: FhirResource;
  /** If the parameter is a data type. */
  valueAddress?: Address;
  /** If the parameter is a data type. */
  valueAge?: Age;
  /** If the parameter is a data type. */
  valueAnnotation?: Annotation;
  /** If the parameter is a data type. */
  valueAttachment?: Attachment;
  /** If the parameter is a data type. */
  valueBase64Binary?: string;
  /** Extensions for valueBase64Binary */
  _valueBase64Binary?: Element;
  /** If the parameter is a data type. */
  valueBoolean?: boolean;
  /** Extensions for valueBoolean */
  _valueBoolean?: Element;
  /** If the parameter is a data type. */
  valueCode?: string;
  /** Extensions for valueCode */
  _valueCode?: Element;
  /** If the parameter is a data type. */
  valueCodeableConcept?: CodeableConcept;
  /** If the parameter is a data type. */
  valueCoding?: Coding;
  /** If the parameter is a data type. */
  valueContactPoint?: ContactPoint;
  /** If the parameter is a data type. */
  valueCount?: Count;
  /** If the parameter is a data type. */
  valueDate?: string;
  /** Extensions for valueDate */
  _valueDate?: Element;
  /** If the parameter is a data type. */
  valueDateTime?: string;
  /** Extensions for valueDateTime */
  _valueDateTime?: Element;
  /** If the parameter is a data type. */
  valueDecimal?: number;
  /** Extensions for valueDecimal */
  _valueDecimal?: Element;
  /** If the parameter is a data type. */
  valueDistance?: Distance;
  /** If the parameter is a data type. */
  valueDuration?: Duration;
  /** If the parameter is a data type. */
  valueHumanName?: HumanName;
  /** If the parameter is a data type. */
  valueId?: string;
  /** Extensions for valueId */
  _valueId?: Element;
  /** If the parameter is a data type. */
  valueIdentifier?: Identifier;
  /** If the parameter is a data type. */
  valueInstant?: string;
  /** Extensions for valueInstant */
  _valueInstant?: Element;
  /** If the parameter is a data type. */
  valueInteger?: number;
  /** Extensions for valueInteger */
  _valueInteger?: Element;
  /** If the parameter is a data type. */
  valueMarkdown?: string;
  /** Extensions for valueMarkdown */
  _valueMarkdown?: Element;
  /** If the parameter is a data type. */
  valueMeta?: Meta;
  /** If the parameter is a data type. */
  valueMoney?: Money;
  /** If the parameter is a data type. */
  valueOid?: string;
  /** Extensions for valueOid */
  _valueOid?: Element;
  /** If the parameter is a data type. */
  valuePeriod?: Period;
  /** If the parameter is a data type. */
  valuePositiveInt?: number;
  /** Extensions for valuePositiveInt */
  _valuePositiveInt?: Element;
  /** If the parameter is a data type. */
  valueQuantity?: Quantity;
  /** If the parameter is a data type. */
  valueRange?: Range;
  /** If the parameter is a data type. */
  valueRatio?: Ratio;
  /** If the parameter is a data type. */
  valueReference?: Reference;
  /** If the parameter is a data type. */
  valueSampledData?: SampledData;
  /** If the parameter is a data type. */
  valueSignature?: Signature;
  /** If the parameter is a data type. */
  valueString?: string;
  /** Extensions for valueString */
  _valueString?: Element;
  /** If the parameter is a data type. */
  valueTime?: string;
  /** Extensions for valueTime */
  _valueTime?: Element;
  /** If the parameter is a data type. */
  valueTiming?: Timing;
  /** If the parameter is a data type. */
  valueUnsignedInt?: number;
  /** Extensions for valueUnsignedInt */
  _valueUnsignedInt?: Element;
  /** If the parameter is a data type. */
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
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const Parameters_ParameterSchemaInternal =
  BackboneElementSchemaInternal.extend({
    name: fhirString(),
    _name: z.lazy(getElementSchema).optional(),
    part: z.unknown().array().optional(),
    resource: z.lazy(getFhirResourceSchema).optional(),
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

export const Parameters_ParameterSchema =
  Parameters_ParameterSchemaInternal as z.ZodType<Parameters_Parameter>;
