// Profile: http://hl7.org/fhir/StructureDefinition/Coverage
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-17T23:33:05.787Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A suite of underwriter specific classifiers. */
export interface Coverage_Class extends BackboneElement {
  /** A short description for the class. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** The type of classification for which an insurer-specific class label or number and optional name is provided, for example may be used to identify a class of coverage or employer group, Policy, Plan. */
  type: CodeableConcept;
  /** The alphanumeric string value associated with the insurer issued label. */
  value: string;
  /** Extensions for value */
  _value?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Coverage_ClassSchemaInternal =
  BackboneElementSchemaInternal.extend({
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodeableConceptSchema),
    value: fhirString(),
    _value: z.lazy(getElementSchema).optional(),
  }).strict();

export const Coverage_ClassSchema =
  Coverage_ClassSchemaInternal as z.ZodType<Coverage_Class>;
