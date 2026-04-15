// Profile: http://hl7.org/fhir/StructureDefinition/EvidenceReport
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Narrative } from "./Narrative";
import { NarrativeSchemaInternal } from "./Narrative";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The root of the sections that make up the composition. */
export interface EvidenceReport_Section extends BackboneElement {
	/** Identifies who is responsible for the information in this section, not necessarily who typed it in. */
	author?: Array<Reference>;
	/** If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason. */
	emptyReason?: CodeableConcept;
	/** Specifies any type of classification of the evidence report. */
	entryClassifier?: Array<CodeableConcept>;
	/** Quantity as content. */
	entryQuantity?: Array<Quantity>;
	/** A reference to the actual resource from which the narrative in the section is derived. */
	entryReference?: Array<Reference>;
	/** A code identifying the kind of content contained within the section. This should be consistent with the section title. */
	focus?: CodeableConcept;
	/** A definitional Resource identifying the kind of content contained within the section. This should be consistent with the section title. */
	focusReference?: Reference;
	/** How the entry list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted. */
	mode?: "changes" | "snapshot" | "working";
	/** Extensions for mode */
	_mode?: Element;
	/** Specifies the order applied to the items in the section entries. */
	orderedBy?: CodeableConcept;
	/** A nested sub-section within this section. */
	section?: Array<unknown>;
	/** A human-readable narrative that contains the attested content of the section, used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is peferred to contain sufficient detail to make it acceptable for a human to just read the narrative. */
	text?: Narrative;
	/** The label for this particular section.  This will be part of the rendered content for the document, and is often used to build a table of contents. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
	NarrativeSchemaInternal as z.ZodType<Narrative>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const EvidenceReport_SectionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		author: z.lazy(getReferenceSchema).array().optional(),
		emptyReason: z.lazy(getCodeableConceptSchema).optional(),
		entryClassifier: z.lazy(getCodeableConceptSchema).array().optional(),
		entryQuantity: z.lazy(getQuantitySchema).array().optional(),
		entryReference: z.lazy(getReferenceSchema).array().optional(),
		focus: z.lazy(getCodeableConceptSchema).optional(),
		focusReference: z.lazy(getReferenceSchema).optional(),
		mode: z.enum(["changes", "snapshot", "working"]).optional(),
		_mode: z.lazy(getElementSchema).optional(),
		orderedBy: z.lazy(getCodeableConceptSchema).optional(),
		section: z.unknown().array().optional(),
		text: z.lazy(getNarrativeSchema).optional(),
		title: fhirString().optional(),
		_title: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.author,
				"author",
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Group",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Person",
				],
				["Device", "Group", "Organization", "Person"],
				ctx,
			);
			validateReferenceTarget(
				record.entryReference,
				"entryReference",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
			validateReferenceTarget(
				record.focusReference,
				"focusReference",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
		});

export const EvidenceReport_SectionSchema =
	EvidenceReport_SectionSchemaInternal as z.ZodType<EvidenceReport_Section>;
