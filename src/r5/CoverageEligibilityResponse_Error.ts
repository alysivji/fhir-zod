// Profile: http://hl7.org/fhir/StructureDefinition/CoverageEligibilityResponse
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Errors encountered during the processing of the request. */
export interface CoverageEligibilityResponse_Error extends BackboneElement {
	/** An error code,from a specified code system, which details why the eligibility check could not be performed. */
	code: CodeableConcept;
	/** A [simple subset of FHIRPath](fhirpath.html#simple) limited to element names, repetition indicators and the default child accessor that identifies one of the elements in the resource that caused this issue to be raised. */
	expression?: Array<string>;
	/** Extensions for expression */
	_expression?: Array<Element>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const CoverageEligibilityResponse_ErrorSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema),
		expression: fhirString().array().optional(),
		_expression: z.lazy(getElementSchema).array().optional(),
	}).strict();

export const CoverageEligibilityResponse_ErrorSchema =
	CoverageEligibilityResponse_ErrorSchemaInternal as z.ZodType<CoverageEligibilityResponse_Error>;
