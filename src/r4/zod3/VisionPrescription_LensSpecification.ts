// Profile: http://hl7.org/fhir/StructureDefinition/VisionPrescription
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
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
import type { VisionPrescription_LensSpecification_Prism } from "./VisionPrescription_LensSpecification_Prism";
import { VisionPrescription_LensSpecification_PrismSchemaInternal } from "./VisionPrescription_LensSpecification_Prism";

/** Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals. */
export interface VisionPrescription_LensSpecification extends BackboneElement {
	/** Power adjustment for multifocal lenses measured in dioptres (0.25 units). */
	add?: number;
	/** Extensions for add */
	_add?: Element;
	/** Adjustment for astigmatism measured in integer degrees. */
	axis?: number;
	/** Extensions for axis */
	_axis?: Element;
	/** Back curvature measured in millimetres. */
	backCurve?: number;
	/** Extensions for backCurve */
	_backCurve?: Element;
	/** Brand recommendations or restrictions. */
	brand?: string;
	/** Extensions for brand */
	_brand?: Element;
	/** Special color or pattern. */
	color?: string;
	/** Extensions for color */
	_color?: Element;
	/** Power adjustment for astigmatism measured in dioptres (0.25 units). */
	cylinder?: number;
	/** Extensions for cylinder */
	_cylinder?: Element;
	/** Contact lens diameter measured in millimetres. */
	diameter?: number;
	/** Extensions for diameter */
	_diameter?: Element;
	/** The recommended maximum wear period for the lens. */
	duration?: Quantity;
	/** The eye for which the lens specification applies. */
	eye: "left" | "right";
	/** Extensions for eye */
	_eye?: Element;
	/** Notes for special requirements such as coatings and lens materials. */
	note?: Array<Annotation>;
	/** Contact lens power measured in dioptres (0.25 units). */
	power?: number;
	/** Extensions for power */
	_power?: Element;
	/** Allows for adjustment on two axis. */
	prism?: Array<VisionPrescription_LensSpecification_Prism>;
	/** Identifies the type of vision correction product which is required for the patient. */
	product: CodeableConcept;
	/** Lens power measured in dioptres (0.25 units). */
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
const getVisionPrescription_LensSpecification_PrismSchema =
	(): z.ZodType<VisionPrescription_LensSpecification_Prism> =>
		VisionPrescription_LensSpecification_PrismSchemaInternal as z.ZodType<VisionPrescription_LensSpecification_Prism>;

/** @internal */
export const VisionPrescription_LensSpecificationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		add: z.number().optional(),
		_add: z.lazy(getElementSchema).optional(),
		axis: z.number().int().optional(),
		_axis: z.lazy(getElementSchema).optional(),
		backCurve: z.number().optional(),
		_backCurve: z.lazy(getElementSchema).optional(),
		brand: fhirString().optional(),
		_brand: z.lazy(getElementSchema).optional(),
		color: fhirString().optional(),
		_color: z.lazy(getElementSchema).optional(),
		cylinder: z.number().optional(),
		_cylinder: z.lazy(getElementSchema).optional(),
		diameter: z.number().optional(),
		_diameter: z.lazy(getElementSchema).optional(),
		duration: z.lazy(getQuantitySchema).optional(),
		eye: z.enum(["left", "right"]),
		_eye: z.lazy(getElementSchema).optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		power: z.number().optional(),
		_power: z.lazy(getElementSchema).optional(),
		prism: z
			.lazy(getVisionPrescription_LensSpecification_PrismSchema)
			.array()
			.optional(),
		product: z.lazy(getCodeableConceptSchema),
		sphere: z.number().optional(),
		_sphere: z.lazy(getElementSchema).optional(),
	}).strict();

export const VisionPrescription_LensSpecificationSchema =
	VisionPrescription_LensSpecificationSchemaInternal as z.ZodType<VisionPrescription_LensSpecification>;
