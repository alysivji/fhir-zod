// Profile: http://hl7.org/fhir/StructureDefinition/GenomicStudy
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Inputs for the analysis event. */
export interface GenomicStudy_Analysis_Input extends BackboneElement {
	/** File containing input data. */
	file?: Reference;
	/** The analysis event or other GenomicStudy that generated this input file. */
	generatedByIdentifier?: Identifier;
	/** The analysis event or other GenomicStudy that generated this input file. */
	generatedByReference?: Reference;
	/** Type of input data, e.g., BAM, CRAM, or FASTA. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const GenomicStudy_Analysis_InputSchemaInternal =
	BackboneElementSchemaInternal.extend({
		file: z.lazy(getReferenceSchema).optional(),
		generatedByIdentifier: z.lazy(getIdentifierSchema).optional(),
		generatedByReference: z.lazy(getReferenceSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const generatedBy_x_Present = [
				"generatedByIdentifier",
				"generatedByReference",
			].filter((field) => record[field] !== undefined);
			if (generatedBy_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of generatedByIdentifier, generatedByReference may be present for generatedBy[x]",
					path: [generatedBy_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.file,
				"file",
				["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
				["DocumentReference"],
				ctx,
			);
			validateReferenceTarget(
				record.generatedByReference,
				"generatedByReference",
				["http://hl7.org/fhir/StructureDefinition/GenomicStudy"],
				["GenomicStudy"],
				ctx,
			);
		});

export const GenomicStudy_Analysis_InputSchema =
	GenomicStudy_Analysis_InputSchemaInternal as z.ZodType<GenomicStudy_Analysis_Input>;
