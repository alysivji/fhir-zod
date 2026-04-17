// Profile: http://hl7.org/fhir/StructureDefinition/ProcessRequest
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** List of top level items to be re-adjudicated, if none specified then the entire submission is re-adjudicated. */
export interface ProcessRequest_Item extends BackboneElement {
  /** A service line number. */
  sequenceLinkId: number;
  /** Extensions for sequenceLinkId */
  _sequenceLinkId?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ProcessRequest_ItemSchemaInternal =
  BackboneElementSchemaInternal.extend({
    sequenceLinkId: z.number().int(),
    _sequenceLinkId: z.lazy(getElementSchema).optional(),
  }).strict();

export const ProcessRequest_ItemSchema =
  ProcessRequest_ItemSchemaInternal as z.ZodType<ProcessRequest_Item>;
