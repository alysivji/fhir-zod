// Profile: http://hl7.org/fhir/StructureDefinition/Extension
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T04:00:24.609Z

import * as z from "zod";
import type { Address } from "./Address";
import type { Age } from "./Age";
import type { Annotation } from "./Annotation";
import type { Attachment } from "./Attachment";
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
	valueExpression?: unknown;
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
	valueMeta?: Meta;
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
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;
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
export const ExtensionSchemaInternal = z
	.object({
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		url: z.string().regex(/\S*/),
		_url: z.lazy(getElementSchema).optional(),
		valueAddress: z.lazy(getAddressSchema).optional(),
		valueAge: z.lazy(getAgeSchema).optional(),
		valueAnnotation: z.lazy(getAnnotationSchema).optional(),
		valueAttachment: z.lazy(getAttachmentSchema).optional(),
		valueBase64Binary: z
			.string()
			.regex(/(\s*([0-9a-zA-Z+/=]){4}\s*)+/)
			.optional(),
		_valueBase64Binary: z.lazy(getElementSchema).optional(),
		valueBoolean: z.boolean().optional(),
		_valueBoolean: z.lazy(getElementSchema).optional(),
		valueCanonical: z.string().regex(/\S*/).optional(),
		_valueCanonical: z.lazy(getElementSchema).optional(),
		valueCode: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional(),
		_valueCode: z.lazy(getElementSchema).optional(),
		valueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
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
		valueExpression: z.any().optional(),
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
		valueOid: z
			.string()
			.regex(/urn:oid:[0-2](\.(0|[1-9][0-9]*))+/)
			.optional(),
		_valueOid: z.lazy(getElementSchema).optional(),
		valueParameterDefinition: z.lazy(getParameterDefinitionSchema).optional(),
		valuePeriod: z.lazy(getPeriodSchema).optional(),
		valuePositiveInt: z.number().int().positive().optional(),
		_valuePositiveInt: z.lazy(getElementSchema).optional(),
		valueQuantity: z.lazy(getQuantitySchema).optional(),
		valueRange: z.lazy(getRangeSchema).optional(),
		valueRatio: z.lazy(getRatioSchema).optional(),
		valueReference: z.lazy(getReferenceSchema).optional(),
		valueRelatedArtifact: z.lazy(getRelatedArtifactSchema).optional(),
		valueSampledData: z.lazy(getSampledDataSchema).optional(),
		valueSignature: z.lazy(getSignatureSchema).optional(),
		valueString: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_valueString: z.lazy(getElementSchema).optional(),
		valueTime: fhirTime().optional(),
		_valueTime: z.lazy(getElementSchema).optional(),
		valueTiming: z.lazy(getTimingSchema).optional(),
		valueTriggerDefinition: z.lazy(getTriggerDefinitionSchema).optional(),
		valueUnsignedInt: z.number().int().nonnegative().optional(),
		_valueUnsignedInt: z.lazy(getElementSchema).optional(),
		valueUri: z.string().regex(/\S*/).optional(),
		_valueUri: z.lazy(getElementSchema).optional(),
		valueUrl: z.string().regex(/\S*/).optional(),
		_valueUrl: z.lazy(getElementSchema).optional(),
		valueUsageContext: z.lazy(getUsageContextSchema).optional(),
		valueUuid: z
			.string()
			.regex(
				/urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
			)
			.optional(),
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
			"valueMeta",
			"valueMoney",
			"valueOid",
			"valueParameterDefinition",
			"valuePeriod",
			"valuePositiveInt",
			"valueQuantity",
			"valueRange",
			"valueRatio",
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
					"Only one of valueAddress, valueAge, valueAnnotation, valueAttachment, valueBase64Binary, valueBoolean, valueCanonical, valueCode, valueCodeableConcept, valueCoding, valueContactDetail, valueContactPoint, valueContributor, valueCount, valueDataRequirement, valueDate, valueDateTime, valueDecimal, valueDistance, valueDosage, valueDuration, valueExpression, valueHumanName, valueId, valueIdentifier, valueInstant, valueInteger, valueMarkdown, valueMeta, valueMoney, valueOid, valueParameterDefinition, valuePeriod, valuePositiveInt, valueQuantity, valueRange, valueRatio, valueReference, valueRelatedArtifact, valueSampledData, valueSignature, valueString, valueTime, valueTiming, valueTriggerDefinition, valueUnsignedInt, valueUri, valueUrl, valueUsageContext, valueUuid may be present for value[x]",
				path: [value_x_Present[0]],
			});
		}
	});

export const ExtensionSchema: z.ZodType<Extension> = ExtensionSchemaInternal;
