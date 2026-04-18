// Profile: http://hl7.org/fhir/StructureDefinition/AdministrableProductDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";

/** A species specific time during which consumption of animal product is not appropriate. */
export interface AdministrableProductDefinition_RouteOfAdministration_TargetSpecies_WithdrawalPeriod
	extends BackboneElement {
	/** Extra information about the withdrawal period. */
	supportingInformation?: string;
	/** Extensions for supportingInformation */
	_supportingInformation?: Element;
	/** Coded expression for the type of tissue for which the withdrawal period applies, e.g. meat, milk. */
	tissue: CodeableConcept;
	/** A value for the time. */
	value: Quantity;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const AdministrableProductDefinition_RouteOfAdministration_TargetSpecies_WithdrawalPeriodSchemaInternal =
	BackboneElementSchemaInternal.extend({
		supportingInformation: fhirString().optional(),
		_supportingInformation: z.lazy(getElementSchema).optional(),
		tissue: z.lazy(getCodeableConceptSchema),
		value: z.lazy(getQuantitySchema),
	}).strict();

export const AdministrableProductDefinition_RouteOfAdministration_TargetSpecies_WithdrawalPeriodSchema =
	AdministrableProductDefinition_RouteOfAdministration_TargetSpecies_WithdrawalPeriodSchemaInternal as z.ZodType<AdministrableProductDefinition_RouteOfAdministration_TargetSpecies_WithdrawalPeriod>;
