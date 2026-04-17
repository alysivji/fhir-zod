// Profile: http://hl7.org/fhir/StructureDefinition/ConceptMap
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirCode, fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { ConceptMap_Group_Element_Target_DependsOn } from "./ConceptMap_Group_Element_Target_DependsOn";
import { ConceptMap_Group_Element_Target_DependsOnSchemaInternal } from "./ConceptMap_Group_Element_Target_DependsOn";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A concept from the target value set that this concept maps to. */
export interface ConceptMap_Group_Element_Target extends BackboneElement {
  /** Identity (code or path) or the element/item that the map refers to. */
  code?: string;
  /** Extensions for code */
  _code?: Element;
  /** A description of status/issues in mapping that conveys additional information not represented in  the structured data. */
  comment?: string;
  /** Extensions for comment */
  _comment?: Element;
  /** A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value. */
  dependsOn?: Array<ConceptMap_Group_Element_Target_DependsOn>;
  /** The display for the code. The display is only provided to help editors when editing the concept map. */
  display?: string;
  /** Extensions for display */
  _display?: Element;
  /** The equivalence between the source and target concepts (counting for the dependencies and products). The equivalence is read from target to source (e.g. the target is 'wider' than the source). */
  equivalence?:
    | "disjoint"
    | "equal"
    | "equivalent"
    | "inexact"
    | "narrower"
    | "relatedto"
    | "specializes"
    | "subsumes"
    | "unmatched"
    | "wider";
  /** Extensions for equivalence */
  _equivalence?: Element;
  /** A set of additional outcomes from this mapping to other elements. To properly execute this mapping, the specified element must be mapped to some data element or source that is in context. The mapping may still be useful without a place for the additional data elements, but the equivalence cannot be relied on. */
  product?: Array<unknown>;
}

const getConceptMap_Group_Element_Target_DependsOnSchema =
  (): z.ZodType<ConceptMap_Group_Element_Target_DependsOn> =>
    ConceptMap_Group_Element_Target_DependsOnSchemaInternal as z.ZodType<ConceptMap_Group_Element_Target_DependsOn>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ConceptMap_Group_Element_TargetSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: fhirCode().optional(),
    _code: z.lazy(getElementSchema).optional(),
    comment: fhirString().optional(),
    _comment: z.lazy(getElementSchema).optional(),
    dependsOn: z
      .lazy(getConceptMap_Group_Element_Target_DependsOnSchema)
      .array()
      .optional(),
    display: fhirString().optional(),
    _display: z.lazy(getElementSchema).optional(),
    equivalence: z
      .enum([
        "disjoint",
        "equal",
        "equivalent",
        "inexact",
        "narrower",
        "relatedto",
        "specializes",
        "subsumes",
        "unmatched",
        "wider",
      ])
      .optional(),
    _equivalence: z.lazy(getElementSchema).optional(),
    product: z.unknown().array().optional(),
  }).strict();

export const ConceptMap_Group_Element_TargetSchema =
  ConceptMap_Group_Element_TargetSchemaInternal as z.ZodType<ConceptMap_Group_Element_Target>;
