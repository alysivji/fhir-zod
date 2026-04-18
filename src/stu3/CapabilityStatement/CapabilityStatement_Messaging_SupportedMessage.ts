// Source: https://hl7.org/fhir/STU3/capabilitystatement-definitions.html#CapabilityStatement.messaging.supportedMessage
// Profile: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** References to message definitions for messages this system can send or receive. */
export interface CapabilityStatement_Messaging_SupportedMessage
  extends BackboneElement {
  /** Points to a message definition that identifies the messaging event, message structure, allowed responses, etc. */
  definition: Reference;
  /** The mode of this event declaration - whether application is sender or receiver. */
  mode: "receiver" | "sender";
  /** Extensions for mode */
  _mode?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const CapabilityStatement_Messaging_SupportedMessageSchemaInternal =
  BackboneElementSchemaInternal.extend({
    definition: z.lazy(getReferenceSchema),
    mode: z.enum(["receiver", "sender"]),
    _mode: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.definition,
        "definition",
        ["http://hl7.org/fhir/StructureDefinition/MessageDefinition"],
        ["MessageDefinition"],
        ctx,
      );
    });

export const CapabilityStatement_Messaging_SupportedMessageSchema =
  CapabilityStatement_Messaging_SupportedMessageSchemaInternal as z.ZodType<CapabilityStatement_Messaging_SupportedMessage>;
