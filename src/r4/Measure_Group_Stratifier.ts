// Profile: http://hl7.org/fhir/StructureDefinition/Measure
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Expression } from "./Expression";
import { ExpressionSchemaInternal } from "./Expression";
import type { Measure_Group_Stratifier_Component } from "./Measure_Group_Stratifier_Component";
import { Measure_Group_Stratifier_ComponentSchemaInternal } from "./Measure_Group_Stratifier_Component";

/** The stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library or a valid FHIR Resource Path. */
export interface Measure_Group_Stratifier extends BackboneElement {
  /** Indicates a meaning for the stratifier. This can be as simple as a unique identifier, or it can establish meaning in a broader context by drawing from a terminology, allowing stratifiers to be correlated across measures. */
  code?: CodeableConcept;
  /** A component of the stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library or a valid FHIR Resource Path. */
  component?: Array<Measure_Group_Stratifier_Component>;
  /** An expression that specifies the criteria for the stratifier. This is typically the name of an expression defined within a referenced library, but it may also be a path to a stratifier element. */
  criteria?: Expression;
  /** The human readable description of this stratifier criteria. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExpressionSchema = (): z.ZodType<Expression> =>
  ExpressionSchemaInternal as z.ZodType<Expression>;
const getMeasure_Group_Stratifier_ComponentSchema =
  (): z.ZodType<Measure_Group_Stratifier_Component> =>
    Measure_Group_Stratifier_ComponentSchemaInternal as z.ZodType<Measure_Group_Stratifier_Component>;

/** @internal */
export const Measure_Group_StratifierSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema).optional(),
    component: z
      .lazy(getMeasure_Group_Stratifier_ComponentSchema)
      .array()
      .optional(),
    criteria: z.lazy(getExpressionSchema).optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
  }).strict();

export const Measure_Group_StratifierSchema =
  Measure_Group_StratifierSchemaInternal as z.ZodType<Measure_Group_Stratifier>;
