// Profile: http://hl7.org/fhir/StructureDefinition/List
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import { fhirDateTime, fhirString } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { List_Entry } from "./List_Entry";
import { List_EntrySchemaInternal } from "./List_Entry";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A list is a curated collection of resources. */
export interface List extends DomainResource {
	/** This code defines the purpose of the list - why it was created. */
	code?: CodeableConcept;
	/** The date that the list was prepared. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** If the list is empty, why the list is empty. */
	emptyReason?: CodeableConcept;
	/** The encounter that is the context in which this list was created. */
	encounter?: Reference;
	/** Entries in this list. */
	entry?: Array<List_Entry>;
	/** Identifier for the List assigned for business purposes outside the context of FHIR. */
	identifier?: Array<Identifier>;
	/** How this list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted. */
	mode: "changes" | "snapshot" | "working";
	/** Extensions for mode */
	_mode?: Element;
	/** Comments that apply to the overall list. */
	note?: Array<Annotation>;
	/** What order applies to the items in the list. */
	orderedBy?: CodeableConcept;
	/** This is a List resource. */
	resourceType: "List";
	/** The entity responsible for deciding what the contents of the list were. Where the list was created by a human, this is the same as the author of the list. */
	source?: Reference;
	/** Indicates the current state of this list. */
	status: "current" | "entered-in-error" | "retired";
	/** Extensions for status */
	_status?: Element;
	/** The common subject (or patient) of the resources that are in the list if there is one. */
	subject?: Reference;
	/** A label for the list assigned by the author. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getList_EntrySchema = (): z.ZodType<List_Entry> =>
	List_EntrySchemaInternal as z.ZodType<List_Entry>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ListSchemaInternal = DomainResourceSchemaInternal.extend({
	code: z.lazy(getCodeableConceptSchema).optional(),
	date: fhirDateTime().optional(),
	_date: z.lazy(getElementSchema).optional(),
	emptyReason: z.lazy(getCodeableConceptSchema).optional(),
	encounter: z.lazy(getReferenceSchema).optional(),
	entry: z.lazy(getList_EntrySchema).array().optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	mode: z.enum(["changes", "snapshot", "working"]),
	_mode: z.lazy(getElementSchema).optional(),
	note: z.lazy(getAnnotationSchema).array().optional(),
	orderedBy: z.lazy(getCodeableConceptSchema).optional(),
	resourceType: z.literal("List"),
	source: z.lazy(getReferenceSchema).optional(),
	status: z.enum(["current", "entered-in-error", "retired"]),
	_status: z.lazy(getElementSchema).optional(),
	subject: z.lazy(getReferenceSchema).optional(),
	title: fhirString().optional(),
	_title: z.lazy(getElementSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.encounter,
			"encounter",
			["http://hl7.org/fhir/StructureDefinition/Encounter"],
			["Encounter"],
			ctx,
		);
		validateReferenceTarget(
			record.source,
			"source",
			[
				"http://hl7.org/fhir/StructureDefinition/Device",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
			],
			["Device", "Patient", "Practitioner", "PractitionerRole"],
			ctx,
		);
		validateReferenceTarget(
			record.subject,
			"subject",
			[
				"http://hl7.org/fhir/StructureDefinition/Device",
				"http://hl7.org/fhir/StructureDefinition/Group",
				"http://hl7.org/fhir/StructureDefinition/Location",
				"http://hl7.org/fhir/StructureDefinition/Patient",
			],
			["Device", "Group", "Location", "Patient"],
			ctx,
		);
	});

export const ListSchema = ListSchemaInternal as z.ZodType<List>;
