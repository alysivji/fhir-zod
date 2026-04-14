// Profile: http://hl7.org/fhir/StructureDefinition/ClaimResponse
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

/** Errors encountered during the processing of the adjudication. */
export interface ClaimResponse_Error extends BackboneElement {
	/** An error code, from a specified code system, which details why the claim could not be adjudicated. */
	code: CodeableConcept;
	/** The sequence number of the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure. */
	detailSequence?: number;
	/** Extensions for detailSequence */
	_detailSequence?: Element;
	/** A [simple subset of FHIRPath](fhirpath.html#simple) limited to element names, repetition indicators and the default child accessor that identifies one of the elements in the resource that caused this issue to be raised. */
	expression?: Array<string>;
	/** Extensions for expression */
	_expression?: Array<Element>;
	/** The sequence number of the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure. */
	itemSequence?: number;
	/** Extensions for itemSequence */
	_itemSequence?: Element;
	/** The sequence number of the sub-detail within the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure. */
	subDetailSequence?: number;
	/** Extensions for subDetailSequence */
	_subDetailSequence?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ClaimResponse_ErrorSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema),
		detailSequence: z.number().int().positive().optional(),
		_detailSequence: z.lazy(getElementSchema).optional(),
		expression: fhirString().array().optional(),
		_expression: z.lazy(getElementSchema).array().optional(),
		itemSequence: z.number().int().positive().optional(),
		_itemSequence: z.lazy(getElementSchema).optional(),
		subDetailSequence: z.number().int().positive().optional(),
		_subDetailSequence: z.lazy(getElementSchema).optional(),
	}).strict();

export const ClaimResponse_ErrorSchema =
	ClaimResponse_ErrorSchemaInternal as z.ZodType<ClaimResponse_Error>;
