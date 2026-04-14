// Profile: http://hl7.org/fhir/StructureDefinition/Account
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirDateTime } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** When using an account for billing a specific Encounter the set of procedures that are relevant for billing are stored here on the account where they are able to be sequenced appropriately prior to processing to produce claim(s). */
export interface Account_Procedure extends BackboneElement {
	/** The procedure relevant to the account. */
	code: CodeableReference;
	/** Date of the procedure when using a coded procedure. If using a reference to a procedure, then the date on the procedure should be used. */
	dateOfService?: string;
	/** Extensions for dateOfService */
	_dateOfService?: Element;
	/** Any devices that were associated with the procedure relevant to the account. */
	device?: Array<Reference>;
	/** The package code can be used to group procedures that may be priced or delivered as a single product. Such as DRGs. */
	packageCode?: Array<CodeableConcept>;
	/** Ranking of the procedure (for each type). */
	sequence?: number;
	/** Extensions for sequence */
	_sequence?: Element;
	/** How this procedure value should be used in charging the account. */
	type?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Account_ProcedureSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableReferenceSchema),
		dateOfService: fhirDateTime().optional(),
		_dateOfService: z.lazy(getElementSchema).optional(),
		device: z.lazy(getReferenceSchema).array().optional(),
		packageCode: z.lazy(getCodeableConceptSchema).array().optional(),
		sequence: z.number().int().positive().optional(),
		_sequence: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.device,
				"device",
				["http://hl7.org/fhir/StructureDefinition/Device"],
				["Device"],
				ctx,
			);
		});

export const Account_ProcedureSchema =
	Account_ProcedureSchemaInternal as z.ZodType<Account_Procedure>;
