// Profile: http://hl7.org/fhir/StructureDefinition/Location
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML). */
export interface Location_Position extends BackboneElement {
	/** Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes on Location main page). */
	altitude?: number;
	/** Extensions for altitude */
	_altitude?: Element;
	/** Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes on Location main page). */
	latitude: number;
	/** Extensions for latitude */
	_latitude?: Element;
	/** Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes on Location main page). */
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
