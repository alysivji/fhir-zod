// Profile: http://hl7.org/fhir/StructureDefinition/AdverseEvent
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Information on the possible cause of the event. */
export interface AdverseEvent_SuspectEntity_Causality extends BackboneElement {
	/** The method of evaluating the relatedness of the suspected entity to the event. */
	assessmentMethod?: CodeableConcept;
	/** The author of the information on the possible cause of the event. */
	author?: Reference;
	/** The result of the assessment regarding the relatedness of the suspected entity to the event. */
	entityRelatedness?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const AdverseEvent_SuspectEntity_CausalitySchemaInternal =
	BackboneElementSchemaInternal.extend({
		assessmentMethod: z.lazy(getCodeableConceptSchema).optional(),
		author: z.lazy(getReferenceSchema).optional(),
		entityRelatedness: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.author,
				"author",
				[
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
					"http://hl7.org/fhir/StructureDefinition/ResearchSubject",
				],
				[
					"Patient",
					"Practitioner",
					"PractitionerRole",
					"RelatedPerson",
					"ResearchSubject",
				],
				ctx,
			);
		});

export const AdverseEvent_SuspectEntity_CausalitySchema =
	AdverseEvent_SuspectEntity_CausalitySchemaInternal as z.ZodType<AdverseEvent_SuspectEntity_Causality>;
