// Profile: http://hl7.org/fhir/StructureDefinition/OperationOutcome
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** An error, warning, or information message that results from a system action. */
export interface OperationOutcome_Issue extends BackboneElement {
	/** Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element. */
	code:
		| "business-rule"
		| "code-invalid"
		| "conflict"
		| "deleted"
		| "duplicate"
		| "exception"
		| "expired"
		| "extension"
		| "forbidden"
		| "incomplete"
		| "informational"
		| "invalid"
		| "invariant"
		| "limited-filter"
		| "lock-error"
		| "login"
		| "multiple-matches"
		| "no-store"
		| "not-found"
		| "not-supported"
		| "processing"
		| "required"
		| "security"
		| "structure"
		| "success"
		| "suppressed"
		| "throttled"
		| "timeout"
		| "too-costly"
		| "too-long"
		| "transient"
		| "unknown"
		| "value";
	/** Extensions for code */
	_code?: Element;
	/** Additional details about the error. This may be a text description of the error or a system code that identifies the error. */
	details?: CodeableConcept;
	/** Additional diagnostic information about the issue. */
	diagnostics?: string;
	/** Extensions for diagnostics */
	_diagnostics?: Element;
	/** A [simple subset of FHIRPath](fhirpath.html#simple) limited to element names, repetition indicators and the default child accessor that identifies one of the elements in the resource that caused this issue to be raised. */
	expression?: Array<string | null>;
	/** Extensions for expression */
	_expression?: Array<Element | null>;
	/**
	 * This element is deprecated because it is XML specific. It is replaced by issue.expression, which is format independent, and simpler to parse.
	 *
	 * For resource issues, this will be a simple XPath limited to element names, repetition indicators and the default child accessor that identifies one of the elements in the resource that caused this issue to be raised.  For HTTP errors, will be "http." + the parameter name.
	 */
	location?: Array<string | null>;
	/** Extensions for location */
	_location?: Array<Element | null>;
	/** Indicates whether the issue indicates a variation from successful processing. */
	severity: "error" | "fatal" | "information" | "success" | "warning";
	/** Extensions for severity */
	_severity?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const OperationOutcome_IssueSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.enum([
			"business-rule",
			"code-invalid",
			"conflict",
			"deleted",
			"duplicate",
			"exception",
			"expired",
			"extension",
			"forbidden",
			"incomplete",
			"informational",
			"invalid",
			"invariant",
			"limited-filter",
			"lock-error",
			"login",
			"multiple-matches",
			"no-store",
			"not-found",
			"not-supported",
			"processing",
			"required",
			"security",
			"structure",
			"success",
			"suppressed",
			"throttled",
			"timeout",
			"too-costly",
			"too-long",
			"transient",
			"unknown",
			"value",
		]),
		_code: z.lazy(getElementSchema).optional(),
		details: z.lazy(getCodeableConceptSchema).optional(),
		diagnostics: fhirString().optional(),
		_diagnostics: z.lazy(getElementSchema).optional(),
		expression: fhirString().nullable().array().optional(),
		_expression: z.lazy(getElementSchema).nullable().array().optional(),
		location: fhirString().nullable().array().optional(),
		_location: z.lazy(getElementSchema).nullable().array().optional(),
		severity: z.enum(["error", "fatal", "information", "success", "warning"]),
		_severity: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.expression,
				record._expression,
				"expression",
				"_expression",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.location,
				record._location,
				"location",
				"_location",
				ctx,
			);
		});

export const OperationOutcome_IssueSchema =
	OperationOutcome_IssueSchemaInternal as z.ZodType<OperationOutcome_Issue>;
