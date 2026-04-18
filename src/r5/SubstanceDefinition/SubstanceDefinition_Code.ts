// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirDateTime } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Codes associated with the substance. */
export interface SubstanceDefinition_Code extends BackboneElement {
	/** The specific code. */
	code?: CodeableConcept;
	/** Any comment can be provided in this field, if necessary. */
	note?: Array<Annotation>;
	/** Supporting literature. */
	source?: Array<Reference>;
	/** Status of the code assignment, for example 'provisional', 'approved'. */
	status?: CodeableConcept;
	/** The date at which the code status was changed as part of the terminology maintenance. */
	statusDate?: string;
	/** Extensions for statusDate */
	_statusDate?: Element;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const SubstanceDefinition_CodeSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema).optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		source: z.lazy(getReferenceSchema).array().optional(),
		status: z.lazy(getCodeableConceptSchema).optional(),
		statusDate: fhirDateTime().optional(),
		_statusDate: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.source,
				"source",
				["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
				["DocumentReference"],
				ctx,
			);
		});

export const SubstanceDefinition_CodeSchema =
	SubstanceDefinition_CodeSchemaInternal as z.ZodType<SubstanceDefinition_Code>;
