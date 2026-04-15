// Profile: http://hl7.org/fhir/StructureDefinition/Consent
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Who or what is controlled by this consent. Use group to identify a set of actors by some property they share (e.g. 'admitting officers'). */
export interface Consent_Actor extends BackboneElement {
	/** The resource that identifies the actor. To identify a actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers'). */
	reference: Reference;
	/** How the individual is involved in the resources content that is described in the consent. */
	role: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Consent_ActorSchemaInternal = BackboneElementSchemaInternal.extend(
	{
		reference: z.lazy(getReferenceSchema),
		role: z.lazy(getCodeableConceptSchema),
	},
)
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.reference,
			"reference",
			["http://hl7.org/fhir/StructureDefinition/Device"],
			["Device"],
			ctx,
		);
	});

export const Consent_ActorSchema =
	Consent_ActorSchemaInternal as z.ZodType<Consent_Actor>;
