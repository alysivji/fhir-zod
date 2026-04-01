// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

import * as z from "zod";
import {
	fhirDate,
	fhirDateTime,
	fhirId,
	fhirInstant,
	fhirTime,
} from "../shared/fhir-primitives";
import { Address } from "./Address";
import { Age } from "./Age";
import { Annotation } from "./Annotation";
import { Attachment } from "./Attachment";
import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { ContactDetail } from "./ContactDetail";
import { ContactPoint } from "./ContactPoint";
import { Contributor } from "./Contributor";
import { Count } from "./Count";
import { DataRequirement } from "./DataRequirement";
import { Distance } from "./Distance";
import { Dosage } from "./Dosage";
import { Duration } from "./Duration";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { HumanName } from "./HumanName";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Money } from "./Money";
import { ParameterDefinition } from "./ParameterDefinition";
import { Period } from "./Period";
import { Quantity } from "./Quantity";
import { Range } from "./Range";
import { Ratio } from "./Ratio";
import { Reference } from "./Reference";
import { RelatedArtifact } from "./RelatedArtifact";
import { SampledData } from "./SampledData";
import { Signature } from "./Signature";
import { Timing } from "./Timing";
import { TriggerDefinition } from "./TriggerDefinition";
import { UsageContext } from "./UsageContext";

const getAddressSchema = (): z.ZodType<unknown> => Address;
const getAgeSchema = (): z.ZodType<unknown> => Age;
const getAnnotationSchema = (): z.ZodType<unknown> => Annotation;
const getAttachmentSchema = (): z.ZodType<unknown> => Attachment;
const getCodeableConceptSchema = (): z.ZodType<unknown> => CodeableConcept;
const getCodingSchema = (): z.ZodType<unknown> => Coding;
const getContactDetailSchema = (): z.ZodType<unknown> => ContactDetail;
const getContactPointSchema = (): z.ZodType<unknown> => ContactPoint;
const getContributorSchema = (): z.ZodType<unknown> => Contributor;
const getCountSchema = (): z.ZodType<unknown> => Count;
const getDataRequirementSchema = (): z.ZodType<unknown> => DataRequirement;
const getDistanceSchema = (): z.ZodType<unknown> => Distance;
const getDosageSchema = (): z.ZodType<unknown> => Dosage;
const getDurationSchema = (): z.ZodType<unknown> => Duration;
const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;
const getHumanNameSchema = (): z.ZodType<unknown> => HumanName;
const getIdentifierSchema = (): z.ZodType<unknown> => Identifier;
const getMetaSchema = (): z.ZodType<unknown> => Meta;
const getMoneySchema = (): z.ZodType<unknown> => Money;
const getParameterDefinitionSchema = (): z.ZodType<unknown> =>
	ParameterDefinition;
const getPeriodSchema = (): z.ZodType<unknown> => Period;
const getQuantitySchema = (): z.ZodType<unknown> => Quantity;
const getRangeSchema = (): z.ZodType<unknown> => Range;
const getRatioSchema = (): z.ZodType<unknown> => Ratio;
const getReferenceSchema = (): z.ZodType<unknown> => Reference;
const getRelatedArtifactSchema = (): z.ZodType<unknown> => RelatedArtifact;
const getSampledDataSchema = (): z.ZodType<unknown> => SampledData;
const getSignatureSchema = (): z.ZodType<unknown> => Signature;
const getTimingSchema = (): z.ZodType<unknown> => Timing;
const getTriggerDefinitionSchema = (): z.ZodType<unknown> => TriggerDefinition;
const getUsageContextSchema = (): z.ZodType<unknown> => UsageContext;

export const ElementDefinition_Example = z
	.object({
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_label: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for label"),
		_valueBase64Binary: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueBase64Binary"),
		_valueBoolean: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueBoolean"),
		_valueCanonical: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueCanonical"),
		_valueCode: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueCode"),
		_valueDate: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueDate"),
		_valueDateTime: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueDateTime"),
		_valueDecimal: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueDecimal"),
		_valueId: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueId"),
		_valueInstant: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueInstant"),
		_valueInteger: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueInteger"),
		_valueMarkdown: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueMarkdown"),
		_valueOid: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueOid"),
		_valuePositiveInt: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valuePositiveInt"),
		_valueString: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueString"),
		_valueTime: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueTime"),
		_valueUnsignedInt: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueUnsignedInt"),
		_valueUri: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueUri"),
		_valueUrl: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueUrl"),
		_valueUuid: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueUuid"),
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
		label: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.describe(
				"Describes the purpose of this example amoung the set of examples.",
			),
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
		valueBoolean: z
			.boolean()
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueCanonical: z
			.string()
			.regex(/\S*/)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueCode: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
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
		valueDateTime: fhirDateTime().describe(
			"The actual value for the element, which must be one of the types allowed for this element.",
		),
		valueDecimal: z
			.number()
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
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
			.unknown()
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
		valueIdentifier: z
			.lazy(getIdentifierSchema)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueInstant: fhirInstant().describe(
			"The actual value for the element, which must be one of the types allowed for this element.",
		),
		valueInteger: z
			.number()
			.int()
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueMarkdown: z
			.string()
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
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
		valueTime: fhirTime().describe(
			"The actual value for the element, which must be one of the types allowed for this element.",
		),
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
		valueUri: z
			.string()
			.regex(/\S*/)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
		valueUrl: z
			.string()
			.regex(/\S*/)
			.describe(
				"The actual value for the element, which must be one of the types allowed for this element.",
			),
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

export type ElementDefinition_Example = z.output<
	typeof ElementDefinition_Example
>;
