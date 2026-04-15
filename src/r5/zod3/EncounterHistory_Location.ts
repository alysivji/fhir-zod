// Profile: http://hl7.org/fhir/StructureDefinition/EncounterHistory
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The location of the patient at this point in the encounter, the multiple cardinality permits de-normalizing the levels of the location hierarchy, such as site/ward/room/bed. */
export interface EncounterHistory_Location extends BackboneElement {
	/** This will be used to specify the required levels (bed/ward/room/etc.) desired to be recorded to simplify either messaging or query. */
	form?: CodeableConcept;
	/** The location where the encounter takes place. */
	location: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const EncounterHistory_LocationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		form: z.lazy(getCodeableConceptSchema).optional(),
		location: z.lazy(getReferenceSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.location,
				"location",
				["http://hl7.org/fhir/StructureDefinition/Location"],
				["Location"],
				ctx,
			);
		});

export const EncounterHistory_LocationSchema =
	EncounterHistory_LocationSchemaInternal as z.ZodType<EncounterHistory_Location>;
