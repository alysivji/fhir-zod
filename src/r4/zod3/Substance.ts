// Profile: http://hl7.org/fhir/StructureDefinition/Substance
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Substance_Ingredient } from "./Substance_Ingredient";
import { Substance_IngredientSchemaInternal } from "./Substance_Ingredient";
import type { Substance_Instance } from "./Substance_Instance";
import { Substance_InstanceSchemaInternal } from "./Substance_Instance";

/** A homogeneous material with a definite composition. */
export interface Substance extends DomainResource {
	/** A code that classifies the general type of substance.  This is used  for searching, sorting and display purposes. */
	category?: Array<CodeableConcept>;
	/** A code (or set of codes) that identify this substance. */
	code: CodeableConcept;
	/** A description of the substance - its appearance, handling requirements, and other usage notes. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Unique identifier for the substance. */
	identifier?: Array<Identifier>;
	/** A substance can be composed of other substances. */
	ingredient?: Array<Substance_Ingredient>;
	/** Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance. */
	instance?: Array<Substance_Instance>;
	/** This is a Substance resource. */
	resourceType: "Substance";
	/** A code to indicate if the substance is actively used. */
	status?: "active" | "entered-in-error" | "inactive";
	/** Extensions for status */
	_status?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getSubstance_IngredientSchema = (): z.ZodType<Substance_Ingredient> =>
	Substance_IngredientSchemaInternal as z.ZodType<Substance_Ingredient>;
const getSubstance_InstanceSchema = (): z.ZodType<Substance_Instance> =>
	Substance_InstanceSchemaInternal as z.ZodType<Substance_Instance>;

/** @internal */
export const SubstanceSchemaInternal = DomainResourceSchemaInternal.extend({
	category: z.lazy(getCodeableConceptSchema).array().optional(),
	code: z.lazy(getCodeableConceptSchema),
	description: fhirString().optional(),
	_description: z.lazy(getElementSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	ingredient: z.lazy(getSubstance_IngredientSchema).array().optional(),
	instance: z.lazy(getSubstance_InstanceSchema).array().optional(),
	resourceType: z.literal("Substance"),
	status: z.enum(["active", "entered-in-error", "inactive"]).optional(),
	_status: z.lazy(getElementSchema).optional(),
}).strict();

export const SubstanceSchema = SubstanceSchemaInternal as z.ZodType<Substance>;
