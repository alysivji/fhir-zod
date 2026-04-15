// Profile: http://hl7.org/fhir/StructureDefinition/BodySite
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Base StructureDefinition for BodySite Resource */
export interface BodySite extends DomainResource {
	/** Whether this body site is in active use. */
	active?: boolean;
	/** Extensions for active */
	_active?: Element;
	/** Named anatomical location - ideally coded where possible. */
	code?: CodeableConcept;
	/** A summary, charactarization or explanation of the anatomic location. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Identifier for this instance of the anatomical location. */
	identifier?: Array<Identifier>;
	/** Image or images used to identify a location. */
	image?: Array<Attachment>;
	/** The person to which the body site belongs. */
	patient: Reference;
	/** Qualifier to refine the anatomical location.  These include qualifiers for laterality, relative location, directionality, number, and plane. */
	qualifier?: Array<CodeableConcept>;
	/** This is a BodySite resource. */
	resourceType: "BodySite";
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const BodySiteSchemaInternal = DomainResourceSchemaInternal.extend({
	active: z.boolean().optional(),
	_active: z.lazy(getElementSchema).optional(),
	code: z.lazy(getCodeableConceptSchema).optional(),
	description: fhirString().optional(),
	_description: z.lazy(getElementSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	image: z.lazy(getAttachmentSchema).array().optional(),
	patient: z.lazy(getReferenceSchema),
	qualifier: z.lazy(getCodeableConceptSchema).array().optional(),
	resourceType: z.literal("BodySite"),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.patient,
			"patient",
			["http://hl7.org/fhir/StructureDefinition/Patient"],
			["Patient"],
			ctx,
		);
	});

export const BodySiteSchema = BodySiteSchemaInternal as z.ZodType<BodySite>;
