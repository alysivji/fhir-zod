// Profile: http://hl7.org/fhir/StructureDefinition/SpecimenDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { SpecimenDefinition_TypeTested_Container_Additive } from "./SpecimenDefinition_TypeTested_Container_Additive";
import { SpecimenDefinition_TypeTested_Container_AdditiveSchemaInternal } from "./SpecimenDefinition_TypeTested_Container_Additive";

/** The specimen's container. */
export interface SpecimenDefinition_TypeTested_Container
	extends BackboneElement {
	/** Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA. */
	additive?: Array<SpecimenDefinition_TypeTested_Container_Additive>;
	/** Color of container cap. */
	cap?: CodeableConcept;
	/** The capacity (volume or other measure) of this kind of container. */
	capacity?: Quantity;
	/** The textual description of the kind of container. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** The type of material of the container. */
	material?: CodeableConcept;
	/** The minimum volume to be conditioned in the container. */
	minimumVolumeQuantity?: Quantity;
	/** The minimum volume to be conditioned in the container. */
	minimumVolumeString?: string;
	/** Extensions for minimumVolumeString */
	_minimumVolumeString?: Element;
	/** Special processing that should be applied to the container for this kind of specimen. */
	preparation?: string;
	/** Extensions for preparation */
	_preparation?: Element;
	/** The type of container used to contain this kind of specimen. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getSpecimenDefinition_TypeTested_Container_AdditiveSchema =
	(): z.ZodType<SpecimenDefinition_TypeTested_Container_Additive> =>
		SpecimenDefinition_TypeTested_Container_AdditiveSchemaInternal as z.ZodType<SpecimenDefinition_TypeTested_Container_Additive>;

/** @internal */
export const SpecimenDefinition_TypeTested_ContainerSchemaInternal =
	BackboneElementSchemaInternal.extend({
		additive: z
			.lazy(getSpecimenDefinition_TypeTested_Container_AdditiveSchema)
			.array()
			.optional(),
		cap: z.lazy(getCodeableConceptSchema).optional(),
		capacity: z.lazy(getQuantitySchema).optional(),
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		material: z.lazy(getCodeableConceptSchema).optional(),
		minimumVolumeQuantity: z.lazy(getQuantitySchema).optional(),
		minimumVolumeString: fhirString().optional(),
		_minimumVolumeString: z.lazy(getElementSchema).optional(),
		preparation: fhirString().optional(),
		_preparation: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const minimumVolume_x_Present = [
				"minimumVolumeQuantity",
				"minimumVolumeString",
			].filter((field) => record[field] !== undefined);
			if (minimumVolume_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of minimumVolumeQuantity, minimumVolumeString may be present for minimumVolume[x]",
					path: [minimumVolume_x_Present[0]],
				});
			}
		});

export const SpecimenDefinition_TypeTested_ContainerSchema =
	SpecimenDefinition_TypeTested_ContainerSchemaInternal as z.ZodType<SpecimenDefinition_TypeTested_Container>;
