// Profile: http://hl7.org/fhir/StructureDefinition/DeviceMetric
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DeviceMetric_Calibration } from "./DeviceMetric_Calibration";
import { DeviceMetric_CalibrationSchemaInternal } from "./DeviceMetric_Calibration";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { Timing } from "./Timing";
import { TimingSchemaInternal } from "./Timing";

/** Describes a measurement, calculation or setting capability of a medical device. */
export interface DeviceMetric extends DomainResource {
	/** Describes the calibrations that have been performed or that are required to be performed. */
	calibration?: Array<DeviceMetric_Calibration>;
	/** Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation. */
	category: "calculation" | "measurement" | "setting" | "unspecified";
	/** Extensions for category */
	_category?: Element;
	/** Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta. */
	color?:
		| "black"
		| "blue"
		| "cyan"
		| "green"
		| "magenta"
		| "red"
		| "white"
		| "yellow";
	/** Extensions for color */
	_color?: Element;
	/** Unique instance identifiers assigned to a device by the device or gateway software, manufacturers, other organizations or owners. For example: handle ID. */
	identifier?: Array<Identifier>;
	/** Describes the measurement repetition time. This is not necessarily the same as the update period. The measurement repetition time can range from milliseconds up to hours. An example for a measurement repetition time in the range of milliseconds is the sampling rate of an ECG. An example for a measurement repetition time in the range of hours is a NIBP that is triggered automatically every hour. The update period may be different than the measurement repetition time, if the device does not update the published observed value with the same frequency as it was measured. */
	measurementPeriod?: Timing;
	/** Indicates current operational state of the device. For example: On, Off, Standby, etc. */
	operationalStatus?: "entered-in-error" | "off" | "on" | "standby";
	/** Extensions for operationalStatus */
	_operationalStatus?: Element;
	/** Describes the link to the  Device that this DeviceMetric belongs to and that provide information about the location of this DeviceMetric in the containment structure of the parent Device. An example would be a Device that represents a Channel. This reference can be used by a client application to distinguish DeviceMetrics that have the same type, but should be interpreted based on their containment location. */
	parent?: Reference;
	/** This is a DeviceMetric resource. */
	resourceType: "DeviceMetric";
	/** Describes the link to the  Device that this DeviceMetric belongs to and that contains administrative device information such as manufacturer, serial number, etc. */
	source?: Reference;
	/** Describes the type of the metric. For example: Heart Rate, PEEP Setting, etc. */
	type: CodeableConcept;
	/** Describes the unit that an observed value determined for this metric will have. For example: Percent, Seconds, etc. */
	unit?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDeviceMetric_CalibrationSchema =
	(): z.ZodType<DeviceMetric_Calibration> =>
		DeviceMetric_CalibrationSchemaInternal as z.ZodType<DeviceMetric_Calibration>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const DeviceMetricSchemaInternal = DomainResourceSchemaInternal.extend({
	calibration: z.lazy(getDeviceMetric_CalibrationSchema).array().optional(),
	category: z.enum(["calculation", "measurement", "setting", "unspecified"]),
	_category: z.lazy(getElementSchema).optional(),
	color: z
		.enum([
			"black",
			"blue",
			"cyan",
			"green",
			"magenta",
			"red",
			"white",
			"yellow",
		])
		.optional(),
	_color: z.lazy(getElementSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	measurementPeriod: z.lazy(getTimingSchema).optional(),
	operationalStatus: z
		.enum(["entered-in-error", "off", "on", "standby"])
		.optional(),
	_operationalStatus: z.lazy(getElementSchema).optional(),
	parent: z.lazy(getReferenceSchema).optional(),
	resourceType: z.literal("DeviceMetric"),
	source: z.lazy(getReferenceSchema).optional(),
	type: z.lazy(getCodeableConceptSchema),
	unit: z.lazy(getCodeableConceptSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.parent,
			"parent",
			["http://hl7.org/fhir/StructureDefinition/Device"],
			["Device"],
			ctx,
		);
		validateReferenceTarget(
			record.source,
			"source",
			["http://hl7.org/fhir/StructureDefinition/Device"],
			["Device"],
			ctx,
		);
	});

export const DeviceMetricSchema =
	DeviceMetricSchemaInternal as z.ZodType<DeviceMetric>;
