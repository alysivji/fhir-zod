// Profile: http://hl7.org/fhir/StructureDefinition/ConceptMap
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:00:42.795Z

import * as z from "zod";
import { fhirString, fhirUri } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { ConceptMap_Group_Element } from "./ConceptMap_Group_Element";
import { ConceptMap_Group_ElementSchemaInternal } from "./ConceptMap_Group_Element";
import type { ConceptMap_Group_Unmapped } from "./ConceptMap_Group_Unmapped";
import { ConceptMap_Group_UnmappedSchemaInternal } from "./ConceptMap_Group_Unmapped";

/** A group of mappings that all have the same source and target system. */
export interface ConceptMap_Group extends BackboneElement {
  /** Mappings for an individual concept in the source to one or more concepts in the target. */
  element: Array<ConceptMap_Group_Element>;
  /** An absolute URI that identifies the source system where the concepts to be mapped are defined. */
  source?: string;
  /** Extensions for source */
  _source?: Element;
  /** The specific version of the code system, as determined by the code system authority. */
  sourceVersion?: string;
  /** Extensions for sourceVersion */
  _sourceVersion?: Element;
  /** An absolute URI that identifies the target system that the concepts will be mapped to. */
  target?: string;
  /** Extensions for target */
  _target?: Element;
  /** The specific version of the code system, as determined by the code system authority. */
  targetVersion?: string;
  /** Extensions for targetVersion */
  _targetVersion?: Element;
  /** What to do when there is no mapping for the source concept. "Unmapped" does not include codes that are unmatched, and the unmapped element is ignored in a code is specified to have equivalence = unmatched. */
  unmapped?: ConceptMap_Group_Unmapped;
}

const getConceptMap_Group_ElementSchema =
  (): z.ZodType<ConceptMap_Group_Element> =>
    ConceptMap_Group_ElementSchemaInternal as z.ZodType<ConceptMap_Group_Element>;
const getConceptMap_Group_UnmappedSchema =
  (): z.ZodType<ConceptMap_Group_Unmapped> =>
    ConceptMap_Group_UnmappedSchemaInternal as z.ZodType<ConceptMap_Group_Unmapped>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ConceptMap_GroupSchemaInternal =
  BackboneElementSchemaInternal.extend({
    element: z.lazy(getConceptMap_Group_ElementSchema).array(),
    source: fhirUri().optional(),
    _source: z.lazy(getElementSchema).optional(),
    sourceVersion: fhirString().optional(),
    _sourceVersion: z.lazy(getElementSchema).optional(),
    target: fhirUri().optional(),
    _target: z.lazy(getElementSchema).optional(),
    targetVersion: fhirString().optional(),
    _targetVersion: z.lazy(getElementSchema).optional(),
    unmapped: z.lazy(getConceptMap_Group_UnmappedSchema).optional(),
  }).strict();

export const ConceptMap_GroupSchema =
  ConceptMap_GroupSchemaInternal as z.ZodType<ConceptMap_Group>;
