// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceSpecification
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import { fhirDateTime } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Codes associated with the substance. */
export interface SubstanceSpecification_Code extends BackboneElement {
	/** The specific code. */
	code?: CodeableConcept;
	/** Any comment can be provided in this field, if necessary. */
	comment?: string;
	/** Extensions for comment */
	_comment?: Element;
	/** Supporting literature. */
	source?: Array<Reference>;
	/** Status of the code assignment. */
	status?: CodeableConcept;
	/** The date at which the code status is changed as part of the terminology maintenance. */
	statusDate?: string;
	/** Extensions for statusDate */
	_statusDate?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const SubstanceSpecification_CodeSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema).optional(),
		comment: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_comment: z.lazy(getElementSchema).optional(),
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

export const SubstanceSpecification_CodeSchema =
	SubstanceSpecification_CodeSchemaInternal as z.ZodType<SubstanceSpecification_Code>;
