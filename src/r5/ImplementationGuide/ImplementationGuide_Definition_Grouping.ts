// Source: https://hl7.org/fhir/R5/implementationguide-definitions.html#ImplementationGuide.definition.grouping
// Profile: http://hl7.org/fhir/StructureDefinition/ImplementationGuide
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** A logical group of resources. Logical groups can be used when building pages. */
export interface ImplementationGuide_Definition_Grouping
  extends BackboneElement {
  /** Human readable text describing the package. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** The human-readable title to display for the package of resources when rendering the implementation guide. */
  name: string;
  /** Extensions for name */
  _name?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ImplementationGuide_Definition_GroupingSchemaInternal =
  BackboneElementSchemaInternal.extend({
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    name: fhirString(),
    _name: z.lazy(getElementSchema).optional(),
  }).strict();

export const ImplementationGuide_Definition_GroupingSchema =
  ImplementationGuide_Definition_GroupingSchemaInternal as z.ZodType<ImplementationGuide_Definition_Grouping>;
