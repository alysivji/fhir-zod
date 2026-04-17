// Profile: http://hl7.org/fhir/StructureDefinition/ImplementationGuide
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Information about a page within the IG. */
export interface ImplementationGuide_Manifest_Page extends BackboneElement {
  /** The name of an anchor available on the page. */
  anchor?: Array<string | null>;
  /** Extensions for anchor */
  _anchor?: Array<Element | null>;
  /** Relative path to the page. */
  name: string;
  /** Extensions for name */
  _name?: Element;
  /** Label for the page intended for human display. */
  title?: string;
  /** Extensions for title */
  _title?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ImplementationGuide_Manifest_PageSchemaInternal =
  BackboneElementSchemaInternal.extend({
    anchor: fhirString().nullable().array().optional(),
    _anchor: z.lazy(getElementSchema).nullable().array().optional(),
    name: fhirString(),
    _name: z.lazy(getElementSchema).optional(),
    title: fhirString().optional(),
    _title: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validatePrimitiveArrayPair(
        record.anchor,
        record._anchor,
        "anchor",
        "_anchor",
        ctx,
      );
    });

export const ImplementationGuide_Manifest_PageSchema =
  ImplementationGuide_Manifest_PageSchemaInternal as z.ZodType<ImplementationGuide_Manifest_Page>;
