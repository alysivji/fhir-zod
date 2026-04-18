// Profile: http://hl7.org/fhir/StructureDefinition/Contract
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { fhirDateTime } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract. */
export interface Contract_ContentDefinition extends BackboneElement {
  /** A copyright statement relating to Contract precursor content. Copyright statements are generally legal restrictions on the use and publishing of the Contract precursor content. */
  copyright?: string;
  /** Extensions for copyright */
  _copyright?: Element;
  /** The date (and optionally time) when the contract was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the contract changes. */
  publicationDate?: string;
  /** Extensions for publicationDate */
  _publicationDate?: Element;
  /** amended | appended | cancelled | disputed | entered-in-error | executable +. */
  publicationStatus:
    | "amended"
    | "appended"
    | "cancelled"
    | "disputed"
    | "entered-in-error"
    | "executable"
    | "executed"
    | "negotiable"
    | "offered"
    | "policy"
    | "rejected"
    | "renewed"
    | "resolved"
    | "revoked"
    | "terminated";
  /** Extensions for publicationStatus */
  _publicationStatus?: Element;
  /** The  individual or organization that published the Contract precursor content. */
  publisher?: Reference;
  /** Detailed Precusory content type. */
  subType?: CodeableConcept;
  /** Precusory content structure and use, i.e., a boilerplate, template, application for a contract such as an insurance policy or benefits under a program, e.g., workers compensation. */
  type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Contract_ContentDefinitionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    copyright: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _copyright: z.lazy(getElementSchema).optional(),
    publicationDate: fhirDateTime().optional(),
    _publicationDate: z.lazy(getElementSchema).optional(),
    publicationStatus: z.enum([
      "amended",
      "appended",
      "cancelled",
      "disputed",
      "entered-in-error",
      "executable",
      "executed",
      "negotiable",
      "offered",
      "policy",
      "rejected",
      "renewed",
      "resolved",
      "revoked",
      "terminated",
    ]),
    _publicationStatus: z.lazy(getElementSchema).optional(),
    publisher: z.lazy(getReferenceSchema).optional(),
    subType: z.lazy(getCodeableConceptSchema).optional(),
    type: z.lazy(getCodeableConceptSchema),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.publisher,
        "publisher",
        [
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
        ["Organization", "Practitioner", "PractitionerRole"],
        ctx,
      );
    });

export const Contract_ContentDefinitionSchema =
  Contract_ContentDefinitionSchemaInternal as z.ZodType<Contract_ContentDefinition>;
