// Profile: http://hl7.org/fhir/StructureDefinition/Account
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The parties responsible for balancing the account if other payment options fall short. */
export interface Account_Guarantor extends BackboneElement {
	/** A guarantor may be placed on credit hold or otherwise have their role temporarily suspended. */
	onHold?: boolean;
	/** Extensions for onHold */
	_onHold?: Element;
	/** The entity who is responsible. */
	party: Reference;
	/** The timeframe during which the guarantor accepts responsibility for the account. */
	period?: Period;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Account_GuarantorSchemaInternal =
	BackboneElementSchemaInternal.extend({
		onHold: z.boolean().optional(),
		_onHold: z.lazy(getElementSchema).optional(),
		party: z.lazy(getReferenceSchema),
		period: z.lazy(getPeriodSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.party,
				"party",
				[
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				["Organization", "Patient", "RelatedPerson"],
				ctx,
			);
		});

export const Account_GuarantorSchema =
	Account_GuarantorSchemaInternal as z.ZodType<Account_Guarantor>;
