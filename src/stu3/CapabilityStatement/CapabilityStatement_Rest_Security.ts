// Profile: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:00:56.233Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { CapabilityStatement_Rest_Security_Certificate } from "./CapabilityStatement_Rest_Security_Certificate";
import { CapabilityStatement_Rest_Security_CertificateSchemaInternal } from "./CapabilityStatement_Rest_Security_Certificate";

/** Information about security implementation from an interface perspective - what a client needs to know. */
export interface CapabilityStatement_Rest_Security extends BackboneElement {
  /** Certificates associated with security profiles. */
  certificate?: Array<CapabilityStatement_Rest_Security_Certificate>;
  /** Server adds CORS headers when responding to requests - this enables javascript applications to use the server. */
  cors?: boolean;
  /** Extensions for cors */
  _cors?: Element;
  /** General description of how security works. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Types of security services that are supported/required by the system. */
  service?: Array<CodeableConcept>;
}

const getCapabilityStatement_Rest_Security_CertificateSchema =
  (): z.ZodType<CapabilityStatement_Rest_Security_Certificate> =>
    CapabilityStatement_Rest_Security_CertificateSchemaInternal as z.ZodType<CapabilityStatement_Rest_Security_Certificate>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const CapabilityStatement_Rest_SecuritySchemaInternal =
  BackboneElementSchemaInternal.extend({
    certificate: z
      .lazy(getCapabilityStatement_Rest_Security_CertificateSchema)
      .array()
      .optional(),
    cors: z.boolean().optional(),
    _cors: z.lazy(getElementSchema).optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    service: z.lazy(getCodeableConceptSchema).array().optional(),
  }).strict();

export const CapabilityStatement_Rest_SecuritySchema =
  CapabilityStatement_Rest_SecuritySchemaInternal as z.ZodType<CapabilityStatement_Rest_Security>;
