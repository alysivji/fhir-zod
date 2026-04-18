// Source: https://hl7.org/fhir/R4B/messageheader-definitions.html#MessageHeader.source
// Profile: http://hl7.org/fhir/StructureDefinition/MessageHeader
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import { fhirString, fhirUrl } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { ContactPoint } from "../ContactPoint";
import { ContactPointSchemaInternal } from "../ContactPoint";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** The source application from which this message originated. */
export interface MessageHeader_Source extends BackboneElement {
  /** An e-mail, phone, website or other contact point to use to resolve issues with message communications. */
  contact?: ContactPoint;
  /** Identifies the routing target to send acknowledgements to. */
  endpoint: string;
  /** Extensions for endpoint */
  _endpoint?: Element;
  /** Human-readable name for the source system. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** May include configuration or other information useful in debugging. */
  software?: string;
  /** Extensions for software */
  _software?: Element;
  /** Can convey versions of multiple systems in situations where a message passes through multiple hands. */
  version?: string;
  /** Extensions for version */
  _version?: Element;
}

const getContactPointSchema = (): z.ZodType<ContactPoint> =>
  ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const MessageHeader_SourceSchemaInternal =
  BackboneElementSchemaInternal.extend({
    contact: z.lazy(getContactPointSchema).optional(),
    endpoint: fhirUrl(),
    _endpoint: z.lazy(getElementSchema).optional(),
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    software: fhirString().optional(),
    _software: z.lazy(getElementSchema).optional(),
    version: fhirString().optional(),
    _version: z.lazy(getElementSchema).optional(),
  }).strict();

export const MessageHeader_SourceSchema =
  MessageHeader_SourceSchemaInternal as z.ZodType<MessageHeader_Source>;
