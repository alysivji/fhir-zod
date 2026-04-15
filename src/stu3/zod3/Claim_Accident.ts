// Profile: http://hl7.org/fhir/StructureDefinition/Claim
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { fhirDate } from "../../shared/fhir-primitives-zod3";
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

/** An accident which resulted in the need for healthcare services. */
export interface Claim_Accident extends BackboneElement {
	/** Date of an accident which these services are addressing. */
	date: string;
	/** Extensions for date */
	_date?: Element;
	/** Accident Place. */
	locationAddress?: Address;
	/** Accident Place. */
	locationReference?: Reference;
	/** Type of accident: work, auto, etc. */
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
export const Claim_AccidentSchemaInternal =
	BackboneElementSchemaInternal.extend({
		date: fhirDate(),
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

export const Claim_AccidentSchema =
	Claim_AccidentSchemaInternal as z.ZodType<Claim_Accident>;
