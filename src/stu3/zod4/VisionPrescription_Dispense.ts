// Profile: http://hl7.org/fhir/StructureDefinition/VisionPrescription
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** Deals with details of the dispense part of the supply specification. */
export interface VisionPrescription_Dispense extends BackboneElement {
	/** Power adjustment for multifocal lenses measured in diopters (0.25 units). */
	add?: number;
	/** Extensions for add */
	_add?: Element;
	/** Adjustment for astigmatism measured in integer degrees. */
	axis?: number;
	/** Extensions for axis */
	_axis?: Element;
	/** Back curvature measured in millimeters. */
	backCurve?: number;
	/** Extensions for backCurve */
	_backCurve?: Element;
	/** The relative base, or reference lens edge, for the prism. */
	base?: "down" | "in" | "out" | "up";
	/** Extensions for base */
	_base?: Element;
	/** Brand recommendations or restrictions. */
	brand?: string;
	/** Extensions for brand */
	_brand?: Element;
	/** Special color or pattern. */
	color?: string;
	/** Extensions for color */
	_color?: Element;
	/** Power adjustment for astigmatism measured in diopters (0.25 units). */
	cylinder?: number;
	/** Extensions for cylinder */
	_cylinder?: Element;
	/** Contact lens diameter measured in millimeters. */
	diameter?: number;
	/** Extensions for diameter */
	_diameter?: Element;
	/** The recommended maximum wear period for the lens. */
	duration?: Quantity;
	/** The eye for which the lens applies. */
	eye?: "left" | "right";
	/** Extensions for eye */
	_eye?: Element;
	/** Notes for special requirements such as coatings and lens materials. */
	note?: Array<Annotation>;
	/** Contact lens power measured in diopters (0.25 units). */
	power?: number;
	/** Extensions for power */
	_power?: Element;
	/** Amount of prism to compensate for eye alignment in fractional units. */
	prism?: number;
	/** Extensions for prism */
	_prism?: Element;
	/** Identifies the type of vision correction product which is required for the patient. */
	product?: CodeableConcept;
	/** Lens power measured in diopters (0.25 units). */
	sphere?: number;
	/** Extensions for sphere */
	_sphere?: Element;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const VisionPrescription_DispenseSchemaInternal =
	BackboneElementSchemaInternal.extend({
		add: z.number().optional(),
		_add: z.lazy(getElementSchema).optional(),
		axis: z.number().int().optional(),
		_axis: z.lazy(getElementSchema).optional(),
		backCurve: z.number().optional(),
		_backCurve: z.lazy(getElementSchema).optional(),
		base: z.enum(["down", "in", "out", "up"]).optional(),
		_base: z.lazy(getElementSchema).optional(),
		brand: fhirString().optional(),
		_brand: z.lazy(getElementSchema).optional(),
		color: fhirString().optional(),
		_color: z.lazy(getElementSchema).optional(),
		cylinder: z.number().optional(),
		_cylinder: z.lazy(getElementSchema).optional(),
		diameter: z.number().optional(),
		_diameter: z.lazy(getElementSchema).optional(),
		duration: z.lazy(getQuantitySchema).optional(),
		eye: z.enum(["left", "right"]).optional(),
		_eye: z.lazy(getElementSchema).optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		power: z.number().optional(),
		_power: z.lazy(getElementSchema).optional(),
		prism: z.number().optional(),
		_prism: z.lazy(getElementSchema).optional(),
		product: z.lazy(getCodeableConceptSchema).optional(),
		sphere: z.number().optional(),
		_sphere: z.lazy(getElementSchema).optional(),
	}).strict();

export const VisionPrescription_DispenseSchema =
	VisionPrescription_DispenseSchemaInternal as z.ZodType<VisionPrescription_Dispense>;
