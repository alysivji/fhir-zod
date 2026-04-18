// Profile: http://hl7.org/fhir/StructureDefinition/ClaimResponse
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Mutually exclusive with Services Provided (Item). */
export interface ClaimResponse_Error extends BackboneElement {
	/** An error code,from a specified code system, which details why the claim could not be adjudicated. */
	code: CodeableConcept;
	/** The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition. */
	detailSequenceLinkId?: number;
	/** Extensions for detailSequenceLinkId */
	_detailSequenceLinkId?: Element;
	/** The sequence number of the line item submitted which contains the error. This value is omitted when the error is elsewhere. */
	sequenceLinkId?: number;
	/** Extensions for sequenceLinkId */
	_sequenceLinkId?: Element;
	/** The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition. */
	subdetailSequenceLinkId?: number;
	/** Extensions for subdetailSequenceLinkId */
	_subdetailSequenceLinkId?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ClaimResponse_ErrorSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema),
		detailSequenceLinkId: z.number().int().positive().optional(),
		_detailSequenceLinkId: z.lazy(getElementSchema).optional(),
		sequenceLinkId: z.number().int().positive().optional(),
		_sequenceLinkId: z.lazy(getElementSchema).optional(),
		subdetailSequenceLinkId: z.number().int().positive().optional(),
		_subdetailSequenceLinkId: z.lazy(getElementSchema).optional(),
	}).strict();

export const ClaimResponse_ErrorSchema =
	ClaimResponse_ErrorSchemaInternal as z.ZodType<ClaimResponse_Error>;
