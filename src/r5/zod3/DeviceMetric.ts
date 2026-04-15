// Profile: http://hl7.org/fhir/StructureDefinition/DeviceMetric
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
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
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Describes a measurement, calculation or setting capability of a device.  The DeviceMetric resource is derived from the ISO/IEEE 11073-10201 Domain Information Model standard, but is more widely applicable.  */
export interface DeviceMetric extends DomainResource {
	/** Describes the calibrations that have been performed or that are required to be performed. */
	calibration?: Array<DeviceMetric_Calibration>;
	/** Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation. */
	category: "calculation" | "measurement" | "setting" | "unspecified";
	/** Extensions for category */
	_category?: Element;
	/** The preferred color associated with the metric (e.g., display color). This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth; the metrics are displayed in different characteristic colors, such as HR in blue, BP in green, and PR and SpO2 in magenta. */
	color?:
		| "aliceblue"
		| "antiquewhite"
		| "aqua"
		| "aquamarine"
		| "azure"
		| "beige"
		| "bisque"
		| "black"
		| "blanchedalmond"
		| "blue"
		| "blueviolet"
		| "brown"
		| "burlywood"
		| "cadetblue"
		| "chartreuse"
		| "chocolate"
		| "coral"
		| "cornflowerblue"
		| "cornsilk"
		| "crimson"
		| "cyan"
		| "darkblue"
		| "darkcyan"
		| "darkgoldenrod"
		| "darkgray"
		| "darkgreen"
		| "darkgrey"
		| "darkkhaki"
		| "darkmagenta"
		| "darkolivegreen"
		| "darkorange"
		| "darkorchid"
		| "darkred"
		| "darksalmon"
		| "darkseagreen"
		| "darkslateblue"
		| "darkslategray"
		| "darkslategrey"
		| "darkturquoise"
		| "darkviolet"
		| "deeppink"
		| "deepskyblue"
		| "dimgray"
		| "dimgrey"
		| "dodgerblue"
		| "firebrick"
		| "floralwhite"
		| "forestgreen"
		| "fuchsia"
		| "gainsboro"
		| "ghostwhite"
		| "gold"
		| "goldenrod"
		| "gray"
		| "green"
		| "greenyellow"
		| "grey"
		| "honeydew"
		| "hotpink"
		| "indianred"
		| "indigo"
		| "ivory"
		| "khaki"
		| "lavender"
		| "lavenderblush"
		| "lawngreen"
		| "lemonchiffon"
		| "lightblue"
		| "lightcoral"
		| "lightcyan"
		| "lightgoldenrodyellow"
		| "lightgray"
		| "lightgreen"
		| "lightgrey"
		| "lightpink"
		| "lightsalmon"
		| "lightseagreen"
		| "lightskyblue"
		| "lightslategray"
		| "lightslategrey"
		| "lightsteelblue"
		| "lightyellow"
		| "lime"
		| "limegreen"
		| "linen"
		| "magenta"
		| "maroon"
		| "mediumaquamarine"
		| "mediumblue"
		| "mediumorchid"
		| "mediumpurple"
		| "mediumseagreen"
		| "mediumslateblue"
		| "mediumspringgreen"
		| "mediumturquoise"
		| "mediumvioletred"
		| "midnightblue"
		| "mintcream"
		| "mistyrose"
		| "moccasin"
		| "navajowhite"
		| "navy"
		| "oldlace"
		| "olive"
		| "olivedrab"
		| "orange"
		| "orangered"
		| "orchid"
		| "palegoldenrod"
		| "palegreen"
		| "paleturquoise"
		| "palevioletred"
		| "papayawhip"
		| "peachpuff"
		| "peru"
		| "pink"
		| "plum"
		| "powderblue"
		| "purple"
		| "rebeccapurple"
		| "red"
		| "rosybrown"
		| "royalblue"
		| "saddlebrown"
		| "salmon"
		| "sandybrown"
		| "seagreen"
		| "seashell"
		| "sienna"
		| "silver"
		| "skyblue"
		| "slateblue"
		| "slategray"
		| "slategrey"
		| "snow"
		| "springgreen"
		| "steelblue"
		| "tan"
		| "teal"
		| "thistle"
		| "tomato"
		| "turquoise"
		| "violet"
		| "wheat"
		| "white"
		| "whitesmoke"
		| "yellow"
		| "yellowgreen";
	/** Extensions for color */
	_color?: Element;
	/** Describes the link to the Device.  This is also known as a channel device. */
	device: Reference;
	/** Instance identifiers assigned to a device, by the device or gateway software, manufacturers, other organizations or owners. For example, handle ID. */
	identifier?: Array<Identifier>;
	/** The frequency at which the metric is taken or recorded. Devices measure metrics at a wide range of frequencies; for example, an ECG might sample measurements in the millisecond range, while an NIBP might trigger only once an hour. Less often, the measurementFrequency may be based on a unit other than time, such as distance (e.g. for a measuring wheel). The update period may be different than the measurement frequency, if the device does not update the published observed value with the same frequency as it was measured. */
	measurementFrequency?: Quantity;
	/** Indicates current operational state of the device. For example: On, Off, Standby, etc. */
	operationalStatus?: "entered-in-error" | "off" | "on" | "standby";
	/** Extensions for operationalStatus */
	_operationalStatus?: Element;
	/** This is a DeviceMetric resource. */
	resourceType: "DeviceMetric";
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
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DeviceMetricSchemaInternal = DomainResourceSchemaInternal.extend({
	calibration: z.lazy(getDeviceMetric_CalibrationSchema).array().optional(),
	category: z.enum(["calculation", "measurement", "setting", "unspecified"]),
	_category: z.lazy(getElementSchema).optional(),
	color: z
		.enum([
			"aliceblue",
			"antiquewhite",
			"aqua",
			"aquamarine",
			"azure",
			"beige",
			"bisque",
			"black",
			"blanchedalmond",
			"blue",
			"blueviolet",
			"brown",
			"burlywood",
			"cadetblue",
			"chartreuse",
			"chocolate",
			"coral",
			"cornflowerblue",
			"cornsilk",
			"crimson",
			"cyan",
			"darkblue",
			"darkcyan",
			"darkgoldenrod",
			"darkgray",
			"darkgreen",
			"darkgrey",
			"darkkhaki",
			"darkmagenta",
			"darkolivegreen",
			"darkorange",
			"darkorchid",
			"darkred",
			"darksalmon",
			"darkseagreen",
			"darkslateblue",
			"darkslategray",
			"darkslategrey",
			"darkturquoise",
			"darkviolet",
			"deeppink",
			"deepskyblue",
			"dimgray",
			"dimgrey",
			"dodgerblue",
			"firebrick",
			"floralwhite",
			"forestgreen",
			"fuchsia",
			"gainsboro",
			"ghostwhite",
			"gold",
			"goldenrod",
			"gray",
			"green",
			"greenyellow",
			"grey",
			"honeydew",
			"hotpink",
			"indianred",
			"indigo",
			"ivory",
			"khaki",
			"lavender",
			"lavenderblush",
			"lawngreen",
			"lemonchiffon",
			"lightblue",
			"lightcoral",
			"lightcyan",
			"lightgoldenrodyellow",
			"lightgray",
			"lightgreen",
			"lightgrey",
			"lightpink",
			"lightsalmon",
			"lightseagreen",
			"lightskyblue",
			"lightslategray",
			"lightslategrey",
			"lightsteelblue",
			"lightyellow",
			"lime",
			"limegreen",
			"linen",
			"magenta",
			"maroon",
			"mediumaquamarine",
			"mediumblue",
			"mediumorchid",
			"mediumpurple",
			"mediumseagreen",
			"mediumslateblue",
			"mediumspringgreen",
			"mediumturquoise",
			"mediumvioletred",
			"midnightblue",
			"mintcream",
			"mistyrose",
			"moccasin",
			"navajowhite",
			"navy",
			"oldlace",
			"olive",
			"olivedrab",
			"orange",
			"orangered",
			"orchid",
			"palegoldenrod",
			"palegreen",
			"paleturquoise",
			"palevioletred",
			"papayawhip",
			"peachpuff",
			"peru",
			"pink",
			"plum",
			"powderblue",
			"purple",
			"rebeccapurple",
			"red",
			"rosybrown",
			"royalblue",
			"saddlebrown",
			"salmon",
			"sandybrown",
			"seagreen",
			"seashell",
			"sienna",
			"silver",
			"skyblue",
			"slateblue",
			"slategray",
			"slategrey",
			"snow",
			"springgreen",
			"steelblue",
			"tan",
			"teal",
			"thistle",
			"tomato",
			"turquoise",
			"violet",
			"wheat",
			"white",
			"whitesmoke",
			"yellow",
			"yellowgreen",
		])
		.optional(),
	_color: z.lazy(getElementSchema).optional(),
	device: z.lazy(getReferenceSchema),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	measurementFrequency: z.lazy(getQuantitySchema).optional(),
	operationalStatus: z
		.enum(["entered-in-error", "off", "on", "standby"])
		.optional(),
	_operationalStatus: z.lazy(getElementSchema).optional(),
	resourceType: z.literal("DeviceMetric"),
	type: z.lazy(getCodeableConceptSchema),
	unit: z.lazy(getCodeableConceptSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.device,
			"device",
			["http://hl7.org/fhir/StructureDefinition/Device"],
			["Device"],
			ctx,
		);
	});

export const DeviceMetricSchema =
	DeviceMetricSchemaInternal as z.ZodType<DeviceMetric>;
