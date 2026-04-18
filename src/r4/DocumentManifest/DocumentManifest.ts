// Profile: http://hl7.org/fhir/StructureDefinition/DocumentManifest
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import {
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { DocumentManifest_Related } from "./DocumentManifest_Related";
import { DocumentManifest_RelatedSchemaInternal } from "./DocumentManifest_Related";

/** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
export interface DocumentManifest extends DomainResource {
	/** Identifies who is the author of the manifest. Manifest author is not necessarly the author of the references included. */
	author?: Array<Reference>;
	/** The list of Resources that consist of the parts of this manifest. */
	content: Array<Reference>;
	/** When the document manifest was created for submission to the server (not necessarily the same thing as the actual resource last modified time, since it may be modified, replicated, etc.). */
	created?: string;
	/** Extensions for created */
	_created?: Element;
	/** Human-readable description of the source document. This is sometimes known as the "title". */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Other identifiers associated with the document manifest, including version independent  identifiers. */
	identifier?: Array<Identifier>;
	/** A single identifier that uniquely identifies this manifest. Principally used to refer to the manifest in non-FHIR contexts. */
	masterIdentifier?: Identifier;
	/** A patient, practitioner, or organization for which this set of documents is intended. */
	recipient?: Array<Reference>;
	/** Related identifiers or resources associated with the DocumentManifest. */
	related?: Array<DocumentManifest_Related>;
	/** This is a DocumentManifest resource. */
	resourceType: "DocumentManifest";
	/** Identifies the source system, application, or software that produced the document manifest. */
	source?: string;
	/** Extensions for source */
	_source?: Element;
	/** The status of this document manifest. */
	status: "current" | "entered-in-error" | "superseded";
	/** Extensions for status */
	_status?: Element;
	/** Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case). */
	subject?: Reference;
	/** The code specifying the type of clinical activity that resulted in placing the associated content into the DocumentManifest. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDocumentManifest_RelatedSchema =
	(): z.ZodType<DocumentManifest_Related> =>
		DocumentManifest_RelatedSchemaInternal as z.ZodType<DocumentManifest_Related>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DocumentManifestSchemaInternal =
	DomainResourceSchemaInternal.extend({
		author: z.lazy(getReferenceSchema).array().optional(),
		content: z.lazy(getReferenceSchema).array(),
		created: fhirDateTime().optional(),
		_created: z.lazy(getElementSchema).optional(),
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		masterIdentifier: z.lazy(getIdentifierSchema).optional(),
		recipient: z.lazy(getReferenceSchema).array().optional(),
		related: z.lazy(getDocumentManifest_RelatedSchema).array().optional(),
		resourceType: z.literal("DocumentManifest"),
		source: fhirUri().optional(),
		_source: z.lazy(getElementSchema).optional(),
		status: z.enum(["current", "entered-in-error", "superseded"]),
		_status: z.lazy(getElementSchema).optional(),
		subject: z.lazy(getReferenceSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.author,
				"author",
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				[
					"Device",
					"Organization",
					"Patient",
					"Practitioner",
					"PractitionerRole",
					"RelatedPerson",
				],
				ctx,
			);
			validateReferenceTarget(
				record.content,
				"content",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
			validateReferenceTarget(
				record.recipient,
				"recipient",
				[
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				[
					"Organization",
					"Patient",
					"Practitioner",
					"PractitionerRole",
					"RelatedPerson",
				],
				ctx,
			);
			validateReferenceTarget(
				record.subject,
				"subject",
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Group",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
				],
				["Device", "Group", "Patient", "Practitioner"],
				ctx,
			);
		});

export const DocumentManifestSchema =
	DocumentManifestSchemaInternal as z.ZodType<DocumentManifest>;
