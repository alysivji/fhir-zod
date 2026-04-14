// Profile: http://hl7.org/fhir/StructureDefinition/DocumentReference
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

/** Relationships that this document has with other document references that already exist. */
export interface DocumentReference_RelatesTo extends BackboneElement {
	/** The type of relationship that this document has with anther document. */
	code: CodeableConcept;
	/** The target document of this relationship. */
	target: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DocumentReference_RelatesToSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema),
		target: z.lazy(getReferenceSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.target,
				"target",
				["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
				["DocumentReference"],
				ctx,
			);
		});

export const DocumentReference_RelatesToSchema =
	DocumentReference_RelatesToSchemaInternal as z.ZodType<DocumentReference_RelatesTo>;
