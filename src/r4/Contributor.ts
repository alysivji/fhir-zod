// Source: https://hl7.org/fhir/R4/datatypes.html#Contributor
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { ContactDetail } from "./ContactDetail";
import { ContactDetailSchemaInternal } from "./ContactDetail";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** Base StructureDefinition for Contributor Type: A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
export interface Contributor extends Element {
  /** Contact details to assist a user in finding and communicating with the contributor. */
  contact?: Array<ContactDetail>;
  /** The name of the individual or organization responsible for the contribution. */
  name: string;
  /** Extensions for name */
  _name?: Element;
  /** The type of contributor. */
  type: "author" | "editor" | "endorser" | "reviewer";
  /** Extensions for type */
  _type?: Element;
}

const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
  ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;

/** @internal */
export const ContributorSchemaInternal = z
  .object({
    contact: z.lazy(getContactDetailSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirString().optional(),
    _id: z.lazy(getElementSchema).optional(),
    name: fhirString(),
    _name: z.lazy(getElementSchema).optional(),
    type: z.enum(["author", "editor", "endorser", "reviewer"]),
    _type: z.lazy(getElementSchema).optional(),
  })
  .strict();

export const ContributorSchema =
  ContributorSchemaInternal as z.ZodType<Contributor>;
