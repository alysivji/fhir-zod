// Profile: http://hl7.org/fhir/StructureDefinition/PaymentReconciliation
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Suite of notes. */
export interface PaymentReconciliation_ProcessNote extends BackboneElement {
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
export const PaymentReconciliation_ProcessNoteSchemaInternal =
	BackboneElementSchemaInternal.extend({
		text: fhirString().optional(),
		_text: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const PaymentReconciliation_ProcessNoteSchema =
	PaymentReconciliation_ProcessNoteSchemaInternal as z.ZodType<PaymentReconciliation_ProcessNote>;
