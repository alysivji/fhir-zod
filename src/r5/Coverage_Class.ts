// Profile: http://hl7.org/fhir/StructureDefinition/Coverage
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";

/** A suite of underwriter specific classifiers. */
export interface Coverage_Class extends BackboneElement {
  /** A short description for the class. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** The type of classification for which an insurer-specific class label or number and optional name is provided.  For example, type may be used to identify a class of coverage or employer group, policy, or plan. */
  type: CodeableConcept;
  /** The alphanumeric identifier associated with the insurer issued label. */
  value: Identifier;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;

/** @internal */
export const Coverage_ClassSchemaInternal =
  BackboneElementSchemaInternal.extend({
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodeableConceptSchema),
    value: z.lazy(getIdentifierSchema),
  }).strict();

export const Coverage_ClassSchema =
  Coverage_ClassSchemaInternal as z.ZodType<Coverage_Class>;
