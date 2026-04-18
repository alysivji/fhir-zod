// Profile: http://hl7.org/fhir/StructureDefinition/ContactDetail
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:00:58.420Z

import * as z from "zod";
import { fhirId, fhirString } from "../shared/fhir-primitives";
import type { ContactPoint } from "./ContactPoint";
import { ContactPointSchemaInternal } from "./ContactPoint";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** Base StructureDefinition for ContactDetail Type: Specifies contact information for a person or organization. */
export interface ContactDetail extends Element {
  /** The name of an individual to contact. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** The contact details for the individual (if a name was provided) or the organization. */
  telecom?: Array<ContactPoint>;
}

const getContactPointSchema = (): z.ZodType<ContactPoint> =>
  ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;

/** @internal */
export const ContactDetailSchemaInternal = z
  .object({
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    telecom: z.lazy(getContactPointSchema).array().optional(),
  })
  .strict();

export const ContactDetailSchema =
  ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
