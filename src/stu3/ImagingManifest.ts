// Profile: http://hl7.org/fhir/StructureDefinition/ImagingManifest
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T01:26:20.392Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { ImagingManifest_Study } from "./ImagingManifest_Study";
import { ImagingManifest_StudySchemaInternal } from "./ImagingManifest_Study";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Base StructureDefinition for ImagingManifest Resource */
export interface ImagingManifest extends DomainResource {
	/** Author of ImagingManifest. It can be a human author or a device which made the decision of the SOP instances selected. For example, a radiologist selected a set of imaging SOP instances to attach in a diagnostic report, and a CAD application may author a selection to describe SOP instances it used to generate a detection conclusion. */
	author?: Reference;
	/** Date and time when the selection of the referenced instances were made. It is (typically) different from the creation date of the selection resource, and from dates associated with the referenced instances (e.g. capture time of the referenced image). */
	authoringTime?: string;
	/** Extensions for authoringTime */
	_authoringTime?: Element;
	/**
	 * Free text narrative description of the ImagingManifest.
	 * The value may be derived from the DICOM Standard Part 16, CID-7010 descriptions (e.g. Best in Set, Complete Study Content). Note that those values cover the wide range of uses of the DICOM Key Object Selection object, several of which are not supported by ImagingManifest. Specifically, there is no expected behavior associated with descriptions that suggest referenced images be removed or not used.
	 */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Unique identifier of the DICOM Key Object Selection (KOS) that this resource represents. */
	identifier?: Identifier;
	/** A patient resource reference which is the patient subject of all DICOM SOP Instances in this ImagingManifest. */
	patient: Reference;
	/** This is a ImagingManifest resource. */
	resourceType: "ImagingManifest";
	/** Study identity and locating information of the DICOM SOP instances in the selection. */
	study: Array<ImagingManifest_Study>;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getImagingManifest_StudySchema = (): z.ZodType<ImagingManifest_Study> =>
	ImagingManifest_StudySchemaInternal as z.ZodType<ImagingManifest_Study>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ImagingManifestSchemaInternal =
	DomainResourceSchemaInternal.extend({
		author: z.lazy(getReferenceSchema).optional(),
		authoringTime: fhirDateTime().optional(),
		_authoringTime: z.lazy(getElementSchema).optional(),
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).optional(),
		patient: z.lazy(getReferenceSchema),
		resourceType: z.literal("ImagingManifest"),
		study: z.lazy(getImagingManifest_StudySchema).array(),
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
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				["Device", "Organization", "Patient", "Practitioner", "RelatedPerson"],
				ctx,
			);
			validateReferenceTarget(
				record.patient,
				"patient",
				["http://hl7.org/fhir/StructureDefinition/Patient"],
				["Patient"],
				ctx,
			);
		});

export const ImagingManifestSchema =
	ImagingManifestSchemaInternal as z.ZodType<ImagingManifest>;
