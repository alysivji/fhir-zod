// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirUrl } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** An abstract server used in operations within this test script in the destination element. */
export interface TestScript_Destination extends BackboneElement {
  /** Abstract name given to a destination server in this test script.  The name is provided as a number starting at 1. */
  index: number;
  /** Extensions for index */
  _index?: Element;
  /** The type of destination profile the test system supports. */
  profile: Coding;
  /** The explicit url path of the destination server used in this test script. */
  url?: string;
  /** Extensions for url */
  _url?: Element;
}

const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const TestScript_DestinationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    index: z.number().int(),
    _index: z.lazy(getElementSchema).optional(),
    profile: z.lazy(getCodingSchema),
    url: fhirUrl().optional(),
    _url: z.lazy(getElementSchema).optional(),
  }).strict();

export const TestScript_DestinationSchema =
  TestScript_DestinationSchemaInternal as z.ZodType<TestScript_Destination>;
