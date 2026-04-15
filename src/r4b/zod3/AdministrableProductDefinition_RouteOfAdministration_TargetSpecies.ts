// Profile: http://hl7.org/fhir/StructureDefinition/AdministrableProductDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import type { AdministrableProductDefinition_RouteOfAdministration_TargetSpecies_WithdrawalPeriod } from "./AdministrableProductDefinition_RouteOfAdministration_TargetSpecies_WithdrawalPeriod";
import { AdministrableProductDefinition_RouteOfAdministration_TargetSpecies_WithdrawalPeriodSchemaInternal } from "./AdministrableProductDefinition_RouteOfAdministration_TargetSpecies_WithdrawalPeriod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";

/** A species for which this route applies. */
export interface AdministrableProductDefinition_RouteOfAdministration_TargetSpecies
	extends BackboneElement {
	/** Coded expression for the species. */
	code: CodeableConcept;
	/** A species specific time during which consumption of animal product is not appropriate. */
	withdrawalPeriod?: Array<AdministrableProductDefinition_RouteOfAdministration_TargetSpecies_WithdrawalPeriod>;
}

const getAdministrableProductDefinition_RouteOfAdministration_TargetSpecies_WithdrawalPeriodSchema =
	(): z.ZodType<AdministrableProductDefinition_RouteOfAdministration_TargetSpecies_WithdrawalPeriod> =>
		AdministrableProductDefinition_RouteOfAdministration_TargetSpecies_WithdrawalPeriodSchemaInternal as z.ZodType<AdministrableProductDefinition_RouteOfAdministration_TargetSpecies_WithdrawalPeriod>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const AdministrableProductDefinition_RouteOfAdministration_TargetSpeciesSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema),
		withdrawalPeriod: z
			.lazy(
				getAdministrableProductDefinition_RouteOfAdministration_TargetSpecies_WithdrawalPeriodSchema,
			)
			.array()
			.optional(),
	}).strict();

export const AdministrableProductDefinition_RouteOfAdministration_TargetSpeciesSchema =
	AdministrableProductDefinition_RouteOfAdministration_TargetSpeciesSchemaInternal as z.ZodType<AdministrableProductDefinition_RouteOfAdministration_TargetSpecies>;
