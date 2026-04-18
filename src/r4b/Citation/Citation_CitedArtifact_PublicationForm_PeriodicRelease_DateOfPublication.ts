// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

import * as z from "zod";
import { fhirDate, fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Defining the date on which the issue of the journal was published. */
export interface Citation_CitedArtifact_PublicationForm_PeriodicRelease_DateOfPublication
	extends BackboneElement {
	/** Date on which the issue of the journal was published. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** Day on which the issue of the journal was published. */
	day?: string;
	/** Extensions for day */
	_day?: Element;
	/** Month on which the issue of the journal was published. */
	month?: string;
	/** Extensions for month */
	_month?: Element;
	/** Spring, Summer, Fall/Autumn, Winter. */
	season?: string;
	/** Extensions for season */
	_season?: Element;
	/** Text representation of the date of which the issue of the journal was published. */
	text?: string;
	/** Extensions for text */
	_text?: Element;
	/** Year on which the issue of the journal was published. */
	year?: string;
	/** Extensions for year */
	_year?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Citation_CitedArtifact_PublicationForm_PeriodicRelease_DateOfPublicationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		date: fhirDate().optional(),
		_date: z.lazy(getElementSchema).optional(),
		day: fhirString().optional(),
		_day: z.lazy(getElementSchema).optional(),
		month: fhirString().optional(),
		_month: z.lazy(getElementSchema).optional(),
		season: fhirString().optional(),
		_season: z.lazy(getElementSchema).optional(),
		text: fhirString().optional(),
		_text: z.lazy(getElementSchema).optional(),
		year: fhirString().optional(),
		_year: z.lazy(getElementSchema).optional(),
	}).strict();

export const Citation_CitedArtifact_PublicationForm_PeriodicRelease_DateOfPublicationSchema =
	Citation_CitedArtifact_PublicationForm_PeriodicRelease_DateOfPublicationSchemaInternal as z.ZodType<Citation_CitedArtifact_PublicationForm_PeriodicRelease_DateOfPublication>;
