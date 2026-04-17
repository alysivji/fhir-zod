// Profile: http://hl7.org/fhir/StructureDefinition/FormularyItem
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";

/** This resource describes a product or service that is available through a program and includes the conditions and constraints of availability.  All of the information in this resource is specific to the inclusion of the item in the formulary and is not inherent to the item itself. */
export interface FormularyItem extends DomainResource {
  /** A code (or set of codes) that specify the product or service that is identified by this formulary item. */
  code?: CodeableConcept;
  /** Business identifier for this formulary item. */
  identifier?: Array<Identifier>;
  /** This is a FormularyItem resource. */
  resourceType: "FormularyItem";
  /** The validity about the information of the formulary item and not of the underlying product or service itself. */
  status?: "active" | "entered-in-error" | "inactive";
  /** Extensions for status */
  _status?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;

/** @internal */
export const FormularyItemSchemaInternal = DomainResourceSchemaInternal.extend({
  code: z.lazy(getCodeableConceptSchema).optional(),
  identifier: z.lazy(getIdentifierSchema).array().optional(),
  resourceType: z.literal("FormularyItem"),
  status: z.enum(["active", "entered-in-error", "inactive"]).optional(),
  _status: z.lazy(getElementSchema).optional(),
}).strict();

export const FormularyItemSchema =
  FormularyItemSchemaInternal as z.ZodType<FormularyItem>;
