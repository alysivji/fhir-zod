// Profile: http://hl7.org/fhir/StructureDefinition/Organization
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import type { Address } from "./Address";
import { AddressSchemaInternal } from "./Address";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { ContactPoint } from "./ContactPoint";
import { ContactPointSchemaInternal } from "./ContactPoint";
import type { HumanName } from "./HumanName";
import { HumanNameSchemaInternal } from "./HumanName";

/** Contact for the organization for a certain purpose. */
export interface Organization_Contact extends BackboneElement {
  /** Visiting or postal addresses for the contact. */
  address?: Address;
  /** A name associated with the contact. */
  name?: HumanName;
  /** Indicates a purpose for which the contact can be reached. */
  purpose?: CodeableConcept;
  /** A contact detail (e.g. a telephone number or an email address) by which the party may be contacted. */
  telecom?: Array<ContactPoint>;
}

const getAddressSchema = (): z.ZodType<Address> =>
  AddressSchemaInternal as z.ZodType<Address>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
  ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getHumanNameSchema = (): z.ZodType<HumanName> =>
  HumanNameSchemaInternal as z.ZodType<HumanName>;

/** @internal */
export const Organization_ContactSchemaInternal =
  BackboneElementSchemaInternal.extend({
    address: z.lazy(getAddressSchema).optional(),
    name: z.lazy(getHumanNameSchema).optional(),
    purpose: z.lazy(getCodeableConceptSchema).optional(),
    telecom: z.lazy(getContactPointSchema).array().optional(),
  }).strict();

export const Organization_ContactSchema =
  Organization_ContactSchemaInternal as z.ZodType<Organization_Contact>;
