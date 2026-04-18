// Profile: http://hl7.org/fhir/StructureDefinition/ProcessResponse
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Suite of processing notes or additional requirements if the processing has been held. */
export interface ProcessResponse_ProcessNote extends BackboneElement {
	/** The note text. */
	text?: string;
	/** Extensions for text */
	_text?: Element;
	/** The note purpose: Print/Display. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ProcessResponse_ProcessNoteSchemaInternal =
	BackboneElementSchemaInternal.extend({
		text: fhirString().optional(),
		_text: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const ProcessResponse_ProcessNoteSchema =
	ProcessResponse_ProcessNoteSchemaInternal as z.ZodType<ProcessResponse_ProcessNote>;
