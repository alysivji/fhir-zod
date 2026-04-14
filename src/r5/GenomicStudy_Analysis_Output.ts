// Profile: http://hl7.org/fhir/StructureDefinition/GenomicStudy
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

/** Outputs for the analysis event. */
export interface GenomicStudy_Analysis_Output extends BackboneElement {
	/** File containing output data. */
	file?: Reference;
	/** Type of output data, e.g., VCF, MAF, or BAM. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const GenomicStudy_Analysis_OutputSchemaInternal =
	BackboneElementSchemaInternal.extend({
		file: z.lazy(getReferenceSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.file,
				"file",
				["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
				["DocumentReference"],
				ctx,
			);
		});

export const GenomicStudy_Analysis_OutputSchema =
	GenomicStudy_Analysis_OutputSchemaInternal as z.ZodType<GenomicStudy_Analysis_Output>;
