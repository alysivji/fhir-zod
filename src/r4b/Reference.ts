// Profile: http://hl7.org/fhir/StructureDefinition/Reference
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:00:58.420Z

import * as z from "zod";
import { fhirId, fhirString, fhirUri } from "../shared/fhir-primitives";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";

/** Base StructureDefinition for Reference Type: A reference from one resource to another. */
export interface Reference extends Element {
  /** Plain text narrative that identifies the resource in addition to the resource reference. */
  display?: string;
  /** Extensions for display */
  _display?: Element;
  /** An identifier for the target resource. This is used when there is no way to reference the other resource directly, either because the entity it represents is not available through a FHIR server, or because there is no way for the author of the resource to convert a known identifier to an actual location. There is no requirement that a Reference.identifier point to something that is actually exposed as a FHIR instance, but it SHALL point to a business concept that would be expected to be exposed as a FHIR instance, and that instance would need to be of a FHIR resource type allowed by the reference. */
  identifier?: Identifier;
  /** A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources. */
  reference?: string;
  /** Extensions for reference */
  _reference?: Element;
  /**
   * The expected type of the target of the reference. If both Reference.type and Reference.reference are populated and Reference.reference is a FHIR URL, both SHALL be consistent.
   *
   * The type is the Canonical URL of Resource Definition that is the type this reference refers to. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition/ e.g. "Patient" is a reference to http://hl7.org/fhir/StructureDefinition/Patient. Absolute URLs are only allowed for logical models (and can only be used in references in logical models, not resources).
   */
  type?: string;
  /** Extensions for type */
  _type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;

/** @internal */
export const ReferenceSchemaInternal = z
  .object({
    display: fhirString().optional(),
    _display: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).optional(),
    reference: fhirString().optional(),
    _reference: z.lazy(getElementSchema).optional(),
    type: fhirUri().optional(),
    _type: z.lazy(getElementSchema).optional(),
  })
  .strict();

export const ReferenceSchema = ReferenceSchemaInternal as z.ZodType<Reference>;
