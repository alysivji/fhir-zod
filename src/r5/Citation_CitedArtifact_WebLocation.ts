// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirUri } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Used for any URL for the article or artifact cited. */
export interface Citation_CitedArtifact_WebLocation extends BackboneElement {
	/** A characterization of the object expected at the web location. */
	classifier?: Array<CodeableConcept>;
	/** The specific URL. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Citation_CitedArtifact_WebLocationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		classifier: z.lazy(getCodeableConceptSchema).array().optional(),
		url: fhirUri().optional(),
		_url: z.lazy(getElementSchema).optional(),
	}).strict();

export const Citation_CitedArtifact_WebLocationSchema =
	Citation_CitedArtifact_WebLocationSchemaInternal as z.ZodType<Citation_CitedArtifact_WebLocation>;
