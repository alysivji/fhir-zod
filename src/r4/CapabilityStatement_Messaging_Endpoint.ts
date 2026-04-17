// Profile: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

import * as z from "zod";
import { fhirUrl } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** An endpoint (network accessible address) to which messages and/or replies are to be sent. */
export interface CapabilityStatement_Messaging_Endpoint
  extends BackboneElement {
  /** The network address of the endpoint. For solutions that do not use network addresses for routing, it can be just an identifier. */
  address: string;
  /** Extensions for address */
  _address?: Element;
  /** A list of the messaging transport protocol(s) identifiers, supported by this endpoint. */
  protocol: Coding;
}

const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const CapabilityStatement_Messaging_EndpointSchemaInternal =
  BackboneElementSchemaInternal.extend({
    address: fhirUrl(),
    _address: z.lazy(getElementSchema).optional(),
    protocol: z.lazy(getCodingSchema),
  }).strict();

export const CapabilityStatement_Messaging_EndpointSchema =
  CapabilityStatement_Messaging_EndpointSchemaInternal as z.ZodType<CapabilityStatement_Messaging_Endpoint>;
