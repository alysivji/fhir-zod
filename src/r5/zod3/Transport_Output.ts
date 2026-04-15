// Profile: http://hl7.org/fhir/StructureDefinition/Transport
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import {
	fhirBase64Binary,
	fhirCanonical,
	fhirCode,
	fhirDate,
	fhirDateTime,
	fhirId,
	fhirInstant,
	fhirInteger64,
	fhirOid,
	fhirString,
	fhirTime,
	fhirUri,
	fhirUrl,
	fhirUuid,
} from "../../shared/fhir-primitives-zod3";
import type { Address } from "./Address";
import { AddressSchemaInternal } from "./Address";
import type { Age } from "./Age";
import { AgeSchemaInternal } from "./Age";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { Availability } from "./Availability";
import { AvailabilitySchemaInternal } from "./Availability";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { ContactDetail } from "./ContactDetail";
import { ContactDetailSchemaInternal } from "./ContactDetail";
import type { ContactPoint } from "./ContactPoint";
import { ContactPointSchemaInternal } from "./ContactPoint";
import type { Count } from "./Count";
import { CountSchemaInternal } from "./Count";
import type { DataRequirement } from "./DataRequirement";
import { DataRequirementSchemaInternal } from "./DataRequirement";
import type { Distance } from "./Distance";
import { DistanceSchemaInternal } from "./Distance";
import type { Dosage } from "./Dosage";
import { DosageSchemaInternal } from "./Dosage";
import type { Duration } from "./Duration";
import { DurationSchemaInternal } from "./Duration";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Expression } from "./Expression";
import { ExpressionSchemaInternal } from "./Expression";
import type { ExtendedContactDetail } from "./ExtendedContactDetail";
import { ExtendedContactDetailSchemaInternal } from "./ExtendedContactDetail";
import type { HumanName } from "./HumanName";
import { HumanNameSchemaInternal } from "./HumanName";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Meta } from "./Meta";
import { MetaSchemaInternal } from "./Meta";
import type { Money } from "./Money";
import { MoneySchemaInternal } from "./Money";
import type { ParameterDefinition } from "./ParameterDefinition";
import { ParameterDefinitionSchemaInternal } from "./ParameterDefinition";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";
import type { Ratio } from "./Ratio";
import { RatioSchemaInternal } from "./Ratio";
import type { RatioRange } from "./RatioRange";
import { RatioRangeSchemaInternal } from "./RatioRange";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { RelatedArtifact } from "./RelatedArtifact";
import { RelatedArtifactSchemaInternal } from "./RelatedArtifact";
import type { SampledData } from "./SampledData";
import { SampledDataSchemaInternal } from "./SampledData";
import type { Signature } from "./Signature";
import { SignatureSchemaInternal } from "./Signature";
import type { Timing } from "./Timing";
import { TimingSchemaInternal } from "./Timing";
import type { TriggerDefinition } from "./TriggerDefinition";
import { TriggerDefinitionSchemaInternal } from "./TriggerDefinition";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** Outputs produced by the Transport. */
export interface Transport_Output extends BackboneElement {
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
	valueAvailability?: Availability;
	/** The value of the Output parameter as a basic type. */
	valueBase64Binary?: string;
	/** Extensions for valueBase64Binary */
	_valueBase64Binary?: Element;
	/** The value of the Output parameter as a basic type. */
	valueBoolean?: boolean;
	/** Extensions for valueBoolean */
	_valueBoolean?: Element;
	/** The value of the Output parameter as a basic type. */
	valueCanonical?: string;
	/** Extensions for valueCanonical */
	_valueCanonical?: Element;
	/** The value of the Output parameter as a basic type. */
	valueCode?: string;
	/** Extensions for valueCode */
	_valueCode?: Element;
	/** The value of the Output parameter as a basic type. */
	valueCodeableConcept?: CodeableConcept;
	/** The value of the Output parameter as a basic type. */
	valueCodeableReference?: CodeableReference;
	/** The value of the Output parameter as a basic type. */
	valueCoding?: Coding;
	/** The value of the Output parameter as a basic type. */
	valueContactDetail?: ContactDetail;
	/** The value of the Output parameter as a basic type. */
	valueContactPoint?: ContactPoint;
	/** The value of the Output parameter as a basic type. */
	valueCount?: Count;
	/** The value of the Output parameter as a basic type. */
	valueDataRequirement?: DataRequirement;
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
	valueDosage?: Dosage;
	/** The value of the Output parameter as a basic type. */
	valueDuration?: Duration;
	/** The value of the Output parameter as a basic type. */
	valueExpression?: Expression;
	/** The value of the Output parameter as a basic type. */
	valueExtendedContactDetail?: ExtendedContactDetail;
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
	valueInteger64?: string;
	/** Extensions for valueInteger64 */
	_valueInteger64?: Element;
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
	valueParameterDefinition?: ParameterDefinition;
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
	valueRatioRange?: RatioRange;
	/** The value of the Output parameter as a basic type. */
	valueReference?: Reference;
	/** The value of the Output parameter as a basic type. */
	valueRelatedArtifact?: RelatedArtifact;
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
	valueTriggerDefinition?: TriggerDefinition;
	/** The value of the Output parameter as a basic type. */
	valueUnsignedInt?: number;
	/** Extensions for valueUnsignedInt */
	_valueUnsignedInt?: Element;
	/** The value of the Output parameter as a basic type. */
	valueUri?: string;
	/** Extensions for valueUri */
	_valueUri?: Element;
	/** The value of the Output parameter as a basic type. */
	valueUrl?: string;
	/** Extensions for valueUrl */
	_valueUrl?: Element;
	/** The value of the Output parameter as a basic type. */
	valueUsageContext?: UsageContext;
	/** The value of the Output parameter as a basic type. */
	valueUuid?: string;
	/** Extensions for valueUuid */
	_valueUuid?: Element;
}

