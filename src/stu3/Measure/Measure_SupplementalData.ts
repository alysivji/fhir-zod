// Source: https://hl7.org/fhir/STU3/measure-definitions.html#Measure.supplementalData
// Profile: http://hl7.org/fhir/StructureDefinition/Measure
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";

/** The supplemental data criteria for the measure report, specified as either the name of a valid CQL expression within a referenced library, or a valid FHIR Resource Path. */
export interface Measure_SupplementalData extends BackboneElement {
  /** The criteria for the supplemental data. This must be the name of a valid expression defined within a referenced library, and defines the data to be returned for this element. */
  criteria?: string;
  /** Extensions for criteria */
  _criteria?: Element;
  /** An identifier for the supplemental data. */
  identifier?: Identifier;
  /** The supplemental data to be supplied as part of the measure response, specified as a valid FHIR Resource Path. */
  path?: string;
  /** Extensions for path */
  _path?: Element;
  /** An indicator of the intended usage for the supplemental data element. Supplemental data indicates the data is additional information requested to augment the measure information. Risk adjustment factor indicates the data is additional information used to calculate risk adjustment factors when applying a risk model to the measure calculation. */
  usage?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;

/** @internal */
export const Measure_SupplementalDataSchemaInternal =
  BackboneElementSchemaInternal.extend({
    criteria: fhirString().optional(),
    _criteria: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).optional(),
    path: fhirString().optional(),
    _path: z.lazy(getElementSchema).optional(),
    usage: z.lazy(getCodeableConceptSchema).array().optional(),
  }).strict();

export const Measure_SupplementalDataSchema =
  Measure_SupplementalDataSchemaInternal as z.ZodType<Measure_SupplementalData>;
