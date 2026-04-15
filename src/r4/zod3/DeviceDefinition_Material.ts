// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A substance used to create the material(s) of which the device is made. */
export interface DeviceDefinition_Material extends BackboneElement {
	/** Whether the substance is a known or suspected allergen. */
	allergenicIndicator?: boolean;
	/** Extensions for allergenicIndicator */
	_allergenicIndicator?: Element;
	/** Indicates an alternative material of the device. */
	alternate?: boolean;
	/** Extensions for alternate */
	_alternate?: Element;
	/** The substance. */
	substance: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const DeviceDefinition_MaterialSchemaInternal =
	BackboneElementSchemaInternal.extend({
		allergenicIndicator: z.boolean().optional(),
		_allergenicIndicator: z.lazy(getElementSchema).optional(),
		alternate: z.boolean().optional(),
		_alternate: z.lazy(getElementSchema).optional(),
		substance: z.lazy(getCodeableConceptSchema),
	}).strict();

export const DeviceDefinition_MaterialSchema =
	DeviceDefinition_MaterialSchemaInternal as z.ZodType<DeviceDefinition_Material>;
