// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
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

export interface ElementDefinition_Example extends Element {
	label: string;
	_label?: Element;
	valueAddress: Address;
	valueAge: Age;
	valueAnnotation: Annotation;
	valueAttachment: Attachment;
	valueBase64Binary: string;
	_valueBase64Binary?: Element;
	valueBoolean: boolean;
	_valueBoolean?: Element;
	valueCanonical: string;
	_valueCanonical?: Element;
	valueCode: string;
	_valueCode?: Element;
	valueCodeableConcept: CodeableConcept;
	valueCoding: Coding;
	valueContactDetail: ContactDetail;
	valueContactPoint: ContactPoint;
	valueContributor: Contributor;
	valueCount: Count;
	valueDataRequirement: DataRequirement;
	valueDate: string;
	_valueDate?: Element;
	valueDateTime: string;
	_valueDateTime?: Element;
	valueDecimal: number;
	_valueDecimal?: Element;
	valueDistance: Distance;
	valueDosage: Dosage;
	valueDuration: Duration;
	valueExpression?: unknown;
	valueHumanName: HumanName;
	valueId: string;
	_valueId?: Element;
	valueIdentifier: Identifier;
	valueInstant: string;
	_valueInstant?: Element;
	valueInteger: number;
	_valueInteger?: Element;
	valueMarkdown: string;
	_valueMarkdown?: Element;
	valueMeta: Meta;
	valueMoney: Money;
	valueOid: string;
	_valueOid?: Element;
	valueParameterDefinition: ParameterDefinition;
	valuePeriod: Period;
	valuePositiveInt: number;
	_valuePositiveInt?: Element;
	valueQuantity: Quantity;
	valueRange: Range;
	valueRatio: Ratio;
	valueReference: Reference;
	valueRelatedArtifact: RelatedArtifact;
	valueSampledData: SampledData;
	valueSignature: Signature;
	valueString: string;
	_valueString?: Element;
	valueTime: string;
	_valueTime?: Element;
	valueTiming: Timing;
	valueTriggerDefinition: TriggerDefinition;
	valueUnsignedInt: number;
	_valueUnsignedInt?: Element;
	valueUri: string;
	_valueUri?: Element;
	valueUrl: string;
	_valueUrl?: Element;
	valueUsageContext: UsageContext;
	valueUuid: string;
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
export const ElementDefinition_ExampleSchemaInternal =
	ElementSchemaInternal.extend({
		label: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.describe(
				"Describes the purpose of this example amoung the set of examples.",
			),
		_label: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for label"),
		valueAddress: z
			.lazy(getAddressSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueAge: z
			.lazy(getAgeSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueAnnotation: z
			.lazy(getAnnotationSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueAttachment: z
			.lazy(getAttachmentSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueBase64Binary: z
			.string()
			.regex(/(\s*([0-9a-zA-Z+/=]){4}\s*)+/)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		_valueBase64Binary: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueBase64Binary"),
		valueBoolean: z
			.boolean()
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		_valueBoolean: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueBoolean"),
		valueCanonical: z
			.string()
			.regex(/\S*/)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		_valueCanonical: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueCanonical"),
		valueCode: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		_valueCode: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueCode"),
		valueCodeableConcept: z
			.lazy(getCodeableConceptSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueCoding: z
			.lazy(getCodingSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueContactDetail: z
			.lazy(getContactDetailSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueContactPoint: z
			.lazy(getContactPointSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueContributor: z
			.lazy(getContributorSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueCount: z
			.lazy(getCountSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueDataRequirement: z
			.lazy(getDataRequirementSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueDate: fhirDate().describe(
			"The actual value for the element, which must be one of the types allowed for this element.",
		),
		_valueDate: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueDate"),
		valueDateTime: fhirDateTime().describe(
			"The actual value for the element, which must be one of the types allowed for this element.",
		),
		_valueDateTime: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueDateTime"),
		valueDecimal: z
			.number()
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		_valueDecimal: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueDecimal"),
		valueDistance: z
			.lazy(getDistanceSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueDosage: z
			.lazy(getDosageSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueDuration: z
			.lazy(getDurationSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueExpression: z
			.any()
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueHumanName: z
			.lazy(getHumanNameSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueId: fhirId().describe(
			"The actual value for the element, which must be one of the types allowed for this element.",
		),
		_valueId: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueId"),
		valueIdentifier: z
			.lazy(getIdentifierSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueInstant: fhirInstant().describe(
			"The actual value for the element, which must be one of the types allowed for this element.",
		),
		_valueInstant: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueInstant"),
		valueInteger: z
			.number()
			.int()
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		_valueInteger: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueInteger"),
		valueMarkdown: z
			.string()
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		_valueMarkdown: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueMarkdown"),
		valueMeta: z
			.lazy(getMetaSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueMoney: z
			.lazy(getMoneySchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueOid: z
			.string()
			.regex(/urn:oid:[0-2](\.(0|[1-9][0-9]*))+/)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		_valueOid: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueOid"),
		valueParameterDefinition: z
			.lazy(getParameterDefinitionSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valuePeriod: z
			.lazy(getPeriodSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valuePositiveInt: z
			.number()
			.int()
			.positive()
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		_valuePositiveInt: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valuePositiveInt"),
		valueQuantity: z
			.lazy(getQuantitySchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueRange: z
			.lazy(getRangeSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueRatio: z
			.lazy(getRatioSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueReference: z
			.lazy(getReferenceSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueRelatedArtifact: z
			.lazy(getRelatedArtifactSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueSampledData: z
			.lazy(getSampledDataSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueSignature: z
			.lazy(getSignatureSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueString: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		_valueString: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueString"),
		valueTime: fhirTime().describe(
			"The actual value for the element, which must be one of the types allowed for this element.",
		),
		_valueTime: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueTime"),
		valueTiming: z
			.lazy(getTimingSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueTriggerDefinition: z
			.lazy(getTriggerDefinitionSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueUnsignedInt: z
			.number()
			.int()
			.nonnegative()
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		_valueUnsignedInt: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueUnsignedInt"),
		valueUri: z
			.string()
			.regex(/\S*/)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		_valueUri: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueUri"),
		valueUrl: z
			.string()
			.regex(/\S*/)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		_valueUrl: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueUrl"),
		valueUsageContext: z
			.lazy(getUsageContextSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueUuid: z
			.string()
			.regex(
				/urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
			)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
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

export const ElementDefinition_ExampleSchema: z.ZodType<ElementDefinition_Example> =
	ElementDefinition_ExampleSchemaInternal;
