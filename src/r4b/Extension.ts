// Profile: http://hl7.org/fhir/StructureDefinition/Extension
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-17T23:33:05.787Z

import * as z from "zod";
import {
	fhirBase64Binary,
	fhirCanonical,
	fhirCode,
	fhirDate,
	fhirDateTime,
	fhirId,
	fhirInstant,
	fhirOid,
	fhirString,
	fhirTime,
	fhirUri,
	fhirUrl,
	fhirUuid,
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
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { ContactDetail } from "./ContactDetail";
import { ContactDetailSchemaInternal } from "./ContactDetail";
import type { ContactPoint } from "./ContactPoint";
import { ContactPointSchemaInternal } from "./ContactPoint";
import type { Contributor } from "./Contributor";
import { ContributorSchemaInternal } from "./Contributor";
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
import type { HumanName } from "./HumanName";
import { HumanNameSchemaInternal } from "./HumanName";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
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

/** Base StructureDefinition for Extension Type: Optional Extension Element - found in all resources. */
export interface Extension extends Element {
	/** Source of the definition for the extension code - a logical name or a URL. */
	url: string;
	/** Extensions for url */
	_url?: Element;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueAddress?: Address;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueAge?: Age;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueAnnotation?: Annotation;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueAttachment?: Attachment;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueBase64Binary?: string;
	/** Extensions for valueBase64Binary */
	_valueBase64Binary?: Element;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueBoolean?: boolean;
	/** Extensions for valueBoolean */
	_valueBoolean?: Element;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueCanonical?: string;
	/** Extensions for valueCanonical */
	_valueCanonical?: Element;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueCode?: string;
	/** Extensions for valueCode */
	_valueCode?: Element;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueCodeableConcept?: CodeableConcept;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueCodeableReference?: CodeableReference;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueCoding?: Coding;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueContactDetail?: ContactDetail;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueContactPoint?: ContactPoint;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueContributor?: Contributor;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueCount?: Count;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueDataRequirement?: DataRequirement;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueDate?: string;
	/** Extensions for valueDate */
	_valueDate?: Element;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueDateTime?: string;
	/** Extensions for valueDateTime */
	_valueDateTime?: Element;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueDecimal?: number;
	/** Extensions for valueDecimal */
	_valueDecimal?: Element;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueDistance?: Distance;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueDosage?: Dosage;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueDuration?: Duration;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueExpression?: Expression;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueHumanName?: HumanName;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueId?: string;
	/** Extensions for valueId */
	_valueId?: Element;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueIdentifier?: Identifier;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueInstant?: string;
	/** Extensions for valueInstant */
	_valueInstant?: Element;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueInteger?: number;
	/** Extensions for valueInteger */
	_valueInteger?: Element;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueMarkdown?: string;
	/** Extensions for valueMarkdown */
	_valueMarkdown?: Element;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueMoney?: Money;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueOid?: string;
	/** Extensions for valueOid */
	_valueOid?: Element;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueParameterDefinition?: ParameterDefinition;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valuePeriod?: Period;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valuePositiveInt?: number;
	/** Extensions for valuePositiveInt */
	_valuePositiveInt?: Element;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueQuantity?: Quantity;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueRange?: Range;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueRatio?: Ratio;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueRatioRange?: RatioRange;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueReference?: Reference;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueRelatedArtifact?: RelatedArtifact;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueSampledData?: SampledData;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueSignature?: Signature;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueString?: string;
	/** Extensions for valueString */
	_valueString?: Element;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueTime?: string;
	/** Extensions for valueTime */
	_valueTime?: Element;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueTiming?: Timing;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueTriggerDefinition?: TriggerDefinition;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueUnsignedInt?: number;
	/** Extensions for valueUnsignedInt */
	_valueUnsignedInt?: Element;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueUri?: string;
	/** Extensions for valueUri */
	_valueUri?: Element;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueUrl?: string;
	/** Extensions for valueUrl */
	_valueUrl?: Element;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
	valueUsageContext?: UsageContext;
	/** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
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
const getContributorSchema = (): z.ZodType<Contributor> =>
	ContributorSchemaInternal as z.ZodType<Contributor>;
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
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;
const getHumanNameSchema = (): z.ZodType<HumanName> =>
	HumanNameSchemaInternal as z.ZodType<HumanName>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
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
export const ExtensionSchemaInternal = z
	.object({
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
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
		valueCanonical: fhirCanonical().optional(),
		_valueCanonical: z.lazy(getElementSchema).optional(),
		valueCode: fhirCode().optional(),
		_valueCode: z.lazy(getElementSchema).optional(),
		valueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		valueCodeableReference: z.lazy(getCodeableReferenceSchema).optional(),
		valueCoding: z.lazy(getCodingSchema).optional(),
		valueContactDetail: z.lazy(getContactDetailSchema).optional(),
		valueContactPoint: z.lazy(getContactPointSchema).optional(),
		valueContributor: z.lazy(getContributorSchema).optional(),
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
		valueHumanName: z.lazy(getHumanNameSchema).optional(),
		valueId: fhirId().optional(),
		_valueId: z.lazy(getElementSchema).optional(),
		valueIdentifier: z.lazy(getIdentifierSchema).optional(),
		valueInstant: fhirInstant().optional(),
		_valueInstant: z.lazy(getElementSchema).optional(),
		valueInteger: z.number().int().optional(),
		_valueInteger: z.lazy(getElementSchema).optional(),
		valueMarkdown: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_valueMarkdown: z.lazy(getElementSchema).optional(),
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
			"valueBase64Binary",
			"valueBoolean",
			"valueCanonical",
			"valueCode",
			"valueCodeableConcept",
			"valueCodeableReference",
			"valueCoding",
			"valueContactDetail",
			"valueContactPoint",
			"valueContributor",
			"valueCount",
			"valueDataRequirement",
			"valueDate",
			"valueDateTime",
			"valueDecimal",
			"valueDistance",
			"valueDosage",
			"valueDuration",
			"valueExpression",
			"valueHumanName",
			"valueId",
			"valueIdentifier",
			"valueInstant",
			"valueInteger",
			"valueMarkdown",
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
		if (value_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of valueAddress, valueAge, valueAnnotation, valueAttachment, valueBase64Binary, valueBoolean, valueCanonical, valueCode, valueCodeableConcept, valueCodeableReference, valueCoding, valueContactDetail, valueContactPoint, valueContributor, valueCount, valueDataRequirement, valueDate, valueDateTime, valueDecimal, valueDistance, valueDosage, valueDuration, valueExpression, valueHumanName, valueId, valueIdentifier, valueInstant, valueInteger, valueMarkdown, valueMoney, valueOid, valueParameterDefinition, valuePeriod, valuePositiveInt, valueQuantity, valueRange, valueRatio, valueRatioRange, valueReference, valueRelatedArtifact, valueSampledData, valueSignature, valueString, valueTime, valueTiming, valueTriggerDefinition, valueUnsignedInt, valueUri, valueUrl, valueUsageContext, valueUuid may be present for value[x]",
				path: [value_x_Present[0]],
			});
		}
	});

export const ExtensionSchema = ExtensionSchemaInternal as z.ZodType<Extension>;
