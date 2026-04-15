// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Citation_CitedArtifact_Contributorship_Entry_ContributionInstance } from "./Citation_CitedArtifact_Contributorship_Entry_ContributionInstance";
import { Citation_CitedArtifact_Contributorship_Entry_ContributionInstanceSchemaInternal } from "./Citation_CitedArtifact_Contributorship_Entry_ContributionInstance";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** An individual entity named as a contributor, for example in the author list or contributor list. */
export interface Citation_CitedArtifact_Contributorship_Entry
	extends BackboneElement {
	/** Organization affiliated with the contributor. */
	affiliation?: Array<Reference>;
	/** Contributions with accounting for time or number. */
	contributionInstance?: Array<Citation_CitedArtifact_Contributorship_Entry_ContributionInstance>;
	/** This element identifies the specific nature of an individual’s contribution with respect to the cited work. */
	contributionType?: Array<CodeableConcept>;
	/** The identity of the individual contributor. */
	contributor: Reference;
	/** Whether the contributor is the corresponding contributor for the role. */
	correspondingContact?: boolean;
	/** Extensions for correspondingContact */
	_correspondingContact?: Element;
	/** For citation styles that use initials. */
	forenameInitials?: string;
	/** Extensions for forenameInitials */
	_forenameInitials?: Element;
	/** Provides a numerical ranking to represent the degree of contributorship relative to other contributors, such as 1 for first author and 2 for second author. */
	rankingOrder?: number;
	/** Extensions for rankingOrder */
	_rankingOrder?: Element;
	/** The role of the contributor (e.g. author, editor, reviewer, funder). */
	role?: CodeableConcept;
}

const getCitation_CitedArtifact_Contributorship_Entry_ContributionInstanceSchema =
	(): z.ZodType<Citation_CitedArtifact_Contributorship_Entry_ContributionInstance> =>
		Citation_CitedArtifact_Contributorship_Entry_ContributionInstanceSchemaInternal as z.ZodType<Citation_CitedArtifact_Contributorship_Entry_ContributionInstance>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Citation_CitedArtifact_Contributorship_EntrySchemaInternal =
	BackboneElementSchemaInternal.extend({
		affiliation: z.lazy(getReferenceSchema).array().optional(),
		contributionInstance: z
			.lazy(
				getCitation_CitedArtifact_Contributorship_Entry_ContributionInstanceSchema,
			)
			.array()
			.optional(),
		contributionType: z.lazy(getCodeableConceptSchema).array().optional(),
		contributor: z.lazy(getReferenceSchema),
		correspondingContact: z.boolean().optional(),
		_correspondingContact: z.lazy(getElementSchema).optional(),
		forenameInitials: fhirString().optional(),
		_forenameInitials: z.lazy(getElementSchema).optional(),
		rankingOrder: z.number().int().positive().optional(),
		_rankingOrder: z.lazy(getElementSchema).optional(),
		role: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.affiliation,
				"affiliation",
				[
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				],
				["Organization", "PractitionerRole"],
				ctx,
			);
			validateReferenceTarget(
				record.contributor,
				"contributor",
				[
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
				],
				["Organization", "Practitioner"],
				ctx,
			);
		});

export const Citation_CitedArtifact_Contributorship_EntrySchema =
	Citation_CitedArtifact_Contributorship_EntrySchemaInternal as z.ZodType<Citation_CitedArtifact_Contributorship_Entry>;
