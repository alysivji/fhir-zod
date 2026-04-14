// Profile: http://hl7.org/fhir/StructureDefinition/BodyStructure
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { BodyStructure_IncludedStructure } from "./BodyStructure_IncludedStructure";
import { BodyStructure_IncludedStructureSchemaInternal } from "./BodyStructure_IncludedStructure";
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

/** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
export interface BodyStructure extends DomainResource {
	/** Whether this body site is in active use. */
	active?: boolean;
	/** Extensions for active */
	_active?: Element;
	/** A summary, characterization or explanation of the body structure. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** The anatomical location(s) or region(s) not occupied or represented by the specimen, lesion, or body structure. */
	excludedStructure?: Array<unknown>;
	/** Identifier for this instance of the anatomical structure. */
	identifier?: Array<Identifier>;
	/** Image or images used to identify a location. */
	image?: Array<Attachment>;
	/** The anatomical location(s) or region(s) of the specimen, lesion, or body structure. */
	includedStructure: Array<BodyStructure_IncludedStructure>;
	/** The kind of structure being represented by the body structure at `BodyStructure.location`.  This can define both normal and abnormal morphologies. */
	morphology?: CodeableConcept;
	/** The person to which the body site belongs. */
	patient: Reference;
	/** This is a BodyStructure resource. */
	resourceType: "BodyStructure";
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getBodyStructure_IncludedStructureSchema =
	(): z.ZodType<BodyStructure_IncludedStructure> =>
		BodyStructure_IncludedStructureSchemaInternal as z.ZodType<BodyStructure_IncludedStructure>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const BodyStructureSchemaInternal = DomainResourceSchemaInternal.extend({
	active: z.boolean().optional(),
	_active: z.lazy(getElementSchema).optional(),
	description: z
		.string()
		.regex(/^[\s\S]+$/)
		.optional(),
	_description: z.lazy(getElementSchema).optional(),
	excludedStructure: z.unknown().array().optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	image: z.lazy(getAttachmentSchema).array().optional(),
	includedStructure: z.lazy(getBodyStructure_IncludedStructureSchema).array(),
	morphology: z.lazy(getCodeableConceptSchema).optional(),
	patient: z.lazy(getReferenceSchema),
	resourceType: z.literal("BodyStructure"),
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

export const BodyStructureSchema =
	BodyStructureSchemaInternal as z.ZodType<BodyStructure>;
