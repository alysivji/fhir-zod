// Profile: http://hl7.org/fhir/StructureDefinition/Extension
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

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

export interface Extension extends Element {
	url: string;
	_url?: Element;
	valueAddress?: Address;
	valueAge?: Age;
	valueAnnotation?: Annotation;
	valueAttachment?: Attachment;
	valueBase64Binary?: string;
	_valueBase64Binary?: Element;
	valueBoolean?: boolean;
	_valueBoolean?: Element;
	valueCanonical?: string;
	_valueCanonical?: Element;
	valueCode?: string;
	_valueCode?: Element;
	valueCodeableConcept?: CodeableConcept;
	valueCoding?: Coding;
	valueContactDetail?: ContactDetail;
	valueContactPoint?: ContactPoint;
	valueContributor?: Contributor;
	valueCount?: Count;
	valueDataRequirement?: DataRequirement;
	valueDate?: string;
	_valueDate?: Element;
	valueDateTime?: string;
	_valueDateTime?: Element;
	valueDecimal?: number;
	_valueDecimal?: Element;
	valueDistance?: Distance;
	valueDosage?: Dosage;
	valueDuration?: Duration;
	valueExpression?: unknown;
	valueHumanName?: HumanName;
	valueId?: string;
	_valueId?: Element;
	valueIdentifier?: Identifier;
	valueInstant?: string;
	_valueInstant?: Element;
	valueInteger?: number;
	_valueInteger?: Element;
	valueMarkdown?: string;
	_valueMarkdown?: Element;
	valueMeta?: Meta;
	valueMoney?: Money;
	valueOid?: string;
	_valueOid?: Element;
	valueParameterDefinition?: ParameterDefinition;
	valuePeriod?: Period;
	valuePositiveInt?: number;
	_valuePositiveInt?: Element;
	valueQuantity?: Quantity;
	valueRange?: Range;
	valueRatio?: Ratio;
	valueReference?: Reference;
	valueRelatedArtifact?: RelatedArtifact;
	valueSampledData?: SampledData;
	valueSignature?: Signature;
	valueString?: string;
	_valueString?: Element;
	valueTime?: string;
	_valueTime?: Element;
	valueTiming?: Timing;
	valueTriggerDefinition?: TriggerDefinition;
	valueUnsignedInt?: number;
	_valueUnsignedInt?: Element;
	valueUri?: string;
	_valueUri?: Element;
	valueUrl?: string;
	_valueUrl?: Element;
	valueUsageContext?: UsageContext;
	valueUuid?: string;
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
		extension: z
			.lazy(getExtensionSchema)
			.array()
			.optional()
			.describe(
				"May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
			),
		id: fhirId()
			.optional()
			.describe(
				"Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
			),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		url: z
			.string()
			.regex(/\S*/)
			.describe(
				"Source of the definition for the extension code - a logical name or a URL.",
			),
		_url: z.lazy(getElementSchema).optional().describe("Extensions for url"),
		valueAddress: z
			.lazy(getAddressSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueAge: z
			.lazy(getAgeSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueAnnotation: z
			.lazy(getAnnotationSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueAttachment: z
			.lazy(getAttachmentSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueBase64Binary: z
			.string()
			.regex(/(\s*([0-9a-zA-Z+/=]){4}\s*)+/)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		_valueBase64Binary: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueBase64Binary"),
		valueBoolean: z
			.boolean()
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		_valueBoolean: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueBoolean"),
		valueCanonical: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		_valueCanonical: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueCanonical"),
		valueCode: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		_valueCode: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueCode"),
		valueCodeableConcept: z
			.lazy(getCodeableConceptSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueCoding: z
			.lazy(getCodingSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueContactDetail: z
			.lazy(getContactDetailSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueContactPoint: z
			.lazy(getContactPointSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueContributor: z
			.lazy(getContributorSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueCount: z
			.lazy(getCountSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueDataRequirement: z
			.lazy(getDataRequirementSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueDate: fhirDate()
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		_valueDate: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueDate"),
		valueDateTime: fhirDateTime()
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		_valueDateTime: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueDateTime"),
		valueDecimal: z
			.number()
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		_valueDecimal: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueDecimal"),
		valueDistance: z
			.lazy(getDistanceSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueDosage: z
			.lazy(getDosageSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueDuration: z
			.lazy(getDurationSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueExpression: z
			.any()
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueHumanName: z
			.lazy(getHumanNameSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueId: fhirId()
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		_valueId: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueId"),
		valueIdentifier: z
			.lazy(getIdentifierSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueInstant: fhirInstant()
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		_valueInstant: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueInstant"),
		valueInteger: z
			.number()
			.int()
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		_valueInteger: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueInteger"),
		valueMarkdown: z
			.string()
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		_valueMarkdown: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueMarkdown"),
		valueMeta: z
			.lazy(getMetaSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueMoney: z
			.lazy(getMoneySchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueOid: z
			.string()
			.regex(/urn:oid:[0-2](\.(0|[1-9][0-9]*))+/)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		_valueOid: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueOid"),
		valueParameterDefinition: z
			.lazy(getParameterDefinitionSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valuePeriod: z
			.lazy(getPeriodSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valuePositiveInt: z
			.number()
			.int()
			.positive()
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		_valuePositiveInt: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valuePositiveInt"),
		valueQuantity: z
			.lazy(getQuantitySchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueRange: z
			.lazy(getRangeSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueRatio: z
			.lazy(getRatioSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueReference: z
			.lazy(getReferenceSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueRelatedArtifact: z
			.lazy(getRelatedArtifactSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueSampledData: z
			.lazy(getSampledDataSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueSignature: z
			.lazy(getSignatureSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueString: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		_valueString: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueString"),
		valueTime: fhirTime()
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		_valueTime: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueTime"),
		valueTiming: z
			.lazy(getTimingSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueTriggerDefinition: z
			.lazy(getTriggerDefinitionSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueUnsignedInt: z
			.number()
			.int()
			.nonnegative()
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		_valueUnsignedInt: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueUnsignedInt"),
		valueUri: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		_valueUri: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueUri"),
		valueUrl: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		_valueUrl: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueUrl"),
		valueUsageContext: z
			.lazy(getUsageContextSchema)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueUuid: z
			.string()
			.regex(
				/urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
			)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		_valueUuid: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueUuid"),
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
