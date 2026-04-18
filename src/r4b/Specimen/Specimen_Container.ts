// Profile: http://hl7.org/fhir/StructureDefinition/Specimen
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here. */
export interface Specimen_Container extends BackboneElement {
	/** Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA. */
	additiveCodeableConcept?: CodeableConcept;
	/** Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA. */
	additiveReference?: Reference;
	/** The capacity (volume or other measure) the container may contain. */
	capacity?: Quantity;
	/** Textual description of the container. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances. */
	identifier?: Array<Identifier>;
	/** The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type. */
	specimenQuantity?: Quantity;
	/** The type of container associated with the specimen (e.g. slide, aliquot, etc.). */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Specimen_ContainerSchemaInternal =
	BackboneElementSchemaInternal.extend({
		additiveCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		additiveReference: z.lazy(getReferenceSchema).optional(),
		capacity: z.lazy(getQuantitySchema).optional(),
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		specimenQuantity: z.lazy(getQuantitySchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const additive_x_Present = [
				"additiveCodeableConcept",
				"additiveReference",
			].filter((field) => record[field] !== undefined);
			if (additive_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of additiveCodeableConcept, additiveReference may be present for additive[x]",
					path: [additive_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.additiveReference,
				"additiveReference",
				["http://hl7.org/fhir/StructureDefinition/Substance"],
				["Substance"],
				ctx,
			);
		});

export const Specimen_ContainerSchema =
	Specimen_ContainerSchemaInternal as z.ZodType<Specimen_Container>;
