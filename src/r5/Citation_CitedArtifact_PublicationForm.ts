// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
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
	/** The date the article was added to the database, or the date the article was released. */
	articleDate?: string;
	/** Extensions for articleDate */
	_articleDate?: Element;
	/** Describes the form of the medium cited. Common codes are "Internet" or "Print". The CitedMedium value set has 6 codes. The codes internet, print, and offline-digital-storage are the common codes for a typical publication form, though internet and print are more common for study citations. Three additional codes (each appending one of the primary codes with "-without-issue" are used for situations when a study is published both within an issue (of a periodical release as commonly done for journals) AND is published separately from the issue (as commonly done with early online publication), to represent specific identification of the publication form not associated with the issue. */
	citedMedium?: CodeableConcept;
	/** Copyright notice for the full article or artifact. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** Used for isolated representation of first page. */
	firstPage?: string;
	/** Extensions for firstPage */
	_firstPage?: Element;
	/** Issue, part or supplement of journal or other collection in which the article is published. */
	issue?: string;
	/** Extensions for issue */
	_issue?: Element;
	/** The language or languages in which this form of the article is published. */
	language?: Array<CodeableConcept>;
	/** Used for isolated representation of last page. */
	lastPage?: string;
	/** Extensions for lastPage */
	_lastPage?: Element;
	/** The date the article was last revised or updated in the database. */
	lastRevisionDate?: string;
	/** Extensions for lastRevisionDate */
	_lastRevisionDate?: Element;
	/** Actual or approximate number of pages or screens. Distinct from reporting the page numbers. */
	pageCount?: string;
	/** Extensions for pageCount */
	_pageCount?: Element;
	/** Used for full display of pagination. */
	pageString?: string;
	/** Extensions for pageString */
	_pageString?: Element;
	/** Spring, Summer, Fall/Autumn, Winter. */
	publicationDateSeason?: string;
	/** Extensions for publicationDateSeason */
	_publicationDateSeason?: Element;
	/** Text representation of the date on which the issue of the cited artifact was published. */
	publicationDateText?: string;
	/** Extensions for publicationDateText */
	_publicationDateText?: Element;
	/** The collection the cited article or artifact is published in. */
	publishedIn?: Citation_CitedArtifact_PublicationForm_PublishedIn;
	/** Volume number of journal or other collection in which the article is published. */
	volume?: string;
	/** Extensions for volume */
	_volume?: Element;
}

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
		citedMedium: z.lazy(getCodeableConceptSchema).optional(),
		copyright: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_copyright: z.lazy(getElementSchema).optional(),
		firstPage: fhirString().optional(),
		_firstPage: z.lazy(getElementSchema).optional(),
		issue: fhirString().optional(),
		_issue: z.lazy(getElementSchema).optional(),
		language: z.lazy(getCodeableConceptSchema).array().optional(),
		lastPage: fhirString().optional(),
		_lastPage: z.lazy(getElementSchema).optional(),
		lastRevisionDate: fhirDateTime().optional(),
		_lastRevisionDate: z.lazy(getElementSchema).optional(),
		pageCount: fhirString().optional(),
		_pageCount: z.lazy(getElementSchema).optional(),
		pageString: fhirString().optional(),
		_pageString: z.lazy(getElementSchema).optional(),
		publicationDateSeason: fhirString().optional(),
		_publicationDateSeason: z.lazy(getElementSchema).optional(),
		publicationDateText: fhirString().optional(),
		_publicationDateText: z.lazy(getElementSchema).optional(),
		publishedIn: z
			.lazy(getCitation_CitedArtifact_PublicationForm_PublishedInSchema)
			.optional(),
		volume: fhirString().optional(),
		_volume: z.lazy(getElementSchema).optional(),
	}).strict();

export const Citation_CitedArtifact_PublicationFormSchema =
	Citation_CitedArtifact_PublicationFormSchemaInternal as z.ZodType<Citation_CitedArtifact_PublicationForm>;
