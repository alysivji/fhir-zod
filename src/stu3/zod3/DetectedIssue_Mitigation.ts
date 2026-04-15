// Profile: http://hl7.org/fhir/StructureDefinition/DetectedIssue
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { fhirDateTime } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Indicates an action that has been taken or is committed to to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action. */
export interface DetectedIssue_Mitigation extends BackboneElement {
	/** Describes the action that was taken or the observation that was made that reduces/eliminates the risk associated with the identified issue. */
	action: CodeableConcept;
	/** Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring. */
	author?: Reference;
	/** Indicates when the mitigating action was documented. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DetectedIssue_MitigationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		action: z.lazy(getCodeableConceptSchema),
		author: z.lazy(getReferenceSchema).optional(),
		date: fhirDateTime().optional(),
		_date: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.author,
				"author",
				["http://hl7.org/fhir/StructureDefinition/Practitioner"],
				["Practitioner"],
				ctx,
			);
		});

export const DetectedIssue_MitigationSchema =
	DetectedIssue_MitigationSchemaInternal as z.ZodType<DetectedIssue_Mitigation>;
