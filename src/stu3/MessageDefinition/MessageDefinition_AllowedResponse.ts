// Profile: http://hl7.org/fhir/StructureDefinition/MessageDefinition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:00:56.233Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Indicates what types of messages may be sent as an application-level response to this message. */
export interface MessageDefinition_AllowedResponse extends BackboneElement {
  /** A reference to the message definition that must be adhered to by this supported response. */
  message: Reference;
  /** Provides a description of the circumstances in which this response should be used (as opposed to one of the alternative responses). */
  situation?: string;
  /** Extensions for situation */
  _situation?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MessageDefinition_AllowedResponseSchemaInternal =
  BackboneElementSchemaInternal.extend({
    message: z.lazy(getReferenceSchema),
    situation: z.string().optional(),
    _situation: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.message,
        "message",
        ["http://hl7.org/fhir/StructureDefinition/MessageDefinition"],
        ["MessageDefinition"],
        ctx,
      );
    });

export const MessageDefinition_AllowedResponseSchema =
  MessageDefinition_AllowedResponseSchemaInternal as z.ZodType<MessageDefinition_AllowedResponse>;
