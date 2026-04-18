// Profile: http://hl7.org/fhir/StructureDefinition/MessageHeader
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { fhirString, fhirUrl } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** The destination application which the message is intended for. */
export interface MessageHeader_Destination extends BackboneElement {
  /** Indicates where the message should be routed to. */
  endpoint: string;
  /** Extensions for endpoint */
  _endpoint?: Element;
  /** Human-readable name for the target system. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn't sufficient. */
  receiver?: Reference;
  /** Identifies the target end system in situations where the initial message transmission is to an intermediary system. */
  target?: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MessageHeader_DestinationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    endpoint: fhirUrl(),
    _endpoint: z.lazy(getElementSchema).optional(),
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    receiver: z.lazy(getReferenceSchema).optional(),
    target: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.receiver,
        "receiver",
        [
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
        ["Organization", "Practitioner", "PractitionerRole"],
        ctx,
      );
      validateReferenceTarget(
        record.target,
        "target",
        ["http://hl7.org/fhir/StructureDefinition/Device"],
        ["Device"],
        ctx,
      );
    });

export const MessageHeader_DestinationSchema =
  MessageHeader_DestinationSchemaInternal as z.ZodType<MessageHeader_Destination>;
