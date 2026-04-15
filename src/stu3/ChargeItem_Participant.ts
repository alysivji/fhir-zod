// Profile: http://hl7.org/fhir/StructureDefinition/ChargeItem
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

/** Indicates who or what performed or participated in the charged service. */
export interface ChargeItem_Participant extends BackboneElement {
	/** The device, practitioner, etc. who performed or participated in the service. */
	actor: Reference;
	/** Describes the type of performance or participation(e.g. primary surgeon, anaesthesiologiest, etc.). */
	role?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ChargeItem_ParticipantSchemaInternal =
	BackboneElementSchemaInternal.extend({
		actor: z.lazy(getReferenceSchema),
		role: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.actor,
				"actor",
				["http://hl7.org/fhir/StructureDefinition/Practitioner"],
				["Practitioner"],
				ctx,
			);
		});

export const ChargeItem_ParticipantSchema =
	ChargeItem_ParticipantSchemaInternal as z.ZodType<ChargeItem_Participant>;
