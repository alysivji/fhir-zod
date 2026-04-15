// Profile: http://hl7.org/fhir/StructureDefinition/SubstancePolymer
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** The starting materials - monomer(s) used in the synthesis of the polymer. */
export interface SubstancePolymer_MonomerSet_StartingMaterial
	extends BackboneElement {
	/** A percentage. */
	amount?: Quantity;
	/** Substance high level category, e.g. chemical substance. */
	category?: CodeableConcept;
	/** The type of substance for this starting material. */
	code?: CodeableConcept;
	/** Used to specify whether the attribute described is a defining element for the unique identification of the polymer. */
	isDefining?: boolean;
	/** Extensions for isDefining */
	_isDefining?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const SubstancePolymer_MonomerSet_StartingMaterialSchemaInternal =
	BackboneElementSchemaInternal.extend({
		amount: z.lazy(getQuantitySchema).optional(),
		category: z.lazy(getCodeableConceptSchema).optional(),
		code: z.lazy(getCodeableConceptSchema).optional(),
		isDefining: z.boolean().optional(),
		_isDefining: z.lazy(getElementSchema).optional(),
	}).strict();

export const SubstancePolymer_MonomerSet_StartingMaterialSchema =
	SubstancePolymer_MonomerSet_StartingMaterialSchemaInternal as z.ZodType<SubstancePolymer_MonomerSet_StartingMaterial>;
