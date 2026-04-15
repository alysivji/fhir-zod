// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T02:24:59.228Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Citation_CitedArtifact_PublicationForm_PeriodicRelease } from "./Citation_CitedArtifact_PublicationForm_PeriodicRelease";
import { Citation_CitedArtifact_PublicationForm_PeriodicReleaseSchemaInternal } from "./Citation_CitedArtifact_PublicationForm_PeriodicRelease";
import type { Citation_CitedArtifact_PublicationForm_PublishedIn } from "./Citation_CitedArtifact_PublicationForm_PublishedIn";
import { Citation_CitedArtifact_PublicationForm_PublishedInSchemaInternal } from "./Citation_CitedArtifact_PublicationForm_PublishedIn";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** If multiple, used to represent alternative forms of the article that are not separate citations. */
export interface Citation_CitedArtifact_PublicationForm
	extends BackboneElement {
	/** Entry number or identifier for inclusion in a database. */
	accessionNumber?: string;
	/** Extensions for accessionNumber */
	_accessionNumber?: Element;
	/** The date the article was added to the database, or the date the article was released (which may differ from the journal issue publication date). */
	articleDate?: string;
	/** Extensions for articleDate */
	_articleDate?: Element;
	/** Copyright notice for the full article or artifact. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** Used for isolated representation of first page. */
	firstPage?: string;
	/** Extensions for firstPage */
	_firstPage?: Element;
	/** Language in which this form of the article is published. */
	language?: Array<CodeableConcept>;
	/** Used for isolated representation of last page. */
	lastPage?: string;
	/** Extensions for lastPage */
	_lastPage?: Element;
	/** The date the article was last revised or updated in the database. */
	lastRevisionDate?: string;
	/** Extensions for lastRevisionDate */
	_lastRevisionDate?: Element;
	/** Actual or approximate number of pages or screens. */
	pageCount?: string;
	/** Extensions for pageCount */
	_pageCount?: Element;
	/** Used for full display of pagination. */
	pageString?: string;
	/** Extensions for pageString */
	_pageString?: Element;
	/** The specific issue in which the cited article resides. */
	periodicRelease?: Citation_CitedArtifact_PublicationForm_PeriodicRelease;
	/** The collection the cited article or artifact is published in. */
	publishedIn?: Citation_CitedArtifact_PublicationForm_PublishedIn;
}

const getCitation_CitedArtifact_PublicationForm_PeriodicReleaseSchema =
	(): z.ZodType<Citation_CitedArtifact_PublicationForm_PeriodicRelease> =>
		Citation_CitedArtifact_PublicationForm_PeriodicReleaseSchemaInternal as z.ZodType<Citation_CitedArtifact_PublicationForm_PeriodicRelease>;
const getCitation_CitedArtifact_PublicationForm_PublishedInSchema =
	(): z.ZodType<Citation_CitedArtifact_PublicationForm_PublishedIn> =>
		Citation_CitedArtifact_PublicationForm_PublishedInSchemaInternal as z.ZodType<Citation_CitedArtifact_PublicationForm_PublishedIn>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Citation_CitedArtifact_PublicationFormSchemaInternal =
	BackboneElementSchemaInternal.extend({
		accessionNumber: fhirString().optional(),
		_accessionNumber: z.lazy(getElementSchema).optional(),
		articleDate: fhirDateTime().optional(),
		_articleDate: z.lazy(getElementSchema).optional(),
		copyright: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_copyright: z.lazy(getElementSchema).optional(),
		firstPage: fhirString().optional(),
		_firstPage: z.lazy(getElementSchema).optional(),
		language: z.lazy(getCodeableConceptSchema).array().optional(),
		lastPage: fhirString().optional(),
		_lastPage: z.lazy(getElementSchema).optional(),
		lastRevisionDate: fhirDateTime().optional(),
		_lastRevisionDate: z.lazy(getElementSchema).optional(),
		pageCount: fhirString().optional(),
		_pageCount: z.lazy(getElementSchema).optional(),
		pageString: fhirString().optional(),
		_pageString: z.lazy(getElementSchema).optional(),
		periodicRelease: z
			.lazy(getCitation_CitedArtifact_PublicationForm_PeriodicReleaseSchema)
			.optional(),
		publishedIn: z
			.lazy(getCitation_CitedArtifact_PublicationForm_PublishedInSchema)
			.optional(),
	}).strict();

export const Citation_CitedArtifact_PublicationFormSchema =
	Citation_CitedArtifact_PublicationFormSchemaInternal as z.ZodType<Citation_CitedArtifact_PublicationForm>;
