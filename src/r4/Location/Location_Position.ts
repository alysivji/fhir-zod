// Source: https://hl7.org/fhir/R4/location-definitions.html#Location.position
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML). */
export interface Location_Position extends BackboneElement {
  /** Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below). */
  altitude?: number;
  /** Extensions for altitude */
  _altitude?: Element;
  /** Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below). */
  latitude: number;
  /** Extensions for latitude */
  _latitude?: Element;
  /** Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below). */
  longitude: number;
  /** Extensions for longitude */
  _longitude?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Location_PositionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    altitude: z.number().optional(),
    _altitude: z.lazy(getElementSchema).optional(),
    latitude: z.number(),
    _latitude: z.lazy(getElementSchema).optional(),
    longitude: z.number(),
    _longitude: z.lazy(getElementSchema).optional(),
  }).strict();

export const Location_PositionSchema =
  Location_PositionSchemaInternal as z.ZodType<Location_Position>;
