// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Citation_CitedArtifact_PublicationForm_PeriodicRelease_DateOfPublication } from "./Citation_CitedArtifact_PublicationForm_PeriodicRelease_DateOfPublication";
import { Citation_CitedArtifact_PublicationForm_PeriodicRelease_DateOfPublicationSchemaInternal } from "./Citation_CitedArtifact_PublicationForm_PeriodicRelease_DateOfPublication";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** The specific issue in which the cited article resides. */
export interface Citation_CitedArtifact_PublicationForm_PeriodicRelease
	extends BackboneElement {
	/** Describes the form of the medium cited. Common codes are "Internet" or "Print". */
	citedMedium?: CodeableConcept;
	/** Defining the date on which the issue of the journal was published. */
	dateOfPublication?: Citation_CitedArtifact_PublicationForm_PeriodicRelease_DateOfPublication;
	/** Issue, part or supplement of journal in which the article is published. */
	issue?: string;
	/** Extensions for issue */
	_issue?: Element;
	/** Volume number of journal in which the article is published. */
	volume?: string;
	/** Extensions for volume */
	_volume?: Element;
}

const getCitation_CitedArtifact_PublicationForm_PeriodicRelease_DateOfPublicationSchema =
	(): z.ZodType<Citation_CitedArtifact_PublicationForm_PeriodicRelease_DateOfPublication> =>
		Citation_CitedArtifact_PublicationForm_PeriodicRelease_DateOfPublicationSchemaInternal as z.ZodType<Citation_CitedArtifact_PublicationForm_PeriodicRelease_DateOfPublication>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Citation_CitedArtifact_PublicationForm_PeriodicReleaseSchemaInternal =
	BackboneElementSchemaInternal.extend({
		citedMedium: z.lazy(getCodeableConceptSchema).optional(),
		dateOfPublication: z
			.lazy(
				getCitation_CitedArtifact_PublicationForm_PeriodicRelease_DateOfPublicationSchema,
			)
			.optional(),
		issue: fhirString().optional(),
		_issue: z.lazy(getElementSchema).optional(),
		volume: fhirString().optional(),
		_volume: z.lazy(getElementSchema).optional(),
	}).strict();

export const Citation_CitedArtifact_PublicationForm_PeriodicReleaseSchema =
	Citation_CitedArtifact_PublicationForm_PeriodicReleaseSchemaInternal as z.ZodType<Citation_CitedArtifact_PublicationForm_PeriodicRelease>;
