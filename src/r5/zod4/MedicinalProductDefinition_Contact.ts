// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A product specific contact, person (in a role), or an organization. */
export interface MedicinalProductDefinition_Contact extends BackboneElement {
	/** A product specific contact, person (in a role), or an organization. */
	contact: Reference;
	/** Allows the contact to be classified, for example QPPV, Pharmacovigilance Enquiry Information. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicinalProductDefinition_ContactSchemaInternal =
	BackboneElementSchemaInternal.extend({
		contact: z.lazy(getReferenceSchema),
		type: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.contact,
				"contact",
				[
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				],
				["Organization", "PractitionerRole"],
				ctx,
			);
		});

export const MedicinalProductDefinition_ContactSchema =
	MedicinalProductDefinition_ContactSchemaInternal as z.ZodType<MedicinalProductDefinition_Contact>;
