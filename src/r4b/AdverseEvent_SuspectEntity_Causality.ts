// Profile: http://hl7.org/fhir/StructureDefinition/AdverseEvent
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Information on the possible cause of the event. */
export interface AdverseEvent_SuspectEntity_Causality extends BackboneElement {
	/** Assessment of if the entity caused the event. */
	assessment?: CodeableConcept;
	/** AdverseEvent.suspectEntity.causalityAuthor. */
	author?: Reference;
	/** ProbabilityScale | Bayesian | Checklist. */
	method?: CodeableConcept;
	/** AdverseEvent.suspectEntity.causalityProductRelatedness. */
	productRelatedness?: string;
	/** Extensions for productRelatedness */
	_productRelatedness?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const AdverseEvent_SuspectEntity_CausalitySchemaInternal =
	BackboneElementSchemaInternal.extend({
		assessment: z.lazy(getCodeableConceptSchema).optional(),
		author: z.lazy(getReferenceSchema).optional(),
		method: z.lazy(getCodeableConceptSchema).optional(),
		productRelatedness: fhirString().optional(),
		_productRelatedness: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.author,
				"author",
				[
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				],
				["Practitioner", "PractitionerRole"],
				ctx,
			);
		});

export const AdverseEvent_SuspectEntity_CausalitySchema =
	AdverseEvent_SuspectEntity_CausalitySchemaInternal as z.ZodType<AdverseEvent_SuspectEntity_Causality>;
