// Profile: http://hl7.org/fhir/StructureDefinition/ClaimResponse
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
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
		itemSequence: z.number().int().positive().optional(),
		_itemSequence: z.lazy(getElementSchema).optional(),
		subDetailSequence: z.number().int().positive().optional(),
		_subDetailSequence: z.lazy(getElementSchema).optional(),
	}).strict();

export const ClaimResponse_ErrorSchema =
	ClaimResponse_ErrorSchemaInternal as z.ZodType<ClaimResponse_Error>;
