// Profile: http://hl7.org/fhir/StructureDefinition/Extension
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

export const Extension = z
	.object({
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_url: z.lazy(getElementSchema).optional().describe("Extensions for url"),
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
		url: z
			.string()
			.regex(/\S*/)
			.describe(
				"Source of the definition for the extension code - a logical name or a URL.",
			),
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
		valueBoolean: z
			.boolean()
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueCanonical: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueCode: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
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
		valueDateTime: fhirDateTime()
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueDecimal: z
			.number()
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
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
			.unknown()
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
		valueInteger: z
			.number()
			.int()
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueMarkdown: z
			.string()
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
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
		valueTime: fhirTime()
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
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
		valueUri: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
		valueUrl: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
			),
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

export type Extension = z.output<typeof Extension>;