const getAddressSchema = (): z.ZodType<Address> =>
	AddressSchemaInternal as z.ZodType<Address>;
const getAgeSchema = (): z.ZodType<Age> => AgeSchemaInternal as z.ZodType<Age>;
const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getAvailabilitySchema = (): z.ZodType<Availability> =>
	AvailabilitySchemaInternal as z.ZodType<Availability>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
	ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
	ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getCountSchema = (): z.ZodType<Count> =>
	CountSchemaInternal as z.ZodType<Count>;
const getDataRequirementSchema = (): z.ZodType<DataRequirement> =>
	DataRequirementSchemaInternal as z.ZodType<DataRequirement>;
const getDistanceSchema = (): z.ZodType<Distance> =>
	DistanceSchemaInternal as z.ZodType<Distance>;
const getDosageSchema = (): z.ZodType<Dosage> =>
	DosageSchemaInternal as z.ZodType<Dosage>;
const getDurationSchema = (): z.ZodType<Duration> =>
	DurationSchemaInternal as z.ZodType<Duration>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExpressionSchema = (): z.ZodType<Expression> =>
	ExpressionSchemaInternal as z.ZodType<Expression>;
const getExtendedContactDetailSchema = (): z.ZodType<ExtendedContactDetail> =>
	ExtendedContactDetailSchemaInternal as z.ZodType<ExtendedContactDetail>;
const getHumanNameSchema = (): z.ZodType<HumanName> =>
	HumanNameSchemaInternal as z.ZodType<HumanName>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMetaSchema = (): z.ZodType<Meta> =>
	MetaSchemaInternal as z.ZodType<Meta>;
const getMoneySchema = (): z.ZodType<Money> =>
	MoneySchemaInternal as z.ZodType<Money>;
const getParameterDefinitionSchema = (): z.ZodType<ParameterDefinition> =>
	ParameterDefinitionSchemaInternal as z.ZodType<ParameterDefinition>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;
const getRatioSchema = (): z.ZodType<Ratio> =>
	RatioSchemaInternal as z.ZodType<Ratio>;
const getRatioRangeSchema = (): z.ZodType<RatioRange> =>
	RatioRangeSchemaInternal as z.ZodType<RatioRange>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getRelatedArtifactSchema = (): z.ZodType<RelatedArtifact> =>
	RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;
const getSampledDataSchema = (): z.ZodType<SampledData> =>
	SampledDataSchemaInternal as z.ZodType<SampledData>;
const getSignatureSchema = (): z.ZodType<Signature> =>
	SignatureSchemaInternal as z.ZodType<Signature>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;
