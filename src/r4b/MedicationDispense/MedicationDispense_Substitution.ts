// Profile: http://hl7.org/fhir/StructureDefinition/MedicationDispense
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done. */
export interface MedicationDispense_Substitution extends BackboneElement {
	/** Indicates the reason for the substitution (or lack of substitution) from what was prescribed. */
	reason?: Array<CodeableConcept>;
	/** The person or organization that has primary responsibility for the substitution. */
	responsibleParty?: Array<Reference>;
	/** A code signifying whether a different drug was dispensed from what was prescribed. */
	type?: CodeableConcept;
	/** True if the dispenser dispensed a different drug or product from what was prescribed. */
	wasSubstituted: boolean;
	/** Extensions for wasSubstituted */
	_wasSubstituted?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicationDispense_SubstitutionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		reason: z.lazy(getCodeableConceptSchema).array().optional(),
		responsibleParty: z.lazy(getReferenceSchema).array().optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
		wasSubstituted: z.boolean(),
		_wasSubstituted: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.responsibleParty,
				"responsibleParty",
				[
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				],
				["Practitioner", "PractitionerRole"],
				ctx,
			);
		});

export const MedicationDispense_SubstitutionSchema =
	MedicationDispense_SubstitutionSchemaInternal as z.ZodType<MedicationDispense_Substitution>;
