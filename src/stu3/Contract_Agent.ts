// Profile: http://hl7.org/fhir/StructureDefinition/Contract
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

/** An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place. */
export interface Contract_Agent extends BackboneElement {
	/** Who or what parties are assigned roles in this Contract. */
	actor: Reference;
	/** Role type of agent assigned roles in this Contract. */
	role?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Contract_AgentSchemaInternal =
	BackboneElementSchemaInternal.extend({
		actor: z.lazy(getReferenceSchema),
		role: z.lazy(getCodeableConceptSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.actor,
				"actor",
				["http://hl7.org/fhir/StructureDefinition/Contract"],
				["Contract"],
				ctx,
			);
		});

export const Contract_AgentSchema =
	Contract_AgentSchemaInternal as z.ZodType<Contract_Agent>;