const getTriggerDefinitionSchema = (): z.ZodType<TriggerDefinition> =>
	TriggerDefinitionSchemaInternal as z.ZodType<TriggerDefinition>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const Transport_OutputSchemaInternal =
	BackboneElementSchemaInternal.extend({
		type: z.lazy(getCodeableConceptSchema),
		valueAddress: z.lazy(getAddressSchema).optional(),
		valueAge: z.lazy(getAgeSchema).optional(),
		valueAnnotation: z.lazy(getAnnotationSchema).optional(),
		valueAttachment: z.lazy(getAttachmentSchema).optional(),
		valueAvailability: z.lazy(getAvailabilitySchema).optional(),
		valueBase64Binary: fhirBase64Binary().optional(),
		_valueBase64Binary: z.lazy(getElementSchema).optional(),
		valueBoolean: z.boolean().optional(),
		_valueBoolean: z.lazy(getElementSchema).optional(),
		valueCanonical: fhirCanonical().optional(),
		_valueCanonical: z.lazy(getElementSchema).optional(),
		valueCode: fhirCode().optional(),
		_valueCode: z.lazy(getElementSchema).optional(),
		valueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		valueCodeableReference: z.lazy(getCodeableReferenceSchema).optional(),
		valueCoding: z.lazy(getCodingSchema).optional(),
		valueContactDetail: z.lazy(getContactDetailSchema).optional(),
		valueContactPoint: z.lazy(getContactPointSchema).optional(),
		valueCount: z.lazy(getCountSchema).optional(),
		valueDataRequirement: z.lazy(getDataRequirementSchema).optional(),
		valueDate: fhirDate().optional(),
		_valueDate: z.lazy(getElementSchema).optional(),
		valueDateTime: fhirDateTime().optional(),
		_valueDateTime: z.lazy(getElementSchema).optional(),
		valueDecimal: z.number().optional(),
		_valueDecimal: z.lazy(getElementSchema).optional(),
		valueDistance: z.lazy(getDistanceSchema).optional(),
		valueDosage: z.lazy(getDosageSchema).optional(),
		valueDuration: z.lazy(getDurationSchema).optional(),
		valueExpression: z.lazy(getExpressionSchema).optional(),
		valueExtendedContactDetail: z
			.lazy(getExtendedContactDetailSchema)
			.optional(),
		valueHumanName: z.lazy(getHumanNameSchema).optional(),
		valueId: fhirId().optional(),
		_valueId: z.lazy(getElementSchema).optional(),
		valueIdentifier: z.lazy(getIdentifierSchema).optional(),
		valueInstant: fhirInstant().optional(),
		_valueInstant: z.lazy(getElementSchema).optional(),
		valueInteger: z.number().int().optional(),
		_valueInteger: z.lazy(getElementSchema).optional(),
		valueInteger64: fhirInteger64().optional(),
		_valueInteger64: z.lazy(getElementSchema).optional(),
		valueMarkdown: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_valueMarkdown: z.lazy(getElementSchema).optional(),
		valueMeta: z.lazy(getMetaSchema).optional(),
		valueMoney: z.lazy(getMoneySchema).optional(),
		valueOid: fhirOid().optional(),
		_valueOid: z.lazy(getElementSchema).optional(),
		valueParameterDefinition: z.lazy(getParameterDefinitionSchema).optional(),
		valuePeriod: z.lazy(getPeriodSchema).optional(),
		valuePositiveInt: z.number().int().positive().optional(),
		_valuePositiveInt: z.lazy(getElementSchema).optional(),
		valueQuantity: z.lazy(getQuantitySchema).optional(),
		valueRange: z.lazy(getRangeSchema).optional(),
		valueRatio: z.lazy(getRatioSchema).optional(),
		valueRatioRange: z.lazy(getRatioRangeSchema).optional(),
		valueReference: z.lazy(getReferenceSchema).optional(),
		valueRelatedArtifact: z.lazy(getRelatedArtifactSchema).optional(),
		valueSampledData: z.lazy(getSampledDataSchema).optional(),
		valueSignature: z.lazy(getSignatureSchema).optional(),
		valueString: fhirString().optional(),
		_valueString: z.lazy(getElementSchema).optional(),
		valueTime: fhirTime().optional(),
		_valueTime: z.lazy(getElementSchema).optional(),
		valueTiming: z.lazy(getTimingSchema).optional(),
		valueTriggerDefinition: z.lazy(getTriggerDefinitionSchema).optional(),
		valueUnsignedInt: z.number().int().nonnegative().optional(),
		_valueUnsignedInt: z.lazy(getElementSchema).optional(),
		valueUri: fhirUri().optional(),
		_valueUri: z.lazy(getElementSchema).optional(),
		valueUrl: fhirUrl().optional(),
		_valueUrl: z.lazy(getElementSchema).optional(),
		valueUsageContext: z.lazy(getUsageContextSchema).optional(),
		valueUuid: fhirUuid().optional(),
		_valueUuid: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const value_x_Present = [
				"valueAddress",
				"valueAge",
				"valueAnnotation",
				"valueAttachment",
				"valueAvailability",
				"valueBase64Binary",
				"valueBoolean",
				"valueCanonical",
				"valueCode",
				"valueCodeableConcept",
				"valueCodeableReference",
				"valueCoding",
				"valueContactDetail",
				"valueContactPoint",
				"valueCount",
				"valueDataRequirement",
				"valueDate",
				"valueDateTime",
				"valueDecimal",
				"valueDistance",
				"valueDosage",
				"valueDuration",
				"valueExpression",
				"valueExtendedContactDetail",
				"valueHumanName",
				"valueId",
				"valueIdentifier",
				"valueInstant",
				"valueInteger",
				"valueInteger64",
				"valueMarkdown",
				"valueMeta",
				"valueMoney",
				"valueOid",
				"valueParameterDefinition",
				"valuePeriod",
				"valuePositiveInt",
				"valueQuantity",
				"valueRange",
				"valueRatio",
				"valueRatioRange",
				"valueReference",
				"valueRelatedArtifact",
				"valueSampledData",
				"valueSignature",
				"valueString",
				"valueTime",
				"valueTiming",
				"valueTriggerDefinition",
				"valueUnsignedInt",
				"valueUri",
				"valueUrl",
				"valueUsageContext",
				"valueUuid",
			].filter((field) => record[field] !== undefined);
			if (value_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of valueAddress, valueAge, valueAnnotation, valueAttachment, valueAvailability, valueBase64Binary, valueBoolean, valueCanonical, valueCode, valueCodeableConcept, valueCodeableReference, valueCoding, valueContactDetail, valueContactPoint, valueCount, valueDataRequirement, valueDate, valueDateTime, valueDecimal, valueDistance, valueDosage, valueDuration, valueExpression, valueExtendedContactDetail, valueHumanName, valueId, valueIdentifier, valueInstant, valueInteger, valueInteger64, valueMarkdown, valueMeta, valueMoney, valueOid, valueParameterDefinition, valuePeriod, valuePositiveInt, valueQuantity, valueRange, valueRatio, valueRatioRange, valueReference, valueRelatedArtifact, valueSampledData, valueSignature, valueString, valueTime, valueTiming, valueTriggerDefinition, valueUnsignedInt, valueUri, valueUrl, valueUsageContext, valueUuid must be present for value[x]",
					path: ["valueAddress"],
				});
			}
			if (value_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of valueAddress, valueAge, valueAnnotation, valueAttachment, valueAvailability, valueBase64Binary, valueBoolean, valueCanonical, valueCode, valueCodeableConcept, valueCodeableReference, valueCoding, valueContactDetail, valueContactPoint, valueCount, valueDataRequirement, valueDate, valueDateTime, valueDecimal, valueDistance, valueDosage, valueDuration, valueExpression, valueExtendedContactDetail, valueHumanName, valueId, valueIdentifier, valueInstant, valueInteger, valueInteger64, valueMarkdown, valueMeta, valueMoney, valueOid, valueParameterDefinition, valuePeriod, valuePositiveInt, valueQuantity, valueRange, valueRatio, valueRatioRange, valueReference, valueRelatedArtifact, valueSampledData, valueSignature, valueString, valueTime, valueTiming, valueTriggerDefinition, valueUnsignedInt, valueUri, valueUrl, valueUsageContext, valueUuid may be present for value[x]",
					path: [value_x_Present[0]],
				});
			}
		});

export const Transport_OutputSchema =
	Transport_OutputSchemaInternal as z.ZodType<Transport_Output>;
