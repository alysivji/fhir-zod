// Profile: http://hl7.org/fhir/StructureDefinition/Procedure
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Limited to 'real' people rather than equipment. */
export interface Procedure_Performer extends BackboneElement {
	/** The practitioner who was involved in the procedure. */
	actor: Reference;
	/** The organization the device or practitioner was acting on behalf of. */
	onBehalfOf?: Reference;
	/** For example: surgeon, anaethetist, endoscopist. */
	role?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Procedure_PerformerSchemaInternal =
	BackboneElementSchemaInternal.extend({
		actor: z.lazy(getReferenceSchema),
		onBehalfOf: z.lazy(getReferenceSchema).optional(),
		role: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.actor,
				"actor",
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				["Device", "Organization", "Patient", "Practitioner", "RelatedPerson"],
				ctx,
			);
			validateReferenceTarget(
				record.onBehalfOf,
				"onBehalfOf",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
		});

export const Procedure_PerformerSchema =
	Procedure_PerformerSchemaInternal as z.ZodType<Procedure_Performer>;
