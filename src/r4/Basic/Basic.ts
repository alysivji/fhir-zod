// Profile: http://hl7.org/fhir/StructureDefinition/Basic
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { fhirDate } from "../../shared/fhir-primitives";
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

/** Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification. */
export interface Basic extends DomainResource {
	/** Indicates who was responsible for creating the resource instance. */
	author?: Reference;
	/** Identifies the 'type' of resource - equivalent to the resource name for other resources. */
	code: CodeableConcept;
	/** Identifies when the resource was first created. */
	created?: string;
	/** Extensions for created */
	_created?: Element;
	/** Identifier assigned to the resource for business purposes, outside the context of FHIR. */
	identifier?: Array<Identifier>;
	/** This is a Basic resource. */
	resourceType: "Basic";
	/** Identifies the patient, practitioner, device or any other resource that is the "focus" of this resource. */
	subject?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const BasicSchemaInternal = DomainResourceSchemaInternal.extend({
	author: z.lazy(getReferenceSchema).optional(),
	code: z.lazy(getCodeableConceptSchema),
	created: fhirDate().optional(),
	_created: z.lazy(getElementSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	resourceType: z.literal("Basic"),
	subject: z.lazy(getReferenceSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.author,
			"author",
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
			["http://hl7.org/fhir/StructureDefinition/Resource"],
			["Resource"],
			ctx,
		);
	});

export const BasicSchema = BasicSchemaInternal as z.ZodType<Basic>;
