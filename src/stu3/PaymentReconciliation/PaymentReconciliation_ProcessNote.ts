// Source: https://hl7.org/fhir/STU3/paymentreconciliation-definitions.html#PaymentReconciliation.processNote
// Profile: http://hl7.org/fhir/StructureDefinition/PaymentReconciliation
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

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
