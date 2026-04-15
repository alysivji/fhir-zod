// Profile: http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import { fhirDate } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Address } from "./Address";
import { AddressSchemaInternal } from "./Address";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Details of a accident which resulted in injuries which required the products and services listed in the claim. */
export interface ExplanationOfBenefit_Accident extends BackboneElement {
	/** Date of an accident event  related to the products and services contained in the claim. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** The physical location of the accident event. */
	locationAddress?: Address;
	/** The physical location of the accident event. */
	locationReference?: Reference;
	/** The type or context of the accident event for the purposes of selection of potential insurance coverages and determination of coordination between insurers. */
	type?: CodeableConcept;
}

const getAddressSchema = (): z.ZodType<Address> =>
	AddressSchemaInternal as z.ZodType<Address>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ExplanationOfBenefit_AccidentSchemaInternal =
	BackboneElementSchemaInternal.extend({
		date: fhirDate().optional(),
		_date: z.lazy(getElementSchema).optional(),
		locationAddress: z.lazy(getAddressSchema).optional(),
		locationReference: z.lazy(getReferenceSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const location_x_Present = [
				"locationAddress",
				"locationReference",
			].filter((field) => record[field] !== undefined);
			if (location_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of locationAddress, locationReference may be present for location[x]",
					path: [location_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.locationReference,
				"locationReference",
				["http://hl7.org/fhir/StructureDefinition/Location"],
				["Location"],
				ctx,
			);
		});

export const ExplanationOfBenefit_AccidentSchema =
	ExplanationOfBenefit_AccidentSchemaInternal as z.ZodType<ExplanationOfBenefit_Accident>;
