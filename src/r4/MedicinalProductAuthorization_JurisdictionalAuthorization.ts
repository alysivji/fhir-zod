// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductAuthorization
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";

/** Authorization in areas within a country. */
export interface MedicinalProductAuthorization_JurisdictionalAuthorization
	extends BackboneElement {
	/** Country of authorization. */
	country?: CodeableConcept;
	/** The assigned number for the marketing authorization. */
	identifier?: Array<Identifier>;
	/** Jurisdiction within a country. */
	jurisdiction?: Array<CodeableConcept>;
	/** The legal status of supply in a jurisdiction or region. */
	legalStatusOfSupply?: CodeableConcept;
	/** The start and expected end date of the authorization. */
	validityPeriod?: Period;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const MedicinalProductAuthorization_JurisdictionalAuthorizationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		country: z.lazy(getCodeableConceptSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
		legalStatusOfSupply: z.lazy(getCodeableConceptSchema).optional(),
		validityPeriod: z.lazy(getPeriodSchema).optional(),
	}).strict();

export const MedicinalProductAuthorization_JurisdictionalAuthorizationSchema =
	MedicinalProductAuthorization_JurisdictionalAuthorizationSchemaInternal as z.ZodType<MedicinalProductAuthorization_JurisdictionalAuthorization>;
