// Profile: http://hl7.org/fhir/StructureDefinition/PaymentReconciliation
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-17T23:33:05.787Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A note that describes or explains the processing in a human readable form. */
export interface PaymentReconciliation_ProcessNote extends BackboneElement {
  /** The explanation or description associated with the processing. */
  text?: string;
  /** Extensions for text */
  _text?: Element;
  /** The business purpose of the note text. */
  type?: "display" | "print" | "printoper";
  /** Extensions for type */
  _type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const PaymentReconciliation_ProcessNoteSchemaInternal =
  BackboneElementSchemaInternal.extend({
    text: fhirString().optional(),
    _text: z.lazy(getElementSchema).optional(),
    type: z.enum(["display", "print", "printoper"]).optional(),
    _type: z.lazy(getElementSchema).optional(),
  }).strict();

export const PaymentReconciliation_ProcessNoteSchema =
  PaymentReconciliation_ProcessNoteSchemaInternal as z.ZodType<PaymentReconciliation_ProcessNote>;
