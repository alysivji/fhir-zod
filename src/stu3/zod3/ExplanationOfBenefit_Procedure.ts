// Profile: http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit
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

/** Ordered list of patient procedures performed to support the adjudication. */
export interface ExplanationOfBenefit_Procedure extends BackboneElement {
	/** Date and optionally time the procedure was performed . */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** The procedure code. */
	procedureCodeableConcept?: CodeableConcept;
	/** The procedure code. */
	procedureReference?: Reference;
	/** Sequence of procedures which serves to order and provide a link. */
	sequence: number;
	/** Extensions for sequence */
	_sequence?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ExplanationOfBenefit_ProcedureSchemaInternal =
	BackboneElementSchemaInternal.extend({
		date: fhirDateTime().optional(),
		_date: z.lazy(getElementSchema).optional(),
		procedureCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		procedureReference: z.lazy(getReferenceSchema).optional(),
		sequence: z.number().int().positive(),
		_sequence: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const procedure_x_Present = [
				"procedureCodeableConcept",
				"procedureReference",
			].filter((field) => record[field] !== undefined);
			if (procedure_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of procedureCodeableConcept, procedureReference must be present for procedure[x]",
					path: ["procedureCodeableConcept"],
				});
			}
			if (procedure_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of procedureCodeableConcept, procedureReference may be present for procedure[x]",
					path: [procedure_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.procedureReference,
				"procedureReference",
				["http://hl7.org/fhir/StructureDefinition/Procedure"],
				["Procedure"],
				ctx,
			);
		});

export const ExplanationOfBenefit_ProcedureSchema =
	ExplanationOfBenefit_ProcedureSchemaInternal as z.ZodType<ExplanationOfBenefit_Procedure>;
