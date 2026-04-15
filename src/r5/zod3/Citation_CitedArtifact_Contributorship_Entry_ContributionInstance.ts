// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { fhirDateTime } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Contributions with accounting for time or number. */
export interface Citation_CitedArtifact_Contributorship_Entry_ContributionInstance
	extends BackboneElement {
	/** The time that the contribution was made. */
	time?: string;
	/** Extensions for time */
	_time?: Element;
	/** The specific contribution. */
	type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Citation_CitedArtifact_Contributorship_Entry_ContributionInstanceSchemaInternal =
	BackboneElementSchemaInternal.extend({
		time: fhirDateTime().optional(),
		_time: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema),
	}).strict();

export const Citation_CitedArtifact_Contributorship_Entry_ContributionInstanceSchema =
	Citation_CitedArtifact_Contributorship_Entry_ContributionInstanceSchemaInternal as z.ZodType<Citation_CitedArtifact_Contributorship_Entry_ContributionInstance>;
